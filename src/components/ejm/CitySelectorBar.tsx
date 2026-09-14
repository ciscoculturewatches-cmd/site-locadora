import { GlobePinIcon } from "@/components/ejm/shared/icons";
import { EJM } from "@/lib/ejm";

export function CitySelectorBar() {
  return (
    <section className="h-12 w-full bg-white">
      <div className="mx-auto flex h-12 w-full max-w-[1180px] items-center justify-between gap-[30px] px-4 py-[10px] min-[1212px]:px-0">
        <div className="flex h-7 items-center gap-2">
          <GlobePinIcon className="h-7 w-7 shrink-0 text-ejm-navy" />
          <strong className="font-ejm-sans text-[16px] font-bold text-ejm-navy">
            {EJM.city}
          </strong>
        </div>
        <span className="font-ejm-sans text-[14px] font-medium text-ejm-muted max-[600px]:hidden">
          Aluguel semanal para motorista de aplicativo
        </span>
      </div>
    </section>
  );
}
