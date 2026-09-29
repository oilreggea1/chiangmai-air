import type { IntlArticle } from "@/lib/content-types";
import { p, btu } from "@/lib/site";

export const article: IntlArticle = {
  slug: "som-rue-sue-mai",
  title: "Repair or Replace an Old Aircon? Decide by the Numbers",
  h1: "Should you repair an old aircon or replace it? I work it out in numbers for you before you decide",
  description:
    "Old aircon keeps breaking down: repair or replace? Decide by age, repair cost vs a new unit, refrigerant type, how often it fails, and running costs.",
  category: "Aircon guides",
  updated: "2026-07-29",
  readMins: 9,
  image: { src: "/work/yai-air-009.jpg", alt: "An outdoor unit standing on the ground against a wall, with the full panel of cooling fins visible on its side" },
  excerpt:
    "Not every case calls for a new unit, and not every case calls for a repair. I give you five concrete criteria so you can assess the unit at home yourself.",
  keywords: [
    "repair or replace old aircon", "when to replace an aircon", "is aircon repair worth it",
    "should I replace an R22 aircon", "aircon repair Chiang Mai",
  ],
  relatedService: "som-air",
  blocks: [
    {
      type: "p",
      text: "When I finish checking an aircon and give the repair price, the question customers ask next almost every time is how much longer the unit will last after the repair, or whether they should put that money towards a new one. I understand that hesitation well, because nobody wants to pay for a unit that is about to reach the end of its life.",
    },
    {
      type: "p",
      text: "I assess the unit on its actual condition and give you figures for both options to consider. In many cases, repairing is by far the cheaper answer, especially for units that are not very old and have failed somewhere other than the heart of the system. Forcing a repair on a unit that is worn out, on the other hand, is like paying in instalments for a unit that will eventually fail again, and I do not recommend it. Below I explain five criteria in turn; once you look at them together, the answer becomes clearer.",
    },

    { type: "h2", text: "Criterion one: the age of the unit" },
    {
      type: "p",
      text: "The age of the unit is the first thing I look at, because it tells you how much use every part of the system has had, not just the part that is failing now. A unit that has been in use for more than ten years usually has other parts close to wearing out as well, so fixing one spot does not mean the job is over.",
    },
    {
      type: "ul",
      items: [
        "Up to 5 years old is still considered new. If it fails, I recommend repairing it, because in almost every case the repair costs far less than a replacement and the unit still has a long life ahead.",
        "6–10 years old is the middle stage. You need to consider where it has failed and what the repair costs. Small faults can be repaired, but if the compressor has failed, think it over carefully.",
        "Over 10 years old, it should be reassessed every time it fails. If the repair is expensive and involves a main part, I usually advise that replacing the unit is better value.",
        "Over 15 years old, if the compressor has failed badly or the coil is leaking, I recommend replacing the unit, because a repair is usually followed by other problems before long.",
      ],
    },
    {
      type: "callout",
      tone: "info",
      title: "Age and actual condition do not always go together",
      text: "In the jobs I take, aircons that were installed well, sheltered from the weather and cleaned regularly have lasted longer than the same model with the outdoor unit out in the full sun and never cleaned. The number of years is only a starting point; the actual condition I find when I open the unit carries more weight in the decision.",
    },

    { type: "h2", text: "Criterion two: repair cost compared with a new unit" },
    {
      type: "p",
      text: "This is the clearest criterion. Take the repair price the technician quotes, divide it by the price of a new unit of the same size including installation, and see what percentage it comes to. The higher the percentage, the less the repair is worth it, especially when the unit is already old.",
    },
    {
      type: "ul",
      items: [
        "If the repair costs no more than about 30% of a new unit, repairing is worth it in almost every case.",
        "At about 30–50%, look at the age of the unit too. Under 8 years, the repair is usually worth it; over 10 years, it starts to be a close call.",
        "If the repair costs more than about 50% of a new unit, for units over 10 years old, replacing is usually better value.",
        "Include the installation cost on the new-unit side too, otherwise the comparison is not fair.",
      ],
    },
    {
      type: "p",
      text: `Unit prices depend on the model and on promotions at the time, so feel free to ask me. For installation, I charge ${p.install.small} THB for 9,000–12,000 BTU and ${p.install.large} THB for ${btu.installLarge} BTU. If the old unit has to be removed first, that is an extra ${p.install.removeOnly} THB. You can put these figures straight onto the new-unit side of the comparison. I tell you all the costs before work starts.`,
    },
    {
      type: "callout",
      tone: "tip",
      title: "Find out the cause first, then decide",
      text: `My diagnostic charge is ${p.repair.diagnostic} THB, and I take it off the bill if you go ahead with the repair. Knowing clearly where the fault is and what the repair costs is better than deciding to buy a new unit on a guess. In the jobs I take, there have been many homes where the owner thought the unit was finished, and when I actually opened it up, it was only a clogged coil or a worn capacitor.`,
    },

    { type: "h2", text: "Criterion three: the refrigerant the unit uses" },
    {
      type: "p",
      text: "Most homeowners do not know about this, but it matters a lot for older units. Aircons installed a long time ago usually use R22 refrigerant, an older type being phased out worldwide. Newer units use R410A, and most units on sale today use R32.",
    },
    {
      type: "p",
      text: "The problem with R22 units is not that they cannot be used today, but that both the refrigerant and the parts are likely to get harder to find and more expensive over time. If your R22 unit has a leak and needs topping up again and again, that is the sign I recommend taking replacement seriously, because it means putting money into a system that is losing support in the market.",
    },
    {
      type: "p",
      text: `Another thing to know is that refrigerants cannot be swapped across types. An R22 unit cannot be topped up with R32 instead, because the system pressures and the compressor lubricating oil are different. If someone suggests switching the refrigerant type in your existing unit without changing the equipment, I recommend asking for more detail before you decide. For R32 and R410A top-ups, I charge ${p.repair.refrigerantPerLb} THB per pound.`,
    },

    { type: "h2", text: "Criterion four: how often it breaks down" },
    {
      type: "p",
      text: "A single repair may not be expensive, but if you are paying two or three times a year, the yearly total can exceed half the price of a new unit without you noticing. I recommend looking back at how many times you called a technician in the past year and how much you paid each time, then adding it all up. The figure is usually higher than you remember.",
    },
    {
      type: "ul",
      items: [
        "Calling a technician once a year or never means the unit is in normal condition and can keep being repaired.",
        "Calling a technician 2–3 times a year with a different problem each time shows the whole system is deteriorating, not just one part.",
        "If the same spot fails again within a few months, the underlying cause needs to be found first rather than repairing the same spot again, because there is usually a problem that has not been dealt with.",
        "If the technician doing the repair still cannot say how much longer the unit will last, that is a sign it is near the end of its working life.",
      ],
    },
    {
      type: "p",
      text: "There is one more cost that is rarely counted in numbers: the time you have to wait. March to May is when technicians' schedules in Chiang Mai are busiest all year. If a unit that breaks down often happens to fail then, you may have to wait several days without an aircon, which is quite disruptive. So I will tell you honestly: if your unit is one that breaks down often, replacing it between November and January, when schedules are open, is a better choice than waiting for it to fail in the middle of the hot season.",
    },

    { type: "h2", text: "Criterion five: the difference in electricity costs" },
    {
      type: "p",
      text: "An old unit whose performance has dropped uses more electricity than when it was new, because the coil has deteriorated, the fins are bent, the refrigerant is low and the compressor is worn. All of this makes the unit run longer for the same result. If the old unit is fixed speed and the new one you plan to buy is an inverter, the difference in electricity costs will be even clearer, because an inverter uses less electricity than a fixed-speed unit.",
    },
    {
      type: "p",
      text: "The way to weigh it up is to estimate how many months the expected monthly electricity saving would take to pay back the price difference of the new unit. If the aircon in that room runs for many hours every day, the payback period is much shorter than for a room used only now and then. That is why the aircon in the main bedroom and the one in the guest room may lead to different conclusions, even if both units are about the same age.",
    },
    {
      type: "callout",
      tone: "warn",
      title: "Do not compare electricity costs on a unit that has not been cleaned",
      text: "If the existing unit has not been cleaned for a long time, the electricity bill you see is not what the unit really uses in normal condition, because a clogged coil forces the compressor to run longer each cycle. I recommend having it cleaned first, then reading the meter for a week after the clean and comparing it with before, at the same times of day. Only then decide whether the old unit uses so much electricity that it needs replacing.",
    },

    { type: "h2", text: "Decision table: repair or buy new" },
    {
      type: "p",
      text: "Compare your situation with this table. If several conditions point the same way, the answer is fairly clear.",
    },
    {
      type: "table",
      caption: "Situations and whether I recommend repairing or replacing",
      head: ["Situation", "Recommendation", "Reason"],
      rows: [
        ["3-year-old unit, not cooling, check shows a clogged coil", "Repair (clean)", "It is not a fault, just cleaning, and the cost is very low compared with a new unit"],
        ["5-year-old unit, failed capacitor or fan motor", "Repair", "The parts are inexpensive and easy to get, and the unit still has plenty of life left"],
        ["8-year-old unit, refrigerant leaking from the pipe, leak found and fixable", "Repair", "The cause can be fixed, rather than topping up refrigerant over and over"],
        ["8-year-old unit, failed compressor, repair about half the price of a new unit", "Close call; consider its overall condition", "If everything else is in good condition and it uses an easy-to-find refrigerant, repair is still an option. If the coil is starting to corrode, replace it"],
        ["Unit over 10 years old, failed compressor", "Replace", "The repair is expensive relative to the remaining life, and other parts are also close to wearing out"],
        ["R22 unit that keeps leaking and needs topping up every few months", "Replace", "R22 refrigerant and parts are getting steadily harder to find; repeated top-ups are an unnecessary cost that keeps coming"],
        ["Technician called 3 or more times a year, a different problem each time", "Replace", "High accumulated yearly repair costs, and repeated waits for a technician, especially in the hot season"],
        ["Corroded coil, fins bent across the whole panel, deep rust", "Replace", "The core heat-exchange structure is damaged; repair is not worth it and it usually leaks again"],
        ["Unit still cools well, but you want to save more electricity", "Clean first, then assess", "In many cases performance comes back after a clean, without replacing the unit"],
      ],
    },

    { type: "h2", text: "If you decide to replace it, here is what I recommend" },
    {
      type: "steps",
      items: [
        { title: "Recalculate the BTU; do not just stick with the old size", detail: "The old unit may have been the wrong size from the start, or the way the room is used may have changed. I recommend recalculating from the room area and its real conditions, such as whether it gets the afternoon sun or sits under the roof." },
        { title: "Choose the type of unit to match how you use it", detail: "A room used continuously every day is worth an inverter. For a room used only now and then, a non-inverter aircon is usually better value once you count the unit price together with future repair costs." },
        { title: "Ask about local parts before you buy", detail: "Ask whether the model you are interested in has a service centre in Chiang Mai, where parts are ordered from, and how many days the wait is, because waiting for parts is very disruptive in the hot season." },
        { title: "Plan the new outdoor unit location", detail: "If the old spot gets full sun all afternoon, I recommend moving it or adding shade, because an outdoor unit that can shed heat well lets the unit work less hard and last longer." },
        { title: "Choose the right time to install", detail: "If the old unit still works, replacing it between November and January gets you an appointment sooner, and you do not have to wait during the hot weather." },
        { title: "Keep the tax invoice and warranty terms", detail: "I can issue a full tax invoice made out to your company, and my installation work carries a 1-year warranty when you buy the unit from me, or 6 months if you have your own unit." },
      ],
    },

    { type: "h2", text: "Summary" },
    {
      type: "ul",
      items: [
        "Weigh up five things together: the age of the unit, the repair cost as a share of a new unit, the refrigerant type, how often it breaks down, and the difference in electricity costs.",
        "If the repair costs no more than about 30% of a new unit, repairing is worth it in almost every case. Over 50% on an old unit, replacing is usually better value.",
        "An R22 unit that keeps leaking is the case where I most often recommend replacement, because the refrigerant and parts get harder to find over time.",
        "Breaking down several times a year with different problems shows the whole system is deteriorating, not just one part.",
        "Have the aircon cleaned first and then look at the electricity bill again, before concluding that the old unit uses so much electricity it needs replacing.",
        "If you decide to replace it, recalculate the BTU rather than automatically sticking with the old size.",
      ],
    },
    {
      type: "cta",
      text: `If you are still not sure whether the unit at home should be repaired or replaced, let me come and check it first. The diagnostic charge is ${p.repair.diagnostic} THB, and I take it off the bill if you go ahead with the repair. I will tell you honestly which cases are worth repairing and which are not.`,
    },
  ],
  faqs: [
    {
      q: "After how many years should an aircon be replaced?",
      a: "There is no fixed number; the condition of the unit has to be considered too. But in general, for units up to 5 years old I recommend repairing. For 6–10 years, you need to consider where it has failed and what the repair costs. For units over 10 years old with a failed compressor, replacing is usually better value, because the other parts are close to wearing out as well.",
    },
    {
      q: "The compressor has failed. Should I replace the compressor or the whole unit?",
      a: "Compare the cost of replacing the compressor with the price of a new unit including installation. If the unit is under 8 years old, everything else is in good condition, and it uses a refrigerant that is still easy to get, replacing the compressor is an acceptable option. But if the unit is over 10 years old or the coil is starting to corrode, I will tell you honestly that a new unit is better value in the long run.",
    },
    {
      q: "Does an old R22 aircon need replacing soon?",
      a: "If it still cools well and has no leaks, you can keep using it; there is no need to spend money yet. But if it starts needing refrigerant top-ups every few months or breaks down often, you should seriously consider replacing it, because R22 refrigerant and parts will get harder to find and more expensive over time, and the existing unit cannot be switched to another refrigerant.",
    },
    {
      q: "When buying a new unit, does it need to be the same BTU as the old one?",
      a: "Not necessarily. You should recalculate from the actual room area, because the old unit may have been the wrong size from the start, or the way the room is used may have changed, especially for rooms that get the afternoon sun or upstairs rooms under the roof, which need extra BTU on top of the basic formula.",
    },
    {
      q: "What time of year is best to replace an aircon?",
      a: "If you can choose, I recommend November to January. Chiang Mai is cool then, aircons are used less and technicians' schedules are open, so there is no long wait, and you go into the haze season and the hot season with a new unit ready to run at full capacity. That is very different from waiting for the unit to fail in mid-April, the busiest month of the year.",
    },
  ],
};
