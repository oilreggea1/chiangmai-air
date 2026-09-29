import type { IntlArticle } from "@/lib/content-types";
import { p } from "@/lib/site";

export const article: IntlArticle = {
  slug: "air-tat-boi",
  title: "Aircon Keeps Cutting Out or Won't Start? Reading the Blinking Light",
  h1: "Aircon keeps cutting out, won't switch on, or the light is blinking: the usual causes, and how to read the blink code",
  description:
    "Why an air conditioner keeps stopping, refuses to start, or shows a blinking light, and how to count the blinks to look up the error code in the manual for your model.",
  category: "Aircon problems",
  updated: "2026-07-29",
  readMins: 8,
  image: { src: "/work/air-2569-07.jpg", alt: "A capacitor removed from an air conditioner so it can be measured before deciding to replace it" },
  excerpt:
    "An aircon that keeps cutting out or will not start is usually not broken. It is the unit's own protection telling you something is wrong, and a blinking light is a code the unit is reporting for you to read.",
  keywords: ["aircon keeps cutting out", "aircon won't turn on", "aircon light blinking", "aircon error code", "AC repair Chiang Mai"],
  relatedService: "som-air",
  blocks: [
    {
      type: "p",
      text: "These symptoms worry owners more than most, because they look like the unit is about to die. You press the remote and nothing happens, or it runs for a short while and stops, and some units blink a light in a pattern as if signalling. It is signalling. In most cases this is not a fault in itself but the protection system doing exactly what it should.",
    },
    {
      type: "p",
      text: "Every current air conditioner has protection that constantly monitors pressure, temperature and current. If any of them goes outside the safe range, the system shuts down straight away to protect the compressor, the most expensive part in the system. An aircon that switches itself off is limiting the damage and the cost to you.",
    },

    { type: "h2", text: "First, be clear which symptom you have" },
    {
      type: "p",
      text: "These three symptoms are often lumped together, but they point to different groups of causes. Telling them apart at the start saves a lot of time finding the cause.",
    },
    {
      type: "ul",
      items: [
        "Cutting out too often: the compressor runs for a while, stops, then starts again much sooner than it should, in some units every few minutes.",
        "Will not switch on: you press the remote and nothing responds, or only the indoor fan turns while the outdoor unit stays off.",
        "Runs then stops with a blinking light: the unit starts but stops by itself with a light signal, meaning the control board has detected a fault and there is a code to read.",
      ],
    },
    {
      type: "callout",
      tone: "info",
      title: "Cycling on and off is not always abnormal",
      text: "A non-inverter aircon switches its compressor off when the room reaches the set temperature and on again when it warms up. That is normal. What is abnormal is cycling every few minutes, or cutting out while the room is still warm. Inverter units slow the motor down instead of switching off, so an inverter unit that switches off completely in cycles is clearly abnormal.",
    },

    { type: "h2", text: "The most common cause of cutting out: the outdoor unit cannot get rid of heat fast enough" },
    {
      type: "p",
      text: "In the cutting-out jobs I do, a dirty outdoor coil is the cause in most cases. The system has to release heat at the outdoor unit. When the fins are clogged with dust or leaves, the heat cannot escape, the high-side pressure keeps rising, and once it passes the limit a pressure switch shuts the unit down to protect the compressor.",
    },
    {
      type: "ul",
      items: [
        "The telltale sign: it cuts out only in the hottest part of the afternoon but runs normally at night.",
        "It usually comes with weaker cooling at the same times of day.",
        "The outdoor unit is unusually hot when you touch the casing.",
        "The fix: clean the outdoor coil, move anything blocking the airflow, and leave roughly half a metre of clear space around the unit.",
      ],
    },
    {
      type: "p",
      text: "Chiang Mai adds two factors. First, soot and ash from the burning season between February and April clog the outdoor fins faster than usual. Second, April, the hottest month of the year, arrives just as the coils are at their dirtiest. The result is that April brings the most cutting-out calls of the year, and it is also when technicians in Chiang Mai are most fully booked.",
    },

    { type: "h2", text: "Other causes to rule out" },
    {
      type: "table",
      caption: "Causes of an aircon cutting out or not starting, in the order I find them on jobs",
      head: ["Cause", "Telltale sign", "What needs fixing"],
      rows: [
        ["Dirty or blocked outdoor coil", "Cuts out only in the hot afternoon, fine at night", "Clean the outdoor coil and clear the space around it"],
        ["Low refrigerant from a leak", "Cuts out with weaker cooling, sometimes ice on the pipe", "Find the leak first, then repair and recharge"],
        ["Indoor coil too blocked for enough airflow", "Cuts out because the coil gets too cold and the sensor stops it; weak airflow", "Clean the indoor coil and filters"],
        ["Failing capacitor", "Outdoor unit hums but does not start, or starts and dies", "Replace the capacitor"],
        ["Faulty temperature sensor", "Cuts out while the room is still warm, very short cycles", "Replace the thermistor"],
        ["Control board (PCB) problem", "Usually a blinking code, or the remote gets no response", "The code has to be read before it can be diagnosed"],
        ["Low household voltage or undersized wiring", "Cuts out when other appliances switch on, or trips often", "Fix the electrical supply, not the aircon"],
        ["Breaker too small or worn out", "Trips every time the compressor starts", "Check the breaker rating and condition"],
        ["Flat remote batteries or a timer set", "Will not switch on, with no other symptom", "Change the batteries and cancel the timer; you can do this yourself"],
      ],
    },
    {
      type: "callout",
      tone: "warn",
      title: "The house wiring is often overlooked",
      text: "In a fair number of jobs the aircon is fine and the problem is the electrical supply in the house: wiring too thin for the unit's BTU rating, so the voltage drops when the compressor starts, or a worn breaker that trips below its rated current. In those cases the supply has to be fixed. Replacing parts in the aircon will not solve it. I see this often in older wooden houses and older buildings in Chiang Mai still on their original wiring.",
    },

    { type: "h2", text: "What a blinking aircon light means, and how to read the code" },
    {
      type: "p",
      text: "If you can read the code, you can tell me what the unit is reporting when you first get in touch, so I bring the right parts on the first visit and we both save time.",
    },
    {
      type: "p",
      text: "Almost every brand now has self-diagnosis built into the control board. When it detects a fault it reports it in one of three ways: an LED on the front blinking in a countable pattern, a display on the unit showing a letter and number code such as E followed by a number or F followed by a number, or a code shown on the remote's screen when you press a particular button described in the manual.",
    },
    {
      type: "p",
      text: "The key thing to know is that these codes are not an industry standard. Each brand, and even each model within a brand, has its own code table. Searching a code online and finding the meaning for a different brand gives you the wrong information and can lead to ordering the wrong part. The reliable way is to look it up in the manual for your exact model.",
    },
    {
      type: "steps",
      items: [
        { title: "Count the blinks accurately", detail: "Watch the light on the front and count how many times it blinks in a row before a long pause, then the pattern repeats. For example: blink three times, pause, blink three times, pause, which is a three-blink code. Watch at least two rounds to be sure." },
        { title: "Check whether more than one light is blinking", detail: "Some models use two or three lights together as a code, for example the Timer and Run lights blinking alternately. Note down which lights blink and how many times each." },
        { title: "Find the real model number", detail: "Check the sticker on the side of the indoor unit or under the front cover. It shows the full model number, which is longer than the marketing name. Take a photo of it: you need it both to look up the code and to order parts." },
        { title: "Open the manual at the error code or self-diagnosis section", detail: "If you still have the printed manual, look for a heading like Error Code or Self Diagnosis. If it is lost, search the brand's official website with the full model number you photographed. Do not rely on general websites." },
        { title: "Film the blinking light", detail: "If you cannot find the manual or are not sure you counted right, film a short clip showing two full rounds of the pattern and send it with the model sticker photo. I can help check what the code means." },
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "A code tells you the symptom, not the part",
      text: "A common misunderstanding is that the code tells you which part to replace. In fact most codes only say which sensor read an abnormal value. That can be a failed sensor, a loose wire, a control board reading wrongly, or a real abnormal condition such as low refrigerant. That is why I always take real readings to confirm before replacing anything. The code only tells me where to start.",
    },

    { type: "h2", text: "Checks you can do yourself before calling a technician" },
    {
      type: "p",
      text: "Before paying for a diagnosis, there are four things I recommend trying yourself. They solve the problem more often than you might think.",
    },
    {
      type: "ol",
      items: [
        "Change the remote batteries and check that a timer or Sleep function has not been set by accident. It sounds trivial but it happens more often than you would expect.",
        "Check the breaker panel to see that the breaker for the aircon is still on. Some houses have a separate breaker for the outdoor unit that trips without anyone noticing.",
        "Check around the outdoor unit for anything blocking the airflow, leaves stuck in the fins, or plants growing too close, and clear the space.",
        "Switch off at the breaker for about five minutes and switch back on. This resets the control board. If it was a temporary glitch the unit will work normally again, but if the problem returns within hours or days, there is a real fault to check.",
      ],
    },
    {
      type: "callout",
      tone: "danger",
      title: "Things you should never do",
      text: "Do not keep switching the breaker back on if it trips every time you start the aircon. A trip means excess current really happened, and each new attempt sends high current into the faulty point, which can burn out the compressor winding or damage the house wiring. And never open the control board cover to take readings or reconnect wires yourself: the capacitor still holds a charge even after the power is off.",
    },

    { type: "h2", text: "When to stop using it and call a technician straight away" },
    {
      type: "ul",
      items: [
        "The breaker trips every time you switch the aircon on: leave it off and call a technician; do not keep trying.",
        "A burning smell, or scorch marks on the plug or control box: switch off the breaker immediately.",
        "It keeps cutting out and there is ice on the pipes or coil: switch off cooling and run fan mode until the ice melts first.",
        "The outdoor unit hums loudly for an unusually long time and then stops, which usually means the compressor is trying to start and cannot.",
        "A blinking light while the outdoor unit is too hot to touch.",
      ],
    },
    {
      type: "p",
      text: `Almost all of these jobs need real electrical and refrigerant pressure readings before anyone can say what is wrong; judging from the symptoms alone is not enough. My diagnostic charge is ${p.repair.diagnostic} THB, and I take it off the repair bill if you go ahead with me. Parts such as a capacitor, a thermistor or a control board depend on the model and the part used, and I always give you the full price before I start. In many cases where the cause is a dirty outdoor coil, the job ends with a clean and no parts at all. Repairs carry a 30-day warranty.`,
    },

    { type: "h2", text: "Summary" },
    {
      type: "ul",
      items: [
        "An aircon switching itself off is usually the protection system working, not a broken unit.",
        "If it only cuts out in the hot afternoon, check the outdoor coil first.",
        "If it cuts out while the room is still warm, the usual causes are a sensor or low refrigerant.",
        "If it will not switch on, check the remote batteries, the breaker and any timer first.",
        "A blinking light is a countable code: count the blinks, photograph the model sticker, and use only that brand's manual for the meaning.",
        "The code shows where the fault is, not which part has failed, so readings are needed before replacing anything.",
        "If the breaker keeps tripping, stop using the unit and do not keep switching it back on.",
      ],
    },
    {
      type: "cta",
      text: "If your aircon light is blinking and you do not know what it means, film the pattern and photograph the model sticker, then send them on LINE. I will help work out the code and what needs checking on site.",
    },
  ],
  faqs: [
    {
      q: "My aircon cuts out every 5 minutes and starts again. Is that normal?",
      a: "No. A healthy aircon runs continuously until the room reaches the set temperature before it switches off, which takes tens of minutes the first time. Cutting out every few minutes is usually an outdoor coil that cannot shed heat, low refrigerant, or a temperature sensor reading wrongly. Real readings are needed to tell which.",
    },
    {
      q: "What does the blinking light on the front of my aircon mean?",
      a: "The control board has detected a fault and is reporting it as a code. Count the blinks before the long pause and compare that number with the code table in the manual for your specific model, because every brand uses a different set of codes. If you no longer have the manual, film the light and photograph the model sticker and send them to me to check.",
    },
    {
      q: "My aircon will not switch on. Do I need a technician straight away?",
      a: "Try four things first: change the remote batteries and check no timer is set, check the aircon breaker is still on, check nothing is blocking the outdoor unit, then switch off at the breaker for five minutes to reset the board. If it still does not work after all four, contact me to come and take readings.",
    },
    {
      q: "After a reset it works again. Does that mean the problem is gone?",
      a: "Not necessarily. A reset clears a stuck state in the control board. If it was a one-off glitch from a power surge, that is the end of it. But if the problem comes back within hours or days, there is a real cause that has not been fixed, and resetting again and again is not a permanent solution.",
    },
    {
      q: "My aircon keeps tripping the breaker. Is it the aircon or the house wiring?",
      a: "It can be either. If it trips every time the compressor starts, the starting current is too high, usually from a failing capacitor or a compressor problem. If it trips when other appliances are switched on at the same time, the wiring and breaker are usually undersized, which I often find in older houses still on their original wiring. While you wait for a technician, do not keep switching the breaker back on to test it.",
    },
  ],
};
