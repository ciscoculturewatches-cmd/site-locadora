# Design Tokens — Kovi Belo Horizonte

The site publishes its own token layer on `:root`. These are the authoritative values (read
straight from the stylesheet, not sampled from pixels).

## Colors — declared tokens

| Token | Value | Notes |
| --- | --- | --- |
| `--color-primary` | `#FF355A` | Kovi pink. Header bg, CTAs, active pill, FAQ title, chevrons |
| `--color-primary-50` | `#252B37` | |
| `--color-secondary` | `#8C082E` | dark pink, rarely used |
| `--background-color-primary` | `#FFF` | |
| `--background-color-secondary` | `#F8F8F8` | |
| `--color-border` | `#D7DCE0` | |
| `--color-border-secondary` | `#E9EDF2` | |
| `--color-border-neutral` | `#C3CAD4` | |
| `--color-text` | `#252B37` | |
| `--color-text-secondary` | `#454F62` | |
| `--color-text-inverse` | `#FFF` | |
| `--color-text-placeholder` | `#646E82` | |

## Colors — observed in computed styles

The HubSpot modules do **not** all consume the tokens above; several hardcode near-identical
values. Both sets are in play, so match per element rather than normalising.

| Observed | Hex | Where |
| --- | --- | --- |
| `rgb(38, 42, 48)` | `#262A30` | dominant body/heading text (414 elements), dark button bg |
| `rgb(38, 42, 51)` | `#262A33` | FAQ summary text |
| `rgb(255, 53, 90)` | `#FF355A` | primary |
| `rgb(255, 255, 255)` | `#FFFFFF` | header/nav text, card bg |
| `rgb(251, 251, 251)` | `#FBFBFB` | section bg |
| `rgb(248, 248, 248)` | `#F8F8F8` | inverse button text |
| `rgb(127, 127, 127)` | `#7F7F7F` | inactive pill text + border |
| `rgb(200, 206, 211)` | `#C8CED3` | muted surface |
| `rgb(211, 211, 211)` | `#D3D3D3` | most common 1px border (13 elements) |
| `rgb(239, 227, 229)` | `#EFE3E5` | card border |
| `rgb(195, 202, 212)` | `#C3CAD4` | neutral border |
| `rgba(0, 0, 0, 0.5)` / `rgba(0, 0, 0, 0.7)` | — | modal overlays |

## Typography

| Family | Source | Weights actually rendered |
| --- | --- | --- |
| **Roboto** | Google Fonts | 300, 400, 500, 700, 900 |
| **Dotties Vanilla** | proprietary, self-hosted on HubSpot CDN | regular (400), bold (700), heavy (800) |

`--font-default: "Roboto", sans-serif` · `--font-title: "DottiesVanilla", sans-serif`

The stylesheet also links Inter, Montserrat and Outfit, but only **Outfit 600** actually loads
(inside the HubSpot popup iframe). Neither Inter nor Montserrat renders anywhere on this page —
do not ship them.

### Measured type scale (1440px)

| Role | Family | Size / line-height | Weight | Color |
| --- | --- | --- | --- | --- |
| `h1` page title | Roboto | 40px / 47px | 700 | `#262A30` |
| Intro paragraph | Roboto | 26px / 30px, `letter-spacing: -0.52px` | 400 | `#262A30` |
| Section `h2` | Dotties Vanilla | 34px / 56.1px | 700 | `#262A30` |
| FAQ title | Dotties Vanilla | 34px / 56.1px | 700 | `#FF355A` |
| FAQ question | Dotties Vanilla | 22px / 31.416px | 600 | `#262A33` |
| FAQ answer | Roboto | 15.2px / 19px | 400 | `#262A30` |
| Filter pill | Dotties Vanilla | 20px | 600 | see BEHAVIORS |
| Header nav link | Roboto | 18px | 400 | `#FFFFFF` |
| Header button | Roboto | 15px / 18px, `letter-spacing: 0.46px`, `uppercase` | 600 | `#FFFFFF` / `#F8F8F8` |
| Body default | Roboto | 16px | 400 | `#262A30` |

## Radii

Declared: `--radius-base: 16px`, `--radius-medium: 12px`, `--radius-small: 8px`.
Observed frequency: `8px` (27×), `12px` (16×), `16px` (4×), `24px` (3×, the pills), `50%` (1×).
Also `8px 0 0 8px` and `4px 4px 0 0` on a few asymmetric corners.

## Shadows

| Value | Use |
| --- | --- |
| `rgba(0, 0, 0, 0.25) 2px 2px 8px 0px` | car cards, testimonial cards (6 elements) |
| `rgba(0, 0, 0, 0.15) 0px 4px 20px 0px` | elevated panel |

## Layout

- Declared `--wrapper-size: 1216px`; measured content boxes are `1180px` (FAQ, Testimonials,
  HowToRent) and `1290px` with `0 20px` padding (Header). Per-module, not global.
- `--column-gap: 2.13%`, `--column-width-multiplier: 8.333` (legacy HubSpot grid, unused here).
- Breakpoints: Bootstrap `576 / 768 / 992 / 1200 / 1400`; the meaningful layout switch is **992px**.

## Icons

35 inline SVGs, no icon font, no Lucide. All are custom paths that must be extracted verbatim:
nav icons (18–20px), city globe (28×28), chevron-right (24×24), tooltip info (15×15),
4 Uber-benefit icons (34×34, 33×33, 33×33, 28×30), 3 step icons (24×24), 14 FAQ chevrons (7×19,
`fill="#FF355A"`), close icons, 4 social icons (FontAwesome-shaped paths), Google Play glyph (32×38).

Star ratings are an **image** (`star.png`), not an icon set.
