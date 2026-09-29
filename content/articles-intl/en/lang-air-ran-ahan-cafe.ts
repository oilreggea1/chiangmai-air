import type { IntlArticle } from "@/lib/content-types";
import { p, btu } from "@/lib/site";

export const article: IntlArticle = {
  slug: "lang-air-ran-ahan-cafe",
  title: "Restaurant and Café Aircon Cleaning in Chiang Mai: How Often?",
  h1: "Aircon cleaning for restaurants and cafés: why it needs doing far more often than at home",
  description:
    "Restaurant and café aircons take in grease, milk vapour and dust all day. Here are suitable cleaning intervals, ceiling and cassette prices, and scheduling.",
  category: "Aircon guides",
  updated: "2026-07-30",
  readMins: 8,
  image: {
    src: "/work/lang-air-fang-fa-003.jpg",
    alt: "A technician standing on a chair removing the front panel of a ceiling cassette aircon in a high-ceilinged room, with a tarpaulin spread underneath",
  },
  excerpt:
    "A shop's aircon runs 10 hours or more a day and takes in grease from the kitchen, so the cleaning interval used at home does not work for a business. I explain suitable intervals and how to schedule the work without losing a day of sales.",
  keywords: [
    "restaurant aircon cleaning Chiang Mai",
    "cafe air conditioner cleaning",
    "ceiling suspended aircon cleaning",
    "cassette aircon cleaning",
    "how often to clean restaurant air conditioner",
  ],
  relatedService: "lang-air-khwaen-cassette",
  blocks: [
    {
      type: "p",
      text: "Many shop owners use the same aircon cleaning interval as at home, once or twice a year, and then wonder why the aircon in the shop loses its cooling so much faster. The answer lies in how much air the unit has to draw through each day, and what is mixed into that air.",
    },
    {
      type: "p",
      text: "A home aircon runs a few hours a day and draws in fairly clean air. An aircon in a shop runs non-stop from opening to closing and takes in dust from people constantly coming and going. In restaurants and cafés there is also grease vapour from cooking and milk vapour from the coffee machine floating in the air.",
    },

    { type: "h2", text: "Grease is what makes the biggest difference compared with a home aircon" },
    {
      type: "p",
      text: "Dry dust on the coil fins can still be partly blown off by the airflow. But once grease or milk vapour is mixed in, the dust is stuck to the coil surface as a sticky layer that does not come off by itself, and it keeps getting thicker as it builds up.",
    },
    {
      type: "ul",
      items: [
        "The sticky layer lets less air through the coil, so the unit cools less while using just as much electricity.",
        "Greasy residue is excellent food for mould, which causes a musty smell that customers notice the moment they walk in.",
        "A sticky surface holds dust better than a clean one, so each round gets dirty faster than the one before.",
        "In kitchens where there is frying or stir-frying, residue builds up many times faster than in the dining area.",
      ],
    },
    {
      type: "callout",
      tone: "info",
      title: "Smell in a shop is a hidden cost",
      text: "Customers who walk in and notice a musty smell usually do not tell the owner; they simply do not come back. Unlike a home aircon, where the owner gets used to the smell, a smell in a shop is something to deal with before it affects sales.",
    },

    { type: "h2", text: "The cleaning intervals I recommend for each type of business" },
    {
      type: "table",
      caption: "Suitable cleaning intervals by type of use",
      head: ["Type of premises", "Recommended interval", "Reason"],
      rows: [
        ["Restaurant with an open kitchen, frying or stir-frying", "Every 3 months", "Grease coats the coil faster than in any other type"],
        ["Café with a coffee machine and bakery", "Every 3–4 months", "Milk vapour and coffee powder float in the air all day"],
        ["Restaurant with a clearly separate kitchen", "Every 4 months", "The dining area only takes in dust from people coming and going, not grease directly"],
        ["Offices and co-working spaces", "Every 6 months", "No grease, but the units run for many hours a day"],
        ["Meeting rooms used occasionally", "Once a year", "Far fewer hours of use per year"],
      ],
    },
    {
      type: "p",
      text: "During Chiang Mai's smoke-haze season, from February to April, you should move one step more frequent than this table, because the amount of soot in the air is significantly higher than at other times of the year.",
    },

    { type: "h2", text: "Most shop aircons are ceiling suspended or cassette units, which are harder to clean" },
    {
      type: "p",
      text: "Most shops and offices use ceiling suspended units or four-way cassette units set into the ceiling. These are much larger than wall-mounted units and sit much higher up. Cleaning them means setting up a ladder or scaffolding, and covering the tables, chairs and equipment underneath before starting, because the cleaning water runs straight down.",
    },
    {
      type: "table",
      caption: "Aircon cleaning prices for shops and offices",
      head: ["Unit type", "Price"],
      rows: [
        ["Ceiling suspended unit", `From ${p.wash.suspended} THB`],
        ["Four-way ceiling cassette", `From ${p.wash.cassette} THB`],
        ["Wall-mounted, 9,000–18,000 BTU", `${p.wash.std} THB, or ${p.wash.stdBulk} THB each for 3 units or more`],
        [`Wall-mounted, ${btu.washBig} BTU`, `${p.wash.big} THB, or ${p.wash.bigBulk} THB each for 2 units or more`],
      ],
    },
    {
      type: "p",
      text: "Prices for ceiling suspended and cassette units are starting prices. The actual price depends on the size of the unit and the height of the ceiling. I assess on site and tell you the price before starting, every time.",
    },

    { type: "h2", text: "How to schedule the work without losing a day of sales" },
    {
      type: "steps",
      items: [
        {
          title: "Tell me the number and type of units in advance",
          detail: "I estimate the total time needed first, so you know how many hours to set aside.",
        },
        {
          title: "Choose the morning before opening or after closing",
          detail:
            "I take bookings outside working hours, such as evenings or Sundays, for an additional service charge, which I tell you before we book. Many shops choose this so they do not have to close for half a day.",
        },
        {
          title: "Clean one zone at a time if there are several units",
          detail:
            "A shop with many units does not need to have them all cleaned in one day. Splitting the work into two rounds lets the shop stay open as usual.",
        },
        {
          title: "Book ahead of the smoke-haze season",
          detail:
            "From January to early February there are still free slots. If you wait until April, the hottest time of year, demand is high across the whole province and the wait gets much longer.",
        },
      ],
    },

    { type: "h2", text: "Paperwork for shops and companies" },
    {
      type: "p",
      text: "I can issue a full tax invoice in the name of Cher Solutions Co., Ltd. Please send your business name and taxpayer ID number before the appointment.",
    },
    {
      type: "cta",
      text: "If you would like an assessment of cleaning intervals and costs for the whole shop, send the number of units, the unit types and the times that suit your shop to our aircon LINE @iu3333.",
    },
  ],
  faqs: [
    {
      q: "How often should a restaurant have its aircon cleaned?",
      a: "For restaurants with an open kitchen where there is frying or stir-frying, I recommend every 3 months, because grease makes dust stick to the coil as a sticky layer that does not come off by itself. Restaurants with a clearly separate kitchen may be able to stretch this to every 4–6 months.",
    },
    {
      q: "Can you do the cleaning outside opening hours?",
      a: "Yes. Let me know in advance whether you would like the morning before opening or after closing. My working hours are Monday to Saturday, 08:00–18:00. Work outside working hours carries an additional service charge, and I tell you the amount before we book.",
    },
    {
      q: "There are several aircons in the shop. How is the price worked out?",
      a: "Send me the number and type of units. Wall-mounted units have a special rate when 3 or more are cleaned, while ceiling suspended and cassette units are assessed on site by size and height. I put it together as one package, with the time needed, before you decide.",
    },
    {
      q: "Do you provide documents for expense claims?",
      a: "Yes. Cher Solutions Co., Ltd. is VAT-registered and can issue a full tax invoice to your shop, which you can use to claim input tax in the usual way. Send your shop's name and taxpayer ID number before the appointment and I will have the documents ready when the work is handed over.",
    },
    {
      q: "Will the smell in the shop go away after cleaning?",
      a: "If the smell comes from residue on the coil and the blower wheel, it will go after cleaning. But if it comes from a drain pipe with built-up sediment or from another source in the shop, I will check and explain where the cause is, so you do not spend money on something that is not the cause.",
    },
  ],
};
