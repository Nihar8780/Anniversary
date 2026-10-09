/* Deneb: pale-pink PIN lock, then the private area. PIN lives in data.js */
const DenebLock = (() => {
  const root = document.getElementById("lock"), box = document.getElementById("lock-body");
  let syncT, entry = "", opener = null, unlocked = false, busy = false;
  const cfg = () => SITE_CONFIG.deneb;
  const keys = ["1","2","3","4","5","6","7","8","9","","0","⌫"];
  function render() {
    clearInterval(syncT); entry = ""; busy = false; root.classList.remove("unlocked");
    box.innerHTML = `<h2 class="lock-title">${Memories.esc(cfg().lockTitle)}</h2><p class="lock-hint">${Memories.esc(cfg().lockHint)}</p>
      <div class="dots" id="dots" aria-live="polite" aria-label="PIN, 0 of 4 digits">${"<i></i>".repeat(4)}</div>
      <p class="lock-msg" id="lock-msg" role="status"></p>
      <div class="pad">${keys.map(k => k === "" ? "<span></span>" : `<button type="button" data-k="${k}" aria-label="${k === "⌫" ? "Delete" : k}">${k}</button>`).join("")}</div>`;
  }
  function dots() { [...document.querySelectorAll("#dots i")].forEach((d, i) => d.classList.toggle("on", i < entry.length));
    document.getElementById("dots").setAttribute("aria-label", `PIN, ${entry.length} of 4 digits`); }
  function press(k) {
    if (busy || unlocked) return;
    if (k === "⌫") entry = entry.slice(0, -1); else if (/^\d$/.test(k) && entry.length < 4) entry += k; else return;
    dots(); document.getElementById("lock-msg").textContent = "";
    if (entry.length === 4) check();
  }
  function check() {
    busy = true;
    if (entry === String(cfg().pin)) { setTimeout(success, 250); return; }
    const d = document.getElementById("dots"); d.classList.add("shake");
    document.getElementById("lock-msg").textContent = "not quite… try again, softly";
    setTimeout(() => { d.classList.remove("shake"); entry = ""; dots(); busy = false; }, 650);
  }
  function burst() {
    for (let i = 0; i < (innerWidth < 700 ? 22 : 36); i++) {
      const p = document.createElement("span"); p.className = "spark";
      const a = Math.random() * 6.28, r = 90 + Math.random() * Math.min(innerWidth, 500) * 0.6;
      p.style.cssText = `--dx:${Math.cos(a) * r}px;--dy:${Math.sin(a) * r}px;animation-delay:${Math.random() * 0.2}s`;
      root.appendChild(p); setTimeout(() => p.remove(), 1600);
    }
  }
  function success() {
    unlocked = true; root.classList.add("unlocked"); document.querySelectorAll("#dots i").forEach(d => d.classList.add("on", "glow"));
    burst();
    setTimeout(() => {
      if (cfg().music) Music.switchTo(cfg().music);   // new song starts as the letter appears
      const s = cfg().secret;
      const hp = cfg();
      box.innerHTML = `<div class="secret-layout"><div class="sl-cal" id="sl-cal"></div>
        <article class="paper letter secret"><span class="tape"></span>${s.date ? `<time>${Memories.esc(s.date)}</time>` : ""}<h3>${Memories.esc(s.title)}</h3><div class="text">${Memories.paras(s.paragraphs)}</div><p class="sign">${Memories.esc(s.signature)}</p></article>
        <aside class="heart-player"><div class="vinyl" id="hp-vinyl"><div class="cover">${hp.cover ? `<img src="${Memories.esc(hp.cover)}" alt="" onerror="this.remove()">` : ""}</div></div>
        <p class="hp-label">${Memories.esc(hp.playerLabel || "")}</p>
        <div class="hp-ctrl"><button type="button" id="hp-prev" aria-label="Previous (replay song)"><svg viewBox="0 0 24 24" width="22" height="22"><path d="M6 6h2v12H6zM9.5 12 18 6v12z" fill="currentColor"/></svg></button>
        <button type="button" id="hp-play" class="main" aria-label="Play or pause"><svg class="i-play" viewBox="0 0 24 24" width="26" height="26"><path d="M8 5v14l11-7z" fill="currentColor"/></svg><svg class="i-pause" viewBox="0 0 24 24" width="26" height="26"><path d="M7 5h4v14H7zM13 5h4v14h-4z" fill="currentColor"/></svg></button>
        <button type="button" id="hp-next" aria-label="Next (replay song)"><svg viewBox="0 0 24 24" width="22" height="22"><path d="M16 6h2v12h-2zM14.5 12 6 18V6z" fill="currentColor"/></svg></button></div></aside></div>`;
      Calendar.mount(document.getElementById("sl-cal")); startSync();
    }, 1100);
  }
  function sync() { const v = document.getElementById("hp-vinyl"), b = document.getElementById("hp-play"); if (!v || !b) return;
    const on = Music.playing; v.classList.toggle("spin", on); b.classList.toggle("on", on); b.setAttribute("aria-pressed", on); }
  function startSync() { clearInterval(syncT); syncT = setInterval(sync, 700); sync(); }
  function open(from) {
    opener = from || document.activeElement; unlocked = false; render();
    root.hidden = false; root.setAttribute("aria-hidden", "false");
    document.body.classList.add("dim");
    requestAnimationFrame(() => root.classList.add("open")); document.getElementById("lock-close").focus();
  }
  function close() {
    if (root.hidden) return; clearInterval(syncT);
    root.classList.remove("open"); root.setAttribute("aria-hidden", "true"); document.body.classList.remove("dim");
    setTimeout(() => { root.hidden = true; box.innerHTML = ""; }, 600);
    if (unlocked && SITE_CONFIG.music.returnToMainOnClose) Music.toMain();
    unlocked = false; if (opener && opener.focus) opener.focus();
  }
  box.addEventListener("click", e => { const b = e.target.closest("[data-k]"); if (b) press(b.dataset.k);
    if (e.target.closest("#hp-play")) { Music.toggle(); setTimeout(sync, 450); }
    else if (e.target.closest("#hp-prev,#hp-next")) { Music.restart(); setTimeout(sync, 450); } });
  document.getElementById("lock-close").addEventListener("click", close);
  addEventListener("keydown", e => { if (root.hidden) return;
    if (e.key === "Escape") close(); else if (e.key === "Backspace") press("⌫"); else if (/^\d$/.test(e.key)) press(e.key); });
  return { open, close };
})();
