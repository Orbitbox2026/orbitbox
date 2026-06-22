import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import LogoTicker from "@/components/sections/LogoTicker";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import FailureBundle from "@/components/sections/FailureBundle";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogoTicker />
        <Features />
        <HowItWorks />
        <FailureBundle />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
