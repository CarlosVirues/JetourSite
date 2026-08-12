import Header from "@/components/Header";
import VehicleHero from "@/components/VehicleHero";
import ThreeSixty from "@/components/360";
import SpecificationsVideo from "@/components/SpecificationsVideo";
import VehicleColorsNew from "@/components/VehicleColorsNew";
import VehicleFeatureSlides from "@/components/VehicleFeatureSlides";
import VehicleGallery from "@/components/VehicleGallery";
import TechnicalSheetButton from "@/components/TechnicalSheetButton";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";
import WhatsAppInfoButton from "@/components/WhatsAppInfoButton";
import { getPageData, getVehicleModelPageData } from "@/lib/page-data";

// Landing de campaña para el F700 (pickup híbrida). No forma parte todavía del
// catálogo /vehiculos ni del menú principal — se agrega ahí solo cuando el
// modelo esté confirmado como lanzamiento permanente.
const MODEL = "f700";

export function generateMetadata() {
  const modelPageData = getVehicleModelPageData(MODEL);
  return {
    title: `${modelPageData.hero?.vehicleName || "F700"} - JETOUR Ecuador`,
    description: modelPageData.hero?.vehicleDescription,
  };
}

export default function F700Page() {
  const pageData = getPageData("vehiculos");
  const modelPageData = getVehicleModelPageData(MODEL);

  const hasModules = {
    hero: modelPageData.hero && Object.keys(modelPageData.hero).length > 0,
    featureSlides:
      modelPageData.featureSlides &&
      Array.isArray(modelPageData.featureSlides) &&
      modelPageData.featureSlides.length > 0,
    threeSixty:
      modelPageData.threeSixty &&
      Object.keys(modelPageData.threeSixty).length > 0,
    specificationsVideo:
      modelPageData.specificationsVideo &&
      Object.keys(modelPageData.specificationsVideo).length > 0,
    vehicleColorsNew:
      modelPageData.vehicleColorsNew &&
      Object.keys(modelPageData.vehicleColorsNew).length > 0,
    vehicleGallery:
      modelPageData.vehicleGallery &&
      Object.keys(modelPageData.vehicleGallery).length > 0,
    technicalSheet: modelPageData.technicalSheet === true,
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header transparent={true} />

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

      <div id="quote-form-up">
        <QuoteForm
          {...pageData.quoteForm}
          currentModel={MODEL}
          source={`${MODEL}-up`}
        />
      </div>

      {hasModules.threeSixty && (
        <ThreeSixty
          {...modelPageData.threeSixty}
          logoImage={modelPageData.hero?.logoImage}
          logoAlt={modelPageData.hero?.logoAlt}
        />
      )}

      {hasModules.specificationsVideo && (
        <SpecificationsVideo {...modelPageData.specificationsVideo} />
      )}

      {hasModules.vehicleColorsNew && (
        <VehicleColorsNew colorsData={modelPageData.vehicleColorsNew} />
      )}

      {hasModules.featureSlides &&
        modelPageData.featureSlides.map((featureModule, index) => (
          <VehicleFeatureSlides
            key={`feature-${index}-${featureModule.title}`}
            featuresData={featureModule}
          />
        ))}

      {hasModules.technicalSheet && (
        <TechnicalSheetButton model={MODEL} />
      )}

      {hasModules.vehicleGallery && (
        <VehicleGallery vehicleGalleryData={modelPageData.vehicleGallery} />
      )}

      <div id="quote-form-down">
        <QuoteForm
          {...pageData.quoteForm}
          currentModel={MODEL}
          source={`${MODEL}-down`}
        />
      </div>

      <Footer />

      <WhatsAppInfoButton modelName={modelPageData.hero?.vehicleName || "F700"} />
    </div>
  );
}
