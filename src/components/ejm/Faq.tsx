import { FaqChevronIcon } from "@/components/ejm/shared/icons";
import { EJM } from "@/lib/ejm";
import type { EjmFaqItem } from "@/types/ejm";

// Every answer below comes from EJM's own published material (export/).
// Nothing here states a condition EJM has not itself advertised.
const FAQ_ITEMS: EjmFaqItem[] = [
  {
    id: "faq-item-1",
    question: "Como funciona o aluguel para motorista de aplicativo na EJM?",
    answer:
      "O aluguel é semanal. Você escolhe o carro, fala com a gente pelo WhatsApp, manda CNH e comprovante de residência e, aprovado, retira o carro no mesmo dia. Enquanto quiser continuar, é só renovar a semana.",
  },
  {
    id: "faq-item-2",
    question: "Quanto custa por semana?",
    answer:
      "São duas faixas: R$650 por semana no Renault Kwid, Volkswagen Gol, Chevrolet Onix, Fiat Mobi e Fiat Uno, e R$790 por semana no Fiat Argo e no Fiat Cronos.",
  },
  {
    id: "faq-item-3",
    question: "O que já está incluso no preço?",
    answer:
      "Seguro do carro, manutenção, IPVA e documento e troca de óleo. Você põe gasolina e roda — o resto é com a gente.",
  },
  {
    id: "faq-item-4",
    question: "Quais documentos preciso levar para retirar o carro?",
    answer:
      "Só dois: CNH com habilitação ativa e comprovante de residência.",
  },
  {
    id: "faq-item-5",
    question: "Posso rodar na Uber e na 99 ao mesmo tempo?",
    answer:
      "Pode. O carro é seu para trabalhar, e você pode ficar on-line nos dois aplicativos ao mesmo tempo.",
  },
  {
    id: "faq-item-6",
    question: "E se o carro quebrar?",
    answer:
      "Você tem assistência 24 horas. É só ligar que a gente resolve.",
  },
  {
    id: "faq-item-7",
    question: "Quanto tempo demora para pegar o carro?",
    answer:
      "É rápido. Assim que a documentação é aprovada, você já sai rodando — normalmente no mesmo dia.",
  },
  {
    id: "faq-item-8",
    question: "Quais carros vocês têm disponíveis?",
    answer:
      "Renault Kwid, Volkswagen Gol, Chevrolet Onix, Fiat Mobi, Fiat Uno, Fiat Argo e Fiat Cronos. A disponibilidade muda conforme a procura, então confirme pelo WhatsApp qual está livre na data que você quer.",
  },
  {
    id: "faq-item-9",
    question: "Como faço para alugar?",
    answer: `Chama no WhatsApp ${EJM.whatsappDisplay} e diz qual carro você quer. A gente responde e já agenda a retirada.`,
  },
];

export function Faq() {
  return (
    <section
      id="duvidas"
      className="mx-auto my-[60px] flex w-full max-w-[1180px] flex-col font-ejm-sans text-base text-ejm-ink"
    >
      <h2 className="m-0 flex w-full justify-center text-center font-ejm-display font-bold text-ejm-blue max-[991px]:text-[26px] max-[991px]:leading-[42.9px] min-[992px]:text-[34px] min-[992px]:leading-[56.1px]">
        Dúvidas frequentes
      </h2>
      <div className="m-0 block w-full p-0 max-[991px]:px-4">
        {FAQ_ITEMS.map((item) => (
          <details
            key={item.id}
            id={item.id}
            open={item.defaultOpen}
            className="group relative m-0 block w-full py-[25px] after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-ejm-border-soft after:content-['']"
          >
            <summary className="m-0 flex list-none items-center gap-3 p-0 font-ejm-display font-semibold text-ejm-navy [&::-webkit-details-marker]:hidden max-[991px]:pl-[15px] max-[991px]:text-[16px] max-[991px]:leading-[22.848px] min-[992px]:text-[22px] min-[992px]:leading-[31.416px]">
              <FaqChevronIcon className="ejm-faq-chevron h-[19px] w-[7px] shrink-0 text-ejm-blue" />
              <div>{item.question}</div>
            </summary>
            <div className="m-0 block py-0 pt-3 pr-0 pl-5 font-ejm-sans text-[15.2px] leading-[21px] font-normal text-ejm-body">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
