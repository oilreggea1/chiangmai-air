import type { IntlAreaText } from "@/lib/content-types";
import { p } from "@/lib/site";

export const part: Record<string, IntlAreaText> = {
  "chang-moi": {
    name: "Chang Moi",
    full: "Chang Moi, Mueang Chiang Mai",
    note: "An old trading district outside the moat, mostly shophouses",
    landmarks: ["Chang Moi Road", "Warorot Market", "Tha Phae Road"],
    lead: "Chang Moi is a sub-district just outside the old city moat to the northeast. It covers the old trading district from Chang Moi Road through to the Warorot Market area, and most buildings are shophouses used as both a shop and a home under one roof.",
    points: [
      { t: "Trading-district shophouses: shop downstairs, home upstairs", d: `Buildings like these usually have air conditioners on both the ground floor and the upper floors, but their condition differs a lot: the ground floor keeps its doors open to customers all day, while the upper floors are far more closed up. If you have three or more units cleaned together, it is ${p.wash.stdBulk} THB per unit, and I finish everything in one visit, so there is no need to book several times.` },
      { t: "Parking is hard around the market, so book a morning slot", d: "The roads around the market are busy with delivery vehicles from late morning into the afternoon, and many stretches have no parking. An early-morning appointment makes it much easier to carry equipment in and out. Let me know in advance whether the building has parking, so I can plan the timing and the load-in properly." },
      { t: "Condensers in the gap behind the buildings", d: "Rows of joined shophouses often put the outdoor units in a narrow gap behind the building with little airflow. The hot air circulates in that gap and gets drawn back into the unit. With a unit like this, cleaning only the indoor coil usually does not improve the cooling; the outdoor coil needs cleaning as well." },
    ],
    faqs: [
      { q: "Do I have to close my market shophouse for an aircon clean?", a: "No need to close. I cover the work area and use a catch bag for the rinse water, which stops it from splashing. It takes about forty minutes to an hour per unit. Tell me your quiet hours in advance and I will schedule the job for then, starting with the unit that affects your sales the least." },
      { q: "Should the shop units downstairs and the units in the home upstairs be cleaned together?", a: `Cleaning them together is better value, because from three units it is ${p.wash.stdBulk} THB per unit and I finish everything in one visit. The next clean does not need to be at the same time, though: the ground floor, with its doors open all day, clearly comes due sooner than the upper floors.` },
    ],
  },
  "pa-tan": {
    name: "Pa Tan",
    full: "Pa Tan, Mueang Chiang Mai",
    note: "The northern part of the city municipality, between the moat and the ring road",
    landmarks: ["Chotana Road", "Pa Tan Market", "Chiang Mai 700th Anniversary Road"],
    lead: "Pa Tan is a sub-district in the northern part of Chiang Mai City Municipality, between the old city moat and the ring road. It has homes along side lanes, commercial buildings on the main roads, and a growing number of dormitories and condominium buildings.",
    points: [
      { t: "Homes in the lanes and buildings on the main road do not get equally dirty", d: "Buildings on the main roads take in tyre dust and exhaust soot all day, unlike homes deep in a lane, which can clearly go longer between cleans. So the cleaning interval is better judged by where the building is than by the calendar. I check the filters on site and let you know." },
      { t: "Municipal lanes are narrow, so plan for parking", d: "Many lanes in this sub-district are only wide enough for one car at a time, and residents' cars are already parked along the side. Let me know in advance whether a vehicle can reach your door, so I can pack the equipment to carry in on one trip and allow enough time in the schedule." },
      { t: "A single-owner dormitory can be done in one visit", d: `A dormitory with many rooms qualifies for the three-units-or-more rate of ${p.wash.stdBulk} THB per unit, and I finish everything in one visit, with no need to spread the work over several days and disturb tenants. Tell me the number of rooms and the times that suit you in advance, and I will give you the total before the appointment.` },
    ],
    faqs: [
      { q: "My home is on a main road. How often should I clean the aircon?", a: "More often than homes in the lanes, especially rooms facing the road, because tyre dust and exhaust soot settle on the filters constantly. But the right interval depends more on each home's surroundings than on a number of months, since two homes in the same sub-district can differ a lot. I check the filters and let you know." },
      { q: "I own a dormitory in Pa Tan. How is a whole-building clean priced?", a: `From three units it is ${p.wash.stdBulk} THB per unit, instead of the usual ${p.wash.std} THB per unit. Tell me the number of rooms and the times that suit you in advance. I finish the job in one visit so it does not have to be spread over several days, and I let you know the total and the time needed before the appointment.` },
    ],
  },
  "san-phi-suea": {
    name: "San Phi Suea",
    full: "San Phi Suea, Mueang Chiang Mai",
    note: "The northernmost sub-district of Mueang Chiang Mai, with both farmland and housing estates",
    landmarks: ["Chiang Mai 700th Anniversary Road", "Chotana Road", "San Phi Suea farmland"],
    lead: "San Phi Suea is the northernmost sub-district of Mueang Chiang Mai district. Much of it is still farmland, alongside housing estates that have gradually appeared along the main roads, so the same sub-district has both homes surrounded by fields and homes in the middle of an estate.",
    points: [
      { t: "Homes next to fields take in more dust than homes inside an estate", d: "Homes on the edge of farmland get soil dust when fields are being prepared and soot when crop residue is being dealt with, unlike homes deep inside an estate, which are sheltered by other houses. These two groups should not be on the same cleaning schedule. I check the filters and let you know." },
      { t: "Estate homes have several units, so cleaning them together is better value", d: `Homes in the estates here usually have three or more units each, which qualifies for ${p.wash.stdBulk} THB per unit, and every unit is cleaned in one visit. Tell me the number and size of the units in advance, and I will give you the total and the time needed before the appointment.` },
      { t: "New construction sites are still active in the area", d: "New project phases keep opening in this sub-district. Homes next to a site, or on roads used by trucks carrying building materials, get construction dust on their filters much faster than normal. While the site next door is working, clean more often for a while, then go back to your normal interval once the site closes." },
    ],
    faqs: [
      { q: "My home is next to fields. Should I clean the aircon more often than homes inside the estate?", a: "Yes. Homes on the edge of farmland get soil dust when fields are being prepared and soot when crop residue is being dealt with, while homes inside the estate are sheltered by other houses and get less. The cleaning interval should not be the same. I check the filters on site and tell you how often is appropriate." },
      { q: "There is a construction site next door. Do I need to do anything special?", a: "While the site next door is working, clean more often for a while. Construction dust clogs filters much faster than ordinary dust, and if it is left until the filter is blocked, it reaches the coil fins, which are harder to clean. Once the site closes, you can go back to your normal interval." },
    ],
  },
  "san-pu-loei": {
    name: "San Pu Loei",
    full: "San Pu Loei, Doi Saket",
    note: "The Doi Saket sub-district next to the city, with the district's densest housing estates",
    landmarks: ["Chiang Mai–Doi Saket Road (Route 118)", "San Pu Loei Market", "Chiang Mai 700th Anniversary Road"],
    lead: "San Pu Loei is the sub-district of Doi Saket closest to the city, and the Chiang Mai–Doi Saket road runs through it. That is why it has the densest concentration of housing estates and dormitories in the district, while older communities remain further in.",
    points: [
      { t: "Dense housing estates, several units per home", d: `Homes in the estates here usually have three to four units each, which qualifies for ${p.wash.stdBulk} THB per unit, and every unit is cleaned in one visit. Tell me the number and size of the units in advance, and I will give you the total and the time needed before the appointment.` },
      { t: "Townhouses put the outdoor unit in a narrow side gap", d: "In many townhouse projects the gap between the house and the fence is less than a metre wide, so the hot air blown out circulates in that gap and gets drawn back into the unit. With units like this, cleaning only the indoor coil usually does not improve the cooling, so I clean the outdoor coil as well every time." },
      { t: "It is on a route I travel regularly, so scheduling is more flexible", d: "San Pu Loei is on the Chiang Mai–Doi Saket road, a route I use often, so I can schedule more flexibly than for sub-districts at the far end of my routes. If you need an urgent same-day appointment, just ask. I will tell you honestly whether I have a free slot, and I only confirm slots I can actually make." },
    ],
    faqs: [
      { q: "I live on a housing estate in San Pu Loei. How is a whole-house clean priced?", a: `From three units it is ${p.wash.stdBulk} THB per unit, instead of the usual ${p.wash.std} THB per unit. Tell me the number and size of the units in advance, and I will let you know the total and the time needed before the appointment. I finish everything in one visit, so there is no need to book several times.` },
      { q: "I need an urgent slot today. Is that possible?", a: "Just ask. San Pu Loei is on a route I use often, so there is a better chance of fitting you in than in sub-districts at the far end of my routes. I will tell you honestly whether I have a free slot, and if not, the earliest day I can come. I only confirm slots I can actually make." },
    ],
  },
  "talat-yai": {
    name: "Talat Yai",
    full: "Talat Yai, Doi Saket",
    note: "A Doi Saket sub-district with scattered homes and open land",
    landmarks: ["Doi Saket District Office", "Chiang Mai–Doi Saket Road (Route 118)", "Doi Saket Market"],
    lead: "Talat Yai is a sub-district of Doi Saket with homes in older communities, farmland, and newly built houses belonging to people who have moved out of the city. It is fairly spread out, and many homes are some way from the main road.",
    points: [
      { t: "New self-built homes: no two units are in the same place", d: "Homes that owners designed themselves have no standard spot for the outdoor unit the way estate houses do. Some have it behind the house, some on the roof terrace or mounted high on a wall. Let me know in advance where the unit is and roughly how high, so I can bring the right ladder and enough hose for the actual job." },
      { t: "Open land around the house: wind blows dust into the outdoor unit", d: "Homes in open surroundings get more soil dust and grass clippings blown into the outdoor unit's grille than homes with solid fences or other houses around them. This debris packs into the fins and reduces heat dissipation. I check the outdoor unit every time I come to clean, and I can tell you whether its current position is suitable or it should be moved." },
      { t: "Booking ahead gets you a more certain time", d: "Homes in this sub-district are more scattered and further apart than in the city. I take jobs here as usual and charge no travel fee, but if you can book ahead I will schedule you for when I am already working in the Doi Saket area, which gives you a more certain time than a last-minute booking." },
    ],
    faqs: [
      { q: "I live in Talat Yai, far from the city. Is there a travel fee?", a: "No extra charge. The price I quote is the price you pay. Talat Yai is within the area I normally serve. It is just that if you can book ahead, I will schedule you for when I am already working in the Doi Saket area, which gives you a more certain time than a last-minute booking." },
      { q: "My house is in open land. Where should the outdoor unit go?", a: "Avoid spots where the wind blows soil dust and grass straight in, and leave clearance around the unit so air can flow in and out. If it has to be in the open, a windbreak panel on the side the dust comes from helps. I look at the spot on site and can tell you whether it should be moved, or whether cleaning it more often is enough." },
    ],
  },
  "mae-khue": {
    name: "Mae Khue",
    full: "Mae Khue, Doi Saket",
    note: "The sub-district between San Pu Loei and Doi Saket town",
    landmarks: ["Chiang Mai–Doi Saket Road (Route 118)", "Wat Mae Khue", "Mae Khue community"],
    lead: "Mae Khue is a sub-district of Doi Saket between San Pu Loei and the district town. It has housing estates along the main road and older communities and farmland further in, so the jobs within this one sub-district are clearly different.",
    points: [
      { t: "Homes on Route 118 take in more traffic dust than homes further in", d: "The Chiang Mai–Doi Saket road carries heavy traffic all day, so homes along it get tyre dust and exhaust soot on their filters faster than homes further in, especially rooms facing the road. I check room by room and let you know which rooms need cleaning more often." },
      { t: "Narrow lanes in the older communities, so plan for parking", d: "Many lanes in the older villages are only wide enough for one car at a time and have no shoulder to park on. Let me know in advance whether a vehicle can reach your door, so I can pack the equipment to carry in on one trip and allow enough time in the schedule without affecting the next home's appointment." },
      { t: "On my regular route, so I can combine jobs with your neighbours", d: `Mae Khue is on a route I use often. If your neighbours want their units cleaned too, book the same day. I count it as one job and charge ${p.wash.stdBulk} THB per unit from three units, even though they are separate homes.` },
    ],
    faqs: [
      { q: "My home is on Route 118. How often should I clean the aircon?", a: "More often than homes further in, especially rooms facing the road, because tyre dust and exhaust soot settle on the filters constantly. Rooms at the back of the house can usually go longer. I check the filters room by room and let you know, so you do not clean more often than necessary." },
      { q: "If my neighbours join in on the same day, do we get the multi-unit price?", a: `Yes. I count it as one job even though they are separate homes, as long as it is the same day and the homes are close together. From three units it is ${p.wash.stdBulk} THB per unit, because I am coming to the area on one trip either way.` },
    ],
  },
  "samran-rat": {
    name: "Samran Rat",
    full: "Samran Rat, Doi Saket",
    note: "A small Doi Saket sub-district of older communities mixed with farmland",
    landmarks: ["Wat Samran Rat", "Doi Saket–Samran Rat road", "Samran Rat farmland"],
    lead: "Samran Rat is a small sub-district of Doi Saket. It is mostly homes in older communities interspersed with farmland, with both single-storey and two-storey houses.",
    points: [
      { t: "Traditional homes where the aircon was added after the house was built", d: "In houses built before air conditioning was added, the refrigerant pipes often run around the outside walls and the outdoor unit sits wherever there was room. Pipe insulation outside the building is exposed to sun and rain and can become brittle and crack. I check the pipe run every time and tell you where it should be re-insulated." },
      { t: "The smoke season hits harder than in the city", d: "Sub-districts next to farmland get more smoke from February to April than the city does. Filters that trap the soot turn black faster than usual, so homes here should be cleaned before the season starts, not in the middle of it, when queues are full across the province and the units have already been working hard." },
      { t: "A single home often has fewer than three units", d: `If your home has one or two units and you would like the ${p.wash.stdBulk} THB per unit rate, ask your neighbours to book the same day. I count it as one job, because I am coming to the area on one trip either way.` },
    ],
    faqs: [
      { q: "The insulation on the aircon pipes outside the house is cracked. Does it need fixing?", a: "It should be fixed. Brittle, cracked insulation causes water to drip along the pipes and reduces efficiency. But it is not a big job and the unit does not have to be removed. I check the pipe run every time I come to clean, and tell you where it should be re-insulated and how long it takes, before you decide." },
      { q: "My home has only one aircon. How can I get better value?", a: `Ask your neighbours to book the same day. I count it as one job even though they are separate homes. From three units it is ${p.wash.stdBulk} THB per unit, instead of the usual ${p.wash.std} THB per unit, because I am coming to the area on one trip either way.` },
    ],
  },
  "mae-hoi-ngoen": {
    name: "Mae Hoi Ngoen",
    full: "Mae Hoi Ngoen, Doi Saket",
    note: "An inner sub-district of Doi Saket surrounded by farmland",
    landmarks: ["Wat Mae Hoi Ngoen", "Mae Hoi Ngoen farmland", "Doi Saket–Mae Hoi Ngoen road"],
    lead: "Mae Hoi Ngoen is an inner sub-district of Doi Saket that has kept much of its rural character. Homes are grouped in villages surrounded by farmland, and many of the local roads are community roads only wide enough for one car at a time.",
    points: [
      { t: "In most jobs here, the problem is the outdoor unit", d: "Homes surrounded by farmland get soil dust and plant debris blown into the outdoor unit's grille all year round. A unit cleaned only indoors will still not cool fully. I clean the outdoor coil as well every time, at no extra charge, because it is part of the cleaning job." },
      { t: "Filters turn black faster when crop residue is being dealt with", d: "After harvest, crop residue is dealt with in the surrounding area, so homes next to the fields get more soot indoors than homes deep in a lane. It is better to have the cleaning done before this period rather than wait until the middle of the dust season, when queues are full across the province." },
      { t: "At the far end of my routes, so book ahead", d: "This sub-district is further from my base than the sub-districts along the main road. I still take jobs here as usual and charge no travel fee, but if you can book ahead I will schedule you for when I am already working in this area, which gives you a more certain time than a last-minute booking." },
    ],
    faqs: [
      { q: "Does an aircon clean in Mae Hoi Ngoen include the outdoor unit?", a: "Yes, at no extra charge, because it is part of the cleaning job. For homes surrounded by farmland like those here, most cooling problems come from the outdoor unit, which takes in soil dust and plant debris all year round. If only the indoor unit is cleaned, it will still not cool fully." },
      { q: "I am far out. Will I have to wait long for a slot?", a: "It depends on the time of year. If you can book ahead, I will schedule you for when I am already working in the Doi Saket area, which gives you a more certain time. From February to April, queues are full across the province, so book further ahead than usual. I will tell you honestly the earliest day I can come." },
    ],
  },
  "hang-dong": {
    name: "Hang Dong",
    full: "Hang Dong district",
    note: "Northern Hang Dong next to the city, along the Chiang Mai–Hot road",
    landmarks: ["Kad Farang", "Chiang Mai–Hot Road (Route 108)", "Outer Ring Road (Route 121)"],
    lead: "I serve the northern part of Hang Dong next to the city: San Phak Wan, Ban Waen, Nong Khwai and Hang Dong. This area lies along the Chiang Mai–Hot road, Route 108, and the Outer Ring Road, Route 121, runs through it, so housing estates keep spreading down from the Mae Hia area.",
    points: [
      { t: "Estates along Route 108 usually have several units per home", d: `Detached houses in the estates around San Phak Wan, Ban Waen and Nong Khwai mostly have several air conditioners each, which qualifies for the three-units-or-more rate of ${p.wash.stdBulk} THB per unit. Tell me the number and size of the units in advance, and I will give you the total and the time needed before the appointment.` },
      { t: "Homes on the main roads take in more traffic dust than homes in the lanes", d: "Homes and shops along Route 108 and the Outer Ring Road take in traffic dust all day, so their filters and coils come due for cleaning sooner than homes deep inside an estate. If you are not sure whether it is time, send a photo of the filter on LINE and I will assess it first." },
      { t: "I serve four sub-districts on the northern side next to the city", d: "In Hang Dong district I serve San Phak Wan, Ban Waen, Nong Khwai and Hang Dong, which adjoin the city of Chiang Mai. The price is the same as in other areas, with no travel fee. If you let me know two to three days ahead, you will have more choice of day and time." },
    ],
    faqs: [
      { q: "I live in Hang Dong. Is there a travel fee?", a: "No. The price is the same in every part of my service area. I always check the units and tell you the total before starting work. If you let me know two to three days ahead, you will have more choice of day and time." },
      { q: "Which sub-districts of Hang Dong do you serve?", a: "I serve the northern sub-districts next to the city: San Phak Wan, Ban Waen, Nong Khwai and Hang Dong. If your home is in another sub-district of Hang Dong, send me your location and I will tell you honestly whether I can come." },
    ],
  },
  "san-sai": {
    name: "San Sai",
    full: "San Sai district",
    note: "The district north of the city, served in full, including the Maejo area",
    landmarks: ["Maejo University", "Maejo Market", "Chiang Mai–Phrao Road (Route 1001)"],
    lead: "San Sai stretches from the edge of the city northwards along the Chiang Mai–Phrao road, Route 1001. The southern sub-districts, such as San Phra Net and San Na Meng, are housing-estate areas continuing on from the city. Nong Han is home to Maejo University, so it is dense with dormitories and apartments, while the northern sub-districts, such as Mae Faek and Mueang Len, are still mainly farmland.",
    points: [
      { t: "Dormitories and apartments around Maejo: many units in one go", d: `Residential buildings around Maejo University often have a large number of air conditioners in one building. Jobs like this qualify for the three-units-or-more rate of ${p.wash.stdBulk} THB per unit, and are best booked when the rooms are empty so the work can run continuously. Tell me the number of rooms and the unit sizes in advance, and I will give you the total and the number of days needed before the appointment.` },
      { t: "Northern sub-districts next to farmland get seasonal dust", d: "Mae Faek, Mae Faek Mai, Mueang Len and Pa Phai are still mainly farmland. Homes next to the fields get a lot of soil dust and plant debris when fields are prepared and at harvest, and smoke and dust in the dry season, which is clearly different from the housing estates in the south of the district. These two zones should not be on the same cleaning schedule." },
      { t: "Every sub-district served, from San Phra Net to Mae Faek", d: "From San Phra Net next to the city up to the Maejo area and Mae Faek in the north, I serve every sub-district of the district at the same price, with no travel fee. For homes in the north of the district, letting me know two to three days ahead gives you more choice of day and time." },
    ],
    faqs: [
      { q: "I have a dormitory near Maejo. Can you clean the whole building, and how is it priced?", a: `Yes. From three units it is ${p.wash.stdBulk} THB per unit, instead of the usual ${p.wash.std} THB per unit. For a whole building I split the work by floor or by zone, whichever suits the tenants. Tell me the number of rooms and the unit sizes in advance, and I will give you the total and the number of days needed before the appointment.` },
      { q: "My home is in Mae Faek or Mueang Len, far from the city. Is there a travel fee?", a: "No. The price is the same in every part of my service area. I always check the units and tell you the total before starting work. If you let me know two to three days ahead, you will have more choice of day and time." },
    ],
  },
  "mae-on": {
    name: "Mae On",
    full: "Mae On district",
    note: "Lowland sub-districts on the eastern side, continuing on from San Kamphaeng",
    landmarks: ["San Kamphaeng Hot Springs", "Mueang On Cave", "San Kamphaeng–Mae On road"],
    lead: "Mae On lies east of San Kamphaeng district. I serve three lowland sub-districts continuing on from San Kamphaeng: On Nuea, On Klang and Ban Sahakon. Most homes are in older villages surrounded by orchards and farmland, while Ban Sahakon is on the route to San Kamphaeng Hot Springs and Mueang On Cave, with accommodation, restaurants and cafes all along the way.",
    points: [
      { t: "Homes in orchards and next to farmland: leaves and soil dust in the outdoor unit", d: "Where the outdoor unit sits outside under trees, dry leaves pack into the fins and grille, and when fields are being prepared, soil dust builds up as well. Both reduce heat dissipation and make the unit slow to cool. I check the outdoor unit every time I come to clean, and let you know if its position should be changed." },
      { t: "Haze in the dry season clogs filters faster than usual", d: "During the dry-season haze, filters take in noticeably more smoke and dust than in other months. I recommend a full clean before the season starts so the coils are clean from the outset, and during the season, remove and wash the filters yourself every two to three weeks." },
      { t: "Accommodation and restaurants on the hot springs route: many units in one visit", d: `For accommodation, restaurants and cafes with several air-conditioned rooms, booking three or more units at once is ${p.wash.stdBulk} THB per unit. Tell me the number of units and the times that suit you in advance, and I will arrange the order so the work runs continuously without disturbing your guests.` },
    ],
    faqs: [
      { q: "Which sub-districts of Mae On do you serve?", a: "I serve the three lowland sub-districts: On Nuea, On Klang and Ban Sahakon. The hill sub-districts, such as Huai Kaeo, Mae Tha and Tha Nuea, are not in my service area yet. If you are not sure whether your home is in the area, send me your location on LINE and I will tell you honestly." },
      { q: "I live in Mae On. Is there a travel fee?", a: "No. The price is the same in every part of my service area. I always check the units and tell you the total before starting work. If you let me know two to three days ahead, you will have more choice of day and time." },
    ],
  },
  "tha-sala": {
    name: "Tha Sala",
    full: "Tha Sala, Mueang Chiang Mai",
    note: "The eastern side of the city, around Don Chan, where the main roads meet",
    landmarks: ["Big C Don Chan", "Wat Si Bua Ngoen", "Chiang Mai Provincial Police"],
    lead: "Tha Sala is east of the city centre, on flat land used mainly for housing and commerce. Several main roads meet in this sub-district: the Superhighway, the Middle Ring Road, Mahidol Road, the new San Kamphaeng road (Route 1317) and the old road (Route 1006). Around Don Chan there are condominiums, housing estates and Big C Don Chan, while Ban Buak Khrok Luang and Ban Si Bua Ngoen are still older communities, each with its own village temple.",
    points: [
      { t: "Several major roads run through it, so rooms facing them get dirty faster", d: "The Superhighway, the Middle Ring Road and Route 1317 all run through this sub-district, so buildings and rooms facing these roads get more tyre dust and exhaust soot on their filters than rooms facing inwards, even within the same building. I check the filters and coils in each room and let you know the right cleaning interval." },
      { t: "Floodwater reached the Don Chan area in 2024", d: "When the Ping River overflowed its banks in October 2024, floodwater reached the Don Chan area, including the grounds of Wat Don Chan, which had never flooded before. Outdoor units standing at ground level are therefore the first thing to check before switching on after the water recedes. If you want the base raised, I assess it on site and tell you the cost before starting work." },
      { t: "Older communities, housing estates and condos in one sub-district", d: `Homes on the housing estates around Don Chan usually have several units each, which qualifies for the three-units-or-more rate of ${p.wash.stdBulk} THB per unit. Condo units usually have one aircon, and the condo juristic office has to be notified before I start work. Tell me what kind of home you have and how many units in advance, and I will bring the right equipment for the job and give you the total before the appointment.` },
    ],
    faqs: [
      { q: "Floodwater reached the outdoor unit of my home near Don Chan. What should I do before switching it on?", a: "Do not switch it on straight after the water goes down. Sediment and moisture left in the circuit board and wiring terminals of the outdoor unit can cause further damage when power is applied. I check the electrical parts, wash the sediment out of the fins and test the unit first. If any parts need replacing, I always tell you what they are and the price before starting work." },
      { q: "I live in Tha Sala. Is there a travel fee?", a: "No. The price is the same in every part of my service area. Tha Sala is easy to reach by both the new San Kamphaeng road (Route 1317) and the old road (Route 1006). I check the units and tell you the total before starting work, and cleaning comes with a 30-day warranty." },
    ],
  },
  "nong-hoi": {
    name: "Nong Hoi",
    full: "Nong Hoi, Mueang Chiang Mai",
    note: "A riverside sub-district on the east bank of the Ping, south of the city, dense with dormitories and housing estates",
    landmarks: ["Nong Hoi Market", "Nong Hoi Intersection", "Wat Si Bun Rueang"],
    lead: "Nong Hoi is south of the city centre on the east bank of the Ping River, which forms its boundary with Pa Daet. Mahidol Road and the Chiang Mai–Lamphun road cross at the Nong Hoi intersection. It is low-lying land crossed by several irrigation channels. Housing includes many private dormitories, National Housing Authority buildings, housing estates such as Palm Spring and Siriwattana Niwet, and older communities around Nong Hoi Market and Wat Si Bun Rueang.",
    points: [
      { t: "Low-lying land by the Ping, with a history of floods reaching the main roads", d: "When the Ping River overflowed in 2022, water flooded the Chiang Mai–Lamphun road near Nong Hoi Market, and in 2024 Mahidol Road had to be closed to traffic, with water reaching the Nong Hoi intersection. Outdoor units standing on the ground in this area should therefore be raised above the level of past floods. If your unit has been under water before, let me know in advance and I will check the outdoor unit's electrical parts as well during the same visit." },
      { t: "Many dormitories and rented rooms: owners often book several rooms at once", d: `Nong Hoi has private dormitories all over the sub-district, and most rooms have one aircon. Jobs like this qualify for the three-units-or-more rate of ${p.wash.stdBulk} THB per unit. I work floor by floor or in batches, whichever suits the tenants, so the whole building does not have to leave their rooms at the same time.` },
      { t: "Buildings on Mahidol Road and the Chiang Mai–Lamphun road take in traffic dust all day", d: "These two roads are main routes with traffic all day, so commercial buildings and dormitories right on the road get dust on their filters noticeably faster than homes deep in a lane. The cleaning interval is better judged by where the building is than by a number of months. I check the filters on site and let you know." },
    ],
    faqs: [
      { q: "I have a dormitory in Nong Hoi and all the tenants are still in. Can you clean one floor at a time?", a: `Yes. I work one floor or one group of rooms at a time, whichever suits the tenants, and the three-units-or-more rate of ${p.wash.stdBulk} THB per unit still applies, instead of the usual ${p.wash.std} THB per unit. Tell me the number of rooms and when each floor is free in advance, and I will arrange the order of work and give you the total before the appointment.` },
      { q: "Floodwater has reached the outdoor unit at my home in a riverside estate. Should I move it higher?", a: "It is worth considering. If past floods rose above where the outdoor unit sits, raising the base or moving it onto a wall bracket greatly reduces the risk. I survey the new mounting point and the extra pipe length needed, then tell you the full cost before you decide." },
    ],
  },
  "fa-ham": {
    name: "Fa Ham",
    full: "Fa Ham, Mueang Chiang Mai",
    note: "A riverside sub-district northeast of the city, around Central Chiang Mai, dense with dormitories and condos",
    landmarks: ["Central Chiang Mai shopping centre", "Theppanya Hospital", "Mee Chok Market"],
    lead: "Fa Ham is northeast of the city centre, a small sub-district bounded by the Ping River to the west and the Khao River to the east. The Superhighway runs through the middle and crosses the Chiang Mai–Doi Saket road where Central Chiang Mai shopping centre stands. The area includes Theppanya Hospital, Mee Chok Market, and many dormitories, condos and rental houses, with new buildings going up all the time, while Ban Tha Kradat and Ban Langka are still older riverside communities.",
    points: [
      { t: "Between the Ping and the Khao rivers: low lanes flood regularly", d: "Fa Ham was on the list of areas under watch for Ping River flooding in 2024, and it has low-lying lanes with recurring standing-water problems. Outdoor units on the ground in these lanes should be raised above the standing-water level, and the drain pipe should be checked so water does not flow back. Tell me where your unit is in advance and I will assess what should be fixed." },
      { t: "Construction sites and the Superhighway clog filters fast", d: "New buildings keep going up in this sub-district, and the Superhighway carries traffic all day. Rooms next to a site or facing the road take in more cement dust and traffic dust than rooms further in. While the site next door is working, clean more often for a while, then go back to your normal interval once the site closes." },
      { t: "Dormitories, condos and rental houses need different approaches", d: `Most condo units require notifying the juristic office before I start work, while dormitories and rental houses with a single owner often have several rooms cleaned at once, which qualifies for the three-units-or-more rate of ${p.wash.stdBulk} THB per unit. Tell me the type of building, the floor and the number of units in advance, and I will prepare the equipment and give you the total before the appointment.` },
    ],
    faqs: [
      { q: "My condo faces the Superhighway. Should I clean the aircon more often than usual?", a: "Yes. Rooms facing a main road get tyre dust and exhaust soot on the filters all day, but the right interval also depends on the floor and which way the room faces. Send a photo of the filter on LINE and I will assess first whether it is due for cleaning." },
      { q: "I own several rental houses in Fa Ham. Can I book them all together?", a: `Yes. If it comes to three units or more in one booking, it is ${p.wash.stdBulk} THB per unit, instead of the usual ${p.wash.std} THB per unit. Tell me where each house is and the times that suit the tenants in advance, and I will arrange the order so the work runs continuously and give you the total before starting.` },
    ],
  },
  "chang-phueak": {
    name: "Chang Phueak",
    full: "Chang Phueak, Mueang Chiang Mai",
    note: "A foothill sub-district northwest of the city, around Rajabhat, Rajamangala and the government centre",
    landmarks: ["Chiang Mai Rajabhat University", "Wat Chet Yot", "Kad Thanin"],
    lead: "Chang Phueak is northwest of the city centre, on the flat land at the foot of Doi Suthep, sloping down from west to east. Its western edge borders Doi Suthep–Pui National Park. Huay Kaew Road, Chang Phueak Road, Chotana Road and the Superhighway pass through. The sub-district is home to Chiang Mai Rajabhat University, Rajamangala University of Technology Lanna, the Provincial Hall, Wat Chet Yot and Kad Thanin, so housing ranges from dormitories and condos around the campuses to older communities such as Ban Chang Khian and Ban Chet Yot.",
    points: [
      { t: "Ban Chang Khian has had flash floods from Doi Suthep", d: "In 2024, and twice more in 2025, water from Doi Suthep flooded homes, shops and dormitories in Ban Chang Khian. Outdoor units standing on the ground here are therefore at more risk than those in homes on higher ground. If a unit has been under water, do not switch it on before the electrical parts are checked. Let me know in advance and I will check them before cleaning." },
      { t: "Next to the forest at the foot of the mountain: leaves and seasonal smoke", d: "Homes on the western side of the sub-district have large trees and forest around them. Dry leaves pack into the outdoor coil fins and reduce heat dissipation, and in the dry season the filters take in more smoke and dust than usual. I recommend a full clean before the haze season, and I check the outdoor unit every time I come to clean." },
      { t: "Dormitories and condos around Rajabhat and Rajamangala: many rooms at once", d: `Residential buildings around the campuses on Chang Phueak Road and Huay Kaew Road usually have one aircon per room. If the building owner books three or more units at once, it is ${p.wash.stdBulk} THB per unit. The time between tenants, when rooms are empty, is when the work can run most continuously. Tell me the number of rooms in advance and I will give you the total before the appointment.` },
    ],
    faqs: [
      { q: "Flash flooding near Chang Khian reached my outdoor unit. Can I still use it?", a: "It may still be usable, but do not switch it on straight away. Silt and moisture left in the circuit board and wiring terminals can cause damage when power is applied. I check the electrical parts, wash the silt out of the fins, then test the unit. If any part needs replacing, I tell you what it is and the price before starting work." },
      { q: "I own a dormitory near Kad Thanin. When is the best time to book a clean?", a: `The time between tenants, when rooms are empty, is best, because the work can run continuously without affecting residents. If you can go into the hot season with clean coils, even better. From three units it is ${p.wash.stdBulk} THB per unit, instead of the usual ${p.wash.std} THB per unit. Tell me the number of rooms in advance and I will schedule it for you.` },
    ],
  },
};
