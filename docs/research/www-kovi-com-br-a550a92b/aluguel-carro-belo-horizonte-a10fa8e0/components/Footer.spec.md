# Footer Specification

## Overview
- **Target file:** `src/components/sites/www-kovi-com-br-a550a92b/shared/Footer.tsx` (site-shared)
- **Screenshot:** `docs/design-references/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/s07-footer.png`
- **Interaction model:** static + link hovers.

## DOM Structure

```
<footer>
  <div class="divider_block">          full-bleed pink wave image, 1440×156
    <img />
  <div class="content-wrapper">        max-width 1290px, padding 0 20px, centred, height 330px
    <div class="footer-main">          1250 × 225, flex row, gap 24px, align-items flex-start
      <div class="logo item">          250 wide, flex column
        <a><img /></a>                 53.6 × 13.6
        <div class="logo-text">        tagline
      <div class="menu-inner-wrap">    728 wide, flex row, gap 24px
        <div class="item-loop">×3      226.7 wide each
          <a>column title</a>
          <ul>                         flex column
            <li><a>link</a></li>×N
      <div class="social">             ~224 wide
        <div>Siga nossas redes sociais:</div>
        <div>  4 icon links, 50px apart
    <div class="footer-bottom">        1250 × 65, border-top, padding 32px 0 0, margin 40px 0 0
      <div class="bottom-main-section"> flex row, justify-between, align-items flex-start, gap 24px
        <div class="left-copyright-section">  padding-right 20px
          <p><strong>©2026 …</strong></p>
          <p><a>Sede: …</a></p>
        <a class="google-play-badge">   132.2 × 32
```

## Computed Styles (exact values from getComputedStyle at 1440px)

### `.divider_block img`
- width: `100%`; height: `auto` (renders `156px` at 1440); maxWidth: `100%`; aspectRatio: `1440 / 156`
- src `/sites/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/images/footer-divider.png`, alt `Kovi - Divisor de secoes`
- This is the pink wave that separates the FAQ from the footer. Full-bleed, no container.

### `.content-wrapper`
- width: `100%`; maxWidth: `1290px`; margin-inline: `auto`; padding: `0 20px`; height: `330px`
- fontFamily: `"Dotties Vanilla", Roboto, sans-serif`; color: `rgb(38, 42, 48)`

### `.footer-main`
- width: `1250px`; height: `225px`; display: `flex`; flexDirection: `row`; gap: `24px`
- alignItems: `flex-start`; margin: `0`; padding: `0`
- Children widths: logo `250`, menus `728`, social `~224` (250 + 24 + 728 + 24 + 224 = 1250)

### `.logo.item`
- width: `250px`; height: `81.5px`; display: `flex`; flexDirection: `column`

### Footer logo `<img>`
- rendered `53.6 × 13.6`; intrinsic `161 × 41`
- src `/sites/www-kovi-com-br-a550a92b/shared/logo-footer.webp`, alt `Kovi - Logo`
- link href `https://www.kovi.com.br/`
- It really is that small — do not scale it up.

### `.logo-text` (tagline)
- fontSize: `22.4px`; lineHeight: `22.4px`; fontWeight: `600`
- fontFamily: `"Dotties Vanilla"` → `font-kovi-display`
- **color: `rgb(0, 0, 0)`** (pure black, not the usual ink)
- margin: `20px 0 0`; padding: `0`; display: `block`; width: `250px`

### `.menu-inner-wrap`
- width: `728px`; height: `225px`; display: `flex`; flexDirection: `row`; gap: `24px`

### `.item-loop` (column)
- width: `226.7px`; height: `225px`; display: `block`; margin: `0`; padding: `0`

### Column title `<a>`
- fontSize: `16px`; fontWeight: `400`; fontFamily: `Roboto, sans-serif`
- color: `rgb(38, 42, 48)`; display: `inline-block`; margin: `0`; padding: `0`

### Column `<ul>`
- display: `flex`; flexDirection: `column`; width: `226.7px`; height: `145.6px`; margin: `0`; padding: `0`; list-style none

### Column link `<a>`
- fontSize: `12.8px`; lineHeight: `12.8px`; fontWeight: `400`; fontFamily: `Roboto, sans-serif`
- color: `rgb(38, 42, 48)`; margin: `0 0 8px`; display: `block`; transition: `0.5s`

### Social column
- Label: `Siga nossas redes sociais:` — fontSize `16px`; fontWeight: `700`; fontFamily `Roboto, sans-serif`; color `rgb(38, 42, 48)`; display `block`; width `224px`
- Four icon links, each `22px` wide, heights `25.3 / 22.5 / 25.3 / 25.3`, spaced **50px apart**
  (measured x: 1123, 1173, 1223, 1273). Use `display: flex; gap: 28px` (22 + 28 = 50) or
  fixed 50px pitch — either reproduces it.
- Icons are `FacebookIcon`, `YoutubeIcon`, `InstagramIcon`, `LinkedinIcon` from the shared module.

### `.footer-bottom`
- width: `1250px`; height: `65px`; display: `block`
- **borderTop: `1px solid rgb(195, 195, 195)`**
- padding: `32px 0 0`; margin: `40px 0 0`

### `.bottom-main-section`
- width: `1250px`; height: `32px`; display: `flex`; flexDirection: `row`
- justifyContent: `space-between`; alignItems: `flex-start`; gap: `24px`

### `.left-copyright-section`
- width: `1093.8px`; height: `32px`; padding: `0 20px 0 0`; display: `block`

### Copyright `<strong>`
- fontSize: `12px`; lineHeight: `12px`; fontWeight: `700`
- fontFamily: `"Dotties Vanilla", Roboto, sans-serif` → `font-kovi-display`
- color: `rgb(0, 0, 0)`; display: `inline`

### Address `<a>`
- fontSize: `12px`; lineHeight: `12px`; fontWeight: `400`; fontFamily: `Roboto, sans-serif`
- color: `rgb(38, 42, 48)`; display: `inline-block`
- href: `https://www.google.com/maps/dir/?api=1&destination=Loja%20Kovi&destination_place_id=ChIJmRMgTgFRzpQRBwsYpmZUkGo&dir_action=navigate`
- `target="_blank" rel="noopener"`

### `.google-play-badge`
- width: `132.2px`; height: `32px`; display: `flex`; flexDirection: `row`; alignItems: `center`; gap: `10px`
- href `https://play.google.com/store/apps/details?id=com.kovi`, `target="_blank" rel="noopener"`,
  `aria-label="Baixar o App no Google Play"`
- `.google-play-badge__icon`: `28 × 32`, holds `GooglePlayIcon` (viewBox `0 0 32 38`, four coloured
  paths — do not recolour), `aria-hidden="true"`
- `.google-play-badge__label`: fontSize `10px`; fontWeight `400`; width `94.2px`; height `11px`; display `block`
- `.google-play-badge__brand`: fontSize `18px`; fontWeight `500`; width `94.2px`; height `19.8px`; display `block`
- Both text spans use `Roboto, "Google Sans", sans-serif`; colour `rgb(38, 42, 48)`

## States & Behaviors

### Link hovers
All footer links carry `transition: 0.5s`. The only captured footer-specific hover is
`.social-links__icon:hover { background-color: rgb(0, 2, 8) }`, which belongs to a HubSpot theme
class this footer does not use. **Do not invent hover colours.** Keep the `0.5s` transition on the
links and leave the colour unchanged — that is what the live page does.

### Everything else
Static. No animation, no scroll trigger.

## Per-State Content

### Column 1 — title `Motorista` (href `https://www.kovi.com.br/`)
`Escolher um carro` · `Kovi Próprio` · `Kovi Mensal` · `Programa Kovi Direção Segura` · `Ajuda` ·
`Avise um sinistro (colisão ou acidente)` · `Central do Motorista`

### Column 2 — title `Transparência` (href `https://www.kovi.com.br/`)
`Termos e condições gerais de locação` · `Tabela de preços KP 2.0` · `Termos de uso` ·
`Políticas de privacidade` · `Política de Compliance` · `Demonstrações Financeiras` ·
`Relatório de Transparência 1º Semestre 2025` · `Relatório de Transparência 1º Semestre 2026`

### Column 3 — title `A Kovi` (href `https://www.kovi.com.br/`)
`Segurança - Proteja-se de golpes` · `Manutenção Contratada` · `Pague o que rodar` ·
`Trabalhe conosco` · `Escola Kovi` · `Parcerias` · `Ética e Transparência`

The individual link hrefs were not all captured. Point each at `https://www.kovi.com.br/` unless
you can infer an obvious slug; note in your report that the sub-link hrefs are placeholders.
(The four social hrefs and the two bottom-row hrefs below ARE exact.)

### Social links (exact)
- Facebook `https://www.facebook.com/meukovi`
- YouTube `https://www.youtube.com/@meukovi`
- Instagram `https://www.instagram.com/meukovi/`
- LinkedIn `https://www.linkedin.com/company/kovi/`

## Assets
- `/sites/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/images/footer-divider.png` (1440×156)
- `/sites/www-kovi-com-br-a550a92b/shared/logo-footer.webp` (161×41)
- `FacebookIcon`, `YoutubeIcon`, `InstagramIcon`, `LinkedinIcon`, `GooglePlayIcon` from the shared icons module

## Text Content (verbatim)
Tagline: `O carro que todos podem escolher`
Social label: `Siga nossas redes sociais:`
Copyright: `©2026 Kovi Tecnologia S.A.`
Address: `Sede: Av. das Nações Unidas, 21.612 - Jurubatuba - São Paulo, SP`
Badge: `Baixar o App no` / `Google Play`
Column titles and links exactly as listed above.

## Responsive Behavior
- **Desktop (≥992px):** one row — logo / 3 menu columns / social. Footer total height `536px`.
- **Below 992px:** everything stacks into a single column: logo + tagline, then each menu column,
  then the social block. The bottom row stacks too (copyright above the Play badge).
  Measured footer height at 390px: `1116px`; the divider wave renders `390 × 47`.
- **Breakpoint:** `992px` — use `max-[991px]:` / `min-[992px]:` arbitrary variants.
