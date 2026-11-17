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
import { cache } from "react";
import { getPageData } from "@/lib/page-data";
import { getHomePageData, getAllNews } from "@/lib/sanity";
import { buildMetadata } from "@/lib/seo";

// cache() de React: generateMetadata y el componente necesitan los mismos datos, y sin esto
// serían dos queries idénticas a Sanity por visita. Deduplica dentro del mismo render.
const getHomeData = cache(async () => (await getHomePageData()) ?? {});

// 2026-08-12: la home no tenía metadata propia — heredaba el title y la description
// globales de app/layout.js («JETOUR - Drive Your Future» / «Drive Your Future», 17
// caracteres). Ahora los toma del bloque `seo` de Sanity; mientras esté vacío devuelve {}
// y se sigue heredando el global exactamente como antes.
export async function generateMetadata() {
  const sanityData = await getHomeData();
  return buildMetadata(sanityData.seo);
}

export default async function HomePage() {
  // Obtener datos del hero desde Sanity con fallback seguro:
  // si Sanity falla o devuelve null, evitamos romper el render.
  const [sanityData, news] = await Promise.all([getHomeData(), getAllNews()]);

  // 2026-11-17 (pedido de Verónica, McCann): la sección «JETOUR en Ecuador y el mundo»
  // muestra la previa de las últimas notas de /noticias en lugar de los videos de Sanity.
  const newsPreviews = news.slice(0, 6).map((article) => ({
    title: article.title,
    thumbnail: article.image,
    type: "news",
    href: `/noticias/${article.slug}`,
    views: "Leer más",
  }));

  // Obtener datos estáticos para las otras secciones (temporal)
  const pageData = getPageData("home");

  return (
    <div className="min-h-screen bg-black text-white">
      <Header transparent={true} />

      {/* Hero Section - Full Screen */}
      {/* Fallback del video de portada (GCS) cuando Sanity no trae homePage.
          Si Sanity provee hero, sus valores tienen prioridad (van después del spread). */}
      <Hero
        backgroundVideo="https://storage.googleapis.com/xiyimgengine/jetour/video-home-marzo2026.mp4"
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

      {/* Últimas noticias (mismo carrusel que antes tenía los videos) */}
      {newsPreviews.length > 0 && (
        <VideoGallery
          title={sanityData.videoGallery?.title}
          videos={newsPreviews}
        />
      )}

      {/* Quote Form Section */}
      <QuoteForm {...pageData.quoteForm} currentModel={null} source="home" />

      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppInfoButton />
    </div>
  );
}
