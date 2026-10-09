/* Click/tap on celestial objects + desktop cursor glow. */
const Celestial = (() => {
  function init() {
    document.getElementById("world").addEventListener("click", e => {
      const o = e.target.closest(".celestial"); if (!o) return;
      const id = o.dataset.id;
      if (id === "deneb") DenebLock.open(o);
      else if (id === "vega") Memories.open(ANCHORS.vega.memoryId, o);
      else Memories.open(id, o);
    });
    if (matchMedia("(hover: hover) and (pointer: fine)").matches && !Scroll.reduce) {
      const c = document.getElementById("cursor"); document.body.classList.add("has-cursor");
      let x = 0, y = 0, rx = 0, ry = 0;
      addEventListener("mousemove", e => { x = e.clientX; y = e.clientY;
        c.classList.toggle("hot", !!e.target.closest(".celestial, button, .pad")); });
      (function loop() { rx += (x - rx) * 0.18; ry += (y - ry) * 0.18;
        c.firstElementChild.style.transform = `translate(${x}px,${y}px)`; c.lastElementChild.style.transform = `translate(${rx}px,${ry}px)`;
        requestAnimationFrame(loop); })();
    }
  }
  return { init };
})();
