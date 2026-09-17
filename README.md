# Tricky words

A small static page for learning weekly word lists: meanings and spellings. No build step, no server, no accounts.

```
index.html      the app (never needs touching week to week)
lists.js        all the word lists - the only file edited each week
NEW-LIST-PROMPT.md   prompt for Claude: photo of the sheet in, lists.js block out
fonts/          self-hosted Fredoka + Lexend (SIL Open Font License)
icon.png        home-screen icon
```

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
