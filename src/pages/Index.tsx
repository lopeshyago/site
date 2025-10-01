import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import WhoIsThisFor from "@/components/landing/WhoIsThisFor";
import HowItWorks from "@/components/landing/HowItWorks";
import Portfolio from "@/components/landing/Portfolio";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <WhoIsThisFor />
        <HowItWorks />
        <Portfolio />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="5521991779372" />
    </div>
  );
};

export default Index;
