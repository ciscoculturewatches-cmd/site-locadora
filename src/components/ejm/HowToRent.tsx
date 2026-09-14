import {
  StepPaymentIcon,
  StepPickupIcon,
  StepRegisterIcon,
} from "@/components/ejm/shared/icons";
import { whatsappLink, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/ejm";

const STEPS = [
  {
    Icon: StepRegisterIcon,
    title: "Chama no zap",
    description:
      "Diz qual carro você quer. A gente responde e já agenda a retirada.",
  },
  {
    Icon: StepPaymentIcon,
    title: "Manda os documentos",
    description: "CNH ativa e comprovante de residência. Só isso.",
  },
  {
    Icon: StepPickupIcon,
    title: "Pega o carro",
    description: "Aprovou, você retira no mesmo dia e já sai rodando.",
  },
];

export function HowToRent() {
  return (
    <section id="como-alugar" className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-[30px] px-4 py-[50px] min-[1212px]:px-0">
        <div className="block text-center">
          <p className="m-0 block text-center font-ejm-display font-extrabold tracking-[-1px] text-ejm-ink max-[991px]:text-[26px] max-[991px]:leading-[32px] min-[992px]:text-[40px] min-[992px]:leading-[40px]">
            Como alugar
          </p>
          <span className="text-center font-ejm-display font-medium tracking-[-1px] text-ejm-blue max-[991px]:text-[26px] max-[991px]:leading-[32px] min-[992px]:text-[40px] min-[992px]:leading-[40px]">
            (passo a passo)
          </span>
        </div>

        <div className="flex gap-[50px] max-[991px]:flex-col max-[991px]:gap-5 min-[992px]:flex-row">
          {STEPS.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="relative flex flex-1 flex-col gap-5 rounded-[12px] border border-ejm-border bg-white px-10 py-5"
            >
              <div className="flex items-center gap-4 text-center">
                <div className="block h-[26.5px] w-6 text-ejm-blue">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="block font-ejm-display text-[16px] leading-[22px] font-semibold text-ejm-ink">
                  {title}
                </div>
              </div>
              <p className="m-0 block font-ejm-sans text-[16px] leading-[22px] font-normal text-ejm-body">
                {description}
              </p>
            </div>
          ))}
        </div>

        <a
          href={whatsappLink(WHATSAPP_DEFAULT_MESSAGE)}
          target="_blank"
          rel="noopener"
          className="mx-auto flex h-[62px] w-max max-w-full flex-col items-center justify-center rounded-[10px] bg-ejm-blue px-[42px] font-ejm-display text-[22px] font-extrabold tracking-[0.7px] text-white shadow-[var(--shadow-ejm-panel)] transition-colors duration-500 hover:bg-ejm-navy"
        >
          Chamar no WhatsApp
        </a>
      </div>
    </section>
  );
}
