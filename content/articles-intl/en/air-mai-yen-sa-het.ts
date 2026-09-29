import type { IntlArticle } from "@/lib/content-types";
import { p } from "@/lib/site";

export const article: IntlArticle = {
  slug: "air-mai-yen-sa-het",
  title: "Aircon Blowing Air but Not Cooling? 10 Causes and Checks",
  h1: "Aircon blowing air but not cooling: 10 common causes in Chiang Mai, and what you can check yourself before calling a technician",
  description:
    "Aircon blows air but will not cool: the 10 most common causes in Chiang Mai, plus a 5-minute check to see if it is the filter, remote, coil or a leak.",
  category: "Aircon problems",
  updated: "2026-07-29",
  readMins: 9,
  image: { src: "/work/lang-air-thod-lang-014.jpg", alt: "An indoor aircon coil with sticky black grime covering the fins, laid on a tiled floor before washing" },
  excerpt:
    "An aircon that blows air but does not cool can have many causes, from something you can fix yourself in 2 minutes to a worn-out compressor. I explain each cause in turn, with how to tell which one most likely matches your symptoms.",
  keywords: [
    "aircon not cooling Chiang Mai",
    "aircon blowing air but not cold",
    "why is my aircon not cooling",
    "aircon cooling less than before",
    "does my aircon need a refrigerant top-up",
  ],
  relatedService: "som-air",
  blocks: [
    {
      type: "p",
      text: "An aircon that stops cooling during Chiang Mai's hot season is urgent, and I understand that what you want to know first is the cause and roughly what it will cost. Most calls I get start the same way: it blows air but it is not cold, or it is clearly cooling less than it used to. The thing is, \"not cooling\" covers a very wide range, from a setting on the remote you can fix yourself in a few minutes to a compressor that is wearing out.",
    },
    {
      type: "p",
      text: "Knowing where your symptoms sit in that range helps in two ways: you do not spend more than you need to, and you do not leave it until it gets bad enough that the unit has to be replaced. Chiang Mai also has factors other areas see less of: dust from the smoke-haze season (roughly February to April) that clogs coils faster than normal, and rainy-season humidity that causes a different kind of problem. Below are the causes I find most often on the job.",
    },

    { type: "h2", text: "First, tell \"not cooling at all\" apart from \"cooling less\"" },
    {
      type: "p",
      text: "These two symptoms point to different groups of causes. Telling them apart correctly from the start cuts the time it takes to find the cause a great deal.",
    },
    {
      type: "ul",
      items: [
        "Not cooling at all, just room-temperature air: this usually means the whole cooling system has stopped, for example the compressor is not running, the refrigerant has run out, or the mode is set wrong.",
        "Cooling less than before but still somewhat cool: this is usually a drop in efficiency, for example a clogged coil, a clogged filter, low refrigerant, or an outdoor unit that cannot get rid of heat fast enough.",
        "Cooling on and off: this is usually related to the system cutting in and out, a sensor, or ice forming on the coil and then melting in turns.",
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "The first check I use on the job",
      text: "Use a thermometer, or a phone that can measure temperature, to measure the air coming out of the vents and compare it with the room temperature. An aircon working normally shows a difference of around 8–12 degrees. If the difference is less than 5 degrees, the cooling system really does have a problem, and that is a conclusion backed by a number rather than a feeling.",
    },

    { type: "h2", text: "A 5-minute self-check before calling a technician" },
    {
      type: "p",
      text: "From the jobs I take, quite a few could have been solved within the first three checks without the homeowner paying a service fee. I recommend checking in this order first.",
    },
    {
      type: "steps",
      items: [
        {
          title: "Check the mode on the remote first",
          detail: "The remote must be in COOL mode, the snowflake symbol. In FAN mode, the fan symbol, the unit only blows air and does not cool. Another common one is DRY mode, which runs more gently than normal, so it feels as if it is not cooling. Then set the temperature at least 3–4 degrees below the actual room temperature.",
        },
        {
          title: "Take out the filter and look at it",
          detail: "Open the front cover, pull the filter out and hold it up to the light. If you cannot see through it, it is clogged. Wash it with plain water until clean and let it dry completely before putting it back. If the airflow is then stronger and colder, the problem ended at this step, with no need for a technician.",
        },
        {
          title: "Go outside and look at the outdoor unit",
          detail: "The outdoor unit's fan should be spinning and blowing out hot air. If the fan does not spin, or spins and then stops on and off, that needs a technician to check. Then look at the area around it: is anything blocking the airflow, are plants growing right up against it, or are leaves clogging the fins?",
        },
        {
          title: "Check for ice on the pipes or coil",
          detail: "If you find ice on the copper pipe or on the indoor coil, switch the aircon off straight away and run fan mode until the ice melts. Do not keep running it. Ice is a sign that not enough air is getting through or the refrigerant is low, and both can damage the compressor.",
        },
        {
          title: "Check the breaker and the power supply",
          detail: "If the indoor unit runs but the outdoor unit is completely silent, in some cases the outdoor unit's breaker has been switched off without anyone noticing, or has tripped because of a voltage drop. Check the breaker board first.",
        },
      ],
    },

    { type: "h2", text: "10 causes of an aircon not cooling, in order of how often I find them" },
    {
      type: "table",
      caption: "Causes of an aircon not cooling, and which ones a homeowner can deal with",
      head: ["Cause", "What you notice", "Can you fix it yourself?"],
      rows: [
        ["Indoor coil clogged with dust", "Weaker airflow and gradually less cooling; sometimes a musty smell too", "No, it needs a clean"],
        ["Clogged air filter", "Clearly weaker airflow; you cannot see through the filter against the light", "Yes, you can wash it yourself"],
        ["Wrong mode set on the remote", "Normal airflow but no cooling at all, from the first minute", "Yes, just change the remote setting"],
        ["Refrigerant leak", "Cooling keeps dropping over several weeks; there may be ice on the pipe", "No, the leak has to be found"],
        ["Dirty or blocked outdoor unit", "Cool in the morning but not in the afternoon when the sun is strong", "Partly: move whatever is blocking it"],
        ["Worn capacitor", "The indoor fan runs but the outdoor unit does not start, or starts and then stops", "No, it is dangerous because it holds a stored electrical charge"],
        ["Outdoor unit fan not spinning", "You can hear the compressor running outside but the fan is still, and the unit gets very hot", "No"],
        ["Faulty temperature sensor", "The unit cuts out unusually early even though the room is not cool yet", "No"],
        ["Worn-out compressor", "The outdoor unit is running and making noise, but the pipes are not cold and no cool air comes out at all", "No"],
        ["BTU too low for the room", "Cools but never reaches the set temperature; the compressor runs all the time and never cuts out", "No, it needs reassessing"],
      ],
    },
    {
      type: "p",
      text: "The first four are the causes behind most of the jobs I take, and two of those four a homeowner can deal with on their own. That is why I always recommend a basic check first: there is no reason you should pay a service fee for changing a setting on the remote.",
    },

    { type: "h2", text: "The top cause in Chiang Mai: coils clogged by smoke-haze dust" },
    {
      type: "p",
      text: "In the jobs I take after March each year, the causes cluster around one thing: a clogged indoor coil. Smoke from burning carries soot and fine ash that stick well to aluminium fins. When it builds up on a coil that is damp from condensation, it sticks many times harder than ordinary dry dust. That is why the water running off during a clean after the smoke-haze season is dark in almost every home.",
    },
    {
      type: "p",
      text: "The Geo-Informatics and Space Technology Regional Center for the North at Chiang Mai University reported around 6,676 cumulative hotspots in northern Thailand in early 2026, up about 67% from around 3,996 in the same period the year before. That figure reflects how much more soot is passing through the aircon coil in your home every day.",
    },
    {
      type: "callout",
      tone: "info",
      title: "Why a clogged coil stops cooling even though the compressor still runs",
      text: "An indoor coil works by letting air flow through its fins so that heat is transferred out. When dust builds up and less air can get through, less heat is pulled out of the room. The compressor still runs at full effort and you still pay the full electricity cost, but you get less cooling. That is why the power bill often goes up before you notice the aircon is cooling less.",
    },
    {
      type: "p",
      text: "The standard cleaning interval most people use is every 6 months, based on how fast dust builds up under normal use. For homes in Chiang Mai that go through a full smoke-haze season, the amount of soot the coil takes in each day is clearly higher than that, so I recommend cleaning more often than this standard interval.",
    },

    { type: "h2", text: "Refrigerant: the most widely misunderstood topic" },
    {
      type: "p",
      text: "Something I explain almost every day is that many people think aircon refrigerant is a consumable that needs topping up every year, like engine oil. That is not correct. The refrigerant system is a closed system. The refrigerant is not used up; it circulates in the same system for the whole working life of the unit.",
    },
    {
      type: "p",
      text: "So if the refrigerant is low, there is a leak somewhere, perhaps at a flare joint, a service valve or in the coil itself. Topping up without finding the leak first only buys time, and at a high cost, because within a few months the refrigerant will be low again and you will have to pay again for no good reason.",
    },
    {
      type: "callout",
      tone: "danger",
      title: "Refrigerant level should always be measured before a top-up",
      text: `In many cases, cooling less is caused by a clogged coil, not low refrigerant, so measuring the pressure before topping up is an essential step. It is also an easy step to skip, because the customer cannot check it themselves. That is why I check the refrigerant level free of charge and measure it in front of you. If it really is low, I find the leak first. R32 and R410A refrigerant costs ${p.repair.refrigerantPerLb} THB per pound.`,
    },
    {
      type: "p",
      text: "Another thing worth knowing is that R410A cannot be topped up on top of what is left, because it is a blend whose proportions shift when part of it leaks out. In that case the system has to be emptied and fully recharged, which is worth knowing before any work starts.",
    },

    { type: "h2", text: "The outdoor unit: the part people often overlook" },
    {
      type: "p",
      text: "Most people pay attention to the unit in the room, because it is the part they can see and the part that blows the air. But half of the cooling process happens at the outdoor unit. If the outdoor unit cannot get rid of heat, the room will not get as cool as it should, however clean the indoor unit is.",
    },
    {
      type: "ul",
      items: [
        "The outdoor unit's fins are clogged with dust, leaves or pet hair, so heat cannot get out.",
        "Something is blocking the airflow, such as boxes, water tanks, or plants growing too close. Leave a clear space of at least about half a metre all around the unit.",
        "It is installed in a closed-in corner where the hot air circulates back into the unit itself, which is common in townhouses and dormitories with limited space.",
        "It is installed where it takes the full afternoon sun with nothing to shade it, so it works hard every afternoon.",
        "The outdoor fan spins more slowly or not at all, usually because of the capacitor or the motor.",
      ],
    },
    {
      type: "p",
      text: "The telltale sign of this group is that it cools well at night and in the morning, but not in the afternoon when the sun is strong, because the outside temperature rises until an outdoor unit that is already dirty cannot get rid of heat fast enough. If that matches what you see, check the outdoor unit first.",
    },

    { type: "h2", text: "Condos, student dorms and older wooden houses have different problems" },
    {
      type: "p",
      text: "Homes in Chiang Mai come in many types, and each type gives an aircon that is not cooling a different root cause.",
    },
    {
      type: "table",
      caption: "Each type of home in Chiang Mai has a different root cause for poor cooling",
      head: ["Type of home", "Common problem", "What to check first"],
      rows: [
        [
          "Condos and student dorms",
          "The outdoor unit sits on a narrow balcony, hot air circulates back into it, and it has often never been cleaned for the whole lease",
          "The clear space around the outdoor unit, and when it was last cleaned",
        ],
        [
          "Older wooden houses",
          "Gaps in the wooden walls and under the roof let the cool air leak out; the aircon runs all the time but the room never reaches the set temperature",
          "Air gaps along the walls, under the doors and around the ceiling",
        ],
        [
          "Detached houses with a roof in full sun",
          "Heat building up above the ceiling puts more load on the aircon than its BTU can handle",
          "The insulation under the roof, and which way the outdoor unit faces",
        ],
        [
          "Rooms added on later",
          "The original aircon serves a larger area, so the BTU was never enough from the start",
          "The real room size compared with the unit's BTU",
        ],
      ],
    },
    {
      type: "p",
      text: "In the last two cases, older wooden houses and rooms added on later, I often find that after the aircon has been cleaned the owner still says the room is not cool, even though the unit is working at full efficiency, because the real cause is the room, not the unit. In cases like these I suggest ways to improve the room for you to consider, because repairing the unit does not fix the root cause.",
    },

    { type: "h2", text: "Which symptoms need a technician now, and which can wait" },
    {
      type: "p",
      text: "Not every symptom needs a technician the same day, but some get more expensive the longer they are left, because the damage spreads to the compressor, the most expensive part in the system.",
    },
    {
      type: "ul",
      items: [
        "Urgent: ice on the pipes or coil. Switch the unit off first, then call a technician, because running it anyway sends liquid refrigerant back into the compressor.",
        "Urgent: the outdoor unit makes an unusual noise or knocking sound, or there is a burning smell.",
        "Urgent: the breaker trips every time the aircon is switched on. This is an electrical problem; do not keep switching the breaker back on.",
        "Can wait: cooling drops gradually with no unusual noise or smell. It is usually a cleanliness issue, and a normal cleaning appointment is fine.",
        "Can wait: not cooling only in the afternoon when the sun is strong, but still cool at night. It is usually the outdoor unit or the room itself.",
      ],
    },

    { type: "h2", text: "Still not cooling after a clean: what it means" },
    {
      type: "p",
      text: "This happens quite often, and I understand it can feel as if the money you paid did not work. The fact is that a clean only fixes problems caused by dirt. If after a clean the airflow is clearly stronger but it is still not cooling, the cause was never cleanliness in the first place, and only a few possibilities remain.",
    },
    {
      type: "ol",
      items: [
        "Low refrigerant from a leak: the pressure has to be measured and the leak found, not topped up on top.",
        "A worn capacitor, so the compressor cannot start or cannot run at full power.",
        "A compressor worn out with age: in this case the age of the unit has to be considered too, to decide whether repair or replacement is better value.",
        "The control board or temperature sensor giving the wrong commands, so the unit cuts out before the room is cool.",
        "BTU too low for the room from the start. That is not a fault; the unit is simply the wrong size.",
      ],
    },
    {
      type: "p",
      text: `All five of these need measuring tools to confirm; they cannot be judged from the symptoms alone. My diagnostic charge is ${p.repair.diagnostic} THB, which I take off the repair bill if you decide to go ahead with me. Parts costs depend on the model and the parts used. I give you the full price before I start, and if I find anything more on the job, I tell you and ask for your approval before going ahead.`,
    },

    { type: "h2", text: "Summary" },
    {
      type: "ul",
      items: [
        "Always check the remote mode and the filter first; these two solve a large number of cases.",
        "In Chiang Mai, cooling that drops little by little is mostly caused by coils clogged with smoke-haze dust.",
        "Refrigerant is not a consumable. If it is low there is a leak, and the leak has to be found before topping up.",
        "Cool in the morning but not in the afternoon: check the outdoor unit first.",
        "If you find ice, switch the unit off straight away and do not keep running it.",
        "Still not cooling after a clean means real measurements are needed, not another clean.",
      ],
    },
    {
      type: "cta",
      text: "If you are not sure whether your aircon needs cleaning or repair, send a clip of the problem and a photo of the model sticker on LINE. I will help you narrow down the likely cause and check for an open slot in your area.",
    },
  ],
  faqs: [
    {
      q: "If my aircon is not cooling, does it always need a refrigerant top-up?",
      a: "No. The refrigerant system is a closed system, and without a leak the refrigerant does not go down. A more common cause is a clogged indoor coil or filter, which cools normally again after a clean with no top-up needed. I always measure the pressure in front of you first, and if it is not low, I tell you and do not top it up.",
    },
    {
      q: "The aircon blows strongly as usual but is not cold at all. What could cause that?",
      a: "Strong airflow but no cooling means the fan is working but the cooling system is not. Common causes are the remote being set to fan mode, a worn capacitor so the compressor cannot start, or refrigerant that has run out through a leak. Check whether the outdoor unit's fan is spinning and blowing out hot air. If it is completely silent, that is where the problem is.",
    },
    {
      q: "My aircon cools at night but not in the afternoon. Is that normal?",
      a: "No, it is not. An aircon in good condition should cool all day. This symptom points to the outdoor unit not getting rid of heat fast enough when the outside temperature rises, most often because its fins are clogged, something is blocking the airflow, or it is installed in a closed-in corner where hot air circulates back into it.",
    },
    {
      q: "My aircon was cleaned but still is not cooling. What should be checked next?",
      a: `If the airflow is stronger after the clean but it is still not cooling, the cause is not dirt. The next steps are measuring the refrigerant pressure, checking the capacitor and checking how the compressor is running, all of which need measuring tools. My diagnostic charge is ${p.repair.diagnostic} THB, which I take off the repair bill if you decide to go ahead with me.`,
    },
    {
      q: "When is the best time to get an aircon cleaned without a long wait?",
      a: "I recommend January to early February. The aircon is used less then and bookings are not yet busy, so once it is cleaned, it goes into the smoke-haze season with a clean coil. April is the busiest month of the year across Chiang Mai, and if you wait until the aircon stops cooling before getting in touch, you usually have to wait longer than normal for a slot.",
    },
  ],
};
