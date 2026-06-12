import Header from "@/components/Header";
import HeroShowcase from "@/components/HeroShowcase";
import VideoGallery from "@/components/VideoGallery";
import QuoteForm from "@/components/QuoteForm";
import VehicleHero from "@/components/VehicleHero";
import VehicleFeatures from "@/components/VehicleFeatures";
import VehicleGallery from "@/components/VehicleGallery";
import ThreeSixty from "@/components/360";
import VehicleColors from "@/components/VehicleColors";
import VehicleColorsNew from "@/components/VehicleColorsNew";
import Footer from "@/components/Footer";
import { getVehicleModel } from "@/lib/vehicle-models";
import { getPageData, getVehicleModelPageData } from "@/lib/page-data";
import { getVehicleModelPageDataFromSanity } from "@/lib/sanity";
import TechnicalSheetButton from "@/components/TechnicalSheetButton";
import SpecificationsVideo from "@/components/SpecificationsVideo";
import VehicleFeatureSlides from "@/components/VehicleFeatureSlides";
import WhatsAppInfoButton from "@/components/WhatsAppInfoButton";

export async function generateMetadata({ params }) {
  const pageParams = await params;
  const model = pageParams.model.toLowerCase();
  const vehicleData = getVehicleModel(model);

  return {
    title: `${vehicleData.name} - JETOUR Ecuador`,
    description: vehicleData.description,
  };
}

export default async function VehicleModelPage({ params }) {
  const pageParams = await params;
  const model = pageParams.model.toLowerCase();
  const pageData = getPageData("vehiculos"); // Datos específicos para páginas de vehículos
  // Datos del modelo: primero desde Sanity (editable por el cliente en /studio),
  // con fallback al hardcode de page-data.js si Sanity no responde o no tiene el doc.
  const sanityModelData = await getVehicleModelPageDataFromSanity(model);
  const modelPageData = sanityModelData ?? getVehicleModelPageData(model);

  // Verificar qué módulos están disponibles para este modelo
  // Esto permite ocultar automáticamente secciones que no tienen datos
  const hasModules = {
    hero: modelPageData.hero && Object.keys(modelPageData.hero).length > 0,
    features: modelPageData.features && Object.keys(modelPageData.features).length > 0,
    featureSlides: modelPageData.featureSlides && Array.isArray(modelPageData.featureSlides) && modelPageData.featureSlides.length > 0,
    vehicleGallery: modelPageData.vehicleGallery && Object.keys(modelPageData.vehicleGallery).length > 0,
    threeSixty: modelPageData.threeSixty && Object.keys(modelPageData.threeSixty).length > 0,
    vehicleColors: modelPageData.vehicleColors && Object.keys(modelPageData.vehicleColors).length > 0, // Módulo de colores independiente
    vehicleColorsNew: modelPageData.vehicleColorsNew && Object.keys(modelPageData.vehicleColorsNew).length > 0, // Nuevo módulo de colores
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
        <SpecificationsVideo 
          {...modelPageData.specificationsVideo} 
          logoImage={modelPageData.hero?.logoImage}
          logoAlt={modelPageData.hero?.logoAlt}
        />
      )}

      {/* Vehicle Colors Section - New version (before features) */}
      {hasModules.vehicleColorsNew && (
        <VehicleColorsNew colorsData={modelPageData.vehicleColorsNew} />
      )}

      {/* Feature Slides - Dynamic modules */}
      {hasModules.featureSlides && modelPageData.featureSlides.map((featureModule, index) => (
        <VehicleFeatureSlides 
          key={`feature-${index}-${featureModule.title}`}
          featuresData={featureModule} 
        />
      ))}

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

      <Footer />
      
      {/* Floating WhatsApp Button */}
      <WhatsAppInfoButton modelName={modelPageData.hero?.vehicleName || model.toUpperCase()} />
    </div>
  );
}
