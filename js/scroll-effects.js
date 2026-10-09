/* Scroll engine: one rAF loop. Universe + parallax objects read Scroll.y */
const Scroll = (() => {
  const S = { y: 0, reduce: matchMedia("(prefers-reduced-motion: reduce)").matches, items: [], hooks: [] };
  let ticking = false;
  const onScroll = () => { S.y = window.scrollY; if (!ticking) { ticking = true; requestAnimationFrame(frame); } };
  function frame() {
    ticking = false;
    if (!S.reduce) for (const it of S.items) it.el.style.transform = `translate3d(0,${(S.y * (1 - it.d)).toFixed(1)}px,0)`;
    const max = document.documentElement.scrollHeight - innerHeight;
    const bar = document.querySelector("#progress i"); if (bar) bar.style.transform = `scaleY(${max > 0 ? S.y / max : 0})`;
    document.body.classList.toggle("calm", max > 0 && S.y > max - innerHeight * 0.8);
    document.body.classList.toggle("scrolled", S.y > 80);
    S.hooks.forEach(h => h(S.y));
  }
  S.collect = () => { S.items = [...document.querySelectorAll("[data-depth]")].map(el => ({ el, d: parseFloat(el.dataset.depth) })); frame(); };
  S.reveal = () => {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.25 });
    document.querySelectorAll(".reveal").forEach(el => io.observe(el));
  };
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", () => { S.y = scrollY; frame(); });
  return S;
})();
