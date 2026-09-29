import type { IntlAreaText } from "@/lib/content-types";
import { p } from "@/lib/site";

export const part: Record<string, IntlAreaText> = {
  "san-klang": {
    name: "San Klang",
    full: "San Klang, San Kamphaeng",
    note: "A sub-district between San Kamphaeng and the city, dense with housing estates",
    landmarks: ["New Route 1317", "San Klang housing estates", "San Klang Market"],
    lead: "San Klang sits between San Kamphaeng town and Chiang Mai city, and the new Route 1317 runs through it, so housing estates have moved in here more densely than in the surrounding sub-districts. Most homes are fairly new detached houses and townhouses, each with two to four air conditioners.",
    points: [
      { t: "Many estate homes have several units at once", d: `Homes on the estates around here usually have an air conditioner in every bedroom plus the living room, three to four units per house in total, which qualifies for the three-or-more rate of ${p.wash.stdBulk} THB per unit. Let me know the number and size of the units in advance, and I'll confirm the total cost and how long the job will take before we book.` },
      { t: "Outdoor units in the narrow gap between the house and the fence", d: "Townhouses and semi-detached houses on the estates often have the outdoor unit in a side passage less than a metre wide. The hot air it blows out circulates in that gap and gets drawn back into the unit. With units like this, cleaning only the indoor coil usually does little for cooling, so I always open up and clean the outdoor unit as well." },
      { t: "Construction sites for new projects are still scattered around", d: "Estates in this sub-district are still opening new phases. Homes next to a site, or on a road used by trucks carrying materials, collect construction dust on their filters faster than homes deep inside an estate, so the two groups shouldn't follow the same cleaning schedule. I check the filters on site and let you know." },
    ],
    faqs: [
      { q: "I live on a housing estate in San Klang. Is it better value to clean every unit in the house at once?", a: `Yes, it is. From three units up, the rate is ${p.wash.stdBulk} THB per unit instead of the usual ${p.wash.std} THB, and I finish everything in a single visit, so there's no need for several appointments. Let me know the number and size of the units in advance, and I'll confirm the total cost and the time needed before we book.` },
      { q: "My outdoor unit is in a narrow side passage. Can it still be cleaned?", a: "Yes. Most townhouse side passages still leave enough room to work, but please tell me roughly how wide it is and whether anything is in the way. That way I can bring hoses and covers that suit the space and book the right amount of time." },
    ],
  },
  "sai-mun": {
    name: "Sai Mun",
    full: "Sai Mun, San Kamphaeng",
    note: "A sub-district next to San Kamphaeng town, with a mix of homes and workplaces",
    landmarks: ["Wat Sai Mun", "Old Route 1006", "San Kamphaeng town boundary"],
    lead: "Sai Mun is a small sub-district right next to San Kamphaeng town. Most of it is still traditional homes interspersed with farmland, with small factories and warehouses along the side roads, so aircon work here is a mix of homes and workplaces.",
    points: [
      { t: "Traditional homes, where the aircon was usually added after the house was built", d: "Houses that were built first and had air conditioning added later often have the refrigerant pipes routed around the outside walls, and the outdoor unit placed wherever there was room, sometimes under eaves where airflow is poor. I look at where the unit sits and how the pipes run first, then I can tell you whether the problem comes from dirt or from where it was installed." },
      { t: "Farmland around the house, with seasonal dust", d: "Homes next to fields take in a lot of soil dust and plant debris while the fields are being prepared and during harvest, clearly more than homes deep in a soi. So how often to clean depends more on where the house is than on the calendar. I check the filters and let you know how often is right." },
      { t: "Warehouses and small factories use ceiling-suspended units", d: `Many workplaces around here use ceiling-suspended units because the ceilings are high and they need strong airflow. Cleaning one of these costs ${p.wash.suspended} THB, which differs from a wall unit because the whole front casing has to come off and it takes longer. Let me know how many units there are and how high the ceiling is, so I can bring enough scaffolding.` },
    ],
    faqs: [
      { q: "My house is next to farmland. How many times a year should I clean the aircon?", a: "Homes next to farmland usually need cleaning sooner than homes deep in a soi, because they take in soil dust and plant debris when the fields are prepared and at harvest. But the right interval depends more on each home's surroundings than on a number of months, since two houses in the same sub-district can still differ a lot. I check the filters and coil fins on site and let you know how often is right." },
      { q: "How much does it cost to clean ceiling-suspended units in a warehouse?", a: `Ceiling-suspended units are ${p.wash.suspended} THB per unit. The price differs from wall units because the whole front casing has to come off, and in many places scaffolding is needed because the ceiling is high. Let me know the number of units and the ceiling height in advance, and I'll confirm the total cost and the time needed before we book.` },
    ],
  },
  "buak-khang": {
    name: "Buak Khang",
    full: "Buak Khang, San Kamphaeng",
    note: "An outer sub-district of San Kamphaeng, mainly farmland",
    landmarks: ["Wat Buak Khang", "San Kamphaeng–Mae On road", "Buak Khang farmland"],
    lead: "Buak Khang is an outer sub-district of San Kamphaeng that has kept much of its rural character. Most of the area is farmland, with homes clustered in villages. Many of the internal roads are narrow, with houses built right up to the roadside.",
    points: [
      { t: "Smoke still drifts in from the surrounding area during the burning-ban season", d: "February to April is when air quality across the whole province is at its worst, and sub-districts next to farmland get more smoke into their homes than the city does. Filters that trap soot turn black faster than usual, so homes around here should have their cleaning done before the season starts, rather than waiting until mid-season when bookings are full across the province." },
      { t: "Narrow village roads mean parking needs planning", d: "Many village sois are only wide enough for one vehicle, and some houses are built so close to the road that there's no shoulder to park on. Let me know whether a vehicle can reach your door and how far from the house I'll need to park, so I can pack my equipment to carry in one trip and allow enough time in the schedule." },
      { t: "Most houses have only one or two units", d: `A house with one or two air conditioners doesn't reach the three-unit threshold. If you'd like the ${p.wash.stdBulk} THB per-unit rate, invite your neighbours to book the same day. I'll count it as one job, since I'm coming out to the area in one trip anyway.` },
    ],
    faqs: [
      { q: "I live in Buak Khang. When should I clean my aircon to be ready before the dust season?", a: "Ideally before the end of January. February to April is when the dust is heaviest and bookings are full across the province. If you wait until mid-season, it's harder to get a slot, and your aircon will already have been working hard with clogged filters." },
      { q: "I only have one air conditioner. Can I get the three-or-more rate?", a: `A single unit is charged at the normal rate of ${p.wash.std} THB. But if you can get your neighbours to book the same day, I'll count it as one job and charge ${p.wash.stdBulk} THB per unit, since I'm coming out to the area in one trip anyway.` },
    ],
  },
  "chae-chang": {
    name: "Chae Chang",
    full: "Chae Chang, San Kamphaeng",
    note: "An eastern sub-district on the way out to Mae On",
    landmarks: ["Wat Chae Chang", "San Kamphaeng–Mae On road", "Mae On district boundary"],
    lead: "Chae Chang is on the east side of San Kamphaeng district, on the route out towards Mae On. It's a mix of homes in long-established villages, farmland, and newly built houses belonging to people who have moved out from the city.",
    points: [
      { t: "New houses outside estates: every outdoor unit is in a different spot", d: "Owner-designed houses don't have a standard spot for the outdoor unit the way estate homes do. Some have it behind the house in the shade of trees, others on the roof deck or mounted high on a wall. Let me know where the unit is and roughly how high, so I can bring the right ladder and hoses for the actual job." },
      { t: "An outdoor unit under a tree looks like a good idea, but leaves get into the fins", d: "Many homeowners deliberately place the outdoor unit under a tree to keep it out of the sun, but dry leaves and falling seeds pack into the fins and grille until it can't release heat as well. That's a separate issue from a dirty indoor coil. I open up and check the outdoor unit every time I come to clean." },
      { t: "At the eastern end of the area, so it's best to book ahead", d: "This sub-district is further from my base than those around the district town. I still take jobs here as normal and charge no extra travel fee, but if you can book ahead I'll schedule you for when I'm already working in this zone, which gives you a firmer time than a last-minute booking." },
    ],
    faqs: [
      { q: "I live in Chae Chang. Do you charge extra for travel?", a: "No extra charge. The price I quote is the price you pay. Chae Chang is within my normal service area. It's just that if you can book ahead, I'll schedule you for my next round in the eastern zone, which gives you a firmer time than a last-minute booking." },
      { q: "Is it good or bad to put the outdoor unit under a tree?", a: "It really does help with the sun, but the trade-off is dry leaves and seeds falling and packing into the fins and grille, which reduces how well it releases heat. If you keep it under a tree, check it and blow the leaves out more often than usual. I already open up and check the outdoor unit every time I come to clean." },
    ],
  },
  "mae-pu-kha": {
    name: "Mae Pu Kha",
    full: "Mae Pu Kha, San Kamphaeng",
    note: "A sub-district crossed by the new Route 1317, with both housing estates and older villages",
    landmarks: ["New Route 1317", "Wat Mae Pu Kha", "Housing estates along Route 1317"],
    lead: "Mae Pu Kha is crossed by the new Route 1317, so it has both older villages deep in the sois and housing estates along the main road. The work in these two groups differs, from access to the site to the number of units per house.",
    points: [
      { t: "Homes along the main road take in traffic dust", d: "Homes right on Route 1317 get noticeably more tyre dust and exhaust soot on their filters than homes deep in a soi, especially in rooms facing the road. So front and back rooms in the same house don't necessarily need the same cleaning schedule. I check room by room and let you know." },
      { t: "Roadside housing estates: several units per house", d: `Estate homes around here usually have three or more units each, which qualifies for the ${p.wash.stdBulk} THB per-unit rate, with every unit cleaned in one visit. Let me know the number and size of the units in advance, and I'll confirm the total cost and how long it will take before we book.` },
      { t: "Older villages deep in the sois: vehicle access varies", d: "Some sois in the older villages are wide enough to drive up to the door; on others I have to park at the mouth of the soi and carry the equipment in. Let me know which applies and how far from the house I'll need to park, so I can pack the right equipment and allow the right amount of time without affecting the next customer's appointment." },
    ],
    faqs: [
      { q: "My house is on Route 1317. Do I need to clean my aircon more often than homes in the sois?", a: "Yes, more often, especially rooms facing the road, because tyre dust and exhaust soot settle on the filters all the time. Rooms at the back of the house can usually go longer between cleans. I check the filters room by room and tell you which rooms need cleaning more often." },
      { q: "I live in an older village down a soi that vehicles can't get into. Can you still do the job?", a: "Yes, but please let me know in advance how far from the house I'll need to park. That way I can pack my equipment to carry in one trip and allow enough time, instead of walking back and forth several times, which wastes time for both of us." },
    ],
  },
  "yang-noeng": {
    name: "Yang Noeng",
    full: "Yang Noeng, Saraphi",
    note: "The central sub-district of Saraphi, on Route 106 with its avenue of yang na trees",
    landmarks: ["Chiang Mai–Lamphun Road (Route 106)", "Saraphi District Office", "Yang Noeng Market"],
    lead: "Yang Noeng is the central sub-district of Saraphi district. It runs along the Chiang Mai–Lamphun Road (Route 106), which is lined on both sides with large yang na trees. Most of the roadside buildings are shophouses and commercial buildings, while the land behind them is homes and longan orchards.",
    points: [
      { t: "Shophouses on Route 106: outdoor units behind the building or on the awning", d: "The commercial buildings along this road have no space at the sides, so outdoor units end up behind the building, on the awning, or mounted high on a wall. Access varies a lot from one shophouse to the next. Let me know where the unit is and roughly how high, so I can bring a long enough ladder and hoses." },
      { t: "Roadside yang na trees drop leaves and seeds onto outdoor units", d: "The yang na trees lining this road are large trees that shed their leaves and drop winged seeds with the seasons. Where the outdoor unit stands in the open within reach of blowing leaves, debris packs into the fins and grille, which reduces how well it releases heat. That's a separate issue from a dirty indoor coil." },
      { t: "The front shop and the back living quarters don't get equally dirty", d: `In shophouses with a shop at the front, the front room has its door opening all day and takes dust straight from the road, while the living quarters at the back are more closed off. So the two shouldn't follow the same cleaning schedule. If three or more units are cleaned together, the rate is ${p.wash.stdBulk} THB per unit.` },
    ],
    faqs: [
      { q: "Do I have to close my shophouse on Route 106 to get the aircon cleaned?", a: "No need to close. I cover the work area and use a wash bag that stops water splashing. For a unit in the front shop room, it takes about forty minutes to an hour per unit. Let me know your quieter hours in advance and I'll schedule the job for then." },
      { q: "My outdoor unit is on the awning. Can it be cleaned?", a: "Yes, but access varies a lot between shophouses. Some can be reached from inside the building; others need a ladder set up outside. Let me know where the unit is and roughly how high, so I can bring the right ladder and hoses and get the job done in one go." },
    ],
  },
  "tha-wang-tan": {
    name: "Tha Wang Tan",
    full: "Tha Wang Tan, Saraphi",
    note: "The sub-district where Wiang Kum Kam is located, with a mix of accommodation and long-established communities",
    landmarks: ["Wiang Kum Kam", "Wat Chedi Liam", "Ping River road, Saraphi side"],
    lead: "Tha Wang Tan is where Wiang Kum Kam is located, so it has historic sites, homes in long-established communities and tourist accommodation all in the same area. Many of the internal roads are narrow because they are old community roads that have never been widened.",
    points: [
      { t: "Guesthouses and homestays: book for when rooms are empty", d: "Most accommodation around here has only a few rooms, with guests coming and going all year, so aircon cleaning has to be booked for when rooms are free. Let me know how many rooms and what times suit you, and I'll schedule several rooms in one visit, so you don't have to close rooms on several different days." },
      { t: "Narrow community roads that larger vehicles can't always reach", d: "Many internal roads are old community roads only wide enough for one vehicle, and some stretches run alongside historic sites where parking isn't allowed. Let me know whether a vehicle can reach your door, so I can pack my equipment to carry in one trip and allow enough time in the schedule." },
      { t: "Rental rooms are better value cleaned together", d: `Accommodation with three or more rooms qualifies for ${p.wash.stdBulk} THB per unit instead of the usual ${p.wash.std} THB, with every unit cleaned in one visit. I confirm the total cost and the time needed before we book, so you can plan room closures in advance.` },
    ],
    faqs: [
      { q: "I have several guest rooms near Wiang Kum Kam. Can they all be done at once?", a: `Yes, and it's better value than calling me in for one room at a time, because from three units up the rate is ${p.wash.stdBulk} THB per unit. Let me know how many rooms and when they're free, and I'll confirm the total cost and the time needed before we book, so you can plan room closures in advance.` },
      { q: "The road to my house is too narrow for a vehicle. Can you still do the job?", a: "Yes. Let me know in advance how far from the house I'll need to park. I'll pack my equipment to carry in one trip and allow enough time, without affecting the next customer's appointment." },
    ],
  },
  "nong-phueng": {
    name: "Nong Phueng",
    full: "Nong Phueng, Saraphi",
    note: "The Saraphi sub-district bordering the city, dense with dorms and condos",
    landmarks: ["Chiang Mai–Lamphun Road (Route 106)", "Middle Ring Road", "Nong Phueng Market"],
    lead: "Nong Phueng is the Saraphi sub-district closest to Chiang Mai city, so it has more housing estates, condominium buildings and dorms than the other sub-districts in the district, while long-established communities and longan orchards remain further in.",
    points: [
      { t: "Dorms and condos: usually small units that work hard", d: "Most rentals around here have one small air conditioner per room, running for many hours every day. A hard-working unit that's never cleaned gets slower and slower to cool, until the owner assumes it's low on refrigerant, when really the coil fins are clogged. I always check first, and I don't top up refrigerant unless it's needed." },
      { t: "Next to the bypass and main roads, with heavy traffic dust", d: "Homes and rooms facing the main roads constantly take in tyre dust and exhaust soot on their filters, unlike inner rooms, which can go longer between cleans. I check the filters room by room and let you know, so you don't clean more often than needed or leave them until they clog." },
      { t: "Dorm owners can have the whole building done in one visit", d: `A dorm with many rooms qualifies for the three-or-more rate of ${p.wash.stdBulk} THB per unit, and I finish everything in one visit, so there's no need for appointments spread over several days that disturb tenants. Let me know how many rooms and what times suit you, and I'll confirm the total cost and the time needed before we book.` },
    ],
    faqs: [
      { q: "The aircon in my rental room isn't cooling well. Does it need a refrigerant top-up?", a: "Usually not. An aircon without a leak doesn't lose refrigerant on its own. Slow cooling in rental rooms usually comes from clogged coil fins, because the unit runs every day but has never been cleaned. I check the pressure and the coil condition first. If it cools properly again after cleaning, there's no need to top up, and I don't recommend topping up unless it's necessary." },
      { q: "I own a dorm and want the whole building cleaned. How does that work?", a: `Let me know how many rooms and what times suit you. From three units up, the rate is ${p.wash.stdBulk} THB per unit. I finish everything in one visit so there's no need for appointments spread over several days that disturb tenants, and I confirm the total cost and the time needed before we book.` },
    ],
  },
  "nong-faek": {
    name: "Nong Faek",
    full: "Nong Faek, Saraphi",
    note: "An inner sub-district of Saraphi, mainly longan orchards",
    landmarks: ["Nong Faek longan orchards", "Wat Nong Faek", "Saraphi–Nong Faek road"],
    lead: "Nong Faek is an inner sub-district of Saraphi where most of the land is still longan orchards and farmland. Homes are clustered in villages, and new houses belonging to people moving out from the city keep appearing among them.",
    points: [
      { t: "Longan orchards around the house: leaves and pollen by season", d: "Homes next to longan orchards get dry leaves, and pollen during flowering, blowing onto the grille of outdoor units that stand in the open. This debris packs into the fins until the unit can't release heat as well. I open up and check the outdoor unit every time I come to clean, not just the indoor unit." },
      { t: "Orchards get sprayed, so switch the unit off while they spray", d: "When the orchards around your house are sprayed, the spray mist can drift into the outdoor unit and into the room through the vents. If you know the schedule in advance, switch the unit off and keep the room closed during spraying, then turn it back on once it's over. This helps reduce sticky residue on the fins, which is harder to wash off than ordinary dust." },
      { t: "Homes are spread out, so booking ahead gives you a firmer time", d: "Homes in this sub-district are further apart than in the city. I still take jobs here as normal and charge no extra travel fee, but if you can book ahead I'll schedule you for when I'm already in this zone, which gives you a firmer time than a last-minute booking." },
    ],
    faqs: [
      { q: "My house is next to a longan orchard. Does my aircon need different care from a house in the city?", a: "The difference is the outdoor unit. Dry leaves and pollen pack into the fins and grille until it can't release heat as well, which is a separate issue from a dirty indoor coil. I open up and check the outdoor unit every time I come to clean, and I can tell you whether its current position is suitable or whether it should be moved." },
      { q: "Nong Faek is far from the city. Do you charge extra for travel?", a: "No extra charge. The price I quote is the price you pay. Nong Faek is within my normal service area. It's just that if you can book ahead, I'll schedule you for my next round in this zone, which gives you a firmer time." },
    ],
  },
  "pa-bong": {
    name: "Pa Bong",
    full: "Pa Bong, Saraphi",
    note: "A small Saraphi sub-district of long-established communities and longan orchards",
    landmarks: ["Wat Pa Bong", "Pa Bong longan orchards", "Saraphi–Pa Bong road"],
    lead: "Pa Bong is a small sub-district of Saraphi, mixing homes in long-established communities, longan orchards and farmland. Houses are a mix of single-storey and two-storey homes.",
    points: [
      { t: "Single-storey homes: outdoor units usually stand on the ground beside the house", d: "A unit standing on the ground draws leaves, soil dust and grass clippings into its fins more easily than one mounted high. If there's a lawn or a dirt path nearby, leave space around the unit for air to flow in and out. I look at where it's placed and can tell you whether it should be moved or just cleaned more often." },
      { t: "During stubble burning, filters turn black faster than usual", d: "After harvest, crop residue is dealt with in the surrounding fields, so homes next to the fields take in more soot than homes deep in a soi. Filters turn black faster than usual at this time, so it's best to have the cleaning done before the dust season rather than waiting until mid-season when bookings are full across the province." },
      { t: "A single house often doesn't reach the three-unit threshold", d: `If your house has one or two units and you'd like the ${p.wash.stdBulk} THB per-unit rate, invite your neighbours to book the same day. I'll count it as one job, since I'm coming out to the area in one trip anyway.` },
    ],
    faqs: [
      { q: "My outdoor unit stands on the ground beside the house. Is that a problem?", a: "The common problem is that it draws leaves, soil dust and grass clippings into the fins, which reduces how well it releases heat. Leave space around the unit for air to flow and don't put things right up against it. I look at the position on site and can tell you whether it should be moved or just cleaned more often." },
      { q: "I have two air conditioners. Can I get the three-or-more rate?", a: `Two units are charged at the normal rate of ${p.wash.std} THB each. But if you can get a neighbour to book the same day to make three units, I'll count it as one job and charge ${p.wash.stdBulk} THB per unit, since I'm coming out to the area in one trip anyway.` },
    ],
  },
  "chai-sathan": {
    name: "Chai Sathan",
    full: "Chai Sathan, Saraphi",
    note: "A sub-district with long-established communities, longan orchards and small housing estates",
    landmarks: ["Wat Chai Sathan", "Chiang Mai–Lamphun Road (Route 106)", "Chai Sathan longan orchards"],
    lead: "Chai Sathan is a Saraphi sub-district not far from the Chiang Mai–Lamphun road. It has homes in long-established communities, longan orchards and small housing estates that have gradually moved in, so aircon work within the same sub-district varies noticeably.",
    points: [
      { t: "Older homes and estate homes use different installation styles", d: "Older homes that had aircon added later often have the refrigerant pipes routed around the outside walls, while estate homes have pipes built into the walls during construction. So the problems differ: the first group often has issues at the joints and with the pipe insulation. I look at how the pipes run first, then I can tell you whether the problem comes from dirt or from the installation." },
      { t: "Drain pipes that empty onto the ground often back up", d: "In homes where the drain pipe empties onto the ground or into a ditch beside the house, the end of the pipe can get blocked with soil and leaves until water backs up into the unit and drips into the room. This can be fixed without taking the unit down. I blow out the drain line and suggest where to raise the end of the pipe clear of the ground." },
      { t: "Close enough to be scheduled together with the rest of Saraphi", d: `Chai Sathan is close to the other sub-districts in the same district. If your neighbours want their units cleaned too, you can book the same day. I'll count it as one job and charge ${p.wash.stdBulk} THB per unit from three units up.` },
    ],
    faqs: [
      { q: "My aircon is dripping water into the room. Does the unit have to be taken down?", a: "Usually not. The common causes are a drain pipe end blocked by soil or leaves so the water backs up, and algae building up in the drain tray. Both can be fixed by blowing out the drain line and cleaning the tray. I check first and tell you how far the work needs to go, without taking anything apart unnecessarily." },
      { q: "My older house had aircon added later. Is there anything I should watch out for?", a: "The things to check are the pipe insulation and the joints outside the building, because constant sun and rain can make them brittle and crack. That causes water to drip along the pipes and reduces efficiency. I check the pipe run every time I come to clean and tell you where it should be re-insulated." },
    ],
  },
  "chom-phu": {
    name: "Chom Phu",
    full: "Chom Phu, Saraphi",
    note: "An inner farming sub-district of Saraphi",
    landmarks: ["Wat Chom Phu", "Chom Phu longan orchards", "Saraphi–Chom Phu road"],
    lead: "Chom Phu is an inner sub-district of Saraphi that has kept much of its farming character. Homes are clustered in villages surrounded by longan orchards, and many internal roads are community roads only wide enough for one vehicle.",
    points: [
      { t: "Homes surrounded by orchards: the outdoor unit is the main focus", d: "For most jobs in this sub-district, the problem isn't the indoor coil but the outdoor unit, which takes in dry leaves and dust from the orchards around the house all year. A unit cleaned only indoors still won't cool fully. I always open up and clean the outdoor unit as well, at no extra charge, because it's part of the cleaning job." },
      { t: "The smoke season hits harder here than in the city", d: "Sub-districts next to farmland get more smoke from February to April than the city does. Filters that trap soot turn black much faster than usual, so homes around here should have their cleaning done before the season starts, not wait until mid-season, when bookings are full across the province and the aircon has already been working hard." },
      { t: "Booking ahead gives you a firmer time", d: "Homes in this sub-district are spread out and further apart than in the city. I take jobs here as normal and charge no extra travel fee, but if you can book ahead I'll schedule you for my next round in the Saraphi zone, which gives you a firmer time than a last-minute booking." },
    ],
    faqs: [
      { q: "When you clean aircon in Chom Phu, do you clean the outdoor unit too?", a: "Yes, at no extra charge, because it's part of the cleaning job. In homes surrounded by orchards like these, most cooling problems come from the outdoor unit, which takes in dry leaves and dust all year. If only the indoor unit is cleaned, it still won't cool fully." },
      { q: "When should I clean my aircon to be ready before the smoke season?", a: "Ideally have it done before the end of January. February to April is when the dust is heaviest and bookings are full across the province. If you wait until mid-season, it's harder to get a slot, and your aircon will already have been working hard with clogged filters." },
    ],
  },
  "suthep": {
    name: "Suthep",
    full: "Suthep, Mueang Chiang Mai",
    note: "The university and Doi Suthep foothills sub-district, dense with dorms and condos",
    landmarks: ["Chiang Mai University", "Suthep Road", "Foot of Doi Suthep"],
    lead: "Suthep stretches from the foot of Doi Suthep down to the Chiang Mai University area, making it one of the most densely packed sub-districts in Mueang Chiang Mai for student dorms, condos and homes. Aircon work here includes both small rental rooms and detached houses with several units, side by side in the same area.",
    points: [
      { t: "Student dorms: units run for many hours every day", d: "Most rentals around the university have one small air conditioner, running for many hours every day. A hard-working unit that's never cleaned gets slower and slower to cool, until you assume it's low on refrigerant, when really the coil fins are clogged. I always check the pressure and the coil condition first, and I don't top up refrigerant unless it's needed." },
      { t: "Condos: booking goes through the juristic office, with limited working hours", d: "Many condos set the hours when technicians can work and require advance notice to the building's juristic office. Let me know what the building's rules are, and I'll prepare the paperwork, schedule the job for the permitted hours, and bring covers and a wash bag for rooms without a balcony." },
      { t: "Foothill homes: outdoor units take in leaves all year", d: "Homes in the foothills have more large trees around them than other parts of Mueang Chiang Mai. Dry leaves and seeds pack into the fins and grille of the outdoor unit until it can't release heat as well, which is a separate issue from a dirty indoor coil. I open up and check the outdoor unit every time I come to clean." },
    ],
    faqs: [
      { q: "The aircon in my dorm room isn't cooling. Does it need a refrigerant top-up?", a: "Usually not. An aircon without a leak doesn't lose refrigerant on its own. Slow cooling in rental rooms usually comes from clogged coil fins, because the unit runs every day but has never been cleaned. I check the pressure and the coil condition first. If it cools normally again after cleaning, there's no need to top up." },
      { q: "I live in a condo near the university. Do I need to notify the juristic office before an aircon clean?", a: "Usually, yes, and many buildings also set the hours when technicians can work. Let me know what the building's rules are, and I'll prepare the paperwork and schedule the job for the permitted hours. Rooms without a balcony can still be cleaned; I use a wash bag that stops water splashing." },
    ],
  },
  "phra-sing": {
    name: "Phra Sing",
    full: "Phra Sing, Mueang Chiang Mai",
    note: "A sub-district in the south-west of the Old City, with old buildings and guesthouses",
    landmarks: ["Wat Phra Singh", "Ratchadamnoen Road", "Suan Dok Gate"],
    lead: "Phra Sing is in the south-west of the moated Old City, with old temples, guesthouses, restaurants and long-established homes down narrow sois. Many buildings are older ones that had aircon added later, so the units aren't in standard positions the way they are in new buildings.",
    points: [
      { t: "Old buildings in the Old City: every outdoor unit is in a different spot", d: "Most buildings here were built before air conditioning became standard, so the outdoor units were put wherever there was room: on the roof deck, in a gap beside the building, or mounted high on the back wall. Let me know where the unit is and roughly how high, so I can bring the right ladder and hoses." },
      { t: "Narrow Old City sois: vehicles have to park at the mouth of the soi", d: "Many sois in the Old City are only wide enough for one vehicle and have nowhere to park. Let me know whether a vehicle can reach the building, so I can pack my equipment to carry in one trip and allow enough time in the schedule, without affecting the next job." },
      { t: "Guesthouses and restaurants: book around your downtime", d: `Accommodation and restaurants in this area open almost every day, so aircon cleaning has to be booked for when rooms are empty or customers are few. Let me know how many units and what times suit you. From three units up, the rate is ${p.wash.stdBulk} THB per unit, and I finish everything in one visit.` },
    ],
    faqs: [
      { q: "Can aircon in an old building in the Old City be cleaned as normal?", a: "Yes. It's just that unit positions vary a lot from building to building: some have the outdoor unit on the roof deck, others mounted high on the back wall. Let me know where the unit is and roughly how high, so I can bring the right ladder and hoses for the actual job and finish in one go." },
      { q: "I run a guesthouse and want every room cleaned. How many days will I need to close?", a: `There's no need to close the whole building. I clean one room at a time, taking about forty minutes to an hour per unit. Let me know how many rooms and when they're free, and I'll schedule several rooms in one day. From three units up, the rate is ${p.wash.stdBulk} THB per unit.` },
    ],
  },
  "si-phum": {
    name: "Si Phum",
    full: "Si Phum, Mueang Chiang Mai",
    note: "A sub-district in the north-east of the Old City, with small guesthouses and shops",
    landmarks: ["Wat Chiang Man", "Si Phum Road", "Si Phum Corner"],
    lead: "Si Phum is in the north-east of the moated Old City, with old temples, small guesthouses, shops and long-established homes all mixed together. Most buildings are in sois with limited vehicle access, and many had aircon added after they were built.",
    points: [
      { t: "Small guesthouses can book several rooms in one visit", d: `Most accommodation in this area has only a few rooms but takes guests all year, so aircon cleaning is best booked for when several rooms are free at the same time. From three units up, the rate is ${p.wash.stdBulk} THB per unit, and I finish everything in one visit, so you don't have to close rooms on several different days.` },
      { t: "Outdoor units mounted high on the back wall", d: "Buildings with no space at the sides often have the outdoor unit mounted high on the back wall or above a walkway, which needs a ladder and a stable place to set it up. Let me know roughly how high the unit is and what the ground below is like, so I can bring the right ladder and hoses and work safely." },
      { t: "Rooms with the door opening all day get dirty faster", d: "Shops and guesthouses that keep their doors open for customers all day get more road dust on their filters than closed rooms. So the two parts of the same building shouldn't follow the same cleaning schedule. I check the filters room by room and let you know." },
    ],
    faqs: [
      { q: "I'm down an Old City soi that vehicles can't get into. Can you still clean my aircon?", a: "Yes. Let me know in advance how far from the house I'll need to park. I'll pack my equipment to carry in one trip and allow enough time, without affecting the next job. A narrow soi isn't a problem if I know in advance." },
      { q: "My outdoor unit is mounted high above a walkway. Can it be cleaned?", a: "Yes, but there needs to be a stable spot to set up the ladder. Let me know roughly how high the unit is and what the ground below is like, so I can bring the right ladder and hoses and plan how to cover the area below so wash water doesn't drip onto the walkway." },
    ],
  },
  "hai-ya": {
    name: "Hai Ya",
    full: "Hai Ya, Mueang Chiang Mai",
    note: "A sub-district on the south side of the Old City, continuing into the Wua Lai area",
    landmarks: ["Wua Lai Road", "Chiang Mai Gate", "Wat Sri Suphan"],
    lead: "Hai Ya covers the south side of the Old City area and extends out towards the Wua Lai neighbourhood. It has long-established homes, silverware shops, accommodation and roadside commercial buildings, and many are older buildings that had aircon added later.",
    points: [
      { t: "Roadside commercial buildings: outdoor units behind the building", d: "Shophouses along the main roads have no space at the sides, so the outdoor units end up behind the building or on the awning, and access varies a lot from one shophouse to the next. Let me know where the unit is and how it can be reached, so I can bring the right ladder and hoses for the actual job." },
      { t: "Home-based craft workshops create finer dust than usual", d: "Homes that double as silverwork or handicraft workshops produce dust from polishing and filing that's finer than ordinary household dust. This kind of dust can get past the filter and settle on the coil fins, so workrooms need cleaning sooner than bedrooms in the same house." },
      { t: "Saturday Walking Street: avoid evening appointments", d: "Wua Lai Road closes for the walking street on Saturdays from the afternoon into the evening, and vehicles can't reach the buildings along it. If you need a Saturday appointment, I'll schedule it from morning to early afternoon, so equipment can be carried in and out as normal without rushing the job." },
    ],
    faqs: [
      { q: "My home is also a silverwork workshop. Should I clean the aircon more often than usual?", a: "The workroom should be cleaned more often, because dust from polishing and filing is finer than ordinary household dust and can get past the filter onto the coil fins. Bedrooms in the same house can usually go longer between cleans. I check the filters on site and let you know which rooms need cleaning more often." },
      { q: "Can I book on a Saturday when the walking street is on?", a: "Yes, but I'll schedule it from morning to early afternoon, because from late afternoon into the evening the road is closed and vehicles can't reach the building. With a morning appointment, equipment can be carried in and out as normal, and there's no need to rush to finish before the road closes." },
    ],
  },
};
