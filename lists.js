/*
  WORD LISTS - this is the only file you edit each week.

  Paste each new list at the TOP of the array. The app opens the newest list of the
  child's own group (see "tag"); everything else stays reachable via "Other lists".

  List fields
    id      required. Never change it once published - saved stars are keyed by it.
    title   shown as the page heading.
    tag     optional. The group the list is for, e.g. "espresso" or "cappuccino". Each device remembers
            the tag of the last list it opened and opens the newest list WITH THAT TAG. Spell it exactly
            the same every week (case does not matter) - a typo silently creates a new group.
            Leave the tag out for a list meant for everyone (e.g. a midterm set): while it is the newest
            list it is shown to all groups and every device forgets its remembered tag.
    date    YYYY-MM-DD. Decides which list counts as the latest within its tag.
    task    optional. Homework for the week, shown under "Your task" below the word grid.
            *asterisks* make text bold; a blank line starts a new paragraph.
    words   array, see below.

  Word fields
    w       required. The word.
    m       required. The meaning / memory clue.
    s       optional. Example sentence with {w} where the word goes.
    chunks  optional. Syllable split with pipes, e.g. "ab|stain". Must rebuild the word exactly.
    tip     optional. Spelling hook. Wrap text in *asterisks* to make it bold.
    decoys  optional. Extra wrong letters for tile mode, e.g. "ey". Auto-picked if left out.

  Bare minimum that works:  { w: "almond", m: "a nut" }
*/
window.WORD_LISTS = [

  {
    id: "2026-09-21-b-words-espresso",
    tag: "espresso",
    title: "Week 2",
    date: "2026-09-21",
    task: "Pick one word from the spellings and create an acrostic poem from it. Lots of house points on offer for this task!",
    words: [
      { w: "banal",       m: "dull and ordinary",                chunks: "ba|nal",         decoys: "ne",
        s: "The film was so {w} that I guessed the ending in five minutes.",
        tip: "One *n*, and it ends in *nal*, like final." },
      { w: "barrage",     m: "lots of things at once",           chunks: "bar|rage",       decoys: "ij",
        s: "The teacher faced a {w} of questions about the school trip.",
        tip: "*bar* + *rage*: two r's, and it ends *age* like garage." },
      { w: "beguiling",   m: "charming in a tricky way",         chunks: "be|guil|ing",    decoys: "ey",
        s: "The fox gave the hens a {w} smile before asking to come in.",
        tip: "A silent *u* after the *g*, like in guide. The *e* of beguile drops before *ing*." },
      { w: "beige",       m: "a pale sandy colour",              chunks: "beige",          decoys: "ay",
        s: "Grandad painted the whole living room {w}, which is a bit boring.",
        tip: "*ei* like in eight, then a silent *e* at the end." },
      { w: "bequeath",    m: "leave to someone in a will",       chunks: "be|queath",      decoys: "ew",
        s: "In her will, Great Aunt Ivy chose to {w} her parrot to me.",
        tip: "*be* + *queath*: q is followed by *u*, and it has *ea* like breathe." },
      { w: "beleaguered", m: "surrounded by troubles",           chunks: "be|lea|guered",  decoys: "eu",
        s: "The {w} goalkeeper faced shot after shot all through the second half.",
        tip: "*be* + *league* + *red*: a league of troubles, with a silent *u* after the *g*." },
      { w: "bereavement", m: "sadness when someone dies",        chunks: "be|reave|ment",  decoys: "ie",
        s: "After Grandad died, the school gave Dad some time off for {w}.",
        tip: "*be* + *reave* + *ment*: it has *ea* like leave, and keeps its *e* before ment." },
      { w: "berserk",     m: "wild with anger",                  chunks: "ber|serk",       decoys: "zc",
        s: "The dog went {w} when the postman pushed the letters through the door.",
        tip: "*ber* + *serk*: two r's, and an *s* in the middle, not a z." },
      { w: "bewildered",  m: "very confused",                    chunks: "be|wil|dered",   decoys: "li",
        s: "The new pupil looked {w} by the maze of school corridors.",
        tip: "*be* + *wild* + *ered*: there is a wild inside it, with one *l*." },
      { w: "binoculars",  m: "a tool for seeing far away",       chunks: "bi|noc|u|lars",  decoys: "ke",
        s: "Through the {w}, we could see an owl on the far tree.",
        tip: "*bi* means two, then *noc* + *u* + *lars*: one c and no k." },
      { w: "bivouac",     m: "a rough camp with no tent",        chunks: "bi|vou|ac",      decoys: "wk",
        s: "We built a {w} from branches and slept under the stars.",
        tip: "*bi* + *vou* + *ac*: the *ou* sounds like oo, and it ends *ac* with no k." },
      { w: "buffoon",     m: "a silly, clumsy person",           chunks: "buf|foon",       decoys: "ue",
        s: "The clown acted like a total {w}, tripping over his own huge shoes.",
        tip: "Two f's and two o's: *buff* + *oon*, like balloon." }
    ]
  },

  {
    id: "2026-09-21-b-words-cappuccino",
    tag: "cappuccino",
    title: "Week 2",
    date: "2026-09-21",
    task: "Pick one word from the spellings and create an acrostic poem from it. Lots of house points on offer for this task!",
    words: [
      { w: "believe",     m: "think something is true",          chunks: "be|lieve",       decoys: "ai",
        s: "I {w} our team can win the cup if we practise every day.",
        tip: "*be* + *lieve*: *i* before *e*. Never believe a *lie*: b-e-lie-v-e." },
      { w: "below",       m: "underneath something",             chunks: "be|low",         decoys: "le",
        s: "The cat hid {w} the table while the vacuum cleaner was on.",
        tip: "One *l*: *be* + *low*. Two l's makes bellow, which is a shout." },
      { w: "beware",      m: "watch out for",                    chunks: "be|ware",        decoys: "hi",
        s: "The sign on the gate said {w} of the dog, but he only licked us.",
        tip: "*be* + *ware*, like hardware. Not wear." },
      { w: "beyond",      m: "further away than",                chunks: "be|yond",        decoys: "ui",
        s: "The park is just {w} the church, past the big oak tree.",
        tip: "*be* + *yond*: y-o-n-d, like pond with a y." },
      { w: "biscuit",     m: "a crunchy baked snack",            chunks: "bis|cuit",       decoys: "ke",
        s: "Gran always lets me dunk my {w} in her cup of tea.",
        tip: "*bis* + *cuit*: the *u* is silent, like in build. B-i-s-c-u-i-t." },
      { w: "breakfast",   m: "the first meal of the day",        chunks: "break|fast",     decoys: "ce",
        s: "We had pancakes for {w} on Saturday, with far too much syrup.",
        tip: "*break* + *fast*: you break your night-time fast. It keeps *ea* even though it sounds like breck." },
      { w: "breathe",     m: "take air in and out",              chunks: "breath|e",       decoys: "ei",
        s: "Slow down and {w} deeply before you start your spelling test.",
        tip: "*breath* + *e*: the extra *e* on the end makes the *ea* say ee. Breathe is the doing word." },
      { w: "building",    m: "a house, shop or school",          chunks: "build|ing",      decoys: "ey",
        s: "The tallest {w} in town is the old church with the pointy spire.",
        tip: "*build* + *ing*: a silent *u* before the *i*, like biscuit." },
      { w: "burger",      m: "a meat patty in a bun",            chunks: "bur|ger",        decoys: "ea",
        s: "Dad flipped a {w} on the barbecue and dropped it in the flowerbed.",
        tip: "*bur* + *ger*: u then e. It is short for hamburger." },
      { w: "burglar",     m: "someone who breaks in and steals", chunks: "burg|lar",       decoys: "ue",
        s: "The {w} tiptoed past the sleeping dog, but tripped over the cat.",
        tip: "*burg* + *lar*: no *u* between the g and the l, and it ends *lar* not ler." },
      { w: "business",    m: "buying and selling things",        chunks: "bus|i|ness",     decoys: "sz",
        s: "Mum runs a cake {w} from our kitchen, so the house always smells lovely.",
        tip: "*bus* + *i* + *ness*: a bus, an i, then ness. One s, then two." },
      { w: "busy",        m: "having lots to do",                chunks: "bu|sy",          decoys: "zi",
        s: "The bees were {w} all afternoon, buzzing from flower to flower.",
        tip: "*bu* + *sy*: it looks like bus with a y, but it sounds like bizzy." }
    ]
  },

  {
    id: "2026-09-14-a-words-cappuccino",
    tag: "cappuccino",
    title: "Week 1",
    date: "2026-09-14",
    words: [
      { w: "actually",  m: "really, in fact",                    chunks: "ac|tu|al|ly",   decoys: "ks",
        s: "I thought the test was today, but it is {w} tomorrow.",
        tip: "*actual* + *ly*, so there are two l's." },
      { w: "address",   m: "where a house or building is",       chunks: "ad|dress",      decoys: "ai",
        s: "Please write your {w} on the form, including the postcode.",
        tip: "Two d's and two s's: *add* + *ress*. Think: add your address." },
      { w: "angel",     m: "a heavenly being with wings",        chunks: "an|gel",        decoys: "jl",
        s: "My little sister played an {w} with silver wings in the school play.",
        tip: "It ends in *gel*, like hair gel. Don't mix it up with angle." },
      { w: "angle",     m: "the corner where two lines meet",    chunks: "an|gle",        decoys: "ua",
        s: "A square has a right {w} at every corner.",
        tip: "It ends *le*, like triangle and rectangle." },
      { w: "answer",    m: "a reply to a question",              chunks: "an|swer",       decoys: "uc",
        s: "Put your hand up if you know the {w} to question five.",
        tip: "A silent *w* hides in the middle. Say an - *swer* to remember it." },
      { w: "appear",    m: "come into sight",                    chunks: "ap|pear",       decoys: "ei",
        s: "Wait until dark and the stars will {w} one by one.",
        tip: "Two p's, then *ear* at the end." },
      { w: "argue",     m: "disagree out loud, quarrel",         chunks: "ar|gue",        decoys: "yw",
        s: "My brothers always {w} about whose turn it is on the console.",
        tip: "It ends *gue* with a silent *ue*, like tongue." },
      { w: "argument",  m: "a quarrel between people",           chunks: "ar|gu|ment",    decoys: "ea",
        s: "They had a loud {w} about who had scored the goal.",
        tip: "The *e* drops out before *ment*: *argu* + *ment*, never argue-ment." },
      { w: "arrow",     m: "a pointed stick shot from a bow",    chunks: "ar|row",        decoys: "oe",
        s: "Robin Hood fired an {w} straight into the middle of the target.",
        tip: "Two r's, then *row* at the end." },
      { w: "available", m: "free and ready to use",              chunks: "a|vail|a|ble",  decoys: "ie",
        s: "Is the football pitch {w} after school, or is it booked?",
        tip: "*avail* + *able*. The middle is *ai*, like sail, and it ends *able*, not ible." },
      { w: "awful",     m: "very bad",                           chunks: "aw|ful",        decoys: "ol",
        s: "The bin smelt so {w} that we all held our noses.",
        tip: "*aw* + *ful*. Only one *l*, and no e after the w." },
      { w: "automatic", m: "works by itself",                    chunks: "au|to|mat|ic",  decoys: "ok",
        s: "The {w} doors slid open as we walked up to the shop.",
        tip: "It starts *au*, like August. *auto* means self. It ends *ic*, with no k." }
    ]
  },

  {
    id: "2026-09-14-a-words",
    tag: "espresso",
    title: "Week 1",
    date: "2026-09-14",
    words: [
      { w: "abstain",    m: "choose not to",          chunks: "ab|stain",      decoys: "ey",
        s: "I will {w} from sweets until Friday.",
        tip: "It ends with the word *stain*." },
      { w: "abundant",   m: "lots of",                chunks: "a|bun|dant",    decoys: "eo",
        s: "Blackberries were {w} along the path, so we filled three tubs.",
        tip: "A *bun*, then *d*, then an *ant*." },
      { w: "accentuate", m: "emphasise",              chunks: "ac|cen|tu|ate", decoys: "si",
        s: "Use a bright colour to {w} the title of your poster.",
        tip: "Start with *accent* (two c's), then *u*, then *ate*." },
      { w: "acquiesce",  m: "accept without arguing", chunks: "ac|qui|esce",   decoys: "kw",
        s: "After lots of begging, Mum decided to {w} and let us stay up.",
        tip: "*c* comes before *q*. It ends in *sce*, like scene." },
      { w: "almond",     m: "a nut",                  chunks: "al|mond",       decoys: "ru",
        s: "There was one {w} on top of every little cake.",
        tip: "There is a quiet *l* after the a. Lots of people don't say it." },
      { w: "ambiguous",  m: "unclear / two meanings", chunks: "am|big|u|ous",  decoys: "ey",
        s: "The note was {w}, so nobody knew where to meet.",
        tip: "Two u's: *big* - *u* - *ous*." },
      { w: "amicable",   m: "friendly",               chunks: "am|i|ca|ble",   decoys: "ki",
        s: "The two captains had an {w} chat after the match.",
        tip: "*am* + *i* + *cable*." },
      { w: "annihilate", m: "destroy completely",     chunks: "an|ni|hil|ate", decoys: "ya",
        s: "One big wave could {w} our sandcastle.",
        tip: "Two n's and a silent *h*: an - ni - hil - ate." },
      { w: "anonymous",  m: "name unknown",           chunks: "a|non|y|mous",  decoys: "iu",
        s: "The card was {w}. Nobody had signed it.",
        tip: "The *y* sits in the middle: a - non - *y* - mous." },
      { w: "asteroid",   m: "space rock",             chunks: "as|ter|oid",    decoys: "ay",
        s: "An {w} the size of a bus flew past the Earth.",
        tip: "*aster* means star. aster + *oid*." },
      { w: "audacious",  m: "bold / daring",          chunks: "au|da|cious",   decoys: "oh",
        s: "An {w} squirrel stole a chip right off my plate.",
        tip: "It starts *au*, not or. It ends *cious*, like delicious." },
      { w: "authentic",  m: "genuine / real",         chunks: "au|then|tic",   decoys: "ok",
        s: "Is that an {w} dinosaur bone or a plastic copy?",
        tip: "It starts *au*, and the word *then* hides in the middle." }
    ]
  },

  {
    id: "2026-09-07-accident-to-special",
    tag: "",
    title: "First test",
    date: "2026-09-07",
    words: [
      { w: "accident",    m: "something that goes wrong by mistake", chunks: "ac|ci|dent",        decoys: "ks",
        s: "I spilt the juice by {w}, not on purpose.",
        tip: "Two c's: the first sounds like k, the second like s. It ends with *dent*." },
      { w: "beautiful",   m: "very lovely to look at",               chunks: "beau|ti|ful",       decoys: "yl",
        s: "We watched a {w} sunset turn the whole sky pink.",
        tip: "It starts *beau*: Big Elephants Are Ugly. Only one *l* at the end." },
      { w: "caught",      m: "got hold of something moving",         chunks: "c|augh|t",          decoys: "or",
        s: "Our goalkeeper dived and {w} the ball with one hand.",
        tip: "*augh* in the middle, like taught and daughter." },
      { w: "disappear",   m: "vanish from sight",                    chunks: "dis|ap|pear",       decoys: "se",
        s: "The magician made the rabbit {w} in a puff of smoke.",
        tip: "*dis* + *appear*: one s, two p's." },
      { w: "enough",      m: "as much as you need",                  chunks: "e|nough",           decoys: "fi",
        s: "Have we got {w} chairs for everyone at the party?",
        tip: "*ough* says uff here, like rough and tough." },
      { w: "favourite",   m: "the one you like best",                chunks: "fa|vour|ite",       decoys: "ae",
        s: "Pizza is my {w} dinner, especially with extra cheese.",
        tip: "*favour* + *ite*. British spelling keeps the *u*, like colour." },
      { w: "guard",       m: "watch over and protect",               chunks: "gu|ard",            decoys: "ae",
        s: "Two big dogs {w} the farm gate at night.",
        tip: "A silent *u* comes straight after the g, like guess and guitar." },
      { w: "immediately", m: "right now, at once",                   chunks: "im|me|di|ate|ly",   decoys: "au",
        s: "When the fire bell rang, we left the classroom {w}.",
        tip: "Two m's, and *media* hides inside. Keep the *e* before *ly*." },
      { w: "knowledge",   m: "what you know",                        chunks: "know|ledge",        decoys: "ij",
        s: "Her {w} of dinosaurs is amazing, and she can name fifty.",
        tip: "Silent *k*: it starts with *know*. Then *ledge*, with a *d*." },
      { w: "medicine",    m: "something you take to get better",     chunks: "med|i|cine",        decoys: "se",
        s: "The doctor gave me pink {w} for my sore throat.",
        tip: "The s sound is a *c*. Think *medic* + *ine*." },
      { w: "probably",    m: "most likely",                          chunks: "prob|ab|ly",        decoys: "ie",
        s: "Look at those clouds. It will {w} rain at playtime.",
        tip: "Say all three beats so you don't skip the middle: prob - *ab* - ly." },
      { w: "special",     m: "not ordinary, extra good",             chunks: "spe|cial",          decoys: "sh",
        s: "Gran baked a {w} cake with my name on it.",
        tip: "The sh sound is spelt *ci*. It ends *cial*, like social." }
    ]
  }

];
