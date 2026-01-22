import Header from "@/components/Header";
import HeroShowcase from "@/components/HeroShowcase";
import VideoGallery from "@/components/VideoGallery";
import QuoteForm from "@/components/QuoteForm";
import VehicleHero from "@/components/VehicleHero";
import VehicleFeatures from "@/components/VehicleFeatures";
import VehicleGallery from "@/components/VehicleGallery";
import ThreeSixty from "@/components/360";
import VehicleColors from "@/components/VehicleColors";
import Footer from "@/components/Footer";
import FloatingQuoteButton from "@/components/FloatingQuoteButton";
import { getVehicleModel } from "@/lib/vehicle-models";
import { getPageData, getVehicleModelPageData } from "@/lib/page-data";
import TechnicalSheetButton from "@/components/TechnicalSheetButton";
import SpecificationsVideo from "@/components/SpecificationsVideo";

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

  // Verificar qué módulos están disponibles para este modelo
  // Esto permite ocultar automáticamente secciones que no tienen datos
  const hasModules = {
    hero: modelPageData.hero && Object.keys(modelPageData.hero).length > 0,
    features: modelPageData.features && Object.keys(modelPageData.features).length > 0,
    vehicleGallery: modelPageData.vehicleGallery && Object.keys(modelPageData.vehicleGallery).length > 0,
    threeSixty: modelPageData.threeSixty && Object.keys(modelPageData.threeSixty).length > 0,
    vehicleColors: modelPageData.vehicleColors && Object.keys(modelPageData.vehicleColors).length > 0, // Módulo de colores independiente
    heroShowcase: modelPageData.heroShowcase && Object.keys(modelPageData.heroShowcase).length > 0,
    videoGallery: modelPageData.videoGallery && Object.keys(modelPageData.videoGallery).length > 0,
    quoteForm: pageData.quoteForm && Object.keys(pageData.quoteForm).length > 0,
    technicalSheet: modelPageData.technicalSheet === true, // Módulo de ficha técnica independiente
    specificationsVideo: modelPageData.specificationsVideo && Object.keys(modelPageData.specificationsVideo).length > 0
  };

  // DEBUG: Mostrar qué módulos están disponibles para este modelo (comentar en producción)
  if (process.env.NODE_ENV === 'development') {
    console.log(`Módulos disponibles para ${model}:`, hasModules);
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header transparent={true} />

      {/* Hero Section - Full Screen */}
      {hasModules.hero && (
        <VehicleHero
          backgroundImage={modelPageData.hero.backgroundImage}
          backgroundVideo={modelPageData.hero.backgroundVideo}
          vehicleName={modelPageData.hero.vehicleName}
          vehicleDescription={modelPageData.hero.vehicleDescription}
          height={modelPageData.hero.height}
          logoImage={modelPageData.hero.logoImage}
          logoAlt={modelPageData.hero.logoAlt}
          highlights={modelPageData.hero.highlights}
        />
      )}

      {/* Vehicle Features Section */}
      {/*
      {hasModules.features && (
        <VehicleFeatures featuresData={modelPageData.features} />
      )}
      */}

      {/* Quote Form arriba */}
      {hasModules.quoteForm && (
        <div id="quote-form-up">
          <QuoteForm
            {...pageData.quoteForm}
            currentModel={model}
            source={`${model}-up`}
          />
        </div>
      )}

      {/* 360 View Section - Only for models with 360 data */}
      {hasModules.threeSixty && (
        <ThreeSixty 
          {...modelPageData.threeSixty} 
          logoImage={modelPageData.hero?.logoImage}
          logoAlt={modelPageData.hero?.logoAlt}
        />
      )}

      {/* Video de Especificaciones - Solo para modelos con video */}
      {hasModules.specificationsVideo && (
        <SpecificationsVideo {...modelPageData.specificationsVideo} />
      )}


      {/* Vehicle Colors Section - Now independent from 360 view */}
      {hasModules.vehicleColors && (
        <VehicleColors
          model={modelPageData.vehicleColors.model}
          colorsPath={modelPageData.vehicleColors.colorsPath}
          totalColors={modelPageData.vehicleColors.totalColors}
          colorNames={modelPageData.vehicleColors.colorNames}
        />
      )}

      {/* Hero Showcase Section */}
      {hasModules.heroShowcase && (
        <HeroShowcase heroShowcaseData={modelPageData.heroShowcase} />
      )}

      {/* Technical Sheet Section */}
      {hasModules.technicalSheet && (
        <TechnicalSheetButton model={model} />
      )}

      {/* Video Gallery Section */}
      {/*
      {hasModules.videoGallery && (
        <VideoGallery {...modelPageData.videoGallery} />
      )}
      */}

      {/* Vehicle Gallery Section */}
      {hasModules.vehicleGallery && (
        <VehicleGallery vehicleGalleryData={modelPageData.vehicleGallery} />
      )}

      {/* Quote Form abajo */}
      {hasModules.quoteForm && (
        <div id="quote-form-down">
          <QuoteForm
            {...pageData.quoteForm}
            currentModel={model}
            source={`${model}-down`}
          />
        </div>
      )}

      {/* Floating Quote Button */}
      <FloatingQuoteButton />

      <Footer />
    </div>
  );
}
