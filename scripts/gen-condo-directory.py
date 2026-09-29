# -*- coding: utf-8 -*-
"""สร้าง lib/condo-directory.ts จากผลค้นคว้า (zmyhome/baania/condonayoo/dotproperty/fazwaz) 29 ก.ย. 2569"""
import json, re, io, os
D = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'data', 'condo-research')
A = json.load(open(os.path.join(D, 'condo-dir-a.json'), encoding='utf-8'))
B = json.load(open(os.path.join(D, 'condo-dir-b.json'), encoding='utf-8'))
EN2TH = {'Suthep': 'สุเทพ', 'Chang Phueak': 'ช้างเผือก', 'Pa Daet': 'ป่าแดด', 'Mae Hia': 'แม่เหียะ', 'San Phi Suea': 'สันผีเสื้อ',
         'Si Phum': 'ศรีภูมิ', 'Pa Tan': 'ป่าตัน', 'Chang Moi': 'ช้างม่อย', 'Hai Ya': 'หายยา'}

def year(v):
    if isinstance(v, int): return v
    if isinstance(v, str):
        m = re.search(r'(19|20)\d\d', v)
        return int(m.group(0)) if m else None
    return None

def floors(v):
    if v is None: return None
    s = str(v).strip()
    return s if re.fullmatch(r'\d{1,2}(-\d{1,2})?', s) else None

def key(n):
    return re.sub(r'[^a-z0-9ก-๙]', '', (n or '').lower().replace('condominium', 'condo').replace('chiang mai', '').replace('chiangmai', ''))

# ชื่ออังกฤษที่แหล่งตัดวงเล็บผิด แก้ตามชื่อจริงของโครงการ
EN_FIX = {'ทรัมส์ สแควร์': 'Trams Square (Trams Condominium 2)', 'ชมดอย คอนโดมิเนียม 2': 'Chom Doi Condominium 2', 'ชมดอย คอนโดเต็ล 1': 'Chom Doi Condotel 1'}
rows, seen = [], set()
for src, items in (('a', A), ('b', B)):
    for x in items:
        t = EN2TH.get(x['tambon'], x['tambon'])
        y = year(x.get('completed'))
        if y and y >= 2027: continue           # ยังไม่สร้างเสร็จ ไม่ต้องลงรายชื่อ
        k = key(x.get('nameEn') or x.get('nameTh'))
        if not k or k in seen: continue
        seen.add(k)
        rows.append({
            'th': (x.get('nameTh') or '').strip() or None,
            'en': EN_FIX.get((x.get('nameTh') or '').strip()) or (x.get('nameEn') or x.get('nameTh') or '').strip(),
            't': t,
            'r': (x.get('road') or '').strip() or None,
            'y': y,
            'f': floors(x.get('floors')),
        })

assert not [r for r in rows if re.search('[\u0e00-\u0e7f]', r['en'])], [r['en'] for r in rows if re.search('[\u0e00-\u0e7f]', r['en'])]
rows.sort(key=lambda r: (r['t'], (r['en'] or '').lower()))
# slug ของหน้าคอนโด: จากชื่ออังกฤษ ชนกันให้ต่อท้ายด้วยตำบล (โรมัน) ห้ามเปลี่ยนภายหลังเพราะเป็น URL
TH2EN = {v: k for k, v in EN2TH.items()}
TH2EN.update({'หนองป่าครั่ง': 'nong-pa-khrang', 'ช้างคลาน': 'chang-khlan', 'ฟ้าฮ่าม': 'fa-ham', 'ท่าศาลา': 'tha-sala', 'วัดเกต': 'wat-ket', 'หนองหอย': 'nong-hoi',
  'หนองหาร': 'nong-han', 'สันผักหวาน': 'san-phak-wan', 'หนองจ๊อม': 'nong-chom', 'สันทรายน้อย': 'san-sai-noi', 'สันพระเนตร': 'san-phra-net', 'หนองควาย': 'nong-khwai',
  'หางดง': 'hang-dong', 'สันทรายหลวง': 'san-sai-luang', 'สันนาเม็ง': 'san-na-meng', 'หนองผึ้ง': 'nong-phueng', 'ไชยสถาน': 'chai-sathan'})
def slugify(x): return re.sub(r'-+', '-', re.sub(r'[^a-z0-9]+', '-', x.lower().replace('@', ' at ').replace('&', ' and '))).strip('-')
used = set(['directory', 'supalai', 'ornsirin', 'dcondo'])
for r in rows:
    base = slugify(r['en']) or 'condo'
    sl = base
    if sl in used: sl = f"{base}-{slugify(TH2EN.get(r['t'], 'cm'))}"
    n = 2
    while sl in used: sl = f"{base}-{n}"; n += 1
    used.add(sl); r['s'] = sl
def js(v): return json.dumps(v, ensure_ascii=False)
out = ['/**',
       ' * ทำเนียบคอนโดในเขตบริการ (สร้างอัตโนมัติ 29 ก.ย. 2569 จาก scripts/gen-condo-directory.py ห้ามแก้มือ)',
       ' * ที่มา: ข้อมูลประกาศสาธารณะ zmyhome, baania, condonayoo, dotproperty, fazwaz ตรวจตำบลจากที่อยู่โครงการ',
       ' * ตัดโครงการที่ยังไม่แล้วเสร็จ (คาดเสร็จปี 2570 ขึ้นไป) และโครงการที่แหล่งระบุตำบลขัดกันจนสรุปไม่ได้',
       ' * ร้านไม่ได้เป็นตัวแทนหรือพันธมิตรของโครงการใด รายชื่อมีไว้ให้ลูกค้าหาอาคารของตัวเองเจอ',
       ' */',
       'export type CondoEntry = { s: string; th: string | null; en: string; t: string; r: string | null; y: number | null; f: string | null };',
       'export const condoDirectory: CondoEntry[] = [']
for r in rows:
    out.append('  { s: %s, th: %s, en: %s, t: %s, r: %s, y: %s, f: %s },' % (js(r['s']), js(r['th']), js(r['en']), js(r['t']), js(r['r']), js(r['y']), js(r['f'])))
out.append('];')
io.open('/Users/mac/chiangmai-air/lib/condo-directory.ts', 'w', encoding='utf-8').write('\n'.join(out) + '\n')
from collections import Counter
print(len(rows)); print(Counter(r['t'] for r in rows).most_common())
