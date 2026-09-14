# Header Specification

## Overview
- **Target file:** `src/components/sites/www-kovi-com-br-a550a92b/shared/Header.tsx` (site-shared — a future Kovi page reuses it)
- **Screenshot:** `docs/design-references/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/s01-header-citybar-hero.png`
- **Interaction model:** static on desktop (hover-only). No scroll transform.

## DOM Structure

```
<header class="top-head-wrapper">      fixed, full width, 80px
  <div class="content-wrapper">        max-width 1290px, padding 0 20px, centred
    <div class="inner-head-menu">      flex, align-items center
      <div class="main-site-logo">     80x28
        <a href="/"><img class="logo-kovi" /></a>
      <div class="menu-right">         padding-left 30px, flex-1
        <div class="inner-menu-right">  flex, justify-content flex-end, align-items center
          <nav><ul>  6 <li><a></li>  </ul></nav>
          <div class="header-btn head-1">  <a>VENDAS…</a>
          <div class="header-btn head-3">  <a>CENTRAL DO MOTORISTA</a>
```

## Computed Styles (exact values from getComputedStyle)

### Root `.top-head-wrapper`
- position: `fixed`; top: `0`; left: `0`; width: `100%`; height: `80px`
- zIndex: `999`
- backgroundColor: `rgb(255, 53, 90)`
- display: `flex`; alignItems: `center`
- boxShadow: `none`; transform: `none`; transition: `0.5s`

### `.content-wrapper`
- width: `100%`; maxWidth: `1290px`; margin-inline: `auto`; padding: `0 20px`
- height: `41.0312px`

### Logo
- wrapper `.main-site-logo`: width `80px`, height `28px`
- `<a>`: display `inline-block`, width `80px`, height `20px`, transition `0.5s`
- `<img>`: width `80px`, height `20px`, objectFit `cover`
- src: `/sites/www-kovi-com-br-a550a92b/shared/logo-white-horizontal.svg`, alt `Kovi - Logo Branco`
- href: `https://www.kovi.com.br/`

### Nav `<ul>`
- display: `flex`; width: `579.547px`; height: `24px`

### Nav `<li>`
- display: `block`; position: `relative`; padding: `0 20px 0 0`
- **Last item (`Contato`) has `padding-right: 0`.**

### Nav `<a>`
- fontSize: `18px`; fontWeight: `400`; fontFamily: `Roboto, sans-serif`
- color: `rgb(255, 255, 255)`; textDecoration: `none`
- display: `inline-block`; height: `24px`; transition: `0.5s`
- Measured widths: Página inicial `106.4`, Sobre nós `80.5`, Blog `36`, Indique e Ganhe `129`, Dúvidas `64.1`, Contato `63.6`

### Button 1 — `.header-btn.head-1` ("VENDAS")
- fontSize: `15px`; lineHeight: `18px`; fontWeight: `600`; fontFamily: `Roboto, sans-serif`
- letterSpacing: `0.46px`; textTransform: `uppercase`
- color: `rgb(255, 255, 255)`; backgroundColor: `rgb(255, 53, 90)`
- padding: `10px 22px`; borderRadius: `8px`; border: `1px solid rgb(255, 255, 255)`
- display: `inline-block`; transition: `0.5s`
- Measured box: `244.7 × 41`
- Contains the `PhoneIcon` (17×16, white) before the text.

### Button 2 — `.header-btn.head-3` ("CENTRAL DO MOTORISTA")
- Same type metrics as Button 1, but:
- color: `rgb(248, 248, 248)`; backgroundColor: `rgb(38, 42, 48)`; border: `1px solid rgb(38, 42, 48)`
- Measured box: `232.5 × 40`

## States & Behaviors

### Nav link underline (hover)
- **Trigger:** `:hover` on the nav `<a>`
- The `<a>` owns an `::after` pseudo-element:
  `position: absolute; bottom: -7px; left: 0; height: 3px; background-color: rgb(255,255,255); content: ""`
- **State A (rest):** `width: 0`
- **State B (hover):** `width: calc(100% - 20px)`
- **Transition:** `0.5s`
- Implement with a `::after` on the anchor and a `group-hover`/`peer` or plain CSS rule — the anchor must be `position: relative`.

### Button hovers
- **`.head-1`:** backgroundColor `rgb(255,53,90)` → `rgb(38,42,48)`, color stays `#fff`. Transition `0.5s`.
- **`.head-3`:** backgroundColor `rgb(38,42,48)` → `rgb(255,255,255)`, color `rgb(248,248,248)` → `rgb(38,42,48)`. Transition `0.5s`.

### "Sobre nós" flyout submenu
- **Trigger:** `:hover` on the `<li>`
- Rest: `display: none; opacity: 0`. Hover: `display: block; opacity: 1`, positioned `left: 0; top: 100%`.
- Items: `Quem somos` (`https://www.kovi.com.br/sobre-nos`), `Ética e Transparência` (`https://www.kovi.com.br/etica-e-transparencia`).
- Submenu item hover: `background: rgb(0,0,0); color: rgb(255,255,255)`.

### Scroll
`<header>` gains `sticky-head` and `<body>` gains `body-head` past scrollY 0, but **nothing about
`.top-head-wrapper` changes visually at desktop** (verified identical at scrollY 0 / 600 / 2000).
Do NOT add a shrink, shadow, or background change on scroll.

## Per-State Content
N/A beyond the flyout above.

## Assets
- `/sites/www-kovi-com-br-a550a92b/shared/logo-white-horizontal.svg` (desktop logo)
- `/sites/www-kovi-com-br-a550a92b/shared/logo-black-horizontal.svg` (mobile drawer logo, 93×23)
- `PhoneIcon` from `@/components/sites/www-kovi-com-br-a550a92b/shared/icons`

## Text Content (verbatim)

| Item | Text | href |
| --- | --- | --- |
| Nav 1 | `Página inicial` | `https://www.kovi.com.br/` |
| Nav 2 | `Sobre nós` | `https://www.kovi.com.br/sobre-nos` |
| Nav 3 | `Blog` | `https://www.kovi.com.br/blog` |
| Nav 4 | `Indique e Ganhe` | `https://indique.kovi.com.br/` |
| Nav 5 | `Dúvidas` | `https://ajuda.kovi.com.br/hc/pt-br` |
| Nav 6 | `Contato` | `https://www.kovi.com.br/contato` |
| Button 1 | `Vendas: 0800 018 0029` (rendered uppercase by CSS) | `https://www.kovi.com.br/?hsLang=pt-br#centraldeVendas` |
| Button 2 | `Central do motorista` (rendered uppercase by CSS) | `https://motorista.kovi.com.br/authentication/` |

Write the source text in the casing above and let `text-transform: uppercase` do the rest —
that is how the original renders it.

## Responsive Behavior
- **Desktop (≥992px):** as specified above.
- **Below 992px:** `<body>` switches from class `desk` to `mob`. The inline nav and both buttons
  leave the bar; a hamburger opens a **right-side drawer** (`slidemenuRight`, width `360px`,
  full viewport height) holding the same 6 links. The bar keeps `height: 80px` and the pink
  background, and the logo swaps to `logo-black-horizontal.svg` (93×23).
- **Breakpoint:** `992px`.
- Build the drawer with local React state (`useState`) — the original uses jQuery, the behaviour
  is a simple open/closed translate. Use a `transform: translateX(100%)` → `translateX(0)`
  transition and lock body scroll while open.
