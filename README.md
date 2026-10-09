# Deneb × Vega
Open the folder in VS Code → right-click `index.html` → **Open with Live Server** (or just double-click it).

## Where things go
- Photos → `assets/images/photos/` · Videos → `assets/videos/` · Songs → `assets/audio/` · Letters → text in `js/data.js` (`paragraphs`)
## What to edit (all in `js/data.js`)
- Background song: `SITE_CONFIG.music.main` · Deneb song: `SITE_CONFIG.deneb.music` · PIN: `SITE_CONFIG.deneb.pin`
- Secret message: `SITE_CONFIG.deneb.secret` · Nicknames: `SITE_CONFIG.girlfriend` · Chapter text: `SITE_CONFIG.chapters`
- Planet song: the `music` field on that memory · Captions: `caption`
## Add a planet
Copy a block in `MEMORIES`, give it a new `id` (e.g. `planet-06`), set `x` (%) and `y` (vh from top), `memoryType`, and media path.
## Test
- PIN: scroll to the big warm star (Deneb), tap it, enter the PIN. A wrong PIN shakes softly.
- Mobile: Chrome DevTools → Ctrl+Shift+M → iPhone/Pixel. Or open Live Server's network URL on your phone.
