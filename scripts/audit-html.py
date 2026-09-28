# -*- coding: utf-8 -*-
"""ตรวจทั้งเว็บจาก HTML ที่ build แล้ว (.next/server/app)"""
import re, html, pathlib, collections, json, sys
ROOT = pathlib.Path('/Users/mac/chiangmai-air/.next/server/app')
HOST = 'https://xn--72cahb0jef1en2cxb8ik9a5dn3d.com'
pages = {}
for p in ROOT.rglob('*.html'):
    rel = '/' + str(p.relative_to(ROOT))[:-5]
    rel = '/' if rel == '/index' else rel
    if rel in ('/_not-found', '/_global-error'):
        continue
    pages[rel] = p.read_text(encoding='utf-8')
paths = set(pages)
# redirects จาก next.config (ลิงก์ที่ชี้ไปหน้าที่ redirect ถือว่ายังใช้ได้ แต่ควรแก้)
cfg = open('/Users/mac/chiangmai-air/next.config.ts', encoding='utf-8').read()
redirects = set(re.findall(r'source: "([^"]+)"', cfg))
issues = collections.defaultdict(list)
titles = collections.defaultdict(list); descs = collections.defaultdict(list)
BAD = [r'เว็บนี้', r'หน้านี้', r'บอกตรง ๆ', r'รอบเดินทาง', r'รวมกันเป็นวัน', r'ที่ตั้งของผมโดยตรง', r'ลูกค้าเลือกมากที่สุด',
       r'30 วันทุกแบบ', r'ทั้งแบบธรรมดาและพรีเมี่ยม', r'20:00', r'19:00', r'8 ?pm', r'8:00 ?pm', r'20 ?点',
       r'ไม่รวม VAT', r'รวม VAT', r'excl(?:uding)? VAT', r'incl(?:uding)? VAT', r'รอเก้อ', r'เจ้าอื่น', r'คุณเมย์', r'คุณเอก',
       r'any clean, standard or full', r'清洗保修 30 天，新机', r'รับซ่อมเครื่องซักผ้า', r'Google Business', r'ค่ะ']
for path, t in pages.items():
    head = t[:t.find('</head>')] if '</head>' in t else t
    m = re.search(r'<title>(.*?)</title>', head, re.S); title = html.unescape(m.group(1)) if m else ''
    m = re.search(r'<meta name="description" content="([^"]*)"', head); desc = html.unescape(m.group(1)) if m else ''
    m = re.search(r'<link rel="canonical" href="([^"]*)"', head); canon = m.group(1) if m else ''
    robots = re.search(r'<meta name="robots" content="([^"]*)"', head)
    noindex = bool(robots and 'noindex' in robots.group(1))
    alts = dict((l, h) for h, l in re.findall(r'<link rel="alternate" href="([^"]*)" hrefLang="([^"]*)"', head))
    alts.update(dict((l, h) for l, h in re.findall(r'<link rel="alternate" hrefLang="([^"]*)" href="([^"]*)"', head)))
    body = t[t.find('<body'):]
    body_nos = re.sub(r'<script.*?</script>|<style.*?</style>', '', body, flags=re.S)
    text = html.unescape(re.sub(r'<[^>]+>', ' ', body_nos))
    lang = 'en' if path.startswith('/en') else 'zh' if path.startswith('/zh') else 'th'
    if not title: issues['no-title'].append(path)
    else: titles[title].append(path)
    L = len(title)
    if L > 65: issues['title>65'].append(f'{path} ({L}) {title}')
    if not desc: issues['no-desc'].append(path)
    else:
        descs[desc].append(path)
        if len(desc) > 170: issues['desc>170'].append(f'{path} ({len(desc)})')
        if len(desc) < 50: issues['desc<50'].append(f'{path} ({len(desc)}) {desc}')
    if not canon: issues['no-canonical'].append(path)
    elif canon.replace(HOST, '') not in (path, path + '/') and not (path == '/' and canon in (HOST, HOST + '/')):
        issues['canonical-mismatch'].append(f'{path} -> {canon}')
    h1 = re.findall(r'<h1[\s>]', body_nos)
    if len(h1) != 1: issues['h1-count'].append(f'{path} ({len(h1)})')
    for src, alt in re.findall(r'<img[^>]*?(?:src="([^"]*)")?[^>]*?alt="([^"]*)"', body_nos):
        pass
    for tag in re.findall(r'<img[^>]*>', body_nos):
        if 'alt=' not in tag: issues['img-no-alt'].append(path)
        elif 'alt=""' in tag and 'aria-hidden' not in tag: issues['img-empty-alt'].append(path)
    # hreflang reciprocity
    for l, h in alts.items():
        tgt = h.replace(HOST, '') or '/'
        if tgt not in paths and tgt.rstrip('/') not in paths:
            issues['hreflang-target-missing'].append(f'{path} [{l}] -> {tgt}')
        else:
            tt = pages.get(tgt) or pages.get(tgt.rstrip('/'))
            back = re.findall(r'hrefLang="[^"]*" href="([^"]*)"|href="([^"]*)" hrefLang', tt[:tt.find('</head>')])
            backs = {(a or b).replace(HOST, '') or '/' for a, b in back}
            if path not in backs and tgt != path:
                issues['hreflang-not-reciprocal'].append(f'{path} [{l}] -> {tgt}')
    # internal links
    for href in set(re.findall(r'href="(/[^"#?]*)', body_nos)):
        h = href.rstrip('/') or '/'
        if h.startswith(('/_next', '/work/', '/brands/', '/icon', '/apple', '/og', '/favicon')) or re.search(r'\.(jpg|png|webp|svg|txt|xml|pdf|ico|mp4)$', h):
            continue
        if h not in paths:
            if h in redirects: issues['link-to-redirect'].append(f'{path} -> {h}')
            else: issues['broken-link'].append(f'{path} -> {h}')
    for b in BAD:
        for m in re.finditer(b, text):
            issues['bad-phrase'].append(f'{path}: …{text[max(0, m.start()-40):m.end()+40].strip()}…'.replace('\n', ' '))
    if lang != 'th':
        thai = re.findall(r'[฀-๿]{4,}', text)
        if len(thai) > 25: issues['thai-on-foreign-page'].append(f'{path} ({len(thai)} Thai words) e.g. {thai[:6]}')
    if noindex: issues['noindex'].append(path)
for t, ps in titles.items():
    if len(ps) > 1: issues['dup-title'].append(f'{t} :: {ps[:6]}{" +" + str(len(ps) - 6) if len(ps) > 6 else ""}')
for d, ps in descs.items():
    if len(ps) > 1: issues['dup-desc'].append(f'{d[:60]} :: {ps[:6]}')
# sitemap
sm = (ROOT / 'sitemap.xml.body').read_text(encoding='utf-8')
smurls = {u.replace(HOST, '') or '/' for u in re.findall(r'<loc>([^<]+)</loc>', sm)}
for pth in paths:
    if pth not in smurls and pth not in ('/sitemap.xml', '/robots.txt') and not pth.startswith('/portfolio/') :
        issues['not-in-sitemap'].append(pth)
for u in smurls:
    if u not in paths and not u.startswith('/portfolio/'): issues['sitemap-url-missing-page'].append(u)
print('pages', len(pages), 'sitemap', len(smurls))
out = {k: v for k, v in issues.items()}
json.dump(out, open(sys.argv[1] if len(sys.argv) > 1 else '/dev/stdout', 'w'), ensure_ascii=False, indent=1)
for k, v in sorted(out.items(), key=lambda x: -len(x[1])):
    print(f'{k}: {len(v)}')
