import type { IntlArticle } from "@/lib/content-types";
import { p } from "@/lib/site";

export const article: IntlArticle = {
  slug: "yai-air-tong-ru-arai",
  title: "Moving an Aircon in Chiang Mai: What to Prepare, What Breaks",
  h1: "Moving an aircon: the steps that cannot be skipped, and what makes an aircon fail after a move",
  description:
    "Moving an aircon is more than removal and refitting. The most skipped steps are refrigerant pump-down and vacuuming: what goes wrong, and real Chiang Mai costs.",
  category: "Aircon guides",
  updated: "2026-09-29",
  readMins: 8,
  image: { src: "/work/yai-air-008.jpg", alt: "A technician's hand holding a gauge set connected to a refrigerant cylinder, with an outdoor unit fan behind" },
  excerpt:
    "An aircon move done without all the steps usually shows no symptoms straight away, but turns into poor cooling or a failed compressor a few months later. I explain which steps cannot be skipped and why.",
  keywords: [
    "aircon relocation Chiang Mai", "aircon relocation cost", "aircon removal cost",
    "does a moved aircon need a refrigerant top-up", "moving house with an aircon",
  ],
  relatedService: "yai-air",
  blocks: [
    {
      type: "p",
      text: "Moving an aircon looks simple from the outside: take the unit off the old wall and fit it on the new one. But technically, the job has several steps that are invisible and cannot be checked from the outside, and they are hard for a customer to check by eye on the day.",
    },
    {
      type: "p",
      text: "The problem is that the damage does not show straight away. The unit cools normally for the first week, then starts cooling less a few months later, or at worst the compressor fails, which in jobs I have come across can happen within a year. So I want to explain which steps cannot be skipped, and why.",
    },

    { type: "h2", text: "The first step that must be done properly: pumping the refrigerant back into the unit" },
    {
      type: "p",
      text: "Before disconnecting the pipes from the outdoor unit, the unit has to be run and the valves closed in sequence, so that all the refrigerant in the system is drawn back and stored in the outdoor unit first. This step takes only a few minutes, but if it is skipped and the pipes are simply disconnected, all the refrigerant in the system is released into the air.",
    },
    {
      type: "callout",
      tone: "warn",
      title: "What happens if this step is skipped",
      text: "You will have to pay to refill the entire system at the new location, a cost that never needs to arise if all the steps are done. So before agreeing a price, it is worth asking two things clearly: does the quoted moving price include pumping the refrigerant back into the unit, and if a top-up is needed at the new location, how much per pound will it cost?",
    },
    {
      type: "p",
      text: "In my jobs, pumping the refrigerant back into the unit is included in the moving price.",
    },

    { type: "h2", text: "Vacuuming at the new location: a step you cannot check by eye" },
    {
      type: "p",
      text: "Once the pipes are connected at the new location, there is air and moisture left inside them. A vacuum pump has to draw it all out before the valves are opened to let the refrigerant into the system. If this step is skipped, the leftover moisture combines with the lubricating oil in the compressor and corrodes the system from the inside.",
    },
    {
      type: "p",
      text: "The effect of skipping the vacuum does not show on the day; the unit cools perfectly normally. But the damage builds up quietly until the compressor starts working abnormally hard. That is why I stress this step in both new installations and moves.",
    },

    { type: "h2", text: "Other points to check when moving an aircon" },
    {
      type: "steps",
      items: [
        {
          title: "Check the condition of the old refrigerant pipes before reusing them",
          detail: "Pipes that have been bent several times or have kinks should not be reused, because the kinked spot restricts the refrigerant flow and becomes a leak point in future. I will tell you first if I find that new pipes are needed.",
        },
        {
          title: "Check the pipe length against the new location",
          detail: "If the new spot is further away than before, the pipes have to be extended, which costs extra. I measure the distance and tell you the extra cost before work starts.",
        },
        {
          title: "Choose a new location where the water can drain",
          detail: "The drain pipe of a home aircon flows by gravity, so the new location must let the pipe slope downwards all the way. If the unit is forced into a spot where the pipe has to climb, dripping problems will certainly follow.",
        },
        {
          title: "Fix the bracket to a structure that can really take the weight",
          detail: "With lightweight or gypsum walls, you need to find the steel frame inside to fix to, not just drive anchors into bare gypsum board, because vibration will work them loose later.",
        },
        {
          title: "Seal the old wall hole properly",
          detail: "The pipe hole at the old location has to be sealed, otherwise it becomes a way in for rainwater and insects. This step is already included in my removal work.",
        },
      ],
    },

    { type: "h2", text: "What moving an aircon costs in Chiang Mai" },
    {
      type: "table",
      caption: "Aircon removal and relocation rates",
      head: ["Item", "Charge", "Notes"],
      rows: [
        ["Aircon relocation: removal from the old spot and installation at the new one", `${p.install.relocate} THB`, "Includes pumping the refrigerant back into the unit and vacuuming at the new location"],
        ["Aircon removal only, no reinstallation", `${p.install.removeOnly} THB`, "Includes sealing the old wall hole"],
        ["Extra pipework beyond the standard length", "Quoted before work starts", "Always measured on site first"],
        ["R32 / R410A refrigerant top-up", `${p.repair.refrigerantPerLb} THB per pound`, "Only when the system is actually low"],
      ],
    },
    {
      type: "p",
      text: "If the move is done with all the steps, there is normally no need for a refrigerant top-up, because the original refrigerant has been stored back in the unit. A top-up is only needed if the system already had a leak, which I will check and tell you about first.",
    },

    { type: "h2", text: "What to prepare before moving day" },
    {
      type: "ul",
      items: [
        "Decide clearly on the new location, and clear the space both inside and outside the building.",
        "Check whether there is a power point or breaker to supply the new spot. If not, extra wiring will be needed.",
        "For condos or housing estates, check with the building or estate management whether you need permission to install the outdoor unit.",
        "Let me know the BTU size and the age of the unit in advance, so I can assess whether it is worth moving.",
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "A very old unit: move it or buy new?",
      text: `If the unit is over 10 years old and has been repaired several times, the moving charge of ${p.install.relocate} THB may not be worth it compared with installing a new unit, from ${p.install.small} THB with a warranty. I will assess it honestly and let you know.`,
    },
    {
      type: "cta",
      text: "If you are about to move house or change where your aircon goes, send the BTU size, the number of units, and photos of the old and new locations to our aircon LINE account @iu3333, so the pipe length and materials can be assessed before booking.",
    },
    {
      type: "sources",
      items: [
        { title: "Refrigerant Oil Basics", publisher: "HVAC School (27 Jul 2022)", url: "https://www.hvacrschool.com/refrigerant-oil-basics/", note: "The mineral oil in R22 systems does not mix with HFC refrigerants, and POE oil breaks down into acid when moisture is present" },
      ],
    },
  ],
  faqs: [
    {
      q: "Does a moved aircon always need a refrigerant top-up?",
      a: "No. If the technician pumps the refrigerant back into the outdoor unit before disconnecting the pipes, as the procedure requires, the original refrigerant is all still there. A top-up is only needed if the system already had a leak. If a provider says every move needs a fresh refill, it is worth asking them to explain why first.",
    },
    {
      q: "How much does it cost to move an aircon?",
      a: `Moving an aircon, removing it from the old spot and installing it at the new one, is ${p.install.relocate} THB. Removal only, without reinstallation, is ${p.install.removeOnly} THB, which includes sealing the old wall hole. If the new spot needs pipes longer than the standard length, I measure and tell you the extra cost before work starts.`,
    },
    {
      q: "Can the old pipes be reused?",
      a: "It depends on their condition. Pipes with no kinks that have not been bent back and forth many times can be reused, but pipes with kinks should not be, because that spot restricts the refrigerant flow and becomes a leak point in future. I check them, show you, and tell you before you decide.",
    },
    {
      q: "How long does it take per unit?",
      a: "Moving one unit takes about half a day, because the refrigerant has to be pumped down, the unit removed, taken to the new spot, installed, vacuumed and then tested. If there are several units or the new location is in a different building, let me know in advance so I can schedule it properly.",
    },
    {
      q: "Do I need permission to move an aircon in a condo?",
      a: "Most condos have rules about where outdoor units can be installed and the hours when noisy work is allowed. I recommend checking with the building management before booking a day, so the work does not have to stop halfway.",
    },
  ],
};
