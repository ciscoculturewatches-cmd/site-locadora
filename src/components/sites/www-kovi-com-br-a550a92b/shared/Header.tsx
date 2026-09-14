"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { PhoneIcon } from "@/components/sites/www-kovi-com-br-a550a92b/shared/icons";

const NAV_LINKS = [
  { label: "Página inicial", href: "https://www.kovi.com.br/" },
  { label: "Sobre nós", href: "https://www.kovi.com.br/sobre-nos" },
  { label: "Blog", href: "https://www.kovi.com.br/blog" },
  { label: "Indique e Ganhe", href: "https://indique.kovi.com.br/" },
  { label: "Dúvidas", href: "https://ajuda.kovi.com.br/hc/pt-br" },
  { label: "Contato", href: "https://www.kovi.com.br/contato" },
] as const;

const SOBRE_NOS_SUBMENU = [
  { label: "Quem somos", href: "https://www.kovi.com.br/sobre-nos" },
  {
    label: "Ética e Transparência",
    href: "https://www.kovi.com.br/etica-e-transparencia",
  },
] as const;

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
    <header className="top-head-wrapper fixed top-0 left-0 z-[999] flex h-20 w-full items-center bg-kovi-pink font-kovi-sans">
      <div className="content-wrapper mx-auto w-full max-w-[1290px] px-5">
        <div className="inner-head-menu flex items-center">
          <div className="main-site-logo h-7 w-20 shrink-0 max-[991px]:h-auto max-[991px]:w-auto">
            <a
              href="https://www.kovi.com.br/"
              className="hidden h-5 w-20 transition-[0.5s] min-[992px]:inline-block"
            >
              <Image
                src="/sites/www-kovi-com-br-a550a92b/shared/logo-white-horizontal.svg"
                alt="Kovi - Logo Branco"
                width={80}
                height={20}
                className="h-5 w-20 object-cover"
              />
            </a>
            <a
              href="https://www.kovi.com.br/"
              className="hidden h-[23px] w-[93px] transition-[0.5s] max-[991px]:inline-block"
            >
              <Image
                src="/sites/www-kovi-com-br-a550a92b/shared/logo-black-horizontal.svg"
                alt="Kovi - Logo Preto"
                width={93}
                height={23}
                className="h-[23px] w-[93px] object-cover"
              />
            </a>
          </div>

          <div className="menu-right flex-1 pl-[30px]">
            <div className="inner-menu-right flex items-center justify-end">
              <nav className="max-[991px]:hidden">
                <ul className="flex h-6">
                  {NAV_LINKS.map((link) => (
                    <li
                      key={link.label}
                      className={cn(
                        "group relative block pr-5",
                        link.label === "Contato" && "pr-0",
                      )}
                    >
                      <a
                        href={link.href}
                        className="relative inline-block h-6 text-[18px] font-normal text-white no-underline transition-[0.5s] after:absolute after:bottom-[-7px] after:left-0 after:h-[3px] after:w-0 after:bg-white after:transition-[0.5s] after:content-[''] hover:after:w-[calc(100%-20px)]"
                      >
                        {link.label}
                      </a>

                      {link.label === "Sobre nós" && (
                        <div className="pointer-events-none absolute left-0 top-full z-10 min-w-[220px] rounded-lg bg-white p-2 opacity-0 shadow-[0_4px_20px_0_rgb(0_0_0_/_0.15)] transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
                          <ul>
                            {SOBRE_NOS_SUBMENU.map((item) => (
                              <li key={item.label}>
                                <a
                                  href={item.href}
                                  className="block whitespace-nowrap rounded-md px-3 py-2 text-[15px] text-kovi-ink transition-[0.5s] hover:bg-black hover:text-white"
                                >
                                  {item.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="header-btn head-1 ml-5 max-[991px]:hidden">
                <a
                  href="https://www.kovi.com.br/?hsLang=pt-br#centraldeVendas"
                  className="inline-flex items-center gap-2 rounded-lg border border-white bg-kovi-pink px-[22px] py-[10px] text-[15px] font-semibold uppercase tracking-[0.46px] text-white transition-[0.5s] hover:bg-kovi-ink"
                  style={{ lineHeight: "18px" }}
                >
                  <PhoneIcon className="h-4 w-[17px] shrink-0 fill-current" />
                  Vendas: 0800 018 0029
                </a>
              </div>

              <div className="header-btn head-3 ml-5 max-[991px]:hidden">
                <a
                  href="https://motorista.kovi.com.br/authentication/"
                  className="inline-block rounded-lg border border-kovi-ink bg-kovi-ink px-[22px] py-[10px] text-[15px] font-semibold uppercase tracking-[0.46px] text-[#f8f8f8] transition-[0.5s] hover:border-white hover:bg-white hover:text-kovi-ink"
                  style={{ lineHeight: "18px" }}
                >
                  Central do motorista
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
          "fixed inset-0 z-[998] bg-black/50 transition-opacity duration-300",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />
      <div
        className={cn(
          "fixed right-0 top-0 z-[999] h-full w-[360px] max-w-full bg-white transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full",
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="flex items-center justify-between px-6 pt-5">
          <Image
            src="/sites/www-kovi-com-br-a550a92b/shared/logo-black-horizontal.svg"
            alt="Kovi - Logo Preto"
            width={93}
            height={23}
            className="h-[23px] w-[93px] object-cover"
          />
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center text-2xl leading-none text-kovi-ink"
          >
            ×
          </button>
        </div>

        <nav className="px-6 pt-5">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="border-b border-kovi-border-soft">
                <a
                  href={link.href}
                  onClick={onClose}
                  className="block py-4 text-[18px] font-normal text-kovi-ink no-underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
