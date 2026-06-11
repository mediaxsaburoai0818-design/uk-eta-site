#!/usr/bin/env python3
"""下層ページ統一デザイン化（2026-06-11 okina依頼）。冪等。

- 白ヘッダー → ページ別UK背景画像＋薄い紺青オーバーレイの sub-hero
- h1 を白＋deco-head（オシャレ線）化、リードを白系に
- 後続セクションに .reveal（スクロール演出。Revealはlayoutで全ページ実装済み）
※h2のオシャレ線は globals.css の .heading-band 再定義でCSS一括対応済み
"""
import re
from pathlib import Path

ROOT = Path(__file__).parent.parent

PAGES = {
    'app/eta-info/what-is-eta/page.tsx': ('what-is-eta', 'INFORMACJE O UK ETA'),
    'app/eta-info/application/page.tsx': ('application', 'INFORMACJE O UK ETA'),
    'app/eta-info/required-documents/page.tsx': ('required-documents', 'INFORMACJE O UK ETA'),
    'app/eta-info/fee/page.tsx': ('fee', 'INFORMACJE O UK ETA'),
    'app/eta-info/expiration/page.tsx': ('expiration', 'INFORMACJE O UK ETA'),
    'app/eta-info/mobile-app/page.tsx': ('mobile-app', 'INFORMACJE O UK ETA'),
    'app/eta-info/official-gov-uk/page.tsx': ('official-gov-uk', 'INFORMACJE O UK ETA'),
    'app/eta-info/polish-community/page.tsx': ('polish-community', 'INFORMACJE O UK ETA'),
    'app/eta-info/status-check/page.tsx': ('status-check', 'INFORMACJE O UK ETA'),
    'app/eta-info/transit/page.tsx': ('transit', 'INFORMACJE O UK ETA'),
    'app/faq/page.tsx': ('faq', 'FAQ'),
    'app/site-info/about/page.tsx': ('about', 'INFORMACJE O STRONIE'),
    'app/site-info/contact/page.tsx': ('contact', 'INFORMACJE O STRONIE'),
    'app/site-info/privacy-policy/page.tsx': ('privacy-policy', 'INFORMACJE O STRONIE'),
    'app/site-info/agreement/page.tsx': ('agreement', 'INFORMACJE O STRONIE'),
    'app/sitemap/page.tsx': ('sitemap', 'MAPA STRONY'),
}

OLD_OPEN = '<section className="bg-white">\n        <div className="max-w-4xl mx-auto px-6 pt-12 pb-8">'

def hero_open(slug, kicker):
    return (
        '<section className="sub-hero relative overflow-hidden">\n'
        '        {/* eslint-disable-next-line @next/next/no-img-element */}\n'
        f'        <img src="/sub-hero/{slug}.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />\n'
        '        <div className="absolute inset-0 sub-hero-scrim" />\n'
        '        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-12 md:pt-14 md:pb-16">\n'
        f'          <p className="kicker mb-3 mt-4">{kicker}</p>'
    )

done = skipped = 0
for rel, (slug, kicker) in PAGES.items():
    f = ROOT / rel
    src = f.read_text(encoding='utf-8')
    if 'sub-hero' in src:
        skipped += 1
        continue
    if OLD_OPEN not in src:
        print(f'⚠️ anchor not found: {rel}')
        continue
    src = src.replace(OLD_OPEN, hero_open(slug, kicker), 1)
    # ヒーロー部のh1: deco-head＋白文字＋deco-line
    hero_end = src.index('</section>')
    head = src[:hero_end]
    head = head.replace('text-3xl md:text-4xl font-bold text-[#022444]', 'deco-head text-3xl md:text-4xl font-bold text-white', 1)
    # h1開きタグ直後にdeco-line（h1はstyle属性を含む複数行タグ）
    head = re.sub(r'(<h1[^>]*?>\n)', r'\1            <span className="deco-line" />\n', head, count=1, flags=re.DOTALL)
    # リード文を白系に（ヒーロー内のみ）
    head = head.replace('<p className="text-gray-600 leading-relaxed">', '<p className="text-white/85 leading-relaxed">')
    head = head.replace('<p className="text-gray-600 mb-6 leading-relaxed">', '<p className="text-white/85 mb-6 leading-relaxed">')
    src = head + src[hero_end:]
    # 後続セクションにreveal
    body = src[hero_end:]
    for cls in ['bg-gray-50', 'bg-white', 'bg-[#f3f6f9]']:
        body = body.replace(f'<section className="{cls}">', f'<section className="{cls} reveal">')
    src = src[:hero_end] + body
    f.write_text(src, encoding='utf-8')
    done += 1
print(f'patched={done} skipped={skipped}')
