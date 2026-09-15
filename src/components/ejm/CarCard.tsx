import Image from "next/image";

import { whatsappLink } from "@/lib/ejm";
import type { EjmCarCard } from "@/types/ejm";

const CARS_BASE = "/sites/ejm-locacoes/cars";

export const EJM_CARS: EjmCarCard[] = [
  {
    model: "Renault Kwid",
    categoryNote: "Seguro · Manutenção · IPVA · Óleo inclusos",
    badge: "Hatch",
    tier: "tier-650",
    price: "R$650",
    period: "semana",
    deliveryNote: "Aprovou, pega o carro no mesmo dia",
    image: `${CARS_BASE}/kwid.png`,
    imageAlt: "Renault Kwid",
    imageWidth: 1200,
    imageHeight: 799,
  },
  {
    model: "Volkswagen Gol",
    categoryNote: "Seguro · Manutenção · IPVA · Óleo inclusos",
    badge: "Hatch",
    tier: "tier-650",
    price: "R$650",
    period: "semana",
    deliveryNote: "Aprovou, pega o carro no mesmo dia",
    image: `${CARS_BASE}/gol.png`,
    imageAlt: "Volkswagen Gol",
    imageWidth: 900,
    imageHeight: 551,
  },
  {
    model: "Fiat Argo",
    categoryNote: "Seguro · Manutenção · IPVA · Óleo inclusos",
    badge: "Hatch",
    tier: "tier-790",
    price: "R$790",
    period: "semana",
    deliveryNote: "Aprovou, pega o carro no mesmo dia",
    image: `${CARS_BASE}/argo.png`,
    imageAlt: "Fiat Argo",
    imageWidth: 900,
    imageHeight: 498,
  },
  {
    model: "Fiat Cronos",
    categoryNote: "Seguro · Manutenção · IPVA · Óleo inclusos",
    badge: "Sedan",
    tier: "tier-790",
    price: "R$790",
    period: "semana",
    deliveryNote: "Aprovou, pega o carro no mesmo dia",
    image: `${CARS_BASE}/cronos.png`,
    imageAlt: "Fiat Cronos",
    imageWidth: 900,
    imageHeight: 482,
  },
];

export function CarCard({ car }: { car: EjmCarCard }) {
  const href = whatsappLink(
    `Olá! Vim pelo site e quero alugar o ${car.model} por ${car.price}/${car.period}.`,
  );

  return (
    <li className="list-none rounded-[8px] border border-ejm-border bg-white p-0 shadow-[var(--shadow-ejm-card)] max-[991px]:mb-0 max-[991px]:h-auto max-[991px]:w-full min-[992px]:mb-0 min-[992px]:h-[411px] min-[992px]:w-[368px]">
      <a
        href={href}
        target="_blank"
        rel="noopener"
        title={`Alugar o ${car.model} na EJM Locações`}
        className="inline-block font-ejm-sans text-ejm-ink no-underline max-[991px]:h-auto max-[991px]:w-full max-[991px]:text-[14px] min-[992px]:h-[409px] min-[992px]:w-[366px]"
      >
        <div className="flex h-[29px] w-full justify-center rounded-t-[8px] bg-ejm-navy py-1 font-ejm-sans text-[13px] font-semibold tracking-[0.02em] text-ejm-muted-on-navy min-[992px]:w-[366px]">
          {car.categoryNote}
        </div>

        <div className="flex h-[380px] w-full flex-col justify-center py-5 min-[992px]:w-[366px]">
          <div className="relative flex h-12 w-full items-center justify-between min-[992px]:w-[366px]">
            <div className="flex h-12 min-h-12 max-w-[210px] items-center pl-3 font-ejm-display text-[20px] font-bold text-ejm-ink">
              {car.model}
            </div>
            <div className="relative flex h-8 items-center rounded-l-[8px] bg-ejm-navy px-4 py-1 font-ejm-sans text-[14px] font-bold tracking-wide text-white uppercase">
              {car.badge}
            </div>
          </div>

          <div className="flex h-32 w-full flex-row px-3 pt-3 min-[992px]:w-[366px]">
            <Image
              src={car.image}
              alt={car.imageAlt}
              width={car.imageWidth}
              height={car.imageHeight}
              className="h-[116px] w-[184px] max-w-full object-contain"
            />
            <div className="flex h-[116px] w-[143.266px] flex-col pt-7 pl-2 text-ejm-ink">
              <span className="block h-[21px] font-ejm-sans text-[16px] font-normal text-ejm-muted">
                A partir de
              </span>
              <div className="relative mt-1 flex h-8 items-end font-ejm-display text-[26px] font-extrabold text-ejm-navy">
                {car.price}
                <span className="relative top-[-4px] ml-2 flex h-[21px] font-ejm-sans text-[15px] font-semibold text-ejm-muted">
                  /{car.period}
                </span>
              </div>
            </div>
          </div>

          <div className="mx-[11px] mb-3 flex h-[52px] max-w-full items-center justify-center rounded-[12px] bg-ejm-surface-light px-3 text-center font-ejm-sans text-[13px] leading-[16px] font-medium text-ejm-body">
            Você põe gasolina e roda. O resto é com a gente.
          </div>

          <div className="flex h-[100px] w-full flex-col items-center justify-center px-3 min-[992px]:w-[366px]">
            <span className="mb-6 block h-6 font-ejm-sans text-[17px] font-bold text-ejm-blue">
              {car.deliveryNote}
            </span>
            <div className="flex h-[52px] w-[342px] max-w-full items-center justify-center rounded-[12px] border border-ejm-blue bg-ejm-blue font-ejm-display text-[20px] font-semibold text-white transition-colors duration-300">
              Quero esse
            </div>
          </div>
        </div>
      </a>
    </li>
  );
}
