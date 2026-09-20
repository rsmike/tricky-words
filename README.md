# Tricky words

A small static page for learning weekly word lists: meanings and spellings. No build step, no server, no accounts.

```
index.html      the app (never needs touching week to week)
lists.js        all the word lists - the only file edited each week
CLAUDE.md       prompt for Claude: photo of the sheet in, lists.js block out
fonts/          self-hosted Fredoka + Lexend (SIL Open Font License)
icon*.png, manifest.webmanifest   home-screen icons, and the manifest that lets Android install it as an app
```

### Groups (tags)

Every list carries a `tag`, e.g. `espresso` or `cappuccino`. Each device remembers the tag of the last list it opened (localStorage) and always opens the **newest list with that tag**. So with two lists a week, cappuccino children land on the new cappuccino list even if the espresso one was published later.

- First visit on a device (nothing remembered yet): the newest list overall opens. If that is the wrong group, switch once and it sticks.
- Switching group: **Other lists**, open any list of the other group. That group is then remembered.
- **A list with no tag is for everyone** (e.g. a common midterm set). While it is the newest list overall, every device shows it and forgets its remembered tag. This doubles as the way to flush stale tags. Once tagged lists resume, everyone gets the newest one and switches by hand once.
- A list picked by hand from **Other lists** stays selected for that tab until the device's default list changes.
- A remembered tag that no longer exists in `lists.js` is ignored.
- Spell the tag identically every week. `capuccino` next to `cappuccino` silently creates a third group.

### List format

```js
{
  id: "2026-09-24-b-words-espresso",   // unique, and never changed afterwards (stars are saved against it)
  tag: "espresso",            // the group; spelt exactly the same every week. Omit for a list meant for everyone
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
- The **?** button on the home screen explains how to add the page to the Home Screen (steps for the current device come first). It is highlighted until opened once on that device.
