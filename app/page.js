import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VehicleShowcaseNew from "@/components/VehicleShowcaseNew";
import GlobalStats from "@/components/GlobalStats";
import RoldanSection from "@/components/RoldanSection";
import VideoGallery from "@/components/VideoGallery";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";
import Image from "next/image";
import { getPageData } from "@/lib/page-data";
import { getHomePageData } from "@/lib/sanity";

export default async function HomePage() {
  // Obtener datos del hero desde Sanity
  const sanityData = await getHomePageData();

  // Obtener datos estáticos para las otras secciones (temporal)
  const pageData = getPageData("home");

  return (
    <div className="min-h-screen bg-black text-white">
      <Header transparent={true} />

      {/* Hero Section - Full Screen */}
      {<Hero 
        {...sanityData?.hero} 
        additionalImage="/2026-life-is-a-ride.png"
        additionalImageAlt="2026 Life is a Ride"
      />}

      {/* Vehicle Showcase Section */}
      <VehicleShowcaseNew />

      {/* Global Stats Section */}
      <GlobalStats {...sanityData?.globalStats} />

      {/* Roldan Section */}
      <RoldanSection {...sanityData?.roldanSection} />

      {/* Video Gallery Section */}
      <VideoGallery {...sanityData?.videoGallery} />

      {/* Quote Form Section */}
      <QuoteForm {...pageData.quoteForm} currentModel={null} source="home" />

      <Footer />
    </div>
  );
}
