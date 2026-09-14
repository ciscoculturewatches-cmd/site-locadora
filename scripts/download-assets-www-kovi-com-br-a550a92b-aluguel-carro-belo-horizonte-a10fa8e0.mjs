// Downloads every asset used by https://www.kovi.com.br/aluguel-carro-belo-horizonte
// into this page's namespaced asset root (plus the site-shared root for logos/fonts/favicon).
//
//   node scripts/download-assets-www-kovi-com-br-a550a92b-aluguel-carro-belo-horizonte-a10fa8e0.mjs
//
// Writes a manifest to the page's research folder so a missing asset is auditable.
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';

const SHARED = 'public/sites/www-kovi-com-br-a550a92b/shared';
const PAGE = 'public/sites/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0';
const MANIFEST =
  'docs/research/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/ARTIFACT_MANIFEST.md';

const HUBFS = 'https://22032859.fs1.hubspotusercontent-na1.net/hubfs/22032859';
const KOVI = 'https://www.kovi.com.br';

/** @type {{url: string, to: string, note: string}[]} */
const ASSETS = [
  // ---- Dotties Vanilla (proprietary brand face, self-hosted per user decision) ----
  { url: `${HUBFS}/Kovi-2024/Fonts/Dotties-Vanilla-Regular/DottiesVanilla-Regular.woff2`, to: `${SHARED}/fonts/DottiesVanilla-Regular.woff2`, note: 'brand font 400' },
  { url: `${HUBFS}/Kovi-2024/Fonts/DottiesVanilla-Bold.woff2`, to: `${SHARED}/fonts/DottiesVanilla-Bold.woff2`, note: 'brand font 700' },
  { url: `${HUBFS}/Kovi-2024/Fonts/DottiesVanillaHeavy/DottiesVanillaHeavy.woff2`, to: `${SHARED}/fonts/DottiesVanilla-Heavy.woff2`, note: 'brand font 800' },
  { url: `${KOVI}/hubfs/chaos-app/fonts/dotties-vanilla/DottiesVanilla-Medium.ttf`, to: `${SHARED}/fonts/DottiesVanilla-Medium.ttf`, note: 'brand font 500 (ttf only upstream)' },

  // ---- Site-shared brand marks ----
  { url: `${KOVI}/hubfs/Kovi-2024/Images/Logo%20branco%20-%20horizontal.svg`, to: `${SHARED}/logo-white-horizontal.svg`, note: 'header logo, desktop' },
  { url: `${KOVI}/hubfs/Kovi-2024/Images/Logo%20preto%20-%20horizontal.svg`, to: `${SHARED}/logo-black-horizontal.svg`, note: 'header logo, mobile drawer' },
  { url: `${KOVI}/hs-fs/hubfs/Logo_KOVI_2022%201.webp?width=161&height=41&name=Logo_KOVI_2022%201.webp`, to: `${SHARED}/logo-footer.webp`, note: 'footer logo 161x41' },
  { url: `${KOVI}/hubfs/kovinho-1.png`, to: `${SHARED}/favicon.png`, note: 'favicon' },

  // ---- Hero (art-directed pair) ----
  { url: `${KOVI}/hubfs/Banner%20Cidades-1.png`, to: `${PAGE}/images/hero-desktop.png`, note: 'hero, >=992px, 4320x1281' },
  { url: `${KOVI}/hubfs/Banner%20Argo%20cidades-1.png`, to: `${PAGE}/images/hero-mobile.png`, note: 'hero, <992px, 1080x569' },

  // ---- Car catalog ----
  { url: `${HUBFS}/Argo_11zon.webp`, to: `${PAGE}/images/car-fiat-argo.webp`, note: 'Fiat Argo 1200x760' },
  { url: `${HUBFS}/Fotos%20Hatch%20Comfort/Polo%20Track%20Preto%20-%20Hatch%20Comfort.png`, to: `${PAGE}/images/car-vw-polo.png`, note: 'VW Polo 1200x760' },
  { url: `${HUBFS}/raw_assets/kovi-website/354/js_client_assets/assets/kovi-icone-kovi-proprio-horizontal-CKYcAeqa.png`, to: `${PAGE}/images/plan-kovi-proprio.png`, note: 'plan badge 1306x553' },

  // ---- Uber benefits ----
  { url: `${KOVI}/hubfs/Frame%201410087900.png`, to: `${PAGE}/images/uber-driver.png`, note: 'Uber section photo 465x366' },

  // ---- Testimonials ----
  { url: `${KOVI}/hs-fs/hubfs/Kovi-2024/Images/arrow-left.png?width=46&height=73&name=arrow-left.png`, to: `${PAGE}/images/arrow-left.png`, note: 'carousel prev 46x73' },
  { url: `${KOVI}/hs-fs/hubfs/Kovi-2024/Images/arrow-right.png?width=46&height=73&name=arrow-right.png`, to: `${PAGE}/images/arrow-right.png`, note: 'carousel next 46x73' },
  { url: `${KOVI}/hs-fs/hubfs/Kovi-2024/Images/star.png?width=332&height=60&name=star.png`, to: `${PAGE}/images/stars.png`, note: '5-star rating strip 332x60' },
  { url: `${KOVI}/hs-fs/hubfs/Kovi-2024/Images/close_black.png?width=64&height=64&name=close_black.png`, to: `${PAGE}/images/close-black.png`, note: 'video modal close 64x64' },
  { url: 'https://i.ytimg.com/vi/eO5z1JZca_A/hqdefault.jpg', to: `${PAGE}/images/testimonial-guilherme.jpg`, note: 'YouTube thumb eO5z1JZca_A' },
  { url: 'https://i.ytimg.com/vi/WNIdnOtPoTI/hqdefault.jpg', to: `${PAGE}/images/testimonial-marina.jpg`, note: 'YouTube thumb WNIdnOtPoTI' },
  { url: 'https://i.ytimg.com/vi/371qcyNT0qI/hqdefault.jpg', to: `${PAGE}/images/testimonial-jonatan.jpg`, note: 'YouTube thumb 371qcyNT0qI' },
  { url: 'https://i.ytimg.com/vi/Eexevf6-JFc/hqdefault.jpg', to: `${PAGE}/images/testimonial-getulio.jpg`, note: 'YouTube thumb Eexevf6-JFc' },
  { url: 'https://i.ytimg.com/vi/Wlh6R64S558/hqdefault.jpg', to: `${PAGE}/images/testimonial-fabricio.jpg`, note: 'YouTube thumb Wlh6R64S558' },
  { url: 'https://i.ytimg.com/vi/JMvyhsIGxPc/hqdefault.jpg', to: `${PAGE}/images/testimonial-moura.jpg`, note: 'YouTube thumb JMvyhsIGxPc' },

  // ---- Footer ----
  { url: `${KOVI}/hs-fs/hubfs/Kovi-2024/Images/Divider%20image.png?width=1440&height=156&name=Divider%20image.png`, to: `${PAGE}/images/footer-divider.png`, note: 'pink wave divider 1440x156' },
];

const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36';

async function fetchOne(asset) {
  try {
    const res = await fetch(asset.url, { headers: { 'User-Agent': UA, Referer: `${KOVI}/` } });
    if (!res.ok) return { ...asset, ok: false, error: `HTTP ${res.status}` };
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length === 0) return { ...asset, ok: false, error: 'empty body' };
    await mkdir(dirname(asset.to), { recursive: true });
    await writeFile(asset.to, buf);
    return { ...asset, ok: true, bytes: buf.length, type: res.headers.get('content-type') };
  } catch (err) {
    return { ...asset, ok: false, error: err.message };
  }
}

const results = [];
for (let i = 0; i < ASSETS.length; i += 4) {
  const batch = ASSETS.slice(i, i + 4);
  const settled = await Promise.all(batch.map(fetchOne));
  for (const r of settled) {
    console.log(`${r.ok ? 'OK  ' : 'FAIL'} ${r.to}${r.ok ? ` (${r.bytes} bytes)` : ` — ${r.error}`}`);
  }
  results.push(...settled);
}

const ok = results.filter((r) => r.ok);
const failed = results.filter((r) => !r.ok);

const lines = [
  '# Artifact Manifest — Kovi Belo Horizonte',
  '',
  `Generated by \`scripts/${'download-assets-www-kovi-com-br-a550a92b-aluguel-carro-belo-horizonte-a10fa8e0.mjs'}\`.`,
  '',
  `**${ok.length} of ${results.length} assets downloaded.**`,
  '',
  '| Local path | Bytes | Source | Note |',
  '| --- | --- | --- | --- |',
  ...ok.map((r) => `| \`${r.to}\` | ${r.bytes} | ${r.url} | ${r.note} |`),
  '',
];
if (failed.length) {
  lines.push(
    '## Missing assets',
    '',
    '| Intended path | Source | Error |',
    '| --- | --- | --- |',
    ...failed.map((r) => `| \`${r.to}\` | ${r.url} | ${r.error} |`),
    ''
  );
} else {
  lines.push('## Missing assets', '', 'None — every asset resolved.', '');
}
lines.push(
  '## Notes',
  '',
  '- No generated/substitute assets were used. Every file above is the original from Kovi.',
  '- `DottiesVanilla-*` is Kovi\'s proprietary brand typeface, self-hosted here at the user\'s',
  '  explicit direction (2026-09-14) for pixel-accurate headings. It is licensed to Kovi, not to',
  '  this project — revisit before any public deployment.',
  '- Testimonial thumbnails are YouTube `hqdefault.jpg` stills; the videos themselves are not',
  '  mirrored, the modal links out to youtube.com as the original does.',
  ''
);

await mkdir(dirname(MANIFEST), { recursive: true });
await writeFile(MANIFEST, lines.join('\n'), 'utf8');
console.log(`\n${ok.length}/${results.length} downloaded. Manifest: ${MANIFEST}`);
if (failed.length) process.exitCode = 1;
