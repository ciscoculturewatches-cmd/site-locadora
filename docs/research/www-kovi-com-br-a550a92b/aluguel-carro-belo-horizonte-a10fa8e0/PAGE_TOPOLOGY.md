# Page Topology — Kovi Belo Horizonte

Source: `https://www.kovi.com.br/aluguel-carro-belo-horizonte`
Captured at 1440×900 (viewport 1425px after scrollbar). Full document height: **5488px**.

## Tech stack of the original

| Aspect | Finding |
| --- | --- |
| CMS | HubSpot CMS (`hubfs`, `hub_generated`, `hs_cos_wrapper_*` module wrappers) |
| CSS | Bootstrap 5 base + per-module HubSpot CSS files + a custom token layer on `:root` |
| JS | jQuery (`hsjQuery`), plus one **embedded React island** (styled-components) for the car catalog |
| Fonts | Roboto (Google) + **Dotties Vanilla** (proprietary, self-hosted on HubSpot CDN) |
| Scroll | Native. `scroll-behavior: smooth` on `<html>`. **No** Lenis / Locomotive / scroll-snap. |
| Framework markers | No Next.js, no `__NEXT_DATA__`, no `data-reactroot` on the page root |

## Section order (top → bottom)

| # | Working name | Source node | `top` | `height` | Flow | Interaction model |
| --- | --- | --- | --- | --- | --- | --- |
| 0 | **Header** | `.top-head-wrapper` | 0 | 80 | `position: fixed`, z-index 999 | static on desktop; hover underline + flyout submenu; off-canvas drawer < 992px |
| 1 | **CitySelectorBar** | `#hs_cos_wrapper_catalog-module-1` | 80 | 48 | flow | click → opens city modal (out of default scope, see gaps) |
| 2 | **HeroBanner** | `#hs_cos_wrapper_catalog-module-2` | 128 | 423 | flow | static; art-directed image swap at 768px |
| 3 | **SeoIntro** | `#hs_cos_wrapper_catalog-module-3` | 551 | 227 | flow | static |
| 4 | **CarCatalog** | `#hs_cos_wrapper_catalog-module-4` | 778 | 1274 | flow | **click-driven** filter pills + tooltip |
| 5 | **UberBenefits** | `#hs_cos_wrapper_catalog-module-5` | 2052 | 547 | flow | static |
| 6 | **HowToRent** | `#hs_cos_wrapper_catalog-module-6` | 2599 | 457 | flow | static + one anchor CTA |
| 7 | **Testimonials** | `#hs_cos_wrapper_catalog-module-7` | 3055 | 580 | flow | **click-driven** carousel (prev/next), video modal |
| 8 | **Faq** | `#hs_cos_wrapper_catalog-module-8` | 3695 | 1196 | flow | **click-driven** native `<details>` accordion |
| 9 | **Footer** | `footer.footer` | 4952 | 536 | flow | static + link hovers |

There is no scroll-driven section on this page. Nothing animates on viewport entry, nothing
auto-switches as you scroll, there are no parallax layers and no scroll-snap containers.
The only scroll-reactive thing is the header class swap described in `BEHAVIORS.md`.

## Layout system

- **Scroll container:** the document itself. No custom scroll wrapper.
- **Content width:** sections center a `1180px` content box (FAQ, Testimonials, HowToRent) or a
  `1290px` wrapper with `0 20px` padding (Header). The site declares `--wrapper-size: 1216px`
  but individual modules override it — measure per section, do not assume one global container.
- **Columns:** flexbox throughout (Bootstrap grid is loaded but the custom modules use plain flex).
- **Sticky / fixed overlays:** only `.top-head-wrapper` (z-index 999). Everything else is in flow.
- **Z-index layers:** header 999 → HubSpot popup-CTA anchors 9989–9999 (third-party, excluded).

## Dependencies between sections

- The header is `position: fixed` and 80px tall, so section 1 starts at `top: 80px`. The clone
  needs the same 80px offset (a spacer or `padding-top`) or the city bar will slide under the header.
- `HowToRent`'s CTA links to `#escolha-seu-carro`, the `CarCatalog` anchor. Smooth scrolling comes
  from `scroll-behavior: smooth` on `<html>`, not from a library.
- `Testimonials` cards each own a hidden video modal; the modal markup lives inside the card.
