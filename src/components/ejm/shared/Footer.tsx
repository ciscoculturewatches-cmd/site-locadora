import Image from "next/image";

import { InstagramIcon } from "@/components/ejm/shared/icons";
import { EJM, whatsappLink, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/ejm";
import type { EjmFooterColumn } from "@/types/ejm";

const COLUMNS: EjmFooterColumn[] = [
  {
    title: "Carros",
    links: [
      { label: "Renault Kwid — R$650/semana", href: "#escolha-seu-carro" },
      { label: "Volkswagen Gol — R$650/semana", href: "#escolha-seu-carro" },
      { label: "Fiat Argo — R$790/semana", href: "#escolha-seu-carro" },
      { label: "Fiat Cronos — R$790/semana", href: "#escolha-seu-carro" },
    ],
  },
  {
    title: "Como alugar",
    links: [
      { label: "Passo a passo", href: "#como-alugar" },
      { label: "O que já vem no preço", href: "#vantagens" },
      { label: "Documentos necessários", href: "#duvidas" },
      { label: "Dúvidas frequentes", href: "#duvidas" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="w-full bg-ejm-navy font-ejm-sans text-white">
      <div className="mx-auto w-full max-w-[1290px] px-5 pt-12">
        <div className="flex items-start gap-6 max-[991px]:flex-col min-[992px]:flex-row">
          <div className="flex flex-col min-[992px]:w-[280px]">
            <div className="flex items-center gap-3">
              <Image
                src="/sites/ejm-locacoes/logo-ejm.png"
                alt="EJM Locações"
                width={512}
                height={512}
                className="h-12 w-12"
              />
              <span className="font-ejm-display text-[20px] leading-tight font-bold text-white">
                EJM
                <span className="block text-[11px] font-medium tracking-[0.18em] text-ejm-muted-on-navy">
                  LOCAÇÕES
                </span>
              </span>
            </div>
            <p className="mt-5 mb-0 font-ejm-display text-[20px] leading-[26px] font-semibold text-white">
              Carro pra rodar hoje mesmo.
            </p>
            <p className="mt-2 mb-0 font-ejm-sans text-[14px] text-ejm-muted-on-navy">
              Aluguel semanal para motorista de aplicativo em {EJM.city}.
            </p>
          </div>

          <div className="flex gap-6 max-[991px]:flex-col min-[992px]:flex-1 min-[992px]:flex-row">
            {COLUMNS.map((column) => (
              <div key={column.title} className="block min-[992px]:flex-1">
                <span className="m-0 inline-block p-0 font-ejm-display text-[16px] font-bold text-white">
                  {column.title}
                </span>
                <ul className="m-0 mt-3 flex list-none flex-col p-0">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="block pb-2 font-ejm-sans text-[13px] leading-[18px] font-normal text-ejm-muted-on-navy transition-colors duration-300 hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="min-[992px]:w-[240px]">
              <span className="m-0 inline-block p-0 font-ejm-display text-[16px] font-bold text-white">
                Contato
              </span>
              <a
                href={whatsappLink(WHATSAPP_DEFAULT_MESSAGE)}
                target="_blank"
                rel="noopener"
                className="mt-3 flex w-full items-center justify-center rounded-[10px] bg-ejm-blue px-4 py-3 font-ejm-display text-[16px] font-bold text-white transition-colors duration-300 hover:bg-white hover:text-ejm-navy"
              >
                WhatsApp {EJM.whatsappDisplay}
              </a>
              <a
                href={EJM.instagramUrl}
                target="_blank"
                rel="noopener"
                className="mt-3 inline-flex items-center gap-2 font-ejm-sans text-[13px] text-ejm-muted-on-navy transition-colors duration-300 hover:text-white"
              >
                <InstagramIcon className="h-[18px] w-[18px]" />
                {EJM.instagram}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 py-6">
          <p className="m-0 font-ejm-sans text-[12px] leading-[18px] text-ejm-muted-on-navy">
            © {new Date().getFullYear()} {EJM.name} · {EJM.city} · WhatsApp{" "}
            {EJM.whatsappDisplay}
          </p>
        </div>
      </div>
    </footer>
  );
}
