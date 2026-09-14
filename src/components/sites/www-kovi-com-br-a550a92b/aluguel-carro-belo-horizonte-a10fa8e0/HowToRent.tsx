import {
  StepPaymentIcon,
  StepPickupIcon,
  StepRegisterIcon,
} from "@/components/sites/www-kovi-com-br-a550a92b/shared/icons";

const STEPS = [
  {
    icon: StepRegisterIcon,
    name: "Cadastro",
    description:
      "Preencha o cadastro com suas informações. É super rápido e fácil!",
  },
  {
    icon: StepPaymentIcon,
    name: "Pagamento",
    description:
      "Realize o pagamento da 1ª semana + caução (que pode ser parcelada!)",
  },
  {
    icon: StepPickupIcon,
    name: "Retirada",
    description:
      "Agora é só retirar seu carro e aproveitar todos os benefícios de ter um Kovi",
  },
];

export function HowToRent() {
  return (
    <section className="w-full bg-white min-[992px]:h-[456.516px]">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-[30px] px-4 py-[50px] min-[1212px]:px-0">
        <div className="flex h-auto flex-col text-center min-[992px]:h-[80px]">
          <h1 className="m-0 font-kovi-display text-[26px] leading-[32px] font-extrabold tracking-[-1px] text-kovi-ink text-center min-[992px]:text-[40px] min-[992px]:leading-[40px]">
            Como alugar
          </h1>
          <span className="font-kovi-display text-[26px] leading-[32px] font-medium tracking-[-1px] text-kovi-ink text-center min-[992px]:text-[40px] min-[992px]:leading-[40px]">
            (passo a passo)
          </span>
        </div>
        <div className="flex flex-col gap-5 max-[991px]:w-full min-[992px]:h-[154.516px] min-[992px]:w-[1180px] min-[992px]:flex-row min-[992px]:gap-[50px]">
          {STEPS.map(({ icon: Icon, name, description }) => (
            <div
              key={name}
              className="relative flex flex-col gap-5 rounded-xl border border-[rgb(239,227,229)] bg-white p-5 text-[rgb(33,37,41)] max-[991px]:w-full min-[992px]:w-[345.078px] min-[992px]:px-10 min-[992px]:py-5"
            >
              <div className="flex h-[26.5156px] w-full flex-row items-center gap-4 min-[992px]:w-[263.078px]">
                <Icon className="h-[26.5156px] w-6 shrink-0 text-kovi-pink" />
                <span className="block font-kovi-display text-sm leading-[22px] font-semibold text-kovi-ink">
                  {name}
                </span>
              </div>
              <p className="m-0 block w-full font-kovi-display text-base leading-[22px] font-normal text-kovi-ink min-[992px]:w-[263.078px]">
                {description}
              </p>
            </div>
          ))}
        </div>
        <a
          href="#escolha-seu-carro"
          className="mx-auto flex h-[62px] w-[354.812px] max-w-max flex-col items-center justify-center rounded-[8.29428px] bg-kovi-pink px-[42px] py-4 text-[24.8829px] font-extrabold tracking-[0.728185px] text-[rgb(248,248,248)] shadow-[0_4.74903px_1.58301px_-3.16602px_rgba(0,0,0,0.2),0_3.16602px_3.16602px_0_rgba(0,0,0,0.14),0_1.58301px_7.91506px_0_rgba(0,0,0,0.12)] transition-[0.5s] duration-500 hover:border hover:border-kovi-ink hover:bg-kovi-ink hover:text-[rgb(248,248,248)]"
        >
          Quero alugar meu Kovi
        </a>
      </div>
    </section>
  );
}
