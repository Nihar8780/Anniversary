/* App bootstrap */
(function () {
  const $ = id => document.getElementById(id);
  document.title = "Deneb × Vega";
  $("gate-eyebrow").textContent = SITE_CONFIG.intro.eyebrow;
  $("gate-title").textContent = SITE_CONFIG.intro.title;
  $("enter-label").textContent = SITE_CONFIG.intro.enterLabel;
  Universe.init(); Celestial.init(); Scroll.collect(); Scroll.reveal();
  scrollTo(0, 0); if ("scrollRestoration" in history) history.scrollRestoration = "manual";

  $("enter").addEventListener("click", () => {
    Music.start(); $("gate").classList.add("gone");
    document.body.classList.remove("locked"); document.body.classList.add("entered");
    setTimeout(() => ($("gate").hidden = true), 1600);
  });
  $("music-btn").addEventListener("click", () => Music.toggle());
  $("home-btn").addEventListener("click", () => scrollTo({ top: 0, behavior: Scroll.reduce ? "auto" : "smooth" }));
})();
