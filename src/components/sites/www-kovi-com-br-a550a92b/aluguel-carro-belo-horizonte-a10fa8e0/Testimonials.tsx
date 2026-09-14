"use client";

import Image from "next/image";
import { useState } from "react";

import type { KoviTestimonial } from "@/types/www-kovi-com-br-a550a92b";

import { TestimonialCard } from "./TestimonialCard";

const IMAGE_BASE =
  "/sites/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/images";

/** Card width 540 + flex gap 30 — the measured translate step on the original. */
const STEP_PX = 570;
/** The original clamps at translateX(-2280px) = index 4. */
const MAX_INDEX = 4;

export const KOVI_BH_TESTIMONIALS: KoviTestimonial[] = [
  {
    name: "Guilherme",
    quote:
      "A Kovi pra mim foi a porta de entrada, nunca imaginei que eu teria um carro zero. Sou muito grato pelo o que a Kovi tem feito pela minha família.",
    videoId: "eO5z1JZca_A",
    thumb: `${IMAGE_BASE}/testimonial-guilherme.jpg`,
    thumbAlt: "Assistir ao depoimento de Guilherme",
  },
  {
    name: "Marina",
    quote:
      "Para mim, a diferença da Kovi com as outras locadoras é a questão da facilidade que ela proporciona, por não precisar de cartão de crédito. Além de que eles sempre tem carros 0km.",
    videoId: "WNIdnOtPoTI",
    thumb: `${IMAGE_BASE}/testimonial-marina.jpg`,
    thumbAlt: "Assistir ao depoimento de Marina",
  },
  {
    name: "Jonatan",
    quote:
      "Eu escolhi alugar na Kovi porque é sem burocracia e ajuda muitas pessoas a realizarem o sonho do carro próprio.",
    videoId: "371qcyNT0qI",
    thumb: `${IMAGE_BASE}/testimonial-jonatan.jpg`,
    thumbAlt: "Assistir ao depoimento de Jonatan",
  },
  {
    name: "Getúlio",
    quote:
      "Consegui alugar meu carro de forma fácil e ágil pela internet. É o motivo de eu continuar trabalhando de forma independente, autônoma e feliz.",
    videoId: "Eexevf6-JFc",
    thumb: `${IMAGE_BASE}/testimonial-getulio.jpg`,
    thumbAlt: "Assistir ao depoimento de Getúlio",
  },
  {
    name: "Fabrício",
    quote:
      "É um carro que não me dá problema. Se acontece alguma coisa, já agendo a oficina e rapidamente já é resolvido. Se fizer o cálculo, vale a pena alugar o carro, você não paga mais nada.",
    videoId: "Wlh6R64S558",
    thumb: `${IMAGE_BASE}/testimonial-fabricio.jpg`,
    thumbAlt: "Assistir ao depoimento de Fabrício",
  },
  {
    name: "Moura",
    quote:
      "Hoje eu não me vejo mais sem o carro da Kovi. Tenho o carro para usar com a minha família e também para complementar minha renda.",
    videoId: "JMvyhsIGxPc",
    thumb: `${IMAGE_BASE}/testimonial-moura.jpg`,
    thumbAlt: "Assistir ao depoimento de Moura",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  return (
    <section className="w-full block">
      <div className="w-full max-w-[1180px] mx-auto py-[50px] px-4 min-[1212px]:px-0 flex flex-col justify-center items-center gap-[50px] text-center">
        <h2 className="w-full m-0 font-kovi-display font-semibold text-kovi-ink text-center max-[991px]:text-[26px] max-[991px]:leading-[32px] min-[992px]:text-[36px] min-[992px]:leading-[46px]">
          O que nossos motoristas estão falando do aluguel de carros na Kovi
        </h2>

        <div className="w-full relative overflow-hidden text-center min-[992px]:h-[337.5px]">
          <button
            type="button"
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            aria-label="Anterior"
            className="max-[991px]:hidden absolute left-0 top-1/2 -translate-y-1/2 z-10 w-[22px] h-[34.9062px] cursor-pointer transition-opacity"
            style={{ opacity: index === 0 ? 0.5 : 1 }}
          >
            <Image
              src={`${IMAGE_BASE}/arrow-left.png`}
              alt="Anterior"
              width={46}
              height={73}
              className="w-full h-full object-contain"
            />
          </button>

          <div className="overflow-hidden mx-[15px] max-[991px]:mx-0">
            <div
              className="flex gap-[30px] px-5 py-[10px] transition-transform duration-200 max-[991px]:flex-col max-[991px]:px-0 max-[991px]:py-5 max-[991px]:transform-none"
              style={{ transform: `translateX(-${index * STEP_PX}px)` }}
            >
              {KOVI_BH_TESTIMONIALS.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.videoId}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIndex((i) => Math.min(MAX_INDEX, i + 1))}
            aria-label="Próximo"
            className="max-[991px]:hidden absolute right-0 top-1/2 -translate-y-1/2 z-10 w-[22px] h-[34.9062px] cursor-pointer transition-opacity"
            style={{ opacity: index === MAX_INDEX ? 0.5 : 1 }}
          >
            <Image
              src={`${IMAGE_BASE}/arrow-right.png`}
              alt="Próximo"
              width={46}
              height={73}
              className="w-full h-full object-contain"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
