/* Memory viewer: photo, video, song, letter, message, gallery, secret. */
const Memories = (() => {
  const root = document.getElementById("viewer"), body = document.getElementById("viewer-body");
  let opener = null, current = null;
  const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const paras = a => (a || []).map(p => `<p>${esc(p)}</p>`).join("");
  const missing = t => `<div class="ph"><span>✦</span><p>${esc(t || "Add your media here")}</p></div>`;
  const img = (src, alt) => `<img src="${esc(src)}" alt="${esc(alt)}" onerror="this.outerHTML='${missing().replace(/'/g, "\\'")}'">`;
  const meta = m => `<div class="meta">${m.date ? `<time>${esc(m.date)}</time>` : ""}<h3>${esc(m.title)}</h3>${m.caption ? `<p>${esc(m.caption)}</p>` : ""}</div>`;

  const views = {
    photo: m => `<figure class="photo-frame">${img(m.media, m.title)}<i class="film"></i></figure>${meta(m)}`,
    gallery: m => `<div class="gallery">${(m.media || []).map(s => `<figure class="photo-frame">${img(s, m.title)}</figure>`).join("")}</div>${meta(m)}`,
    video: m => `<div class="video-wrap"><video controls playsinline preload="metadata" src="${esc(m.media)}" onerror="this.parentNode.innerHTML='${missing("Add your video here").replace(/'/g, "\\'")}'"></video></div>${meta(m)}`,
    song: m => `<div class="card song"><div class="vinyl" id="vinyl"><div class="cover">${m.cover ? `<img src="${esc(m.cover)}" alt="" onerror="this.remove()">` : ""}</div></div><h3>${esc(m.title)}</h3><p class="artist">${esc(m.artist)}</p><p class="song-cap">${esc(m.caption)}</p><button type="button" class="play-btn" id="song-play" aria-label="Play or pause music"><svg class="i-play" viewBox="0 0 24 24" width="22" height="22"><path d="M8 5v14l11-7z" fill="currentColor"/></svg><svg class="i-pause" viewBox="0 0 24 24" width="22" height="22"><path d="M7 5h4v14H7zM13 5h4v14h-4z" fill="currentColor"/></svg></button></div>`,
    letter: m => `<article class="paper letter"><span class="tape"></span>${m.date ? `<time>${esc(m.date)}</time>` : ""}<h3>${esc(m.title)}</h3><div class="text">${paras(m.paragraphs)}</div><p class="sign">${esc(m.signature)}</p></article>`,
    message: m => `<article class="paper letter msg"><span class="tape"></span>${m.date ? `<time>${esc(m.date)}</time>` : ""}<h3>${esc(m.title)}</h3><div class="text"><p>${esc(m.message)}</p></div></article>`
  };
  views.polaroid = m => `<figure class="polaroid" style="--tilt:${Number(m.tilt) || -2}deg"><span class="tape"></span><div class="pol-img">${img(m.media, m.title)}</div><figcaption>${esc(m.caption || m.title)}</figcaption>${m.date ? `<time>${esc(m.date)}</time>` : ""}</figure>`;
  views.secret = views.letter;

  function open(id, from) {
    const m = MEMORIES.find(x => x.id === id); if (!m) return;
    current = m; opener = from || document.activeElement;
    body.innerHTML = (views[m.memoryType] || views.message)(m);
    body.dataset.type = m.memoryType;
    root.hidden = false; root.setAttribute("aria-hidden", "false");
    requestAnimationFrame(() => root.classList.add("open"));
    root.querySelector(".close-btn").focus();
    if (m.music) Music.switchTo(m.music);
    if (m.memoryType === "song") setTimeout(syncSong, 1200);
  }
  function close() {
    if (root.hidden) return;
    root.classList.remove("open"); root.setAttribute("aria-hidden", "true");
    body.querySelectorAll("video,audio").forEach(v => v.pause());
    setTimeout(() => { root.hidden = true; body.innerHTML = ""; }, 450);
    if (current && current.music && SITE_CONFIG.music.returnToMainOnClose) Music.toMain();
    current = null; if (opener && opener.focus) opener.focus();
  }
  function syncSong() { const v = document.getElementById("vinyl"), b = document.getElementById("song-play"); if (!v || !b) return;
    const on = Music.playing; v.classList.toggle("spin", on); b.classList.toggle("on", on); b.setAttribute("aria-pressed", on); }
  root.addEventListener("click", e => {
    if (e.target.closest("#song-play")) { Music.toggle(); setTimeout(syncSong, 450); return; } if (e.target.closest("[data-close]")) close(); });
  addEventListener("keydown", e => { if (e.key === "Escape") close(); });
  return { open, close, esc, paras };
})();
