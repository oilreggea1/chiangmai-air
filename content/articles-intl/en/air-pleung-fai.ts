import type { IntlArticle } from "@/lib/content-types";

export const article: IntlArticle = {
  slug: "air-pleung-fai",
  title: "Aircon Using Too Much Power? Best Temperature, Does Cleaning Help",
  h1: "Aircon using too much electricity: what temperature saves power, and does cleaning really cut the bill?",
  description:
    "Where an aircon uses power, why 26–28 degrees is advised, how a fan helps, whether to switch off when you leave, and how dirty coils push up your bill.",
  category: "Prices and costs",
  updated: "2026-07-29",
  readMins: 8,
  image: { src: "/work/lang-air-thod-lang-015.jpg", alt: "A long aircon air filter so clogged with black dust that the mesh is solid, next to a white front cover" },
  excerpt:
    "A higher electricity bill in the hot season mostly does not come from running the aircon for longer, but from the compressor running longer each cycle without you knowing.",
  keywords: [
    "aircon using too much electricity",
    "best aircon temperature to save power",
    "does cleaning aircon reduce electricity bill",
    "aircon electricity cost Chiang Mai",
    "aircon SEER rating explained",
  ],
  relatedService: "lang-air",
  blocks: [
    {
      type: "p",
      text: "When the hot-season electricity bill arrives, every year I am asked whether the family has been running the aircon for longer. Many homes use it exactly as before, yet the figure is clearly higher. I understand that this uncertainty makes it hard to decide what to do. The real explanation comes down to one factor: the compressor is running for longer each hour, and there are three or four things that make it run longer without you noticing.",
    },
    {
      type: "p",
      text: "I have put them in order of value for money, starting with what you can do straight away at no cost and ending with what needs some investment, so you can choose only the steps that really work for your home.",
    },

    { type: "h2", text: "Which part of an aircon uses the most power" },
    {
      type: "p",
      text: "An aircon system has three motors: the indoor coil fan in the room, the outdoor unit fan, and the compressor. By far the biggest user of power is the compressor; the two fans use very little in comparison.",
    },
    {
      type: "p",
      text: "Put simply, your aircon's electricity cost equals the total time the compressor runs each month, not the time you have the aircon switched on. If the compressor cuts out quickly and often, the bill is low. But if it runs continuously without cutting out, the bill is high even though you use the aircon for the same hours as before.",
    },
    {
      type: "callout",
      tone: "info",
      title: "There is really only one problem to solve",
      text: "Every power-saving tip you have heard, whether it is setting a higher temperature, using a fan as well, closing the curtains or cleaning the aircon, solves the same problem: getting the compressor to cut out sooner and run for less time each cycle. Once you grasp this, you can judge for yourself whether any tip you are given makes sense.",
    },

    { type: "h2", text: "What temperature setting actually saves power" },
    {
      type: "p",
      text: "Thailand's electricity authorities recommend setting the aircon at 26–28 °C. The reason is that the lower you set it, the wider the gap between your setting and the air outside, so the compressor has to run longer to reach the target, and once it gets there it is harder to hold that level.",
    },
    {
      type: "p",
      text: "Most people who set 22 or 23 degrees do not actually want air at 22 degrees; they want the room to cool down faster. This is one of the misunderstandings I come across most often, because an aircon does not work like a tap. Setting 18 degrees does not cool the room faster. It only stops the compressor cutting out until the room reaches 18 degrees, which most homes never do.",
    },
    {
      type: "table",
      caption: "How each temperature setting affects the way the compressor runs",
      head: ["Setting", "What happens to the compressor", "How the room feels"],
      rows: [
        ["18–22 °C", "Runs continuously and hardly ever cuts out; in a poorly insulated room it may never reach the setting", "Very cold, but the highest bill, and you often wake up needing a thick blanket"],
        ["23–25 °C", "Cuts out sometimes, but the running cycles are still long", "Clearly cool and comfortable; bill moderate to high"],
        ["26–28 °C", "Cuts out in regular cycles; running cycles get shorter", "The range the electricity authorities recommend; comfortable enough with some airflow"],
        ["29 °C and above", "Cuts out very often and runs little", "Many people start to feel it is stuffy and rely more on a fan"],
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "If 26 degrees does not feel cool enough, do not lower the setting yet",
      text: "First check whether the air coming out of the aircon is as strong as it used to be, and when it was last cleaned. From the jobs I take, feeling that 26 degrees is not cool enough is mostly not about the number on the remote, but about a coil that is starting to clog so the airflow drops. Lowering the temperature further just means paying more for electricity to mask the problem.",
    },

    { type: "h2", text: "A fan is the cheapest way to cut the bill" },
    {
      type: "p",
      text: "A fan does not make the air cooler, but it makes sweat evaporate from your skin faster, so your body feels cooler than the actual air temperature. That is why a room at 27 degrees with air moving through it feels more comfortable than a room at 25 degrees where the air is completely still.",
    },
    {
      type: "ul",
      items: [
        "Set the aircon at 26–27 degrees and run a fan gently so the air moves over you, and it feels about as comfortable as a much lower setting.",
        "A fan uses far less power than the compressor, so adding a fan to take load off the compressor always pays.",
        "Position the fan so the air circulates around the whole room rather than only pointing it at yourself; it also helps spread the cool air from the aircon evenly.",
        "If you have a ceiling fan, it works very well with the aircon, because it helps push the cool air that settles at the bottom of the room back into circulation.",
        "Switch the fan off when nobody is in the room, because a fan helps how people feel; it does not lower the room temperature.",
      ],
    },

    { type: "h2", text: "How dirty coils make an aircon use more power" },
    {
      type: "p",
      text: "Dirty coils are the main cause of a rising bill, and the most overlooked one, because it happens so gradually that you do not notice. An aircon has two coils that both need to be clean for it to work at full efficiency.",
    },
    {
      type: "p",
      text: "The indoor coil sits inside the room, and its job is to pull heat out of the air. If dust packs the coil fins, less air can flow through, so the aircon pulls heat out of the room more slowly. The room temperature falls slowly, and the compressor has to keep running without cutting out.",
    },
    {
      type: "p",
      text: "The outdoor coil sits outside, and its job is to release heat into the outside air. If its fins are clogged with dust or leaves, heat cannot get out fast enough and the pressure in the system rises. The compressor then has to work harder to pump the same amount of refrigerant, so it uses more power straight away while giving the same or less cooling.",
    },
    {
      type: "table",
      caption: "Signs that your aircon is using more power than it needs to",
      head: ["Sign", "Likely cause", "What to do"],
      rows: [
        ["Weaker airflow than before", "Clogged filter or indoor coil", "Wash the filter yourself first; if that does not help, the coil needs cleaning"],
        ["You keep lowering the temperature to feel the same", "Indoor coil gradually clogging", "It is time for a thorough clean"],
        ["The compressor almost never cuts out", "Temperature set too low, or a clogged coil", "Raise it to 26 degrees first; if it still does not cut out, have a technician check"],
        ["Cool at night but not during the day", "The outdoor coil cannot release heat fast enough", "Clean the outdoor coil and check whether anything is blocking the airflow"],
        ["The aircon cuts out unusually often, then restarts by itself", "Outdoor coil so clogged the unit is protecting itself", "Have a technician check; do not leave it for long"],
      ],
    },
    {
      type: "p",
      text: "You can check this mechanism yourself. A clean coil lets the compressor run for less time each cycle, so the bill goes down too. What I want to stress is that this comes from a clean that gets both the indoor and outdoor coils truly clean; taking out the filter and washing it alone does not give results on this scale. If you want to see the figures for your own home, note the meter reading before the clean and one week after, at the same time of day.",
    },
    {
      type: "callout",
      tone: "warn",
      title: "For homes in Chiang Mai, every 6 months may not be enough",
      text: "The smoke-haze season from February to April makes soot and dust build up on coils much faster than normal. For homes in dusty areas or next to a main road, I recommend a thorough clean before the season and another after it ends. In between, take the filters out and wash them yourself every 2–4 weeks, which you can do without calling a technician.",
    },

    { type: "h2", text: "Does switching off when you leave the room save power?" },
    {
      type: "p",
      text: "This is one of the questions I get most often. The answer depends on two things: how long you will be out of the room, and whether your aircon is an inverter model.",
    },
    {
      type: "p",
      text: "A standard aircon only works fully on or fully off. An inverter aircon can vary its compressor speed: once it reaches the target temperature it slows down and idles to hold that temperature, which uses far less power than starting to cool a room that has already heated up.",
    },
    {
      type: "table",
      caption: "A guide to deciding whether to switch the aircon off or leave it running",
      head: ["Time out of the room", "Standard aircon", "Inverter aircon"],
      rows: [
        ["Under half an hour, e.g. popping downstairs", "Leave it on", "Leave it on"],
        ["Half an hour to an hour", "Can switch off if the room holds the cool well", "Leaving it on is usually better value"],
        ["More than one to two hours", "Switch off", "Switch off"],
        ["Out at work all day", "Definitely switch off", "Definitely switch off"],
      ],
    },
    {
      type: "p",
      text: "Switching off and back on every half hour does not pay because the heaviest power use is when the aircon pulls a room that has heated up back down to the target, not when it is holding the temperature. Switching off too often forces the aircon through that heavy-use phase again and again.",
    },

    { type: "h2", text: "How to read the No. 5 label and the SEER rating" },
    {
      type: "p",
      text: "If you are about to buy a new unit, the figure to look at is not just \"No. 5\" (Thailand's top energy-saving label grade), because the current label also carries stars. The more stars, the more efficient the unit is, even among No. 5 models.",
    },
    {
      type: "p",
      text: "SEER is the seasonal energy efficiency rating. Put simply, it is the cooling you get for the electricity you use, taking into account both the times the unit works hard and the times it works lightly. The higher the SEER, the less power it uses compared with a unit of the same BTU size.",
    },
    {
      type: "ul",
      items: [
        "Comparing SEER only means something between aircons of a similar BTU size; comparing across sizes gives you nothing useful.",
        "The label also shows an estimated yearly electricity cost, which I think is an easier way to compare models than looking at SEER directly.",
        "A high SEER usually comes with a higher unit price. Think about how many hours a day you run the aircon: if it runs all night every night, the difference pays for itself, but if you only use it now and then, it may not be worth it.",
        "An energy-saving unit installed at the wrong size or never cleaned can use more power than a standard unit that is looked after regularly.",
      ],
    },
    {
      type: "callout",
      tone: "danger",
      title: "The wrong BTU for the room is a hidden electricity cost",
      text: "An aircon too small for the room runs continuously without cutting out, because it cannot bring the temperature down to the target. An aircon too big for the room cuts out so quickly that it cannot pull the moisture out of the air, so the room is cool but damp, and cutting in and out so often also wears the compressor faster. Both cases end with a higher bill than there should be.",
    },

    { type: "h2", text: "A checklist to start cutting your bill today" },
    {
      type: "steps",
      items: [
        { title: "Raise the remote setting to 26 degrees", detail: "You can do this straight away at no cost. If it does not feel cool enough, add a fan first rather than lowering the temperature again." },
        { title: "Take out the filters and wash them", detail: "It takes about ten minutes. Wash them with plain water and let them dry completely before putting them back. You can do this yourself every 2–4 weeks when the dust is heavy, without calling a technician." },
        { title: "Check the condition of the outdoor unit", detail: "See whether leaves, plastic bags or other things are blocking the air vents, and whether the unit sits in strong sun all day. If you can shade it without blocking the airflow, that helps quite a bit." },
        { title: "Block the ways hot air gets into the room", detail: "Close the curtains when the sun shines in, seal the gap under the door, and check that the hole where the aircon pipes go through the wall is still fully sealed." },
        { title: "Check when the aircon was last cleaned", detail: "If it has been more than 6 months, or it has just come through the smoke-haze season without a clean, this is the step that gives the best value of all." },
        { title: "Note your meter reading before and after the clean", detail: "Read the meter at the same time of day, before the clean and about a week after. You will see the result in your own figures rather than relying on what someone tells you." },
      ],
    },
    {
      type: "cta",
      text: "If your electricity bill has gone up but you are not sure which aircon is responsible, send me the details. I will check the outlet air temperature and the condition of the coils with you, then tell you honestly how much a clean will help, or whether the cause lies somewhere else.",
    },

    { type: "h2", text: "Summary" },
    {
      type: "ul",
      items: [
        "Your aircon's electricity cost equals the total time the compressor runs, not the time you have the aircon switched on.",
        "The electricity authorities recommend 26–28 degrees, and setting it lower does not cool the room any faster.",
        "A fan uses far less power than the compressor, so using one together with the aircon is the best-value approach.",
        "Dirty coils make the compressor run longer every cycle, so cleaning on schedule brings the bill down, and you can measure it yourself from the meter readings before and after.",
        "Out of the room for less than half an hour: leave it on. More than one to two hours: switch it off.",
        "A No. 5 unit installed at the wrong size or never cleaned can use more power than a standard unit that is looked after regularly.",
      ],
    },
  ],
  faqs: [
    {
      q: "Does setting the aircon to 18 degrees really cool the room faster?",
      a: "No. An aircon does not work like a tap, where opening it fully makes the water come faster. How fast it cools depends on the unit's capacity compared with the room size, not on the number on the remote. Setting 18 degrees only stops the compressor cutting out until the temperature reaches 18, which most rooms never do. The result is that the unit runs all night and the bill goes up with no extra benefit.",
    },
    {
      q: "Does cleaning the aircon really lower the electricity bill, and by how much?",
      a: "Yes, it does. The mechanism is that a clean coil lets the compressor run for less time each cycle, so the bill goes down too. But it has to be a clean that gets both the indoor and outdoor coils truly clean, not just taking out the filters and washing them. How much it drops depends on how clogged the coils were before the clean. If you want to see the result in your own figures, note the meter reading before the clean and one week after, at the same time of day.",
    },
    {
      q: "Should I switch the aircon off when I leave the room for a short time?",
      a: "If it is under half an hour, I recommend leaving it on, because the aircon uses the most power when pulling a room that has heated up back down to the target, not when holding the temperature. Switching off and on often forces the unit through that heavy-use phase again and again. But if you are out for more than one to two hours, or all day, switching off is definitely better value.",
    },
    {
      q: "Does running a fan with the aircon use more electricity?",
      a: "Only a little more, and it is very good value, because a fan uses far less power than the compressor. With air moving over you, sweat evaporates faster, so you feel cooler than the actual air temperature. The result is that you can set the aircon at 26–27 degrees and still feel comfortable, instead of lowering it to 23 degrees, which makes the compressor run much longer.",
    },
    {
      q: "If I buy a No. 5 labelled aircon, will my bill definitely go down?",
      a: "Not always. The label only shows how efficient the unit can be under test conditions. Your real bill depends on three more things: whether the BTU size suits the room, whether it is installed correctly, and whether it is cleaned regularly. A No. 5 aircon with the wrong BTU for the room, or one that is never cleaned, can use more power than a standard aircon that is looked after regularly.",
    },
  ],
};
