# Tricky words

A small static page for learning weekly word lists: meanings and spellings. No build step, no server, no accounts.

```
index.html      the app (never needs touching week to week)
lists.js        all the word lists - the only file edited each week
NEW-LIST-PROMPT.md   prompt for Claude: photo of the sheet in, lists.js block out
fonts/          self-hosted Fredoka + Lexend (SIL Open Font License)
icon.png        home-screen icon
```

## Put it on GitHub Pages (one-off, about 5 minutes)

1. On github.com: **New repository**. Name it e.g. `tricky-words`. Set it to **Public** (Pages from a private repo needs GitHub Pro or Team, and the published site is public either way). Create.
2. On the new repo page: **uploading an existing file**. Drag in everything from this folder: `index.html`, `lists.js`, `icon.png`, the two `.md` files and the whole `fonts` folder. **Commit changes**.
3. **Settings > Pages**. Under *Build and deployment*: Source = **Deploy from a branch**, Branch = **main**, folder = **/ (root)**. **Save**.
4. Wait a minute, refresh the Pages settings screen. It shows the live address: `https://YOUR-USERNAME.github.io/tricky-words/`
5. On the iPad: open that address in Safari, then **Share > Add to Home Screen**. It opens full-screen like an app.

Command-line version of steps 1-2, if you prefer:

```
cd tricky-words-site
git init -b main && git add . && git commit -m "Tricky words"
gh repo create tricky-words --public --source=. --push
```

## Add a new list each week (about 1 minute)

1. Get the new block: new Claude chat, attach the photo of the sheet, paste in the prompt from `NEW-LIST-PROMPT.md`.
2. Open `lists.js` on github.com and click the pencil (**Edit this file**).
3. Paste the new list block at the **top** of the array, straight after `window.WORD_LISTS = [`. Mind the comma after its closing `}`.
4. **Commit changes**. It is live in a minute or two. GitHub caches files for up to 10 minutes, so a device that had the page open may need that long plus a reload.

The list with the newest `date` opens by default. Older lists are under **Other lists** on the home screen. If a child picks an older list it stays selected for that tab, until a newer list is published - then the app jumps to the new one.

### List format

```js
{
  id: "2026-09-24-b-words",   // unique, and never changed afterwards (stars are saved against it)
  title: "B words",
  date: "2026-09-24",         // YYYY-MM-DD
  words: [
    { w: "bizarre", m: "very strange",
      s: "A {w} noise came from the attic.",    // optional, {w} marks the gap
      chunks: "bi|zarre",                        // optional, must rebuild the word exactly
      tip: "One *z*, two *r*s.",                 // optional, *asterisks* = bold
      decoys: "sa" },                            // optional, wrong letters for tile mode
    { w: "almond", m: "a nut" }                  // the bare minimum also works
  ]
},
```

Anything optional that is left out is simply not shown; decoy letters get picked automatically. Hyphens, apostrophes and spaces in words are handled (the keyboard grows an extra row for them).

If the page shows "No word lists yet", `lists.js` has a syntax error - nearly always a missing comma or quote. The browser console names the line.

## Progress and privacy

- Stars live in the browser's `localStorage` on each device. Nothing is sent anywhere, there is no analytics and no third-party requests (fonts are served from this repo).
- Consequences: progress does not sync between devices; clearing Safari website data wipes it; Safari and the Home Screen icon keep **separate** storage on iOS, so pick one way of opening it and stick to it.
- One set of stars per device. Two children sharing an iPad would share stars.
- Sound can be switched off on the home screen (saved per device). On desktop Firefox for macOS it starts off, because Firefox's bridge to the macOS voice makes a loud pop at the end of every word; it can still be switched on there. iPads are unaffected, including Firefox for iPad.
