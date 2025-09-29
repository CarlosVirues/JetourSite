"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function VehicleShowcaseNew() {
  const [currentModel, setCurrentModel] = useState(0);

  const models = [
    {
      id: 1,
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
    {
      id: 2,
      name: "X70 Sport",
      type: "Premium SUV",
      logo: "/models/x70-sport/x70-sport-logo.png",
      mainImage:
        "https://storage.googleapis.com/xiyimgengine/jetour/360/x70-sport/23.png",
      thumbnail:
        "https://storage.googleapis.com/xiyimgengine/jetour/360/x70-sport/23.png",
      dimensions: {
        length: "4724",
        width: "1900",
        height: "1720",
      },
      slug: "x70-sport",
    },
    {
      id: 3,
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
      id: 4,
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
        height: "1870",
      },
      slug: "t2",
    },
    {
      id: 7,
      name: "T2 Phev",
      type: "Hybrid SUV",
      logo: "/models/t2-phev/t2-phev-logo.png",
      mainImage:
        "https://storage.googleapis.com/xiyimgengine/jetour/360/t2-phev/21.png",
      thumbnail:
        "https://storage.googleapis.com/xiyimgengine/jetour/360/t2-phev/21.png",
      dimensions: {
        length: "4785",
        width: "2006",
        height: "1875",
      },
      slug: "t2-phev",
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
        <div className="mt-0 md:mt-0 relative">
          <div className="flex justify-center">
            <motion.div
              key={currentModel}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-full max-w-4xl h-64 md:h-96 lg:h-[500px]"
            >
              <Image
                src={currentVehicle.mainImage}
                alt={currentVehicle.name}
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </div>
        </div>

        {/* Model Carousel */}
        <div className="mt-0 md:mt-0 relative">
          {/* Navigation Arrows */}
          <motion.button
            onClick={prevModel}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-30 bg-white hover:bg-gray-50 text-gray-800 p-2 md:p-3 rounded-full shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
          </motion.button>

          <motion.button
            onClick={nextModel}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-30 bg-white hover:bg-gray-50 text-gray-800 p-2 md:p-3 rounded-full shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
          </motion.button>

          {/* Models Grid */}
          <div className="flex justify-center space-x-4 md:space-x-8 px-8 md:px-16 overflow-x-auto">
            {models.map((model, index) => (
              <motion.div
                key={model.id}
                onClick={() => goToModel(index)}
                className={`relative cursor-pointer transition-all duration-300 flex-shrink-0 ${
                  index === currentModel
                    ? "scale-110 opacity-100"
                    : "scale-100 opacity-60 hover:opacity-80"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-16 h-12 md:w-24 md:h-16 relative mb-2">
                  <Image
                    src={model.thumbnail}
                    alt={model.name}
                    fill
                    className={`object-cover rounded-lg transition-all duration-300 ${
                      index === currentModel
                        ? "ring-2 ring-teal-500"
                        : "grayscale"
                    }`}
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
    </section>
  );
}
