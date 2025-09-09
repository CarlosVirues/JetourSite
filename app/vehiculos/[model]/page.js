import Link from "next/link";
import Header from "@/components/Header";
import HeroShowcase from "@/components/HeroShowcase";
import VideoGallery from "@/components/VideoGallery";
import QuoteForm from "@/components/QuoteForm";
import Hero from "@/components/Hero";
import VehicleFeatures from "@/components/VehicleFeatures";
import VehicleGallery from "@/components/VehicleGallery";
import Footer from "@/components/Footer";
import { getVehicleHeroConfig, getVehicleModel } from "@/lib/vehicle-models";

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
  const heroConfig = getVehicleHeroConfig(model);
  const vehicleData = getVehicleModel(model);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header transparent={true} />

      {/* Hero Section - Full Screen */}
      <Hero {...heroConfig} />

      {/* Vehicle Features Section */}
      <VehicleFeatures vehicleData={vehicleData} />

      {/* Vehicle Gallery Section */}
      <VehicleGallery vehicleData={vehicleData} />

      {/* Hero Showcase Section */}
      <HeroShowcase />

      {/* Video Gallery Section */}
      <VideoGallery />

      {/* Quote Form Section */}
      <QuoteForm />

      <Footer />
    </div>
  );
}
