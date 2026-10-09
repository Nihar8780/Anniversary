/* Background music engine: one <audio>, fade-switching, mute state remembered. */
const Music = (() => {
  const a = new Audio(); a.loop = true; a.preload = "auto";
  let target = SITE_CONFIG.music.volume, muted = false, started = false, current = "", timer;
  try { muted = sessionStorage.getItem("dv-muted") === "1"; } catch (e) {}
  const ui = () => { const b = document.getElementById("music-btn"); if (!b) return;
    const on = started && !muted && !a.paused; b.classList.toggle("on", on); b.setAttribute("aria-pressed", on); };
  function fade(to, ms, done) {
    clearInterval(timer); const from = a.volume, t0 = performance.now();
    timer = setInterval(() => { const k = Math.min(1, (performance.now() - t0) / ms);
      a.volume = Math.max(0, Math.min(1, from + (to - from) * k));
      if (k >= 1) { clearInterval(timer); done && done(); } }, 40);
  }
  a.addEventListener("error", () => { const m = SITE_CONFIG.music.main; if (current && current !== m) { load(m); if (!muted && started) { play(); fade(target, 800); } } });
  function load(src) { current = src; a.src = src; }
  function play() { const p = a.play(); if (p && p.catch) p.catch(() => {}); setTimeout(ui, 300); }
  return {
    start() { started = true; if (!current) load(SITE_CONFIG.music.main); a.volume = 0;
      if (!muted) { play(); fade(target, 2500); } ui(); },
    switchTo(src) { if (!started || !src || src === current) return;
      fade(0, 600, () => { load(src); if (!muted) { play(); fade(target, 900); } }); },
    restart() { if (!started) return; if (muted) { muted = false; try { sessionStorage.setItem("dv-muted", "0"); } catch (e) {} }
      a.currentTime = 0; play(); fade(target, 500); },
    get playing() { return started && !muted && !a.paused; },
    toMain() { this.switchTo(SITE_CONFIG.music.main); },
    toggle() { muted = !muted; try { sessionStorage.setItem("dv-muted", muted ? "1" : "0"); } catch (e) {}
      if (muted) fade(0, 400, () => { a.pause(); ui(); }); else { play(); fade(target, 800); } ui(); }
  };
})();
