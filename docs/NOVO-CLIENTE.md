# Reaproveitar este site para outra locadora

Procedimento para clonar este projeto para um novo cliente que tenha o **mesmo
formato de oferta**: aluguel semanal, faixas de preço por modelo, negociação
fechando no WhatsApp.

Tempo estimado: **2 a 3 horas**, sendo a maior parte troca de conteúdo.

---

## 1. Duplicar o projeto

```bash
# fora da pasta atual
cp -r site-locadora site-<cliente>
cd site-<cliente>
rm -rf .git .next .vercel node_modules/.cache
git init && git add -A && git commit -m "Base a partir do site da EJM Locações"
```

Depois: criar o repositório novo no GitHub, `git remote add origin ...`, `git push -u origin master`.

> Não reaproveitar o `.vercel/` nem o `.env.local`: eles apontam para o projeto
> da EJM. O `vercel link` do novo projeto recria os dois.

---

## 2. O que precisa ser trocado

### 2.1 Contato e identidade — `src/lib/ejm.ts`
Arquivo único com nome, cidade, Instagram, número de WhatsApp e a mensagem
padrão. **Todo CTA do site lê daqui** — trocar aqui propaga para os 10 botões.

### 2.2 Cores — `src/app/globals.css`
18 tokens `--color-ejm-*` no bloco `@theme`. Os que realmente definem a marca:

| Token | Uso |
| --- | --- |
| `--color-ejm-navy` | fundo do header, do banner e do rodapé |
| `--color-ejm-blue` | todos os botões e destaques |
| `--color-ejm-surface-light` | faixas claras entre seções |
| `--color-ejm-muted-on-navy` | texto secundário sobre o azul escuro |

### 2.3 Imagens — `public/sites/ejm-locacoes/`
- `logo-<cliente>.png` — logo em PNG com fundo transparente
- `cars/*.png` — uma foto por modelo, fundo removido

Para recortar as fotos: `scripts/extract-brand-assets-ejm.mjs`. Fotos com
**fundo branco** funcionam muito melhor que fundo escuro — num fundo escuro o
preenchimento vaza para dentro dos pneus pretos e abre buracos no carro.

### 2.4 Conteúdo — 8 listas

| Arquivo | Lista | O que é |
| --- | --- | --- |
| `components/ejm/CarCard.tsx` | `EJM_CARS` | modelos, preços, faixa, tipo de carroceria |
| `components/ejm/CarCatalog.tsx` | `FILTERS` | rótulos das faixas de preço |
| `components/ejm/Faq.tsx` | `FAQ_ITEMS` | perguntas e respostas |
| `components/ejm/Testimonials.tsx` | `EJM_HIGHLIGHTS` | diferenciais da marca |
| `components/ejm/Benefits.tsx` | `ITEMS` | 4 vantagens com ícone |
| `components/ejm/HowToRent.tsx` | `STEPS` | 3 passos |
| `components/ejm/shared/Header.tsx` | `NAV_LINKS` | menu |
| `components/ejm/shared/Footer.tsx` | `COLUMNS` | colunas do rodapé |

### 2.5 Títulos soltos
Frases fixas dentro do JSX, em `HeroBanner.tsx`, `SeoIntro.tsx`, `Benefits.tsx`,
`CarCatalog.tsx` e `HowToRent.tsx`.

### 2.6 SEO — `src/app/layout.tsx`
`title`, `description`, `openGraph` e o caminho do favicon.

### 2.7 Renomear (opcional, mas recomendado)
`src/components/ejm/` → `src/components/<cliente>/`, `src/lib/ejm.ts`,
`src/types/ejm.ts` e os tokens `--color-ejm-*`. É busca-e-substitui; deixar
"ejm" no código de outro cliente confunde na manutenção.

---

## 3. Material a pedir para o cliente

- [ ] Logo em PNG ou SVG, fundo transparente
- [ ] Cores da marca (ou uma peça de onde eu extraio)
- [ ] Foto de cada carro — **de preferência com fundo branco**
- [ ] Modelos, preços e o que está incluso no valor
- [ ] Número de WhatsApp e cidade de atuação
- [ ] Instagram
- [ ] Documentos exigidos para retirada
- [ ] Promoção vigente, se houver

---

## 4. Publicar

```bash
vercel link --yes --project <cliente>
vercel deploy --prod --yes
```

O `.vercelignore` já exclui `export/`, `docs/` e `public/assets-brutos/`.
Conferir depois do deploy que `/assets-brutos/...` responde 404.

---

## 5. Cuidados aprendidos neste projeto

- **Não reaproveitar depoimentos.** Os da versão original eram de clientes reais
  de outra empresa. Só entram depoimentos que o próprio cliente fornecer.
- **Não inventar condição comercial.** Caução, aceitar negativado, análise de
  crédito, categoria da Uber: só entra no site o que o cliente afirmar.
- **Fonte de marca.** Se o cliente usar fonte paga, não versionar o arquivo no
  repositório sem licença. O projeto da EJM usa Archivo (Google Fonts) por isso.
- **Este computador não roda Turbopack.** `next dev` e `next build` precisam da
  flag `--webpack`, já configurada nos scripts do `package.json`.
