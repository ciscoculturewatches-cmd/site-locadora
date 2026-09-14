# CarCatalog Specification (section wrapper)

## Overview
- **Target file:** `src/components/sites/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/CarCatalog.tsx`
- **Screenshot:** `docs/design-references/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/s02-seo-intro-catalog-top.png`
- **Interaction model:** **click-driven** filter pills. Needs `"use client"`.
- **Depends on:** `CarCard` and `KOVI_BH_CARS` (already built, same directory).

The section must carry `id="escolha-seu-carro"` — the HowToRent CTA anchors to it.

## DOM Structure

```
<section id="escolha-seu-carro">
  <div class="wrapper">                 max-width 1180px, centred, padding 0 8px
    <div class="Title">                 padding 40px 0 0, margin 0 0 24px
      <h2>Escolha seu carro</h2>        centred, display face
  <div class="wrapper">                 filters
    <ul class="List">                   flex, margin 0 0 36px
      <li class="Item">×3               margin 0 16px 0 0
        <button>                        pill
  <div class="wrapper">                 list
    <div class="Wrapper">
      <div class="Row">×N               flex wrap — one Row per visible group
        <div class="WrapperTitle">      margin 0 0 24px
          <div class="Title">           group heading, 30px bold
            <span>Zero Km<InfoButton/></span>
        <nav>
          <ul class="CardList">          flex wrap
            <CarCard />×2
```

## Computed Styles (exact values from getComputedStyle at 1440px)

### `.wrapper` (used three times)
- width: `100%`; maxWidth: `1180px`; margin-inline: `auto`; padding: `0 8px`
- The inner content therefore measures `1164px`.

### Title block
- padding: `40px 0 0`; margin: `0 0 24px`; width: `1164px`; height: `96.0938px`

### `h2` — "Escolha seu carro"
- fontSize: `34px`; lineHeight: `56.1px`; fontWeight: `700`
- fontFamily: `DottiesVanilla, sans-serif` → `font-kovi-display`
- color: `rgb(38, 42, 48)`; **textAlign: `center`**; margin: `0`; display: `block`

### Filter list `<ul>`
- display: `flex`; margin: `0 0 36px`; padding: `0`; width: `1164px`; height: `42px`
- listStyleType: `none`; flexWrap: `nowrap`

### Filter `<li>`
- display: `list-item`; margin: `0 16px 0 0`; padding: `0`

### Filter `<button>` (pill)
- borderRadius: `24px`; padding: `8px 24px`
- fontSize: `20px`; fontWeight: `600`; fontFamily: Dotties Vanilla → `font-kovi-display`
- transition: `background-color 0.3s ease-in-out, color 0.3s ease-in-out`
- **Inactive:** backgroundColor `rgb(255, 255, 255)`; color `rgb(127, 127, 127)`; border `1px solid rgb(127, 127, 127)`
- **Active:** backgroundColor `rgb(255, 53, 90)`; color `rgb(255, 255, 255)`; border `1px solid rgb(255, 53, 90)`
- The original marks state with `data-active="true"|"false"` — mirror that attribute, it is useful
  for QA. Also set `aria-pressed`.

### Group `Row`
- display: `flex`; flexWrap: `wrap`; width: `1164px`; margin: `0`; padding: `0`

### `WrapperTitle`
- margin: `0 0 24px`; display: `flex`; fontFamily: `Roboto, sans-serif`; fontSize: `16px`

### Group heading `Title > span`
- fontSize: `30px`; fontWeight: `700`; fontFamily: `Roboto, sans-serif`
- color: `rgb(38, 42, 48)`; margin: `0`
- display: `inline-flex`; alignItems: `center`; gap: `6px`
- Note this is **Roboto**, not the display face — unlike the section h2 above it.

### Tooltip button (only on the "Zero Km" group)
- width: `16px`; height: `16px`; borderRadius: `50%`; padding: `0`; border: none
- background: transparent; margin: `5px 0 0 5px`; display: `flex`
- transition: `0.15s linear`
- `aria-label="Informação"`, contains `InfoIcon` (viewBox `0 0 15 15`)
- Tooltip text: `São considerados Zero Km veículos com menos de 10 mil Km`
- Render it as a `title` attribute plus a small hover/focus popover — the original shows the text
  on hover. A simple absolutely-positioned bubble is fine; no exact styling was captured for the
  bubble itself, so keep it plain: white background, `1px solid rgb(211,211,211)`, `8px` radius,
  `8px 12px` padding, `14px` Roboto, small shadow. Note this in your report as approximated.

### Card list `<ul>`
- display: `flex`; flexWrap: `wrap`; width: `764px`; margin: `0`; padding: `0`; listStyle: `none`
- Cards own their own `margin: 0 28px 24px 0` (already in `CarCard`), so the list needs no gap.
- `764px` is just what two `368px` cards + one `28px` right margin occupy; do not hardcode it —
  let the flex-wrap list be full width so mobile can reflow.
- The `<ul>` is wrapped in a `<nav>` on the original. Keep the `<nav>`.

## States & Behaviors

### Filter pills — the only interaction
- **Trigger:** click on a pill. Exactly one is active. `Todos` is active on load.
- **Transition:** only the pill's own colors animate (`0.3s ease-in-out`). The card list swaps
  **instantly** — there is no cross-fade, slide, or height animation on the groups.

Measured per state:

| Pill | Groups rendered | Cards | Section height |
| --- | --- | --- | --- |
| `Todos` | `Zero Km` then `Seminovos acima de 10 mil Km` | 4 | 1274px |
| `Zero Km` | `Zero Km` only | 2 | 736px |
| `+ de 10 mil Km` | `Seminovos acima de 10 mil Km` only | 2 | 736px |

Implement with a single `useState<"todos" | "zero-km" | "seminovos">("todos")` and conditional
rendering of the two groups. Do not animate the height.

### Hover
The pills have **no** separate `:hover` rule — only the active/inactive colours above. Do not add one.

## Per-State Content

Two groups, driven by `KOVI_BH_CARS` (exported from `CarCard.tsx`):

- **Group `zero-km`** — title `Zero Km`, has the tooltip. Cards: index 0 (`Fiat Argo`, R$699) and 1 (`Volkswagen Polo`, R$749) — i.e. the two whose `badge === "Zero Km"`.
- **Group `seminovos`** — title `Seminovos acima de 10 mil Km`, no tooltip. Cards: index 2 (`Volkswagen Polo`, R$649) and 3 (`Fiat Argo`, R$599) — i.e. `badge === "+ de 10 mil Km"`.

Filter → group mapping: `Todos` → both (zero-km first), `Zero Km` → zero-km, `+ de 10 mil Km` → seminovos.

## Assets
`InfoIcon` from `@/components/sites/www-kovi-com-br-a550a92b/shared/icons`. No images of its own —
the cards bring theirs.

## Text Content (verbatim)
- Section heading: `Escolha seu carro`
- Pills: `Todos` · `Zero Km` · `+ de 10 mil Km`
- Group headings: `Zero Km` · `Seminovos acima de 10 mil Km`
- Tooltip: `São considerados Zero Km veículos com menos de 10 mil Km`

## Responsive Behavior
- **Desktop (≥992px):** two cards per row; pills in a single row; h2 `34px / 56.1px`.
- **Mobile (390px):** one card per row; h2 `32px / 52.8px`; pills shrink to
  `font-size: 16px; line-height: 19.2px; padding: 8px 12px` (measured `71 × 37`) and the pill row
  may need to scroll horizontally or wrap — it stays on one line at 390px.
- Content box drops to `374px` at a 390px viewport (16px side padding).
- **Breakpoint:** `992px` — use `max-[991px]:` / `min-[992px]:` arbitrary variants.
