import type { IntlArticle } from "@/lib/content-types";
import { p } from "@/lib/site";

export const article: IntlArticle = {
  slug: "air-pen-nam-khaeng",
  title: "Aircon Freezing Up? Ice on the Coil or Pipes: Causes and Fixes",
  h1: "Ice on the indoor coil or the refrigerant pipe: what to do straight away, and the causes I find most often",
  description:
    "Why an air conditioner freezes up: too little airflow over the coil, low refrigerant, a weak fan, or a temperature set too low for too long. What to do right now, and why you should not keep running it.",
  category: "Aircon problems",
  updated: "2026-09-29",
  readMins: 8,
  image: { src: "/work/lang-air-thod-lang-144.jpg", alt: "Close-up of an air filter caked with fluffy dust along the mesh, photographed before cleaning" },
  excerpt:
    "Ice on the coil does not mean your aircon is cooling well. It means the system is not working properly, and if you keep running it, the damage can reach the compressor.",
  keywords: ["aircon freezing up", "ice on aircon coil", "ice on aircon pipe", "aircon frozen fix", "aircon technician Chiang Mai"],
  relatedService: "som-air",
  blocks: [
    {
      type: "p",
      text: "If you have just opened the front cover and found white ice across the coil, or thick ice on the copper pipe at the outdoor unit, the first thing to do is switch off cooling mode, then work through the causes one by one. Many people take ice as a sign that the unit is cooling well. It is not. Ice is a sign that something is wrong, and if it is left, the damage can spread to the compressor, the most expensive part in the unit.",
    },
    {
      type: "callout",
      tone: "danger",
      title: "Do this first: switch off cooling mode",
      text: "Switch off cooling straight away and run fan mode so the airflow melts the ice. Never use a screwdriver, a knife or anything hard to chip the ice off. The aluminium fins on the coil are very thin, and a single dig can puncture a refrigerant tube and turn a simple job into a major repair you did not need.",
    },

    { type: "h2", text: "Why an indoor coil turns to ice" },
    {
      type: "p",
      text: "An aircon works by running very cold refrigerant through the tubes of the indoor coil while a fan blows room air across it. Heat from the air passes into the refrigerant, so the air that comes out is cold. The system only stays in balance while enough air keeps flowing over the coil.",
    },
    {
      type: "p",
      text: "When less air flows over the coil, the refrigerant absorbs less heat and the coil surface drops below freezing. Moisture in the air, which would normally condense into water and drain into the tray, freezes on the coil instead. Once ice starts forming it blocks even more airflow, and the cycle feeds itself until the whole coil is iced over.",
    },
    {
      type: "p",
      text: "In short, every cause of this comes back to one thing: the balance between the airflow over the coil and the coldness of the refrigerant has been lost. Whether it is too little air or a refrigerant problem, the end result is the same.",
    },

    { type: "h2", text: "Cause 1: a blocked filter or coil means too little airflow" },
    {
      type: "p",
      text: "This is the most common cause in my jobs, and in many cases owners can fix it themselves without calling anyone. Dust on the filter and coil fins acts like a thin cloth across the airflow; the thicker it builds up, the less air gets through.",
    },
    {
      type: "p",
      text: "Homes in Chiang Mai see this especially clearly after the burning season from February to April. The smoke carries coarse dust, soot and ash that stick well to coil fins. Homes that ran the aircon all day through the season without washing the filters often call me about an iced coil right at the end of it.",
    },
    {
      type: "ul",
      items: [
        "A blocked air filter: the first line of defence and the fastest to clog. You can take it out and wash it yourself every 2 weeks as manufacturers recommend, and no longer than 4 weeks when it is dusty.",
        "Coil fins clogged by dust that gets past the filter: this needs a technician, because washing it yourself risks bending the fins and getting water into the control board.",
        "Build-up on the blower wheel that reduces how much air it moves: a spray-through clean usually cannot reach it, so the wheel has to come out to be washed.",
        "Adding a fine or HEPA filter on top of the original filter can add enough resistance to freeze the coil, even when the unit itself is clean.",
        "The air outlet blocked by furniture, curtains or things placed too close.",
      ],
    },

    { type: "h2", text: "Cause 2: low refrigerant or a leak" },
    {
      type: "p",
      text: "People often ask why low refrigerant makes a coil cold enough to freeze when you would expect it to cool less. Here is why. When there is less refrigerant than there should be, the low-side pressure drops, which lowers the refrigerant's boiling point. It then evaporates at a much lower temperature than normal, so parts of the coil get cold enough to freeze, while the system as a whole removes less heat.",
    },
    {
      type: "p",
      text: "What usually comes with it: ice forms in patches on part of the coil first rather than evenly across it, you may see ice on the larger refrigerant pipe at the outdoor unit, and the room clearly takes longer to cool than before.",
    },
    {
      type: "callout",
      tone: "warn",
      title: "Low refrigerant always means a leak",
      text: `The refrigerant system is sealed and is not used up like engine oil. If it is low, there is a real leak somewhere. Topping up without finding the leak means paying again every few months. My practice is to find and fix the leak first, then recharge. I charge ${p.repair.refrigerantPerLb} THB per pound for R32 and R410A.`,
    },

    { type: "h2", text: "Cause 3: the indoor fan is weak or not turning" },
    {
      type: "p",
      text: "Even with a clean coil and a full charge, if the fan that pulls air across the coil is not running at full strength, the result is the same as a blocked coil: too little air, and ice.",
    },
    {
      type: "ul",
      items: [
        "A worn fan motor running slower than it should, so the airflow feels weaker even right after a clean.",
        "A failing fan motor capacitor, so the fan is slow to start or does not reach full speed.",
        "Worn bearings or bushes, usually with a groaning or scraping sound as well.",
        "The fan left on its lowest speed all the time in a room with little heat load, such as a small room on a night that is already cool.",
        "A faulty fan speed control board, in units with electronic control.",
      ],
    },
    {
      type: "p",
      text: "A simple check is to compare with what you are used to. If the unit has just been cleaned and the airflow is still weaker than before, or the fan sounds different, look at the fan first, not at dirt.",
    },

    { type: "h2", text: "Cause 4: the temperature set too low for too long" },
    {
      type: "p",
      text: "Setting 16–18 degrees and leaving it on all night is something I see often, and it really can freeze the coil, especially on nights that are already cool outside. With very little heat in the room, the compressor has almost nothing to remove but keeps running because the room has not reached the set temperature, so the coil keeps getting colder until the moisture freezes.",
    },
    {
      type: "p",
      text: "Chiang Mai makes this more likely than most places, because night temperatures drop a lot from November to January. People used to setting 18 degrees in the hot season who keep the same setting in the cool season may find ice on the coil in the morning. The Provincial Electricity Authority (PEA) recommends 26–27 degrees, which saves power and avoids this problem at the same time. If that does not feel cool enough, I suggest using a fan to move the air rather than lowering the temperature; it works better and costs less.",
    },

    { type: "h2", text: "Why running it anyway damages the compressor" },
    {
      type: "p",
      text: "A compressor is designed to compress refrigerant vapour only, not liquid, because liquid cannot be compressed. Normally the liquid refrigerant entering the indoor coil evaporates completely before it returns to the compressor.",
    },
    {
      type: "p",
      text: "When the coil is encased in ice and no air gets through, there is not enough heat to evaporate all the refrigerant, so the leftover liquid flows straight back to the compressor. Technicians call this liquid floodback, and it is one of the leading causes of compressor failure that I find on jobs.",
    },
    {
      type: "ul",
      items: [
        "The compressor's internal valves are damaged trying to compress liquid.",
        "The compressor oil is diluted by liquid refrigerant, so internal parts wear much faster.",
        "The motor is overloaded until heat builds up and the winding is damaged.",
        "When a lot of ice melts at once, water overflows the drain tray and drips onto the ceiling or wall, which is another kind of damage.",
      ],
    },
    {
      type: "p",
      text: "The compressor is the most expensive part in the unit. If it fails in an older unit, the repair cost is often high enough that you end up deciding between repairing and replacing the whole unit, when the starting point may have been nothing more than a filter left blocked for too long, which is cheap to prevent.",
    },

    { type: "h2", text: "What to do straight away when you find ice on the indoor coil" },
    {
      type: "steps",
      items: [
        { title: "Switch off cooling mode now", detail: "Do not keep running it and hope it clears. Every minute it runs is a risk of liquid refrigerant flowing back into the compressor." },
        { title: "Run fan mode to melt the ice", detail: "Set Fan mode and leave it. It usually takes about 1–3 hours depending on how much ice there is. This is the safest method and also dries the unit out." },
        { title: "Put something down to catch overflow", detail: "A lot of ice melting at once can overflow the drain tray. Put a towel or container under the unit while you wait to keep water off the ceiling." },
        { title: "Take out and wash the filters", detail: "Rinse with plain water and let them dry completely before refitting. If the dust has built up into a mat, that is very likely the cause. You can do this yourself at no cost." },
        { title: "Check for anything blocking the airflow", detail: "Look for furniture, curtains or an extra filter blocking the outlet. If a fine filter has been stuck on top, remove it first." },
        { title: "Restart at 26–27 degrees", detail: "Set the fan to medium or high and watch it for another 1–2 days. If the ice does not come back and the room cools normally, the cause was dirt or the settings, and that is the end of it." },
        { title: "If it comes back, have me check it", detail: "Ice returning after cleaning usually means a refrigerant leak, a worn fan or a control fault, which needs pressure gauges and proper tools to diagnose." },
      ],
    },
    {
      type: "table",
      caption: "Reading the signs to judge the likely cause",
      head: ["What you see", "Most likely cause", "What to do next"],
      rows: [
        ["Ice across the whole coil, very weak airflow, thick dust on the filter", "Blocked filter or coil", "Wash the filter yourself; if the coil fins are black as well, book a full clean"],
        ["Ice in patches, not across the whole coil, and the room cools more slowly", "Low refrigerant from a leak", "Have a technician find the leak; do not top up without finding it"],
        ["Ice on the larger pipe at the outdoor unit", "Low refrigerant, or too little airflow over the indoor coil", "Switch off and call a technician; the pressure has to be measured"],
        ["Just cleaned but the airflow is still weak and the fan sounds different", "Worn fan motor or capacitor", `Have it checked; the diagnostic charge is ${p.repair.diagnostic} THB, credited if you go ahead`],
        ["Only on cool nights, with the temperature set to 16–18 degrees", "Temperature too low for a light heat load", "Set 26–27 degrees and use a fan as well"],
        ["Started after adding a fine filter", "More air resistance than the unit can handle", "Remove the extra filter and ask a technician what your model can take"],
      ],
    },

    { type: "h2", text: "Stopping the coil from freezing again" },
    {
      type: "ul",
      items: [
        "Wash the filters yourself every 2 weeks as manufacturers recommend, and no longer than 4 weeks in the burning season, and at least once a month the rest of the year, as Thailand's Department of Health recommends. You do not need a technician for this.",
        "Have a full clean on schedule. The standard is every 6 months, and homes in Chiang Mai that go through the burning season should clean more often.",
        "Set 26–27 degrees as the Provincial Electricity Authority (PEA) recommends, and use a fan rather than a very low temperature.",
        "Do not put a fine filter on top of the original without asking a technician first; home units are not designed to push air through that much resistance.",
        "Keep furniture and other things away from the unit's air outlet and return.",
        "If you have had a top-up and needed another, tell the technician the leak must be found first rather than topping up again.",
      ],
    },

    { type: "h2", text: "Summary" },
    {
      type: "ul",
      items: [
        "Ice on the coil does not mean good cooling; it means too little airflow or a refrigerant problem.",
        "There are four main causes: a blocked filter or coil, low refrigerant from a leak, a weak indoor fan, and a temperature set too low for too long.",
        "Right away: switch off cooling, run fan mode to melt it, and never chip at the ice with anything hard.",
        "Running it anyway sends liquid refrigerant back into the compressor, the most expensive part in the unit.",
        "If it comes back after washing the filters, have a technician measure the pressure and check the fan.",
      ],
    },
    {
      type: "cta",
      text: "If your aircon keeps freezing even after cleaning, photograph where the ice forms and the model sticker and send them on LINE. I will help work out what needs checking before we book a visit.",
    },
    {
      type: "sources",
      items: [
        { title: "Aircon at 26° plus a fan: does it really save power?", publisher: "Provincial Electricity Authority (PEA), 16 Apr 2026 (in Thai)", url: "https://www.pea.co.th/news/infographic/1836", note: "Recommends setting 26–27°C together with a fan" },
        { title: "Which way of using an aircon saves the most power", publisher: "Electricity Generating Authority of Thailand (EGAT) (in Thai)", url: "https://www.egat.co.th/home/20220819-art01/", note: "Recommends 26–27 degrees with a fan, saving about 10% compared with 23–24 degrees" },
        { title: "Using your aircon and remote control efficiently (in Thai)", publisher: "Siam Daikin Sales", url: "https://www.daikin.co.th/th/article/articleDetail/energysaving", note: "Recommends cleaning the filters every 2 weeks" },
        { title: "How to clean the air filter and PM 1.0 filter (in Thai)", publisher: "Samsung Thailand", url: "https://www.samsung.com/th/support/home-appliances/how-to-cleaning-process-of-air-filter-and-pm-1-filter/", note: "Recommends cleaning the air filter every two weeks" },
        { title: "Department of Health advises schools and childcare centres to prepare dust-free rooms (in Thai)", publisher: "Department of Health, Thailand (24 Oct 2019)", url: "https://multimedia.anamai.moph.go.th/news/news241062/", note: "Clean the air conditioner front panel and filters every month, and have the air conditioner cleaned at least once every 6 months" },
        { title: "Seasons of Thailand (in Thai)", publisher: "Thai Meteorological Department", url: "https://tmd.go.th/info/ฤดูกาลของประเทศไทย", note: "The rainy season runs from about mid-May to mid-October, with heavy, continuous rain from late July; the cool season runs from about mid-October to mid-February" },
        { title: "Beat the heat this year: clean your aircon to cut your electricity bill (in Thai)", publisher: "Electricity Generating Authority of Thailand (11 May 2023)", url: "https://www.egat.co.th/home/20230511-art01/", note: "Cleaning the aircon every 6 months can save up to 10% on electricity" },
      ],
    },
  ],
  faqs: [
    {
      q: "If my aircon is icing up, does that mean it is cooling well?",
      a: "No, the opposite. Ice on the coil blocks the airflow, so the unit removes less and less heat from the room. In the end the room does not cool even though the unit runs constantly, and running it anyway risks damaging the compressor.",
    },
    {
      q: "Can I use a hair dryer or hot water to melt the ice faster?",
      a: "Better not. Concentrated heat can warp plastic parts, and ice that melts too fast overflows the tray and drips onto the ceiling. The safest way is to run fan mode for 1–3 hours and let the air melt it gradually, and never chip at the ice with anything hard, because the coil fins are very thin.",
    },
    {
      q: "The ice melted and it cools normally again. Do I still need a technician?",
      a: "If the cause was a blocked filter, you washed it, and the problem does not return within a week or two, that is the end of it and you do not need to pay for a visit. If it comes back, something has not been fixed yet, such as a refrigerant leak, a deeply blocked coil or a worn fan, which needs proper tools to diagnose.",
    },
    {
      q: "Why does low refrigerant cause ice when you would expect less cooling?",
      a: "When the refrigerant is low, the low-side pressure drops, so the refrigerant boils at a much lower temperature than normal. Parts of the coil get cold enough to freeze, but the system as a whole removes less heat, which is why the room cools more slowly even with ice on the coil.",
    },
    {
      q: "Is there much risk for homes that went through the burning season without an aircon clean?",
      a: "Clearly more than usual. Soot and ash from the burning stick to coil fins and build up faster than ordinary dust. In my jobs, iced coils tend to appear from late April into May. What I recommend is a full clean before the season, in January, and washing the filters yourself every 2 weeks as manufacturers recommend, and no longer than 4 weeks during it.",
    },
  ],
};
