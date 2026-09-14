"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { EJM, whatsappLink, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/ejm";
import { PhoneIcon } from "@/components/ejm/shared/icons";

import type { EjmNavLink } from "@/types/ejm";

const NAV_LINKS: EjmNavLink[] = [
  { label: "Carros", href: "#escolha-seu-carro" },
  { label: "Vantagens", href: "#vantagens" },
  { label: "Como alugar", href: "#como-alugar" },
  { label: "Dúvidas", href: "#duvidas" },
];

export function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (!drawerOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [drawerOpen]);

  return (
    <header className="fixed top-0 left-0 z-[999] flex h-20 w-full items-center bg-ejm-navy font-ejm-sans">
      <div className="mx-auto w-full max-w-[1290px] px-5">
        <div className="flex items-center">
          <a
            href="#topo"
            className="flex shrink-0 items-center gap-3 transition-[0.5s]"
          >
            <Image
              src="/sites/ejm-locacoes/logo-ejm.png"
              alt="EJM Locações"
              width={512}
              height={512}
              priority
              className="h-11 w-11"
            />
            <span className="font-ejm-display text-[18px] leading-tight font-bold tracking-wide text-white max-[400px]:hidden">
              EJM
              <span className="block text-[11px] font-medium tracking-[0.18em] text-ejm-muted-on-navy">
                LOCAÇÕES
              </span>
            </span>
          </a>

          <div className="flex-1 pl-[30px]">
            <div className="flex items-center justify-end">
              <nav className="max-[991px]:hidden">
                <ul className="flex h-6">
                  {NAV_LINKS.map((link, i) => (
                    <li
                      key={link.label}
                      className={cn(
                        "relative block pr-5",
                        i === NAV_LINKS.length - 1 && "pr-0",
                      )}
                    >
                      <a
                        href={link.href}
                        className="relative inline-block h-6 text-[18px] font-normal text-white no-underline transition-[0.5s] after:absolute after:bottom-[-7px] after:left-0 after:h-[3px] after:w-0 after:bg-ejm-blue after:transition-[0.5s] after:content-[''] hover:after:w-[calc(100%-20px)]"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="ml-5 max-[991px]:hidden">
                <a
                  href={whatsappLink(WHATSAPP_DEFAULT_MESSAGE)}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 rounded-lg border border-ejm-blue bg-ejm-blue px-[22px] py-[10px] text-[15px] font-semibold uppercase tracking-[0.46px] text-white transition-[0.5s] hover:border-white hover:bg-white hover:text-ejm-navy"
                  style={{ lineHeight: "18px" }}
                >
                  <PhoneIcon className="h-4 w-[17px] shrink-0 fill-current" />
                  WhatsApp {EJM.whatsappDisplay}
                </a>
              </div>

              <button
                type="button"
                aria-label="Abrir menu"
                onClick={() => setDrawerOpen(true)}
                className="hidden h-8 w-8 flex-col items-center justify-center gap-[5px] max-[991px]:flex"
              >
                <span className="block h-[2px] w-6 bg-white" />
                <span className="block h-[2px] w-6 bg-white" />
                <span className="block h-[2px] w-6 bg-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </header>
  );
}

function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <>
      <div
        aria-hidden="true"
        onClick={onClose}
        className={cn(
          "fixed inset-0 z-[998] bg-black/50 transition-opacity duration-300 min-[992px]:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />
      <div
        className={cn(
          "fixed right-0 top-0 z-[999] flex h-full w-[360px] max-w-full flex-col bg-white transition-transform duration-300 min-[992px]:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="flex items-center justify-between px-6 pt-5">
          <Image
            src="/sites/ejm-locacoes/logo-ejm.png"
            alt="EJM Locações"
            width={512}
            height={512}
            className="h-11 w-11"
          />
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center text-2xl leading-none text-ejm-ink"
          >
            ×
          </button>
        </div>

        <nav className="px-6 pt-5">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="border-b border-ejm-border-soft">
                <a
                  href={link.href}
                  onClick={onClose}
                  className="block py-4 text-[18px] font-normal text-ejm-ink no-underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto p-6">
          <a
            href={whatsappLink(WHATSAPP_DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener"
            onClick={onClose}
            className="flex items-center justify-center gap-2 rounded-lg bg-ejm-blue px-5 py-4 text-[15px] font-semibold uppercase tracking-[0.46px] text-white"
          >
            <PhoneIcon className="h-4 w-[17px] shrink-0 fill-current" />
            WhatsApp {EJM.whatsappDisplay}
          </a>
        </div>
      </div>
    </>
  );
}
