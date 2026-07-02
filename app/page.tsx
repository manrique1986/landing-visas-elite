import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FloatingTestimonios from "@/components/FloatingTestimonios";
import FotosPrueba from "@/components/FotosPrueba";
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
        <FotosPrueba />
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
      <FloatingTestimonios />
    </>
  );
}
