# Behaviors — Kovi Belo Horizonte

Result of the mandatory interaction sweep (scroll / click / hover / responsive), run through
Chrome DevTools MCP. Every value below is measured, not estimated.

## Tooling caveat (read this before trusting the scroll findings)

The Claude in Chrome extension is not connected on this machine, so there is **no real wheel or
trackpad input** available — scrolling was driven programmatically via `window.scrollTo`. For this
page that is not a problem, because the page has no wheel-event-driven behavior: `scroll-behavior`
is native `smooth`, there is no Lenis / Locomotive / `scroll-snap` / `animation-timeline`, and the
only scroll reaction is a class toggle which programmatic scrolling triggers correctly. If a later
Kovi page turns out to use momentum scrolling, re-verify that section from source rather than from
screenshots.

## Scroll sweep

| Observation | Finding |
| --- | --- |
| Smooth-scroll library | **None.** `getComputedStyle(html).scrollBehavior === 'smooth'` — native CSS only. No `.lenis`, no `.locomotive-scroll`, no scroll container wrapper. |
| Scroll snap | **None.** `scroll-snap-type` is `none` on both `<html>` and `<body>`. |
| Entrance animations | **None.** No element changes opacity/transform on viewport entry. No IntersectionObserver-driven reveals. |
| Parallax | **None.** |
| Auto-switching tabs/sidebars | **None.** |
| Header on scroll | `<header>` gains class `sticky-head` and `<body>` gains class `body-head` once `scrollY > 0`. **Both are visually inert at desktop widths** — `.top-head-wrapper` measures identically at scrollY 0, 600 and 2000: `position: fixed; top: 0; height: 80px; z-index: 999; background: rgb(255,53,90); box-shadow: none; transform: none`. The classes exist for the mobile drawer. **Do not build a shrinking/elevating header** — the original does not have one. |

## Click sweep

### CarCatalog filter pills — click-driven

Three pills: `Todos`, `Zero Km`, `+ de 10 mil Km`. Exactly one active at a time; `Todos` on load.

| State | backgroundColor | color | border |
| --- | --- | --- | --- |
| Inactive | `rgb(255, 255, 255)` | `rgb(127, 127, 127)` | `1px solid rgb(127, 127, 127)` |
| Active | `rgb(255, 53, 90)` | `rgb(255, 255, 255)` | `1px solid rgb(255, 53, 90)` |

Shared: `border-radius: 24px; padding: 8px 24px; font-size: 20px; font-weight: 600;` font family
Dotties Vanilla. Transition: `background-color 0.3s ease-in-out, color 0.3s ease-in-out`.

Content per state (measured by clicking each pill):

| Pill | Groups shown | Cards | Section height |
| --- | --- | --- | --- |
| `Todos` | `Zero Km` + `Seminovos acima de 10 mil Km` | 4 | 1274px |
| `Zero Km` | `Zero Km` only | 2 | 736px |
| `+ de 10 mil Km` | `Seminovos acima de 10 mil Km` only | 2 | 736px |

There is no cross-fade — the card list swaps instantly; only the pill colors transition.

A small circular info button sits next to the `Zero Km` group title; its tooltip reads
*"São considerados Zero Km veículos com menos de 10 mil Km"*.

### Testimonials carousel — click-driven, not looping

- 6 cards, 2 visible at 1440px. Card width `540px`, gap `30px` → **step = 570px**.
- Mechanism: the **first card** receives an inline `transform: translateX(-Npx)`, stepping
  0 → −570 → −1140 → −1710 → **−2280 (clamped)**. Transition `0.2s`.
- Index clamps at 4. No wraparound, no autoplay, no timer.
- Arrow affordance: the unavailable arrow drops to `opacity: 0.5` (it is **not** `disabled`).
  At index 0 → left `0.5`, right `1`. At index 4 → left `1`, right `0.5`.
- Each card's thumbnail opens a video modal (YouTube). Six video IDs are recorded in the spec.

### FAQ — click-driven native `<details>`

- Native `<details>/<summary>`; **all 14 ship closed on load** (verified on a fresh navigation —
  an earlier note here said item 1 was open, which was this sweep's own click leaking into the read).
- Chevron SVG (7×19, `fill="#FF355A"`) rotates: closed `none` → open `rotate(90deg)`
  (`matrix(0, 1, -1, 0, 0, 0)`), `transition: 0.4s`.
- Multiple items can be open simultaneously (native behavior, no JS accordion group).

### Other clickables

- Header nav `Sobre nós` opens a hover flyout with `Quem somos` and `Ética e Transparência`.
- City bar chevron opens a city-selector modal (HubSpot module `modal-city-selector`).
- Car cards are whole-card links to `https://store.kovi.com.br/account`.
- `Quero alugar meu Kovi` is an anchor to `#escolha-seu-carro` (native smooth scroll).

## Hover sweep

Extracted from the stylesheets (70 `:hover` rules total; the ones that apply to this page):

| Element | Change | Transition |
| --- | --- | --- |
| Header nav link | `::after` underline bar grows `width: 0 → calc(100% - 20px)`; bar is `height: 3px; background: #fff; position: absolute; bottom: -7px; left: 0` | `0.5s` |
| Header "VENDAS" button (`.head-1`) | `background-color → rgb(38,42,48)`, `color → rgb(255,255,255)` | `0.5s` |
| Header "CENTRAL DO MOTORISTA" (`.head-3`, `.btn-2`) | `background-color → rgb(255,255,255)`, `color → rgb(38,42,48)` | `0.5s` |
| Generic `button` / `.btn-1 a` | `background-color → rgb(38,42,48)`, `color → rgb(248,248,248)`, `border → 1px solid rgb(38,42,48)` | `0.5s` |
| `.btn-2 a` (pink CTA) | `background-color → rgb(255,53,90)`, `color → #fff`, `border-color → rgb(255,53,90)` | `0.5s` |
| Flyout submenu item | `background → rgb(0,0,0)`, `color → rgb(255,255,255)` | — |
| Footer social icon | `background-color → rgb(0,2,8)` | — |
| Breadcrumb / city link | `color → rgb(255,53,90)` | — |

Filter pills have no separate `:hover` rule — only the active/inactive transition above.

## Responsive sweep

Breakpoints present in the CSS, by rule count: `768`, `1200`, `992` (Bootstrap) plus custom
`1100`, `991`, `767`, `480`, `568`, `1170`, `640`, `720`, `1300`.
**The layout-relevant switch is at 992px** (`<body>` swaps class `desk` → `mob`).

| Element | 1440px | 768px | 390px |
| --- | --- | --- | --- |
| Document height | 5488 | 7216 | 7692 |
| `<body>` class | `desk` | `mob` | `mob` |
| Header | inline nav + 2 buttons, 80px | 80px, nav collapses to right-slide drawer (`slidemenuRight`, 360px wide) | same as 768 |
| Logo | `.logo-kovi` (white, 80×20) | `.logo-kovi-mobile` (black, 93×23) | `.logo-kovi-mobile` |
| Hero image | `img.desktop` (`Banner Cidades-1.png`) | `img.mobile` (`Banner Argo cidades-1.png`) — art-directed swap via `display` | `img.mobile` |
| `h1` | 40px / 47px | 20.8px | 20.8px / 24.96px |
| Intro `<p>` | 26px / 30px, `letter-spacing: -0.52px` | 16px | 16px / 18px |
| `Escolha seu carro` h2 | 34px / 56.1px | — | 32px / 52.8px |
| Filter pill | 20px, `padding: 8px 24px` | — | 16px / 19.2px, `padding: 8px 12px` |
| Car cards | 2 per row | 1 per row | 1 per row (372px) |
| Uber benefits | 2×2 grid beside image | stacked | stacked |
| HowToRent steps | 3 columns | stacked | stacked |
| Testimonials | `flex-row`, 2 visible, 540px cards | `flex-column` (stacked, 348px) | `flex-column`, card 351px, `padding: 20px 40px`, `gap: 20px` |
| FAQ title | 34px / 56.1px | — | 26px / 42.9px |
| FAQ summary | 22px / 31.4px | 63px tall | 16px / 22.85px, 94px tall, `padding-left: 15px` |
| Footer | 4 columns, 536px tall | stacked | stacked, 1116px tall |
| Footer divider wave | 1440×156 | — | 390×47 |

**Viewport note:** `resize_page` bottoms out around 485px on Windows (Chrome's minimum window
width), so the 390px column above was captured with `emulate` at `390x844x3,mobile,touch`, which
gives a true 390px `innerWidth`. Use `emulate`, not `resize_page`, for any mobile QA pass.

## Known gaps / out of scope

- A HubSpot popup CTA (`hs-overlay-cta-*`, z-index 9999) and a lead-capture modal
  (`module_modal-lead`) are present in the DOM but never triggered during the sweep. Not cloned.
- The city-selector modal (`module_modal-city-selector`) lists other Kovi cities. The bar itself is
  cloned; the modal it opens is not (it belongs to a different page's scope).
- Car prices and delivery times come from a live API behind the React island. The values captured
  on **2026-09-14** are frozen as mock data, per the skill's "mock data for demo purposes" scope.
