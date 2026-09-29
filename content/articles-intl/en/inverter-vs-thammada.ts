import type { IntlArticle } from "@/lib/content-types";
import { p } from "@/lib/site";

export const article: IntlArticle = {
  slug: "inverter-vs-thammada",
  title: "Inverter vs Non-Inverter Aircon: Differences and Is It Worth It?",
  h1: "Inverter vs non-inverter aircon: how they differ, and which one is better value for your home",
  description:
    "Inverter vs non-inverter aircon: how each works, electricity use, circuit board repair costs, which usage suits each type, and what R32 refrigerant means.",
  category: "Aircon guides",
  updated: "2026-09-29",
  readMins: 9,
  image: { src: "/work/tid-tang-air-003.jpg", alt: "A newly installed wall-mounted aircon on a smooth wall, with white piping running out to the left" },
  excerpt:
    "An inverter really does use less electricity, but that does not make it better value for every home. The answer depends on how long you run the aircon at a stretch, and how much risk of a circuit board repair bill you are willing to take on.",
  keywords: [
    "inverter vs non-inverter aircon", "is an inverter aircon worth it", "energy-saving aircon",
    "inverter aircon circuit board repair cost", "aircon advice Chiang Mai",
  ],
  relatedService: "tid-tang-air",
  blocks: [
    {
      type: "p",
      text: "Choosing between an inverter and a non-inverter aircon is a hard decision, because the information you get in the shop usually stops at \"it uses less electricity\". That is true, but it is not the whole picture. The question to ask is not whether an inverter uses less electricity, but whether it saves enough in your home to justify the higher price of the unit and the risk of higher repair costs.",
    },
    {
      type: "p",
      text: "I will first explain how the two types work differently. Then I will cover the point that rarely comes up when you are choosing: the repair cost when an electronic part fails. Finally, I will go through how to choose based on how you actually use the room. By the end, you will have the criteria to decide for yourself.",
    },

    { type: "h2", text: "How a non-inverter aircon works" },
    {
      type: "p",
      text: "A non-inverter aircon, also called fixed speed, has a compressor with only two states: full power or completely off, with nothing in between. If you set it to 26 degrees, the unit runs at full power until the room reaches 26 degrees and then cuts out. When the temperature creeps above the setting, it starts up again at full power, and it keeps cycling like this the whole time it is in use.",
    },
    {
      type: "p",
      text: "This has two consequences. First, the room temperature swings up and down around the setting rather than holding steady, and some people notice at night that cool spells alternate with warm ones. Second, every time the compressor starts, it briefly draws several times more current than when it is running normally. That moment is where the most electricity is used and where the parts wear the most.",
    },

    { type: "h2", text: "How an inverter aircon works" },
    {
      type: "p",
      text: "An inverter is a circuit that can control the speed of the compressor motor. Instead of only full power and off, the unit raises and lowers its output to match the actual heat load in the room. When it has just been switched on and the room is still hot, it runs flat out to bring the temperature down quickly. As it nears the setting, it slows down and runs gently to hold the temperature, rather than cutting out and starting again.",
    },
    {
      type: "p",
      text: "Not having to restart over and over is the key to the energy saving, because it removes almost all of the current spikes at start-up. Running continuously at low speed also keeps the room temperature steadier, removes moisture more evenly, and is quieter while the unit is running gently.",
    },
    {
      type: "callout",
      tone: "info",
      title: "It really does save electricity, but the percentage depends on each home",
      text: "Technically, an inverter does use less electricity than a fixed-speed unit. But I cannot tell you what percentage it will save in your home, because that depends on how many hours a day you run it, the size of the aircon relative to the room, how well the room is insulated, and how clean the coil is. If you are offered a fixed percentage as a guarantee, I recommend asking for more detail before you decide.",
    },

    { type: "h2", text: "Inverter vs non-inverter: comparison table" },
    {
      type: "table",
      caption: "Inverter and non-inverter aircon compared",
      head: ["Topic", "Non-inverter (fixed speed)", "Inverter"],
      rows: [
        ["How the compressor runs", "Full power or completely off, nothing in between", "Speeds up and slows down to match the heat load in the room"],
        ["Electricity when run for long periods", "Higher, because of the current spike at every start-up", "Clearly lower; the longer it runs, the more it shows"],
        ["Electricity when run for short periods", "Not much different from an inverter", "Less of an advantage, because it never spends long at low speed"],
        ["Temperature stability", "Swings up and down around the setting", "Steadier, because it does not keep cutting out and restarting"],
        ["Moisture removal", "Good while running, but stops when it cuts out", "More even, because it runs continuously"],
        ["Noise", "Noisy in bursts as it cuts in and out", "Quieter while running at low speed"],
        ["Unit price", "Cheaper", "More expensive for the same model and BTU"],
        ["Complexity of parts", "Simple design that most technicians can repair", "Has a control board and needs model-specific parts"],
        ["Repair cost when a main part fails", "Generally cheaper", "The circuit board costs much more than ordinary parts"],
      ],
    },

    { type: "h2", text: "The repair cost trade-off to know before you decide" },
    {
      type: "p",
      text: "A non-inverter aircon has few electronic parts. The parts that usually fail are the capacitor, the magnetic contactor or the fan motor, which are widely available, inexpensive, and repairable by most aircon technicians. An inverter has a control board that acts as the brain of the unit. If that board fails, the part costs much more than ordinary parts and usually has to be ordered for the specific model rather than being something commonly kept in stock.",
    },
    {
      type: "p",
      text: "So what I would like you to ask about before buying is not just the price of the unit, but also how readily parts are available locally. Brands with a service centre in Chiang Mai city, or with a dealer that keeps parts in stock, have the advantage in waiting time. If a part has to be ordered from Bangkok or from the manufacturer, the wait can run from several days to several weeks, which is a serious disruption if it happens in April. In the jobs I take, some customers really have had to wait for parts during that period.",
    },
    {
      type: "callout",
      tone: "tip",
      title: "Questions I recommend asking the shop before you buy",
      text: "Ask clearly: if the circuit board on this model fails after the warranty ends, where does the part have to be ordered from, how many days does it take, and is there a service centre in Chiang Mai? The answers tell you more than the brochure. The local availability of parts is more worth asking about than which brand is better.",
    },
    {
      type: "p",
      text: "A related issue is voltage drops and power surges. In houses or dormitories where the power supply is unstable, electronic components take more strain than simple mechanical systems. If your area often has voltage drops, I recommend telling the technician at the installation stage so that suitable protection can be put in place.",
    },

    { type: "h2", text: "R32 refrigerant and what it means for buying" },
    {
      type: "p",
      text: "Most new aircon models on sale today use R32 refrigerant, which replaced R410A, the previous standard, and the even older R22. The key point is that the different refrigerants cannot be swapped for one another, because the system pressures and the compressor lubricating oil are different.",
    },
    {
      type: "ul",
      items: [
        "R32 is the standard for new units on the market today; many inverter and non-inverter models already use it.",
        "R410A is still found in units installed earlier, and it is still readily available for top-ups.",
        "R22 is an older refrigerant being phased out worldwide. Units still running on R22 will find parts and refrigerant harder to get over time.",
        "Topping up with the wrong refrigerant, or adding on top without clearing the system, lowers performance and risks damaging the compressor.",
      ],
    },
    {
      type: "p",
      text: `I charge ${p.repair.refrigerantPerLb} THB per pound for an R32 or R410A top-up. But I want to make one thing clear first: an aircon is not a car that needs refuelling at intervals. The refrigerant system is sealed. If the refrigerant is low, there is a leak, and topping up without finding it means you will pay again every few months. So my standard practice is to find and fix the leak first; only then is the job truly done.`,
    },

    { type: "h2", text: "Long or short running time: what decides whether an inverter pays off" },
    {
      type: "p",
      text: "This is the heart of the choice. An inverter has the edge when it gets to run at low speed continuously for long periods. If you switch the aircon on for only half an hour and then off, it barely gets the chance, because it has to run at full power at the start just like a non-inverter, and it is switched off before its advantage kicks in. The extra money you paid is never put to use.",
    },
    {
      type: "table",
      caption: "Usage patterns and the type of aircon I recommend",
      head: ["Usage pattern", "Recommended", "Reason"],
      rows: [
        ["Bedroom, on all night for 8–10 hours every day", "Inverter", "Long spells at low speed, clear electricity savings, and a steadier temperature for more comfortable sleep"],
        ["Home office, on continuously during the day", "Inverter", "High running hours, so the electricity savings pay back the difference faster"],
        ["Living room used only when guests visit, 1–2 hours at a time", "Non-inverter", "Low running hours; the electricity savings are not enough to justify the higher unit price"],
        ["Rental room or dormitory the owner does not live in", "Non-inverter", "Cheaper repairs, any technician can look after it, no waiting for model-specific parts"],
        ["Shrine room or storeroom used only now and then", "Non-inverter", "Used very little; the extra investment is not worth it"],
        ["Condo you live in, aircon on almost every day", "Inverter", "High accumulated hours, and quieter running matters in a small room"],
      ],
    },
    {
      type: "p",
      text: "Homes in Chiang Mai have one more factor I would like you to consider: from November to January the weather is cool enough that many homes barely use their aircon. The yearly running hours of a home here may therefore be noticeably lower than in central Thailand. Working out the break-even point from hot-season electricity bills alone usually gives a figure that is higher than reality. I recommend thinking in terms of running hours over the whole year instead; it gives a more accurate picture.",
    },

    { type: "h2", text: "What really saves electricity, whichever type you use" },
    {
      type: "p",
      text: "A point that is often overlooked is that a poorly maintained inverter can use more electricity than a well-maintained non-inverter, because a clogged coil forces the unit to run at high speed all the time to make up for the reduced airflow. The advantage you paid extra for is lost.",
    },
    {
      type: "ul",
      items: [
        "Have the aircon cleaned regularly. The standard interval is every 6 months, because a clean coil shortens each compressor cycle, and in Chiang Mai, with its smoky haze season, it should be more often than that.",
        "Set the temperature to 26–27 degrees as the Provincial Electricity Authority (PEA) recommends, and use a fan to help circulate the air. It will feel just as cool without setting the temperature any lower.",
        "Choose a BTU size that fits the room, because a unit that is too big or too small both use more electricity than they should.",
        "Seal air leaks, and fit curtains or heat-rejection film on the side that gets the afternoon sun, to reduce the heat load at the source.",
        "Wash the filters yourself every 2 weeks as manufacturers recommend, and no longer than 4 weeks during the haze season. Homeowners can do this themselves without calling a technician.",
      ],
    },

    { type: "h2", text: "Summary" },
    {
      type: "ul",
      items: [
        "A non-inverter aircon runs at full power or switches off completely, while an inverter adjusts its speed to the actual heat load.",
        "An inverter uses less electricity, but the advantage is only clear when it runs continuously for long periods.",
        "The trade-off with an inverter is a higher unit price and a circuit board that costs more to repair than ordinary parts.",
        "Before buying, ask clearly about parts and service centres in Chiang Mai, because the wait for parts really matters in the hot season.",
        "Most new units use R32 refrigerant, which cannot be swapped with R410A or R22.",
        "Whichever you choose, a clean coil and the right BTU for the room affect your electricity bill more than many people expect.",
      ],
    },
    {
      type: "cta",
      text: "If you are still unsure whether your room should have an inverter or a non-inverter unit, tell me how many hours a day you run the aircon and how you use the room. I will help you assess it based on your actual use, and if a non-inverter is the better value for a room, I will tell you so. Unit prices depend on the model and on promotions at the time, so feel free to ask.",
    },
    {
      type: "sources",
      items: [
        { title: "Home Cooling 101: how air conditioners work and how to maintain them", publisher: "U.S. Department of Energy", url: "https://www.energy.gov/sites/prod/files/HomeCooling101-final.pdf", note: "Supports the principles of heat transfer, the effect of dirty filters, and coil maintenance" },
        { title: "Purchasing Energy-Efficient Residential Central Air Conditioners", publisher: "U.S. Department of Energy", url: "https://www.energy.gov/cmei/femp/purchasing-energy-efficient-residential-central-air-conditioners", note: "Supports the importance of SEER, correct sizing, and the harm done by incorrect installation or refrigerant charging" },
        { title: "Daikin Inverter R32 and SEER ratings", publisher: "Siam Daikin Sales", url: "https://www.daikin.co.th/product/MiddleStaticDuctInverterFBA-CV2S", note: "An example of manufacturer information on R32 inverter systems and SEER efficiency" },
        { title: "Aircon at 26° plus a fan: does it really save power?", publisher: "Provincial Electricity Authority (PEA), 16 Apr 2026 (in Thai)", url: "https://www.pea.co.th/news/infographic/1836", note: "Recommends setting 26–27°C together with a fan" },
        { title: "Which way of using an aircon saves the most power", publisher: "Electricity Generating Authority of Thailand (EGAT) (in Thai)", url: "https://www.egat.co.th/home/20220819-art01/", note: "Recommends 26–27 degrees with a fan, saving about 10% compared with 23–24 degrees" },
        { title: "Beat the heat this year: clean your aircon to cut your electricity bill (in Thai)", publisher: "Electricity Generating Authority of Thailand (11 May 2023)", url: "https://www.egat.co.th/home/20230511-art01/", note: "Cleaning the aircon every 6 months can save up to 10% on electricity" },
        { title: "Department of Industrial Works joins vocational and skills agencies to reduce and phase out HCFC-22 refrigerant (in Thai)", publisher: "MGR Online (9 Jan 2019)", url: "https://mgronline.com/greeninnovation/detail/9620000002721", note: "Since 2017 Thailand has banned factories making air conditioners under 50,000 BTU from using HCFC-22, moving to HFC-32" },
        { title: "Ozone Timeline", publisher: "UNEP Ozone Secretariat", url: "https://ozone.unep.org/ozone-timeline", note: "Timeline of the HCFC phase-out, including R22, under the Montreal Protocol" },
        { title: "Using your aircon and remote control efficiently (in Thai)", publisher: "Siam Daikin Sales", url: "https://www.daikin.co.th/th/article/articleDetail/energysaving", note: "Recommends cleaning the filters every 2 weeks" },
        { title: "How to clean the air filter and PM 1.0 filter (in Thai)", publisher: "Samsung Thailand", url: "https://www.samsung.com/th/support/home-appliances/how-to-cleaning-process-of-air-filter-and-pm-1-filter/", note: "Recommends cleaning the air filter every two weeks" },
      ],
    },
  ],
  faqs: [
    {
      q: "Does an inverter aircon really use less electricity?",
      a: "Yes. Technically an inverter uses less electricity than a fixed-speed unit, because it adjusts the compressor speed instead of cutting out and restarting over and over. But how much it saves depends on how many hours a day you run it, the size of the aircon relative to the room, and how clean the coil is. If your home runs it for only one or two hours a day, the difference is so small that in my assessment it does not justify the higher unit price.",
    },
    {
      q: "Is it cheaper to leave an inverter aircon on all day than to switch it off and on again?",
      a: "If you are only leaving the room for a short while, around half an hour to an hour, leaving it on is usually better value, because the unit just runs at low speed to hold the temperature rather than running at full power again from scratch. But if you are out of the house for several hours, switching it off definitely saves more. The idea that leaving it on all day always saves money is not accurate.",
    },
    {
      q: "Do inverter aircons really cost more to repair?",
      a: "If the control board fails, the repair clearly costs more than the ordinary parts of a non-inverter, and the board usually has to be ordered for the model, which means a wait. For common problems such as dripping, poor cooling from a clogged coil, or a refrigerant leak, the repair cost is not much different from a non-inverter. I recommend asking clearly about parts and service centres in Chiang Mai before you decide to buy.",
    },
    {
      q: "My old aircon uses R22. Can I switch to topping it up with R32 instead?",
      a: "No. Each refrigerant has different system pressures and a different compressor lubricating oil. Mixing types lowers performance and risks damaging the compressor. If your old unit uses R22 and has started having frequent problems, I recommend weighing up repairing it against replacing it, because R22 refrigerant and parts get harder to find every year.",
    },
    {
      q: "Does installing an inverter require different work from a non-inverter?",
      a: "The principles of running the pipework and wiring are similar, but an inverter is more sensitive to the quality of the installation, including a thorough vacuum of the system, the cable size and the earthing. If the installation is not up to standard, the energy-saving advantage is lost and the electronic parts are at risk of failing sooner. My installation work carries a 1-year warranty when you buy the unit from me, and 6 months if you already have your own unit.",
    },
  ],
};
