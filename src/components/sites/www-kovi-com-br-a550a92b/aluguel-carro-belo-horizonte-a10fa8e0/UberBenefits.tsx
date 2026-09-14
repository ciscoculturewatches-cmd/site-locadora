import Image from "next/image";
import {
  NegativadosIcon,
  NoCreditCardIcon,
  UberPartnerIcon,
  UnlimitedKmIcon,
} from "@/components/sites/www-kovi-com-br-a550a92b/shared/icons";

const ITEMS = [
  {
    icon: UberPartnerIcon,
    size: "h-[34px] w-[34px]",
    text: "Parceria com descontos exclusivos para motorista parceiro Uber",
  },
  {
    icon: NoCreditCardIcon,
    size: "h-[33px] w-[33px]",
    text: "Não precisa ter cartão de crédito",
  },
  {
    icon: NegativadosIcon,
    size: "h-[33px] w-[33px]",
    text: "Aluguel para negativados",
  },
  {
    icon: UnlimitedKmIcon,
    size: "h-[30px] w-[28px]",
    text: "Sem limite de quilometragem",
  },
];

export function UberBenefits() {
  return (
    <section className="relative w-full min-[992px]:h-[547px]">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-10 px-4 py-10 min-[1212px]:px-0">
        <h2 className="m-0 font-kovi-sans text-[24px] leading-[22px] font-bold text-kovi-ink min-[992px]:text-[40px] min-[992px]:leading-[47px]">
          Aluguel de carro para Uber
        </h2>
        <div className="grid w-full max-w-[1180px] gap-10 px-2 min-[992px]:grid-cols-[407.391px_1fr] min-[992px]:h-[380px]">
          <div className="relative h-[264px] w-[335px] min-[992px]:h-[380px] min-[992px]:w-[407.391px]">
            <Image
              src="/sites/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/images/uber-driver.png"
              alt="img"
              fill
              sizes="(min-width: 992px) 408px, 335px"
              className="max-w-full rounded-xl object-cover"
            />
          </div>
          <div className="flex w-full flex-col gap-10 min-[992px]:h-[380px] min-[992px]:w-[716.594px]">
            <p className="m-0 flex flex-col gap-3 font-kovi-sans text-[22px] leading-[28px] font-normal tracking-[-0.44px] text-kovi-ink min-[992px]:h-[128px]">
              <strong className="block h-[60px] font-kovi-sans text-[28px] leading-[30px] font-bold tracking-[-0.44px] text-kovi-ink">
                Você já é ou quer se tornar motorista de Uber e precisa alugar
                um carro?
              </strong>
              <span>
                A Kovi tem os melhores planos para aluguel de carro para
                Uber, confira agora as vantagens!
              </span>
            </p>
            <div className="grid grid-cols-1 gap-x-3 gap-y-6 min-[992px]:h-[212px] min-[992px]:w-[716.594px] min-[992px]:grid-cols-2">
              {ITEMS.map(({ icon: Icon, size, text }) => (
                <div
                  key={text}
                  className="flex w-full flex-row items-center gap-[7.8px] rounded-xl border border-[rgb(239,227,229)] p-4 font-kovi-sans text-[22px] leading-6 font-light text-kovi-ink min-[992px]:h-[106px] min-[992px]:w-[352.297px]"
                >
                  <Icon className={`${size} shrink-0`} />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
