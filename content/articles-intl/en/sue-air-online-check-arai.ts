import type { IntlArticle } from "@/lib/content-types";
import { p, btu } from "@/lib/site";

export const article: IntlArticle = {
  slug: "sue-air-online-check-arai",
  title: "Buying an Aircon Online in 9.9, 10.10, 11.11 Sales: 6 Checks First",
  h1: "Buying an aircon online in the 9.9, 10.10 or 11.11 sales? Make these 6 checks before you order, so the unit you get installs and works the way you need",
  description:
    `Before ordering an aircon on Shopee, Lazada or TikTok in a sale, check BTU size, refrigerant, box contents and warranty, and book installation at ${p.install.small} THB.`,
  category: "Aircon guides",
  updated: "2026-09-29",
  readMins: 7,
  image: {
    src: "/work/tid-tang-air-003.jpg",
    alt: "A technician installing the indoor unit of a wall-mounted aircon in a customer's home",
  },
  excerpt:
    "A sale-price aircon can be good value, but the value only comes when the unit is the right size for the room and is installed with every step done. I have put together 6 things to check before you order, based on the questions customers buying aircons online ask me most often.",
  keywords: [
    "buy aircon online",
    "buying aircon on Shopee",
    "Lazada aircon installation",
    "aircon 11.11 sale",
    "aircon installation Chiang Mai own unit",
  ],
  relatedService: "tid-tang-air",
  blocks: [
    {
      type: "p",
      text: "In the 9.9, 10.10 and 11.11 sales, many aircon models are priced below what you would pay in a shop, and I already install units you have bought yourself from any channel. What I want you to watch out for is not buying online, but ordering too quickly and ending up with a unit that does not suit the room, or one that was damaged in transit and is hard to claim for. The six checks below take less than ten minutes before you order.",
    },
    { type: "h2", text: "1. Check the BTU size suits the actual room, not just the lowest price" },
    {
      type: "p",
      text: "The most heavily discounted models in a sale are often 9,000 BTU units, which EGAT says suit a normal room of about 12–15 square metres, or 11–14 square metres if the room gets direct sun. Put one in a bigger room and it works hard all the time, costs more to run than it should and has a shorter life. A simple way to work it out is to multiply the room area in square metres by 700 for an ordinary room, or 800 if the room gets direct sun (750 works as a middle value), then choose the nearest unit size above the result. If you are still unsure, send the link to the model you are interested in, with the room size and which way the room faces the sun, on LINE. I will look it over before you order, free of charge.",
    },
    { type: "h2", text: "2. Choose R32 refrigerant, today's standard" },
    {
      type: "p",
      text: `Major manufacturers are progressively switching the new aircon models they sell in Thailand to R32 refrigerant, which is the type I recommend, because refrigerant for top-ups and spare parts will be easy to find in the long term. If you come across an unusually cheap model that still uses R22, check the year of manufacture carefully, because it may have sat in stock for several years. For my work, R32 is charged at ${p.repair.refrigerantPerLb} THB per pound, the same as R22; I do not charge more depending on the type of refrigerant.`,
    },
    { type: "h2", text: "3. Read what is in the box before ordering, especially the pipes and brackets" },
    {
      type: "p",
      text: `Some units sold online come with short refrigerant pipes, and some do not include a bracket for the outdoor unit or a pipe cover. You do not need to worry about this if I install it, because installation at ${p.install.small} THB per point for ${btu.installSmall} BTU and ${p.install.large} THB per point for ${btu.installLarge} BTU already includes the bracket, piping up to 4 metres and the pipe cover. If the site needs a longer pipe run than that, I measure it and tell you the extra cost before I start.`,
    },
    { type: "h2", text: "4. Check the unit's warranty terms, and register as soon as it arrives" },
    {
      type: "p",
      text: "The warranty on an aircon bought online is provided by the manufacturer or the seller, under the terms of the channel you bought it through. Before ordering, read how many years the compressor is covered for, how many years the parts are covered for, and within how many days of delivery you must register. Many brands have you register through the brand's app or LINE account. Keep the receipt and the box until the unit has been installed and has passed its test run.",
    },
    { type: "h2", text: "5. Inspect the box as soon as it arrives, before signing for it if you can" },
    {
      type: "p",
      text: "Damage in transit is the main risk of buying an aircon online. As soon as the delivery arrives, check the box on every side and take photos or a video. If you find dents, punctures or crushed corners, record the evidence and report a claim to the seller straight away, because once the unit has been installed it is hard to prove at which stage the damage happened. Leave carrying the unit to where it will be installed to the technician on the day of the appointment.",
    },
    { type: "h2", text: "6. Book installation when you order, without waiting for delivery" },
    {
      type: "p",
      text: "Units from a sale round tend to be delivered at around the same time. If you wait for the unit to arrive before looking for a technician, you may have to store it for several days. A better way is to tell me the model and the expected delivery date when you order. I will book a slot to match when it arrives, and if you are installing several points in the same home, tell me how many at the same time and I will arrange to finish them all in one visit.",
    },
    {
      type: "table",
      caption: "Who is responsible for what when you buy an aircon online and hire a technician to install it",
      head: ["Where the problem is", "Who is responsible"],
      rows: [
        ["The unit itself, such as the compressor or circuit board", "The manufacturer or seller, under the unit's warranty"],
        ["Damage in transit", "The seller and courier; must be claimed before installation"],
        ["The installation work, such as levelling and pipe joints", "Me, with a 6-month warranty on the installation work"],
      ],
    },
    {
      type: "cta",
      text: `Whether you have already bought the unit or are about to order, send me the model, your area and the expected delivery date. Installation for ${btu.installSmall} BTU is ${p.install.small} THB per point, including the bracket, piping up to 4 metres and the pipe cover.`,
    },
    {
      type: "sources",
      items: [
        { title: "How to choose an air conditioner that saves electricity and money (in Thai)", publisher: "Electricity Generating Authority of Thailand (16 Aug 2022)", url: "https://www.egat.co.th/home/save-energy-for-all-20220716/", note: "9,000 BTU suits a normal room of 12–15 sq m or a sunny room of 11–14 sq m; 12,000 BTU suits 16–20 sq m" },
        { title: "How to work out room area in square metres to match aircon BTU (in Thai)", publisher: "Carrier Thailand (2 Mar 2023)", url: "https://carrierthailand.com/carrier-article/how-to-calculate-btu/", note: "Bedrooms: multiply by 700 (800 if the room gets sun); offices or living rooms: multiply by 800 (900 if the room gets sun)" },
        { title: "Thailand Room Air Conditioner Market Assessment and Policy Options Analysis", publisher: "CLASP (Jun 2019)", url: "https://www.clasp.ngo/wp-content/uploads/2021/01/2019-Thailand-Room-Air-Conditioner-Market-Assessment-and-Policy-Options-Analysis.pdf", note: "Models on sale in Thailand in 2019: R410A 61.7%, R32 33.9%, R22 3.9%, compared with 2013 when 79% were still R22 and none used R32" },
      ],
    },
  ],
  faqs: [
    {
      q: "Can I buy an aircon from Shopee, Lazada or TikTok Shop and just hire you to install it?",
      a: `Yes. I install units bought yourself from any channel. Installation is charged by unit size: ${p.install.small} THB per point for ${btu.installSmall} BTU and ${p.install.large} THB per point for ${btu.installLarge} BTU, the same rates as when you buy the unit from me, with a 6-month warranty on the installation work.`,
    },
    {
      q: "When should I book the installation?",
      a: "You can get in touch from the day you order. Tell me roughly when the unit will arrive and I will book a slot to match, so you do not have to keep the unit at home for long and you get the installation day you want.",
    },
    {
      q: "Some of the accessories in the box are missing. Can it still be installed?",
      a: "Yes. My installation price already includes the bracket, piping up to 4 metres and the pipe cover, so it does not depend on whether the seller included everything. If the pipe run is longer than 4 metres, I measure it and tell you the extra cost before I start.",
    },
    {
      q: "If a unit bought online has a problem after installation, who is responsible?",
      a: "It splits into two parts. Problems from the installation work, such as dripping caused by levelling or pipe joints, are my responsibility under the 6-month installation warranty. Problems with the unit itself are covered by the manufacturer's warranty. I can help check which part the fault comes from, with measurements to support your claim.",
    },
  ],
};
