import Header from "@/components/Header";
import HeroShowcase from "@/components/HeroShowcase";
import VideoGallery from "@/components/VideoGallery";
import QuoteForm from "@/components/QuoteForm";
import VehicleHero from "@/components/VehicleHero";
import VehicleFeatures from "@/components/VehicleFeatures";
import VehicleGallery from "@/components/VehicleGallery";
import ThreeSixty from "@/components/360";
import Footer from "@/components/Footer";
import { getVehicleModel } from "@/lib/vehicle-models";
import { getPageData, getVehicleModelPageData } from "@/lib/page-data";
import TechnicalSheetButton from "@/components/TechnicalSheetButton";

export async function generateMetadata({ params }) {
  const pageParams = await params;
  const { model } = pageParams;
  const vehicleData = getVehicleModel(model);

  return {
    title: `${vehicleData.name} - JETOUR Ecuador`,
    description: vehicleData.description,
  };
}

export default async function VehicleModelPage({ params }) {
  const pageParams = await params;
  const { model } = pageParams;
  const pageData = getPageData("vehiculos"); // Datos específicos para páginas de vehículos
  const modelPageData = getVehicleModelPageData(model); // Datos específicos del modelo

  return (
    <div className="min-h-screen bg-black text-white">
      <Header transparent={true} />

      {/* Hero Section - Full Screen */}
      <VehicleHero
        backgroundImage={modelPageData.hero.backgroundImage}
        vehicleName={modelPageData.hero.vehicleName}
        vehicleDescription={modelPageData.hero.vehicleDescription}
        height={modelPageData.hero.height}
      />

      {/* Vehicle Features Section */}
      <VehicleFeatures featuresData={modelPageData.features} />

      {/* Vehicle Gallery Section */}
      <VehicleGallery vehicleGalleryData={modelPageData.vehicleGallery} />

      {/* 360 View Section - Only for models with 360 data */}
      {modelPageData.threeSixty && <ThreeSixty {...modelPageData.threeSixty} />}

      {/* Hero Showcase Section */}
      <HeroShowcase heroShowcaseData={modelPageData.heroShowcase} />

      {/* Technical Sheet Section */}
      <TechnicalSheetButton model={model} />

      {/* Video Gallery Section */}
      <VideoGallery {...modelPageData.videoGallery} />

      {/* Quote Form Section */}
      <QuoteForm {...pageData.quoteForm} />

      <Footer />
    </div>
  );
}
