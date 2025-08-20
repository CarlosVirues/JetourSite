import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VehicleShowcase from "@/components/VehicleShowcase";
import GlobalStats from "@/components/GlobalStats";
import RoldanSection from "@/components/RoldanSection";
import JetourLife from "@/components/JetourLife";
import VideoGallery from "@/components/VideoGallery";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header transparent={true} />

      {/* Hero Section - Full Screen */}
      <Hero />

      {/* Vehicle Showcase Section */}
      <VehicleShowcase />

      {/* Global Stats Section */}
      <GlobalStats />

      {/* Roldan Section */}
      <RoldanSection />

      {/* Jetour Life Section */}
      <JetourLife />

      {/* Video Gallery Section */}
      <VideoGallery />

      {/* Quote Form Section */}
      <QuoteForm />

      <Footer />
    </div>
  );
}
