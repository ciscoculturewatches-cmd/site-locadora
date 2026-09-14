# HowToRent Specification

## Overview
- **Target file:** `src/components/sites/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/HowToRent.tsx`
- **Screenshot:** `docs/design-references/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/s04-how-to-rent.png`
- **Interaction model:** static, plus one anchor CTA.

## DOM Structure

```
<section class="como-alugar2">        background #fff, width 100%, height 456.516px
  <div class="container">             max-width 1180px, centred, padding 50px 0,
                                      flex column, gap 30px
    <div class="title">               text-align center, height 80px
      <h1>Como alugar</h1>
      <span>(passo a passo)</span>
    <div class="cards">               flex row, gap 50px, height 154.516px
      <div class="card">×3            345.078 × 154.516
        <div class="title">           flex row, align-center, gap 16px
          <div class="icon">          24 × 26.5156 — the numbered SVG badge
          <div class="text">          step name
        <p>                           step description
    <a>Quero alugar meu Kovi</a>      354.812 × 62, centred
```

## Computed Styles (exact values from getComputedStyle at 1440px)

### `section`
- width: `100%`; height: `456.516px`; backgroundColor: `rgb(255, 255, 255)`; display: `block`

### `.container`
- width: `100%`; maxWidth: `1180px`; margin-inline: `auto`; padding: `50px 0`
- display: `flex`; flexDirection: `column`; gap: `30px`

### `.title` (heading block)
- width: `1180px`; height: `80px`; textAlign: `center`; display: `block`

### `h1` — "Como alugar"
- fontSize: `40px`; lineHeight: `40px`; fontWeight: `700`
- **fontFamily: `DottiesVanillaHeavy`** → in this project that is `font-kovi-display` at **weight 800**
- letterSpacing: `-1px`; color: `rgb(38, 42, 48)`; textAlign: `center`; margin: `0`

### `span` — "(passo a passo)"
- fontSize: `40px`; lineHeight: `40px`; fontWeight: `500`
- **fontFamily: `"Dotties Vanilla"`** → `font-kovi-display` at **weight 500**
- letterSpacing: `-1px`; color: `rgb(38, 42, 48)`; display: `inline`; textAlign: `center`
- Rendered width `276.5px`. It sits on its own line below the h1 (the h1 is `display: block`).

The two lines differ in weight (800 vs 500) — that contrast is the whole visual joke of the
heading. Do not render both at the same weight.

### `.cards`
- width: `1180px`; height: `154.516px`; display: `flex`; flexDirection: `row`; gap: `50px`
- Three equal children → each `345.078px`.

### `.card` (×3)
- width: `345.078px`; height: `154.516px`; padding: `20px 40px`
- backgroundColor: `rgb(255, 255, 255)`; color: `rgb(33, 37, 41)`
- display: `flex`; flexDirection: `column`; gap: `20px`
- borderRadius: `12px`; border: `1px solid rgb(239, 227, 229)`; position: `relative`

### `.card .title`
- width: `263.078px`; height: `26.5156px`
- display: `flex`; flexDirection: `row`; alignItems: `center`; gap: `16px`

### `.card .icon`
- width: `24px`; height: `26.5156px`; display: `block`; color: `rgb(255, 53, 90)`
- Contains the step's numbered SVG. These SVGs are a **pink square masked by a digit glyph** —
  i.e. the "1", "2", "3" you see are the icons themselves. They are already extracted.

### `.card .text` (step name)
- fontSize: `14px`; lineHeight: `22px`; fontWeight: `600`
- fontFamily: `"Dotties Vanilla"` → `font-kovi-display`
- color: `rgb(38, 42, 48)`; display: `block`

### `.card p` (step description)
- fontSize: `16px`; lineHeight: `22px`; fontWeight: `400`
- fontFamily: `"Dotties Vanilla"` → `font-kovi-display` (yes, the body copy in these cards uses
  the display face, unlike everywhere else on the page)
- color: `rgb(38, 42, 48)`; width: `263.078px`; margin: `0`; display: `block`

### CTA `<a>` — "Quero alugar meu Kovi"
- width: `354.812px`; height: `62px`; maxWidth: `max-content`; margin-inline: `auto`
- padding: `16px 42px`
- backgroundColor: `rgb(255, 53, 90)`; color: `rgb(248, 248, 248)`
- fontSize: `24.8829px`; fontWeight: `800`; fontFamily: `Roboto`; letterSpacing: `0.728185px`
- borderRadius: `8.29428px`; border: `none`
- boxShadow: `rgba(0,0,0,0.2) 0px 4.74903px 1.58301px -3.16602px, rgba(0,0,0,0.14) 0px 3.16602px 3.16602px 0px, rgba(0,0,0,0.12) 0px 1.58301px 7.91506px 0px`
- display: `flex`; flexDirection: `column`; justifyContent: `center`; alignItems: `center`
- transition: `0.5s`
- href: `#escolha-seu-carro`

Those odd fractional values (`24.8829px`, `8.29428px`, the shadow) are a scaled Material button
from the original — reproduce them literally, do not round to `25px` / `8px`.

## States & Behaviors

### CTA hover
The generic button rule applies: `background-color → rgb(38, 42, 48)`, `color → rgb(248, 248, 248)`,
`border → 1px solid rgb(38, 42, 48)`. Transition `0.5s`.

### Anchor scroll
`href="#escolha-seu-carro"` relies on `scroll-behavior: smooth`, which is already set globally on
`html:has(.kovi-page)` in `globals.css`. Do not add a JS scroll handler.

The `CarCatalog` section owns `id="escolha-seu-carro"` — you do not need to create it.

### Cards
No hover on the cards themselves.

## Per-State Content
N/A — single state.

## Assets
Icons from `@/components/sites/www-kovi-com-br-a550a92b/shared/icons`:
`StepRegisterIcon` (step 1), `StepPaymentIcon` (step 2), `StepPickupIcon` (step 3). All viewBox `0 0 24 24`.

## Text Content (verbatim)
- h1: `Como alugar`
- span: `(passo a passo)`
- Step 1 — name `Cadastro`, description `Preencha o cadastro com suas informações. É super rápido e fácil!`
- Step 2 — name `Pagamento`, description `Realize o pagamento da 1ª semana + caução (que pode ser parcelada!)`
- Step 3 — name `Retirada`, description `Agora é só retirar seu carro e aproveitar todos os benefícios de ter um Kovi`
- CTA: `Quero alugar meu Kovi`

## Responsive Behavior
- **Desktop (≥992px):** 3 cards in a row, `gap: 50px`.
- **Below 992px:** `.cards` becomes `flex-direction: column`; the three cards stack full-width and
  keep `padding: 20px 40px`, `gap: 20px`, the `12px` radius and the `rgb(239,227,229)` border.
- **Mobile (390px):** the heading block drops to `26px / 32px` (both lines); cards are `351px` wide.
- **Breakpoint:** `992px` — use `max-[991px]:` / `min-[992px]:` arbitrary variants.
