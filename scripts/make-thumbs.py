#!/usr/bin/env python3
"""
สร้างภาพย่อของหน้าผลงาน — รันเมื่อเพิ่มหรือเปลี่ยนรูปใน portfolio เท่านั้น

    python3 scripts/make-thumbs.py

═══════════════════════════════════════════════════════════════════
ทำไมต้องมีสคริปต์นี้ (11 ส.ค. 2569)
═══════════════════════════════════════════════════════════════════
เว็บเลิกใช้ตัวแปลงภาพของ Vercel แล้ว เพราะโควตาการแปลงภาพหมดจนรูปขึ้น 402
ทั้งเว็บ (ดูเหตุผลเต็มใน next.config.ts) ผลข้างเคียงคือหน้าหมวดผลงาน
ต้องโหลดไฟล์เต็มความละเอียดมาแสดงเป็นภาพย่อขนาด 235 พิกเซล
หน้าเดียวมี 96 ภาพ รวมแล้วราว 13.8 MB ทั้งที่ผู้ใช้เห็นแค่ตารางภาพเล็ก ๆ

สคริปต์นี้ทำภาพย่อเก็บไว้ในโปรเจกต์ล่วงหน้า จึงไม่ต้องพึ่งโควตาของใคร
และไม่ต้องแปลงภาพตอนมีคนเข้าเว็บ

═══════════════════════════════════════════════════════════════════
เหตุผลของค่าที่เลือก
═══════════════════════════════════════════════════════════════════
- 480×480  : กริดแสดงจริงราว 235 พิกเซลบนจอใหญ่ และ 187 บนมือถือ
             เผื่อไว้เท่าตัวสำหรับจอความละเอียดสูง ถ้าย่อกว่านี้จะเห็นเบลอบนมือถือรุ่นใหม่
- ครอปสี่เหลี่ยมจัตุรัส : กริดใช้ aspect-square กับ object-cover อยู่แล้ว
             เบราว์เซอร์จึงครอปกลางภาพทิ้งเองอยู่ดี ครอปไว้ก่อนได้ภาพเหมือนกันเป๊ะ
             แต่ไม่ต้องส่งส่วนที่ถูกครอปทิ้งข้ามเน็ตมาให้เปลือง
- WebP q78 : เล็กกว่า JPEG คุณภาพเท่ากันราวหนึ่งในสาม และรองรับทุกเบราว์เซอร์ที่ใช้งานจริงแล้ว

ผลลัพธ์: จาก 144 KB เหลือราว 31 KB ต่อรูป (ลดลงราว 78%)

หมายเหตุ: ไฟล์เต็มความละเอียดยังอยู่ที่เดิมทุกไฟล์ ไม่ได้ลบ
เพราะยังถูกอ้างถึงใน contentUrl ของ ImageObject และในไซต์แมปภาพ
"""
import os
import re
import sys

try:
    from PIL import Image, ImageOps
except ImportError:
    sys.exit("ต้องติดตั้ง Pillow ก่อน:  python3 -m pip install Pillow")

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUBLIC = os.path.join(ROOT, "public")
THUMB_DIR = os.path.join(PUBLIC, "work", "thumb")
SIZE = 480
QUALITY = 78


# บล็อกใน lib/site.ts ที่ป้อนภาพให้ "กริดสี่เหลี่ยมจัตุรัส" เท่านั้น
#
# ห้ามเพิ่ม heroPhotos, servicePhotos, washerGallery หรือ workingPhotos เข้ามา
# เพราะสี่ชุดนั้นแสดงเป็นภาพใหญ่เต็มความกว้าง ถ้าใช้ภาพย่อ 480 พิกเซลจะเห็นแตกทันที
GRID_BLOCKS = [
    # (ข้อความเริ่มบล็อก, ข้อความจบบล็อก)
    ("export const portfolio: PortfolioCategory[] = [", "export const portfolioTotal"),
    ("export const gallery = [", "export type CaseStudy"),
]


def grid_sources():
    """ดึงรายชื่อไฟล์จากบล็อกที่ป้อนกริดภาพย่อ โดยไม่ต้อง import TypeScript"""
    src = open(os.path.join(ROOT, "lib", "site.ts"), encoding="utf8").read()
    found = []
    for begin, finish in GRID_BLOCKS:
        start = src.index(begin)
        end = src.index(finish, start)
        found += re.findall(r'src: "(/work/[^"]+)"', src[start:end])
    return sorted(set(found))


def main():
    os.makedirs(THUMB_DIR, exist_ok=True)
    sources = grid_sources()
    made = skipped = 0
    missing = []

    for rel in sources:
        full = os.path.join(PUBLIC, rel.lstrip("/"))
        if not os.path.exists(full):
            missing.append(rel)
            continue
        name = os.path.splitext(os.path.basename(rel))[0] + ".webp"
        out = os.path.join(THUMB_DIR, name)
        # ข้ามถ้าภาพย่อใหม่กว่าไฟล์ต้นฉบับอยู่แล้ว ทำให้รันซ้ำได้เร็ว
        if os.path.exists(out) and os.path.getmtime(out) >= os.path.getmtime(full):
            skipped += 1
            continue
        image = Image.open(full).convert("RGB")
        thumb = ImageOps.fit(image, (SIZE, SIZE), Image.LANCZOS, centering=(0.5, 0.5))
        thumb.save(out, "WEBP", quality=QUALITY, method=6)
        made += 1

    total = sum(
        os.path.getsize(os.path.join(THUMB_DIR, f)) for f in os.listdir(THUMB_DIR)
    )
    print(f"ภาพย่อที่สร้างใหม่ {made} ไฟล์ / ข้ามเพราะมีอยู่แล้ว {skipped} ไฟล์")
    print(f"รวมภาพย่อทั้งหมด {len(os.listdir(THUMB_DIR))} ไฟล์  {total / 1024 / 1024:.1f} MB")
    if missing:
        print(f"เตือน: ไม่พบไฟล์ต้นฉบับ {len(missing)} ไฟล์")
        for m in missing[:10]:
            print("  ", m)
        sys.exit(1)


if __name__ == "__main__":
    main()
