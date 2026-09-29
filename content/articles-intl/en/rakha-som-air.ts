import type { IntlArticle } from "@/lib/content-types";
import { p } from "@/lib/site";

export const article: IntlArticle = {
  slug: "rakha-som-air",
  title: "Aircon Repair Costs in Chiang Mai: What Counts as Expensive",
  h1: "Aircon repair costs in Chiang Mai: how much is too much, and what to check before you agree to a price",
  description:
    "A detailed breakdown of what goes into an aircon repair bill, from the diagnostic charge to labour and parts, plus the questions to ask a technician before you agree and the signs you may be charged more later.",
  category: "Prices and costs",
  updated: "2026-07-29",
  readMins: 9,
  image: { src: "/work/lang-air-thod-lang-135.jpg", alt: "A two-dial manifold gauge set hanging in front of an outdoor coil while refrigerant pressure is being measured" },
  excerpt:
    "An aircon repair bill is made up of a diagnostic charge, labour and parts. Here is how to judge whether the figure you have been given is reasonable.",
  keywords: [
    "aircon repair cost Chiang Mai",
    "how much does aircon repair cost",
    "aircon diagnostic fee",
    "is my aircon repair quote too expensive",
    "aircon capacitor replacement cost",
  ],
  relatedService: "som-air",
  blocks: [
    {
      type: "p",
      text: "I understand the feeling of not being sure whether a repair price is fair. Aircon repair costs are hard to compare in advance.",
    },
    {
      type: "p",
      text: "Parts prices depend on the model, the brand and whether the unit is an inverter, and they vary a great deal. What I can do is show you what a repair bill is made up of, so you can ask the right questions and judge for yourself how reasonable the figure is.",
    },
    {
      type: "callout",
      tone: "info",
      title: "Parts are priced for your actual model before any repair",
      text: "There is no single parts price that fits every unit. A capacitor for a standard aircon and a control board for an inverter aircon are very far apart in price. I quote for your model and the parts it actually needs before I start. If you are not happy with the figure, you can pay just the diagnostic charge and stop there.",
    },

    { type: "h2", text: "What goes into an aircon repair bill" },
    {
      type: "p",
      text: "An aircon repair is not one lump sum. It is made up of four layers, and you can ask whoever is doing the work to show you each one separately.",
    },
    {
      type: "table",
      caption: "What makes up an aircon repair bill, and what I charge",
      head: ["Item", "What it is", "What I charge"],
      rows: [
        ["Diagnostic charge", "Travel and the technician's time to find the real cause", `${p.repair.diagnostic} THB, taken off the bill if you go ahead with the repair with me`],
        ["Refrigerant level check", "Measuring the pressure to see whether the refrigerant is low", "Free of charge, checked in front of you; if it is not low, I do not add any"],
        ["Repair labour", "The time and skill to remove, replace and test", "Always quoted before the repair; depends on the job"],
        ["Parts", "The components actually replaced", "Always quoted before the repair; depends on the model and part"],
        ["R32 refrigerant", "Added only when the system is genuinely short and the leak has been repaired", `${p.repair.refrigerantPerLb} THB per pound`],
        ["R410A refrigerant", "A blend, so the whole charge must be recovered and refilled", `${p.repair.refrigerantPerLb} THB per pound`],
      ],
    },
    {
      type: "p",
      text: "I list labour and parts as quoted before the repair because an accurate price has to be based on the model and the cause actually found. So I give you the figure after checking the unit and before starting any work, every time.",
    },

    { type: "h2", text: `Is a ${p.repair.diagnostic} THB aircon diagnostic charge too much?` },
    {
      type: "p",
      text: "Many people hesitate at this figure because they are used to services that say they will come and check for free. The reality is that the fuel and the technician's time spent finding the cause are always a cost, whether or not they are charged separately. The difference is which line of the bill that cost sits on, and you can check it with the following four questions.",
    },
    {
      type: "ul",
      items: [
        "Are travel and diagnostic time included in the labour or the parts? Ask for each part as a separate figure before you decide.",
        "If, after the check, you decide not to repair today, is there any charge, and how much?",
        "Which readings show that this part has failed? Ask to see the measured values.",
        "If several parts need replacing, ask for each one to be tested and explained: which have really failed, and which are being replaced as a precaution.",
      ],
    },
    {
      type: "p",
      text: `In my case, that cost is shown on the first line of the bill as a ${p.repair.diagnostic} THB diagnostic charge, and I take the full amount off if you decide to go ahead with the repair with me. The diagnostic charge covers the time spent finding the cause, whether or not you decide to repair. If I find that a clean alone will solve the problem, I will tell you so.`,
    },
    {
      type: "callout",
      tone: "tip",
      title: "Refrigerant level check at no charge",
      text: "I measure the refrigerant pressure free of charge and let you watch the gauges with me. If the level is not low, I tell you so and do not add any. Charging refrigerant into a system that is not short pushes the pressure above specification and makes the compressor work harder, without making the unit any colder.",
    },

    { type: "h2", text: "How much is too much for an aircon repair?" },
    {
      type: "p",
      text: "The answer is not in the figure on its own, but in how it compares with the following three things.",
    },
    {
      type: "ol",
      items: [
        "Compared with the price of a new unit: if the repair costs more than roughly half the price of a new aircon of the same size, and the existing unit is already old, I consider replacing it better value in the long run.",
        "Compared with the unit's remaining life: an expensive control board repair on a ten-year-old aircon is often followed by the next part wearing out at around the same time.",
        "Compared with how clear the diagnosis is: you should be told where the fault is and which reading shows it. A repair is worth the money when the diagnosis is clear, whether the figure is high or low.",
      ],
    },
    {
      type: "table",
      caption: "Repair or replace: the guidelines I use when advising customers",
      head: ["Situation", "Recommendation", "Reason"],
      rows: [
        ["Unit up to 5 years old, one failed part", "Repair", "The unit still has plenty of life left"],
        ["6–10 years old, repair costs less than half a new unit", "Repair", "Still worth it if the fault is not the compressor"],
        ["Compressor failed on a unit over 8 years old", "Consider replacing the unit", "The compressor is the most expensive part, and other parts often wear out after it is repaired"],
        ["Refrigerant leaking again several times in one year", "Find the leak before deciding", "It may be a corroded pipe that can be repaired, not a worn-out unit"],
        ["Not cooling, but not cleaned for a long time", "Clean first, then measure", "In many cases the job ends at the cost of a clean, with no repair needed"],
      ],
    },

    { type: "h2", text: "8 questions to ask a technician before agreeing to a repair price" },
    {
      type: "p",
      text: "Ask all of these before the technician starts removing any parts, because once parts are out your options become much more limited. These questions apply to every service provider, including me.",
    },
    {
      type: "ol",
      items: [
        "What is causing this fault, how do you know, and what did you measure?",
        "Which parts need replacing, how much is each one, and how much is the labour?",
        "Is the quoted price final, or could it go up along the way? If it does, will you tell me first?",
        "Are the parts genuine, compatible or second-hand?",
        "How long is the warranty on the replaced parts, and how long on the work itself?",
        "Can I see the old parts that were removed?",
        "If the fault is still there after the repair, will there be any extra charge?",
        "Will I get a bill or receipt, and can it be issued in a company name?",
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "Question 6 is the most useful",
      text: "Asking to see the old parts is a polite and normal request in any service job. A technician can hand you the old part straight away, and will often explain which point on it shows that it has failed. That makes this question the best way to confirm the scope of the work actually done.",
    },

    { type: "h2", text: "6 things you should have before agreeing to a repair" },
    {
      type: "p",
      text: "Sometimes the uncertainty comes from incomplete communication. The six points below are what you should have before you agree to a repair. If any of them is missing, you are entitled to ask for time to think it over and to consult another provider as well.",
    },
    {
      type: "ul",
      items: [
        "You have seen the old parts that were removed with your own eyes, before they are taken away.",
        "You have separate, complete figures for labour and parts before any part is removed.",
        "You have seen the readings behind the diagnosis, such as refrigerant pressure or current draw, and if the refrigerant is low, an explanation of where it leaked out.",
        "If several parts need replacing, you have heard the test result for each one showing which have really failed.",
        "You have time to decide without being pushed into an immediate answer, especially when not all the readings have been taken.",
        "You have a written bill and warranty terms, with a clear way to get back in touch, and you know what will be done with the old parts.",
      ],
    },

    { type: "h2", text: "Refrigerant: the hardest item to check, so ask the clearest questions" },
    {
      type: "p",
      text: "Refrigerant is something you cannot see or measure yourself, which makes it the item most likely to be charged again and again if you do not ask the full set of questions. There is only one principle to remember: an aircon is a sealed system, and refrigerant is not used up like fuel. So if it is low, it has always leaked out somewhere.",
    },
    {
      type: "p",
      text: "Adding refrigerant without first looking for the leak means paying for refrigerant that will leak out again. The unit works for around two months and then the same symptoms return. Among the jobs I take on, a fair number of homes have been topping up two or three times a year for several years in a row, which is a sign the leak should be found before the next top-up.",
    },
    {
      type: "callout",
      tone: "danger",
      title: "R410A cannot be topped up on top of the old charge",
      text: "R410A is a blend of two refrigerants. When it leaks, the proportion of the two in the system changes, so topping up on top of what is left throws the mix off and reduces performance. The correct method is to recover all the old refrigerant, pull a vacuum, and then weigh in a fresh charge to the amount stated on the unit's label. If you are told it can simply be topped up, that information departs from the standard method.",
    },
    {
      type: "p",
      text: `Another issue aircon owners in Chiang Mai often run into is the price of refrigerant. Only two types have commonly published prices: R-22 at 25 THB per pound and R-410A at 75 THB per pound. R32, which almost every new inverter aircon uses, has no reference price yet, so there is nothing to compare the figure you are given on site against. I charge the same ${p.repair.refrigerantPerLb} THB per pound for R32 and R410A, and I show you how many pounds before adding any.`,
    },

    { type: "h2", text: "How an aircon repair should go, from first contact to finished job" },
    {
      type: "steps",
      items: [
        { title: "Describe the symptoms in detail when you first get in touch", detail: "Tell me when the problem started, whether it happens all the time or only at certain times, and whether there is any noise or smell with it. The more complete the details, the better I can bring parts that match the symptoms, so you do not have to wait for a second visit." },
        { title: "The technician checks and shows you the readings", detail: `I measure the refrigerant pressure, the current draw and the temperature of the air going in and coming out, then explain what the readings tell us. This step is what the ${p.repair.diagnostic} THB diagnostic charge covers.` },
        { title: "A quote with labour and parts shown separately", detail: "You should have the full figures before any part is removed, and you have the right to decline and pay only the diagnostic charge." },
        { title: "Work starts only after you confirm", detail: "If I find something else that needs fixing during the repair, I stop and give you a new price to consider before carrying on." },
        { title: "Testing in front of you before packing up", detail: "I switch the unit on and measure the outlet air temperature again with you watching, then hand back the old parts that were removed so you can check them." },
        { title: "Receive the bill and warranty terms", detail: "It should state which parts were replaced and until when the work is under warranty. For a business, ask for the receipt to be issued in the company name as well." },
      ],
    },
    {
      type: "cta",
      text: "If your aircon is not working right but you are not sure it needs a repair, send me the symptoms on LINE first. I will give you an initial assessment free of charge, and if a clean will solve it, I will tell you honestly that a repair is not needed yet.",
    },

    { type: "h2", text: "Summary" },
    {
      type: "ul",
      items: [
        "An aircon repair bill is made up of a diagnostic charge, labour and parts, and all three should be clearly separated.",
        `I charge ${p.repair.diagnostic} THB for diagnosis and take it off the bill if you repair with me. The diagnostic charge covers the time spent finding the cause, whether or not you decide to repair.`,
        "There is no single parts price because it depends on the model. I quote for your actual model before any repair.",
        "Ask all your questions before agreeing, especially to see the old parts that were removed.",
        "Low refrigerant means there is a leak, which has to be found before recharging, and R410A has to be recovered and the whole system refilled.",
        "If the repair costs more than roughly half the price of a new unit and the unit is already old, consider replacing it.",
      ],
    },
  ],
  faqs: [
    {
      q: `If I decide not to repair, do I still pay the ${p.repair.diagnostic} THB diagnostic charge?`,
      a: `Yes, because it covers the travel and time I spend finding the cause. But if you decide to go ahead with the repair with me, I take the full ${p.repair.diagnostic} THB off the repair bill. The diagnostic charge covers the time spent finding the cause, whether or not you decide to repair. If I find that a clean alone will solve the problem, I will tell you straight away.`,
    },
    {
      q: "Why is there no single price for parts?",
      a: "Because parts prices vary a lot by model and brand. A capacitor for a standard aircon and a control board for an inverter aircon can be several times apart in price. So I quote for your model and the parts it actually needs before any repair, with labour and parts shown separately, and you have the right to decline and pay only the diagnostic charge.",
    },
    {
      q: "I have been told my refrigerant has run out and needs topping up. What should I ask first?",
      a: "Ask one question back first: where did the missing refrigerant leak out? An aircon is a sealed system, and refrigerant is not used up like fuel. If it is low, there is a leak, and topping up without repairing the leak means paying for refrigerant that will leak out again. With my service, the refrigerant level check is free of charge and you can watch the gauges with me. If it is not low, I do not add any.",
    },
    {
      q: "The fault came back after the repair. Do I have to pay again?",
      a: "First we need to establish whether it is the same fault from the same cause. If it is the same point I repaired and it is still within the 30-day repair warranty, I come back and fix it without charging for the visit. Whoever you use, the important thing is to ask clearly before agreeing to a repair how long the work is under warranty and what it covers, and to get that in writing.",
    },
    {
      q: "My aircon is quite old. Should I repair it or buy a new one?",
      a: "The rule I use when advising customers is that if the repair costs more than roughly half the price of a new aircon of the same size, and the existing unit has been in use for a long time, replacing it is usually better value. That is especially true when the failed part is the compressor, because it is the most expensive part and other parts often wear out along with it. But if the fault is in a small part such as a capacitor or a sensor, repairing is better value.",
    },
  ],
};
