import type { IntlArticle } from "@/lib/content-types";
import { p, btu } from "@/lib/site";

export const article: IntlArticle = {
  slug: "kha-tid-tang-air-ruam-arai",
  title: "Aircon Installation Cost in Chiang Mai: What Does It Include?",
  h1: "Aircon installation cost in Chiang Mai: what it includes, and which parts cost extra on site",
  description:
    `Aircon installation: ${btu.installSmall} BTU ${p.install.small} THB, ${btu.installLarge} BTU ${p.install.large} THB. What it covers, what costs extra on site, and what to ask first.`,
  category: "Prices and costs",
  updated: "2026-08-11",
  readMins: 8,
  image: {
    src: "/work/tid-tang-air-007.jpg",
    alt: "Refrigerant pipes running neatly inside a white trunking cover along the corner of a room wall",
  },
  excerpt:
    "The aircon installation prices you see advertised are usually the labour for a standard pipe length. What makes the real total differ from what you expected is the pipe length and where the outdoor unit goes. I break down what is inside an installation bill.",
  keywords: [
    "aircon installation cost Chiang Mai",
    "aircon installation price",
    "what does aircon installation include",
    "aircon pipe extension cost",
    "install an aircon bought online",
  ],
  relatedService: "tid-tang-air",
  blocks: [
    {
      type: "p",
      text: `Almost all the aircon installation prices you see on websites are for labour plus materials over a standard distance, which is not always the final total. My prices are ${p.install.small} THB for a ${btu.installSmall} BTU unit and ${p.install.large} THB for ${btu.installLarge} BTU. What is worth knowing is what that price covers, and what conditions can push the real total above it.`,
    },
    {
      type: "p",
      text: "Installation differs from cleaning in that no two sites are ever quite the same. One house has space for the outdoor unit right outside the room wall; another needs the pipes run all the way round to the back of the house. The labour is the same, but the materials are not. Knowing in advance which parts are fixed and which vary lets you ask for a quote precisely from the very first call.",
    },

    { type: "h2", text: "What my installation price covers" },
    {
      type: "table",
      caption: "What is included in the standard installation rate",
      head: ["Item", "Included in the price?"],
      rows: [
        ["Labour for the whole installation", "Included"],
        ["Outdoor unit mounting bracket", "Included"],
        ["Insulated refrigerant pipes, first 4 metres", "Included"],
        ["Drain pipe, same length as the refrigerant pipes", "Included"],
        ["Pipe trunking cover, standard length", "Included"],
        ["Vacuuming the system", "Included, not charged separately"],
        ["Cooling test, current measurement, leak check", "Included"],
        ["Pipes and trunking beyond the standard length", "Charged extra depending on the site; quoted before work starts"],
        ["Additional electrical wiring or breaker changes", "Assessed on site; quoted before work starts"],
      ],
    },
    {
      type: "p",
      text: "\"Standard length\" is the point to ask about clearly from the start, because each provider defines it differently. The most direct way is to roughly measure the distance from where the indoor unit will go to where the outdoor unit will sit, then send me that figure along with the BTU size. I will give you the total before we book a date.",
    },
    {
      type: "callout",
      tone: "info",
      title: "Vacuuming is included in every installation",
      text: "Vacuuming means drawing the air and moisture out of the system before releasing the refrigerant. It is the hardest step of an installation to check from the outside, because once assembled, a unit that skipped it still cools on day one. The effects show up later as weaker cooling and a compressor that wears out sooner than it should. I do this step on every installation without charging for it as a separate item.",
    },

    { type: "h2", text: "Three things that make the real total differ from the advertised price" },
    {
      type: "steps",
      items: [
        {
          title: "Pipe length from the indoor unit to the outdoor unit",
          detail:
            "This has the biggest effect. An upstairs bedroom where the pipes have to run down to ground level uses several times more pipe and insulation than a room where the outdoor unit sits right outside the wall. I measure the actual distance on site and tell you the cost of any extra materials before work starts.",
        },
        {
          title: "Where the outdoor unit goes and how it is mounted",
          detail:
            "Placing it on the ground and hanging it on steel brackets under the eaves take different materials and time. Spots that need a tall ladder or work on the roof structure also take longer than usual. I assess the actual site before quoting, not from photos alone.",
        },
        {
          title: "The existing electrical system",
          detail:
            "Some older houses have no power point to supply a new unit, or the breaker size does not match the unit being installed. In that case it has to be fixed before installation for safety. I tell you about it along with the cost first, and you can choose whether I do it or your own electrician does.",
        },
      ],
    },

    { type: "h2", text: "Bought the unit online and want me to install it: what is different?" },
    {
      type: "p",
      text: "Yes, I install those. The installation charge is by unit size, at the same rate as when you buy the unit from me. What differs is the installation warranty.",
    },
    {
      type: "table",
      caption: "Installation warranty by where the unit came from",
      head: ["Case", "Installation charge", "Installation warranty"],
      rows: [
        ["Unit bought from me", "By BTU size, per the price list", "1 year"],
        ["You already have the unit, or bought it from another shop or online", "By BTU size, at the same rate", "6 months"],
      ],
    },
    {
      type: "p",
      text: "What to know when buying a unit online is that the warranty on the unit itself belongs to the manufacturer or seller, while what I am responsible for is the quality of the installation. The two are separate. I recommend keeping the unit's warranty documents complete, and checking the condition of the box and the unit before the installation date, because if you find shipping damage after it has been unboxed, claiming from the seller becomes much harder.",
    },

    { type: "h2", text: "Questions to ask before agreeing an installation price" },
    {
      type: "ul",
      items: [
        "How many metres of pipe and trunking does the quoted price cover, and how is anything beyond that charged?",
        "Is the system vacuumed, and is that already included in the price?",
        "How long is the installation warranty, and what problems does it cover?",
        "If the site turns out to need electrical work first, will I be given the price before it is done?",
        "Will the cooling be tested and the joints checked for leaks in front of me before the technician packs up?",
      ],
    },
    {
      type: "p",
      text: "All five questions can be answered over the phone without waiting for a technician to visit the site. Pipe length and warranty are the two that should have clear answers before you book, because they are what can change the total the most.",
    },

    {
      type: "cta",
      text: `Send me the BTU size, the room size and where the outdoor unit will go, and I will give you the total installation cost before we book. Installation for ${btu.installSmall} BTU is ${p.install.small} THB, and for ${btu.installLarge} BTU it is ${p.install.large} THB.`,
    },
  ],
  faqs: [
    {
      q: "How much does aircon installation cost in Chiang Mai?",
      a: `For a ${btu.installSmall} BTU unit, installation is ${p.install.small} THB, and for ${btu.installLarge} BTU it is ${p.install.large} THB. This covers labour, the mounting bracket, insulated refrigerant pipes, the drain pipe and trunking over the standard length. If the site needs pipes longer than standard, I tell you the cost of the extra materials before work starts.`,
    },
    {
      q: "Does the installation price include the pipes and trunking?",
      a: "Yes, it includes the insulated refrigerant pipes, the drain pipe and the trunking over the standard length. What costs extra is any length beyond the standard, which depends on where each home's outdoor unit will go. You can send me a rough distance first and I will give you the total before we book.",
    },
    {
      q: "Can you install an aircon I bought from an online shop?",
      a: "Yes. The installation charge is by unit size, at the same rate as when you buy the unit from me. The difference is the installation warranty: 6 months if you have your own unit, and 1 year if you buy the unit from me.",
    },
    {
      q: "How long does an aircon installation take?",
      a: "It depends on the site. The main factors are the pipe length and how difficult the outdoor unit location is. Jobs that need a tall ladder or work on the roof structure take longer than usual. I give you a time estimate along with the price before we book, so you can set aside the right amount of time.",
    },
    {
      q: "Does the system really need to be vacuumed every time?",
      a: "Yes, and I do it on every installation without charging for it as a separate item. Vacuuming draws the air and moisture out of the system before the refrigerant is released. A unit that skips this step still cools on day one, but the moisture left in the system affects its performance and the compressor's lifespan over the long term.",
    },
  ],
};
