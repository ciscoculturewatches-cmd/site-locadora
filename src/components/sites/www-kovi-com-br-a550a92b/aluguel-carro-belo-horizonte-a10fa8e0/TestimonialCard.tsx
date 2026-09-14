"use client";

import Image from "next/image";
import { useState } from "react";

import type { KoviTestimonial } from "@/types/www-kovi-com-br-a550a92b";

const IMAGE_BASE =
  "/sites/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/images";

export function TestimonialCard({
  testimonial,
}: {
  testimonial: KoviTestimonial;
}) {
  // The original swaps the thumbnail for an inline iframe (body gains .play-video);
  // it does not open a modal.
  const [playing, setPlaying] = useState(false);

  return (
    <div className="shrink-0 bg-kovi-surface-alt text-[#212529] rounded-[8px] shadow-[2px_2px_8px_0_rgba(0,0,0,0.25)] relative transition-all duration-200 gap-5 flex max-[991px]:w-full max-[991px]:flex-col max-[991px]:px-[15px] max-[991px]:py-[30px] min-[992px]:w-[540px] min-[992px]:h-[317.5px] min-[992px]:flex-row min-[992px]:px-5 min-[992px]:py-[30px]">
      <div className="relative shrink-0 rounded-[8px] min-w-[225px] max-[991px]:w-full max-[991px]:h-[250px] min-[992px]:w-[225px] min-[992px]:h-[200px]">
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${testimonial.videoId}?autoplay=1`}
            title={testimonial.thumbAlt}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 z-[12] w-full h-full rounded-[8px] border-0"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={testimonial.thumbAlt}
            className="absolute inset-0 w-full h-full cursor-pointer"
          >
            <Image
              src={testimonial.thumb}
              alt={testimonial.thumbAlt}
              width={480}
              height={360}
              className="absolute inset-0 w-full h-full object-cover rounded-[8px]"
            />
            {/* .video::before on the original: play.png, 60px wide, centred, z-index 11 */}
            <span
              aria-hidden="true"
              className="absolute inset-0 z-[11] bg-[length:60px_auto] bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${IMAGE_BASE}/play.png)` }}
            />
          </button>
        )}
      </div>

      <div className="flex flex-col justify-start items-start gap-[10px] min-[992px]:w-[255px] min-[992px]:h-[257.5px]">
        <Image
          src={`${IMAGE_BASE}/stars.png`}
          alt="Star"
          width={332}
          height={60}
          className="w-[160px] max-w-[160px] h-[28.9062px]"
        />
        <strong className="m-0 font-kovi-display font-semibold text-kovi-ink max-[991px]:text-[16px] max-[991px]:leading-6 min-[992px]:text-[24px] min-[992px]:leading-[33.6px]">
          {testimonial.name}
        </strong>
        <p className="m-0 text-left font-kovi-display font-normal text-kovi-ink max-[991px]:text-[14px] max-[991px]:leading-[18px] min-[992px]:text-[18px] min-[992px]:leading-[25px]">
          {testimonial.quote}
        </p>
      </div>
    </div>
  );
}
