import Image from "next/image";

import type {
  KoviFooterColumn,
  KoviSocialLink,
} from "@/types/www-kovi-com-br-a550a92b";

import {
  FacebookIcon,
  GooglePlayIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "./icons";

const PAGE_IMAGES =
  "/sites/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/images";
const SHARED = "/sites/www-kovi-com-br-a550a92b/shared";
const HOME = "https://www.kovi.com.br/";

// The individual sub-link hrefs were not captured from the live page; they all
// point at the Kovi home page. The social and bottom-row hrefs below are exact.
const COLUMNS: KoviFooterColumn[] = [
  {
    title: "Motorista",
    titleHref: HOME,
    links: [
      { label: "Escolher um carro", href: HOME },
      { label: "Kovi Próprio", href: HOME },
      { label: "Kovi Mensal", href: HOME },
      { label: "Programa Kovi Direção Segura", href: HOME },
      { label: "Ajuda", href: HOME },
      { label: "Avise um sinistro (colisão ou acidente)", href: HOME },
      { label: "Central do Motorista", href: HOME },
    ],
  },
  {
    title: "Transparência",
    titleHref: HOME,
    links: [
      { label: "Termos e condições gerais de locação", href: HOME },
      { label: "Tabela de preços KP 2.0", href: HOME },
      { label: "Termos de uso", href: HOME },
      { label: "Políticas de privacidade", href: HOME },
      { label: "Política de Compliance", href: HOME },
      { label: "Demonstrações Financeiras", href: HOME },
      { label: "Relatório de Transparência 1º Semestre 2025", href: HOME },
      { label: "Relatório de Transparência 1º Semestre 2026", href: HOME },
    ],
  },
  {
    title: "A Kovi",
    titleHref: HOME,
    links: [
      { label: "Segurança - Proteja-se de golpes", href: HOME },
      { label: "Manutenção Contratada", href: HOME },
      { label: "Pague o que rodar", href: HOME },
      { label: "Trabalhe conosco", href: HOME },
      { label: "Escola Kovi", href: HOME },
      { label: "Parcerias", href: HOME },
      { label: "Ética e Transparência", href: HOME },
    ],
  },
];

const SOCIAL: KoviSocialLink[] = [
  { label: "Facebook", href: "https://www.facebook.com/meukovi" },
  { label: "YouTube", href: "https://www.youtube.com/@meukovi" },
  { label: "Instagram", href: "https://www.instagram.com/meukovi/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/kovi/" },
];

const SOCIAL_ICONS = {
  Facebook: FacebookIcon,
  YouTube: YoutubeIcon,
  Instagram: InstagramIcon,
  LinkedIn: LinkedinIcon,
} as const;

export function Footer() {
  return (
    <footer className="w-full font-kovi-sans text-kovi-ink">
      {/* Full-bleed pink wave, outside the content wrapper. */}
      <div className="w-full">
        <Image
          src={`${PAGE_IMAGES}/footer-divider.png`}
          alt="Kovi - Divisor de secoes"
          width={1440}
          height={156}
          className="w-full h-auto max-w-full"
        />
      </div>

      <div className="w-full max-w-[1290px] mx-auto px-5">
        <div className="flex gap-6 items-start max-[991px]:flex-col min-[992px]:flex-row min-[992px]:h-[225px]">
          <div className="flex flex-col min-[992px]:w-[250px]">
            <a href={HOME} className="inline-block transition-all duration-500">
              <Image
                src={`${SHARED}/logo-footer.webp`}
                alt="Kovi - Logo"
                width={161}
                height={41}
                className="w-[53.6px] h-[13.6px]"
              />
            </a>
            <div className="mt-5 block font-kovi-display font-semibold text-[22.4px] leading-[22.4px] text-black min-[992px]:w-[250px]">
              O carro que todos podem escolher
            </div>
          </div>

          <div className="flex gap-6 max-[991px]:flex-col min-[992px]:flex-row min-[992px]:w-[728px] min-[992px]:h-[225px]">
            {COLUMNS.map((column) => (
              <div key={column.title} className="block min-[992px]:w-[226.7px]">
                <a
                  href={column.titleHref}
                  className="inline-block m-0 p-0 font-kovi-sans text-[16px] font-normal text-kovi-ink transition-all duration-500"
                >
                  {column.title}
                </a>
                <ul className="flex flex-col list-none m-0 p-0 min-[992px]:w-[226.7px]">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="block mb-2 font-kovi-sans text-[12.8px] leading-[12.8px] font-normal text-kovi-ink transition-all duration-500"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="min-[992px]:w-[224px]">
            <div className="block font-kovi-sans text-[16px] font-bold text-kovi-ink">
              Siga nossas redes sociais:
            </div>
            <div className="mt-4 flex gap-7">
              {SOCIAL.map((social) => {
                const Icon = SOCIAL_ICONS[social.label as keyof typeof SOCIAL_ICONS];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener"
                    aria-label={social.label}
                    className="w-[22px] transition-all duration-500"
                  >
                    <Icon className="w-[22px] h-auto" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-[rgb(195,195,195)] pb-8">
          <div className="flex gap-6 justify-between items-start max-[991px]:flex-col min-[992px]:flex-row">
            <div className="block pr-5">
              <p className="m-0">
                <strong className="font-kovi-display text-[12px] leading-[12px] font-bold text-black">
                  ©2026 Kovi Tecnologia S.A.
                </strong>
              </p>
              <p className="m-0">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Loja%20Kovi&destination_place_id=ChIJmRMgTgFRzpQRBwsYpmZUkGo&dir_action=navigate"
                  target="_blank"
                  rel="noopener"
                  className="inline-block font-kovi-sans text-[12px] leading-[12px] font-normal text-kovi-ink transition-all duration-500"
                >
                  Sede: Av. das Nações Unidas, 21.612 - Jurubatuba - São Paulo, SP
                </a>
              </p>
            </div>

            <a
              className="flex flex-row items-center gap-[10px] w-[132.2px] h-8 shrink-0"
              href="https://play.google.com/store/apps/details?id=com.kovi"
              target="_blank"
              rel="noopener"
              aria-label="Baixar o App no Google Play"
            >
              <span className="block w-7 h-8" aria-hidden="true">
                <GooglePlayIcon className="w-full h-full" />
              </span>
              <span className="block">
                <span className="block text-[10px] font-normal leading-[11px] text-kovi-ink">
                  Baixar o App no
                </span>
                <span className="block text-[18px] font-medium leading-[19.8px] text-kovi-ink">
                  Google Play
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
