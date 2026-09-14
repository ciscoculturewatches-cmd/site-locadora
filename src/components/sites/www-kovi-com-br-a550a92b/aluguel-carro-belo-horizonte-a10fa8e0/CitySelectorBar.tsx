import { GlobePinIcon, ChevronRightIcon } from "@/components/sites/www-kovi-com-br-a550a92b/shared/icons";

export function CitySelectorBar() {
  return (
    <section className="h-12 w-full bg-white">
      <button
        type="button"
        aria-label="Selecionar cidade"
        className="mx-auto flex h-12 w-full max-w-[1180px] cursor-pointer items-center justify-between gap-[30px] px-4 py-[10px] min-[1212px]:px-0"
      >
        <div className="flex h-7 items-center gap-2">
          <GlobePinIcon className="h-7 w-7 text-[rgb(38,42,48)]" />
          <strong
            className="font-kovi-sans text-base font-bold text-[rgb(255,53,90)] underline"
          >
            Belo Horizonte - MG
          </strong>
        </div>
        <div className="h-7 w-7">
          <ChevronRightIcon className="h-7 w-7 text-[rgb(38,42,48)]" />
        </div>
      </button>
    </section>
  );
}
