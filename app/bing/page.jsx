"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VehicleShowcaseNew from "@/components/VehicleShowcaseNew";
import GlobalStats from "@/components/GlobalStats";
import RoldanSection from "@/components/RoldanSection";
import VideoGallery from "@/components/VideoGallery";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";
import Image from "next/image";
import VehicleHero from "@/components/VehicleHero";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { getPageData, getVehicleModelPageData } from "@/lib/page-data";


export default function TestDrivePage() {
  const pageData = getPageData("aeropuerto");

  const model = "t1";
  const modelPageData = getVehicleModelPageData(model); // Datos específicos del modelo

  return (
    <div className="min-h-screen bg-black text-white">
      <Header transparent={false} />

      {/* Quote Form Section */}
      {pageData.quoteForm && (
        <QuoteForm
          {...pageData.quoteForm}
          currentModel={model}
          source="bing"
        />
      )}

      <VehicleHero
        backgroundImage={modelPageData.hero.backgroundImage}
        vehicleName={modelPageData.hero.vehicleName}
        vehicleDescription={modelPageData.hero.vehicleDescription}
        height={modelPageData.hero.height}
        logoImage={modelPageData.hero.logoImage}
        logoAlt={modelPageData.hero.logoAlt}
      />

      {/* Hero Section */}
      <section className="relative h-auto lg:h-auto bg-gradient-to-r from-black to-gray-900 overflow-hidden">
        {/* Background Image Placeholder - You can replace this with an actual car image */}

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full mt-4">
          <div className="text-center">
            <div className="text-center">
              <motion.a
                href="/vehiculo/dashing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-blue-500 text-white px-8 py-2 rounded-full font-semibold text-lg flex items-center justify-center gap-3 hover:bg-blue-500 hover:text-white transition-all duration-300 w-fit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">Conoce más</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
