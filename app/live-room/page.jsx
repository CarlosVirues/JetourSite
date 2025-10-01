import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VehicleShowcaseNew from "@/components/VehicleShowcaseNew";
import GlobalStats from "@/components/GlobalStats";
import RoldanSection from "@/components/RoldanSection";
import VideoGallery from "@/components/VideoGallery";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";
import { getPageData } from "@/lib/page-data";

export default function LiveroomPage() {
  const pageData = getPageData("liveroom");

  return (
    <div className="min-h-screen bg-black text-white">
      <Header transparent={true} />

      {/* Hero Section - Full Screen */}
      <Hero {...pageData.liveroom.hero} />

      {/* Quote Form Section */}
      {pageData.quoteForm && <QuoteForm {...pageData.quoteForm} currentModel={null} />}

      {/* Global Stats Section */}
      {pageData.globalStats && <GlobalStats {...pageData.globalStats} />}


      

      <Footer />
    </div>
  );
}
