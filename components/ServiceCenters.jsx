"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Clock, MapPin } from "lucide-react";
import Image from "next/image";

export default function ServiceCenters() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCity, setSelectedCity] = useState("all");

  const cities = [
    {
      id: "all",
      name: "Todas las ciudades",
    },
    {
      id: "quito",
      name: "Quito",
    },
    {
      id: "guayaquil",
      name: "Guayaquil",
    },
    {
      id: "cuenca",
      name: "Cuenca",
    },
    {
      id: "ambato",
      name: "Ambato",
    },
    {
      id: "ciudad",
      name: "Ciudad",
    },
    {
      id: "macas",
      name: "Macas",
    },
    {
      id: "santo-domingo",
      name: "Santo Domingo",
    },
  ];

  const serviceCenters = [
    {
      id: 1,
      name: "DEALER",
      address: "DIRECCIÓN",
      nearBy: "",
      city: "ciudad",
      schedule: {
        weekdays: "LUN - VIE 8:00 a 18:30",
        weekends: "SÁB 9:00 - 14:00",
      },
    },
    {
      id: 2,
      name: "IBAMOTORS",
      address: "Av. Gral Rumiñahui e Ista Marchena.",
      nearBy: "",
      city: "quito",
      schedule: {
        weekdays: "LUN - VIE 8:00 a 18:30",
        weekends: "SÁB 9:00 - 14:00",
      },
    },
    {
      id: 3,
      name: "GRUPO PALACIOS",
      address: "Av. Los Guaytambos, frente al hospital del IESS.",
      nearBy: "",
      city: "ambato",
      schedule: {
        weekdays: "LUN - VIE 8:00 a 18:30",
        weekends: "SÁB 9:00 - 14:00",
      },
    },
    {
      id: 4,
      name: "AUTOLASA",
      address: "Av. Pedro Menéndez Gilbert y Luis Plaza Dañin.",
      nearBy: "",
      city: "guayaquil",
      schedule: {
        weekdays: "LUN - VIE 8:00 a 18:30",
        weekends: "SÁB 9:00 - 14:00",
      },
    },
    {
      id: 5,
      name: "AUTODEALER / LUSADAEN",
      address: "Av. Morán Valverde, Plaza Moblart, Frente a Quicentro Sur.",
      nearBy: "",
      city: "quito",
      schedule: {
        weekdays: "LUN - VIE 8:00 a 18:30",
        weekends: "SÁB 9:00 - 14:00",
      },
    },
    {
      id: 6,
      name: "CORP. NOVALIDER",
      address:
        'Autopista Narcisa de Jesús, Cdla. "Acuarela del Río", solar 1 Y 2.',
      nearBy: "",
      city: "guayaquil",
      schedule: {
        weekdays: "LUN - VIE 8:00 a 18:30",
        weekends: "SÁB 9:00 - 14:00",
      },
    },
    {
      id: 7,
      name: "UNIMOTORS / PROSPERITY",
      address:
        'Av. Diego de Almagro y Orellana, junto a Hamburguesas "El Corral".',
      nearBy: "",
      city: "quito",
      schedule: {
        weekdays: "LUN - VIE 8:00 a 18:30",
        weekends: "SÁB 9:00 - 14:00",
      },
    },
    {
      id: 8,
      name: "SÚPER DEALER",
      address: "Av. Chone KM1 y  Anillo Vial.",
      nearBy: "",
      city: "santo-domingo",
      schedule: {
        weekdays: "LUN - VIE 8:00 a 18:30",
        weekends: "SÁB 9:00 - 14:00",
      },
    },
    {
      id: 9,
      name: "IMPORTMOTORS",
      address: "Hernán Malo y Circunvalación Sur, detrás de la UDA.",
      nearBy: "",
      city: "cuenca",
      schedule: {
        weekdays: "LUN - VIE 8:00 a 18:30",
        weekends: "SÁB 9:00 - 14:00",
      },
    },
    {
      id: 10,
      name: "NANTUCAR",
      address: "Av. 29 de Mayo y Pedro Nolasco Jaramillo.",
      nearBy: "",
      city: "macas",
      schedule: {
        weekdays: "LUN - VIE 8:00 a 18:30",
        weekends: "SÁB 9:00 - 14:00",
      },
    },
  ];

  // Filter service centers based on selected city
  const filteredServiceCenters = serviceCenters.filter(
    (center) => selectedCity === "all" || center.city === selectedCity
  );

  const nextSlide = () => {
    const maxSlides = Math.max(1, filteredServiceCenters.length - 2);
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
  };

  const prevSlide = () => {
    const maxSlides = Math.max(1, filteredServiceCenters.length - 2);
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
  };

  const handleCityChange = (cityId) => {
    setSelectedCity(cityId);
    setCurrentSlide(0); // Reset to first slide when changing city
  };

  return (
    <section className="relative bg-black text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Nuestros talleres y centros de servicio
          </h2>
        </motion.div>

        {/* City Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2 bg-gray-800 rounded-lg lg:rounded-full p-2">
            {cities.map((city) => (
              <button
                key={city.id}
                onClick={() => handleCityChange(city.id)}
                className={`px-4 py-2 rounded-lg lg:rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCity === city.id
                    ? "bg-blue-500 text-white"
                    : "text-gray-300 hover:bg-blue-500 hover:text-white"
                }`}
              >
                {city.name}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Service Centers Carousel - Full Width */}
      <div className="relative overflow-hidden py-20">
        {/* Background Image for Service Centers only */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/service-centers-bg.jpg"
            alt="Service Centers Background"
            fill
            className="object-cover opacity-90"
          />
          {/* Gradient overlay for top and bottom opacity */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          {/* Navigation Arrows - Only show if there are more than 3 items */}
          {filteredServiceCenters.length > 3 && (
            <>
              <motion.button
                onClick={prevSlide}
                className="absolute left-4 md:-left-20 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 md:p-4 rounded-full transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
              </motion.button>

              <motion.button
                onClick={nextSlide}
                className="absolute right-4 md:-right-20 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 md:p-4 rounded-full transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
              </motion.button>
            </>
          )}

          {/* Centers Container */}
          <div className="relative overflow-hidden">
            {filteredServiceCenters.length > 0 ? (
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`${selectedCity}-${currentSlide}`}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
                >
                  {filteredServiceCenters
                    .slice(currentSlide, currentSlide + 3)
                    .map((center) => (
                      <motion.div
                        key={center.id}
                        className="relative bg-transparent backdrop-blur-sm rounded-xl p-6 border border-blue-600"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="space-y-4">
                          <h3 className="text-xl font-bold text-white">
                            {center.name}
                          </h3>

                          <div className="space-y-2">
                            <div className="flex items-start space-x-2">
                              <MapPin className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                              <div>
                                <p className="text-gray-300 text-sm">
                                  {center.address}
                                </p>
                                <p className="text-gray-400 text-xs">
                                  {center.nearBy}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-start space-x-2">
                              <Clock className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                              <div>
                                <p className="text-gray-300 text-sm">
                                  Horario de atención
                                </p>
                                <p className="text-gray-400 text-xs">
                                  {center.schedule.weekdays}
                                </p>
                                <p className="text-gray-400 text-xs">
                                  {center.schedule.weekends}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </motion.div>
              </AnimatePresence>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">
                  No hay centros de servicio disponibles para esta ciudad.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
