import Certifications from "@/components/Certifications";
import Clients from "@/components/Clients";
import Company from "@/components/Company";
import ContactQuote from "@/components/ContactQuote";
import Coverage from "@/components/Coverage";
import Fleet from "@/components/Fleet";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import Process from "@/components/Process";
import Proposal from "@/components/Proposal";
import QuoteBanner from "@/components/QuoteBanner";
import RevealProvider from "@/components/RevealProvider";
import Services from "@/components/Services";
import Values from "@/components/Values";

export default function Home() {
  return (
    <>
      <Preloader />
      <RevealProvider />
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <Proposal />
        <Services />
        <GallerySection />
        <Fleet />
        <QuoteBanner />
        <Company />
        <Values />
        <Clients />
        <Certifications />
        <Coverage />
        <Process />
        <ContactQuote />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
