import { Header } from "@/components/ejm/shared/Header";
import { Footer } from "@/components/ejm/shared/Footer";
import { CitySelectorBar } from "@/components/ejm/CitySelectorBar";
import { HeroBanner } from "@/components/ejm/HeroBanner";
import { SeoIntro } from "@/components/ejm/SeoIntro";
import { CarCatalog } from "@/components/ejm/CarCatalog";
import { Benefits } from "@/components/ejm/Benefits";
import { HowToRent } from "@/components/ejm/HowToRent";
import { Testimonials } from "@/components/ejm/Testimonials";
import { Faq } from "@/components/ejm/Faq";
import { WhatsappFab } from "@/components/ejm/WhatsappFab";

export default function Home() {
  return (
    <div className="ejm-page" id="topo">
      <Header />
      {/* The header is fixed and 80px tall, so the flow starts 80px down. */}
      <main className="pt-20">
        <CitySelectorBar />
        <HeroBanner />
        <SeoIntro />
        <CarCatalog />
        <Benefits />
        <HowToRent />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
      <WhatsappFab />
    </div>
  );
}
