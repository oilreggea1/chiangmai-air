import type { IntlArticle } from "@/lib/content-types";
import { p, btu } from "@/lib/site";

export const article: IntlArticle = {
  slug: "air-nam-yot-kae-yang-rai",
  title: "Aircon Dripping Water Indoors? Causes and Fixes, Blocked Drain Line",
  h1: "Aircon dripping water: what causes it and how to fix it, starting with the blocked drain line I find most often",
  description:
    "Water dripping from an aircon onto the floor or furniture: every cause from a blocked drain line and a frozen coil to a unit mounted off level and worn pipe insulation, with checks you can do yourself and how to prevent it.",
  category: "Aircon problems",
  updated: "2026-09-29",
  readMins: 8,
  image: { src: "/work/air-2569-13.jpg", alt: "A technician's gloved hand holding an aircon drain pipe with sludge blocking the inside" },
  excerpt:
    "Water dripping from an aircon should not be ignored. It soaks into ceilings, grows mould on walls, and in older wooden houses it can swell the timber for good. Finding the cause and fixing it works far better than catching the drips in a bucket.",
  keywords: ["aircon dripping water", "aircon leaking water inside", "blocked aircon drain line", "aircon drain cleaning", "aircon technician Chiang Mai"],
  relatedService: "lang-air",
  blocks: [
    {
      type: "p",
      text: "Water dripping onto the floor, onto furniture or near the head of the bed at night is a problem that affects daily life directly, and I understand you want it sorted as fast as possible. The first thing to know is that every aircon makes water; that is normal. Cooling pulls moisture out of the air and condenses it into droplets on the indoor coil. That water runs into a tray and drains away through the drain line. This all happens behind the cover without the owner ever having to touch it, until one day the water starts coming out the wrong way.",
    },
    {
      type: "p",
      text: "What I do not recommend is putting a container underneath or wrapping it in a cloth. That does not fix the cause and lets the problem carry on for months. In the meantime the water soaks into the ceiling, grows mould on the walls, and in older wooden houses, of which Chiang Mai has many, timber that gets wet again and again swells and warps for good. Below I go through the causes one at a time.",
    },

    { type: "h2", text: "Where the water in an aircon comes from, and where it should go" },
    {
      type: "p",
      text: "Once you understand how it works, you can pin down the cause much faster. Room air always carries some water vapour. When that air passes over the cold indoor coil, the vapour condenses into droplets on the coil fins, then runs down into the drain tray underneath. From there it flows along a PVC pipe that slopes downwards to the outside, by gravity alone and with no pump, except for certain installations that need a condensate pump.",
    },
    {
      type: "p",
      text: "Because the system relies on gravity alone, it can fail in only three ways: the path is blocked, the path does not slope downwards, or there is more water than the tray can hold. Whatever way the water is dripping in your home, the cause always falls into one of these three.",
    },
    {
      type: "callout",
      tone: "info",
      title: "Chiang Mai's rainy season makes this worse",
      text: "From July to October the air is far more humid than the rest of the year, so the air passing over the coil condenses into more water than usual. A drain that coped fine in the cool season starts falling behind in the rainy season, which is why the dripping aircon jobs I take cluster in this part of every year.",
    },

    { type: "h2", text: "The number one cause: a blocked drain line" },
    {
      type: "p",
      text: "Going by symptoms alone before I have seen the unit, a blocked drain line is the most common cause. Water runs through the pipe all the time and it stays damp inside. Dust that comes off the coil mixes in and turns into a sticky sludge on the pipe walls, then algae and slime from microbes grow on top of it, until the channel is smaller than the amount of water that needs to drain. The water then backs up, overflows the tray and comes out at the front of the unit.",
    },
    {
      type: "ul",
      items: [
        "The telltale sign is water dripping from under the front cover, usually in a straight line from the same spot every time.",
        "It usually gets worse the longer the aircon runs, as water builds up until it overflows the tray.",
        "Some units drip when first switched on and then stop by themselves. That means the pipe is not fully blocked yet and some water can still seep through.",
        "If you check the end of the drain line outside, little or no water comes out.",
      ],
    },
    {
      type: "p",
      text: "The right fix is to blow or suck the blockage out of the whole length of pipe, then clean the inside of the drain tray, not just poke through the end of the pipe. If sludge is left in the line, it will block again within a few weeks. Flushing the whole drain line is included in my aircon clean, and in the jobs I take, a blocked line usually comes with a coil and tray that are already dirty, so cleaning the unit at the same time is better value than fixing just the one spot.",
    },
    {
      type: "callout",
      tone: "warn",
      title: "Do not pour bathroom cleaner down the aircon drain",
      text: "This is often suggested online, but strongly corrosive cleaners break down the pipe joints and the solvent cement that holds them. If it flows back up into the plastic drain tray or onto the aluminium coil fins, the repair costs many times more than a drain clean.",
    },

    { type: "h2", text: "A dirty indoor coil that turns to ice" },
    {
      type: "p",
      text: "This is the second most common cause over the whole year, and it becomes the first right after the burning season. When the coil fins are clogged with dust and soot, less air gets through, so the cold the unit makes is not carried away with the airflow. The coil surface drops below freezing, and the condensed droplets turn into ice that keeps building up.",
    },
    {
      type: "p",
      text: "As long as the aircon keeps running, the ice keeps getting thicker. But when it is switched off, or the unit cuts out, the whole block of ice melts at once in a short time, which is far more water than the drain tray was designed to hold. The result is water overflowing all at once.",
    },
    {
      type: "ul",
      items: [
        "The telltale sign is water coming out in bursts rather than a steady drip, especially after the aircon is switched off.",
        "It usually comes with weaker cooling and weaker airflow, because both have the same cause.",
        "If you open the front cover while it is running, you will see white ice on the coil fins or on the copper pipe.",
      ],
    },
    {
      type: "callout",
      tone: "danger",
      title: "If you see ice, switch the aircon off now",
      text: "Do not keep running it. When the coil freezes, refrigerant that has not fully evaporated flows back into the compressor as a liquid, and a compressor is built to compress gas, not liquid. Running it anyway damages the most expensive part in the system. The right way is to switch off cooling, run fan mode until the ice has melted, and then have a technician find the cause.",
    },

    { type: "h2", text: "Other causes, and how to tell them apart" },
    {
      type: "table",
      caption: "Causes of a dripping aircon, in order of how often I find them on jobs",
      head: ["Cause", "Where the water comes out", "What sets it apart"],
      rows: [
        ["Blocked drain line", "Under the front cover, from the same spot every time", "Drips more the longer it runs; little or no water from the drain outside"],
        ["Dirty indoor coil that has frozen", "Pours out in bursts", "Comes in bursts, especially after switching off, and cooling has dropped"],
        ["Unit not mounted level", "Always from one particular corner", "Always drips on the same side, usually from the day it was installed"],
        ["Drain line sloping the wrong way or with a dip", "Under the front cover", "Drips on and off; comes back within a few months after the line is cleaned"],
        ["Worn or torn insulation on the refrigerant pipes", "Along the pipe run, not at the unit", "Droplets form all along the pipe; most common in the very humid rainy season"],
        ["Cracked drain tray or tray clogged with algae", "Underneath the unit", "Usually with a musty smell too, because water sits in the tray for a long time"],
        ["Air blowing back up the drain line", "Under the front cover, bubbling and spitting water", "Found where the pipe end sits in water or joins a shared drain without a trap"],
      ],
    },
    {
      type: "p",
      text: "The one most often overlooked is the refrigerant pipe insulation. Because the water shows up along the pipe run rather than at the unit, many homes assume it is a roof leak or a leak in the wall. In fact the black insulation around the copper pipes has worn out or torn, so the very cold pipe is exposed straight to humid air and droplets form on it. The fix is new insulation, and it has nothing to do with the drain line.",
    },

    { type: "h2", text: "How much you can check yourself before calling a technician" },
    {
      type: "p",
      text: "Most dripping aircon jobs need tools, but there are a few things you can check yourself to give me more accurate information, and in some cases you can fix it completely on your own.",
    },
    {
      type: "steps",
      items: [
        { title: "Find the end of the drain line outside", detail: "Follow the small PVC pipe from the unit to where it ends. Run the aircon for about ten minutes and see whether water comes out. If nothing comes out while water is dripping inside, the line is blocked." },
        { title: "Check whether the pipe end is sitting in water", detail: "A pipe end sunk in a plant pot, a bucket or a drain gully with standing water cannot drain. Lifting the end clear of the water fixes it. You can do this yourself straight away, and it happens more often than most people would think." },
        { title: "Take the filter out and look at the coil", detail: "If there is ice on the coil fins, switch off cooling and run fan mode until the ice melts, then have a technician check whether it is a clogged coil or low refrigerant." },
        { title: "Pin down exactly where the water comes out", detail: "Dab a tissue at different points: under the front cover, the left and right corners, and along the pipe run, to tell whether the water comes from the unit or from the pipe insulation. This alone helps me bring the right equipment to the job." },
        { title: "Note when it drips", detail: "All the time, just after switching on, or after switching off: these three patterns point to different causes. Tell me which when you get in touch; it makes my assessment more accurate." },
      ],
    },

    { type: "h2", text: "What happens if you leave it" },
    {
      type: "p",
      text: "Many people choose to catch the water in a container for now, but the damage that follows usually costs many times more than the repair, and some of it cannot be put back the way it was.",
    },
    {
      type: "ul",
      items: [
        "A gypsum ceiling that gets soaked stains yellow and then sags, and the whole panel has to be replaced.",
        "Walls that stay damp grow black mould that paint will not cover, because it roots into the wall itself.",
        "In older wooden houses, of which Chiang Mai has many, timber that soaks up water swells and warps, and termites can follow.",
        "Water dripping near sockets or cable trunking is an electrical risk that should not be ignored.",
        "If the cause is a frozen coil, running it anyway damages the compressor, the most expensive part.",
        "Water that sits in the tray for a long time becomes a breeding ground for mould, causing a musty smell and spreading spores into the room.",
      ],
    },

    { type: "h2", text: "Stopping it from happening again" },
    {
      type: "p",
      text: "A dripping aircon is one of the easiest problems to prevent, because nearly every cause is dirt building up slowly. If you keep to a regular cleaning schedule, the chance of it happening is very low.",
    },
    {
      type: "ol",
      items: [
        "Have the aircon cleaned on schedule rather than waiting for symptoms. A clean covers the coil, the drain tray and the drain line all at once.",
        "Wash the filters yourself every 2 weeks as manufacturers recommend, and no longer than 4 weeks during the burning season, to cut down the dust that falls into the tray and line as sludge.",
        "Check the end of the drain line once a year to make sure it is clear of water and nothing is blocking it. The start of the rainy season is a good time.",
        "If the line has blocked several times in a short period, have a technician check its slope; it may be an installation problem that needs a structural fix.",
        "If there is a musty smell as well as dripping, go for a full strip-down clean, because it means mould has reached the blower wheel and the drain tray.",
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "The best timing for homes in Chiang Mai",
      text: "I recommend a thorough clean in May to June, to clear out all the soot from the burning season before the humid rainy season begins. That heads off both dripping and musty smells in one go, which works better than waiting for symptoms before calling a technician.",
    },

    { type: "h2", text: "What fixing a dripping aircon costs, and what I cover" },
    {
      type: "p",
      text: `Dripping aircon jobs fall into two groups by cause. If it comes from a dirty coil, tray and drain line, an aircon clean fixes it along the way. A standard clean for a 9,000–18,000 BTU unit is ${p.wash.std} THB, or ${p.wash.stdBulk} THB each for three or more units. A ${btu.washBig} BTU unit is ${p.wash.big} THB, or ${p.wash.bigBulk} THB each for two or more. Every clean comes with a 30-day warranty against dripping.`,
    },
    {
      type: "p",
      text: `Where algae and mould have built up heavily in the drain tray and blower wheel, which is common in units that have not been cleaned for a long time, I recommend the Premium Full Wash, a 100% strip-down clean at ${p.wash.premium} THB, because it reaches the blower wheel and drain tray directly; it carries a 60-day drip warranty. Jobs that need a repair or new parts, such as a drain line with the wrong slope that has to be rerun, or pipe insulation that has to be replaced, depend on the model and the parts used. I always give you the full price before I start. There is a ${p.repair.diagnostic} THB diagnostic charge, which I take off the repair bill if you go ahead with me.`,
    },
    {
      type: "cta",
      text: "If your aircon is dripping right now, send a photo of where the water is coming from on LINE. I will give you a first assessment of whether it is likely a blocked drain line or a frozen coil, and check for an open slot in your area.",
    },
    {
      type: "sources",
      items: [
        { title: "Seasons of Thailand (in Thai)", publisher: "Thai Meteorological Department", url: "https://tmd.go.th/info/ฤดูกาลของประเทศไทย", note: "The rainy season runs from about mid-May to mid-October, with heavy, continuous rain from late July; the cool season runs from about mid-October to mid-February" },
        { title: "Using your aircon and remote control efficiently (in Thai)", publisher: "Siam Daikin Sales", url: "https://www.daikin.co.th/th/article/articleDetail/energysaving", note: "Recommends cleaning the filters every 2 weeks" },
        { title: "How to clean the air filter and PM 1.0 filter (in Thai)", publisher: "Samsung Thailand", url: "https://www.samsung.com/th/support/home-appliances/how-to-cleaning-process-of-air-filter-and-pm-1-filter/", note: "Recommends cleaning the air filter every two weeks" },
      ],
    },
  ],
  faqs: [
    {
      q: "Will an aircon clean alone stop the dripping?",
      a: "Yes, when the cause is dirt, which is the case for most of the jobs I take, because a clean covers the coil, the drain tray and the drain line together. But if the unit is not mounted level, the line slopes the wrong way or the pipe insulation has worn out, it will still drip after a clean, because the installation needs fixing. I can tell you which it is first.",
    },
    {
      q: "Can I pour vinegar or bathroom cleaner down the drain line?",
      a: "I do not recommend it. Corrosive cleaners break down the solvent cement and the pipe joints, and if they flow back onto the plastic tray or the aluminium coil fins, the damage costs more than the original problem. The right way is to blow or suck the blockage out of the whole line, then clean the drain tray.",
    },
    {
      q: "Water drips along the pipe run, not from the unit. What causes that?",
      a: "Usually the insulation around the refrigerant pipes has worn out or torn, so the very cold copper pipe is exposed straight to humid air and droplets form on it. In my jobs it is most common in Chiang Mai's humid rainy season. The fix is new insulation, and it has nothing to do with the drain line.",
    },
    {
      q: "Can I keep using the aircon while it drips?",
      a: "If it is an ordinary blocked drain line, you can use it for a short while with something catching the water, but have a technician look at it as soon as possible, because the water soaks into the ceiling and walls. If you find ice on the coil, switch it off immediately, because running it sends liquid refrigerant back into the compressor and damages it.",
    },
    {
      q: "The drain line was cleaned less than six months ago and it is blocked again. Why?",
      a: "There are two possibilities. First, last time only the end of the pipe was cleared, so sludge stayed in the line and blocked it again quickly. Second, the line has a dip or slopes the wrong way from the installation, so water sits in it all the time and algae grows. The second case needs the slope corrected to fix it for good.",
    },
  ],
};
