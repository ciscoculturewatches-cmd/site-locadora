import Image from "next/image";

const IMAGE_BASE =
  "/sites/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/images";

export function HeroBanner() {
  return (
    <section className="block w-full overflow-hidden">
      <Image
        src={`${IMAGE_BASE}/hero-desktop.png`}
        alt="Banner Cidades-1"
        width={4320}
        height={1281}
        priority
        className="max-[991px]:hidden h-auto w-full object-fill"
      />
      <Image
        src={`${IMAGE_BASE}/hero-mobile.png`}
        alt="Banner Argo cidades-1"
        width={1080}
        height={569}
        className="min-[992px]:hidden h-auto w-full object-fill"
      />
    </section>
  );
}
