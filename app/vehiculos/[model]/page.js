import Link from "next/link";
import Header from "@/components/Header";
import HeroShowcase from "@/components/HeroShowcase";
import VideoGallery from "@/components/VideoGallery";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header transparent={true} />

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
