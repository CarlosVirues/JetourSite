import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VehicleShowcase from "@/components/VehicleShowcase";
import GlobalStats from "@/components/GlobalStats";
import RoldanSection from "@/components/RoldanSection";
import JetourLife from "@/components/JetourLife";
import VideoGallery from "@/components/VideoGallery";
import Footer from "@/components/Footer";
import { getPageData } from "@/lib/page-data";

export default function HomePage() {
  const pageData = getPageData("home");

  return (
    <div className="min-h-screen bg-black text-white">
      <Header transparent={true} />

      {/* Hero Section - Full Screen */}
      <Hero {...pageData.hero} />

      {/* Vehicle Showcase Section */}
      <VehicleShowcase {...pageData.vehicleShowcase} />

      {/* Global Stats Section */}
      <GlobalStats {...pageData.globalStats} />

      {/* Roldan Section */}
      <RoldanSection {...pageData.roldanSection} />

      {/* Jetour Life Section */}
      {/* <JetourLife {...pageData.jetourLife} /> */}

      {/* Video Gallery Section */}
      <VideoGallery {...pageData.videoGallery} />

      {/* Quote Form Section */}
      <div
        className="bg-black py-16 lg:py-24 max-w-4xl mx-auto px-6 lg:px-12 text-center"
        id="contact-form"
      >
        <h1 className="text-2xl font-bold text-white mb-6">
          ¡Gracias por tu solicitud de cotización!
        </h1>
        <p className="text-white mb-6">
          Hemos recibido tu solicitud y uno de nuestros asesores se pondrá en
          contacto contigo en las próximas 24 horas para brindarte toda la
          información sobre el modelo que seleccionaste.
        </p>
        <p className="text-white mb-6">
          ¡Esperamos poder ayudarte a encontrar tu Jetour ideal!
        </p>
      </div>

      <Footer />
    </div>
  );
}
