# CarCard Specification

## Overview
- **Target file:** `src/components/sites/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/CarCard.tsx`
- **Screenshot:** `docs/design-references/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/s02-seo-intro-catalog-top.png`
- **Interaction model:** static. The whole card is one link; no hover rule targets it.

On the original this is a styled-components React island. The class names below
(`style__CardHeader-sc-…`) are only there to identify elements — do not reproduce them.

## DOM Structure

```
<li>                      368×411 — owns the border
  <a href>                366×409, display inline-block, text-decoration none
    <div TopHeader>       366×29   grey ribbon
    <div Card>            366×380  flex column, justify-center, padding 20px 0
      <div CardHeader>    366×48   flex, justify-between, align-center
        <div CardTitle>   model name
        <div CardTag>     108×32  dark badge, flush to the right edge
      <div CardBody>      366×128  flex row, padding 12px 12px 0
        <img CardImage>   184×116
        <div CardPrice>   flex column, padding 28px 0 0 8px
          <div ByText>    "A partir de"
          <div NewPrice>  "R$699" + <div ByWeek>"semana"</div>
      <div WrapperPlan>   344×52  flex, center, margin 0 11px 12px, radius 12px
        <div TextPlan>    "Disponível no plano:"
        <div ImagePlan>   <img> 168×71.125
      <div CardFooter>    366×100  flex column, center, padding 0 12px
        <div CardPrize>   delivery note, pink
        <div ButtonCTA>   342×52  pink button "Quero Esse"
```

## Computed Styles (exact values from getComputedStyle at 1440px)

### `<li>` wrapper
- width: `368px` (366 + 2×1px border); height: `411px`
- border: `1px solid rgb(200, 206, 211)`; borderRadius: `8px`
- margin: `0 28px 24px 0`
- listStyleType: `none`; padding: `0`; background: transparent

### `<a>` card link
- display: `inline-block`; width: `366px`; height: `409px`
- textDecoration: `none`; color: `rgb(38, 42, 48)`; fontFamily: `Roboto, sans-serif`
- border: none; boxShadow: none; background: transparent
- `href`: `https://store.kovi.com.br/account`
- `title`: `Alugue agora <model> com desconto`

### TopHeader (grey ribbon)
- width: `366px`; height: `29px`; padding: `4px 0`
- backgroundColor: `rgb(200, 206, 211)`
- display: `flex`; justifyContent: `center`
- borderRadius: `4px 4px 0 0`
- fontSize: `16px`; fontWeight: `400`; fontFamily: `Roboto, sans-serif`; color: `rgb(38, 42, 48)`

### Card box
- width: `366px`; height: `380px`; padding: `20px 0`
- display: `flex`; flexDirection: `column`; justifyContent: `center`
- **no border, no background, no shadow, no radius** — the border lives on the `<li>`

### CardHeader
- width: `366px`; height: `48px`; position: `relative`
- display: `flex`; justifyContent: `space-between`; alignItems: `center`

### CardTitle (model name)
- fontSize: `20px`; fontWeight: `700`; fontFamily: `Roboto, sans-serif`; color: `rgb(38, 42, 48)`
- padding: `0 0 0 12px`; maxWidth: `200px`; minHeight: `48px`; height: `48px`
- display: `flex`; alignItems: `center`

### CardTag (condition badge)
- width: `108px` (Zero Km) — sizes to content; height: `32px`; padding: `4px 16px`
- backgroundColor: `rgb(38, 42, 48)`; color: `rgb(255, 255, 255)`
- fontSize: `20px`; fontWeight: `700`; fontFamily: `Roboto, sans-serif`
- borderRadius: `8px 0 0 8px` (rounded left only — it runs flush to the card's right edge)
- display: `flex`; alignItems: `center`; position: `relative`

### CardBody
- width: `366px`; height: `128px`; padding: `12px 12px 0`; display: `flex`; flexDirection: `row`

### CardImage
- width: `184px`; height: `116px`; objectFit: `fill`; maxWidth: `100%`
- HTML attributes on the original: `width="184" height="116" loading="lazy"`

### CardPrice
- width: `143.266px`; height: `116px`; padding: `28px 0 0 8px`
- display: `flex`; flexDirection: `column`; color: `rgb(38, 42, 51)`

### ByText ("A partir de")
- fontSize: `16px`; fontWeight: `400`; lineHeight → box height `21px`; display: `block`

### NewPrice ("R$699")
- fontSize: `24px`; fontWeight: `700`; margin: `4px 0 0`; height: `32px`
- display: `flex`; alignItems: `flex-end`; position: `relative`

### ByWeek ("semana") — nested inside NewPrice
- fontSize: `16px`; fontWeight: `700`; margin: `0 0 0 8px`; height: `21px`
- display: `flex`; position: `relative`; top: `-4px`
- The original renders a literal `/` separator between the price and this word.

### WrapperPlan
- width: `344px`; height: `52px`; margin: `0 11px 12px`
- display: `flex`; justifyContent: `center`; alignItems: `center`; borderRadius: `12px`

### TextPlan ("Disponível no plano:")
- fontSize: `16px`; fontWeight: `400`; color: `rgb(0, 0, 0)`; margin: `0 8px 0 0`; height: `21px`

### ImagePlan `<img>`
- width: `168px`; height: `71.125px`; objectFit: `fill`
- src: `/sites/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/images/plan-kovi-proprio.png`
- alt: `Kovi - Icone Kovi Próprio`; title: `Kovi - Aluguel Kovi Próprio`

### CardFooter
- width: `366px`; height: `100px`; padding: `0 12px`
- display: `flex`; flexDirection: `column`; justifyContent: `center`; alignItems: `center`

### CardPrize (delivery note)
- fontSize: `18px`; fontWeight: `700`; fontFamily: `Roboto, sans-serif`
- color: `rgb(255, 53, 89)` — note **89**, not 90; this one element is off-brand by one unit
- margin: `0 0 24px`; height: `24px`; display: `block`

### ButtonCTA ("Quero Esse")
- width: `342px`; height: `52px`; padding: `8px 16px`
- backgroundColor: `rgb(255, 53, 90)`; color: `rgb(255, 255, 255)`
- border: `1px solid rgb(255, 53, 90)`; borderRadius: `12px`
- fontSize: `20px`; fontWeight: `600`; fontFamily: `Roboto, sans-serif`
- display: `flex`; justifyContent: `center`; alignItems: `center`
- It is a `<div>` inside the card-wide `<a>`, not a nested button. Keep it a `<div>`/`<span>`.

## States & Behaviors
No hover, focus, or active rule targets the card or its CTA on this page. Leave them static.
(Do not invent a lift/shadow hover — the original has none.)

## Per-State Content

Four card instances exist on the page. Drive them from props typed with `KoviCarCard`
(already defined in `src/types/www-kovi-com-br-a550a92b.ts`).

| # | model | badge | price | deliveryNote | image |
| --- | --- | --- | --- | --- | --- |
| 1 | `Fiat Argo` | `Zero Km` | `R$699` | `20 dias para entrega em Belo Horizonte` | `car-fiat-argo.webp` |
| 2 | `Volkswagen Polo` | `Zero Km` | `R$749` | `20 dias para entrega em Belo Horizonte` | `car-vw-polo.png` |
| 3 | `Volkswagen Polo` | `+ de 10 mil Km` | `R$649` | `10 dias para entrega em Belo Horizonte` | `car-vw-polo.png` |
| 4 | `Fiat Argo` | `+ de 10 mil Km` | `R$599` | `10 dias para entrega em Belo Horizonte` | `car-fiat-argo.webp` |

All four share: `categoryNote: "Aceito na categoria Comfort"`, `period: "semana"`,
`href: "https://store.kovi.com.br/account"`.

## Assets
- `/sites/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/images/car-fiat-argo.webp` (intrinsic 1200×760), alt `Fiat Argo`
- `/sites/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/images/car-vw-polo.png` (intrinsic 1200×760), alt `Volkswagen Polo`
- `/sites/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/images/plan-kovi-proprio.png` (intrinsic 1306×553)

## Text Content (verbatim)
`Aceito na categoria Comfort` · `Fiat Argo` · `Volkswagen Polo` · `Zero Km` · `+ de 10 mil Km` ·
`A partir de` · `R$699` / `R$749` / `R$649` / `R$599` · `/` · `semana` · `Disponível no plano:` ·
`20 dias para entrega em Belo Horizonte` · `10 dias para entrega em Belo Horizonte` · `Quero Esse`

## Responsive Behavior
- **Desktop (≥992px):** fixed `366px` card inside a `368px` bordered `<li>`, two per row.
- **Mobile (390px):** one per row. The `<li>` becomes `372px` wide and `375px` tall — i.e. the card
  fills the column width and the internal layout compresses (base font drops to `14px`).
  Let the card be fluid below the breakpoint: `width: 100%` on the `<li>` and `<a>`, keep the
  internal paddings, and drop the root font-size to `14px`.
- **Breakpoint:** `992px`.
