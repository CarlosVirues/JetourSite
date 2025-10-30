import Header from "@/components/Header";
import ServiceHero from "@/components/ServiceHero";
import OriginalParts from "@/components/OriginalParts";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import ServiceCenters from "@/components/ServiceCenters";
// import ServiceTestimonials from "@/components/ServiceTestimonials";
import ServiceForm from "@/components/ServiceForm";
import { submitServiceForm } from "@/app/actions/service";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function PostventaPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header transparent={true} border={true} />

      {/* Hero Section */}
      <section className="relative h-96 lg:h-[500px] bg-gradient-to-r from-black to-gray-900 overflow-hidden">
        {/* Background Image Placeholder - You can replace this with an actual car image */}
        <Image
          src="/bg-postventa.jpg"
          alt="Postventa"
          fill
          className="object-cover"
        />

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4">
              Posventa
            </h1>
            <p className="md:text-xl">
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
      <div className="px-4 md:px-8 lg:px-16 py-12">
              <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Title */}
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center pb-8">
                   Agenda tu cita
                  </h2>
                </div>
        <div className="max-w-3xl mx-auto">
          <ServiceForm action={submitServiceForm} />
        </div>
      </div>

      {/* WhatsApp CTA Section */}
      <WhatsAppCTA />

      <Footer />
    </div>
  );
}
