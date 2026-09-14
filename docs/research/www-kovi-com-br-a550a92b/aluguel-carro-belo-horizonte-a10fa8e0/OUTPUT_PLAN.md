# Output Plan — Kovi Belo Horizonte

| Field | Value |
| --- | --- |
| Source URL | `https://www.kovi.com.br/aluguel-carro-belo-horizonte` |
| `<app-root>` | `.` (repository root) |
| `<site-key>` | `www-kovi-com-br-a550a92b` (sha256 of `https://www.kovi.com.br` → `a550a92b`) |
| `<page-key>` | `aluguel-carro-belo-horizonte-a10fa8e0` (sha256 of `/aluguel-carro-belo-horizonte` → `a10fa8e0`) |
| Destination route | `/` → `src/app/page.tsx` |
| Artifact root | `docs/research/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/` |
| Screenshot root | `docs/design-references/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/` |
| Component root | `src/components/sites/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/` |
| Site-shared components | `src/components/sites/www-kovi-com-br-a550a92b/shared/` |
| Asset root | `public/sites/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/` |
| Site-shared assets | `public/sites/www-kovi-com-br-a550a92b/shared/` (fonts, logos, favicon) |
| Download script | `scripts/download-assets-www-kovi-com-br-a550a92b-aluguel-carro-belo-horizonte-a10fa8e0.mjs` |

## Route decision

The repository was an untouched template: the only route was the scaffold placeholder at
`src/app/page.tsx` ("Clone target not yet built"). Per the skill's routing default, the first
single-URL clone in an untouched template replaces that scaffold, so the clone lives at `/`.

No pre-existing cloned or user-authored route, component namespace, research folder, screenshot,
or asset namespace existed. Nothing was overwritten.

If a second Kovi page is cloned later, it must preserve its source pathname
(e.g. `/aluguel-carro-sao-paulo` → `src/app/aluguel-carro-sao-paulo/page.tsx`) and reuse
`src/components/sites/www-kovi-com-br-a550a92b/shared/` for genuinely shared pieces
(Header, Footer, icons, fonts) rather than duplicating them.

## Shared foundation files that change

- `src/app/layout.tsx` — fonts (Roboto via `next/font/google`, Dotties Vanilla via `next/font/local`), `lang="pt-br"`, metadata.
- `src/app/globals.css` — Kovi design tokens merged in as `--kovi-*` custom properties + Tailwind `@theme` mappings.
- `package.json` — already switched to `--webpack` (this machine cannot run Turbopack).

Both files were template scaffold only; no existing route depended on their previous contents.

## Baseline verification

`npm run build` on the untouched template passed (exit 0, routes `/` and `/_not-found`) before
any edit was made.
