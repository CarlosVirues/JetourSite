"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function VehicleShowcaseNew() {
  const [currentModel, setCurrentModel] = useState(0);
  const scrollContainerRef = useRef(null);

  const models = [
    {
      id: 1,
      name: "G700",
      type: "Luxury Off-Road SUV",
      logo: "/models/g700/g700-logo.png",
      mainImage: "/models/g700/360/20.png",
      thumbnail: "/models/g700/360/20.png",
      dimensions: {
        length: "5222",
        width: "2005",
        height: "2030",
      },
      slug: "g700",
    },
    {
      id: 2,
      name: "T2 PHEV",
      type: "Hybrid SUV",
      logo: "/models/t2-phev/t2-phev-logo.png",
      mainImage:
        "https://storage.googleapis.com/xiyimgengine/jetour/360/t2-phev/21.png",
      thumbnail:
        "https://storage.googleapis.com/xiyimgengine/jetour/360/t2-phev/21.png",
      dimensions: {
        length: "4785",
        width: "2006",
        height: "1880",
      },
      slug: "t2-phev",
    },
    {
      id: 3,
      name: "T2",
      type: "Compact SUV",
      logo: "/models/t2/t2-logo.png",
      mainImage:
        "https://storage.googleapis.com/xiyimgengine/jetour/360/t2/19.png",
      thumbnail:
        "https://storage.googleapis.com/xiyimgengine/jetour/360/t2/19.png",
      dimensions: {
        length: "4785",
        width: "2006",
        height: "1880",
      },
      slug: "t2",
    },
    {
      id: 4,
      name: "T1 PHEV",
      type: "Hybrid Off-Road SUV",
      logo: "/models/t1/t1-phev-logo.png",
      mainImage: "/models/t1-phev/360/22.png",
      thumbnail: "/models/t1-phev/360/22.png",
      dimensions: {
        length: "4705",
        width: "1967",
        height: "1843",
      },
      slug: "t1-phev",
    },
    {
      id: 5,
      name: "T1",
      type: "Lite Off-Road SUV",
      logo: "/models/t1/t1-logo.png",
      mainImage:
        "https://storage.googleapis.com/xiyimgengine/jetour/360/t1/22.png",
      thumbnail:
        "https://storage.googleapis.com/xiyimgengine/jetour/360/t1/22.png",
      dimensions: {
        length: "4705",
        width: "1967",
        height: "1843",
      },
      slug: "t1",
    },
    {
      id: 6,
      name: "Dashing",
      type: "Electric SUV",
      logo: "/models/dashing/dashing-logo.png",
      mainImage:
        "https://storage.googleapis.com/xiyimgengine/jetour/360/dashing/22.png",
      thumbnail:
        "https://storage.googleapis.com/xiyimgengine/jetour/360/dashing/22.png",
      dimensions: {
        length: "4590",
        width: "1900",
        height: "1685",
      },
      slug: "dashing",
    },
    {
      id: 7,
      name: "X70 Plus",
      type: "Premium SUV",
      logo: "/models/x70/x70-plus-logo.png",
      mainImage:
        "https://storage.googleapis.com/xiyimgengine/jetour/360/x70-plus/21.png",
      thumbnail:
        "https://storage.googleapis.com/xiyimgengine/jetour/360/x70-plus/21.png",
      dimensions: {
        length: "4724",
        width: "1900",
        height: "1720",
      },
      slug: "x70-plus",
    },
    {
      id: 8,
      name: "X70 Sport",
      type: "Premium SUV",
      logo: "/models/x70-sport/x70-sport-logo.png",
      mainImage:
        "https://storage.googleapis.com/xiyimgengine/jetour/360/x70-sport/23.png",
      thumbnail:
        "https://storage.googleapis.com/xiyimgengine/jetour/360/x70-sport/23.png",
      dimensions: {
        length: "4743",
        width: "1900",
        height: "1720",
      },
      slug: "x70-sport",
    },
    {
      id: 9,
      name: "X50",
      type: "Compact SUV",
      logo: "/models/x50/x50-logo.png",
      mainImage:
        "https://storage.googleapis.com/xiyimgengine/jetour/360/x50/23.png",
      thumbnail:
        "https://storage.googleapis.com/xiyimgengine/jetour/360/x50/23.png",
      dimensions: {
        length: "4500",
        width: "1850",
        height: "1690",
      },
      slug: "x50",
    },
  ];

  const nextModel = () => {
    setCurrentModel((prev) => (prev + 1) % models.length);
  };

  const prevModel = () => {
    setCurrentModel((prev) => (prev - 1 + models.length) % models.length);
  };

  const goToModel = (index) => {
    setCurrentModel(index);
  };

  const currentVehicle = models[currentModel];

  return (
    <section className="relative bg-gray-100 py-8 md:py-12 flex items-center">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Vehicle Info */}
          <div className="space-y-6 md:space-y-8 h-full">
            {/* Logo and Title */}
            <div className="space-y-4">
              <div className="flex items-start justify-start space-x-4">
                <div className="w-32 md:w-48 h-8 md:h-12 relative">
                  <Image
                    src={currentVehicle.logo}
                    alt={`${currentVehicle.name} Logo`}
                    fill
                    className="object-contain invert"
                    sizes="(max-width: 768px) 128px, 192px"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Dimensions */}
          <div className="space-y-2 border-black flex justify-end">
            <div className="space-y-2 max-w-xs flex flex-col items-end justify-end">
              {/* Length */}
              <div className="flex items-center space-x-2 md:space-x-4">
                <div className="text-right">
                  <div className="text-lg md:text-2xl text-gray-900">
                    {currentVehicle.dimensions.length} mm
                  </div>
                  <div className="text-xs text-gray-600 uppercase tracking-wide">
                    Longitud
                  </div>
                </div>
              </div>

              {/* Width */}
              <div className="flex items-center space-x-2 md:space-x-4">
                <div className="text-right">
                  <div className="text-lg md:text-2xl text-gray-900">
                    {currentVehicle.dimensions.width} mm
                  </div>
                  <div className="text-xs text-gray-600 uppercase tracking-wide">
                    Ancho
                  </div>
                </div>
              </div>

              {/* Height */}
              <div className="flex items-center space-x-2 md:space-x-4">
                <div className="text-right">
                  <div className="text-lg md:text-2xl text-gray-900">
                    {currentVehicle.dimensions.height} mm
                  </div>
                  <div className="text-xs text-gray-600 uppercase tracking-wide">
                    Alto
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Vehicle Image */}
        <div className="mt-4 md:mt-6 relative">
          <div className="flex justify-center">
            <Link href={`/vehiculos/${currentVehicle.slug}`} className="block w-full max-w-4xl">
              <motion.div
                key={currentModel}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative w-full h-64 md:h-96 lg:h-[500px] cursor-pointer group"
              >
                <Image
                  key={currentVehicle.slug}
                  src={currentVehicle.mainImage}
                  alt={currentVehicle.name}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 1024px"
                />
              </motion.div>
            </Link>
          </div>
        </div>

        {/* Model Carousel - Rotating Banner */}
        <div className="-mt-20 md:-mt-20 relative overflow-hidden">
          {/* Navigation Arrows */}
          <button
            onClick={prevModel}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-40 bg-white hover:bg-gray-50 text-gray-800 p-3 md:p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Modelo anterior"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={nextModel}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-40 bg-white hover:bg-gray-50 text-gray-800 p-3 md:p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Modelo siguiente"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Models Grid - Showing 6 in desktop, less in mobile */}
          <div className="px-12 md:px-16 pt-4 pb-4">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
              {models.slice(0, 6).map((model, index) => (
                <motion.div
                  key={model.id}
                  onClick={() => goToModel(index)}
                  className={`relative cursor-pointer transition-all duration-300 ${
                    index === currentModel
                      ? "scale-110 opacity-100"
                      : "scale-100 opacity-60 hover:opacity-80"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-full aspect-[4/3] relative mb-2">
                    <Image
                      src={model.thumbnail}
                      alt={model.name}
                      fill
                      className={`object-contain transition-all duration-300 ${
                        index === currentModel ? "" : "grayscale"
                      }`}
                      sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                    />
                  </div>
                  <div className="text-center">
                    <span
                      className={`text-xs md:text-sm font-medium transition-colors duration-300 ${
                        index === currentModel ? "text-gray-900" : "text-gray-500"
                      }`}
                    >
                      {model.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
