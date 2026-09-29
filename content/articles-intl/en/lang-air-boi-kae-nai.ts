import type { IntlArticle } from "@/lib/content-types";
import { p, btu } from "@/lib/site";

export const article: IntlArticle = {
  slug: "lang-air-boi-kae-nai",
  title: "How Often Should You Clean an Aircon? More Often in Chiang Mai?",
  h1: "How often should an aircon be cleaned, and why homes in Chiang Mai need it more often than elsewhere",
  description:
    "The standard answer is every 6 months, but Chiang Mai has a full smoke-haze season every year. Cleaning intervals for homes, condos, dorms, cafés and offices.",
  category: "Aircon guides",
  updated: "2026-07-29",
  readMins: 7,
  image: { src: "/work/lang-air-thod-lang-009.jpg", alt: "A still-blackened indoor coil and air filter side by side on a tiled floor, photographed before cleaning" },
  excerpt:
    "Every 6 months is only a middle figure for typical use. I work out the right interval for your home from the hours of use, the surroundings of the building and Chiang Mai's seasons, rather than by counting calendar months.",
  keywords: [
    "how often to clean aircon",
    "how many months between aircon cleaning",
    "aircon cleaning schedule Chiang Mai",
    "how many times a year to clean aircon",
    "condo and dorm aircon cleaning",
  ],
  relatedService: "lang-air",
  blocks: [
    {
      type: "p",
      text: "How often to clean an aircon is the question I get asked most on the job. The usual answer is a single figure, every 6 months, which is not wrong, but it is a middle value for typical use in typical surroundings. The point is that homes in Chiang Mai are not in typical surroundings all year round, and no two aircons are used the same way. A bedroom aircon that runs 8 hours a night and a café aircon that runs 12 hours a day with customers coming and going all the time should not be on the same cleaning schedule.",
    },
    {
      type: "p",
      text: "I break it down by type of use: what the right interval is, where the 6-month figure comes from, and, if your home is in Chiang Mai, how to adjust the interval so it gives good value without spending more than you need to.",
    },

    { type: "h2", text: "Where the every-6-months figure comes from" },
    {
      type: "p",
      text: "The commonly quoted figure comes from an energy-saving point of view: it is the interval within which the coil is not yet clogged enough to significantly affect heat transfer. The technical reason is easy to understand. Dust on the indoor coil fins acts like a thin layer of insulation that blocks heat transfer, so the compressor has to run longer each cycle to bring the room down to the same temperature.",
    },
    {
      type: "callout",
      tone: "info",
      title: "6 months is the minimum, not the ceiling",
      text: "This figure assumes moderate use and air around the building without unusual dust. If you use the aircon more heavily than that, or live in a city with a dusty season like Chiang Mai, sticking rigidly to 6 months often means running a unit with an already clogged coil for months without knowing it.",
    },

    { type: "h2", text: "Why the middle figure does not work for Chiang Mai" },
    {
      type: "p",
      text: "Chiang Mai sits in a basin surrounded by mountains. In the dry season, cooler air above presses down on the air below, so smoke from burning cannot escape and stays trapped over the city for weeks at a time. The Geo-Informatics and Space Technology Regional Center for the North at Chiang Mai University reported around 6,676 cumulative hotspots in northern Thailand in early 2026, up about 67% from around 3,996 in the same period the year before. In practice this means the amount of soot and dust passing through the aircon filter in your home each day is clearly higher than in other seasons.",
    },
    {
      type: "p",
      text: "Once the smoke-haze season is over, Chiang Mai goes straight into a very humid rainy season. When the soot on the coil gets damp, it becomes food and a home for mould. That is why many homes start to notice a musty smell from July to September, even though a couple of months earlier the unit was cooling normally. In short, Chiang Mai has two seasons back to back that affect aircons in different ways: one clogs the coil, the other causes the smell.",
    },

    { type: "h2", text: "Cleaning intervals by type of use" },
    {
      type: "p",
      text: "This table shows the intervals I recommend to customers on the job, based on hours of use per day together with the amount of dust the unit has to handle.",
    },
    {
      type: "table",
      caption: "The aircon cleaning intervals I recommend, by type of use (Chiang Mai conditions)",
      head: ["Type of use", "Approximate hours of use", "Recommended interval", "Reason"],
      rows: [
        ["Typical home, bedroom", "6–9 hrs/day, nights only", "Twice a year", "Once before the smoke-haze season and once after it is the most suitable interval"],
        ["Home with the aircon on all day, with children or older people", "10–16 hrs/day", "Every 4 months", "Long continuous use, and these groups are more sensitive to dust and mould spores than most people"],
        ["Condo, single room", "8–12 hrs/day", "Twice a year", "The room is sealed, so less dust gets in than in a house, but the same air circulates in the room all the time and smells build up easily"],
        ["Dormitory, rented room", "8–12 hrs/day", "Once or twice a year, or every change of tenant", "Cleaning at each change of tenant is better value and easy to schedule, and it also cuts complaints about smells"],
        ["Café", "10–14 hrs/day, door opening and closing often", "Every 3–4 months", "Hot air and road dust come in every time a customer opens the door, and there is milk vapour and coffee powder in the air too"],
        ["Restaurant", "10–14 hrs/day, with heat from the kitchen", "Every 3 months or more often", "Cooking-oil vapour coats the coil and traps dust as a sticky film; left too long, a standard clean cannot remove it"],
        ["Office", "8–10 hrs/day, Monday–Friday", "Twice a year", "Regular but not heavy use; schedule cleans over long holidays so work is not disrupted"],
        ["Home with pets", "Depends on use", "Every 3–4 months", "Pet hair clogs filters much faster than normal and is a major cause of smells inside the unit"],
      ],
    },

    { type: "h2", text: "What matters more than the number of months: hours and surroundings" },
    {
      type: "p",
      text: "The most accurate predictor of how dirty an aircon gets is not how many months have passed, but how many hours the fan inside has been spinning, multiplied by how dirty the air it draws in is. An aircon in a room left closed and unused for 3 months shows almost no new grime when you open the cover. The same room's aircon running 24 hours a day for 3 months may clog enough that you can notice the airflow dropping.",
    },
    {
      type: "p",
      text: "If your home meets any of the conditions below, I recommend cleaning more often than the standard interval.",
    },
    {
      type: "ul",
      items: [
        "The house is next to a main road or a dirt road, or near a construction site.",
        "You live in an area where nearby farmland is burned in the dry season.",
        "Someone in the home smokes, or incense and candles are burned regularly.",
        "The outdoor unit is installed under a large tree, or in a spot where leaves and dust collect easily.",
        "Someone in the home has allergies, asthma or a dust allergy.",
      ],
    },

    { type: "h2", text: "Signs it is time for a clean without waiting for the schedule" },
    {
      type: "p",
      text: "The cleaning schedule is only a starting point. A more accurate guide is watching the condition of your own unit. If you notice any of the following, you can book a clean without waiting for the scheduled time.",
    },
    {
      type: "ul",
      items: [
        "The airflow from the vents is noticeably weaker, even though the fan speed is set the same.",
        "You have to set a lower temperature than before to feel as cool.",
        "There is a musty or sour smell in the first 5–10 minutes after switching on.",
        "The electricity bill has gone up even though you use the aircon exactly as before.",
        "You can see grey-black mats of dust on the fins behind the filter, or black spots in the vents.",
        "Water drips from the unit, or you hear an unusual whistling sound from the airflow.",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      title: "If water drips and there is ice on the coil, switch off straight away",
      text: "When the coil is so clogged that not enough air gets through, the coil temperature drops too low and ice forms. When the unit stops, the ice all melts at once, the drain tray cannot keep up, and water drips out. If you see this, I recommend switching the unit off and calling a technician to check, because running it anyway forces the compressor to work outside its design conditions.",
    },

    { type: "h2", text: "Between cleans, you can and should wash the filters yourself" },
    {
      type: "p",
      text: "A thorough clean by a technician twice a year does not mean you cannot look after the unit yourself for the six months in between. The filter is the system's first line of defence, and it is the only part the manufacturer designed for the homeowner to remove and wash. Especially from February to April, when dust levels are high, washing the filters yourself every 2–4 weeks helps keep the unit in good condition. It takes less than ten minutes, and you can do it without calling a technician.",
    },
    {
      type: "steps",
      items: [
        { title: "Switch off the aircon and the breaker first", detail: "Do not remove parts while the unit is running, because the fan inside spins faster than it looks." },
        { title: "Open the front cover and slowly pull the filter out", detail: "Pull it straight down rather than prising it, because the plastic clips on many models are brittle and break easily." },
        { title: "Wash it with plain water from the back to the front", detail: "Spraying against the direction the dust came in pushes it out better than spraying with it. If there is greasy grime, you can use diluted dishwashing liquid." },
        { title: "Let it dry completely in the shade", detail: "Do not dry it in strong sun, because the plastic will warp, and do not put it back while it is still damp, because that is where mould gets started." },
        { title: "Put it back so every clip locks in", detail: "A filter that does not sit properly leaves a gap for dust to bypass it straight onto the coil, which does more harm than not washing it at all." },
      ],
    },

    { type: "h2", text: "The best time of year in Chiang Mai to book a slot" },
    {
      type: "p",
      text: "This is not a technical point, but planning that makes things easier for you. April is the busiest month of the year for aircon work across Chiang Mai, because it is the hottest time and many customers run into problems at once. If you wait until then, you may have to wait several days for a slot in the hottest weather of the year.",
    },
    {
      type: "ul",
      items: [
        "January to early February: the best time for a thorough clean before the smoke-haze season. Bookings are not yet busy, and your aircon goes into the season with a clean coil.",
        "May to June: a second clean to remove the soot built up over the season, before the humid months begin.",
        "November to December: the weather is cool and aircons are used less, so this is the best time for repairs, relocations or new installations.",
        "April: avoid it if you can plan ahead, but if your aircon breaks down during the month, call a technician straight away, because leaving it will cause more damage.",
      ],
    },

    { type: "h2", text: "Can cleaning too often damage an aircon?" },
    {
      type: "p",
      text: "Done the right way, cleaning often does not damage an aircon. What causes damage is cleaning the wrong way, such as spraying water so hard that the aluminium fins fold over, letting water get into the control board, or taking the unit apart again and again carelessly until the plastic clips break. So the question to consider is not how often it is cleaned, but the working standards of whoever does it.",
    },
    {
      type: "p",
      text: "On the other hand, leaving it too long has hidden costs you pay every month without seeing the figures: extra electricity, a shorter compressor life from working harder than it should, and grime so ingrained that a standard clean cannot remove it, which eventually turns into the cost of a strip-down wash later on.",
    },

    { type: "h2", text: "Summary" },
    {
      type: "ul",
      items: [
        "Every 6 months is a middle figure. It works as a minimum, but it is not the answer for every home.",
        "For typical homes in Chiang Mai, twice a year, before and after the smoke-haze season, is the most suitable interval.",
        "Restaurants, cafés and homes with pets should move to every 3–4 months.",
        "Signs you can notice yourself, such as weaker airflow, a musty smell or a higher bill, matter more than counting months.",
        "Washing the filters yourself every 2–4 weeks during the smoke-haze season helps keep the unit in good condition at no cost.",
        "Booking your thorough clean from January helps you avoid a long wait in April.",
      ],
    },
    {
      type: "cta",
      text: "If you are not sure whether your aircon is due for a clean, send a photo of the filter and the vents on LINE. I will take a first look and tell you whether it should be cleaned now or can wait.",
    },
  ],
  faqs: [
    {
      q: "If I do not use the aircon much, does it still need cleaning on schedule?",
      a: "Yes, it does, but the interval can be longer. If you really only use it two or three times a week, once a year is enough, but do not skip a whole year, because in the jobs I take, units left unused for a long time tend to have moisture and mould building up inside instead. I recommend running the unit for about half an hour every two weeks to dry it out, which reduces the problem a lot.",
    },
    {
      q: "Does an inverter aircon need cleaning as often as a standard one?",
      a: "Just as often. An inverter differs in how it controls the compressor speed, which does not mean less dust builds up on the coil. And because the system keeps running at low speed instead of cutting out often, the fan inside spins for longer in total, so the amount of dust passing through the coil each day is no less.",
    },
    {
      q: "Is there a discount for cleaning 3 aircons at once in the same home?",
      a: `Yes. For 9,000–18,000 BTU units the normal price is ${p.wash.std} THB each, and if 3 or more are cleaned in the same visit, I charge ${p.wash.stdBulk} THB each. For ${btu.washBig} BTU units the normal price is ${p.wash.big} THB, or ${p.wash.bigBulk} THB each for 2 or more. Booking one visit is better value than calling me out for one unit at a time, because I can set up my equipment and finish everything in a single visit.`,
    },
    {
      q: "After a clean it is still not as cold as before. Does that mean it was not cleaned properly?",
      a: `Not necessarily. A clean only fixes problems caused by a clogged coil. If the real cause is a refrigerant leak, a worn capacitor or a worn compressor, a clean will not bring the cooling back to what it was. In that case the cause has to be diagnosed first. The diagnostic charge is ${p.repair.diagnostic} THB, and if you agree to have the repair done by me, I take it off the bill.`,
    },
    {
      q: "For a dormitory with many rooms, how should cleaning be scheduled to keep it manageable?",
      a: "The easiest arrangement is cleaning the whole building twice a year, in January and in May to June, plus a clean at every change of tenant. This clearly cuts complaints about smells and poor cooling. Let me know the number of rooms in advance and I will schedule it so everything is done in a single round.",
    },
  ],
};
