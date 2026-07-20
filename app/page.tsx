import { Preloader } from '@/components/Preloader';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Floaties } from '@/components/Floaties';
import { Hero } from '@/components/sections/Hero';
import { TrustBand } from '@/components/sections/TrustBand';
import { About } from '@/components/sections/About';
import { Courses } from '@/components/sections/Courses';
import { Grade } from '@/components/sections/Grade';
import { Historia } from '@/components/sections/Historia';
import { Team } from '@/components/sections/Team';
import { Gallery } from '@/components/sections/Gallery';
import { Matriculas } from '@/components/sections/Matriculas';
import { News } from '@/components/sections/News';
import { Partners } from '@/components/sections/Partners';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <TrustBand />
        <About />
        <Courses />
        <Grade />
        <Historia />
        <Team />
        <Gallery />
        <Matriculas />
        <News />
        <Partners />
        <Contact />
      </main>
      <Footer />
      <Floaties />
    </>
  );
}
