import { Header } from "@/components/sites/www-kovi-com-br-a550a92b/shared/Header";
import { Footer } from "@/components/sites/www-kovi-com-br-a550a92b/shared/Footer";
import { CitySelectorBar } from "@/components/sites/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/CitySelectorBar";
import { HeroBanner } from "@/components/sites/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/HeroBanner";
import { SeoIntro } from "@/components/sites/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/SeoIntro";
import { CarCatalog } from "@/components/sites/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/CarCatalog";
import { UberBenefits } from "@/components/sites/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/UberBenefits";
import { HowToRent } from "@/components/sites/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/HowToRent";
import { Testimonials } from "@/components/sites/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/Testimonials";
import { Faq } from "@/components/sites/www-kovi-com-br-a550a92b/aluguel-carro-belo-horizonte-a10fa8e0/Faq";

export default function Home() {
  return (
    <div className="kovi-page">
      <Header />
      {/* The header is position: fixed at 80px tall, so the flow starts 80px down —
          matches the original, where the city bar's document offset is exactly 80. */}
      <main className="pt-20">
        <CitySelectorBar />
        <HeroBanner />
        <SeoIntro />
        <CarCatalog />
        <UberBenefits />
        <HowToRent />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
