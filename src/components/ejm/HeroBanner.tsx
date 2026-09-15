import Image from "next/image";

import { EJM, whatsappLink, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/ejm";

/**
 * Brand banner. Built in markup (not a bitmap) so it stays sharp and responsive
 * and so the price tiers can be edited without touching an image.
 */
export function HeroBanner() {
  return (
    <section className="w-full overflow-hidden bg-ejm-navy">
      <div className="mx-auto grid w-full max-w-[1180px] items-center gap-8 px-4 py-10 min-[1212px]:px-0 max-[991px]:grid-cols-1 min-[992px]:grid-cols-[1fr_minmax(0,46%)] min-[992px]:gap-10 min-[992px]:py-12">
        <div className="flex flex-col items-start">
          <span className="font-ejm-sans text-[13px] font-bold tracking-[0.18em] text-ejm-muted-on-navy uppercase">
            Aluguel semanal · motorista de app
          </span>

          <p className="mt-3 mb-0 font-ejm-display text-white max-[991px]:text-[34px] max-[991px]:leading-[36px] min-[992px]:text-[52px] min-[992px]:leading-[52px] font-extrabold tracking-[-1px]">
            Carro pra rodar
            <br />
            hoje mesmo
          </p>

          <div className="mt-6 flex flex-wrap items-stretch gap-3">
            <PriceTag
              oldValue="650"
              value="250"
              models="Kwid · Gol"
              tone="solid"
            />
            <PriceTag
              oldValue="790"
              value="350"
              models="Argo · Cronos"
              tone="outline"
            />
          </div>

          <p className="mt-3 mb-0 max-w-[560px] font-ejm-sans text-[13px] leading-[18px] text-ejm-muted-on-navy">
            Preço promocional da 1ª semana, fechando o pacote de 2 meses. Depois
            da primeira semana, o valor volta para R$650 e R$790 por semana.
          </p>

          <p className="mt-6 mb-0 font-ejm-sans text-[15px] leading-6 text-ejm-muted-on-navy">
            Seguro · Manutenção · IPVA · Troca de óleo{" "}
            <strong className="font-bold text-white">inclusos</strong>. Você põe
            gasolina e roda.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={whatsappLink(WHATSAPP_DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center rounded-[10px] bg-ejm-blue px-7 py-4 font-ejm-display text-[18px] font-bold text-white transition-colors duration-300 hover:bg-white hover:text-ejm-navy"
            >
              Chamar no WhatsApp
            </a>
            <a
              href="#escolha-seu-carro"
              className="inline-flex items-center justify-center rounded-[10px] border border-white/40 px-7 py-4 font-ejm-display text-[18px] font-bold text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
            >
              Ver os carros
            </a>
          </div>

          <span className="mt-4 font-ejm-sans text-[13px] text-ejm-muted-on-navy">
            {EJM.whatsappDisplay} · {EJM.city}
          </span>
        </div>

        <div className="relative w-full max-[991px]:order-first">
          <Image
            src="/sites/ejm-locacoes/cars/kwid.png"
            alt="Renault Kwid disponível para locação na EJM Locações"
            width={900}
            height={567}
            priority
            className="h-auto w-full max-w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}

function PriceTag({
  oldValue,
  value,
  models,
  tone,
}: {
  /** Regular weekly price, shown struck through. */
  oldValue: string;
  /** Promotional first-week price. */
  value: string;
  models: string;
  tone: "solid" | "outline";
}) {
  const solid = tone === "solid";
  return (
    <div
      className={
        solid
          ? "flex flex-col gap-1 rounded-[12px] bg-ejm-blue px-4 py-3"
          : "flex flex-col gap-1 rounded-[12px] border border-white/30 px-4 py-3"
      }
    >
      {/* Regular price, struck out in red. aria-label spells it out so the
          strike-through is not the only thing carrying the meaning. */}
      <span
        className="font-ejm-display text-[18px] leading-none font-bold text-white/85 line-through decoration-[#ff3b3b] decoration-[3px]"
        aria-label={`De R$${oldValue} por semana`}
      >
        R${oldValue}
      </span>

      <div className="flex items-center gap-3">
        <span className="font-ejm-display text-[14px] font-bold text-white/80">
          R$
        </span>
        <span className="font-ejm-display text-[34px] leading-none font-extrabold text-white">
          {value}
        </span>
        <span className="font-ejm-sans text-[12px] leading-[14px] font-semibold text-white/85">
          na 1ª
          <br />
          semana
          <span className="mt-1 block font-normal text-white/70">{models}</span>
        </span>
      </div>
    </div>
  );
}
