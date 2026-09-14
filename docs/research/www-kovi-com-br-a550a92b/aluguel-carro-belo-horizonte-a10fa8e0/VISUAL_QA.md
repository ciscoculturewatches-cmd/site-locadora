# Visual QA — Kovi Belo Horizonte

Phase 5 of `/clone-website`. Original and clone measured in the **same browser tab**, switching
URLs, so both sides share one viewport.

## Viewport calibration caveat

Chrome had `http://localhost:3000` pinned at **80% page zoom** (per-origin, persisted). That made
the clone report `innerWidth: 1800` while the original reported `1440` under the identical
emulation setting — an apples-to-oranges comparison that initially looked like a layout bug.

Compensated by emulating `1152 × 720` for the clone (1152 ÷ 0.8 = 1440 effective CSS px). Every
desktop number below is at a true 1440px viewport on both sides. Mobile used
`emulate 390x844x3,mobile,touch`, which reports a true `innerWidth: 390` on both.

`resize_page` could not drive the viewport reliably in this session; `emulate` could.

## Desktop — 1440px

| Section | Original top / height | Clone top / height | Δ height |
| --- | --- | --- | --- |
| CitySelectorBar | 80 / 48 | 80 / 48 | 0 |
| HeroBanner | 128 / 423 | 128 / 422 | −1 |
| SeoIntro | 551 / 227 | 550 / 227 | 0 |
| CarCatalog | 778 / 1274 | 777 / 1274 | 0 |
| UberBenefits | 2052 / 547 | 2051 / 547 | 0 |
| HowToRent | 2599 / 457 | 2598 / 457 | 0 |
| Testimonials | 3055 / 580 | 3054 / 579 | −1 |
| Faq | 3695 / 1196 | 3694 / 1196 | 0 |
| Footer | 4952 / 536 | 4950 / 532 | −4 |
| **Document** | **5488** | **5482** | **−6 (0.1%)** |

No horizontal scroll. Catalog filter states: `Todos` 1274px/4 cards, `Zero Km` 737px/2,
`+ de 10 mil Km` 737px/2 (original 1274 / 736 / 736).

## Mobile — 390px

Document height 7755 vs original 7692 (+63, 0.8%). No horizontal scroll. Verified: hamburger
shown and desktop nav hidden, black logo swap, art-directed hero swap, one card per row in the
catalog, testimonials still a **row** carousel with one card visible and arrows visible.

Type scale matches the original at 390: `h1` 20.8/24.96, intro 16/18, catalog `h2` 32/52.8,
pill 16/19.2 `padding: 8px 12px`, FAQ title 26/42.9, FAQ summary 16/22.848 `padding-left: 15px`.

## Behaviours verified

| Behaviour | Result |
| --- | --- |
| Catalog filter pills | Exactly one active, instant list swap, colours transition only. Matches. |
| Carousel desktop | Step 570px, clamps at `translateX(-2280px)` (index 4) — identical to the original. |
| Carousel mobile | Step 318px (original 311), clamps at index 5. Arrows visible. |
| Arrow affordance | Unavailable arrow drops to `opacity: 0.5`, stays clickable. Matches. |
| FAQ toggle | Closed 81.4px → open 131.4px, exactly matching. Several may be open at once. |
| FAQ chevron | `none` → `matrix(0, 1, -1, 0, 0, 0)` over `0.4s`. Identical. |
| Video playback | Inline iframe replaces the thumbnail (not a modal). Matches. |
| Header on scroll | Static at desktop, as the original is. |

## Defects found and fixed

| # | Defect | Root cause | Fix |
| --- | --- | --- | --- |
| 1 | CarCatalog 62px short | Filter pill had no explicit `line-height` (48.5 vs 42); group title auto-sized (45 vs 39); `<nav>` missing `margin-bottom: 40px` | Pinned all three; section now exactly 1274px |
| 2 | FAQ 50px too tall | **Spec error** — claimed item 1 shipped `open`. It does not; the extraction session's own click sweep had toggled it before the state was read | All 14 default closed; spec + BEHAVIORS.md corrected |
| 3 | FAQ missing divider lines | **Spec error** — the probe checked `border` on `<details>`, `<summary>` and the wrapper, never `::after`. The rule is `.wrapper-itens-faq::after` (1px `rgb(230,230,230)`) | Added as an absolutely-positioned `::after` so it adds no height |
| 4 | Missing play-button overlay | Painted by `.video::before` as a `background-image`, so the DOM asset sweep could not see it | Downloaded `play.png`; added as a `z-11` overlay |
| 5 | Video opened a modal | **Spec error** — inferred from `button.close-modal` in the markup, which computes to `display: none`. The original plays inline | Rebuilt as inline iframe replacement |
| 6 | Testimonial name/quote wrong size and face | **Spec gap** — left inferred as Roboto 16px; actually Dotties Vanilla 24/33.6 and 18/25, stepping to 16/24 and 14/18 on mobile | Measured and applied both breakpoints |
| 7 | Mobile testimonials stacked vertically | **Spec error** — read off a window resized down from desktop. A fresh load at 390px keeps `flex-direction: row` | Track stays row; step derived at runtime from the measured card width |
| 8 | Mobile card width blew out to 1239px | Track had no definite width, so the card's `min-width: 100%` resolved circularly | `w-full` on the track, `w-full` on the card below the breakpoint |
| 9 | FAQ chevron never rotated | Tailwind v4 emitted an **empty rule** for the `group-open:` variant in this setup | Replaced with a plain scoped CSS rule in `globals.css` |

## Remaining known differences

- **Footer 4px shorter** (532 vs 536) and **testimonials 1px shorter**. Sub-pixel accumulation in
  the stacked footer rows; not chased further.
- **Mobile document +63px (0.8%)**, concentrated in testimonial card height (492.9 vs 510.9). The
  original's mobile card has ~18px that did not decompose cleanly from padding + video + gap +
  content; the visible layout is equivalent.
- **Mobile carousel step 318 vs 311** — the clone's track is 328px wide where the original's is
  321px, so its full-width card is 7px wider. Self-consistent; one card per view either way.
- **Tooltip bubble styling is approximated** — the original's bubble CSS was never captured, only
  its text. Documented in `components/CarCatalog.spec.md`.
- **Footer sub-link hrefs are placeholders** pointing at `https://www.kovi.com.br/`. The social,
  address and Play Store hrefs are exact.
- Out of scope by the skill's defaults and confirmed not built: the HubSpot popup CTA, the
  lead-capture modal, and the city-selector modal.
