/* Builds the starfield canvas (3 depth layers) and the scrollable world. */
const Universe = (() => {
  const cv = document.getElementById("stars"), ctx = cv.getContext("2d");
  let W, H, layers = [];
  function seed() {
    W = innerWidth; H = innerHeight; const dpr = Math.min(devicePixelRatio || 1, 2);
    cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const k = W < 700 ? 0.55 : 1;
    const spec = [{ n: 140, sp: 0.04, r: 0.7, a: 0.45 }, { n: 80, sp: 0.12, r: 1.0, a: 0.7 }, { n: 28, sp: 0.35, r: 1.6, a: 0.9 }];
    layers = spec.map(l => ({ ...l, stars: Array.from({ length: Math.round(l.n * k) }, () => ({
      x: Math.random() * W, y: Math.random() * H, p: Math.random() * 6.28, warm: Math.random() < 0.18 })) }));
  }
  function draw(t) {
    ctx.clearRect(0, 0, W, H);
    for (const l of layers) for (const s of l.stars) {
      const sy = (((s.y - Scroll.y * l.sp) % H) + H) % H;
      ctx.globalAlpha = l.a * (Scroll.reduce ? 1 : 0.7 + 0.3 * Math.sin(t / 900 + s.p));
      ctx.fillStyle = s.warm ? "#ffe3d6" : "#dfe6ff";
      ctx.beginPath(); ctx.arc(s.x, sy, l.r, 0, 6.283); ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html) e.innerHTML = html; return e; };
  function object(id, a, kind, hue, label) {
    const b = el("button", `celestial ${kind} ${hue || ""}`);
    b.type = "button"; b.dataset.id = id; b.dataset.depth = a.depth || 1;
    b.style.cssText = `left:${a.x}%;top:${a.y}vh;--s:${a.size}px`;
    b.setAttribute("aria-label", label);
    b.innerHTML = `<span class="body"><i class="ring"></i></span><span class="orbit"><u></u><u></u><u></u></span>`;
    return b;
  }
  function build() {
    const world = document.getElementById("world"); world.innerHTML = "";
    SITE_CONFIG.chapters.forEach(c => {
      const s = el("section", "chapter" + (c.final ? " final" : "")); s.id = c.id;
      s.innerHTML = `<div class="chapter-text reveal"><p class="eyebrow">${c.no ? "Chapter " + c.no : "Always"}</p><h2>${c.title}</h2><p class="lead">${c.text}</p></div>`;
      world.appendChild(s);
    });
    const layer = el("div", "objects"); world.appendChild(layer);
    layer.appendChild(object("deneb", ANCHORS.deneb, "star deneb", "", "Deneb, a star"));
    layer.appendChild(object("vega", ANCHORS.vega, "star vega", "", "Vega, a star"));
    MEMORIES.forEach(m => {
      if (m.objectType === "planet") layer.appendChild(object(m.id, m, "planet", m.hue, m.title + ", a planet"));
      else if (m.objectType === "polaroid") layer.appendChild(object(m.id, m, "mini-star", "", "A small star holding a polaroid"));
    });
    [[12, 150, 40], [86, 210, 30], [8, 470, 54], [90, 700, 36]].forEach(([x, y, s], i) => {
      const d = el("span", "planet decor hue" + (i % 3)); d.dataset.depth = 0.75 + i * 0.04;
      d.style.cssText = `left:${x}%;top:${y}vh;--s:${s}px`; d.setAttribute("aria-hidden", "true"); layer.appendChild(d);
    });
  }
  function init() { seed(); build(); addEventListener("resize", seed); requestAnimationFrame(draw);
    const n = document.getElementById("nebula");
    Scroll.hooks.push(y => { if (!Scroll.reduce) n.style.transform = `translate3d(0,${(-y * 0.06).toFixed(1)}px,0)`; }); }
  return { init };
})();
