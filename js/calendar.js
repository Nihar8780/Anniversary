/* Our special calendar: Nov 2025 → Nov 2026. Special dates come from SPECIAL_DATES. */
const Calendar = (() => {
  const MN = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const WD = ["S","M","T","W","T","F","S"], pad = n => String(n).padStart(2, "0");
  const html = () => `<section class="cal" aria-label="Our special calendar">
    <div class="cal-head"><button type="button" class="cal-nav" data-nav="-1" aria-label="Previous month">&#8249;</button><h3 class="cal-title"></h3><button type="button" class="cal-nav" data-nav="1" aria-label="Next month">&#8250;</button></div>
    <div class="cal-wd">${WD.map(d => `<span>${d}</span>`).join("")}</div>
    <div class="cal-grid"></div><div class="cal-memory" aria-live="polite"></div></section>`;
  function mount(host) {
    host.innerHTML = html();
    const root = host.firstElementChild, grid = root.querySelector(".cal-grid"), title = root.querySelector(".cal-title"), mem = root.querySelector(".cal-memory");
    const [sy, sm] = SITE_CONFIG.calendar.start.split("-").map(Number), [ey, em] = SITE_CONFIG.calendar.end.split("-").map(Number);
    const total = (ey - sy) * 12 + (em - sm) + 1, sp = {};
    SPECIAL_DATES.forEach(d => sp[d.date] = d);
    let i = 0;
    const firstSp = SPECIAL_DATES.map(d => d.date).sort()[0];
    if (firstSp) { const [y, m] = firstSp.split("-").map(Number); const k = (y - sy) * 12 + (m - sm); if (k >= 0 && k < total) i = k; }
    const hint = () => { mem.innerHTML = `<p class="cal-hint">touch a glowing date ✦</p>`; mem.classList.remove("has"); };
    function show(date) {
      const d = sp[date]; if (!d) return; const e = Memories.esc;
      const [y, m, dd] = date.split("-").map(Number);
      mem.innerHTML = `${d.photo ? `<img src="${e(d.photo)}" alt="" onerror="this.remove()">` : ""}<div><time>${dd} ${MN[m - 1]} ${y}</time><h4>${e(d.title)}</h4><p>${e(d.text)}</p></div>`;
      mem.classList.add("has");
    }
    function draw() {
      const y = sy + Math.floor((sm - 1 + i) / 12), m = (sm - 1 + i) % 12;
      title.textContent = `${MN[m]} ${y}`;
      const first = new Date(y, m, 1).getDay(), n = new Date(y, m + 1, 0).getDate(); let h = "";
      for (let k = 0; k < first; k++) h += "<span class='day blank'></span>";
      for (let d = 1; d <= n; d++) { const key = `${y}-${pad(m + 1)}-${pad(d)}`;
        h += sp[key] ? `<button type="button" class="day sp" data-date="${key}" aria-label="${d} ${MN[m]} ${y}: ${Memories.esc(sp[key].title)}">${d}</button>` : `<span class="day">${d}</span>`; }
      grid.innerHTML = h;
      root.querySelector('[data-nav="-1"]').disabled = i === 0; root.querySelector('[data-nav="1"]').disabled = i === total - 1;
    }
    root.addEventListener("click", e => {
      const nv = e.target.closest("[data-nav]"); if (nv) { i = Math.max(0, Math.min(total - 1, i + Number(nv.dataset.nav))); draw(); hint(); return; }
      const b = e.target.closest(".sp"); if (b) show(b.dataset.date);
    });
    root.addEventListener("mouseover", e => { const b = e.target.closest(".sp"); if (b) show(b.dataset.date); });
    root.addEventListener("focusin", e => { const b = e.target.closest(".sp"); if (b) show(b.dataset.date); });
    draw(); hint();
  }
  return { mount };
})();
