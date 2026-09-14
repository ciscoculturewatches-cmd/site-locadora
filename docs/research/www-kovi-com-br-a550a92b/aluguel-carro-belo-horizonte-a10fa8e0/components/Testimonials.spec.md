# Testimonials Specification (carousel + card)

Two files, one coherent unit. The card owns its own video modal, so it is specified here rather
than split further.

## Overview
- **Target files:**
  - `src/components/sites/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/TestimonialCard.tsx` → `TestimonialCard`
  - `src/components/sites/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/Testimonials.tsx` → `Testimonials` (also exports `KOVI_BH_TESTIMONIALS`)
- **Screenshot:** `docs/design-references/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/s05-testimonials.png`
- **Interaction model:** **click-driven** carousel (prev / next buttons). No autoplay, no timer,
  no scroll trigger, no drag. Needs `"use client"`.

## DOM Structure

```
<section>
  <div class="container">           max-width 1180px, centred, padding 50px 0,
                                    flex column, center, gap 50px
    <h2>O que nossos motoristas…</h2>
    <div class="slide-cards">       position relative, overflow hidden, height 337.5px
      <button class="left">         absolute, 22 × 34.9
      <button class="right">        absolute, 22 × 34.9
      <div class="cards">           flex row, gap 30px, padding 10px 20px, margin 0 15px, overflow hidden
        <TestimonialCard />×6
```

## Computed Styles (exact values from getComputedStyle at 1440px)

### `section`
- width: `100%`; height: `579.5px`; display: `block`

### `.container`
- width: `100%`; maxWidth: `1180px`; margin-inline: `auto`; padding: `50px 0`
- display: `flex`; flexDirection: `column`; justifyContent: `center`; alignItems: `center`
- gap: `50px`; textAlign: `center`

### `h2` (the original markup uses `<h1>`; use `<h2>` — there is already an `h1` on the page)
- fontSize: `36px`; lineHeight: `46px`; fontWeight: `600`
- fontFamily: `"Dotties Vanilla"` → `font-kovi-display`
- color: `rgb(38, 42, 48)`; textAlign: `center`; width: `1180px`; height: `92px`; margin: `0`

### `.slide-cards` (viewport)
- width: `1180px`; height: `337.5px`; position: `relative`; overflow: `hidden`; textAlign: `center`

### `.cards` (track)
- width: `1150px`; height: `337.5px`; padding: `10px 20px`; margin: `0 15px`
- display: `flex`; flexDirection: `row`; gap: `30px`; overflow: `hidden`; position: `relative`

### `.card` (×6)
- width: `540px`; height: `317.5px`; padding: `30px 20px`
- backgroundColor: `rgb(251, 251, 251)`; color: `rgb(33, 37, 41)`
- display: `flex`; flexDirection: `row`; gap: `20px`
- borderRadius: `8px`; border: `none`
- boxShadow: `rgba(0, 0, 0, 0.25) 2px 2px 8px 0px`
- position: `relative`; transition: `0.2s`
- `flex-shrink: 0` (it must not compress inside the flex track)

### `.card .video` (thumbnail wrapper — the click target)
- width: `225px`; height: `200px`; borderRadius: `8px`; position: `relative`; display: `block`
- `cursor: pointer`

### `.card img.thumb`
- width: `225px`; height: `200px`; objectFit: `cover`; borderRadius: `8px`; position: `absolute`
- intrinsic `480 × 360`

### `.card .content`
- width: `255px`; height: `257.5px`
- display: `flex`; flexDirection: `column`; justifyContent: `flex-start`; alignItems: `flex-start`
- gap: `10px`

### `.card img.star` (rating strip — an image, not icons)
- width: `160px`; height: `28.9062px`; maxWidth: `160px`; intrinsic `332 × 60`

### `.card .content strong` (name)
- fontSize: `24px`; lineHeight: `33.6px`; fontWeight: `600`
- fontFamily: `"Dotties Vanilla"` → `font-kovi-display`
- color: `rgb(38, 42, 48)`; margin: `0`

### `.card .content p` (quote)
- fontSize: `18px`; lineHeight: `25px`; fontWeight: `400`
- fontFamily: `"Dotties Vanilla"` → `font-kovi-display`
- color: `rgb(38, 42, 48)`; margin: `0`; **textAlign: `left`** (the card centres its other content)

> Both measured 2026-09-14 during visual QA. An earlier revision of this spec left them inferred as
> Roboto at the card's base `16px`, which rendered visibly too small and in the wrong typeface.

### Arrows `.left` / `.right`
- width: `22px`; height: `34.9062px`; position: `absolute`
- `.left`: `right: 1158px` (i.e. pinned just outside the left edge of the 1180px viewport)
- `.right`: `left: 1158px`
- both: `top: 168.75px`; `transform: translateY(-17.4531px)` — i.e. vertically centred
  (`top: 50%; transform: translateY(-50%)` reproduces this cleanly — prefer that)
- They are `<button>` elements containing an `<img>`, `aria-label` `Anterior` / `Próximo`.

## States & Behaviors

### Carousel — the only interaction
- **Trigger:** click `.right` (next) or `.left` (prev)
- **Mechanism (measured):** the **first card** receives an inline
  `transform: translateX(-Npx)`, stepping in units of **570px** (540 card + 30 gap):
  `0 → −570 → −1140 → −1710 → −2280`, clamped at **−2280** (index 4).
- **Transition:** `0.2s`
- No wraparound, no autoplay, no timer.
- **Implementation:** apply `translateX(-index * 570px)` to the **track** (`.cards`) rather than to
  the first card — visually identical, much cleaner. Clamp `index` to `0…4`.
- **Arrow affordance:** the unavailable arrow drops to `opacity: 0.5`. It is **not** `disabled`
  — at index 0 → left `0.5`, right `1`; at index 4 → left `1`, right `0.5`. Match that: set
  opacity, and keep the button clickable-but-inert (or set `disabled` and keep opacity 0.5; note
  which you chose).

### Video playback — INLINE, not a modal

> Corrected 2026-09-14 during visual QA. An earlier revision of this spec described a modal
> overlay, inferred from the `button.close-modal` present in the markup. That button computes to
> `display: none` and is never used. The real behaviour is inline replacement, confirmed from the
> stylesheet rules below.

- **Trigger:** click anywhere on `.video`
- The card gains class `play-video`; the play overlay hides and a YouTube iframe fills the
  thumbnail box in place:
  - `.video` — `border-radius: 8px; height: 200px; min-width: 225px; position: relative`
  - `.video::before` (the play button) — `content: ""; inset: 0; position: absolute; z-index: 11; cursor: pointer;`
    `background: url(play.png) 50% center / 60px auto no-repeat`
  - `.video img.thumb` — `inset: 0; position: absolute; width: 100%; height: 100%; object-fit: cover; border-radius: 8px; cursor: pointer`
  - `.video iframe` — `inset: 0; position: absolute; width: 100%; height: 100%; border-radius: 8px; z-index: 12`
  - `.card.play-video .video::before` — `display: none; z-index: -1`
- Iframe src: `https://www.youtube.com/embed/<videoId>?autoplay=1`. Videos are not mirrored.
- **The play-button overlay is easy to miss** — it is a `::before` background image, not an `<img>`,
  so a DOM-only asset sweep will not surface it. Asset: `play.png`, rendered at `60px` wide, centred.

### Hover
No hover rule targets the cards or arrows. Do not add one.

## Per-State Content — all 6 testimonials, in order

| # | name | videoId | thumb file |
| --- | --- | --- | --- |
| 1 | `Guilherme` | `eO5z1JZca_A` | `testimonial-guilherme.jpg` |
| 2 | `Marina` | `WNIdnOtPoTI` | `testimonial-marina.jpg` |
| 3 | `Jonatan` | `371qcyNT0qI` | `testimonial-jonatan.jpg` |
| 4 | `Getúlio` | `Eexevf6-JFc` | `testimonial-getulio.jpg` |
| 5 | `Fabrício` | `Wlh6R64S558` | `testimonial-fabricio.jpg` |
| 6 | `Moura` | `JMvyhsIGxPc` | `testimonial-moura.jpg` |

Quotes, verbatim:

1. **Guilherme:** `A Kovi pra mim foi a porta de entrada, nunca imaginei que eu teria um carro zero. Sou muito grato pelo o que a Kovi tem feito pela minha família.`
2. **Marina:** `Para mim, a diferença da Kovi com as outras locadoras é a questão da facilidade que ela proporciona, por não precisar de cartão de crédito. Além de que eles sempre tem carros 0km.`
3. **Jonatan:** `Eu escolhi alugar na Kovi porque é sem burocracia e ajuda muitas pessoas a realizarem o sonho do carro próprio.`
4. **Getúlio:** `Consegui alugar meu carro de forma fácil e ágil pela internet. É o motivo de eu continuar trabalhando de forma independente, autônoma e feliz.`
5. **Fabrício:** `É um carro que não me dá problema. Se acontece alguma coisa, já agendo a oficina e rapidamente já é resolvido. Se fizer o cálculo, vale a pena alugar o carro, você não paga mais nada.`
6. **Moura:** `Hoje eu não me vejo mais sem o carro da Kovi. Tenho o carro para usar com a minha família e também para complementar minha renda.`

Each thumbnail's `alt` is `Assistir ao depoimento de <name>`.

## Assets
Under `/sites/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/images/`:
the six `testimonial-*.jpg` files (480×360), `stars.png` (332×60, alt `Star`),
`arrow-left.png` (46×73, alt `Anterior`), `arrow-right.png` (46×73, alt `Próximo`),
`play.png` (the `::before` play overlay, rendered `60px` wide).

`close-black.png` (64×64) is downloaded but **unused** — its button is `display: none` on the
original.

## Text Content (verbatim)
Section heading: `O que nossos motoristas estão falando do aluguel de carros na Kovi`
Names and quotes exactly as listed above.

## Responsive Behavior

> Corrected 2026-09-14 during visual QA. An earlier revision claimed the cards stack vertically
> below 992px and that the arrows should be hidden. That was read off a window that had been
> resized down from desktop; on a **fresh load at 390px** the track is still `flex-direction: row`.

- **Desktop (≥992px):** track `flex-direction: row`, 2 cards visible, card `540 × 317.5`,
  `gap: 30px`, `padding: 30px 20px`, card `flex-direction: row`.
  Step `570px`, max index `4`.
- **Mobile (<992px):** track **stays `flex-direction: row`** — it remains a carousel, now showing
  **one card at a time**, and the arrows stay visible (`display: block`).
  - Card: `min-width: 100%`, `flex-direction: column`, `padding: 30px 15px`, `gap: 20px`
  - At a 390px viewport: track `321` wide with `padding: 10px 20px`, card `281 × 510.9`
  - Video box: `height: 250px`, `min-width: 225px` (renders `251 × 250`)
  - **Step `311px`** (281 + 30), max index `5`
  - **Type steps down:** name `16px / 24px` (from `24 / 33.6`), quote `14px / 18px`
    (from `18 / 25`). The star strip stays `160 × 28.9` and the content gap stays `10px`.
- Because the step differs per breakpoint, derive it at runtime from the first card's measured
  width + `30`, and compute `maxIndex = 6 - round(trackInnerWidth / step)`. Hardcoding `570`
  silently breaks mobile.
- **Breakpoint:** `992px` — use `max-[991px]:` / `min-[992px]:` arbitrary variants.
