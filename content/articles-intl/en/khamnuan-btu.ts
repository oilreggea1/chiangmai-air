import type { IntlArticle } from "@/lib/content-types";
import { p, btu } from "@/lib/site";

export const article: IntlArticle = {
  slug: "khamnuan-btu",
  title: "Aircon BTU Calculator: Bedroom, Living Room, When to Size Up",
  h1: "Calculating the right aircon BTU for your room: the formula, a size chart, and the Chiang Mai rooms I recommend sizing up for",
  description:
    "The BTU formula for bedrooms and living rooms, a room size chart, and Chiang Mai conditions that call for more, such as afternoon sun or a top-floor room.",
  category: "Aircon guides",
  updated: "2026-07-29",
  readMins: 9,
  image: { src: "/work/tid-tang-air-005.jpg", alt: "A technician holding a steel wall mounting plate up against the wall to mark where the indoor unit will go" },
  excerpt:
    "Choosing the wrong BTU does not only affect how cool the room gets, because an oversized aircon causes different problems from an undersized one. I walk you through the calculation step by step and explain which kinds of rooms in Chiang Mai should be sized up.",
  keywords: [
    "aircon BTU calculator", "BTU for a bedroom aircon", "how many BTU for my room size",
    "choosing aircon size Chiang Mai", "aircon BTU chart",
  ],
  relatedService: "tid-tang-air",
  blocks: [
    {
      type: "p",
      text: "Choosing the size of an aircon is a decision that stays with your home for many years, so I fully understand why most customers always ask about it before buying. The question I get most often is how many BTU a room of a given size needs. There is already a clear formula for that, and you can do a first calculation yourself quite easily.",
    },
    {
      type: "p",
      text: "But in the jobs I take, most mistakes do not come from multiplying wrongly. They come from not taking the room's particular conditions into account. Homes in Chiang Mai have a wider variety of rooms than many people expect: shophouses that take the full afternoon sun on one side, old wooden houses with uninsulated walls, and upstairs bedrooms under metal roofs that build up heat all afternoon. I will start with the formula and a size chart for you to use as a starting point, then explain which kinds of rooms need extra BTU and by how much, and finish with why choosing a bigger size just in case is not the safe option many people think it is.",
    },

    { type: "h2", text: "What BTU means, in practical terms" },
    {
      type: "p",
      text: "BTU is a unit measuring how much heat an aircon can remove from a room per hour. A 12,000 BTU unit is not colder than a 9,000 BTU unit; it can remove more heat in the same amount of time. I often compare it to a water pump for customers: a bigger pump does not make the water cleaner, it just pumps faster.",
    },
    {
      type: "p",
      text: "An aircon's job is to keep removing the heat that flows into the room, fast enough, all the time. Heat gets in many ways: sunlight through glass, heat seeping through the walls and roof, body heat from people, and electrical appliances such as TVs, computers and lights. The more heat flows in, the more BTU the room needs. That is why two rooms of the same size may need aircons of different sizes.",
    },

    { type: "h2", text: "The BTU formula I use to assess a site" },
    {
      type: "p",
      text: "The formula used in installation work is to take the room area in square metres and multiply it by a factor based on how the room is used.",
    },
    {
      type: "ul",
      items: [
        "Bedrooms use a factor of about 700–800, because they are used at night with few people and few electrical appliances, so less heat builds up.",
        "Living rooms, studies and reception rooms use about 800–900, because they are used during the day, people come and go often, and there are more appliances and more sun.",
        "Calculate the room area as width (metres) times length (metres). If the room is not rectangular, divide it into smaller sections and add them together.",
      ],
    },
    {
      type: "p",
      text: "For example, a bedroom 3.5 metres wide and 4 metres long has an area of 14 square metres. Multiplied by 750, that gives 10,500 BTU, which is not a size you can actually buy, because aircons are made in steps: 9,000 / 12,000 / 15,000 / 18,000 / 24,000 BTU. For this room I would recommend 12,000 BTU, because 9,000 BTU falls too far short of what it actually needs.",
    },
    {
      type: "callout",
      tone: "info",
      title: "When the figure falls between two sizes, how I decide",
      text: "I look at which size the calculated figure is closer to. If it is no more than about 5% above the smaller size and the room has no special conditions, I recommend the smaller size, which also saves you money. But if it is more than that, or the room has conditions that call for extra, I move up to the next size. Jumping up two sizes without a reason gives you an aircon too big for the room.",
    },

    { type: "btuCalc" },

    { type: "h2", text: "Room size chart and recommended BTU" },
    {
      type: "p",
      text: "If you would rather not calculate it yourself, you can use this chart as a starting point. The figures assume a standard ceiling height of around 2.4–2.6 metres and do not yet include the special conditions I explain in the next section.",
    },
    {
      type: "table",
      caption: "Room size (square metres) and recommended BTU",
      head: ["Room size", "Bedroom", "Living room / study"],
      rows: [
        ["10–13 m²", "9,000 BTU", "9,000–12,000 BTU"],
        ["14–18 m²", "12,000 BTU", "12,000–15,000 BTU"],
        ["19–22 m²", "15,000 BTU", "18,000 BTU"],
        ["23–26 m²", "18,000 BTU", "18,000–20,000 BTU"],
        ["27–32 m²", "20,000–24,000 BTU", "24,000 BTU"],
        ["33–40 m²", "24,000–30,000 BTU", "30,000–32,000 BTU"],
      ],
    },
    {
      type: "p",
      text: "Most of the condo and dormitory rooms in Chiang Mai where I install are in the 16–30 square metre range. Studios that combine the sleeping and living areas usually end up with 12,000 BTU for a small room, and 18,000 BTU for a larger room or one that gets the sun. For detached houses where the living room opens onto the kitchen, you have to count the whole combined area, not just the part where the sofa sits.",
    },

    { type: "h2", text: "Which rooms in Chiang Mai need extra BTU" },
    {
      type: "p",
      text: "The conditions below are what the basic formula does not cover, and they are the number one reason a room with a correctly calculated BTU still is not cool enough. The formula assumes the room gets no special heat from outside, and many homes in Chiang Mai are not like that.",
    },
    {
      type: "table",
      caption: "Room types where I recommend adding BTU on top of the calculated figure",
      head: ["Room type", "Add", "Reason"],
      rows: [
        ["Room that gets the afternoon sun, facing west or south-west", "+10–15%", "Walls and glass absorb heat all afternoon and keep giving it off until early evening"],
        ["Top-floor room or room under the roof", "+10–20%", "Heat from the roof radiates straight down through the ceiling, especially with uninsulated metal sheet or corrugated zinc roofing"],
        ["Old wooden house with thin, uninsulated walls", "+10–15%", "Heat passes through the walls more easily than in rendered brick houses, and air leaks through the gaps in the timber"],
        ["Room with large windows and no curtains or film", "+10–20%", "Clear glass lets the sun's heat into the room in full"],
        ["Room regularly used by more than 2 people at once", "+600 BTU per extra person", "The human body gives off heat all the time, so small meeting rooms or family gathering rooms run hotter than estimated"],
        ["Living room open to the kitchen", "+10–20%", "Heat from cooking flows into the cooled area whenever the stove is in use"],
        ["Ceiling higher than 3 metres or a high-ceilinged hall", "+10–20%", "There is more air volume to cool than in a room of the same floor area with a standard ceiling"],
      ],
    },
    {
      type: "p",
      text: "These conditions can be added together, but should not be stacked beyond what is necessary. For example, an upstairs bedroom of 16 square metres that gets the afternoon sun and sits under the roof: the basic calculation is 16 × 750 = 12,000 BTU. Adding a combined allowance of about 20–25% gives roughly 14,400–15,000 BTU, so I would recommend 15,000 BTU instead of 12,000 BTU. But if the same kind of room were on the ground floor, facing north and shaded by trees, I would tell you honestly that 12,000 BTU is enough, with no need to pay more.",
    },
    {
      type: "callout",
      tone: "tip",
      title: "Reducing heat at the source is better value than adding BTU",
      text: "Before paying more to move up an aircon size, I recommend tackling the cause first: for example, fitting heat-rejection film or blackout curtains on west-facing glass, adding insulation under the roof, and sealing air leaks. In many homes, that alone is enough for an aircon sized by the basic formula, saving on both the unit and electricity over the long term.",
    },

    { type: "h2", text: "Choosing too big: the problems people rarely consider" },
    {
      type: "p",
      text: "The misconception I come across most often is sizing up generously just to be safe. The truth is that an aircon too big for the room causes several clear problems, and is even harder to fix than one that is too small, because the symptom is not a lack of cooling but cooling that feels uncomfortable, and homeowners often do not realise the cause is the size of the unit.",
    },
    {
      type: "ul",
      items: [
        "The compressor cuts out unusually often, because the room reaches the set temperature too quickly, so the unit stops and starts again repeatedly in short cycles.",
        "The room is cool but your skin still feels sticky, because an aircon needs to run continuously for a while to pull moisture out. When it cuts out early every time, the moisture stays in the room.",
        "The compressor's lifespan is shortened, because start-up is when it uses the most electricity and wears the most. The more often it starts, the faster it deteriorates.",
        "The electricity bill does not drop as expected, because the current at start-up is much higher than during normal running, so frequent cycling pushes total consumption above what it should be.",
        "The room temperature swings up and down, very cold then warm, which disturbs sleep because your body has to keep adjusting all night.",
      ],
    },
    {
      type: "p",
      text: "This cool-but-sticky feeling is especially noticeable in Chiang Mai during the rainy season from July to October, when the air is already very humid. If the aircon is oversized and keeps cutting out early, the moisture stays in the room until it becomes uncomfortable to use. In the jobs I take, homeowners often assume the unit is not powerful enough and turn the temperature down further, which costs more in electricity without fixing the root cause.",
    },

    { type: "h2", text: "Choosing too small: more obvious, but just as damaging" },
    {
      type: "p",
      text: "An aircon too small for the room runs almost all the time and hardly ever cuts out, because it cannot remove heat as fast as it flows in. The room never reaches the set temperature, especially on hot-season afternoons in Chiang Mai, when the outside temperature on some days goes above 40 degrees.",
    },
    {
      type: "ul",
      items: [
        "The compressor runs continuously with almost no rest, and its lifespan is shortened because it is working beyond its rating.",
        "The electricity bill is higher than it should be, because the unit runs at full power all the time with no breaks.",
        "The room does not reach the set temperature, so the homeowner keeps turning it lower, which does not help when the unit was never powerful enough in the first place.",
        "On very sunny days, the aircon may only manage 27–28 degrees and stay there.",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      title: "Do not conclude the aircon is too small before checking its condition",
      text: "An aircon that runs all day without reaching the set temperature can also be caused by a clogged coil or low refrigerant. Before deciding to buy a bigger unit, I recommend checking whether the existing one is still working at full capacity. In the jobs I take, many homes went back to cooling normally after an aircon clean, without needing to replace the unit at all.",
    },

    { type: "h2", text: "Calculating BTU from start to finish" },
    {
      type: "steps",
      items: [
        { title: "Measure the real room area", detail: "Measure the width times the length in metres. If the room connects to another area with no door in between, such as an open kitchen or a stairwell, include that area too, otherwise your figure will be lower than reality." },
        { title: "Multiply by the factor for how the room is used", detail: "Bedrooms use 700–800, and living rooms or studies use 800–900. If you are unsure, use the middle value for now." },
        { title: "Check the room's special conditions", detail: "Consider whether the room gets the afternoon sun, whether it is on the top floor, whether it is a wooden house or has thin walls, and how many people use it at once, then add the percentages for the conditions that match your room." },
        { title: "Choose a size that is actually sold", detail: "Round up to the next size when your figure is well above the smaller size, but do not skip a size, because that turns into the problem of an aircon too big for the room." },
        { title: "Let me assess the site before you decide", detail: "I can check the room's orientation, the ceiling, the pipe run and where the outdoor unit will go, all of which affect both the right size and the installation cost. Getting it clear before you buy saves you having to fix things later." },
      ],
    },
    {
      type: "p",
      text: `As for the units themselves, I install Mitsubishi, Daikin, Samsung, LG, Panasonic, Carrier, Haier, Sharp, Toshiba, Gree, Hitachi and Trane. Unit prices depend on the model and on promotions at the time, so feel free to ask. Installation is charged directly by unit size: 9,000–12,000 BTU is ${p.install.small} THB to install, and ${btu.installLarge} BTU is ${p.install.large} THB. If an old unit has to be removed first, that is an extra ${p.install.removeOnly} THB. I tell you all the costs from the start, and if I find anything additional on site, I will tell you and ask for your agreement before going ahead.`,
    },
    {
      type: "table",
      caption: "Aircon installation and relocation rates",
      head: ["Item", "Price"],
      rows: [
        ["Aircon installation, 9,000–12,000 BTU", `${p.install.small} THB`],
        [`Aircon installation, ${btu.installLarge} BTU`, `${p.install.large} THB`],
        ["Removing an old aircon", `${p.install.removeOnly} THB`],
        ["Aircon relocation (removal and reinstallation)", `${p.install.relocate} THB`],
        ["Installation warranty", "1 year when you buy the unit from me / 6 months if you have your own unit"],
      ],
    },

    { type: "h2", text: "Summary" },
    {
      type: "ul",
      items: [
        "The basic formula is the room area in square metres, times 700–800 for a bedroom and 800–900 for a living room.",
        "The result is only a starting point. Add an allowance when the room gets the afternoon sun, is under the roof, is a poorly insulated wooden house, is used by many people, or is open to the kitchen.",
        "An oversized aircon cuts out too often, does not remove enough moisture, leaves the room cool but sticky, and wears the compressor out faster.",
        "An undersized aircon runs non-stop, costs more in electricity, and cannot reach the set temperature on very sunny days.",
        "Tackling the source of the heat, such as window film and roof insulation, is better value than moving up an aircon size.",
      ],
    },
    {
      type: "cta",
      text: "If you are not sure how many BTU your room needs, send me the room size, which direction gets the sun, and photos of the room on LINE. I will assess it free of charge and advise based on the actual conditions. If a room does not need to be sized up, I will tell you so.",
    },
  ],
  faqs: [
    {
      q: "How many BTU does a 20 square metre bedroom need?",
      a: "The basic calculation is about 20 × 750 = 15,000 BTU. If the room is on the ground floor, does not get the afternoon sun and has ordinary brick walls, 15,000 BTU is enough. But if it is an upstairs room under the roof or facing west, I recommend moving up to 18,000 BTU.",
    },
    {
      q: "Is it better to choose a higher BTU just in case, for very hot days?",
      a: "I do not recommend it. An aircon too big for the room reaches the set temperature quickly and cuts out straight away, so it cannot remove the moisture in time, leaving the room cool but sticky. The compressor also starts more often, which uses more electricity and wears it more than usual. I recommend adding an allowance based on the room's real conditions, not a blanket one.",
    },
    {
      q: "My room connects to the kitchen with no door. Do I need to count the kitchen area?",
      a: "Yes, count it in, because the air flows between them all the time, so the aircon has to cool both areas. You should also add about 10–20% for the heat from cooking. If your household regularly cooks on high heat, I recommend going to the higher end.",
    },
    {
      q: "My existing aircon runs all day but is not cool. Does that mean it does not have enough BTU?",
      a: `Not necessarily. The same symptom can come from a clogged coil, a clogged filter or low refrigerant, especially in Chiang Mai homes that have been through the haze season without having the aircon cleaned. I recommend checking the unit first. The diagnostic charge is ${p.repair.diagnostic} THB, and I take it off the bill if you go ahead with the repair. Only once the check shows the unit really is working normally should you think about changing the size, so you do not face a large, unnecessary cost.`,
    },
    {
      q: "Does a high ceiling affect the choice of BTU?",
      a: "Yes. The area-times-factor formula assumes a ceiling height of around 2.4–2.6 metres. If your room has a ceiling higher than 3 metres or is a high-ceilinged hall, there is more air volume to cool, so I recommend adding about 10–20% on top of the calculated figure.",
    },
  ],
};
