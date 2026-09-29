import type { IntlArticle } from "@/lib/content-types";
import { p } from "@/lib/site";

export const article: IntlArticle = {
  slug: "nam-ya-r32-r410a-r22",
  title: "R32 vs R410A vs R22 Refrigerant: What to Check Before a Top-Up",
  h1: "R32, R410A and R22 refrigerant: how they differ, and what to check before you agree to a top-up",
  description:
    "How to check which refrigerant your aircon uses, how R32, R410A and R22 differ in practice, whether R410A can be topped up or has to be recovered, and what to ask before agreeing to a recharge in Chiang Mai.",
  category: "Prices and costs",
  updated: "2026-09-29",
  readMins: 9,
  image: { src: "/work/lang-air-thod-lang-112.jpg", alt: "Close-up of refrigerant pressure gauges connected during a system check" },
  excerpt:
    "Major manufacturers are progressively switching new inverter aircon models to R32. This guide compares the refrigerants, their prices per pound, and what you should check before agreeing to a top-up.",
  keywords: ["R32 refrigerant", "R32 vs R410A", "aircon gas top-up price Chiang Mai", "R22 refrigerant", "which refrigerant does my aircon use"],
  relatedService: "som-air",
  blocks: [
    {
      type: "p",
      text: "Refrigerant is the part of aircon servicing that owners know least about. You cannot see it, you cannot measure it yourself, and you cannot tell by looking how many pounds went in. With no published reference price for R32 to compare against, that information gap gets even wider. The points below let you check things for yourself.",
    },
    {
      type: "p",
      text: "There are three things worth knowing before anyone puts refrigerant into your unit: which refrigerant your aircon uses, how the refrigerants differ in practice, and what to ask before agreeing on a price.",
    },
    {
      type: "callout",
      tone: "warn",
      title: "There is no reference price for R32 yet",
      text: "From my survey of the prices Chiang Mai aircon shops publish, only two types are listed: R-22 at about 25 THB per pound and R-410A at about 75 THB per pound. R32, which major manufacturers are switching their new inverter models to, has no reference price to compare with, so the price you are quoted on site has nothing to be measured against.",
    },

    { type: "h2", text: "First, check which refrigerant your aircon uses" },
    {
      type: "p",
      text: "You can do this yourself in three minutes without calling anyone, and it is the most useful thing to know when you talk to a service provider. Once you can say straight away that the unit uses R32, any price conversation starts from facts you can check.",
    },
    {
      type: "steps",
      items: [
        { title: "Go to the outdoor unit", detail: "The large unit outside the house or hanging on the wall has a data sticker on the side or back, usually silver or white." },
        { title: "Find the line marked Refrigerant", detail: "Some units print REFRIGERANT, others just R followed by a number. You will see R32, R410A or R22, together with the factory charge weight, for example 0.90 kg." },
        { title: "If the sticker has faded, look at the valve cover", detail: "Many brands print the refrigerant type near the service valves where the pipes connect. The manual and warranty card from when you bought it also say." },
        { title: "Use the age of the unit as a clue", detail: "Most inverter units bought in the last few years use R32, though some models are still R410A. A very old, non-inverter unit is quite likely to be R22." },
        { title: "Save it on your phone", detail: "Photograph the sticker with the refrigerant type, charge weight, model and serial number. Next time you need a technician, one photo gives them everything." },
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "An easy thing to notice",
      text: "Units on R410A and R32 run at similar pressures, clearly higher than R22, so technicians use different service valve fittings from older R22 units. If you see the technician connect the gauges straight away without an adapter, the equipment already matches your unit's system.",
    },

    { type: "h2", text: "R32, R410A and R22 compared in practice" },
    {
      type: "table",
      caption: "How the three refrigerants found in homes differ",
      head: ["", "R32", "R410A", "R22"],
      rows: [
        ["Found in", "Most new inverter units", "Mid-generation units from before R32", "Older units, mostly non-inverter"],
        ["Single or blended", "Single", "Blend of two refrigerants", "Single"],
        ["Can it be topped up after a leak?", "Yes, once the leak is repaired", "Yes, once the leak is repaired (charged as liquid), but I choose to recover it and weigh in a fresh charge", "Yes, once the leak is repaired"],
        ["Cooling efficiency", "Best of the three; less refrigerant for the same cooling", "Good", "Lower than the other two"],
        ["Ozone layer", "Does not harm it", "Does not harm it", "Harms it, so it is being phased out"],
        ["Global warming impact", "Clearly lower than R410A", "High", "High"],
        ["Market status today", "The standard for new units", "Still in existing units and some new models, but manufacturers are progressively switching to R32", "Harder to find and getting more expensive"],
        ["Chiang Mai market price per pound", "No reference price yet", "About 75 THB", `About ${p.repair.refrigerantPerLb} THB`],
        ["Pro Fresh Care price per pound", `${p.repair.refrigerantPerLb} THB`, `${p.repair.refrigerantPerLb} THB`, `${p.repair.refrigerantPerLb} THB`],
      ],
    },
    {
      type: "p",
      text: `The clearest difference is the price per pound. The market price for R410A is around 75 THB per pound, and R32 has no reference price yet. I charge the same ${p.repair.refrigerantPerLb} THB per pound for all three, without a separate rate for each type.`,
    },

    { type: "h2", text: "Can R410A be topped up, and why I choose to recover it and weigh in a fresh charge" },
    {
      type: "p",
      text: "R410A is not a single substance but a 50/50 blend of R32 and R125. Even so, this blend behaves almost like a single refrigerant, so when the system leaks, the ratio of what is left drifts only very slightly. That is why technical references say it can be topped up once the leak is repaired, as long as it is charged as a liquid.",
    },
    {
      type: "p",
      text: "On my own jobs, I choose to recover all the old refrigerant, repair the leak, pull a vacuum to remove moisture and air, then weigh in a fresh charge to the amount on the unit's sticker. The reason is that once a unit has leaked, there is no way to know for sure how much refrigerant is left in the system, or whether moisture or air got in. Weighing in a complete fresh charge makes sure the amount and the blend are exactly to specification.",
    },
    {
      type: "callout",
      tone: "danger",
      title: "An offer worth asking more about",
      text: "If your aircon uses R410A and you are offered a small top-up to get it cold again, with no mention of finding the leak, ask about the procedure before you decide. Topping up without fixing the leak usually brings the cooling back only for a while, followed by another bill a few months later.",
    },
    {
      type: "p",
      text: `What I want to stress is that recovering and recharging does not raise your cost, because I charge ${p.repair.refrigerantPerLb} THB per pound for R410A, the same as R32. Doing it properly does not make the total more expensive in the way many people worry it will.`,
    },

    { type: "h2", text: "R22 is being phased out. What about the old unit at home?" },
    {
      type: "p",
      text: "R22 damages the ozone layer, so it is being phased out of production and use worldwide. For owners this means two things: it is getting harder to find, and the price tends to rise as it gets scarcer.",
    },
    {
      type: "p",
      text: "If your unit is still on R22 and working well, I do not recommend rushing to replace it. Consider it this way instead.",
    },
    {
      type: "ul",
      items: [
        "Still cooling well, not leaking and cleaned regularly: keep using it.",
        "Leaking again and again so it needs topping up several times a year: time to compare whether a new unit makes more sense.",
        "The compressor fails in an old R22 unit: in almost every case, replacing the unit is better value than repairing it.",
        "Do not convert an R22 system to another refrigerant without changing the related components, because the compressor oil and operating pressure are different.",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      title: "Be careful with switching refrigerant types",
      text: "You may read that a newer refrigerant can go straight into an R22 system to save money. That is not accurate. R22 systems are designed for a different pressure and a different lubricating oil, and switching without changing the related components is likely to end with a damaged compressor, which costs many times more than what was saved.",
    },

    { type: "h2", text: "R32 is the new standard, but its price is still an information gap" },
    {
      type: "p",
      text: "Major manufacturers are progressively switching new inverter models in Thailand to R32 (CLASP data from 2019 found R32 in about 34% of models on sale, up from none in 2013). Manufacturers switched because it cools better for the same amount of refrigerant, so systems need less of it, and its global warming impact is clearly lower than R410A.",
    },
    {
      type: "p",
      text: "There is still no published reference price for R32. The prices I surveyed from Chiang Mai shops cover only R-22 and R-410A, so inverter owners have nothing to compare against before agreeing to a top-up.",
    },
    {
      type: "p",
      text: `My position is to charge ${p.repair.refrigerantPerLb} THB per pound for R32, the same rate the Chiang Mai market publishes for R22, and to tell you how many pounds before I add any.`,
    },

    { type: "h2", text: "Refrigerant does not get used up. If it is low, there is a leak" },
    {
      type: "p",
      text: "The most expensive misunderstanding is that refrigerant is a consumable that needs topping up every year, like changing the oil in a car. In fact an air conditioner is a sealed system. The refrigerant circulates in the same loop the whole time; it is not burned or used up.",
    },
    {
      type: "p",
      text: "So if it is low, it has leaked out somewhere. The places I find leaks most often are the flare joints at the pipe ends, copper pipe corroded by years of sun and rain, the service valves, and brazed joints on the coil. If you top up without finding the leak, the new refrigerant escapes the same way and the same problem comes back.",
    },
    {
      type: "table",
      caption: "Signs of low refrigerant compared with other causes that look similar",
      head: ["What you notice", "Low refrigerant?", "Could also be"],
      rows: [
        ["Airflow as strong as before but not cold", "Quite likely", "A failed capacitor stopping the compressor"],
        ["Airflow clearly weaker", "Unlikely", "A blocked indoor coil or filter; needs a clean"],
        ["Ice on the larger copper pipe", "Possible", "A coil too dirty for enough airflow"],
        ["Cold at night but not during the day", "Possible", "A dirty outdoor coil that cannot shed heat"],
        ["Topped up a few months ago and the problem is back", "Almost certainly a leak", "Nothing else; the leak has to be found"],
      ],
    },
    {
      type: "callout",
      tone: "info",
      title: "Refrigerant level checks are free",
      text: "I measure the refrigerant pressure at no charge and let you watch the gauges with me. If the reading is normal, I tell you so and do not add any, because overcharging pushes the pressure above specification, makes the compressor use more power and shortens its life, without making the unit any colder as many people assume.",
    },

    { type: "h2", text: "Five things to check before agreeing to a top-up" },
    {
      type: "ol",
      items: [
        "Which refrigerant does this unit use, and where did the technician check it? If they cannot answer, they have not looked at the data sticker.",
        "What is the pressure reading now, how far is it from normal for this model, and can you see the gauges?",
        "Where has the missing refrigerant leaked from? Has anyone looked for the leak, and how will they check?",
        "How many pounds will go in, at what price per pound, and what is the total?",
        "If it is R410A, will the old refrigerant be recovered and a fresh charge weighed in to the amount on the sticker?",
      ],
    },
    {
      type: "p",
      text: "These five questions take less than two minutes, but they turn the conversation from trust alone into numbers you can check. A provider who follows the proper procedure can answer every one of them.",
    },
    {
      type: "cta",
      text: "Not sure which refrigerant your aircon uses? Photograph the sticker on the outdoor unit and send it on LINE. I will check it at no charge and tell you honestly whether the symptoms need a top-up or just a clean.",
    },

    { type: "h2", text: "Summary" },
    {
      type: "ul",
      items: [
        "You can check the refrigerant type yourself on the sticker on the outdoor unit; keep a photo on your phone.",
        "R32 is the standard for new inverter units, more efficient and with less global warming impact than R410A.",
        "R410A is a blend that behaves almost like a single refrigerant. It can be topped up once the leak is repaired, but I choose to recover it and weigh in a fresh charge so the amount is exactly to specification.",
        "R22 is being phased out. A healthy unit can stay, but repeated leaks are a reason to consider replacing it.",
        `R32 has no reference price yet. I charge the same ${p.repair.refrigerantPerLb} THB per pound for all three.`,
        "Refrigerant does not get used up. If it is low there is a leak, and the leak should be found before every top-up.",
      ],
    },
    {
      type: "sources",
      items: [
        { title: "Refrigerant FAQ: R32, R410A and R22 (Thai)", publisher: "Siam Daikin Sales", url: "https://www.daikin.co.th/th/article/faq", note: "Used to confirm the refrigerant types in residential air conditioners." },
        { title: "Owner's manual for an R32 air conditioner (Thai)", publisher: "Siam Daikin Sales", url: "https://www.daikin.co.th/assets/uploads/product/61/product_manual/%E0%B8%84%E0%B8%B9%E0%B9%88%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%87%E0%B8%B2%E0%B8%99_FAVF30.pdf", note: "The manual says to use only the refrigerant specified on the unit and not substitute another." },
        { title: "Common Air Conditioner Problems and Maintenance", publisher: "U.S. Department of Energy", url: "https://www.energy.gov/sites/prod/files/HomeCooling101-final.pdf", note: "Explains that low refrigerant may come from a leak, and that the leak should be repaired before recharging." },
        { title: "Department of Industrial Works joins vocational and skills agencies to reduce and phase out HCFC-22 refrigerant (in Thai)", publisher: "MGR Online (9 Jan 2019)", url: "https://mgronline.com/greeninnovation/detail/9620000002721", note: "Since 2017 Thailand has banned factories making air conditioners under 50,000 BTU from using HCFC-22, moving to HFC-32" },
        { title: "Ozone Timeline", publisher: "UNEP Ozone Secretariat", url: "https://ozone.unep.org/ozone-timeline", note: "Timeline of the HCFC phase-out, including R22, under the Montreal Protocol" },
        { title: "R-32, The Most Balanced Refrigerant", publisher: "Daikin", url: "https://www.daikin.com/air/daikin_techknowledge/benefits/r-32", note: "R32 has a global warming potential (GWP) of 675, against 2,090 for R410A, and does not deplete the ozone layer" },
        { title: "HFC 冷媒のポイント", publisher: "Japan Refrigeration and Air Conditioning Industry Association (JRAIA)", url: "https://www.jraia.or.jp/product/home_aircon/c_hfc_point.html", note: "R410A runs at about 1.6 times the working pressure of R22" },
        { title: "Is It OK To Top Off With R410a?", publisher: "HVAC School (5 Aug 2021)", url: "https://www.hvacrschool.com/topping-off-with-r410a/", note: "R410A is a 50/50 blend of R32 and R125 with very little fractionation; it can be topped up after the leak is repaired, charged as a liquid" },
        { title: "Thailand Room Air Conditioner Market Assessment and Policy Options Analysis", publisher: "CLASP (Jun 2019)", url: "https://www.clasp.ngo/wp-content/uploads/2021/01/2019-Thailand-Room-Air-Conditioner-Market-Assessment-and-Policy-Options-Analysis.pdf", note: "Models on sale in Thailand in 2019: R410A 61.7%, R32 33.9%, R22 3.9%, compared with 2013 when 79% were still R22 and none used R32" },
      ],
    },
  ],
  faqs: [
    {
      q: "Can I check which refrigerant my aircon uses myself?",
      a: "Yes, without calling anyone. Go to the outdoor unit and find the data sticker on the side or back. There is a line marked Refrigerant followed by R32, R410A or R22 and the factory charge weight. Take a photo and keep it on your phone, so next time one picture gives the technician everything.",
    },
    {
      q: "How is R32 better than R410A?",
      a: "Two main ways. R32 cools better for the same amount of refrigerant, so systems use less of it, and its global warming impact is clearly lower than R410A. In practice R32 is also a single refrigerant, so once a leak is repaired it can be topped up. R410A is a blend; it can also be topped up once the leak is repaired, but I choose to recover it and weigh in a fresh charge.",
    },
    {
      q: "Why are there so many different prices for R32?",
      a: `Partly because there is still no published reference price for R32. The prices I surveyed from Chiang Mai shops cover only R-22 at 25 THB per pound and R-410A at 75 THB per pound, so inverter owners have nothing to compare against. I charge ${p.repair.refrigerantPerLb} THB per pound for R32, the same rate the market publishes for R22.`,
    },
    {
      q: "Why did I need another top-up only a few months after the last one?",
      a: "Because the system has a leak that has not been repaired. An aircon is a sealed system and the refrigerant is not used up like fuel. If it is low, it has escaped somewhere, most often at the flare joints, copper pipe corroded by sun and rain, or the service valves. Topping up without finding the leak means paying for refrigerant that will leak out again.",
    },
    {
      q: "My old aircon uses R22. Do I need to replace it soon?",
      a: "Not if it still cools well and does not leak. But R22 is being phased out because it damages the ozone layer, so it is getting harder to find and more expensive. The time to think about replacing is when it leaks repeatedly and needs topping up several times a year, or when the compressor fails. And do not convert it to another refrigerant without changing the related components, because the oil and operating pressure are different.",
    },
  ],
};
