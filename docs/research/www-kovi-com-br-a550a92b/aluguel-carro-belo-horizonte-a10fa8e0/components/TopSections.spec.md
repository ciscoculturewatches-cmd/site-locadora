# CitySelectorBar + HeroBanner + SeoIntro Specification

Three small consecutive sections, each its own component file.

- **Screenshot:** `docs/design-references/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/s01-header-citybar-hero.png`
  and `.../s02-seo-intro-catalog-top.png`
- **Interaction model:** all three are **static**.

---

## 1. CitySelectorBar

- **Target file:** `src/components/sites/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/CitySelectorBar.tsx`

### DOM Structure
```
<section class="show-city-selected">              full width, height 48px, white
  <div class="list-city">                         max-width 1180px, centred, flex, justify-between
    <div class="city-name">                       flex, align-items center, gap 8px
      <GlobePinIcon />                            28×28
      <strong>Belo Horizonte - MG</strong>
    </div>
    <div class="seta-to-right">                   28×28
      <ChevronRightIcon />
    </div>
```

### Computed Styles
**`section`** — width `100%`; height `48px`; background `#fff`
**`.list-city`** — width `100%`; maxWidth `1180px`; margin-inline `auto`; padding `10px 0`;
display `flex`; justifyContent `space-between`; alignItems `center`; gap `30px`; height `48px`
**`.city-name`** — display `flex`; alignItems `center`; gap `8px`; width `199.984px`; height `28px`
**Label `<strong>`** — the text renders **pink and underlined**:
color `rgb(255, 53, 90)`; textDecoration `underline`; fontFamily `Roboto, sans-serif`;
fontSize `16px`; fontWeight `700`
**`.seta-to-right`** — 28×28, `ChevronRightIcon` (viewBox `0 0 24 24`), colour `rgb(38,42,48)`

### Text Content (verbatim)
`Belo Horizonte - MG`

### States & Behaviors
The whole `.list-city` is clickable on the original and opens a city-selector modal. **That modal
is out of scope for this clone** (documented in BEHAVIORS.md). Render the bar as a `<button>` with
`cursor: pointer` that does nothing, so the affordance is right without shipping a dead modal.

### Responsive
Unchanged at every width: height stays `48px`, full-bleed white, content box shrinks with the
viewport (`max-width: 1180px`, side padding `16px` below 1212px).

---

## 2. HeroBanner

- **Target file:** `src/components/sites/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/HeroBanner.tsx`

### DOM Structure
```
<section class="hero-image-bg">      overflow hidden
  <img class="desktop" />            shown ≥992px
  <img class="mobile" />             shown <992px
```

### Computed Styles
**`section`** — width `100%`; height `422.547px` at 1440; overflow `hidden`; display `block`
**`img.desktop`** — width `100%`; height `auto` (renders `422.547px` at 1440); maxWidth `100%`;
objectFit `fill`. Intrinsic size `4320 × 1281`.
**`img.mobile`** — `display: none` at ≥992px. Intrinsic size `1080 × 569`.

This is an **art-directed swap**, not a srcset: two different images with different crops and
different text baked in. Use `<picture>` with a `media="(max-width: 991px)"` `<source>`, or two
`<Image>` elements with `hidden max-lg:block` / `max-lg:hidden` classes. Do **not** collapse them
into one image.

### Assets
- `/sites/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/images/hero-desktop.png` — alt `Banner Cidades-1`
- `/sites/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/images/hero-mobile.png` — alt `Banner Argo cidades-1`

Both are large; use `next/image` with `priority` on the desktop one (it is above the fold) and
explicit `width`/`height` matching the intrinsic sizes above.

### States & Behaviors
Static image. No parallax, no animation, no overlay text in the DOM — every word ("ZERO KM",
"R$250", "até R$3800…") is **baked into the bitmap**. Do not recreate it as HTML.

### Responsive
- Desktop (≥992px): `hero-desktop.png`, full-bleed, height scales with width (ratio 4320:1281).
- Mobile (<992px): `hero-mobile.png`, full-bleed (ratio 1080:569 → 397px tall at 753px wide).
- Breakpoint: `992px`.

---

## 3. SeoIntro

- **Target file:** `src/components/sites/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/SeoIntro.tsx`

### DOM Structure
```
<section class="pagina-por-cidade-hero">
  <div class="content">            background #E8E8E8, flex column, gap 40px
    <div class="container">        max-width 1180px, centred, padding 40px 0, flex column, gap 40px
      <h1>…</h1>
      <p>…</p>
```

### Computed Styles
**`.content`** — backgroundColor `rgb(232, 232, 232)`; display `flex`; flexDirection `column`;
gap `40px`; width `100%`; height `227px`
**`.container`** — width `100%`; maxWidth `1180px`; margin-inline `auto`; padding `40px 0`;
display `flex`; flexDirection `column`; gap `40px`
**`h1`** — fontSize `40px`; lineHeight `47px`; fontWeight `700`; fontFamily `Roboto`;
color `rgb(38, 42, 48)`; width `1180px`; height `47px`; margin `0`
**`p`** — fontSize `26px`; lineHeight `30px`; fontWeight `400`; fontFamily `Roboto`;
letterSpacing `-0.52px`; color `rgb(38, 42, 48)`; display `flex`; alignItems `center`;
height `60px`; margin `0`

Note the container has `gap: 40px` but `padding: 40px 0` — the visible gap between h1 and p is
the flex gap, not a margin.

### Text Content (verbatim)
- **h1:** `Aluguel de carros para motoristas em Belo Horizonte`
- **p:** `Aluguel de carros para motoristas de aplicativo: na Kovi, você não precisa ter cartão de crédito no seu nome e dá para alugar mesmo com nome sujo!`

### States & Behaviors
Static. No hover, no animation.

### Responsive
- Desktop (1440px): h1 `40px/47px`, p `26px/30px`.
- Tablet (768px): h1 `20.8px`, p `16px`.
- Mobile (390px): h1 `20.8px / 24.96px`, p `16px / 18px`; container width `374px` (16px side padding).
- Breakpoint: `992px` for the type step-down.
