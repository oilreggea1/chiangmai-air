import type { IntlAreaText } from "@/lib/content-types";
import { p, btu } from "@/lib/site";

export const part: Record<string, IntlAreaText> = {
  "san-sai-luang": {
    name: "San Sai Luang",
    full: "San Sai Luang, San Sai",
    note: "The sub-district that is home to the San Sai District Office, with an old market quarter by the Jo stream",
    landmarks: ["San Sai District Office", "Wat San Sai Luang", "San Sai Market"],
    lead: "San Sai Luang is the sub-district where the San Sai District Office stands. The old market community grew along the road with Wat San Sai Luang at its centre, and some of the San Sai market quarter's wooden shophouses still remain in front of the district office. The area is low-lying flat land crossed by irrigation channels, and the Jo stream (Lam Nam Jo) flows through it. Beyond the market quarter, housing estates sit among older villages such as Ban Khao Thaen and Ban Tho.",
    points: [
      { t: "Wooden shophouses in the market quarter need a well-chosen mounting point", d: "In the wooden buildings and old shophouses of the San Sai market quarter, the outdoor unit's bracket must be fixed to a load-bearing structure, not just to a wall panel, because a vibrating unit will loosen the mounting and start making noise. I check the existing mounting every time I come to clean. If the frame needs reinforcing, I tell you the cost of that part before starting work." },
      { t: "Homes along the Jo stream are low-lying, so check the outdoor unit's height", d: "The Jo stream runs through the municipality, and the municipality has improved the stream and its weirs to reduce recurring flooding. Homes beside the stream or on low ground should therefore have the outdoor unit placed above the level floodwater has reached before, and the unit's drain line should be checked so water does not flow back. If water has ever reached the installation point, please let me know in advance." },
      { t: "Market shophouses and outlying housing estates call for different work plans", d: `Shophouses in the market quarter usually have one or two units, with the outdoor unit behind the building or on the awning. Homes in the outlying estates often have several units each, which qualifies for the price for three or more units: ${p.wash.stdBulk} THB per unit. Let me know the type of building and the number of units in advance, and I will bring ladders and hoses to suit the actual site.` },
    ],
    faqs: [
      { q: "Can I add an air conditioner to a wooden shophouse in the San Sai market quarter?", a: "Yes, but the mounting point must genuinely bear the weight and the wiring must be adequate for the unit's size. I survey the structure and the existing electrical system first. If the frame needs reinforcing or new wiring is needed, I tell you the full cost before starting work." },
      { q: "I live in San Sai Luang. Is there an extra travel fee?", a: "No. The price is the same as in every area I serve. I always inspect the unit and tell you the total before starting work, and cleaning comes with a 30-day warranty. If anything goes wrong as a result of the cleaning during that time, let me know and I will come back to fix it." },
    ],
  },
  "san-sai-noi": {
    name: "San Sai Noi",
    full: "San Sai Noi, San Sai",
    note: "A sub-district on the Outer Ring Road with many housing estates, beside the Jo stream",
    landmarks: ["Siri Sukhanan Park", "Wat Mae Yoi", "Outer Ring Road (Route 121)"],
    lead: "San Sai Noi lies between the edge of the city and the San Sai market quarter. Outer Ring Road 121 cuts through the sub-district and crosses the old San Sai road at the San Khayom intersection. Many housing estates line the roads, while Ban Mae Yoi, Ban Jo and Ban San Khayom remain older villages. The Jo stream flows through the sub-district, and on its bank is Siri Sukhanan Park, a public park of San Sai Luang Subdistrict Municipality.",
    points: [
      { t: "Housing estates along the Outer Ring Road often have several units per home", d: `Most homes in this sub-district's housing estates are detached or semi-detached houses with several air conditioners, which qualifies for the price for three or more units: ${p.wash.stdBulk} THB per unit, and all units can be cleaned in a single visit. Let me know the number and size of units in advance, and I will give you the total and the time needed before the appointment.` },
      { t: "Homes on the ring road and homes deep inside an estate don't get equally dirty", d: "The Outer Ring Road carries traffic all day. Front-row houses facing the road collect traffic dust on their filters faster than homes deeper inside the estate, so the two shouldn't follow the same cleaning schedule. I check the filters on site and let you know." },
      { t: "Villages along the Jo stream were once on flood watch", d: "When the Ton Phaeng weir embankment was damaged during storms in 2020, Ban San Khayom, Ban San Sai Ngoen, Ban Jo Tai and Ban Den San Khayom were on the list of villages told to watch for water from the Jo stream. Homes in these villages with outdoor units on the ground should raise the base above the water level, and have the electrical parts checked before use if water has ever reached them." },
    ],
    faqs: [
      { q: "My housing estate has a guardhouse. What do I need to tell you before the technician comes in?", a: "Just give me the estate name and house number when you book. If the estate requires vehicle registration or exchanging an ID card at the gate, I send the vehicle plate and the technician's name in advance, so we can get in on time and you don't have to come out to meet us at the entrance." },
      { q: "My home is on the ring road. How often should I have my air conditioner cleaned?", a: "More often than homes inside the estate, especially rooms that face the road, since traffic dust settles on the filters all day. But the right interval depends on the actual condition of each home. Send me a photo of the filter on LINE and I will first assess whether it is due for cleaning." },
    ],
  },
  "san-na-meng": {
    name: "San Na Meng",
    full: "San Na Meng, San Sai",
    note: "A suburban sub-district on Chiang Mai–Doi Saket Road with many housing estates, beside the Kuang River",
    landmarks: ["Wat San Na Meng", "Wat Mae Kuang", "Chiang Mai–Doi Saket Road"],
    lead: "San Na Meng lies east of the San Sai District Office, with Chiang Mai–Doi Saket Road running through it. It is a suburban area with so many housing estates that some villages are named after their developments, such as Khurusapha village and JC Garden Ville. The Kuang River (Mae Kuang) flows along the east side of the sub-district, and there are still older villages with their own community temples, such as Wat San Na Meng, Wat Rong Sak and Wat Mae Kuang.",
    points: [
      { t: "Many housing estates: every unit cleaned in one visit", d: `Most homes in San Na Meng's housing estates have several air conditioners each, which qualifies for the price for three or more units: ${p.wash.stdBulk} THB per unit. If neighbours in the same estate want cleaning on the same day, let me know together. I will schedule the homes back-to-back and give each household its total before the appointment.` },
      { t: "Homes on Chiang Mai–Doi Saket Road get traffic dust all day", d: "Chiang Mai–Doi Saket Road is a main route with traffic all day, so shophouses and homes right on the road collect dust on their filters faster than homes deeper inside the estates. The cleaning interval should depend on where the home is rather than on the number of months. I check the filters and tell you the right interval." },
      { t: "The Kuang River side is low-lying and has flooded before", d: "In the past this sub-district flooded regularly, and in 2020 the Ton Phaeng weir embankment in Village No. 2 was damaged, prompting a flood warning. Homes on the Kuang River side and on low ground should have the outdoor unit placed above the level floodwater has reached, and the drain line checked so water does not flow back into the unit." },
    ],
    faqs: [
      { q: "My home in an estate has three air conditioners. Can they all be cleaned in one day?", a: `Yes, in a single visit. For three or more units the price is ${p.wash.stdBulk} THB per unit, instead of the usual ${p.wash.std} THB per unit. Let me know the size and location of each unit in advance, and I will give you the total and the time needed before the appointment.` },
      { q: "My home is on low ground on the Kuang side and water has reached the outdoor unit. What should I do?", a: "Don't turn the unit on until the electrical parts have been checked. Leftover sediment and moisture can damage the circuit board when power is applied. I check it and clean out the sediment first, and if you want the outdoor unit's base raised, I assess the site and tell you the cost before starting work." },
    ],
  },
  "san-pa-pao": {
    name: "San Pa Pao",
    full: "San Pa Pao, San Sai",
    note: "A low-lying sub-district on the Kuang River with rice fields and orchards, beside Chiang Mai–Doi Saket Road",
    landmarks: ["Wat San Ton Pao", "Wat Phayak Noi", "Chiang Mai–Doi Saket Road"],
    lead: "San Pa Pao lies east of the San Sai District Office, with Chiang Mai–Doi Saket Road forming its southern boundary. It is low-lying flat land crossed by the Kuang River and the Lam Mueang Kon and Lam Mueang Foei Hai channels, and the whole sub-district lies within the Mae Kuang Udom Thara irrigation area. Most of the land is still rice fields, mango orchards and longan orchards. Homes are mostly in older villages such as Ban San Ton Pao and Ban Phayak Noi, with a few small housing estates in between.",
    points: [
      { t: "Homes next to rice fields: dust comes with the seasons", d: "Farmland covers most of the sub-district, so homes next to the fields get soil dust during field preparation and harvest, and smoke haze in the dry season. Filters clog faster at those times than in other months. Washing the filters yourself every two to three weeks during these periods helps a lot, and I recommend a full clean before the smoke season." },
      { t: "Mango and longan trees around the house drop leaves onto the outdoor unit", d: "In homes with mango or longan trees around them, dry leaves and fallen flowers pack into the fins and grille of the outdoor unit standing outside. This reduces heat dissipation and makes the unit work harder, which is a separate issue from dirt on the indoor coil. I open up and check the outdoor unit every time I come to clean." },
      { t: "Homes on Chiang Mai–Doi Saket Road and homes in the villages need different cleaning intervals", d: "Homes and buildings along Chiang Mai–Doi Saket Road on the south side of the sub-district get traffic dust all day, while homes in the villages further in mainly get seasonal farm dust. So the two need different cleaning intervals. I check the filters on site and tell you how long to leave between cleanings." },
    ],
    faqs: [
      { q: "I only have one air conditioner. Can I still book a cleaning?", a: `Yes. A single unit is ${p.wash.std} THB, the same price as in every area I serve, with no extra travel fee. I inspect the unit and tell you the total before starting work. If neighbours want cleaning on the same day, let me know together and I will schedule them back-to-back.` },
      { q: "With the dry-season smoke haze, should I have the air conditioner cleaned before or after?", a: "I recommend a full clean before the season starts, so the coil is clean from the outset and you book while the schedule is still open. During the season, remove and wash the filters yourself every two to three weeks. If after the season the unit cools more slowly or smells, tell me the symptoms and I will first assess whether another cleaning is needed." },
    ],
  },
  "nong-chom": {
    name: "Nong Chom",
    full: "Nong Chom, San Sai",
    note: "A sub-district bordering Mueang district on Chiang Mai–Phrao Road, with housing estates and schools",
    landmarks: ["Nation University, Chiang Mai Campus", "Payap Technology and Business Administration College", "Nong Chom Intersection"],
    lead: "Nong Chom lies south of the Mae Jo area, bordering the Fa Ham and San Phisuea sub-districts of Mueang district. Chiang Mai–Phrao Road runs along the west side of the sub-district, and Outer Ring Road 121 crosses it at the Nong Chom intersection. It is a community continuous with Nong Han, with many housing estates, a large number of shops and businesses, and schools such as Payap Technology and Business Administration College and Nation University's Chiang Mai campus. Some farmland remains.",
    points: [
      { t: "Chiang Mai–Phrao Road carries very heavy traffic here", d: "The stretch of Chiang Mai–Phrao Road through Nong Chom is so congested that there are plans to widen it. Commercial buildings and homes right on the road therefore collect tyre dust and exhaust soot on their filters faster than homes inside the estates. The cleaning interval should depend on the building's location. I check the filters on site and let you know." },
      { t: "Many housing estates, usually with several units per home", d: `Most detached houses in this sub-district's estates have several air conditioners, which qualifies for the price for three or more units: ${p.wash.stdBulk} THB per unit, and all units can be cleaned in a single visit. Let me know the number and size of units in advance, and I will give you the total and the time needed before the appointment.` },
      { t: "Smoke haze early in the year clogs filters faster than usual", d: "In February each year, particulate levels are often higher than usual because of burning, so filters clog faster than in other months. I recommend a full clean between January and early February so you enter the season with a clean coil, and during the season remove and wash the filters yourself every two to three weeks." },
    ],
    faqs: [
      { q: "I have a shop on Chiang Mai–Phrao Road with the air conditioning on all day. How often should it be cleaned?", a: "More often than a home, because the unit runs for many hours on end and takes in road dust whenever the shop door is open. The right interval depends on hours of use and the shop's location. Send me a photo of the filter on LINE and I will assess it first, and I can schedule the work at a time that doesn't disrupt your business." },
      { q: "My home in an estate in the Mae Jo area has three units of different sizes. How is it priced?", a: `For ${btu.washStd} BTU units, three or more are ${p.wash.stdBulk} THB per unit. For ${btu.washBig} BTU units, two or more are ${p.wash.bigBulk} THB per unit. Let me know the size of each unit in advance and I will give you the total before the appointment, and I always inspect the units on site before starting.` },
    ],
  },
  "nong-han": {
    name: "Nong Han",
    full: "Nong Han, San Sai",
    note: "The Maejo University area, dense with dorms, with farmland to the north",
    landmarks: ["Maejo University", "Mae Jo Fresh Market", "San Sai Hospital"],
    lead: "Nong Han is home to Maejo University and the Mae Jo Town Municipality office. Chiang Mai–Phrao Road runs through the middle of the area, with Mae Rim–Mae Jo Road and San Sai–Phrao Road branching off. The town centre has San Sai Hospital, Mae Jo Fresh Market, and a dense cluster of dorms and apartments around the university. The northern part of the sub-district is still farmland fed by the Mae Faek irrigation canal, and is home to Thudongkasathan Lanna.",
    points: [
      { t: "Dorms around Maejo University: many rooms cleaned in one round", d: `Residential buildings around the university usually have one air conditioner per room and many rooms per building. This kind of job qualifies for the price for three or more units: ${p.wash.stdBulk} THB per unit. The period when rooms are empty between tenants is when the work can run most continuously. Let me know the number of rooms and unit sizes in advance, and I will give you the total and the number of days needed before the appointment.` },
      { t: "Buildings on Chiang Mai–Phrao Road by the Mae Jo market get dust all day", d: "The stretch of Chiang Mai–Phrao Road through central Mae Jo has passing traffic, the market and roadside shops, so buildings right on the road collect dust on their filters faster than buildings down the side lanes. Rooms facing the road should be cleaned more often than rooms at the back of the same building. I check the filters in each room and let you know." },
      { t: "The north of the sub-district is farmland, with a different cleaning interval from town", d: "The northern part of the sub-district, outside Mae Jo Town Municipality, is still farmland using water from the Mae Faek irrigation canal. Homes next to the fields get soil dust during field preparation and smoke haze in the dry season, unlike buildings in town, which mainly get traffic dust. I assess the site and tell you the right cleaning interval." },
    ],
    faqs: [
      { q: "I own a dorm in the Mae Jo area. Can you clean the whole building?", a: `Yes. For three or more units the price is ${p.wash.stdBulk} THB per unit, instead of the usual ${p.wash.std} THB per unit. For a whole building, I split the work by floor or by zone, whichever suits the tenants. Let me know the number of rooms and unit sizes in advance, and I will give you the total and the number of days needed before the appointment.` },
      { q: "I live in Mae Jo. How many days ahead should I book to get a convenient slot?", a: "Booking two to three days ahead gives you the widest choice of dates and times. Prices in the Mae Jo area are the same as everywhere in the service area, with no extra travel fee." },
    ],
  },
  "pa-phai": {
    name: "Pa Phai",
    full: "Pa Phai, San Sai",
    note: "A sub-district east of Mae Jo with rice fields, orchards and hills of open forest",
    landmarks: ["Huai Jo Reservoir", "Wat Doi Thaen Phra Pha Luang", "San Sai–Pa Muead Road"],
    lead: "Pa Phai lies east of the Mae Jo area. Most of it is flat land, with some hills covered in open forest. Some homes on the west side fall within Mae Jo Town Municipality, while further in are villages that mainly grow rice and tend orchards. The sub-district has the Huai Jo Reservoir at Ban Pong, the Huai Salaeng Reservoir and Wat Doi Thaen Phra Pha Luang on a hill, as well as several garden cafés.",
    points: [
      { t: "Hills and open forest take smoke haze directly in the dry season", d: "Pa Phai is one of the sub-districts where staff patrol for forest fires in the dry season, so homes on the hillside take in more smoke and ash at that time than other areas, and filters clog faster than usual. I recommend a full clean before the smoke season, and during the season remove and wash the filters yourself every two to three weeks." },
      { t: "Homes in orchards and next to rice fields: outdoor units collect leaves and soil dust", d: "Homes in orchards or next to rice fields often have the outdoor unit outside under trees. Dry leaves pack into the fins and grille, and during field preparation soil dust adds to it. Both reduce the unit's ability to dissipate heat. I open up and check the outdoor unit every time I come to clean, and let you know if the unit's position should be changed." },
      { t: "Rental rooms on the Mae Jo side can be cleaned together", d: `The west side of the sub-district, within Mae Jo Town Municipality, has a number of rental rooms and apartments. If a building owner books three or more units, the price is ${p.wash.stdBulk} THB per unit. Let me know the number of rooms and when they are empty, and I will schedule the work back-to-back in one round.` },
    ],
    faqs: [
      { q: "I run a garden café in Pa Phai. How often should the café's air conditioning be cleaned?", a: "More often than a home, because the unit runs continuously during opening hours, the frequently opened door lets outside dust reach the filters easily, and the outdoor unit in the garden also collects leaves. I check both sides and tell you the right interval, and I can schedule the work at a time that doesn't disrupt your business." },
      { q: "I live in Pa Phai. Do I need to book in advance?", a: "Booking two to three days ahead gives you the widest choice of dates and times. Prices in Pa Phai are the same as everywhere in the service area, with no extra travel fee." },
    ],
  },
  "nong-yaeng": {
    name: "Nong Yaeng",
    full: "Nong Yaeng, San Sai",
    note: "A foothill sub-district on the east side of San Sai, bordering Doi Saket, mainly farmland",
    landmarks: ["Wat Phra Bat Tin Nok", "Wat Rong Meng", "Wat Thung Khao Tok"],
    lead: "Nong Yaeng lies north-east of the San Sai District Office, bordering Doi Saket district. It is flat foothill land with no major highway running through it; access is by secondary roads via Mueang Len or San Pa Pao. Most residents grow rice, soybeans, mangoes, longan and rubber. The sub-district has Wat Phra Bat Tin Nok on a hill in front of the Mae Kuang Dam, and Wat Rong Meng, which has a community museum.",
    points: [
      { t: "Some parts of the sub-district have intermittent voltage drops", d: "Electricity reaches every part of the sub-district, but in some spots the supply is insufficient and voltage drops happen from time to time. An air conditioner that starts its compressor during a voltage drop works hard and may cut out often. If your unit shuts off by itself or cools unevenly, I also measure the voltage at the unit's connection point to tell whether the problem is in the unit or in the power supply." },
      { t: "Homes next to farmland: dust and smoke come with the seasons", d: "Most of the sub-district is rice fields and orchards. Homes next to the fields get soil dust during field preparation and smoke from burning branches and weeds in the dry season, so filters clog faster than usual at those times. I recommend a full clean before the smoke season, and washing the filters yourself during the season." },
      { t: "In the rainy season some spots flood because drainage can't keep up", d: "In the rainy season, some parts of the sub-district get standing water because drainage is inadequate. Outdoor units on the ground in these spots should have their base raised above the standing water, and the unit's drain pipe should discharge where water cannot flow back. Let me know where your units are in advance and I will assess what should be adjusted." },
    ],
    faqs: [
      { q: "My air conditioner cuts out often. Is it the voltage drops or the unit itself?", a: "It can be either, so it has to be measured before drawing a conclusion. I measure the voltage at the unit's connection point while it is running, and check the coils and internal system at the same time. If the cause is the home's electrical system, I tell you honestly. If it is the unit, I tell you the repairs needed and the price before starting work." },
      { q: "My home in Nong Yaeng is far from the district centre. Is there an extra travel fee?", a: "No. The price is the same as everywhere in the service area. I always inspect the unit and tell you the total before starting work. If you book two to three days ahead, you will have more choice of convenient dates and times in Nong Yaeng." },
    ],
  },
  "mueang-len": {
    name: "Mueang Len",
    full: "Mueang Len, San Sai",
    note: "A small San Sai sub-district of older communities and rice fields, between San Na Meng and Nong Yaeng",
    landmarks: ["Wat Mueang Len", "Wat Hua Fai", "Wat Mueang Wa"],
    lead: "Mueang Len is a small sub-district of San Sai district, north of San Na Meng and bordering Nong Yaeng to the east. It is made up of older villages such as Ban Mueang Len, Ban Mueang Wa, Ban Hua Fai and Ban Nong Kon Khru, each with an old community temple, including Wat Hua Fai and Wat Mueang Len, whose principal Buddha image in the vihara is a reclining Buddha. Irrigation channels carrying water to the rice fields run through the communities.",
    points: [
      { t: "Outdoor units under trees collect dry leaves all year", d: "In homes where the outdoor unit sits in the yard or beside the house under trees, dry leaves pack into the fins and grille until heat dissipation drops. This makes the unit cool slowly even when the indoor coil isn't very dirty. I open up and check the outdoor unit every time I come to clean, and let you know if the unit's position should be changed." },
      { t: "Rice fields right next to the village: dust comes with the seasons", d: "Irrigation channels feeding the rice fields run through the communities here. Homes at the edge of the fields get soil dust during field preparation and smoke haze in the dry season, so filters clog faster at those times than in other months. I recommend a full clean before the smoke season, and washing the filters yourself during the season." },
      { t: "For units in use for many years, I first assess whether cleaning is worthwhile", d: "For homes that have used the same air conditioner for a long time, I check the coils, pipes and refrigerant pressure and show you before starting work. If cleaning will get the unit working normally again, that's what I do. But if the repair cost isn't worth it given the unit's age, I tell you honestly and offer options for you to consider." },
    ],
    faqs: [
      { q: "I have one air conditioner and live in Mueang Len. Can I book a cleaning?", a: `Yes. A single unit is ${p.wash.std} THB, with no extra travel fee. I inspect the unit and tell you the total before starting work. If the same home has three or more units, the price is ${p.wash.stdBulk} THB per unit.` },
      { q: "My old air conditioner is cooling more slowly. Should I have it cleaned or replaced?", a: "I need to look at the unit first. Slow cooling usually comes from a clogged coil, and cleaning brings the cooling back. I check the refrigerant pressure and the coils and show you first. If cleaning should fix it, I recommend cleaning. If I find the repair cost isn't worth it given the unit's age, I tell you honestly before starting work." },
    ],
  },
  "mae-faek": {
    name: "Mae Faek",
    full: "Mae Faek, San Sai",
    note: "The northernmost sub-district of San Sai, on Chiang Mai–Phrao Road by the Ping River, with longan orchards and farmland",
    landmarks: ["Mae Faek Weir", "Wat Phra That Chom Kitti", "Chiang Mai–Phrao Road"],
    lead: "Mae Faek is the northernmost sub-district of San Sai district, with Chiang Mai–Phrao Road running through the middle. It is flat foothill land, with the Mae Faek irrigation canal running along the foothills on the east side and the Ping River forming the western boundary. At Ban Sahakon Nikhom Hua Ngan are the Mae Faek Weir on the Ping River and the Sinthukit Preecha Friendship Bridge across to Mae Taeng district. Longan orchards and farmland surround the villages, and Wat Phra That Chom Kitti stands on a hill at Ban Phra That.",
    points: [
      { t: "Villages along the Ping River have had water enter homes", d: "In August 2022 the Ping River overflowed into homes at Ban Nong Ma Chap and into farmland in the sub-district. Outdoor units on the ground in villages on the river side should have their base raised above the level floodwater has reached. If a unit has been submerged, don't use it until the electrical parts have been checked. Let me know in advance and I will check it during the same visit as the cleaning." },
      { t: "Homes in longan orchards: leaves fall onto the outdoor unit all year", d: "In homes in or next to longan orchards, dry leaves pack into the fins and grille of the outdoor unit standing outside, reducing heat dissipation and increasing power consumption. This is a separate issue from dirt on the indoor coil. I open up and check the outdoor unit every time I come to clean." },
      { t: "Next to foothills under forest-fire watch", d: "Mae Faek is one of the sub-districts where staff patrol for forest fires in the dry season, so homes on the foothill side take in more smoke and ash than usual at that time. I recommend a full clean before the smoke season, and during the season remove and wash the filters yourself every two to three weeks." },
    ],
    faqs: [
      { q: "My home in Mae Faek is far from the city. Is there an extra travel fee?", a: "No. The price is the same as everywhere in the service area. I always inspect the unit and tell you the total before starting work. If you book two to three days ahead, you will have more choice of convenient dates and times in Mae Faek." },
      { q: "The Ping River came into my home and the outdoor unit was half under water. Can I still use it?", a: "Possibly, but it must be checked before power is applied. Sediment and moisture left in the circuit board and wire terminals can cause further damage. I check the electrical parts, flush the sediment out of the fins, then test the unit. If any part needs replacing, I tell you what it is and the price before starting work." },
    ],
  },
  "mae-faek-mai": {
    name: "Mae Faek Mai",
    full: "Mae Faek Mai, San Sai",
    note: "The Chedi Mae Khrua area on Chiang Mai–Phrao Road, between the Ping River and the forested foothills",
    landmarks: ["Chedi Mae Khrua Market", "Wat Chedi Mae Khrua", "Chiang Mai–Phrao Road"],
    lead: "Mae Faek Mai lies within Chedi Mae Khrua Subdistrict Municipality, north of the Mae Jo area along Chiang Mai–Phrao Road. The west side of the sub-district is low-lying flat land where irrigation canals feed rice fields all the way to the Ping River, while the east side is a forest reserve on the hills bordering Doi Saket district. Chedi Mae Khrua Market on Chiang Mai–Phrao Road is open every day, and there are several restaurants and garden cafés along the secondary roads.",
    points: [
      { t: "The east side borders a forest reserve with forest fires every year", d: "The forest on the hills east of the sub-district has recurring forest fires every year, and in 2022 a fire burned for several nights not far from Ban Phra That Chedi. Homes on this side therefore take in more ash and smoke than usual in the dry season. I recommend a full clean before the season, and during the season remove and wash the filters yourself every two to three weeks." },
      { t: "Restaurants and garden cafés: units work harder than at home", d: "In restaurants and cafés with air-conditioned rooms, the units usually run continuously throughout opening hours, and cooking-oil vapour from the kitchen plus dust from the frequently opened door reach the filters. The outdoor unit in the garden also collects leaves. I check both sides and tell you the right cleaning interval, and I can schedule the work at a time that doesn't disrupt your business." },
      { t: "Shops around Chedi Mae Khrua Market get dust from the main road", d: "Chedi Mae Khrua Market sits on Chiang Mai–Phrao Road, which has traffic all day, so commercial buildings along this stretch collect traffic dust on their filters faster than homes in the villages further in. The two shouldn't follow the same cleaning schedule. I check the filters on site and let you know." },
    ],
    faqs: [
      { q: "I have a restaurant near Chedi Mae Khrua. Can all the air conditioners be cleaned in one day?", a: `Yes. If you have three or more units, the price is ${p.wash.stdBulk} THB per unit, instead of the usual ${p.wash.std} THB per unit. Let me know the number and size of units and what time suits the restaurant, and I will give you the total and the time needed before the appointment, and order the work to disrupt your business as little as possible.` },
      { q: "I live in Mae Faek Mai. How many days ahead should I book?", a: "Booking two to three days ahead gives you the widest choice of dates and times. Prices in Mae Faek Mai are the same as everywhere in the service area, with no extra travel fee." },
    ],
  },
  "san-phak-wan": {
    name: "San Phak Wan",
    full: "San Phak Wan, Hang Dong",
    note: "A sub-district in the north of Hang Dong, continuous with the city, dense with housing estates",
    landmarks: ["Samoeng Intersection", "Kad Phak Wan", "Outer Ring Road (Route 121)"],
    lead: "San Phak Wan is a sub-district in the north of Hang Dong district that merges with Chiang Mai city so closely that they are almost one area, and it is the most populous sub-district in the district. Outer Ring Road 121 cuts through it, and the Samoeng intersection is its main, heavily congested junction. Much of the former farmland has become housing estates, such as Wang Tan and Khwan Wiang, while the original villages still have mango and longan orchards among them, and the Mae Kha canal and irrigation canals flow through.",
    points: [
      { t: "Large housing estates: every unit cleaned in one visit", d: `Most homes in San Phak Wan's housing estates have several air conditioners each, which qualifies for the price for three or more units: ${p.wash.stdBulk} THB per unit. Let me know the estate name, number of units and sizes in advance, and I will give you the total and the time needed before the appointment. I can also send my vehicle plate to the guardhouse in advance.` },
      { t: "Homes near the Samoeng intersection and on the ring road get traffic dust all day", d: "The Samoeng intersection is a congested junction and the Outer Ring Road has traffic all day, so homes and shophouses facing these roads collect dust on their filters faster than homes deeper inside the estates. The two shouldn't follow the same cleaning schedule. I check the filters on site and let you know." },
      { t: "Homes in the original villages: outdoor units collect mango and longan leaves", d: "The sub-district's original villages still have mango and longan orchards among them. In homes with these trees around them, dry leaves pack into the fins of the outdoor unit standing outside until heat dissipation drops, which is a separate issue from dirt on the indoor coil. I open up and check the outdoor unit every time I come to clean." },
    ],
    faqs: [
      { q: "I live in a housing estate with a guardhouse. What should I prepare before the technician comes?", a: "Just give me the estate name and house number when you book. If the estate requires vehicle registration or exchanging an ID card at the gate, I send the vehicle plate and the technician's name in advance. And if the estate sets hours when technicians may work, tell me and I will schedule to fit those conditions." },
      { q: "I live in San Phak Wan. Is there an extra travel fee?", a: "No. The price is the same as everywhere in the service area. I always inspect the unit and tell you the total before starting work. If you book two to three days ahead, you will have more choice of convenient dates and times in San Phak Wan." },
    ],
  },
  "ban-waen": {
    name: "Ban Waen",
    full: "Ban Waen, Hang Dong",
    note: "A sub-district on Chiang Mai–Hot Road around Kad Farang, with old temples and housing estates",
    landmarks: ["Kad Farang Village", "Wat Khong Khao", "Chiang Mai–Hot Road (Route 108)"],
    lead: "Ban Waen lies north of central Hang Dong, with Chiang Mai–Hot Road 108 running through the middle, and is home to Kad Farang Village and Lanna International School. The sub-district has several old temples, including Wat Khong Khao, Wat Thao Bun Rueang and Wat Chang Kham. Older villages such as Ban Chang Kham, Ban Pa Mak and Ban Ton Hueat sit alongside housing estates lining Route 108, and the Mae Ta Chang stream, flowing down from the hills on the Samoeng side, runs through the area.",
    points: [
      { t: "The Mae Ta Chang stream has flooded homes several times", d: "Water from the Mae Ta Chang stream flooded Route 108 at Ban Chang Kham in front of Kad Farang in 2022, and in September 2024 it flooded more than a hundred homes in the sub-district. Outdoor units on the ground in this area should have their base raised above the level floodwater has reached. If a unit has been submerged, don't use it until the electrical parts have been checked. Please let me know in advance." },
      { t: "Homes on Route 108 get more traffic dust than homes down the lanes", d: "Chiang Mai–Hot Road is the main route south, with traffic all day, so commercial buildings and homes along the road near Kad Farang collect dust on their filters faster than homes down the lanes or inside the estates. The cleaning interval should depend on where the home is. I check the filters on site and tell you the right interval." },
      { t: "Housing estates along Route 108 often have several units per home", d: `Most detached houses in estates around Kad Farang and along Route 108 have several air conditioners each, which qualifies for the price for three or more units: ${p.wash.stdBulk} THB per unit. Let me know the number and size of units in advance, and I will give you the total and the time needed before the appointment.` },
    ],
    faqs: [
      { q: "Water from the Mae Ta Chang flooded my home up to the outdoor unit. What should I do before turning on the air conditioner?", a: "Don't turn the unit on until it has been checked. Silt and moisture left in the circuit board and wire terminals can cause further damage when power is applied. I check the electrical parts, flush the silt out of the fins, then test the unit. If a part needs replacing or the unit's base needs raising, I tell you the cost before starting work." },
      { q: "I live in Ban Waen. How many days ahead should I book?", a: "Booking two to three days ahead gives you the widest choice of dates and times. Prices in Ban Waen are the same as everywhere in the service area, with no extra travel fee." },
    ],
  },
  "nong-khwai": {
    name: "Nong Khwai",
    full: "Nong Khwai, Hang Dong",
    note: "A Hang Dong sub-district at the foot of Doi Suthep, around the Night Safari and the Ton Kwen intersection",
    landmarks: ["Chiang Mai Night Safari", "Wat Ton Kwen (Wat Inthrawat)", "Ton Kwen Intersection"],
    lead: "Nong Khwai lies at the foot of Doi Suthep, south-west of the city, and is home to the Chiang Mai Night Safari and Wat Ton Kwen. Canal Road ends at the Ton Kwen intersection in this sub-district, Hang Dong–Samoeng Road crosses it from east to west, and Route 108 runs along its east side. Most of the land was once rice fields; today some of it has become housing estates, and there is more than one international school in the sub-district.",
    points: [
      { t: "At the foot of Doi Suthep, outdoor units collect leaves and seasonal smoke", d: "The west side of the sub-district borders the foothills of Doi Suthep. In homes with large trees around them, dry leaves pack into the fins of the outdoor unit until heat dissipation drops, and in the dry season the filters take in more smoke than usual. I recommend a full clean between January and early February so you enter the smoke season with a clean coil." },
      { t: "Rice fields turned into housing estates, with construction sites still in the area", d: "The sub-district's rice fields are gradually becoming housing estates. Homes next to a site or on a road used by material trucks collect construction dust on their filters much faster than usual. While the site next door is active, have the units cleaned more often for the time being, then return to the normal interval once the site closes." },
      { t: "Homes on Canal Road and Hang Dong–Samoeng Road get traffic dust", d: "Canal Road carries heavy traffic and ends at the Ton Kwen intersection, while Hang Dong–Samoeng Road runs through the sub-district's communities. Homes facing these two roads therefore collect dust on their filters faster than homes deeper inside the estates, and the two shouldn't follow the same cleaning schedule." },
    ],
    faqs: [
      { q: "My home in an estate near the Night Safari has air conditioners of several sizes. How is it priced?", a: `For ${btu.washStd} BTU units, three or more are ${p.wash.stdBulk} THB per unit. For ${btu.washBig} BTU units, two or more are ${p.wash.bigBulk} THB per unit. Let me know the size of each unit in advance and I will give you the total before the appointment, and I always inspect the units on site before starting.` },
      { q: "I live in Nong Khwai. Is there an extra travel fee?", a: "No. The price is the same as everywhere in the service area. I always inspect the unit and tell you the total before starting work. If you book two to three days ahead, you will have more choice of convenient dates and times in Nong Khwai." },
    ],
  },
};
