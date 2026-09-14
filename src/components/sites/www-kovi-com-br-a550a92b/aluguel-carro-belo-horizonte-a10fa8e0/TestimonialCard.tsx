"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import type { KoviTestimonial } from "@/types/www-kovi-com-br-a550a92b";

const IMAGE_BASE =
  "/sites/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/images";

export function TestimonialCard({
  testimonial,
}: {
  testimonial: KoviTestimonial;
}) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  return (
    <div className="shrink-0 bg-kovi-surface-alt text-[#212529] rounded-[8px] shadow-[2px_2px_8px_0_rgba(0,0,0,0.25)] relative transition-[transform] duration-200 max-[991px]:w-full max-[991px]:flex-col max-[991px]:px-10 max-[991px]:py-5 max-[991px]:gap-5 min-[992px]:w-[540px] min-[992px]:h-[317.5px] min-[992px]:px-5 min-[992px]:py-[30px] min-[992px]:gap-5 flex flex-row">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={testimonial.thumbAlt}
        className="relative block shrink-0 rounded-[8px] cursor-pointer max-[991px]:w-full max-[991px]:h-[200px] min-[992px]:w-[225px] min-[992px]:h-[200px]"
      >
        <Image
          src={testimonial.thumb}
          alt={testimonial.thumbAlt}
          width={480}
          height={360}
          className="absolute inset-0 w-full h-full object-cover rounded-[8px]"
        />
      </button>

      <div className="flex flex-col justify-start items-start gap-[10px] min-[992px]:w-[255px] min-[992px]:h-[257.5px]">
        <Image
          src={`${IMAGE_BASE}/stars.png`}
          alt="Star"
          width={332}
          height={60}
          className="w-[160px] max-w-[160px] h-[28.9062px]"
        />
        <strong className="font-kovi-sans font-bold text-[#212529]">
          {testimonial.name}
        </strong>
        <p className="font-kovi-sans text-[16px] text-[#212529] text-left m-0">
          {testimonial.quote}
        </p>
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-[1000] bg-[rgba(0,0,0,0.7)] flex items-center justify-center p-4"
          onClick={close}
          role="presentation"
        >
          <div
            className="relative w-full max-w-[880px]"
            onClick={(event) => event.stopPropagation()}
            role="presentation"
          >
            <button
              type="button"
              onClick={close}
              aria-label="fechar modal"
              className="absolute -top-12 right-0 cursor-pointer"
            >
              <Image
                src={`${IMAGE_BASE}/close-black.png`}
                alt="fechar modal"
                width={64}
                height={64}
                className="w-8 h-8 invert"
              />
            </button>
            <div className="relative w-full aspect-video bg-black rounded-[8px] overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${testimonial.videoId}?autoplay=1`}
                title={testimonial.thumbAlt}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
