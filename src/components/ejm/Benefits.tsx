import Image from "next/image";

import {
  NegativadosIcon,
  NoCreditCardIcon,
  UberPartnerIcon,
  UnlimitedKmIcon,
} from "@/components/ejm/shared/icons";

const ITEMS = [
  {
    id: "inclusos",
    Icon: NoCreditCardIcon,
    size: "h-[33px] w-[33px]",
    text: "Seguro, manutenção, IPVA e troca de óleo inclusos",
  },
  {
    id: "assistencia",
    Icon: UberPartnerIcon,
    size: "h-[34px] w-[34px]",
    text: "Assistência 24 horas — você liga, a gente resolve",
  },
  {
    id: "apps",
    Icon: UnlimitedKmIcon,
    size: "h-[30px] w-[28px]",
    text: "Rode na Uber e na 99 ao mesmo tempo",
  },
  {
    id: "documentos",
    Icon: NegativadosIcon,
    size: "h-[33px] w-[33px]",
    text: "Só CNH ativa e comprovante de residência",
  },
];

export function Benefits() {
  return (
    <section id="vantagens" className="relative w-full">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-10 px-4 py-10 min-[1212px]:px-0">
        <h2 className="m-0 text-left font-ejm-sans font-bold text-ejm-ink max-[991px]:text-[24px] max-[991px]:leading-[28px] min-[992px]:text-[40px] min-[992px]:leading-[47px]">
          Por que alugar com a EJM
        </h2>

        <div className="grid w-full gap-10 px-2 max-[991px]:grid-cols-1 min-[992px]:grid-cols-[minmax(0,407.391px)_1fr]">
          <div className="flex items-center justify-center rounded-[12px] bg-ejm-navy p-6">
            <Image
              src="/sites/ejm-locacoes/cars/argo.png"
              alt="Fiat Argo disponível para locação na EJM Locações"
              width={900}
              height={498}
              className="h-auto w-full max-w-full object-contain"
            />
          </div>

          <div className="flex flex-col gap-10">
            <p className="m-0 flex flex-col gap-3 font-ejm-sans text-ejm-body max-[991px]:text-[18px] max-[991px]:leading-[24px] min-[992px]:text-[22px] min-[992px]:leading-[28px] min-[992px]:tracking-[-0.44px]">
              <strong className="block font-bold text-ejm-ink max-[991px]:text-[20px] max-[991px]:leading-[26px] min-[992px]:text-[28px] min-[992px]:leading-[30px]">
                Você quer rodar de aplicativo e precisa de um carro?
              </strong>
              <span>
                Na EJM Locações o aluguel é semanal e sem pegadinha: o que está
                no preço já está resolvido.
              </span>
            </p>

            <div className="grid gap-x-3 gap-y-6 max-[991px]:grid-cols-1 min-[992px]:grid-cols-2">
              {ITEMS.map(({ id, Icon, size, text }) => (
                <div
                  key={id}
                  className="flex flex-row items-center gap-[7.8px] rounded-[12px] border border-ejm-border p-4 font-ejm-sans text-ejm-ink max-[991px]:text-[18px] max-[991px]:leading-[22px] min-[992px]:text-[22px] min-[992px]:leading-[24px] font-light"
                >
                  <Icon className={`shrink-0 text-ejm-blue ${size}`} />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
