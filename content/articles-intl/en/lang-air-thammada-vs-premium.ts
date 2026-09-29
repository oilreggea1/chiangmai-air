import type { IntlArticle } from "@/lib/content-types";
import { p, btu } from "@/lib/site";

export const article: IntlArticle = {
  slug: "lang-air-thammada-vs-premium",
  title: `Standard Clean ${p.wash.std} vs Strip-Down ${p.wash.premium} THB: The Difference`,
  h1: `Standard aircon clean at ${p.wash.std} vs strip-down clean at ${p.wash.premium}: how they differ, and which homes should pay more`,
  description:
    `A standard aircon clean at ${p.wash.std} THB vs a Premium Full Wash strip-down at ${p.wash.premium} THB: which steps differ, who should pay more, and when it is not needed.`,
  category: "Aircon guides",
  updated: "2026-07-29",
  readMins: 7,
  image: { src: "/work/lang-air-fang-fa-001.jpg", alt: "A technician holding up two metal coil sections side by side, the left one still black with grime, the right one washed clean" },
  excerpt:
    "The price differs by more than three times, but not every home needs the more expensive service. I explain, using the criteria I actually apply on the job, when a standard clean is enough and when a strip-down clean is the only option that fixes the problem.",
  keywords: [
    "standard vs strip-down aircon cleaning", "Premium Full Wash aircon", "aircon strip-down cleaning price",
    `aircon cleaning ${p.wash.std} THB Chiang Mai`, "which aircon cleaning to choose",
  ],
  relatedService: "lang-air",
  blocks: [
    {
      type: "p",
      text: `The gap between ${p.wash.std} THB and ${p.wash.premium} THB is a fairly wide one, so many customers get in touch to ask which they should choose. The short answer is that the two are different kinds of job, not the same job done more thoroughly. A standard clean cleans the parts that can be reached without taking the unit apart. A strip-down clean takes the parts out and washes them one by one, then puts the unit back together.`,
    },
    {
      type: "p",
      text: `The more important point is that not every home needs the more expensive service. If your aircon is already cleaned regularly and has no smell, paying extra to move up to ${p.wash.premium} THB (depending on the unit size) will not make a meaningful difference. I will explain clearly where the line is.`,
    },

    { type: "h2", text: `What the ${p.wash.std} THB standard clean covers` },
    {
      type: "p",
      text: "A standard clean done properly is not a matter of spraying water through the air outlet, as many people assume. These are the steps I actually carry out.",
    },
    {
      type: "ol",
      items: [
        "Switch off the circuit breaker, then lay a double-layer protective sheet over the floor and cover the furniture.",
        "Remove the front cover and panel, waterproof the circuit board, and fit a water-catching bag round the unit.",
        "Take out the filters and wash them separately.",
        "Wash the indoor coil at controlled pressure to flush the grime out from between the fins.",
        "Clean the drain tray and flush the drain line so it drains normally.",
        "Wash the outdoor coil outside, clearing leaves and dust caught in the fins.",
        "Dry the parts, reassemble, and test-run the unit in front of you.",
        "Clean up so the floor and walls are dry and clean, just as they were before the job started.",
      ],
    },
    {
      type: "p",
      text: `The job takes about 45–60 minutes per unit and fixes the main problem: a clogged coil causing weak airflow and slow cooling. The price for a 9,000–18,000 BTU unit is ${p.wash.std} THB, or ${p.wash.stdBulk} THB each for three or more units in one visit. A ${btu.washBig} BTU unit is ${p.wash.big} THB, or ${p.wash.bigBulk} THB each for two or more, with a 30-day warranty on the work.`,
    },

    { type: "h2", text: `How the ${p.wash.premium} THB Premium Full Wash differs` },
    {
      type: "p",
      text: "The Premium Full Wash is a 100% strip-down clean, meaning every removable part is lifted out of the unit's frame and washed one by one, including the blower wheel, which a standard clean cannot reach. Disinfectant is then sprayed before the unit is put back together.",
    },
    {
      type: "p",
      text: "The difference users notice most clearly is in the smell and in what comes out with the air, because the biological grime clinging to the blower wheel grooves and the corners of the drain tray is the real source of musty smells, and spraying through the coil does not reach those places at all. The job takes about 1.5–2 hours per unit and carries a 60-day drip warranty.",
    },

    { type: "h2", text: "Side-by-side comparison" },
    {
      type: "table",
      caption: "Standard clean compared with the Premium Full Wash 100% strip-down clean",
      head: ["Item", "Standard clean", "Premium Full Wash"],
      rows: [
        ["Price (9,000–18,000 BTU)", `${p.wash.std} THB (${p.wash.stdBulk} THB each for 3 or more units)`, `${p.wash.premium} THB`],
        ["Time per unit", "About 45–60 minutes", "About 1.5–2 hours"],
        ["Front cover and panel removed", "Yes", "Yes"],
        ["Indoor coil wash", "Washed with water pressure", "Washed with water pressure, reaching further because the parts are already out"],
        ["Blower wheel", "Only the surfaces that can be reached", "Removed and washed separately as a whole"],
        ["Drain tray and drain line", "Cleaned and flushed in place", "Removed and washed separately"],
        ["Disinfectant", "Disinfectant spray", "Disinfectant spray"],
        ["Outdoor coil wash", "Included", "Included"],
        ["Fixes musty smells?", "Partly, if the smell has not gone deep", "Yes, directly, because it reaches the source of the smell"],
        ["Drip warranty", "30 days", "60 days"],
      ],
    },

    { type: "h2", text: "The blower wheel is what makes the price different" },
    {
      type: "p",
      text: "To understand why the two services are priced differently, start with one part: the blower wheel. It is a long cylinder with small blades all round it, fitted behind the indoor coil, and it spins to draw air across the coil and blow it out of the outlet.",
    },
    {
      type: "p",
      text: "The problem is that everything that drifts through the coil ends up stuck in the grooves between the blower wheel's blades, and those grooves are too narrow for a spray nozzle to reach. With the moisture from the aircon's normal operation, the grime there becomes a breeding ground for mould, so every time air is blown out, it carries smells and spores into the air you breathe.",
    },
    {
      type: "callout",
      tone: "warn",
      title: "A musty smell is the sign it is time for a strip-down clean",
      text: "If there is a musty or sour smell for the first 5–10 minutes after switching on, which then gradually fades, in practice that all but confirms that mould has reached the blower wheel and the drain tray. In this case, no number of standard cleans will fix the problem, because they do not reach the source.",
    },

    { type: "h2", text: "Which homes should choose the premium service" },
    {
      type: "p",
      text: "The premium service is not necessary for every home, but if yours meets any one of the following conditions, paying extra is worth it.",
    },
    {
      type: "ul",
      items: [
        "The aircon smells musty or sour when switched on, and the smell has come back after a standard clean.",
        "It has not been cleaned for more than a year, or it has just been through Chiang Mai's smoke haze season (roughly February to April) without a single clean.",
        "Someone in the home has allergies or asthma, or there are small children or elderly people.",
        "It is a bedroom aircon, the room where you breathe for the longest unbroken stretch each day.",
        "It is a restaurant or kitchen aircon coated with cooking oil vapour, because a standard clean cannot remove sticky grime of this kind.",
        "There are pets in the home, because fur drawn into the unit wraps mainly around the blower wheel.",
        "You can see black, algae-like spots at the air outlet or on the louvres, which means mould has spread to the outside.",
      ],
    },

    { type: "h2", text: "When there is no need to pay more yet" },
    {
      type: "p",
      text: "Knowing when a strip-down clean is not yet needed matters just as much, because some customers ask for one when the unit's condition does not call for it. In these cases I tell them honestly that a standard clean is enough this time.",
    },
    {
      type: "ul",
      items: [
        "It is already cleaned regularly twice a year and has no smell.",
        "The aircon is newly installed, or has been in use for less than a year.",
        "It is in a room that is hardly ever used, such as a guest room or storeroom.",
        "It had a strip-down clean less than a year ago and shows no problems.",
        "The only problem is that it is not cooling, with no smell. That may not be about cleanliness at all, so the cause should be checked first.",
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "You can decide after I have assessed it on site",
      text: "The approach I recommend most often is to book a standard clean first, then let me open the unit and assess its real condition on site. If I find the blower wheel so caked with grime that a standard clean is not enough, I will tell you, with the reasons, and you make the decision. The price only changes once you have agreed.",
    },

    { type: "h2", text: "Is it worth it over a year?" },
    {
      type: "p",
      text: "Consider a three-year cycle for one 12,000 BTU bedroom aircon. Option one is a standard clean twice a year. Option two is one standard clean and one strip-down clean each year. Looking at the numbers alone, option two clearly costs more, but what you get back is a unit where grime never builds up into a permanent problem.",
    },
    {
      type: "p",
      text: "In practice, the pattern I find most suitable for ordinary homes in Chiang Mai is a standard clean as the main routine twice a year, with a strip-down clean every 2–3 years or when a smell starts. For the bedroom of someone with a dust allergy, or where there are small children, switching to a strip-down clean once a year works better.",
    },
    {
      type: "p",
      text: "What pushes up the total cost is not choosing the premium service, but leaving it so long that the grime becomes ingrained. At that point a standard clean no longer works and you end up paying for a strip-down clean anyway. The only difference is how many months you spent in between running a unit that smells and uses more power than it should.",
    },

    { type: "h2", text: "Other prices worth knowing before you book" },
    {
      type: "p",
      text: "Most customers worry more about costs being added later than about a high price. So I set out the other prices that are often asked about along with cleaning before you book, and you can work out the full cost from the start.",
    },
    {
      type: "table",
      caption: "All service prices, stated in advance before booking",
      head: ["Service", "Price", "Notes"],
      rows: [
        ["Standard aircon clean, 9,000–18,000 BTU", `${p.wash.std} THB/unit`, `${p.wash.stdBulk} THB each for 3 or more units`],
        [`Standard aircon clean, ${btu.washBig} BTU`, `${p.wash.big} THB/unit`, `${p.wash.bigBulk} THB each for 2 or more units`],
        ["Premium Full Wash, 100% strip-down clean", `${p.wash.premium} THB`, "Includes the blower wheel and disinfectant spray"],
        ["Diagnostic check", `${p.repair.diagnostic} THB`, "Refunded if you go ahead with the repair with me"],
        ["R32 / R410A refrigerant top-up", `${p.repair.refrigerantPerLb} THB/lb`, "I always tell you how many pounds before topping up"],
        ["Aircon installation, 9,000–12,000 BTU", `${p.install.small} THB`, "1-year warranty if you buy the unit from me, 6 months if you supply your own"],
        [`Aircon installation, ${btu.installLarge} BTU`, `${p.install.large} THB`, "Same warranty terms as above"],
        ["Aircon relocation", `${p.install.relocate} THB`, `Removal of an old unit only: ${p.install.removeOnly} THB`],
      ],
    },

    { type: "h2", text: "Summary" },
    {
      type: "ul",
      items: [
        "A standard clean cleans the parts that can be reached; a strip-down clean takes the parts out and washes them one by one.",
        "What makes the prices different is the blower wheel and the drain tray, which are the source of smells.",
        "If there is a musty smell, it has not been cleaned for more than a year, someone at home has a dust allergy, or it is a restaurant kitchen, choose a strip-down clean.",
        "If it is already cleaned regularly and has no smell, a standard clean is enough for its condition.",
        "A suitable pattern for ordinary homes is a standard clean twice a year and a strip-down clean every 2–3 years.",
        "The drip warranty is 30 days for a standard clean and 60 days for a strip-down clean.",
      ],
    },
    {
      type: "cta",
      text: "If you are still unsure whether to choose a standard or a strip-down clean, send photos of the air outlet and the filters to the aircon LINE account @iu3333. I will help you assess it from what I can see before you book.",
    },
  ],
  faqs: [
    {
      q: "If there is still a smell after a standard clean, do I have to pay the full strip-down price on top?",
      a: "If you are still within the 30-day warranty on the standard clean, let me know first. I will come and check whether it is an issue with my own cleaning work or mould that has reached the blower wheel. If it is the latter, a strip-down clean is a different kind of job that has to be charged at its actual price, but I will show you why a standard clean is not enough.",
    },
    {
      q: "Should I have a brand-new aircon strip-down cleaned straight away so it starts clean?",
      a: "There is no need. A new unit has no build-up to clean yet, and taking it apart and reassembling it unnecessarily puts the plastic catches at risk. I recommend standard cleans on the normal schedule first, then considering a strip-down clean after two to three years, or when a smell starts.",
    },
    {
      q: `For a 24,000 BTU aircon, is the strip-down price different from ${p.wash.premium} THB?`,
      a: "Tell me the size and model first. Large aircons and some types of unit come apart differently, so I will confirm the price before you book.",
    },
    {
      q: "Does frequent strip-down cleaning make an aircon wear out faster?",
      a: "If it is put back together correctly, a strip-down clean does not make the unit wear out faster, but there is no need to do it every time. Generally every 2–3 years, or once a year for the bedroom of someone with a dust allergy, is enough. The real risk lies in refitting the blower wheel off centre, which is why this is not a job to do yourself.",
    },
    {
      q: "Is there a discount on the premium service for several units at once?",
      a: `Tell me the number of units and their sizes first. The discounts I publish are on the standard clean: ${p.wash.stdBulk} THB each for three or more 9,000–18,000 BTU units, and ${p.wash.bigBulk} THB each for two or more ${btu.washBig} BTU units. For premium jobs on several units, I always give you the total price before you book, and I can issue a full tax invoice in a company's name.`,
    },
  ],
};
