# UberBenefits Specification

## Overview
- **Target file:** `src/components/sites/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/UberBenefits.tsx`
- **Screenshot:** `docs/design-references/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/s03-uber-benefits.png`
- **Interaction model:** static.

## DOM Structure

```
<section class="v2-vantagens">              position relative, full width, height 547px
  <div class="container">                   max-width 1180px, centred, padding 40px 0,
                                            flex column, gap 40px
    <h2>Aluguel de carro para Uber</h2>
    <div class="wrapper">                   display GRID, gap 40px, padding 0 8px, height 380px
      <div class="image">                   407.391 × 380
        <img />                             object-fit cover, border-radius 12px
      <div class="content">                 716.594 × 380, flex column, gap 40px
        <p class="content-header">           flex column, gap 12px, height 128px
          <strong>…</strong>
          …trailing sentence…
        <div class="itens">                 display GRID 2×2, gap 24px 12px, height 212px
          <div class="item">×4              352.297 × 106
            <svg /> + text
```

## Computed Styles (exact values from getComputedStyle at 1440px)

### `section`
- width: `100%`; height: `547px`; position: `relative`; display: `block`

### `.container`
- width: `100%`; maxWidth: `1180px`; margin-inline: `auto`; padding: `40px 0`
- display: `flex`; flexDirection: `column`; gap: `40px`

### `h2`
- fontSize: `40px`; lineHeight: `47px`; fontWeight: `700`; fontFamily: `Roboto`
- color: `rgb(38, 42, 48)`; textAlign: `left`; margin: `0`
- Note: this is **Roboto**, not the display face, and it is left-aligned — unlike the catalog h2.

### `.wrapper`
- display: `grid`; gap: `40px`; padding: `0 8px`; width: `100%`; maxWidth: `1180px`; height: `380px`
- Measured columns: image `407.391px`, content `716.594px`, gap `40px` → use
  `grid-template-columns: 407.391px 1fr` (or `minmax(0,407.391px) 1fr`).

### `.image img`
- width: `407.391px`; height: `380px`; objectFit: `cover`; borderRadius: `12px`; maxWidth: `100%`

### `.content`
- width: `716.594px`; height: `380px`; display: `flex`; flexDirection: `column`; gap: `40px`

### `.content-header` (`<p>`)
- display: `flex`; flexDirection: `column`; gap: `12px`; height: `128px`
- fontSize: `22px`; lineHeight: `28px`; fontWeight: `400`; fontFamily: `Roboto`
- letterSpacing: `-0.44px`; color: `rgb(38, 42, 48)`; margin: `0`

### `.content-header strong`
- fontSize: `28px`; lineHeight: `30px`; fontWeight: `700`; fontFamily: `Roboto`
- letterSpacing: `-0.44px`; color: `rgb(38, 42, 48)`; display: `block`; height: `60px`

Because the `<p>` is `display: flex; flex-direction: column`, the `<strong>` and the trailing
sentence stack as two flex children with a `12px` gap. Wrap the trailing sentence in its own
element (a `<span>`) so it becomes the second flex child — otherwise the gap will not apply.

### `.itens`
- display: `grid`; gap: `24px 12px` (row-gap 24, column-gap 12); height: `212px`; width: `716.594px`
- Two columns: `grid-template-columns: repeat(2, 1fr)` → each cell `352.297px`.

### `.item` (×4)
- width: `352.297px`; height: `106px`; padding: `16px`
- display: `flex`; flexDirection: `row`; alignItems: `center`; gap: `7.8px`
- borderRadius: `12px`; border: `1px solid rgb(239, 227, 229)`
- fontSize: `22px`; lineHeight: `24px`; fontWeight: `300`; fontFamily: `Roboto`
- color: `rgb(38, 42, 48)`
- Note `font-weight: 300` — Roboto Light. It is loaded.

### Item icons
Each item leads with its own inline SVG, already extracted:

| # | Icon export | Natural size |
| --- | --- | --- |
| 1 | `UberPartnerIcon` | 34×34 |
| 2 | `NoCreditCardIcon` | 33×33 |
| 3 | `NegativadosIcon` | 33×33 |
| 4 | `UnlimitedKmIcon` | 28×30 |

Render each at its natural size; they are `flex-shrink: 0`. The paths carry their own fills
(Kovi pink) — do not recolour them.

## States & Behaviors
Static. No hover, no animation, no scroll trigger. The items are `<div>`s, not links.

## Per-State Content
N/A — single state.

## Assets
- `/sites/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/images/uber-driver.png`
  (intrinsic 465×366), alt `img` (yes, the original's alt really is `img`)
- Icons from `@/components/sites/www-kovi-com-br-a550a92b/shared/icons`

## Text Content (verbatim)
- **h2:** `Aluguel de carro para Uber`
- **strong:** `Você já é ou quer se tornar motorista de Uber e precisa alugar um carro?`
- **trailing sentence:** `A Kovi tem os melhores planos para aluguel de carro para Uber, confira agora as vantagens!`
- **item 1:** `Parceria com descontos exclusivos para motorista parceiro Uber`
- **item 2:** `Não precisa ter cartão de crédito`
- **item 3:** `Aluguel para negativados`
- **item 4:** `Sem limite de quilometragem`

## Responsive Behavior
- **Desktop (≥992px):** two-column grid (image left, content right), benefits in a 2×2 grid.
- **Below 992px:** the wrapper collapses to a single column — image on top (full width,
  `border-radius: 12px` retained), content below. The `.itens` grid becomes one column, so the
  four benefit boxes stack full-width.
- **Mobile (390px):** h2 `24px / 22px`; image renders `335 × 264`.
- **Breakpoint:** `992px` — use `max-[991px]:` / `min-[992px]:` arbitrary variants to hit it exactly.
