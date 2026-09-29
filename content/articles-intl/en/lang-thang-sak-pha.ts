import type { IntlArticle } from "@/lib/content-types";
import { p } from "@/lib/site";

export const article: IntlArticle = {
  slug: "lang-thang-sak-pha",
  title: "Musty-Smelling Laundry: The Cause, and Is Drum Cleaner Enough?",
  h1: "Laundry smells musty after washing: the cause is on the outside of the drum, where drum cleaner cannot reach",
  description:
    "Musty laundry is usually caused by detergent residue on the outside of the drum. Where it forms, why drum cleaner falls short, and what a strip-down does.",
  category: "Washing machines",
  updated: "2026-09-29",
  readMins: 7,
  image: {
    src: "/work/lang-thang-sak-pha-fa-bon-003.jpg",
    alt: "Close-up of the outside of an inner washing machine drum covered in long streaks of black mould mixed with brown rust",
  },
  excerpt:
    "A washing machine drum has two layers. Detergent residue and mould build up between them, in a place you cannot see and that cleaner poured in and spun cannot reach. I explain where that is in the machine and how you can do a basic check yourself.",
  keywords: [
    "laundry smells musty after washing",
    "washing machine smells bad",
    "does washing machine drum cleaner work",
    "washing machine drum cleaning",
    "washing machine cleaning Chiang Mai",
  ],
  relatedService: "lang-washing-machine",
  blocks: [
    {
      type: "p",
      text: "The washing machine problem customers contact me about most often is laundry that still smells musty after it has been washed. Some have already switched detergent brands, added more fabric softener or washed a second time, and the smell is still there. The point is that the smell is not coming from the clothes. It is coming from the machine itself.",
    },
    {
      type: "p",
      text: "This can be explained by how the drum is built, and once you know that, you immediately understand why the usual fixes do not work.",
    },

    { type: "h2", text: "The drum has two layers, and residue builds up between them" },
    {
      type: "p",
      text: "A washing machine does not have just one drum, but two, one inside the other. The inner one is the perforated drum you put your laundry into; the outer one is a solid tub that holds the water. The whole time the machine runs, water and detergent flow through the holes in the inner drum into the gap between the two.",
    },
    {
      type: "p",
      text: "Undissolved detergent, fabric softener and lint are left clinging to the outside of the inner drum, a place you cannot see at all when you open the lid and look down from above. Add the moisture left behind after each wash, and this spot becomes an environment well suited to the growth of mould and bacteria.",
    },
    {
      type: "callout",
      tone: "info",
      title: "The musty smell comes from what microbes release",
      text: "The smell that ends up on your laundry is made up of volatile compounds that microbes in the machine, especially bacteria, release as they grow. When the machine spins, the water carries these back to the clothes being washed. That is why the more you wash, the more it smells, even with normal detergent.",
    },

    { type: "h2", text: "Why pouring in drum cleaner and running a cycle is not enough" },
    {
      type: "p",
      text: "The drum cleaners sold in shops are useful for routine care, but they have limits worth understanding. This kind of cleaner works by dissolving in water, with the machine spinning so the water touches the drum surface. What it can do is wash off residue that has not yet hardened on smooth surfaces.",
    },
    {
      type: "ul",
      items: [
        "Once residue has hardened into a layer, water flowing past without any scrubbing cannot wash it off. It takes mechanical scrubbing.",
        "Residue under the wash plate and in the crevices of the drum base sits in dead spots where the swirling water does not reach with enough speed.",
        "Residue on the outside of the inner drum is on the opposite side from where the cleaner makes contact.",
        "Mould embedded in rubber grooves and plastic crevices has to be reached with a brush before it will come out.",
      ],
    },
    {
      type: "p",
      text: "In short, drum cleaner is suited to keeping an already clean machine clean, but it is not the tool for rescuing a machine that has been building up residue for years.",
    },

    { type: "h2", text: "A basic check you can do yourself: is it time for a strip-down clean?" },
    {
      type: "steps",
      items: [
        {
          title: "Smell the drum when the machine is completely dry",
          detail:
            "Open a machine that has not been used for at least a day and smell inside the drum. If you notice a musty or sour smell even with no laundry inside, the residue has built up to the point where it is having an effect.",
        },
        {
          title: "Look for black marks on the rubber seal and under the lid",
          detail:
            "On a front loader, look in the groove of the rubber seal around the door. On a top loader, look under the rim of the lid and around the mouth of the drum. Small black spots scattered around are the visible part of the mould, and they usually mean there is more inside than you can see.",
        },
        {
          title: "Run one load of white laundry without detergent",
          detail:
            "If brown or black flakes of residue come off onto the laundry, the residue inside has started to peel away. This is a clear sign that the machine should have a strip-down clean.",
        },
        {
          title: "Count how long it has been",
          detail:
            "If the machine has been used for more than a year without ever being stripped down and cleaned, and your household washes every day or has baby clothes, it is worth having the inside checked once, even if there is no smell yet.",
        },
      ],
    },

    { type: "h2", text: "How a strip-down clean differs from pouring in cleaner and spinning" },
    {
      type: "table",
      caption: "Comparing what each type of care can reach",
      head: ["Area", "Drum cleaner", "Full strip-down clean"],
      rows: [
        ["Inside surface of the inner drum", "Can wash off residue that has not hardened", "Can scrub it all off"],
        ["Outside surface of the inner drum", "Cannot reach", "Taken out and scrubbed directly"],
        ["Under the wash plate and the drum base", "Cannot reach", "Wash plate removed and scrubbed"],
        ["Outer tub that holds the water", "Partly reached", "Whole tub can be cleaned"],
        ["Drain pipe and hose", "Not covered", "Cleaned and checked for blockages"],
        ["Rubber seals and plastic crevices", "Not covered", "Can be scrubbed with a brush"],
      ],
    },
    {
      type: "p",
      text: "In practice, one strip-down clean takes about 3 hours per machine, because the parts have to be taken off and cleaned one by one, then reassembled, with the machine levelled and tested before it is handed back.",
    },

    { type: "h2", text: "Limits of a strip-down clean you should know before starting" },
    {
      type: "p",
      text: "A strip-down clean comes with a few conditions that are worth knowing from the start, so I explain them before you decide.",
    },
    {
      type: "ul",
      items: [
        "If there is limescale or rust built up over a long time from the water and detergent, parts in that area may be damaged during removal. This falls outside the warranty, and I will show you before I take anything apart.",
        "Mould that has sunk deep into the rubber of the seal cannot be made like new again, because scrubbing too hard tears the seal.",
        `If there is not enough space on site to take the parts off and hose them down, for example in a condo unit with no work area, the machine has to be taken away to be cleaned off site, which costs an extra ${p.washer.offsiteSurcharge} THB.`,
        "My scope of work is cleaning. If I find that an internal part was already faulty, I tell you what I see before starting, and you decide whether to go ahead with the clean or take it to the brand's service centre first.",
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "What the 30-day warranty covers",
      text: "I guarantee against damage caused by my work for 30 days, for example parts not fitted tightly, the machine not set level, or drips after the water connections are reattached. Normal wear of the machine's internal components with age is outside this scope.",
    },

    { type: "h2", text: "Washing machine cleaning prices in Chiang Mai" },
    {
      type: "p",
      text: "The price depends on the type of machine and its capacity. Front loaders are more complicated to take apart and reassemble than top loaders, so they are charged at a different rate.",
    },
    {
      type: "table",
      caption: "Washing machine cleaning prices",
      head: ["Machine type", "Price"],
      rows: [
        ["Top loader, capacity up to 15 kg", `${p.washer.topLoad} THB`],
        ["Top loader, capacity 15.1–19 kg", `${p.washer.topLoadMid} THB`],
        ["Top loader, capacity over 19 kg", `${p.washer.topLoadBig} THB`],
        ["Front loader", `From ${p.washer.frontLoad} THB`],
        ["If the machine has to be taken away to be cleaned off site", `Add ${p.washer.offsiteSurcharge} THB`],
      ],
    },
    {
      type: "p",
      text: "This price covers every step of the clean, with no other charges added later, and I always give you the full price before starting.",
    },

    { type: "h2", text: "How to go longer between strip-down cleans" },
    {
      type: "ul",
      items: [
        "Leave the lid open after a wash so the moisture can evaporate, rather than closing it straight away.",
        "Use the amount of detergent stated. Adding more leaves more undissolved detergent behind.",
        "If you use fabric softener regularly, run a hot wash or the drum-clean cycle from your machine's manual every so often.",
        "Take the laundry out as soon as the wash finishes, and do not leave it overnight.",
        "Clean the detergent drawer and the lint filter regularly.",
      ],
    },
    {
      type: "cta",
      text: "If you are not sure whether your machine is due for a strip-down clean, send photos of the inside of the drum and the rubber seal on LINE, and I will give you an initial assessment before you decide. Call +66 65 365 7673 or LINE @794xvrnm.",
    },
    {
      type: "sources",
      items: [
        { title: "Moraxella species are primarily responsible for generating malodor in laundry", publisher: "Applied and Environmental Microbiology (2012)", url: "https://pubmed.ncbi.nlm.nih.gov/22367080/", note: "The musty smell in washed laundry comes mainly from compounds produced by Moraxella bacteria" },
        { title: "Microbial Colonization, Biofilm Formation, and Malodour of Washing Machine Surfaces and Fabrics", publisher: "Antibiotics (MDPI), 2024", url: "https://doi.org/10.3390/antibiotics13121227", note: "Biofilm in washing machines causes malodour, and microbes can produce volatile compounds" },
        { title: "Mold in Your Washing Machine: The Mystery and the Menace", publisher: "Consumer Reports (Apr 2020)", url: "https://www.consumerreports.org/washing-machines/mold-in-your-washing-machine-the-mystery-and-the-menace/", note: "Mould builds up in the inaccessible gap between the wash drum and the outer tub, and in the folds of the door seal" },
      ],
    },
  ],
  faqs: [
    {
      q: "How often should a washing machine be cleaned?",
      a: "It depends on how often you use it. Households that wash every day or have baby clothes should have a strip-down clean once a year, while households that wash a few times a week may be able to go longer. The practical guide is the smell and the marks on the rubber seal, rather than counting months on the calendar.",
    },
    {
      q: "Why do front loaders and top loaders cost different amounts?",
      a: `A front loader is more complicated to take apart and reassemble. The front panel and the door seal assembly have to come off before the drum can be reached, which takes more time and more steps than a top loader, so they are charged at different rates: top loaders from ${p.washer.topLoad} THB depending on capacity, and front loaders from ${p.washer.frontLoad} THB.`,
    },
    {
      q: "Will the musty smell go away completely after cleaning?",
      a: "Where the smell comes from residue built up in the drum, it goes away after a strip-down clean. But if mould has sunk deep into the rubber of the seal, that part cannot be cleaned back to like new. I will show you its actual condition before starting.",
    },
    {
      q: "What should I prepare before the technician comes?",
      a: "Enough space around the machine to lay out the removed parts and hose them down, plus a working water point and power socket. If you are in a condo unit with no work area, let me know in advance and I will assess whether the machine needs to be taken away to be cleaned off site.",
    },
    {
      q: "How long does cleaning a washing machine take?",
      a: "About 3 hours per machine, because all the parts are taken off and cleaned separately, then reassembled, with the machine levelled and tested before it is handed back.",
    },
  ],
};
