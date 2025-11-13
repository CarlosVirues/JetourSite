import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VehicleShowcaseNew from "@/components/VehicleShowcaseNew";
import GlobalStats from "@/components/GlobalStats";
import RoldanSection from "@/components/RoldanSection";
import VideoGallery from "@/components/VideoGallery";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";
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
      {/*<Hero {...sanityData?.hero} />*/}

      <section className="relative h-96 lg:h-[500px] bg-gradient-to-r from-black to-gray-900 overflow-hidden">
              {/* Background Image Placeholder - You can replace this with an actual car image */}
              <Image
                src="/bg-iva.jpg"
                alt="Congelamos el IVA al 9%"
                fill
                className="object-cover"
              />
      
              {/* Hero Content */}
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center">
                  <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4"></h1>
                  <p className="md:text-xl"></p>
                </div>
              </div>
            </section>

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
