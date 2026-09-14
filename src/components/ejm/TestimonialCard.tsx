import type { EjmHighlight } from "@/types/ejm";

/**
 * Text-only card. The reference layout had a video thumbnail here; the videos
 * were removed and these carry EJM's own promises instead.
 */
export function TestimonialCard({ highlight }: { highlight: EjmHighlight }) {
  return (
    <div className="relative flex shrink-0 flex-col gap-4 rounded-[8px] bg-ejm-surface-alt px-8 py-8 text-ejm-ink shadow-[var(--shadow-ejm-card)] transition-all duration-200 max-[991px]:w-full min-[992px]:h-[240px] min-[992px]:w-[360px]">
      <span
        aria-hidden="true"
        className="block h-1 w-12 rounded-full bg-ejm-blue"
      />
      <strong className="m-0 block text-left font-ejm-display font-bold text-ejm-navy max-[991px]:text-[20px] max-[991px]:leading-[26px] min-[992px]:text-[24px] min-[992px]:leading-[30px]">
        {highlight.title}
      </strong>
      <p className="m-0 text-left font-ejm-sans font-normal text-ejm-body max-[991px]:text-[15px] max-[991px]:leading-[21px] min-[992px]:text-[17px] min-[992px]:leading-[24px]">
        {highlight.text}
      </p>
    </div>
  );
}
