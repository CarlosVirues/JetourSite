import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VehicleShowcaseNew from "@/components/VehicleShowcaseNew";
import GlobalStats from "@/components/GlobalStats";
import RoldanSection from "@/components/RoldanSection";
import VideoGallery from "@/components/VideoGallery";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";
import Image from "next/image";
import VehicleHero from "@/components/VehicleHero";
import { getPageData, getVehicleModelPageData } from "@/lib/page-data";

export default function LiveroomPage() {
  const pageData = getPageData("liveroom");

  const model = "dashing";
  const modelPageData = getVehicleModelPageData(model); // Datos específicos del modelo

  return (
    <div className="min-h-screen bg-black text-white">
      <Header transparent={true} />

      {/* Hero Section */}
      <section className="relative h-96 lg:h-[500px] bg-gradient-to-r from-black to-gray-900 overflow-hidden">
        {/* Background Image Placeholder - You can replace this with an actual car image */}
        <Image
          src="/bg-liveroom.jpg"
          alt="Live Room"
          fill
          className="object-cover"
        />

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4">
              Live Room
            </h1>
            <p className="md:text-xl">
              Descubre el Suv que esta redescubriendo el futuro
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      {pageData.quoteForm && (
        <QuoteForm {...pageData.quoteForm} currentModel={model} />
      )}

      <VehicleHero
        backgroundImage={modelPageData.hero.backgroundImage}
        vehicleName={modelPageData.hero.vehicleName}
        vehicleDescription={modelPageData.hero.vehicleDescription}
        height={modelPageData.hero.height}
        logoImage={modelPageData.hero.logoImage}
        logoAlt={modelPageData.hero.logoAlt}
      />

      {/* Global Stats Section */}
      {pageData.globalStats && <GlobalStats {...pageData.globalStats} />}

      <Footer />
    </div>
  );
}
