import Header from "@/components/Header";
import ServiceHero from "@/components/ServiceHero";
import OriginalParts from "@/components/OriginalParts";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import ServiceCenters from "@/components/ServiceCenters";
// import ServiceTestimonials from "@/components/ServiceTestimonials";
// import ServiceForm from "@/components/ServiceForm";
// import { submitServiceForm } from "@/app/actions/service";
import Footer from "@/components/Footer";
import Image from "next/image";
import UetConversion from "@/components/UetConversion";

export default function PostventaPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header transparent={true} border={true} />
      {/* Conversión "Registrarse" de Microsoft Ads: el usuario llega acá solo tras enviar el formulario. */}
      <UetConversion event="signup" />

      {/* Hero Section */}
      <section className="relative h-96 lg:h-[500px] bg-linear-to-r from-black to-gray-900 overflow-hidden">
        {/* Background Image Placeholder - You can replace this with an actual car image */}
        <Image
          src="/bg-posventa-2026.jpg"
          alt="Postventa"
          fill
          className="object-cover"
        />
        {/* La foto (2026-10) tiene al técnico al centro: el texto va abajo en móvil y a la
            izquierda en desktop, sobre un degradado, para no taparle la cara. */}
        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent lg:bg-linear-to-r lg:from-black/80 lg:via-black/30 lg:to-transparent" />

        {/* Hero Content */}
        <div className="relative z-10 flex items-end lg:items-center h-full">
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 pb-10 lg:pb-0 text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4">
              Posventa
            </h1>
            <p className="md:text-xl lg:max-w-sm">
              El respaldo que esperas con la calidad que exiges
            </p>
          </div>
        </div>
      </section>

      {/* Service Hero Section */}
      <ServiceHero />

      {/* Original Parts Section */}
      <OriginalParts />

      {/* Service Centers Section */}
      <ServiceCenters />

      {/* Testimonials Section */}
      {/* <ServiceTestimonials /> */}

      {/* Service Form */}
      <div className="px-4 md:px-8 lg:px-16 py-16" id="service-form">
              <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Title */}
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center pb-8">
                   Agenda tu cita
                  </h2>
                </div>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold text-white mb-6 text-center">
                Gracias por escribirnos.
              </h1>
              <p className="text-white mb-6 text-center">
                Nos pondremos en contacto contigo pronto.
              </p>
        </div>
      </div>

      {/* WhatsApp CTA Section */}
      <WhatsAppCTA />

      <Footer />
    </div>
  );
}
