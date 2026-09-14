"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { ChevronRightIcon } from "@/components/ejm/shared/icons";
import type { EjmHighlight } from "@/types/ejm";

import { TestimonialCard } from "./TestimonialCard";

/** Flex gap between cards, both breakpoints. */
const GAP_PX = 30;

/**
 * Brand promises, all taken from EJM's own published material.
 *
 * NOTE: these are deliberately NOT customer testimonials. Real quotes can replace
 * this list one-for-one — give each entry a person's name in `title` and their
 * words in `text` — but nothing here is attributed to a customer until EJM
 * supplies real ones.
 */
export const EJM_HIGHLIGHTS: EjmHighlight[] = [
  {
    id: "assistencia",
    title: "Assistência 24 horas",
    text: "Deu problema na rua? Você liga e a gente resolve. Você não fica na mão no meio da corrida.",
  },
  {
    id: "incluso",
    title: "Já vem no preço",
    text: "Seguro do carro, manutenção, IPVA e documento e troca de óleo. Você põe gasolina e roda.",
  },
  {
    id: "apps",
    title: "Dois apps ao mesmo tempo",
    text: "O carro é seu pra trabalhar. Pode rodar na Uber e na 99 juntas, sem restrição da nossa parte.",
  },
  {
    id: "documentos",
    title: "Leve só isso",
    text: "CNH ativa e comprovante de residência. Sem papelada longa pra começar a rodar.",
  },
  {
    id: "rapido",
    title: "É rápido",
    text: "Aprovou, você já sai rodando. Nada de esperar semanas por uma liberação.",
  },
  {
    id: "semanal",
    title: "Aluguel por semana",
    text: "R$650 no Kwid e no Gol, R$790 no Argo e no Cronos. Você renova a semana enquanto quiser o carro.",
  },
];

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(390);
  const [maxIndex, setMaxIndex] = useState(3);

  const measure = useCallback(() => {
    const track = trackRef.current;
    const first = track?.firstElementChild as HTMLElement | null;
    if (!track || !first) return;
    const nextStep = first.getBoundingClientRect().width + GAP_PX;
    const inner = track.clientWidth - 40;
    const visible = Math.max(1, Math.round(inner / nextStep));
    setStep(nextStep);
    setMaxIndex(Math.max(0, EJM_HIGHLIGHTS.length - visible));
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    return () => observer.disconnect();
  }, [measure]);

  const activeIndex = Math.min(index, maxIndex);

  return (
    <section className="block w-full bg-ejm-surface-light">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center justify-center gap-[50px] px-4 py-[50px] text-center min-[1212px]:px-0">
        <h2 className="m-0 w-full text-center font-ejm-display font-semibold text-ejm-ink max-[991px]:text-[26px] max-[991px]:leading-[32px] min-[992px]:text-[36px] min-[992px]:leading-[46px]">
          Sem pegadinha: o que você leva com a EJM
        </h2>

        <div className="relative w-full overflow-hidden text-center">
          <button
            type="button"
            onClick={() => setIndex(Math.max(0, activeIndex - 1))}
            aria-label="Anterior"
            className="absolute left-0 top-1/2 z-10 h-[34.9062px] w-[22px] -translate-y-1/2 cursor-pointer transition-opacity"
            style={{ opacity: activeIndex === 0 ? 0.5 : 1 }}
          >
            <ChevronRightIcon className="h-full w-full rotate-180 text-ejm-navy" />
          </button>

          <div className="mx-[15px] overflow-hidden">
            <div
              ref={trackRef}
              className="flex w-full flex-row gap-[30px] px-5 py-[10px] transition-transform duration-200"
              style={{ transform: `translateX(-${activeIndex * step}px)` }}
            >
              {EJM_HIGHLIGHTS.map((highlight) => (
                <TestimonialCard key={highlight.id} highlight={highlight} />
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIndex(Math.min(maxIndex, activeIndex + 1))}
            aria-label="Próximo"
            className="absolute right-0 top-1/2 z-10 h-[34.9062px] w-[22px] -translate-y-1/2 cursor-pointer transition-opacity"
            style={{ opacity: activeIndex === maxIndex ? 0.5 : 1 }}
          >
            <ChevronRightIcon className="h-full w-full text-ejm-navy" />
          </button>
        </div>
      </div>
    </section>
  );
}
