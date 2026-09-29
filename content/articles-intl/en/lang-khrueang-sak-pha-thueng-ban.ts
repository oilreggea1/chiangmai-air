import type { IntlArticle } from "@/lib/content-types";
import { p } from "@/lib/site";

export const article: IntlArticle = {
  slug: "lang-khrueang-sak-pha-thueng-ban",
  title: "At-Home Washing Machine Cleaning in Chiang Mai: How It Works",
  h1: "Washing machine cleaning at your home: can it really be done on site, and what do you need to prepare?",
  description:
    "How at-home washing machine cleaning works: does the machine leave the house, how much space and water it takes, and which homes are harder to work in.",
  category: "Washing machines",
  updated: "2026-09-24",
  readMins: 7,
  image: {
    src: "/work/lang-thang-sak-pha-fa-bon-002.jpg",
    alt: "Looking down into a top-loading washing machine with the drum removed, showing a blue mesh lint filter in the middle of the tub",
  },
  excerpt:
    "A washing machine strip-down clean can be done entirely at your home, with no need to load the machine onto a truck and take it to a shop. What you need is about an arm's length of clear space around the machine, a water point and a drain.",
  keywords: [
    "washing machine cleaning service",
    "at-home washing machine cleaning",
    "washing machine drum cleaning service",
    "washing machine cleaning in a condo",
    "washing machine cleaning at home Chiang Mai",
  ],
  relatedService: "lang-washing-machine",
  blocks: [
    {
      type: "p",
      text: "The first question customers ask almost every time is whether the machine has to go to the shop. The answer is no. A strip-down clean can be done entirely at your home. I lift the drum out and clean it right where the machine stands, then reassemble it in the same place before I leave.",
    },
    {
      type: "p",
      text: "What people often do not know is that there are three conditions on site. If you know them in advance, the booking goes right and nobody makes a wasted trip. I will explain how the work goes from the moment I arrive until I pack up.",
    },

    { type: "h2", text: "The steps from arrival to packing up" },
    {
      type: "steps",
      items: [
        {
          title: "Test run before touching anything",
          detail:
            "I run the machine once to listen to it and watch how it works before taking it apart. If there is a fault that calls for repair work rather than cleaning, I tell you at this point, before I start dismantling anything.",
        },
        {
          title: "Pull the machine away from the wall and lay out the work area",
          detail:
            "About an arm's length of clear space around the machine is needed, so the top can be opened, screws undone and parts set down without bumping into things in the house.",
        },
        {
          title: "Remove and lift out the inner drum",
          detail:
            "On a top loader the drum comes out directly from the top. On a front loader the front panel and the door seal assembly have to come off first. This is when you get to see the outside of the drum, which you have never seen before.",
        },
        {
          title: "Scrub every part and rinse with clean water",
          detail:
            "This covers the outside of the drum, the bottom of the outer tub, the base under the wash plate, the detergent drawer and the lint filter. This step uses the most water, so a working water point and drain are needed.",
        },
        {
          title: "Reassemble and level the machine",
          detail:
            "Everything goes back in the original order, and the feet are adjusted so the machine is level. A machine that is not level shakes and moves out of position during the spin, which is a problem that shows up later.",
        },
        {
          title: "Another test run in front of you",
          detail:
            "We check there are no leaks at the joints and the machine does not shake abnormally. Then I pack up and clean the area back to how it was.",
        },
      ],
    },
    {
      type: "p",
      text: "The whole process takes about three hours per machine. If there are several machines in the same place, the second one is usually quicker because the work area does not need setting up again.",
    },

    { type: "h2", text: "Three things the site needs" },
    {
      type: "table",
      caption: "Site conditions for at-home cleaning",
      head: ["What is needed", "Why", "What to do if it is not available"],
      rows: [
        [
          "About an arm's length of clear space around the machine",
          "The machine has to be pulled out, and the drum and parts set down",
          "Move things out of the way temporarily, or let me know in advance so I can bring floor protection and plan where the parts will go",
        ],
        [
          "A working water point",
          "The scrubbing stage uses water continuously",
          "Let me know in advance and I will bring a long hose and extra water containers",
        ],
        [
          "A drain",
          "The dirty rinse water needs somewhere to go; it is not let out onto the floor of your home",
          "I collect it in a bucket and carry it out to empty it. This works but takes longer, so please tell me in advance",
        ],
      ],
    },
    {
      type: "callout",
      tone: "info",
      title: "Condos and dormitories are fine if two things are sorted out",
      text: "Most buildings set the hours when technicians may work, and many require advance registration with the building's juristic person (the management office). Let me know beforehand what conditions your building has, and I will schedule the job for a time when I can get in and prepare whatever documents the building asks for.",
    },

    { type: "h2", text: "Which homes are harder than usual" },
    {
      type: "p",
      text: "I can work in most places, but a few cases are worth mentioning in advance so enough time and people can be allowed for.",
    },
    {
      type: "ul",
      items: [
        "The machine is on the second floor or higher and the stairs are narrow. The machine itself does not need to be carried down, but there must be space on that floor to set the drum down and work.",
        "The machine is built in or sits in a tight-fitting space. It has to be pulled out before it can be taken apart, and in some cases surrounding shelves have to be removed first.",
        "The machine stands in a bathroom with no free space. It has to be moved somewhere else temporarily for the work and then moved back.",
        "A front loader whose feet are fixed firmly to a concrete base. Whether it can be removed has to be assessed on site.",
      ],
    },
    {
      type: "p",
      text: "You can send a wide-angle photo showing the machine and the area around it on LINE first. From the photo I can tell you whether the job can be done or what else needs preparing.",
    },

    { type: "h2", text: "Price and what is already included" },
    {
      type: "ul",
      items: [
        `Top loaders from ${p.washer.topLoad} THB depending on capacity, front loaders from ${p.washer.frontLoad} THB.`,
        "Travel is included for every sub-district in my service area, with no fuel charge or charge for going upstairs.",
        "Cleaning the detergent drawer, the lint filter and the bottom of the outer tub is included, not charged per item.",
        "30-day warranty on the work. Payment after the job is finished and you have checked it, with no deposit.",
      ],
    },
    {
      type: "cta",
      text: "Send me photos of your machine and the space around it on LINE, and I will tell you the total price and how long it will take before we book.",
    },
  ],
  faqs: [
    {
      q: "Does the washing machine have to be taken to a shop?",
      a: "No. I do everything at your home. I lift the drum out and clean it right where the machine stands, then reassemble it in the same place before I leave. What is needed is about an arm's length of clear space around the machine, a water point and a drain.",
    },
    {
      q: "Does it use a lot of water, and where does the rinse water go?",
      a: "The scrubbing stage uses a fair amount of water continuously. The rinse water is dirty, so a working drain is needed. If there is no convenient drain on site, I collect it in a bucket and carry it out to empty it. This works but takes longer, so please tell me in advance.",
    },
    {
      q: "I live in a condo. Can it be done there?",
      a: "Yes. But most buildings set the hours when technicians may work, and many require advance registration with the management office. Tell me your building's conditions first, and I will schedule the job for a time when I can get in and prepare whatever documents are requested.",
    },
    {
      q: "How long does the cleaning take, and for how many hours can I not use the machine?",
      a: "About three hours per machine, counting from taking it apart to reassembly and the finished test run. After that you can use it normally straight away, with no need to wait for it to dry or let it rest.",
    },
    {
      q: "I have several machines, for example in a dormitory or rental house. Do you take that on?",
      a: "Yes, and it works out more economical than booking one visit at a time, because I come once and do all the machines. Tell me the number of machines, their types and when the rooms are free, and I will give you the total price and the number of days needed before we book.",
    },
  ],
};
