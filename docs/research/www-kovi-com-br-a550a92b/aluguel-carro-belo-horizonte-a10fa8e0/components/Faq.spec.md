# Faq Specification

## Overview
- **Target file:** `src/components/sites/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/Faq.tsx`
- **Screenshot:** `docs/design-references/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/s06-faq.png`
- **Interaction model:** **click-driven**, implemented with native `<details>` / `<summary>`.
  Multiple items may be open at once — it is not a single-open accordion group.

## DOM Structure

```
<section>                          max-width 1180px, centred, margin 60px auto, flex column
  <div class="title-faq">          "Dúvidas frequentes", pink, centred
  <div class="wrapper-itens-faq">
    <details id="faq-item-N">×14   padding 25px 0
      <summary>                    flex, align-center, gap 12px
        <svg class="faq-svg" />    7×19 pink chevron
        <div class="title-faq-item">question
      <div class="content-faq-item">answer
```

## Computed Styles (exact values from getComputedStyle at 1440px)

### `section`
- width: `100%`; maxWidth: `1180px`; margin: `60px auto`
- display: `flex`; flexDirection: `column`
- fontFamily: `Roboto`; fontSize: `16px`; color: `rgb(38, 42, 48)`

### `.title-faq`
- fontSize: `34px`; lineHeight: `56.1px`; fontWeight: `700`
- fontFamily: `"Dotties Vanilla"` → `font-kovi-display`
- **color: `rgb(255, 53, 90)`** (pink — this heading is the only pink one on the page)
- textAlign: `center`; display: `flex`; width: `100%`; margin: `0`
- Because it is `display: flex` with `text-align: center`, add `justify-content: center` so the
  text actually centres.

### `.wrapper-itens-faq`
- display: `block`; width: `100%`; margin: `0`; padding: `0`

### `<details>`
- display: `block`; width: `100%`; padding: `25px 0`; margin: `0`
- **No border and no border-bottom.** The visual separation between rows comes purely from the
  `25px` vertical padding. Do not add divider lines.

### `<summary>`
- display: `flex`; alignItems: `center`; gap: `12px`; cursor: `pointer`; padding: `0`; margin: `0`
- fontSize: `22px`; lineHeight: `31.416px`; fontWeight: `600`
- fontFamily: `"Dotties Vanilla"` → `font-kovi-display`
- color: `rgb(38, 42, 51)`
- `list-style-type` must be suppressed so the native disclosure triangle never renders:
  `list-style: none` **and** `&::-webkit-details-marker { display: none }`.
  (The original leaves `disclosure-open` in the computed style but the marker is hidden.)

### Chevron `svg.faq-svg`
- width `7`, height `19`, viewBox `0 0 7 19`, path `fill="#FF355A"`
- Available as `FaqChevronIcon` from the shared icons module.
- `flex-shrink: 0`.

### `.content-faq-item` (answer)
- display: `block`; padding: `12px 0 0 20px`; margin: `0`
- fontSize: `15.2px`; lineHeight: `19px`; fontWeight: `400`
- fontFamily: `Roboto, sans-serif`; color: `rgb(38, 42, 48)`

`15.2px` is not a typo — reproduce it exactly, not `15px` or `16px`.

## States & Behaviors

### Open / closed
- **Trigger:** click on the `<summary>` (native `<details>` toggle — no JS needed)
- **State A (closed):** chevron `transform: none` (points right); answer not rendered
- **State B (open):** chevron `transform: rotate(90deg)` (computed `matrix(0, 1, -1, 0, 0, 0)`,
  pointing down); answer visible
- **Transition:** `0.4s` on the chevron's `transform`
- Implementation: `details[open] summary svg { transform: rotate(90deg) }` with
  `transition: transform 0.4s` on the svg. In Tailwind that is an arbitrary variant such as
  `[[open]_&]:rotate-90` on the icon, or a tiny CSS rule — either is fine.

### Default open state
**Item 1 ships with the `open` attribute. Items 2–14 are closed.** Reproduce that exactly.

### Hover
`.faq-section … h6:hover { color: rgb(255, 53, 90) }` exists in the stylesheet but targets an `h6`
that this page's FAQ markup does not use — **there is no active hover effect on these questions.**
Do not add one.

## Per-State Content

All 14 items, verbatim. `id` values are `faq-item-1` … `faq-item-14`.

1. **Q:** `Como funciona o aluguel de carro para motorista de aplicativo na Kovi?` *(open by default)*
   **A:** `Alugar um carro para Uber, 99 ou Indrive na Kovi é simples. Você escolhe o modelo, faz o pagamento da caução e da 1ª semana e já pode rodar. Não exigimos análise de crédito nem cartão, tornando o aluguel acessível mesmo para quem tem restrições.`
2. **Q:** `Quais são os benefícios do aluguel de carros para aplicativos na Kovi?`
   **A:** `Na Kovi, o aluguel de carro para motorista de aplicativo inclui manutenção, carro reserva, proteção e suporte completo. Além disso, oferecemos preços justos, pagamento flexível por km rodado e agilidade na retirada do veículo.`
3. **Q:** `Quanto custa alugar um carro para motorista de aplicativo na Kovi?`
   **A:** `Os preços do aluguel de carro para Uber variam conforme o modelo, a cidade e o plano escolhido. Na Kovi, você paga de acordo com a quilometragem rodada, o que ajuda a economizar quando roda menos. É só consultar nossos vendedores e encontrar o plano ideal.`
4. **Q:** `Precisa de cartão de crédito para alugar um carro na Kovi?`
   **A:** `Não precisa! Aqui na Kovi, você pode alugar um carro para aplicativo sem cartão de crédito. O pagamento da caução pode ser feito no Pix ou cartão de terceiros. E nas faturas semanais, além dessas opções, você pode também pagar via boleto, sem burocracia.`
5. **Q:** `Quais aplicativos de transporte posso usar com um carro da Kovi?`
   **A:** `Você pode rodar com seu carro alugado na Uber, 99, Indrive e outras plataformas de transporte de passageiros ou entregas. É só escolher o carro e começar a ganhar.`
6. **Q:** `Quais documentos são necessários para alugar um carro na Kovi?`
   **A:** `Para alugar um carro para Uber ou 99 na Kovi, é preciso ter CNH definitiva, comprovante de residência e realizar o pagamento da caução e da 1ª semana de aluguel.`
7. **Q:** `A Kovi oferece aluguel de carros mensal para aplicativos?`
   **A:** `Sim! Temos planos mensais e anuais para motoristas de aplicativo. Assim, você escolhe o que cabe no seu bolso e roda com tranquilidade.`
8. **Q:** `Quem tem nome sujo pode alugar um carro na Kovi?`
   **A:** `Pode sim! Na Kovi, motoristas de aplicativo com nome negativado conseguem alugar carro sem análise de crédito. É só ter CNH definitiva.`
9. **Q:** `Como funciona o plano para comprar o carro na Kovi?`
   **A:** `No Kovi Próprio, você começa alugando o carro normalmente. Depois do período estabelecido no contrato, você já pode comprar o carro que dirige. Na compra, você escolhe se quer pagar à vista ou financiar. Mas não se preocupe: mesmo com nome negativado, você pode conseguir o financiamento! Além disso, calculamos parcelas que cabem no seu bolso, a partir do que você já paga semanalmente. Por exemplo: se você paga R$800,00 por semana no seu aluguel, o seu total no mês é R$3.200,00. Então, esse será o valor máximo da sua parcela mensal no financiamento.`
10. **Q:** `Como faço para começar a alugar um carro com a Kovi?`
    **A:** `É fácil: fale com a gente pelo WhatsApp, telefone ou visite uma loja Kovi. Depois, escolha o carro e o plano, pague a caução + primeira semana e pronto, é só retirar o carro e começar a rodar.`
11. **Q:** `Posso escolher o modelo do carro na hora do aluguel?`
    **A:** `Sim! No plano Kovi Próprio, você escolhe o modelo que faz mais sentido para seu trabalho como motorista de aplicativo. Temos opções como Argo, Onix, Polo, entre outros.`
12. **Q:** `A Kovi tem carro aceito na categoria Comfort da Uber?`
    **A:** `Temos sim! Oferecemos diversos modelos aceitos na categoria Comfort da Uber, como Argo, Polo e Cronos. Fale com um vendedor pelo WhatsApp e veja qual carro se encaixa melhor no seu perfil.`
13. **Q:** `A Kovi aluga carro para quem quer trabalhar com entrega?`
    **A:** `Sim! Você pode usar o carro Kovi para trabalhar com aplicativos de transporte de passageiros ou para fazer entregas.`
14. **Q:** `A Kovi tem lojas físicas? Onde posso retirar o carro?`
    **A:** `Sim, temos lojas físicas em várias cidades como São Paulo, Porto Alegre, Campinas, Florianópolis, Fortaleza, Recife e várias outras. Fale com a nossa equipe pelo WhatsApp e veja qual ponto de retirada está mais perto de você.`

## Assets
`FaqChevronIcon` from `@/components/sites/www-kovi-com-br-a550a92b/shared/icons`. No images.

## Text Content (verbatim)
Section title: `Dúvidas frequentes`. Questions and answers exactly as listed above.

## Responsive Behavior
- **Desktop (1440px):** title `34px / 56.1px`; summary `22px / 31.416px`; section `1180px` wide.
- **Tablet (768px):** summary rows measure `63px` tall.
- **Mobile (390px):** title `26px / 42.9px`; summary `16px / 22.848px` with
  `padding-left: 15px` on the summary; rows measure `94px` tall; section spans the full `390px`
  with the wrapper taking the side padding.
- **Breakpoint:** `992px` — use `max-[991px]:` / `min-[992px]:` arbitrary variants.
