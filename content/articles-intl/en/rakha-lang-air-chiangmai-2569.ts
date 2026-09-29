import type { IntlArticle } from "@/lib/content-types";
import { p, btu } from "@/lib/site";

/** ตัวอย่างล้าง 3 เครื่อง คำนวณจากราคาจริง กันตัวเลขค้างเมื่อเปลี่ยนราคา */
const bulk3 = 3 * Number(p.wash.stdBulk.replace(/,/g, ""));
const fmt = (n: number) => n.toLocaleString("en-US");

export const article: IntlArticle = {
  slug: "rakha-lang-air-chiangmai-2569",
  title: "Aircon Cleaning Prices in Chiang Mai 2026: Standard Rates for Every Type",
  h1: "Standard aircon cleaning prices for 2026: typical rates for every type, and how to compare what each quote covers before you decide",
  description:
    "Standard aircon cleaning prices for 2026 for wall-mounted, ceiling-suspended and 4-way cassette units. I set typical Chiang Mai market rates side by side with my own prices, openly, and show you how to check which steps a quote actually includes.",
  category: "Prices and costs",
  updated: "2026-08-31",
  readMins: 9,
  image: { src: "/work/lang-air-khwaen-003.jpg", alt: "Looking up into the air outlet of a ceiling-suspended aircon, with black dust clinging to the grille slats across the whole panel" },
  excerpt:
    `Aircon cleaning in Chiang Mai ranges from 300 up to ${p.wash.premium} THB. I break down what the difference pays for, and which steps each price level covers.`,
  keywords: [
    "aircon cleaning price Chiang Mai",
    "aircon cleaning cost 2026",
    "wall-mounted aircon cleaning price",
    "cassette aircon cleaning price",
    "ceiling suspended aircon cleaning cost",
  ],
  relatedService: "lang-air-khwaen-cassette",
  blocks: [
    {
      type: "p",
      text: `The first thing most customers ask me is how much it costs to clean one aircon. The trouble is that "aircon cleaning" in Chiang Mai today covers anything from a 300 THB job to a full strip-down clean at ${p.wash.premium} THB. The name is the same, but the scope of work is very different. So I am putting both the market rates and my own prices out in the open, and explaining what the difference actually pays for.`,
    },
    {
      type: "callout",
      tone: "info",
      title: "The market ranges used for comparison",
      text: "The market price ranges in this table are the rates commonly advertised in Chiang Mai in 2026.",
    },

    { type: "h2", text: "What aircon cleaning costs in Chiang Mai today" },
    {
      type: "p",
      text: "Wall-mounted units of 9,000–12,000 BTU are the size you find most often in bedrooms and condos. The Chiang Mai market rate is around 450–650 THB per unit, which is the typical range for a full-step clean of a wall-mounted aircon.",
    },
    {
      type: "p",
      text: "Ceiling-suspended and 4-way cassette units, the kind you see in restaurants, cafés, offices and meeting rooms, cost noticeably more. The units are bigger and harder to take apart, and almost every job means working from a ladder or scaffolding, so they take several times the time and manpower of a wall-mounted unit.",
    },
    {
      type: "table",
      caption: "Aircon cleaning prices in Chiang Mai 2026: market rates compared with my prices",
      head: ["Aircon type / size", "Chiang Mai market rate", "My price", "Notes"],
      rows: [
        ["Wall-mounted 9,000–12,000 BTU", "450–650 THB", `${p.wash.std} THB`, `${p.wash.stdBulk} THB each for 3 or more units`],
        ["Wall-mounted 12,001–18,000 BTU", "450–650 THB", `${p.wash.std} THB`, "Same rate as 9,000 BTU, no extra charge"],
        [`Wall-mounted ${btu.washBig} BTU`, "Varies by provider", `${p.wash.big} THB`, `${p.wash.bigBulk} THB each for 2 or more units`],
        ["Ceiling-suspended", `900–${p.wash.cassette} THB`, `From ${p.wash.suspended} THB`, "Depends on unit size and ceiling height"],
        ["4-way cassette", "1,200–1,800 THB", `From ${p.wash.cassette} THB`, "Depends on ceiling position and access to the unit"],
        ["Premium Full Wash, wall-mounted", "Few providers offer this level of service in Chiang Mai yet", `${p.wash.premium} THB`, "Full strip-down clean of every part, 60-day warranty"],
      ],
    },
    {
      type: "p",
      text: "Many customers ask why I charge the same for a 12,001–18,000 BTU unit as for a 9,000 BTU one. The reason comes from real jobs: wall-mounted units in these two size bands take about the same time and water to clean, so I have no reason to charge more. Where an extra charge is genuinely needed is from 18,001 BTU upwards, because the unit is noticeably bigger and heavier, and you feel it from the moment you lift it.",
    },

    { type: "h2", text: "Why suspended and 4-way cassette units cost more to clean than wall-mounted ones" },
    {
      type: "p",
      text: `Restaurant owners often ask me why cleaning a single unit runs into the thousands of THB when cleaning an aircon at home is ${p.wash.std} THB. The answer is not the number of units; it is that the work itself is completely different.`,
    },
    {
      type: "ul",
      items: [
        "A 4-way cassette is built into the ceiling. I have to take the front panel and grille down first, then keep water from running into the gypsum ceiling board, which is easily damaged.",
        "A ceiling-suspended unit is long and heavy, with a coil several times wider than a wall-mounted unit's, so it takes more water and more time to wash.",
        "Most jobs mean working from a ladder or scaffolding, and some need two people on site for safety.",
        "The drain tray of a ceiling-mounted unit often has a condensate pump fitted. If the pump is clogged, it has to be removed and cleaned separately.",
        "In restaurants and cafés, cooking grease settles on the coil, so it has to soak and be washed for longer than a unit in a home.",
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "Restaurants and cafés: book ahead",
      text: "Ceiling-mounted and suspended units take a good deal longer than home aircons, and the work often has to be done outside your opening hours. If your shop opens during the day, let me know in advance whether you would like me to come in the morning before you open or after you close, and I can schedule it that way. Work outside normal hours carries an extra charge, and I tell you the amount before we book.",
    },

    { type: "h2", text: "How different prices reflect different scopes of work" },
    {
      type: "p",
      text: "This is the point I care about most, because it is where two quotes are hardest to compare when both simply say \"aircon cleaning\". Different prices reflect different scopes of work; a cheaper price does not always mean worse work. What you can actually check is exactly what the price includes: is the outdoor condenser coil cleaned too, is the blower wheel taken out and washed or just sprayed in place, is the drain line flushed, and is the area covered with a tarp before work starts? These four points can be compared directly between any providers, unlike a price figure, which tells you nothing about what you get.",
    },
    {
      type: "p",
      text: "Before you hire anyone, use the list below to ask about the full scope of work. It helps you compare each offer like for like.",
    },
    {
      type: "ol",
      items: [
        "A full-step clean involves removing more than the front cover and filters. If the scope is only washing the filters and spraying water over the face of the coil, it helps to know up front that this is a filter clean, not a clean of the whole unit.",
        "Ask whether cleaning the outdoor condenser coil is included, because a clogged condenser coil is one of the leading causes of an aircon cutting out often and using more electricity.",
        "Ask whether cleaning the blower wheel and drain tray is included, because these are the two places where musty smells and mould build up.",
        "Ask whether a waterproof tarp is laid down to cover the area, so dirty water does not run down the walls or onto furniture.",
        "So before you agree, ask what the price includes, and which items might be charged extra on the day, such as refrigerant top-ups or parts.",
      ],
    },
    {
      type: "callout",
      tone: "danger",
      title: "How to tell whether a clean covered every step",
      text: "During the clean, water coming off a coil that has been in use for a long time should run dark or carry sediment at first, then gradually turn clear. If the water is clear from the very first spray, it has barely passed through the coil. Another sign is that a full-step clean usually takes more than half an hour per unit. The clearest sign of all is that the aircon still smells musty when you switch it on, because the smell comes from the blower wheel, which has not been cleaned.",
    },
    {
      type: "p",
      text: "The higher cost shows up over the long run. A coil that is still clogged makes the compressor run longer on every cycle, so the electricity bill does not come down. In the jobs I take after the burning season (the smoke haze months, roughly February to April), most homes' coils have a clear build-up of soot. Left there, that build-up bonds more and more firmly, and eventually you end up paying for a major strip-down clean.",
    },

    { type: "h2", text: "What a full aircon clean involves, step by step" },
    {
      type: "p",
      text: `Comparing prices fairly starts with knowing what scope of work you should get for ${p.wash.std} THB. This is the order of work I actually follow for a standard clean of one unit.`,
    },
    {
      type: "steps",
      items: [
        { title: "Check the unit and take readings first", detail: "I listen to the symptoms you describe, measure the outlet air temperature, and check for anything else that needs repair. If I find something, I tell you before I start." },
        { title: "Cover the area and keep water contained", detail: "I lay down a tarp and fit the water-catching bag securely before opening the unit, so dirty water does not run down the walls or onto furniture." },
        { title: "Remove the filters and wash them separately", detail: "They are washed and left to dry completely before going back in. A filter put back while still damp is where the next round of musty smell begins." },
        { title: "Pressure-wash the indoor coil", detail: "I spray until the water running out is clear, which is the standard I use to decide the job is done. A clogged coil should always release dark water first." },
        { title: "Clean the blower wheel and drain tray", detail: "These two spots are where mould and smells build up. If they are not cleaned, the smell comes back within a few days." },
        { title: "Flush the drain line", detail: "I blow or vacuum the line clear to prevent dripping, which is the most common problem after a clean when this step is skipped." },
        { title: "Clean the outdoor condenser coil", detail: "A clogged condenser coil stops the unit shedding heat fast enough, so it cuts out often and uses more electricity. If your quote does not include the condenser coil, ask about it clearly before you agree." },
        { title: "Test and show you the result", detail: "I switch the unit on and measure the outlet air temperature again, tidy up the area, and explain what condition I found the unit in during the clean." },
      ],
    },
    {
      type: "p",
      text: "If the price you have been quoted does not cover all eight of these steps, it does not mean that provider is doing the job wrong. It means you are comparing two different scopes of work. That is why asking clearly before you agree is the best approach.",
    },

    { type: "h2", text: "Standard clean vs Premium Full Wash: what is the difference" },
    {
      type: "p",
      text: `A standard clean at ${p.wash.std} THB is done without taking the unit down. With the Premium Full Wash at ${p.wash.premium} THB, I take the parts of the indoor unit out and wash them one by one, including the blower wheel, the drain tray and the coil itself, then put everything back together. It takes several times longer, and taking the unit apart and reassembling it needs real care so the plastic parts do not crack.`,
    },
    {
      type: "table",
      caption: "Choosing an aircon cleaning service based on the unit's actual condition",
      head: ["Condition of your aircon", "Best choice", "Why"],
      rows: [
        ["Cleaned regularly every 6 months, no smell", `Standard clean ${p.wash.std} THB`, "The coil is not deeply clogged, so washing in place is enough"],
        ["Musty or sour smell when switched on", "Premium Full Wash", "The smell comes from the blower wheel, which has to be removed and washed to get rid of it"],
        ["Not cleaned for more than 1 year", "Premium Full Wash", "The grime has set so hard that water pressure alone is not enough"],
        ["Young children, elderly people or anyone with a dust allergy at home", "Premium Full Wash", "Cuts down the mould spores blown back into the room"],
        ["New aircon, in use for less than a year", `Standard clean ${p.wash.std} THB`, "No need to take it apart yet; cheaper and sufficient"],
      ],
    },
    {
      type: "callout",
      tone: "warn",
      title: "If you do not need it yet, I do not recommend paying for the premium service",
      text: "When I check the unit and see that a standard clean is enough, that is what I will tell you.",
    },

    { type: "h2", text: "Repair costs and other work to know about before you call a technician" },
    {
      type: "p",
      text: "After cleaning, the jobs people ask me about most are installation, relocating an aircon and topping up refrigerant. These three are where market prices vary the most, and also where hidden costs creep in most easily.",
    },
    {
      type: "table",
      caption: "Installation, relocation and refrigerant prices: market rates compared with my prices",
      head: ["Item", "Chiang Mai market rate", "My price"],
      rows: [
        ["Install wall-mounted 9,000–12,000 BTU", `2,000–${p.install.small} THB (some places 3,000–5,000)`, `${p.install.small} THB`],
        [`Install wall-mounted ${btu.installLarge} BTU`, "Varies by provider", `${p.install.large} THB`],
        ["Relocate an aircon", "2,000–2,500 THB", `${p.install.relocate} THB`],
        ["Remove an old aircon", `350–${p.install.removeOnly} THB`, `${p.install.removeOnly} THB`],
        ["Diagnostic inspection", "No standard market rate to compare", `${p.repair.diagnostic} THB, deducted if you go ahead with the repair with me`],
        ["R32 refrigerant top-up", "No standard market rate to compare", `${p.repair.refrigerantPerLb} THB / lb`],
        ["R410A refrigerant top-up", "Around 75 THB / lb", `${p.repair.refrigerantPerLb} THB / lb`],
      ],
    },
    {
      type: "p",
      text: "My relocation price is higher than the market range shown. The reason is that a relocation done to standard means pumping the refrigerant back into the outdoor unit before disconnecting it, rather than releasing it and refilling at the new location; pulling a fresh vacuum on the system at the new site; and leak-testing before handing the job over. If any one of these steps is missed, the aircon often stops cooling properly within a few months. So before you agree, ask whether the price includes these steps.",
    },
    {
      type: "callout",
      tone: "warn",
      title: "Hidden costs to ask about every time",
      text: "At market rates, installation and relocation jobs often carry extra charges of around 450–500 THB per metre of refrigerant pipe, around 150–300 THB per metre of trunking, and around 450 THB per wall bracket for the outdoor unit. If the pipe run is longer than the package includes, you should know these figures before installation day.",
    },

    { type: "h2", text: "7 things to check before you agree on a price" },
    {
      type: "p",
      text: "These questions take less than two minutes to ask, yet they head off almost every problem. They apply to every provider, me included.",
    },
    {
      type: "ol",
      items: [
        "Does the price include cleaning the outdoor condenser coil, or is it charged separately?",
        "Roughly how long does each unit take?",
        "Is cleaning the blower wheel and drain tray included?",
        "Is a waterproof tarp laid down, and is the area cleaned up after the job?",
        "If an extra problem turns up on the day, will I be given the price before any work is done?",
        "How many days is the warranty after cleaning, and what does it cover?",
        "For a shop or office job, are documents provided for expense claims?",
      ],
    },
    {
      type: "p",
      text: "A standard clean carries a 30-day warranty against dripping, and a full strip-down clean 60 days. Installation carries a 1-year warranty when you buy the unit from me, and 6 months if you already have your own unit. If you need accounting documents, I can issue a full tax invoice in a company's name; please give me the name and tax ID before the appointment.",
    },

    { type: "h2", text: "What the price difference buys you in the long run" },
    {
      type: "p",
      text: `Take cleaning 3 units as an example. At 350 THB per unit, the total is 1,050 THB. I charge ${p.wash.stdBulk} THB per unit for 3 or more, so the total is ${fmt(bulk3)} THB. The difference is ${fmt(bulk3 - 1050)} THB.`,
    },
    {
      type: "p",
      text: "That difference is worth weighing against the electricity bill that follows. A clean coil lets the compressor run for shorter stretches each cycle, so the monthly bill comes down with it. The key point is that this only happens when the coil has been cleaned properly; cleaning just the filters does not have this effect. If the coil is still clogged, the bill will not drop, and what you saved on the clean gets paid back through the electricity bill every month until the next clean. If you want to see the figures for your own home, note the meter reading for a week before and a week after the clean, at the same time of day.",
    },
    {
      type: "cta",
      text: "If you want an exact price for the aircons at your home or shop, message me on LINE with how many units you have and what type they are. I will give you the full price before I come to do the work.",
    },

    { type: "h2", text: "Summary" },
    {
      type: "ul",
      items: [
        `Cleaning a 9,000–12,000 BTU wall-mounted aircon in Chiang Mai usually costs around 450–650 THB. I charge ${p.wash.std} THB, or ${p.wash.stdBulk} THB each for 3 or more units.`,
        "Ceiling-suspended units run 900–1,500 THB at market rates and 4-way cassettes 1,200–1,800 THB, because they are harder to take apart and water has to be kept off the ceiling.",
        "For a clean priced under 400 THB, ask clearly whether it includes the blower wheel, drain tray and outdoor condenser coil, beyond the filters and the face of the coil.",
        "Before agreeing, ask three key questions: is the condenser coil included, is the blower wheel cleaned, and how many days is the warranty?",
        "For installation and relocation, always ask about extra charges for pipe, trunking and wall brackets before the day of the job.",
      ],
    },
  ],
  faqs: [
    {
      q: "Is there a discount for cleaning several aircons at once?",
      a: `Yes. For wall-mounted units of 9,000–18,000 BTU, I normally charge ${p.wash.std} THB per unit; for 3 or more units at the same address it drops to ${p.wash.stdBulk} THB each. Units of ${btu.washBig} BTU are ${p.wash.big} THB each, dropping to ${p.wash.bigBulk} THB each for 2 or more. The reason is that travel and setup time can be shared out when I do several units in one visit.`,
    },
    {
      q: "How should I judge an aircon cleaning price that is much cheaper?",
      a: "The thing to ask is which steps that price includes. The steps that make the biggest difference to the result are cleaning the outdoor condenser coil, cleaning the blower wheel and flushing the drain line. If these are not part of the scope, the smell and the electricity bill usually do not improve. Ask clearly, then compare on the same scope of work.",
    },
    {
      q: "Why is your aircon relocation price higher than the market rate?",
      a: `The market rate for relocating an aircon in Chiang Mai is around 2,000–2,500 THB, and I charge ${p.install.relocate} THB. That is because I pump the refrigerant back into the outdoor unit before disconnecting it, pull a fresh vacuum on the system at the new site, and leak-test before handing the job over. Skipping these steps makes the job quicker, but the risk of the aircon not cooling properly within a few months goes up sharply, so I choose to do every step in full.`,
    },
    {
      q: "Does the quoted price include everything, or are there extra charges on the day?",
      a: "The cleaning price I quote is what you actually pay. If I find an extra problem during the clean, such as a badly blocked drain line or a worn-out part, I stop and give you the price so you can decide first. For installation and relocation, if the pipe run is longer than standard there is an extra charge for pipe and trunking, which I tell you about before the day of the job.",
    },
    {
      q: "Can you provide documents for a restaurant or office to claim expenses?",
      a: "Yes. I already work for cafés, restaurants, hotels, dormitories and offices that need accounting documents. Just send the name and tax ID along with your booking, and I will bring the documents on the day of the job.",
    },
  ],
};
