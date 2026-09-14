import { FaqChevronIcon } from "@/components/sites/www-kovi-com-br-a550a92b/shared/icons";
import type { KoviFaqItem } from "@/types/www-kovi-com-br-a550a92b";

const FAQ_ITEMS: KoviFaqItem[] = [
  {
    id: "faq-item-1",
    question:
      "Como funciona o aluguel de carro para motorista de aplicativo na Kovi?",
    answer:
      "Alugar um carro para Uber, 99 ou Indrive na Kovi é simples. Você escolhe o modelo, faz o pagamento da caução e da 1ª semana e já pode rodar. Não exigimos análise de crédito nem cartão, tornando o aluguel acessível mesmo para quem tem restrições.",
  },
  {
    id: "faq-item-2",
    question:
      "Quais são os benefícios do aluguel de carros para aplicativos na Kovi?",
    answer:
      "Na Kovi, o aluguel de carro para motorista de aplicativo inclui manutenção, carro reserva, proteção e suporte completo. Além disso, oferecemos preços justos, pagamento flexível por km rodado e agilidade na retirada do veículo.",
  },
  {
    id: "faq-item-3",
    question:
      "Quanto custa alugar um carro para motorista de aplicativo na Kovi?",
    answer:
      "Os preços do aluguel de carro para Uber variam conforme o modelo, a cidade e o plano escolhido. Na Kovi, você paga de acordo com a quilometragem rodada, o que ajuda a economizar quando roda menos. É só consultar nossos vendedores e encontrar o plano ideal.",
  },
  {
    id: "faq-item-4",
    question: "Precisa de cartão de crédito para alugar um carro na Kovi?",
    answer:
      "Não precisa! Aqui na Kovi, você pode alugar um carro para aplicativo sem cartão de crédito. O pagamento da caução pode ser feito no Pix ou cartão de terceiros. E nas faturas semanais, além dessas opções, você pode também pagar via boleto, sem burocracia.",
  },
  {
    id: "faq-item-5",
    question:
      "Quais aplicativos de transporte posso usar com um carro da Kovi?",
    answer:
      "Você pode rodar com seu carro alugado na Uber, 99, Indrive e outras plataformas de transporte de passageiros ou entregas. É só escolher o carro e começar a ganhar.",
  },
  {
    id: "faq-item-6",
    question: "Quais documentos são necessários para alugar um carro na Kovi?",
    answer:
      "Para alugar um carro para Uber ou 99 na Kovi, é preciso ter CNH definitiva, comprovante de residência e realizar o pagamento da caução e da 1ª semana de aluguel.",
  },
  {
    id: "faq-item-7",
    question: "A Kovi oferece aluguel de carros mensal para aplicativos?",
    answer:
      "Sim! Temos planos mensais e anuais para motoristas de aplicativo. Assim, você escolhe o que cabe no seu bolso e roda com tranquilidade.",
  },
  {
    id: "faq-item-8",
    question: "Quem tem nome sujo pode alugar um carro na Kovi?",
    answer:
      "Pode sim! Na Kovi, motoristas de aplicativo com nome negativado conseguem alugar carro sem análise de crédito. É só ter CNH definitiva.",
  },
  {
    id: "faq-item-9",
    question: "Como funciona o plano para comprar o carro na Kovi?",
    answer:
      "No Kovi Próprio, você começa alugando o carro normalmente. Depois do período estabelecido no contrato, você já pode comprar o carro que dirige. Na compra, você escolhe se quer pagar à vista ou financiar. Mas não se preocupe: mesmo com nome negativado, você pode conseguir o financiamento! Além disso, calculamos parcelas que cabem no seu bolso, a partir do que você já paga semanalmente. Por exemplo: se você paga R$800,00 por semana no seu aluguel, o seu total no mês é R$3.200,00. Então, esse será o valor máximo da sua parcela mensal no financiamento.",
  },
  {
    id: "faq-item-10",
    question: "Como faço para começar a alugar um carro com a Kovi?",
    answer:
      "É fácil: fale com a gente pelo WhatsApp, telefone ou visite uma loja Kovi. Depois, escolha o carro e o plano, pague a caução + primeira semana e pronto, é só retirar o carro e começar a rodar.",
  },
  {
    id: "faq-item-11",
    question: "Posso escolher o modelo do carro na hora do aluguel?",
    answer:
      "Sim! No plano Kovi Próprio, você escolhe o modelo que faz mais sentido para seu trabalho como motorista de aplicativo. Temos opções como Argo, Onix, Polo, entre outros.",
  },
  {
    id: "faq-item-12",
    question: "A Kovi tem carro aceito na categoria Comfort da Uber?",
    answer:
      "Temos sim! Oferecemos diversos modelos aceitos na categoria Comfort da Uber, como Argo, Polo e Cronos. Fale com um vendedor pelo WhatsApp e veja qual carro se encaixa melhor no seu perfil.",
  },
  {
    id: "faq-item-13",
    question: "A Kovi aluga carro para quem quer trabalhar com entrega?",
    answer:
      "Sim! Você pode usar o carro Kovi para trabalhar com aplicativos de transporte de passageiros ou para fazer entregas.",
  },
  {
    id: "faq-item-14",
    question: "A Kovi tem lojas físicas? Onde posso retirar o carro?",
    answer:
      "Sim, temos lojas físicas em várias cidades como São Paulo, Porto Alegre, Campinas, Florianópolis, Fortaleza, Recife e várias outras. Fale com a nossa equipe pelo WhatsApp e veja qual ponto de retirada está mais perto de você.",
  },
];

export function Faq() {
  return (
    <section className="mx-auto my-[60px] flex w-full max-w-[1180px] flex-col font-kovi-sans text-base text-kovi-ink">
      <h2 className="m-0 flex w-full justify-center text-center font-kovi-display text-[26px] leading-[42.9px] font-bold text-kovi-pink min-[992px]:text-[34px] min-[992px]:leading-[56.1px]">
        Dúvidas frequentes
      </h2>
      <div className="m-0 block w-full p-0 max-[991px]:px-4">
        {FAQ_ITEMS.map((item) => (
          // The 1px rule under each row is .wrapper-itens-faq::after on the original.
          <details
            key={item.id}
            id={item.id}
            open={item.defaultOpen}
            className="group relative m-0 block w-full py-[25px] after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-[rgb(230,230,230)] after:content-['']"
          >
            <summary className="m-0 flex list-none items-center gap-3 p-0 font-kovi-display text-[16px] leading-[22.848px] font-semibold text-kovi-ink-alt [&::-webkit-details-marker]:hidden min-[992px]:text-[22px] min-[992px]:leading-[31.416px] max-[991px]:pl-[15px]">
              <FaqChevronIcon className="kovi-faq-chevron h-[19px] w-[7px] shrink-0" />
              <div>{item.question}</div>
            </summary>
            <div className="m-0 block py-0 pt-3 pr-0 pl-5 font-kovi-sans text-[15.2px] leading-[19px] font-normal text-kovi-ink">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
