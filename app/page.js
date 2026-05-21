import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VehicleShowcaseNew from "@/components/VehicleShowcaseNew";
import GlobalStats from "@/components/GlobalStats";
import RoldanSection from "@/components/RoldanSection";
import VideoGallery from "@/components/VideoGallery";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";
import WhatsAppInfoButton from "@/components/WhatsAppInfoButton";
import Image from "next/image";
import { getPageData } from "@/lib/page-data";
import { getHomePageData } from "@/lib/sanity";

export default async function HomePage() {
  // Obtener datos del hero desde Sanity con fallback seguro:
  // si Sanity falla o devuelve null, evitamos romper el render.
  const sanityData = (await getHomePageData()) ?? {};

  // Obtener datos estáticos para las otras secciones (temporal)
  const pageData = getPageData("home");

  return (
    <div className="min-h-screen bg-black text-white">
      <Header transparent={true} />

      {/* Hero Section - Full Screen */}
      <Hero
        {...sanityData.hero}
        additionalImage="/2026-life-is-a-ride.png"
        additionalImageAlt="2026 Life is a Ride"
      />

      {/* Vehicle Showcase Section */}
      <VehicleShowcaseNew />

      {/* Global Stats Section */}
      {sanityData.globalStats?.stats?.length > 0 && (
        <GlobalStats {...sanityData.globalStats} />
      )}

      {/* Roldan Section */}
      {sanityData.roldanSection && (
        <RoldanSection {...sanityData.roldanSection} />
      )}

      {/* Video Gallery Section */}
      {sanityData.videoGallery?.videos?.length > 0 && (
        <VideoGallery {...sanityData.videoGallery} />
      )}

      {/* Quote Form Section */}
      <QuoteForm {...pageData.quoteForm} currentModel={null} source="home" />

      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppInfoButton />
    </div>
  );
}
