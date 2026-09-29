import type { IntlArticle } from "@/lib/content-types";
import { p } from "@/lib/site";

export const article: IntlArticle = {
  slug: "rakha-lang-thang-sak-pha",
  title: "Washing Machine Drum Cleaning Price in Chiang Mai: What's Normal?",
  h1: "Washing machine drum cleaning prices: why they differ, and what counts as normal",
  description:
    "Advertised washing machine cleaning prices differ many times over. Each price means a different job; here are real prices and what to ask first.",
  category: "Prices and costs",
  updated: "2026-09-24",
  readMins: 7,
  image: {
    src: "/work/lang-thang-sak-pha-fa-bon-003.jpg",
    alt: "Close-up of the outside of an inner washing machine drum covered in long streaks of black mould mixed with brown rust",
  },
  excerpt:
    "Different prices usually do not mean one provider is more expensive. They mean the prices refer to different jobs: pouring in a cleaning solution and running a cycle, versus lifting the drum out and cleaning every part.",
  keywords: [
    "washing machine drum cleaning price",
    "washing machine cleaning cost",
    "how much does washing machine cleaning cost",
    "washing machine strip-down cleaning price",
    "washing machine cleaning price Chiang Mai",
  ],
  relatedService: "lang-washing-machine",
  blocks: [
    {
      type: "p",
      text: "If you search for washing machine drum cleaning prices and find figures ranging from the low hundreds of baht to over a thousand, and wonder why they differ so much, the answer is not which provider is more expensive. It is that each price refers to a different job.",
    },
    {
      type: "p",
      text: "I explain what kind of work each price range means, how I work out my own prices, and which questions to ask before agreeing, so there are no extra charges later.",
    },

    { type: "h2", text: "Prices differ because the jobs are different" },
    {
      type: "p",
      text: "\"Washing machine drum cleaning\" is used to describe at least three very different jobs. People who compare prices without knowing this often feel they have been overcharged, when in fact they are comparing different types of work.",
    },
    {
      type: "table",
      caption: "Three jobs that are all called washing machine drum cleaning",
      head: ["Type of job", "What it involves", "Does it reach the outside of the drum?"],
      rows: [
        [
          "Pouring in a cleaning solution and running a cycle",
          "A cleaning solution or tablet goes in and a programme is run. No parts are removed.",
          "No. The water only swirls inside the inner drum.",
        ],
        [
          "Removing only the easy parts",
          "The wash plate or filter is taken out and cleaned, then the inside of the drum is wiped.",
          "Partly. The outside of the drum is still not cleaned.",
        ],
        [
          "Full strip-down clean",
          "The inner drum is lifted out of the machine and scrubbed inside and out; the outer tub, detergent drawer and filter are cleaned; then everything is reassembled and test-run.",
          "Yes, every spot is reached.",
        ],
      ],
    },
    {
      type: "p",
      text: "Most of the residue that makes laundry smell musty is on the outside of the inner drum, a side the water in a drum-clean programme never touches. That is why many households have poured in drum cleaner many times and the smell is still there.",
    },
    {
      type: "callout",
      tone: "tip",
      title: "The question that gets you an answer fastest",
      text: "Simply ask whether the drum is lifted out for cleaning. If the answer is no, it is a different job from the one you are comparing prices for, whether the figure is lower or higher.",
    },

    { type: "h2", text: "My prices, by machine type and capacity" },
    {
      type: "p",
      text: "My work is full strip-down cleaning only; there is no pour-in-and-spin option. Routine use of a cleaning solution or tablets is something you can buy at a convenience store and do yourself.",
    },
    {
      type: "table",
      caption: "At-home washing machine strip-down cleaning prices",
      head: ["Machine type", "Price", "Time needed"],
      rows: [
        ["Top loader", `From ${p.washer.topLoad} THB, depending on capacity`, "About 3 hours"],
        ["Front loader", `From ${p.washer.frontLoad} THB`, "About 3 hours"],
      ],
    },
    {
      type: "ul",
      items: [
        "The price includes travel to every sub-district in my service area, with no fuel charge or charge for going upstairs.",
        "Cleaning the detergent drawer, the lint filter and the bottom of the outer tub is included, not charged per item.",
        "Reassembly, levelling the machine and one test run before handover are included.",
        "30-day warranty on the work. If the original problem comes back in that period, I will come back and check it at no extra charge.",
      ],
    },
    {
      type: "p",
      text: "Front loaders cost more because the front panel and the door seal assembly have to come off before the outer tub can be lifted out, while a top loader can be taken apart directly from the top. The difference is not because of the machine's size.",
    },

    { type: "h2", text: "What changes the price, and what does not" },
    {
      type: "p",
      text: "I always give you the total before booking, but it helps to know what actually affects the price, so you can send complete information from the start and there is no need to renegotiate on site.",
    },
    {
      type: "ul",
      items: [
        "Affects the price: whether it is a top loader or a front loader, because the dismantling steps are completely different.",
        "Affects the price: the machine's capacity. A larger machine takes more time and effort at every step.",
        "Affects the price: the number of machines cleaned in one visit. Several machines are better value than calling me out for each one.",
        "Does not affect the price: distance within the service area. The price is the same in every sub-district.",
        "Does not affect the price: how dirty the machine is. I do not charge more because a machine is dirtier than expected.",
        "Does not affect the price: the brand. I take all brands at the same price.",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      title: "I only clean washing machines; I do not repair them",
      text: "If the machine has a problem that needs parts replaced, such as not spinning clothes dry enough, water not filling, or unusual noise from the motor, I will tell you honestly that it is repair work, which I do not take on, and I do not charge for the part I cannot do.",
    },

    { type: "h2", text: "Four questions to ask before agreeing with anyone" },
    {
      type: "ol",
      items: [
        "Is the inner drum lifted out for cleaning? This one question immediately separates a real strip-down clean from pouring in a cleaning solution.",
        "Does the quoted price include travel, and what could be added on site?",
        "How long does each machine take? A full strip-down clean cannot be finished in half an hour.",
        "Is there a warranty after cleaning, and what does it cover?",
      ],
    },
    {
      type: "p",
      text: "For my work, the answers are: the drum is lifted out for cleaning, travel within the service area is included, it takes about 3 hours, and the work carries a 30-day warranty.",
    },
    {
      type: "cta",
      text: "Send me a photo of your machine and its capacity on LINE, and I will tell you the total before we book.",
    },
  ],
  faqs: [
    {
      q: "What is the starting price for washing machine drum cleaning?",
      a: `Top loaders start from ${p.washer.topLoad} THB depending on capacity, and front loaders from ${p.washer.frontLoad} THB. This is a strip-down clean where the drum is lifted out and every part is cleaned, with travel within the service area included and a 30-day warranty on the work.`,
    },
    {
      q: "Why do washing machine drum cleaning prices vary so much?",
      a: "Mostly because they are different jobs. Much lower prices usually mean pouring in a cleaning solution or dropping in a tablet and running a programme, without taking the drum out, so the outside of the drum, where most of the residue builds up, is not cleaned. The clear question to ask is whether the drum is lifted out for cleaning.",
    },
    {
      q: "Is there a discount for cleaning several machines at once?",
      a: "Yes. Tell me the number and type of machines in advance, and I will give you the total before we book. Several machines in the same place work out cheaper than booking one visit at a time, because I come once and do all of them.",
    },
    {
      q: "My machine is very dirty. Will it cost more?",
      a: "No. The price I quote is the price you pay. I do not charge more even if the machine is dirtier than I assessed. The exception is when parts need replacing, which is repair work: I will tell you that I do not take it on, and I do not charge for that part.",
    },
    {
      q: "Do I need to pay a deposit?",
      a: "No. You pay after the job is finished and you have checked it. I accept cash or bank transfer, and I can issue a tax invoice in the company name if you need it for expense claims.",
    },
  ],
};
