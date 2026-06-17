import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import Ticker from '@/components/sections/Ticker';
import About from '@/components/sections/About';
import HarvestPool from '@/components/sections/HarvestPool';
import Stats from '@/components/sections/Stats';
import Tokenomics from '@/components/sections/Tokenomics';
import Roadmap from '@/components/sections/Roadmap';
import FAQ from '@/components/sections/FAQ';
import Newsletter from '@/components/sections/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Ticker />
        <About />
        <HarvestPool />
        <Stats />
        <Tokenomics />
        <Roadmap />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
