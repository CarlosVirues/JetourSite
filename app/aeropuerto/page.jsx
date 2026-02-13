"use client";

import Header from "@/components/Header";
import VehicleHero from "@/components/VehicleHero";
import ThreeSixty from "@/components/360";
import VehicleColors from "@/components/VehicleColors";
import VehicleColorsNew from "@/components/VehicleColorsNew";
import SpecificationsVideo from "@/components/SpecificationsVideo";
import VehicleGallery from "@/components/VehicleGallery";
import VehicleFeatureSlides from "@/components/VehicleFeatureSlides";
import TechnicalSheetButton from "@/components/TechnicalSheetButton";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getPageData, getVehicleModelPageData } from "@/lib/page-data";


export default function TestDrivePage() {
  const pageData = getPageData("aeropuerto");

  // CAMBIAR AQUÍ EL MODELO QUE QUIERES MOSTRAR
  const SELECTED_MODEL = "t1"; // Opciones: x50, x70-sport, x70-plus, dashing, t1, t1-phev, t2, t2-phev, g700

  const modelPageData = getVehicleModelPageData(SELECTED_MODEL);
  
  // Verificar qué módulos están disponibles para este modelo
  const hasModules = {
    hero: modelPageData.hero && Object.keys(modelPageData.hero).length > 0,
    featureSlides: modelPageData.featureSlides && Array.isArray(modelPageData.featureSlides) && modelPageData.featureSlides.length > 0,
    threeSixty: modelPageData.threeSixty && Object.keys(modelPageData.threeSixty).length > 0,
    vehicleColors: modelPageData.vehicleColors && Object.keys(modelPageData.vehicleColors).length > 0,
    vehicleColorsNew: modelPageData.vehicleColorsNew && Object.keys(modelPageData.vehicleColorsNew).length > 0,
    specificationsVideo: modelPageData.specificationsVideo && Object.keys(modelPageData.specificationsVideo).length > 0,
    vehicleGallery: modelPageData.vehicleGallery && Object.keys(modelPageData.vehicleGallery).length > 0,
    technicalSheet: modelPageData.technicalSheet === true,
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header transparent={true} />

      {/* 1. Formulario inicial */}
      <QuoteForm
        currentModel={SELECTED_MODEL}
        source="aeropuerto-top"
      />

      {/* 2. Banner con video */}
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

      {/* 3. Vista 360 */}
      {hasModules.threeSixty && (
        <ThreeSixty 
          {...modelPageData.threeSixty}
          logoImage={modelPageData.hero?.logoImage}
          logoAlt={modelPageData.hero?.logoAlt}
        />
      )}

      {/* 4. Video de especificaciones/interior */}
      {hasModules.specificationsVideo && (
        <SpecificationsVideo 
          {...modelPageData.specificationsVideo}
          logoImage={modelPageData.hero?.logoImage}
          logoAlt={modelPageData.hero?.logoAlt}
        />
      )}

      {/* 5. Colores del vehículo - Nueva versión (antes de features) */}
      {hasModules.vehicleColorsNew && (
        <VehicleColorsNew colorsData={modelPageData.vehicleColorsNew} />
      )}

      {/* Feature Slides - Módulos dinámicos */}
      {hasModules.featureSlides && modelPageData.featureSlides.map((featureModule, index) => (
        <VehicleFeatureSlides 
          key={`feature-${index}-${featureModule.title}`}
          featuresData={featureModule} 
        />
      ))}

      {/* 6. Ficha técnica / Especificaciones */}
      {hasModules.technicalSheet && (
        <TechnicalSheetButton model={SELECTED_MODEL} />
      )}

      {/* 7. Galería de imágenes */}
      {hasModules.vehicleGallery && (
        <VehicleGallery vehicleGalleryData={modelPageData.vehicleGallery} />
      )}

      {/* 8. Formulario nuevamente */}
      <QuoteForm
        currentModel={SELECTED_MODEL}
        source="aeropuerto-bottom"
      />

      {/* Botón CTA flotante */}
      <motion.div className="fixed bottom-8 right-8 z-50">
        <motion.a
          href={`/vehiculos/${SELECTED_MODEL}`}
          className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-3 shadow-lg hover:bg-blue-600 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Ver más detalles</span>
          <ArrowRight className="w-5 h-5" />
        </motion.a>
      </motion.div>

      <Footer />
    </div>
  );
}
