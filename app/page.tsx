import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import VSL from "@/components/VSL";
import Pain from "@/components/Pain";
import Calificacion from "@/components/Calificacion";
import VideoTestimonios from "@/components/VideoTestimonios";
import Pruebas from "@/components/Pruebas";
import WhyCatalina from "@/components/WhyCatalina";
import Metodologia from "@/components/Metodologia";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <VSL />
        <Pain />
        <Calificacion />
        <VideoTestimonios />
        <Pruebas />
        <WhyCatalina />
        <Metodologia />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
