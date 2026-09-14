import Image from "next/image";

import type { KoviCarCard } from "@/types/www-kovi-com-br-a550a92b";

const IMAGE_BASE =
  "/sites/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/images";

export const KOVI_BH_CARS: KoviCarCard[] = [
  {
    model: "Fiat Argo",
    categoryNote: "Aceito na categoria Comfort",
    badge: "Zero Km",
    price: "R$699",
    period: "semana",
    deliveryNote: "20 dias para entrega em Belo Horizonte",
    image: `${IMAGE_BASE}/car-fiat-argo.webp`,
    imageAlt: "Fiat Argo",
    href: "https://store.kovi.com.br/account",
  },
  {
    model: "Volkswagen Polo",
    categoryNote: "Aceito na categoria Comfort",
    badge: "Zero Km",
    price: "R$749",
    period: "semana",
    deliveryNote: "20 dias para entrega em Belo Horizonte",
    image: `${IMAGE_BASE}/car-vw-polo.png`,
    imageAlt: "Volkswagen Polo",
    href: "https://store.kovi.com.br/account",
  },
  {
    model: "Volkswagen Polo",
    categoryNote: "Aceito na categoria Comfort",
    badge: "+ de 10 mil Km",
    price: "R$649",
    period: "semana",
    deliveryNote: "10 dias para entrega em Belo Horizonte",
    image: `${IMAGE_BASE}/car-vw-polo.png`,
    imageAlt: "Volkswagen Polo",
    href: "https://store.kovi.com.br/account",
  },
  {
    model: "Fiat Argo",
    categoryNote: "Aceito na categoria Comfort",
    badge: "+ de 10 mil Km",
    price: "R$599",
    period: "semana",
    deliveryNote: "10 dias para entrega em Belo Horizonte",
    image: `${IMAGE_BASE}/car-fiat-argo.webp`,
    imageAlt: "Fiat Argo",
    href: "https://store.kovi.com.br/account",
  },
];

export function CarCard({ car }: { car: KoviCarCard }) {
  return (
    <li className="list-none border border-kovi-surface-cool rounded-[8px] bg-transparent p-0 max-[991px]:w-full max-[991px]:h-auto max-[991px]:mr-0 max-[991px]:mb-6 min-[992px]:w-[368px] min-[992px]:h-[411px] min-[992px]:mr-[28px] min-[992px]:mb-6">
      <a
        href={car.href}
        title={`Alugue agora ${car.model} com desconto`}
        className="inline-block text-kovi-ink no-underline font-kovi-sans max-[991px]:w-full max-[991px]:h-auto max-[991px]:text-[14px] min-[992px]:w-[366px] min-[992px]:h-[409px]"
      >
        <div className="w-full min-[992px]:w-[366px] h-[29px] py-1 bg-kovi-surface-cool flex justify-center rounded-t-[4px] text-[16px] font-normal font-kovi-sans text-kovi-ink">
          {car.categoryNote}
        </div>
        <div className="w-full min-[992px]:w-[366px] h-[380px] py-5 flex flex-col justify-center">
          <div className="w-full min-[992px]:w-[366px] h-12 relative flex justify-between items-center">
            <div className="text-[20px] font-bold font-kovi-sans text-kovi-ink pl-3 max-w-[200px] min-h-12 h-12 flex items-center">
              {car.model}
            </div>
            <div className="h-8 px-4 py-1 bg-kovi-ink text-white text-[20px] font-bold font-kovi-sans rounded-l-[8px] flex items-center relative">
              {car.badge}
            </div>
          </div>
          <div className="w-full min-[992px]:w-[366px] h-32 px-3 pt-3 flex flex-row">
            <Image
              src={car.image}
              alt={car.imageAlt}
              width={184}
              height={116}
              className="w-[184px] h-[116px] object-fill max-w-full"
            />
            <div className="w-[143.266px] h-[116px] pt-7 pl-2 flex flex-col text-[#262a33]">
              <span className="text-[16px] font-normal h-[21px] block">
                A partir de
              </span>
              <div className="text-[24px] font-bold mt-1 h-8 flex items-end relative">
                {car.price}/
                <div className="text-[16px] font-bold ml-2 h-[21px] flex relative top-[-4px]">
                  {car.period}
                </div>
              </div>
            </div>
          </div>
          <div className="w-[344px] max-w-full h-[52px] mx-[11px] mb-3 flex justify-center items-center rounded-[12px]">
            <div className="text-[16px] font-normal text-black mr-2 h-[21px]">
              Disponível no plano:
            </div>
            <Image
              src={`${IMAGE_BASE}/plan-kovi-proprio.png`}
              alt="Kovi - Icone Kovi Próprio"
              title="Kovi - Aluguel Kovi Próprio"
              width={168}
              height={71.125}
              className="w-[168px] h-[71.125px] object-fill"
            />
          </div>
          <div className="w-full min-[992px]:w-[366px] h-[100px] px-3 flex flex-col justify-center items-center">
            <span className="text-[18px] font-bold font-kovi-sans text-[rgb(255,53,89)] mb-6 h-6 block">
              {car.deliveryNote}
            </span>
            <div className="w-[342px] max-w-full h-[52px] px-4 py-2 bg-kovi-pink text-white border border-kovi-pink rounded-[12px] text-[20px] font-semibold font-kovi-sans flex justify-center items-center">
              Quero Esse
            </div>
          </div>
        </div>
      </a>
    </li>
  );
}
