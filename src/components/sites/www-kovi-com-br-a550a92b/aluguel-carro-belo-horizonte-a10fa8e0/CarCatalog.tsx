"use client";

import { useState } from "react";

import { InfoIcon } from "@/components/sites/www-kovi-com-br-a550a92b/shared/icons";
import { cn } from "@/lib/utils";
import { CarCard, KOVI_BH_CARS } from "./CarCard";

type FilterId = "todos" | "zero-km" | "seminovos";

const FILTERS: { id: FilterId; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "zero-km", label: "Zero Km" },
  { id: "seminovos", label: "+ de 10 mil Km" },
];

const ZERO_KM_CARS = KOVI_BH_CARS.filter((car) => car.badge === "Zero Km");
const SEMINOVOS_CARS = KOVI_BH_CARS.filter(
  (car) => car.badge === "+ de 10 mil Km",
);

const TOOLTIP_TEXT = "São considerados Zero Km veículos com menos de 10 mil Km";

export function CarCatalog() {
  const [filter, setFilter] = useState<FilterId>("todos");

  const showZeroKm = filter === "todos" || filter === "zero-km";
  const showSeminovos = filter === "todos" || filter === "seminovos";

  return (
    <section id="escolha-seu-carro">
      <div className="mx-auto w-full max-w-[1180px] px-2">
        <div className="m-0 mb-6 pt-10">
          <h2 className="m-0 block text-center font-kovi-display text-[32px] leading-[52.8px] font-bold text-kovi-ink min-[992px]:text-[34px] min-[992px]:leading-[56.1px]">
            Escolha seu carro
          </h2>
        </div>
      </div>
      <div className="mx-auto w-full max-w-[1180px] px-2">
        <ul className="m-0 mb-9 flex list-none p-0 max-[991px]:flex-nowrap max-[991px]:overflow-x-auto min-[992px]:flex-nowrap">
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
                    "rounded-[24px] border font-kovi-display font-semibold transition-colors duration-300 ease-in-out",
                    "max-[991px]:px-3 max-[991px]:py-2 max-[991px]:text-[16px] max-[991px]:leading-[19.2px]",
                    "min-[992px]:px-6 min-[992px]:py-2 min-[992px]:text-[20px] min-[992px]:leading-6",
                    active
                      ? "border-kovi-pink bg-kovi-pink text-white"
                      : "border-[rgb(127,127,127)] bg-white text-[rgb(127,127,127)]",
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
        <div>
          <div className="m-0 flex flex-wrap p-0">
            {showZeroKm && (
              <div className="m-0 flex w-full flex-wrap p-0">
                <div className="mb-6 flex h-[39px] w-full font-kovi-sans text-base">
                  <div className="m-0 inline-flex h-[39px] items-center gap-[6px] text-[30px] font-bold leading-none text-kovi-ink">
                    <span>Zero Km</span>
                    <TooltipButton text={TOOLTIP_TEXT} />
                  </div>
                </div>
                <nav className="mb-10 w-full">
                  <ul className="m-0 flex list-none flex-wrap p-0">
                    {ZERO_KM_CARS.map((car) => (
                      <CarCard key={`${car.model}-${car.badge}`} car={car} />
                    ))}
                  </ul>
                </nav>
              </div>
            )}
            {showSeminovos && (
              <div className="m-0 flex w-full flex-wrap p-0">
                <div className="mb-6 flex h-[39px] w-full font-kovi-sans text-base">
                  <div className="m-0 inline-flex h-[39px] items-center gap-[6px] text-[30px] font-bold leading-none text-kovi-ink">
                    <span>Seminovos acima de 10 mil Km</span>
                  </div>
                </div>
                <nav className="mb-10 w-full">
                  <ul className="m-0 flex list-none flex-wrap p-0">
                    {SEMINOVOS_CARS.map((car) => (
                      <CarCard key={`${car.model}-${car.badge}`} car={car} />
                    ))}
                  </ul>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
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
        className="flex h-4 w-4 items-center justify-center rounded-full border-0 bg-transparent p-0 transition-[0.15s] duration-150 ease-linear"
      >
        <InfoIcon className="h-4 w-4" />
      </button>
      {open && (
        <span
          role="tooltip"
          className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-max max-w-[220px] -translate-x-1/2 rounded-[8px] border border-[rgb(211,211,211)] bg-white px-3 py-2 font-kovi-sans text-[14px] leading-tight text-kovi-ink shadow-md"
        >
          {text}
        </span>
      )}
    </span>
  );
}
