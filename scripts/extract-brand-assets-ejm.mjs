// Extracts EJM Locações brand assets out of the social-media exports in export/.
//
//   node scripts/extract-brand-assets-ejm.mjs
//
// Produces:
//   public/sites/ejm-locacoes/logo-ejm.png            circular badge, transparent background
//   public/sites/ejm-locacoes/cars/<model>.png        car cutouts, transparent background
//
// The exports are flat-background compositions, so the background is removed with a
// border-seeded flood fill: only background-coloured pixels *connected to the edge* are
// cleared, which keeps dark tyres/windows inside the car intact.
import { mkdir, writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const OUT = 'public/sites/ejm-locacoes';

/** Border-seeded flood fill → alpha 0 for everything reachable from the edge. */
function clearBackground(data, width, height, channels, tolerance) {
  const at = (x, y) => (y * width + x) * channels;
  // Seed colour = average of the four corners (all exports are flat-bg).
  const corners = [
    [0, 0],
    [width - 1, 0],
    [0, height - 1],
    [width - 1, height - 1],
  ].map(([x, y]) => {
    const i = at(x, y);
    return [data[i], data[i + 1], data[i + 2]];
  });
  const seed = [0, 1, 2].map(
    (c) => Math.round(corners.reduce((s, p) => s + p[c], 0) / corners.length)
  );

  const visited = new Uint8Array(width * height);
  const stack = [];
  for (let x = 0; x < width; x++) {
    stack.push([x, 0], [x, height - 1]);
  }
  for (let y = 0; y < height; y++) {
    stack.push([0, y], [width - 1, y]);
  }

  while (stack.length) {
    const [x, y] = stack.pop();
    if (x < 0 || y < 0 || x >= width || y >= height) continue;
    const p = y * width + x;
    if (visited[p]) continue;
    const i = at(x, y);
    const dist =
      Math.abs(data[i] - seed[0]) +
      Math.abs(data[i + 1] - seed[1]) +
      Math.abs(data[i + 2] - seed[2]);
    if (dist > tolerance) continue;
    visited[p] = 1;
    data[i + 3] = 0;
    stack.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
  }
  return data;
}

async function cutout({ src, left, top, width, height, tolerance, out, resize }) {
  const { data, info } = await sharp(src)
    .extract({ left, top, width, height })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  clearBackground(data, info.width, info.height, info.channels, tolerance);

  let pipeline = sharp(data, {
    raw: { width: info.width, height: info.height, channels: info.channels },
  }).trim({ threshold: 1 });

  if (resize) pipeline = pipeline.resize(resize, null, { kernel: 'lanczos3' });

  const buf = await pipeline.png({ compressionLevel: 9 }).toBuffer();
  await writeFile(out, buf);
  const meta = await sharp(buf).metadata();
  console.log(`OK   ${out} (${meta.width}x${meta.height}, ${buf.length} bytes)`);
}

await mkdir(`${OUT}/cars`, { recursive: true });

// ---- Logo: the white circular badge sits at 240,240 in the carrossel exports ----
await cutout({
  src: 'export/1-preco-carrossel/07-cta.png',
  left: 232,
  top: 232,
  width: 208,
  height: 208,
  tolerance: 40,
  out: `${OUT}/logo-ejm.png`,
  resize: 512,
});

// ---- Cars ----
// Bottoms are set just above where the price text block starts in each export
// (measured from the row-density profile), so no copy bleeds into the cutout.
// The Gol export sits on the light background and its car is black, so it takes a
// much wider tolerance to clear the soft reflection under the wheels.
// The Kwid is NOT taken from this navy-background export: its black tyres are
// close enough to the navy that the flood fill leaked into them and punched
// holes through the wheels, sill and bumper. It comes from the white-background
// photo below instead.
const CARS = [
  { src: 'export/1-preco-carrossel/02-gol.png', box: [230, 950, 1720, 1055], tolerance: 150, out: 'gol' },
  { src: 'export/1-preco-carrossel/03-argo.png', box: [180, 880, 1660, 930], tolerance: 60, out: 'argo' },
  { src: 'export/1-preco-carrossel/04-cronos.png', box: [230, 920, 1630, 840], tolerance: 60, out: 'cronos' },
];

for (const car of CARS) {
  const [left, top, width, height] = car.box;
  await cutout({
    src: car.src,
    left,
    top,
    width,
    height,
    tolerance: car.tolerance,
    out: `${OUT}/cars/${car.out}.png`,
    resize: 900,
  });
}

// ---- Kwid: headlights on, supplied as a full-frame photo on a white
// background (no crop needed). Used by both the hero and the catalog card.
//
// Body and background are both near-white, so tolerance was tuned by comparing
// 28 / 60 / 100 on the navy hero: 28 leaves a grey shadow smudge, 100 starts
// eating the front bumper. 60 clears the shadow with the car intact. ----
{
  const { width, height } = await sharp(
    'export/1-preco-carrossel/08-kwid-farol-aceso.jpg'
  ).metadata();
  await cutout({
    src: 'export/1-preco-carrossel/08-kwid-farol-aceso.jpg',
    left: 0,
    top: 0,
    width,
    height,
    tolerance: 60,
    out: `${OUT}/cars/kwid.png`,
    resize: 1200,
  });
}

console.log('\nDone.');
