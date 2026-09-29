import type { IntlArticle } from "@/lib/content-types";
import { p } from "@/lib/site";

export const article: IntlArticle = {
  slug: "sak-pha-fa-na-vs-fa-bon",
  title: "Front Loader vs Top Loader: How Strip-Down Cleaning Differs",
  h1: "Cleaning front-loading and top-loading washing machines: different steps, residue spots and prices",
  description:
    "Front and top loaders build up residue in different places and are stripped down differently. Compare parts removed, time, prices and limits.",
  category: "Washing machines",
  updated: "2026-07-30",
  readMins: 8,
  image: {
    src: "/work/lang-thang-sak-pha-fa-na-001.jpg",
    alt: "A front loader's rubber door seal and drum ring covered in brown slimy residue, photographed close up on a concrete floor",
  },
  excerpt:
    "Top loaders build up heavy residue at the bottom of the drum and under the wash plate, while front loaders build it up in the door seal and around the heater in the outer tub. These two spots need different ways of dismantling, which is why the prices differ.",
  keywords: [
    "front loader vs top loader cleaning",
    "front load washing machine cleaning price",
    "top load washing machine cleaning price",
    "washing machine door seal mould",
    "washing machine cleaning Chiang Mai",
  ],
  relatedService: "lang-washing-machine",
  blocks: [
    {
      type: "p",
      text: "The question customers ask most often before deciding is why cleaning a front loader costs more than a top loader. The answer is not the size of the machine. It is the internal structure, which makes the places where residue builds up, and the way the machine is taken apart, completely different.",
    },
    {
      type: "p",
      text: "I will go through each type: where the residue builds up, which parts have to be removed, and how the time needed differs, so you can judge whether your machine at home is due for a clean.",
    },

    { type: "h2", text: "Top loaders: the heaviest residue is under the wash plate" },
    {
      type: "p",
      text: "A top loader has its drum standing upright, with a wash plate spinning at the bottom. Under this plate is a narrow space where the swirling water does not reach with enough speed to wash residue away. Undissolved detergent is left there and builds up until it hardens, and it is completely out of sight until the wash plate is removed.",
    },
    {
      type: "ul",
      items: [
        "Under the wash plate and around the drive shaft: the spot where residue sticks hardest in a top loader.",
        "The outside of the inner drum, which is on the opposite side from where drum cleaner can make contact.",
        "The rim of the drum opening and under the lid, where mould can be seen with the naked eye as black spots.",
        "The lint filter, which homeowners can remove and clean themselves regularly.",
      ],
    },

    { type: "h2", text: "Front loaders: the heaviest residue is in the door seal and around the heater" },
    {
      type: "p",
      text: "A front loader has its drum lying horizontally, sealed by a rubber gasket around the door. The groove of this seal is a hollow where water is left standing after every wash, so it is where mould grows fastest in this type of machine, and it is the source of the smell many households cannot get rid of even after wiping the inside of the drum.",
    },
    {
      type: "p",
      text: "The other spot is the outer tub that holds the water, which has a heater fitted at the bottom. When the heater works with hard water, limescale builds up around the heating element clearly thicker than anywhere else in the tub.",
    },
    {
      type: "callout",
      tone: "warn",
      title: "A door seal with deep-set mould cannot be made like new again",
      text: "If mould has worked its way into the rubber and left permanent black spots, scrubbing hard enough to remove it will tear the seal, and a leak follows. I show you its actual condition before starting, so you can decide from the outset whether to have it cleaned or take it to the brand's service centre to have the seal replaced.",
    },

    { type: "h2", text: "Comparing the strip-down steps for the two types" },
    {
      type: "table",
      caption: "How the steps differ between top loaders and front loaders",
      head: ["Aspect", "Top loader", "Front loader"],
      rows: [
        ["Drum orientation", "Vertical", "Horizontal"],
        ["Where residue builds up most", "Under the wash plate and at the bottom of the drum", "The door seal groove and around the heater"],
        ["Parts that have to be removed", "The wash plate, then the inner drum is lifted out", "The front panel and door seal assembly, then the outer tub is lifted out"],
        ["How hard it is to take apart", "Can be taken apart directly from the top", "The front has to be dismantled before the drum can be reached"],
        ["Points needing special care", "Limescale and rust on the drive shaft", "The heating element and the condition of the door seal"],
        ["Price", `From ${p.washer.topLoad} THB, depending on capacity`, `From ${p.washer.frontLoad} THB`],
      ],
    },
    {
      type: "p",
      text: "Both types take about 3 hours per machine, and both carry the same 30-day warranty on the work. What makes the prices differ is the number of parts that have to be dismantled before the drum can be reached, not how long the cleaning takes.",
    },

    { type: "h2", text: "Washing machine cleaning prices in Chiang Mai" },
    {
      type: "table",
      caption: "Prices by machine type and capacity",
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
      text: "The off-site charge applies when there is not enough space on site to take the parts off and hose them down, for example a condo unit where the machine stands on a narrow balcony. I assess this and tell you the price for it before starting.",
    },

    { type: "h2", text: "Which type needs cleaning more often?" },
    {
      type: "p",
      text: "Front loaders tend to develop smell problems sooner, because water stands in the door seal groove after every wash. Top loaders drain better, but the residue under the wash plate builds up quietly, without giving off a smell until it is very thick.",
    },
    {
      type: "ul",
      items: [
        "Front loaders: wipe the door seal groove dry after each wash and leave the door open to let moisture out.",
        "Top loaders: leave the lid open after washing, and remove and clean the lint filter regularly.",
        "Both types: use the amount of detergent stated. Adding more leaves more undissolved detergent behind.",
        "Households that wash every day or have baby clothes should have either type stripped down and cleaned once a year.",
      ],
    },
    {
      type: "cta",
      text: "Not sure which type your machine is, or whether it is due for a clean? Send photos of the machine and the door seal groove to our washing machine cleaning LINE @794xvrnm.",
    },
  ],
  faqs: [
    {
      q: "Why does cleaning a front loader cost more than a top loader?",
      a: `Because more parts have to be dismantled. On a top loader, the wash plate comes off and the inner drum is lifted straight out from the top. On a front loader, the front panel and the door seal assembly have to be removed first before the outer tub can be lifted out. So top loaders start from ${p.washer.topLoad} THB depending on capacity, and front loaders from ${p.washer.frontLoad} THB.`,
    },
    {
      q: "My front loader always smells, even though I have wiped inside the drum. What causes it?",
      a: "Most of the smell comes from the groove of the rubber seal around the door, where water is left standing after every wash, and from residue in the outer tub that cannot be seen from the front. Wiping the inside of the drum does not help; the machine has to be taken apart and cleaned for the smell to go.",
    },
    {
      q: "Do the two types take different amounts of time?",
      a: "They take about the same time, around 3 hours per machine, and both carry the same 30-day warranty on the work. What differs is the number of parts that have to be dismantled before the drum can be reached.",
    },
    {
      q: "If the door seal has gone mouldy, does it have to be replaced?",
      a: "It depends on whether the mould is on the surface or embedded in the rubber. If it is on the surface, it can still be scrubbed off. But if it has sunk in deep and left permanent black spots, scrubbing hard will tear the rubber and a leak will follow. In that case, having the seal replaced by the brand's service centre is better value than cleaning. I will show you its actual condition and tell you honestly before you decide.",
    },
    {
      q: "My machine is on a narrow condo balcony. Can it be cleaned?",
      a: `Yes. But if there is not enough space to take the parts off and hose them down, the machine has to be taken away to be cleaned off site, which costs an extra ${p.washer.offsiteSurcharge} THB. I always assess this and let you know in advance.`,
    },
  ],
};
