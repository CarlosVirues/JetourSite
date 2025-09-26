import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VehicleShowcase from "@/components/VehicleShowcase";
import GlobalStats from "@/components/GlobalStats";
import RoldanSection from "@/components/RoldanSection";
import JetourLife from "@/components/JetourLife";
import VideoGallery from "@/components/VideoGallery";
import QuoteForm from "@/components/QuoteForm";
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
      <JetourLife {...pageData.jetourLife} />

      {/* Video Gallery Section */}
      <VideoGallery {...pageData.videoGallery} />

      {/* Quote Form Section */}
      <QuoteForm {...pageData.quoteForm} currentModel={null} />

      <Footer />
    </div>
  );
}
