import type { IntlAreaText } from "@/lib/content-types";
import { p, btu } from "@/lib/site";

export const part: Record<string, IntlAreaText> = {
  "san-kamphaeng": {
    name: "San Kamphaeng",
    full: "San Kamphaeng district",
    note: "I'm based in San Kamphaeng, so this is the zone I can reach fastest.",
    landmarks: ["San Kamphaeng Market", "Old San Kamphaeng Road (1006)", "San Kamphaeng District Office"],
    lead: "San Kamphaeng is the district's town centre, where the fresh market, the district office and the Saturday walking street all sit on the same road: the old Route 1006. The market area is still made up of shophouses lining a narrow road under a canopy of large trees, while the newer housing estates have grown up along the new road, Route 1317.",
    points: [
      { t: "Market shophouses: the outdoor unit is often behind the building or on the awning", d: "Commercial buildings along the old road rarely have space at the side, so outdoor units end up behind the building, on the awning, or mounted high above the walkway. Access varies a lot from one shophouse to the next. Let me know in advance where your unit is, and I'll bring ladders and hoses long enough for the actual job." },
      { t: "Rain trees over the road drop leaves onto outdoor units", d: "The old road is lined on both sides with large rain trees along its whole length. In the dry season they shed a lot of leaves, so outdoor units standing in the open along this stretch get dry leaves packed into the fins and grille, which reduces how well they release heat. I open up and check the outdoor unit every time I come to clean." },
      { t: "Market jobs and housing-estate jobs are quite different", d: `Most shophouses in the market have one or two units, while the housing estates along the new road are detached houses that often have several units each. Three or more units qualify for the multi-unit rate of ${p.wash.stdBulk} THB per unit. Tell me how many units you have beforehand, and I'll give you the total price and the time needed before we book.` },
    ],
    faqs: [
      { q: "I'm in a shophouse in the San Kamphaeng market area and the outdoor unit is behind the building. Can you clean it?", a: "Yes, but access varies a lot from one shophouse to the next. Some outdoor units are behind the building, others are on the awning or mounted high above the walkway. Let me know beforehand where the unit is and roughly how high, so I can bring the right ladders and hoses and finish everything in a single visit." },
      { q: "My house is off the new San Kamphaeng road. Can you clean several units at once?", a: `Yes, and it works out better value than booking one unit at a time: three or more units are ${p.wash.stdBulk} THB each instead of the usual ${p.wash.std} THB. Tell me the number and size of the units beforehand, and I'll give you the total price and the time needed before we book.` },
    ],
  },
  "ton-pao": {
    name: "Ton Pao – Bo Sang",
    full: "Ton Pao, San Kamphaeng",
    note: "The sub-district right next to my base; I can get there within a few minutes.",
    landmarks: ["Bo Sang Umbrella Village", "Bo Sang–Doi Saket Road (1014)", "Ton Pao Town Municipality"],
    lead: "Ton Pao isn't a market town but a village of makers. Many homes here are both living space and craft workshop: Bo Sang umbrella making and saa paper making, with steps such as boiling pulp and sun-drying sheets on frames outdoors, are woven into the community. At the same time, the area is densely packed with housing estates.",
    points: [
      { t: "Homes that double as workshops clog filters faster", d: "Home-based crafts produce paper-pulp dust, wood dust and paint mist from umbrella painting. These particles are finer than ordinary household dust and can pass through the filter to settle on the coil fins. Rooms used as work areas therefore need cleaning sooner than the bedrooms in the same house. By checking the filters I can tell you which rooms should be cleaned more often." },
      { t: "Old-village houses stand close together, squeezing outdoor units into narrow gaps", d: "The older villages around Bo Sang are numbered sois branching off the Bo Sang–Doi Saket road. Houses sit so close together that many outdoor units have to go in the gap between houses or face a neighbour's wall, which stops them releasing hot air properly. For units like this, cleaning only the indoor coil usually doesn't improve cooling; the outdoor coil needs cleaning as well." },
      { t: "Housing estates and old villages share the same sub-district", d: "Ton Pao has both dense traditional housing and many housing estates built steadily over several decades. The two types of job differ in everything from site access to the number of units per house. Let me know whether you're in an estate or in an old village soi, and whether a vehicle can reach your door, so I can plan how to carry the equipment in." },
    ],
    faqs: [
      { q: "My home is also my craft workshop. Should the aircon be cleaned more often than usual?", a: "The rooms used for work should be, yes. Paper-pulp dust, wood dust and paint mist are finer than ordinary household dust and can get through the filter to the coil fins, while the bedrooms in the same house can usually go longer between cleans. I check the filters on site and tell you which rooms should be done more often." },
      { q: "The soi in my Bo Sang village is narrow and a vehicle can't reach my door. Can you still do the job?", a: "Yes, but please let me know beforehand whether a vehicle can reach your house and how far from the house I'll need to park. That way I can pack a set of equipment I can carry in one trip and allow enough time in the schedule so the next customer's appointment isn't affected." },
    ],
  },
  "nong-pa-khrang": {
    name: "Nong Pa Khrang – Tha Sala",
    full: "Nong Pa Khrang / Tha Sala, Mueang Chiang Mai",
    note: "Directly accessible via New San Kamphaeng Road (1317).",
    landmarks: ["Don Chan Intersection", "Payap University (Mae Khao campus)", "New San Kamphaeng Road (1317)"],
    lead: "Nong Pa Khrang and Tha Sala have the densest concentration of condominium buildings of all the areas I cover. Nong Pa Khrang covers less than three square kilometres yet holds several condo projects with anywhere from hundreds to thousands of units, and Payap University's Mae Khao campus is also in the sub-district, so it's surrounded by a large number of dorms and apartments.",
    points: [
      { t: "Condo and dorm jobs go through the juristic office first", d: "Most condominium buildings require advance notice to the juristic office and usually only allow technicians in during office hours. Some also require technicians to register and to request a key card for the service lift. Please give me the building name and its conditions before the appointment, so I don't arrive and find I can't get in." },
      { t: "A condo unit's outdoor-unit position is fixed from the start", d: "Most condo units have the outdoor unit in a dedicated recess beside the balcony or grouped on the building's outer wall. It can't be moved, and many can only be reached through a small opening. Cleaning the outdoor unit in a condo therefore needs different equipment from a detached house. Feel free to describe the recess to me beforehand." },
      { t: "The main dust here comes from traffic, not burning", d: "This is a fully urban zone, crossed by the Superhighway and the starting point of New San Kamphaeng Road. Rooms facing the main roads get more exhaust soot mixed with dust on the filter than rooms facing inward, even in the same building. I check the conditions on site and tell you the cleaning interval that suits your room." },
    ],
    faqs: [
      { q: "I live in a condo around here. Do I need permission from the juristic office first?", a: "In most cases you'll need to notify them. Many condo buildings require advance notice, only allow technicians in during office hours, and some require technician registration and a service-lift key card. Please check with your building's juristic office and let me know the conditions before the appointment, so I can schedule the job for a time when I can actually get in." },
      { q: "In a rented room or dorm, who should call the technician: the owner or the tenant?", a: "It depends on the lease. Routine cleaning is usually the tenant's responsibility, but repairs or refrigerant top-ups concern the unit itself, so the owner should be told first. I assess the job on site and tell you what kind of work it is, so the right party can agree to it." },
    ],
  },
  saraphi: {
    name: "Saraphi",
    full: "Saraphi district",
    note: "The area south of the city along the Chiang Mai–Lamphun Ton Yang road.",
    landmarks: ["Wiang Kum Kam", "Wat Chedi Liam", "Ton Yang Road (Route 106)"],
    lead: "Saraphi is flat across the whole district, and Wiang Kum Kam lies within it. The area around Wiang Kum Kam has stricter building controls than elsewhere, so there are almost no tall buildings here. Most jobs are detached houses in housing estates and traditional homes along the Ton Yang road.",
    points: [
      { t: "Almost all low-rise homes, not condo units", d: `The area around Wiang Kum Kam has stricter building controls than elsewhere, so the projects actually built here are nearly all low-rise houses. Jobs here are often homes with several units each, and three or more units qualify for the rate of ${p.wash.stdBulk} THB per unit.` },
      { t: "Work involving structural additions: check with the municipality first", d: "Regular cleaning, repair or installation can be done just as in any other area. But if you need an added awning or a cover frame over the outdoor unit, this zone has stricter building controls than elsewhere. That falls under the local municipality's authority, so I recommend checking with them first, and I'll then work according to what's permitted." },
      { t: "Homes along the Ton Yang road get leaves and road dust at the same time", d: "The Chiang Mai–Lamphun road is lined on both sides by nearly a thousand yang na trees more than a hundred years old. Homes along this stretch get both fallen leaves dropping onto outdoor units in the open and dust from the main road, unlike homes deep inside a housing estate. So the cleaning interval shouldn't be judged by the same standard." },
    ],
    faqs: [
      { q: "My house is in the Wiang Kum Kam zone. Can I add an aircon unit or build an awning over the outdoor unit?", a: "Installing a unit in the normal way is fine. But if you need to add an awning or a roof frame over the outdoor unit, this zone has stricter building controls than elsewhere. That falls under the local municipality's authority, so please check with them first, and I'll then work according to what's permitted." },
      { q: "My house is on the Ton Yang road. Does it need cleaning more often than a house in an estate?", a: "Yes, more often, because it gets two things at once: leaves from the yang trees falling onto the outdoor unit in the open, and dust from the main road. I open up and check the outdoor unit every time I come to clean, and I'll tell you how long you can leave it between cleans to suit your home, so you don't clean more often than you need to." },
    ],
  },
  "wat-ket": {
    name: "Wat Ket – Fa Ham",
    full: "Wat Ket / Fa Ham, Mueang Chiang Mai",
    note: "The east bank of the Ping River, an area of cafes and guesthouses.",
    landmarks: ["Wat Ketkaram", "San Pa Khoi Market", "Central Chiang Mai"],
    lead: "Wat Ket and Fa Ham are riverside neighbourhoods on the east bank of the Ping River with the widest range of building heights in the city. In the same area you'll find Lanna wooden houses, old colonial-style buildings, two-storey wooden row houses in the sois, and long-established riverside condos.",
    points: [
      { t: "Wooden and old buildings need carefully chosen mounting points", d: "Fixing brackets to a wooden wall or an old structure means choosing a point that can genuinely bear the weight, not just fixing to the wall panel, because a vibrating unit will loosen the mounting and cause noise. I always check the mounting point first and tell you if the structure needs reinforcing." },
      { t: "Fresh markets and restaurants all along Charoen Muang Road", d: "This area has San Pa Khoi Market, a long-established market, and restaurants lining the road. Buildings along this stretch take in more cooking grease and kitchen smells than typical residential areas, which means they should be cleaned more often." },
      { t: "Old buildings and tall condos stand side by side on the same street", d: "So jobs in this area vary a lot, even a few hundred metres apart. Feel free to tell me the type of building and the floor beforehand. I'll bring ladders and equipment suited to the actual height and finish everything in a single visit." },
    ],
    faqs: [
      { q: "I have an old wooden house in Wat Ket. Can I add an aircon unit?", a: "Yes, but the mounting point needs to be one that can genuinely bear the weight, not just the wall panel, because a vibrating unit will loosen the mounting and cause noise. I survey the structure first and tell you if it needs reinforcing, along with the cost of that part, before starting work." },
      { q: "I live in a condo by the Ping. Can you clean the outdoor unit on my balcony?", a: "Yes. On balconies I use a cover bag and a catch bucket so the wash water doesn't run down to the floors below. Let me know the floor and where the unit is beforehand, so I can bring the right equipment for the job." },
    ],
  },
  "chang-khlan": {
    name: "Chang Khlan – Night Bazaar",
    full: "Chang Khlan, Mueang Chiang Mai",
    note: "A dense area of hotels and condo buildings; I can handle several units in one visit.",
    landmarks: ["Chiang Mai Night Bazaar", "Chang Khlan Road", "Ping riverside"],
    lead: "Chang Khlan is a district of hotels and night markets. The tallest buildings here are hotels rather than residences, and Anusarn Market and the Night Bazaar are large commercial areas whose food zones have kitchens running from 06:00 to 22:00.",
    points: [
      { t: "Kitchen grease clogs coils faster than in residential areas", d: "Soot and grease from cooking bind with dust into a sticky layer on the coil fins that airflow won't shift on its own. Units in buildings along this stretch therefore tend to need cleaning sooner than those in ordinary homes, and a spray-through wash is often not enough: the blower wheel has to be removed and cleaned separately." },
      { t: "Hotel and guesthouse jobs need the right timing", d: "I take morning appointments before guests check in, or slots when rooms are empty between guests. Let me know the times that suit you, and I'll schedule around your property's routine. Work outside business hours carries an extra charge, which I'll confirm before booking." },
      { t: "For multi-storey buildings I need to know where the outdoor units are", d: "Buildings here range from low-rise to high-rise, so outdoor-unit locations vary a lot: some are on the roof, others in wall recesses on each floor. Let me know where yours are beforehand, so I can estimate the time and equipment correctly." },
    ],
    faqs: [
      { q: "How often should restaurants and guesthouses around the Night Bazaar have their aircon cleaned?", a: "For restaurants with an open kitchen I recommend every 3 months, because grease binds with dust into a sticky layer on the coil fins that airflow won't shift on its own. Dining areas clearly separated from the kitchen can stretch to every 3–4 months. I'll give you my assessment after seeing the actual site." },
      { q: "Can you come outside opening hours or when rooms are empty?", a: "Yes. Let me know the times that suit you, and I'll schedule around your restaurant's or property's routine. Work outside business hours carries an extra charge, which I'll confirm before booking." },
    ],
  },
  "mueang-chiang-mai": {
    name: "Mueang Chiang Mai",
    full: "Mueang Chiang Mai district",
    note: "I cover every sub-district in Mueang Chiang Mai, inside and outside the moat.",
    landmarks: ["The Old City moat", "Tha Phae Gate", "Warorot Market"],
    lead: "The moat area lies within the protected Old City, where building height and style are controlled under the city's comprehensive plan. Most buildings here are therefore shophouses, old houses and small guesthouses rather than tall condo blocks.",
    points: [
      { t: "Access is shaped by the traffic rules", d: "The roads around the moat are two one-way rings running in opposite directions: the outer ring clockwise and the inner ring anticlockwise, with U-turns only at designated points. Miss your destination and you have to go all the way round. I plan my route in advance so your appointment isn't delayed." },
      { t: "Old City roads can't be widened any further", d: "The roads and sois here are all original, and the equipment truck can't get everywhere. For some jobs I have to park at the mouth of the soi and carry the tools in. Feel free to describe the access beforehand, so I can allow the right amount of time." },
      { t: "Shophouses and guesthouses often have the outdoor unit behind the building or on the roof", d: "Units in these positions need access to both the front and the back on the same day. Let me know beforehand which points I need to pass through and who will let me in, so I can finish in one visit without a second appointment." },
    ],
    faqs: [
      { q: "I live inside the moat. Can a vehicle reach my door?", a: "Please describe the access beforehand. The roads and sois in the Old City are all original and can't be widened, and in some spots the equipment truck can't get through, so I have to park at the mouth of the soi and carry the tools in, which takes extra time. I've already allowed for this when scheduling." },
      { q: "My shophouse or guesthouse has its outdoor unit on the roof. Can you do it?", a: "Yes, but I need access both inside the building and to the roof on the same day. Let me know beforehand which points I need to pass through and who will let me in, so I can finish in one visit without a second appointment." },
    ],
  },
  "pa-daet": {
    name: "Pa Daet – Nong Hoi",
    full: "Pa Daet / Nong Hoi, Mueang Chiang Mai",
    note: "An area of condo buildings and dorms on the south side of the city.",
    landmarks: ["Mahidol Road", "Nong Hoi Intersection", "Nong Hoi Market"],
    lead: "These two sub-districts have clearly different housing. Pa Daet is mainly housing estates, while Nong Hoi is a dense rental area, with many dorms and apartments packed into a fairly small area.",
    points: [
      { t: "Housing estates and rental rooms call for different plans", d: "In Pa Daet, homes often have several units each, so they qualify for the three-or-more-unit rate. In Nong Hoi, most are rental rooms with one unit each, and dorm owners often book several rooms in one visit; I apply the multi-unit rate for them too." },
      { t: "Mahidol Road, a six-lane road, cuts through the middle of the zone", d: "Buildings along this road take in traffic dust all year round, unlike homes deeper in the sois, so the two shouldn't be cleaned on the same schedule. If you're not sure how often your home needs cleaning, send me your location and the symptoms, and I'll assess it first." },
      { t: "Pa Daet is low-lying land along the Ping River", d: "Land along the Ping is low-lying and floods in the high-water season. Outdoor units standing at ground level should be raised above the level past floods have reached, and the drain line should be checked so water can't flow back into the unit. If flooding has ever reached the installation spot, let me know beforehand." },
    ],
    faqs: [
      { q: "I own a dorm in Nong Hoi. How do you price cleaning several rooms?", a: `I apply the three-or-more-unit rate: ${p.wash.stdBulk} THB per unit for 9,000–18,000 BTU. Let me know the number of rooms and when they'll be empty, and I'll schedule them back to back in one visit so tenants aren't disturbed.` },
      { q: "My house is on Mahidol Road. Should I have it cleaned more often than usual?", a: "Yes. Buildings along the six-lane road take in traffic dust all year round, unlike homes deeper in the sois. If you're not sure whether it's due yet, send a photo of the filter over LINE and I'll assess it first, free of charge." },
    ],
  },
  nimman: {
    name: "Nimman – Chang Phueak",
    full: "Suthep / Chang Phueak, Mueang Chiang Mai",
    note: "An area of condo buildings and coffee shops around Nimman.",
    landmarks: ["Nimmanhaemin Road", "MAYA", "Chiang Mai University"],
    lead: "Nimman and Chang Phueak are among the densest areas of rental rooms and condo buildings in the city, with several condo projects of seven to fifteen storeys lined up side by side.",
    points: [
      { t: "Mostly one unit per room", d: "Rental rooms and condos usually have a single wall-mounted unit, with the outdoor unit on the balcony or in a recess the building has left for it, so the working space is much tighter than in a detached house. Feel free to give me the building name and floor when you book, so I can bring ladders and hoses to suit the height involved." },
      { t: "Parking is a real constraint here", d: "The sois around Nimman have no-parking zones that traffic police enforce from time to time, and parking in the sois is limited. So I allow extra time in advance to find parking and carry equipment into the soi, so your appointment isn't affected." },
      { t: "Cleaning several rooms in the same building is better value", d: "If you're a dorm or apartment owner who wants several rooms cleaned in one visit, let me know the number of rooms beforehand. I'll apply the three-or-more-unit rate, because travel and set-up time are spread out when I work continuously in one building." },
    ],
    faqs: [
      { q: "I live in a condo around Nimman. What do I need to prepare for an aircon clean?", a: "Just let me know the building name and floor beforehand, so I can bring ladders and hoses to suit the height involved. Building entry rules vary from place to place. If your building requires advance notice or only allows access at certain times, tell me and I'll schedule to fit those conditions." },
      { q: "How do you price cleaning several rooms in the same dorm?", a: `I apply the three-or-more-unit rate: ${p.wash.stdBulk} THB per unit for 9,000–18,000 BTU, because travel and set-up time are spread out when I work continuously in one building. Let me know the number of rooms beforehand, and I'll give you the total price and the time needed before we book.` },
    ],
  },
  "mae-hia": {
    name: "Mae Hia",
    full: "Mae Hia, Mueang Chiang Mai",
    note: "The zone south of the city on the foothill side, with housing estates and dorms.",
    landmarks: ["Royal Park Rajapruek", "Canal Road"],
    lead: "Mae Hia has grown rapidly from farmland into suburb, so the main type of housing is housing estates, with many large detached houses.",
    points: [
      { t: "Large homes often have several units", d: `Homes of this size usually have several units each, which qualifies for the three-or-more-unit rate of ${p.wash.stdBulk} THB per unit. Let me know the number and size of the units beforehand, and I'll give you the total price and the time needed before we book.` },
      { t: "At the foot of the mountains, it gets the smoke directly in the dry season", d: "This sub-district sits at the foot of Doi Suthep–Pui, an area on forest-fire watch every year. From February to April, filters clog faster than usual. I recommend a major clean between January and early February, so you go into the season with clean coils and don't have to wait in a queue." },
      { t: "Homes along Canal Road get dust from another source too", d: "The road along the irrigation canal carries heavy traffic all day, so homes along it take in traffic dust on top of seasonal dust. They should be cleaned more often than homes deeper inside an estate." },
    ],
    faqs: [
      { q: "My house in a Mae Hia estate has several units. How do you price that?", a: `For 9,000–18,000 BTU units, three or more are ${p.wash.stdBulk} THB each. For ${btu.washBig} BTU units, two or more are ${p.wash.bigBulk} THB each. Let me know the number and size of the units beforehand, and I'll give you the total price and the time needed before we book.` },
      { q: "I live near the foot of the mountains. When in the year should I have my aircon cleaned?", a: "I recommend January to early February, so you go into the haze season with clean coils while there are still open slots. This sub-district sits at the foot of Doi Suthep–Pui, an area on forest-fire watch every year, and from February to April filters clog faster than usual." },
    ],
  },
  "doi-saket": {
    name: "Doi Saket",
    full: "Doi Saket district",
    note: "I cover only the lower sub-districts bordering San Kamphaeng and Mueang Chiang Mai.",
    landmarks: ["San Pu Loei", "Talat Yai", "Chiang Mai–Doi Saket Road (118)"],
    lead: "The lower part of Doi Saket that I cover isn't all the same. Sub-districts next to the city, such as San Pu Loei and Mae Khue, together have dozens of housing estates, while those further out, such as Talat Yai and Mae Hoi Ngoen, are still mainly traditional communities and rice fields. Doi Saket is also one of the areas where the province imposes special burning controls during the haze season.",
    points: [
      { t: "Estates near the city, homes and rice fields further out", d: "San Pu Loei and Mae Khue are densely built with housing estates, where detached houses often have several units each. Talat Yai and Mae Hoi Ngoen are low-lying plains that still have rice fields and traditional homes, and most jobs there are one or two units. Let me know your sub-district and number of units beforehand, and I'll schedule and estimate the time to match the actual job." },
      { t: "Homes next to open fields take in more dust than homes in estates", d: "Homes next to rice fields or open fields take in dust directly from farmland, especially after the harvest, unlike homes deep inside a housing estate. The two shouldn't be cleaned on the same schedule. I check the filter and coil fins and tell you the interval that suits your home." },
      { t: "In the haze season, units work harder than usual", d: "Doi Saket is one of the areas under special provincial burning controls, so from the start of the year to mid-year there's more dust in the air than at other times. Homes that keep rooms closed with the aircon on all day during this period will see the filter turn black faster than usual. Washing the filter yourself every two to three weeks helps a lot, and you don't need to call a technician for it." },
    ],
    faqs: [
      { q: "Which sub-districts of Doi Saket do you cover?", a: "I cover the lower sub-districts bordering San Kamphaeng and Mueang Chiang Mai: Mae Khue, Samran Rat, San Pu Loei, Talat Yai and Mae Hoi Ngoen. I don't yet cover sub-districts further north or up in the hills, because the travel time would push back other customers' appointments. If you're outside this list, ask me on LINE or by phone and I'll tell you honestly whether I can come." },
      { q: "My house is next to rice fields. Does it need cleaning more often than a house in an estate?", a: "Yes, more often. Homes next to open fields take in dust directly from farmland, especially after the harvest and during the haze season when the province imposes special burning controls, unlike homes deep inside an estate. I check the filter and coil fins on site and tell you the interval that suits your home." },
    ],
  },
  "san-phra-net": {
    name: "San Phra Net",
    full: "San Phra Net, San Sai",
    note: "The southernmost sub-district of San Sai, bordering Doi Saket, with many dorms and condo buildings.",
    landmarks: ["San Phra Net Market", "Chiang Mai–Doi Saket Road (118)", "Chiang Mai 700th Anniversary Road"],
    lead: "San Phra Net is the southernmost sub-district of San Sai district, bordering Mueang Chiang Mai and Doi Saket. It still has farmland interspersed with a steady stream of new housing estates, many of which were completed only in the last few years.",
    points: [
      { t: "Lots of new homes whose units aren't yet due for a deep clean", d: "Many projects here were completed only in the last few years, so many homes are just a few years old. Units that are still new and regularly cleaned usually don't need a strip-down clean. I assess first whether your unit suits a standard clean or a strip-down clean, and tell you honestly if it isn't needed yet." },
      { t: "Three-to-four-bedroom estate homes often have several units", d: `Most house designs in estates around here are two to three storeys with three to four bedrooms, and they often have several units each, which qualifies for the three-or-more-unit rate of ${p.wash.stdBulk} THB per unit. Let me know how many units you have beforehand, and I'll give you the total price and the time needed before we book.` },
      { t: "Farmland still sits right next to housing estates", d: "This sub-district still has farmland interspersed among housing estates, so homes next to open fields take in dust from farming and from the construction sites of new projects still under way, unlike homes deep inside an estate. The two shouldn't be cleaned on the same schedule." },
    ],
    faqs: [
      { q: "My house was completed only a few years ago. Does it need a strip-down clean?", a: "Usually not yet. For units that are still new and have been cleaned regularly, a standard clean is usually enough. I assess first and tell you honestly if it isn't time for a strip-down clean yet, because the two differ in price several times over." },
      { q: "My house is next to open fields. Should it be cleaned more often than one in the middle of an estate?", a: "Yes. This sub-district still has farmland in among the homes, and there are still construction sites for new projects, so homes next to fields or building sites take in more dust than those deep inside an estate, and the cleaning interval shouldn't be judged by the same standard." },
    ],
  },
};
