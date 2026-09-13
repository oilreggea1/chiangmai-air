"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * การ์ดวิดีโอที่ยังไม่โหลดอะไรเลยจนกว่าจะกดเล่น
 *
 * ═══════════════════════════════════════════════════════════════════
 * ที่มา (12 ส.ค. 2569)
 * ═══════════════════════════════════════════════════════════════════
 * ของเดิมใช้ <video preload="none" poster="..."> ซึ่งตัววิดีโอไม่โหลดจริงตามที่ตั้งใจ
 * แต่ภาพ poster ถูกโหลดทันทีเสมอ เพราะแอตทริบิวต์ poster ไม่อยู่ใต้กฎ preload
 * และไม่มี loading="lazy" ให้ใช้
 *
 * ผลจากการวัดด้วย Lighthouse บนหน้าแรก: ภาพ poster สามใบรวม 163 KB
 * ถูกดาวน์โหลดเสร็จตั้งแต่ 740–802 ms ซึ่งเป็นช่วงเดียวกับที่ฟอนต์และสคริปต์กำลังแย่งกันโหลด
 * ทั้งที่ส่วนวิดีโออยู่ใต้ fold และผู้ใช้ยังไม่เลื่อนลงไปเห็นด้วยซ้ำ
 *
 * วิธีแก้: วาดเป็น next/image แบบ lazy ไว้ก่อน ซึ่งจะไม่โหลดจนกว่าจะเลื่อนใกล้ถึง
 * แล้วค่อยสลับเป็น <video autoPlay> ตอนผู้ใช้กด จำนวนคลิกของผู้ใช้เท่าเดิม
 * เพราะเดิมก็ต้องกดปุ่มเล่นบนตัววิดีโออยู่แล้ว
 */
/**
 * โหมด eager (13 ก.ย. 2569 — เพิ่มเพื่อให้ Google เห็นว่าหน้ามีวิดีโอจริง)
 *
 * การ์ดปกติวาดเป็นภาพกับปุ่มเล่น ใน HTML ที่ส่งให้บอตจึงไม่มีแท็ก <video> เลยสักตัว
 * Google ใช้การพบตัวเล่นวิดีโอบนหน้าเป็นเงื่อนไขหนึ่งของการจัดทำดัชนีวิดีโอ
 * การมีแต่ข้อมูลโครงสร้างอย่างเดียวจึงไม่พอ
 *
 * คลิปแรกของแต่ละหน้าจึงวาดเป็น <video preload="none"> ของจริง
 * preload="none" แปลว่าไฟล์วิดีโอยังไม่ถูกโหลดจนกว่าจะกดเล่น สิ่งที่โหลดเพิ่มคือภาพ poster
 * หนึ่งใบราว 33 KB ซึ่งแลกกับการที่หน้ามีตัวเล่นวิดีโอให้บอตเห็นจริง
 * คลิปที่เหลือยังเป็นการ์ดภาพแบบ lazy เหมือนเดิม
 */
export function ReelCard({ id, title, eager = false }: { id: string; title: string; eager?: boolean }) {
  const [playing, setPlaying] = useState(false);

  if (eager && !playing) {
    return (
      <li
        id={`video-${id}`}
        className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card"
      >
        <video
          controls
          preload="none"
          playsInline
          poster={`/videos/reels/${id}.webp`}
          className="aspect-[9/16] w-full bg-slate-950 object-cover"
          aria-label={title}
        >
          <source src={`/videos/reels/${id}.mp4`} type="video/mp4" />
          เบราว์เซอร์ของคุณไม่รองรับการเล่นวิดีโอ
        </video>
        <p className="px-4 py-4 font-semibold leading-7">{title}</p>
      </li>
    );
  }

  return (
    <li
      id={`video-${id}`}
      className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card"
    >
      {playing ? (
        <video
          controls
          autoPlay
          playsInline
          className="aspect-[9/16] w-full bg-slate-950 object-cover"
          aria-label={title}
        >
          <source src={`/videos/reels/${id}.mp4`} type="video/mp4" />
          เบราว์เซอร์ของคุณไม่รองรับการเล่นวิดีโอ
        </video>
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group relative block w-full cursor-pointer"
          aria-label={`เล่นวิดีโอ ${title}`}
        >
          <Image
            src={`/videos/reels/${id}.webp`}
            alt={title}
            width={540}
            height={960}
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="aspect-[9/16] w-full bg-slate-950 object-cover"
          />
          <span className="absolute inset-0 grid place-items-center">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-black/55 text-white backdrop-blur-sm transition-transform group-hover:scale-110">
              {/* สามเหลี่ยมปุ่มเล่น */}
              <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </button>
      )}
      <p className="px-4 py-4 font-semibold leading-7">{title}</p>
    </li>
  );
}
