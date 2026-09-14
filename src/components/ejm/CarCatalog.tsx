"use client";

import { useState } from "react";

import { InfoIcon } from "@/components/ejm/shared/icons";
import { cn } from "@/lib/utils";
import type { EjmTierId } from "@/types/ejm";

import { CarCard, EJM_CARS } from "./CarCard";

type FilterId = "todos" | EjmTierId;

const FILTERS: { id: FilterId; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "tier-650", label: "R$650 / semana" },
  { id: "tier-790", label: "R$790 / semana" },
];

const TIER_650 = EJM_CARS.filter((car) => car.tier === "tier-650");
const TIER_790 = EJM_CARS.filter((car) => car.tier === "tier-790");

const TOOLTIP_TEXT =
  "Seguro, manutenção, IPVA e troca de óleo já estão inclusos no valor da semana.";

export function CarCatalog() {
  const [filter, setFilter] = useState<FilterId>("todos");

  const show650 = filter === "todos" || filter === "tier-650";
  const show790 = filter === "todos" || filter === "tier-790";

  return (
    <section id="escolha-seu-carro">
      <div className="mx-auto w-full max-w-[1180px] px-2">
        <div className="m-0 mb-6 pt-10">
          <h2 className="m-0 block text-center font-ejm-display font-bold text-ejm-ink max-[991px]:text-[32px] max-[991px]:leading-[40px] min-[992px]:text-[34px] min-[992px]:leading-[56.1px]">
            Escolha sua faixa
          </h2>
          <p className="m-0 mt-1 block text-center font-ejm-sans text-[16px] text-ejm-muted">
            Aluguel semanal para motorista de app em {"Belo Horizonte"}
          </p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1180px] px-2">
        <ul className="m-0 mb-9 flex list-none flex-nowrap justify-center p-0 max-[991px]:overflow-x-auto max-[991px]:justify-start">
          {FILTERS.map((f) => {
            const active = filter === f.id;
            return (
              <li
                key={f.id}
                className="m-0 mr-4 list-item shrink-0 p-0 last:mr-0"
              >
                <button
                  type="button"
                  data-active={active}
                  aria-pressed={active}
                  onClick={() => setFilter(f.id)}
                  className={cn(
                    "rounded-[24px] border font-ejm-display font-semibold transition-colors duration-300 ease-in-out",
                    "max-[991px]:px-3 max-[991px]:py-2 max-[991px]:text-[16px] max-[991px]:leading-[19.2px]",
                    "min-[992px]:px-6 min-[992px]:py-2 min-[992px]:text-[20px] min-[992px]:leading-6",
                    active
                      ? "border-ejm-blue bg-ejm-blue text-white"
                      : "border-ejm-border-strong bg-white text-ejm-muted",
                  )}
                >
                  {f.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mx-auto w-full max-w-[1180px] px-2">
        <div className="m-0 flex flex-wrap p-0">
          {show650 && (
            <TierGroup
              title="A partir de R$650 por semana"
              tooltip={TOOLTIP_TEXT}
              cars={TIER_650}
            />
          )}
          {show790 && (
            <TierGroup
              title="A partir de R$790 por semana"
              cars={TIER_790}
            />
          )}
        </div>
      </div>
    </section>
  );
}

function TierGroup({
  title,
  tooltip,
  cars,
}: {
  title: string;
  tooltip?: string;
  cars: typeof EJM_CARS;
}) {
  return (
    <div className="m-0 flex w-full flex-wrap p-0">
      <div className="mb-6 flex w-full justify-center font-ejm-sans text-base max-[991px]:h-auto min-[992px]:h-[39px]">
        <div className="m-0 inline-flex items-center gap-[6px] text-center font-ejm-display font-bold leading-none text-ejm-ink max-[991px]:h-auto max-[991px]:text-[22px] min-[992px]:h-[39px] min-[992px]:text-[30px]">
          <span>{title}</span>
          {tooltip ? <TooltipButton text={tooltip} /> : null}
        </div>
      </div>
      <nav className="mb-10 w-full">
        <ul className="m-0 flex list-none flex-wrap justify-center gap-7 p-0">
          {cars.map((car) => (
            <CarCard key={car.model} car={car} />
          ))}
        </ul>
      </nav>
    </div>
  );
}

function TooltipButton({ text }: { text: string }) {
  const [open, setOpen] = useState(false);

  return (
    <span className="relative mt-[5px] ml-[5px] inline-flex">
      <button
        type="button"
        aria-label="Informação"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        title={text}
        className="flex h-4 w-4 items-center justify-center rounded-full border-0 bg-transparent p-0 text-ejm-blue transition-[0.15s] duration-150 ease-linear"
      >
        <InfoIcon className="h-4 w-4" />
      </button>
      {open && (
        <span
          role="tooltip"
          className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-max max-w-[260px] -translate-x-1/2 rounded-[8px] border border-ejm-border bg-white px-3 py-2 font-ejm-sans text-[14px] leading-tight font-normal text-ejm-ink shadow-md"
        >
          {text}
        </span>
      )}
    </span>
  );
}
