# Prompt: turn a photo of a word sheet into a lists.js block

How to use: start a new chat with Claude, attach the photo(s) of this week's sheet, and paste everything below the line. Add a line saying which group it is for, e.g. `Tag: cappuccino`, and optionally `Title: B words` or `Date: 2026-09-24`. For two groups in one week, send both photos and say which is which. For a fully merged file, also paste the current `lists.js`.

---

I run a small static web page called "Tricky words" that helps primary-school children (around 9-10, UK) learn a weekly vocabulary list: both what each word means and how to spell it. The attached photo is this week's sheet from school. It is usually laid out as `word = short memory clue`, but some weeks it is a bare list of spelling words with no clues at all. Please turn it into a new list block for the site's data file, `lists.js`.

## How the app uses the data

Knowing this will help you write good entries.

- **Learn mode** shows the word split into coloured syllable chunks, its meaning, an example sentence and a spelling tip, and reads the word aloud.
- **Meanings quiz** is four-option multiple choice in both directions (word to meaning, meaning to word). The wrong options are the other words' meanings from the same list.
- **Spelling with tiles** shows the meaning and the example sentence with the word blanked out, then offers the word's letters scrambled together with two "decoy" letters that do not belong.
- **Spelling on a keyboard** shows the same clue with no letters given.
- The sentence is also read aloud by the browser's text-to-speech, with the word put back in.

## Format

```js
{
  id: "2026-09-17-a-words-espresso",
  tag: "espresso",
  title: "A words",
  date: "2026-09-17",
  words: [
    { w: "abundant",   m: "lots of",                chunks: "a|bun|dant",    decoys: "eo",
      s: "Blackberries were {w} along the path, so we filled three tubs.",
      tip: "A *bun*, then *d*, then an *ant*." },
    { w: "acquiesce",  m: "accept without arguing", chunks: "ac|qui|esce",   decoys: "kw",
      s: "After lots of begging, Mum decided to {w} and let us stay up.",
      tip: "*c* comes before *q*. It ends in *sce*, like scene." },
    { w: "audacious",  m: "bold / daring",          chunks: "au|da|cious",   decoys: "oh",
      s: "An {w} squirrel stole a chip right off my plate.",
      tip: "It starts *au*, not or. It ends *cious*, like delicious." }
  ]
},
```

## Field by field

**id** - `YYYY-MM-DD-short-slug-tag`, lowercase with hyphens (the tag keeps it unique when two groups get a list with the same title in the same week). Saved progress on every child's device is keyed by it, so it has to be unique and is never changed later.

**tag** - the class group the list is for. The groups are named after coffees; the ones in use so far are `espresso` and `cappuccino`. Each child's device remembers its group and opens the newest list carrying that tag, so the tag has to be spelt identically every week: lowercase, and corrected to the standard spelling even if the sheet's heading or my message misspells it (a sheet once arrived headed "CAPPUCCINIO"). Take the tag from my message, or failing that from the sheet's heading. If I say the list is for everyone (for example a common set before a midterm test), leave the `tag` line out altogether and drop the tag from the id: an untagged list is shown to every group and resets each device's remembered group, so only do this when I ask for it. If you cannot tell which group a sheet is for, ask me rather than guessing: a wrong tag sends the list to the wrong children, and a missing tag sends it to all of them. If I give a group name that is not in the list above, use it, but mention in your notes that it creates a new group.

**date** - the date I give you; otherwise today's date. The app treats the list with the newest date as the current one.

**title** - the one I give you; otherwise the sheet's own heading if it has a meaningful one ("Quick memory clues" is not one). Failing that, derive something short: "B words" if the words share a first letter, else "Week of 24 September".

**w** - the word exactly as printed (including its tense or ending, such as caught), lowercase, British spelling. Keep every word on the sheet, in the sheet's order. If the sheet itself looks misspelt, keep my attention on it in your notes rather than silently correcting it.

**m** - the clue copied verbatim from the sheet, including any slashes. The children are tested against these exact clues at school, so please don't improve or expand them, even where you could write a better definition. One exception: if two words on the sheet have identical clues, tell me, because the quiz cannot tell them apart.

If the sheet gives no clue for a word (a words-only spelling list), write one yourself: a plain meaning of 2 to 6 words that a 9-year-old would understand, in the word's most everyday sense ("vanish from sight" for disappear, "as much as you need" for enough). The app needs a meaning for every word, since it is the prompt in spelling mode and the answer in the quiz. Keep them clearly different from one another within the list, avoid using the word itself or a relative of it, and for a past tense or other inflected form make the meaning match that form ("got hold of something moving" for caught). Say in your notes that the meanings are yours, so I know to check them.

**s** - one example sentence, about 8 to 14 words, with `{w}` exactly once where the word goes.
- Use the word in the exact form given in `w` (add no -ed, -s, -ing or -ly of your own), because the app substitutes the word into the gap as is. Rework the sentence until the base form fits naturally, and make sure a/an before the gap agrees with it.
- The sentence should make the meaning guessable from context, in the sense the clue gives. It is the child's main hint in spelling mode.
- Set it in a 9-year-old's world: school, family, friends, sport, animals, food, weather. A bit of humour is welcome.
- The word, or an obvious relative of it (abundance for abundant), must not appear anywhere else in the sentence, since that would hand over the spelling.
- It is read aloud by text-to-speech, so use plain punctuation and no abbreviations, brackets or long dashes.

**chunks** - the word split by pipes into speakable pieces. The pieces must join back into `w` exactly, letter for letter; the app discards the split otherwise. Follow the spoken syllables, but where there is a choice prefer a split that isolates the awkward part or exposes a small familiar word (`a|bun|dant`, `au|then|tic`, `an|ni|hil|ate`).

**tip** - one or two short sentences aimed at the specific place a child will go wrong: silent letters, single versus double letters, an unusual letter pattern, an unstressed vowel that could be any of a/e/i/o. Wrap the letters or small words in question in `*asterisks*` (rendered bold).
- The best hooks are a real small word hiding inside (`then` in authentic, `stain` in abstain), a familiar word with the same pattern (`cious` like delicious), or true word history a child can grasp (`aster` means star).
- Don't invent etymology and don't force a mnemonic where none is natural. A plain statement such as "Two n's and a silent *h*" is better than a contrived story.
- If a word has two traps, mention both briefly.

**decoys** - exactly two lowercase letters, written as one string (`"kw"`). These are the wrong tiles mixed into tile mode. Choose the letters a child would actually reach for when spelling this word by ear: `k` and `w` for acquiesce, `o` for audacious ("ordacious"), `e` for abundant ("abundent"). A decoy may repeat a letter already in the word when the trap is single versus double (an extra `l` for until). Random letters are of no use here, as they are too easy to ignore.

## JavaScript details

- Double-quoted strings. Apostrophes are fine inside them; escape any double quotes.
- Two-space indentation, and a trailing comma after the list's closing brace, because the block is pasted at the top of an existing array.
- Short hyphens only, never long dashes, anywhere in the text.

## What to send back

1. One `js` code block containing only the new list object with its trailing comma, ready to paste directly after the line `window.WORD_LISTS = [`. If I pasted my current `lists.js`, give me the complete updated file instead, with the new list first and everything else untouched.
2. After the code block, a few short notes only where needed: the tag if you had to correct or infer it, meanings you had to write yourself, words you could not read with confidence (say what you guessed), suspected typos on the sheet, duplicate clues, American spellings, or a word whose clue uses an unusual sense.

Before replying, please check every entry: the chunks rebuild the word exactly; the sentence has exactly one `{w}`, reads correctly with the word dropped in, and does not contain the word elsewhere; decoys are exactly two letters; the tag is one of the known groups, spelt exactly (or deliberately absent); the word count matches the sheet.
