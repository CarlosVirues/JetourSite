import Header from "@/components/Header";
import ServiceHero from "@/components/ServiceHero";
import OriginalParts from "@/components/OriginalParts";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import ServiceCenters from "@/components/ServiceCenters";
import ServiceTestimonials from "@/components/ServiceTestimonials";
import FinalWhatsAppCTA from "@/components/FinalWhatsAppCTA";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function PostventaPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header transparent={true} border={true} />

      {/* Hero Section */}
      <section className="relative h-96 lg:h-[500px] xl:h-[750px] bg-gradient-to-r from-black to-gray-900 overflow-hidden">
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

      {/* WhatsApp CTA Section */}
      <WhatsAppCTA />

      {/* Service Centers Section */}
      <ServiceCenters />

      {/* Testimonials Section */}
      <ServiceTestimonials />

      {/* Final WhatsApp CTA */}
      <FinalWhatsAppCTA />

      <Footer />
    </div>
  );
}
