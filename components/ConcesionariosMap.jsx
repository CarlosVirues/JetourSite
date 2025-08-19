"use client";

import { useState, useEffect, useRef } from "react";
import {
  Search,
  ChevronDown,
  ChevronUp,
  Phone,
  MapPin,
  Clock,
  X,
} from "lucide-react";
import { Loader } from "@googlemaps/js-api-loader";
import DistributorInfo from "./DistributorInfo";
import { motion, AnimatePresence } from "framer-motion";

export default function ConcesionariosMap() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCities, setExpandedCities] = useState({
    ambato: true,
    cuenca: false,
    guayaquil: false,
  });
  const [selectedDistributor, setSelectedDistributor] = useState(null);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const mapRef = useRef(null);

  const distributors = {
    ambato: [
      {
        id: 1,
        name: "Automotores Carlos Palacios",
        address: "Av. de los Capulies Frente al IESS.",
        phone: "02 2555 212 ext 306 – 307",
        mobile: "0986128980",
        hours: "8:00 a 18:30",
        status: "Cerrado",
        image: "/distributor-1.jpg",
        location: { lat: -1.2491, lng: -78.6168 }, // Ambato coordinates
      },
      {
        id: 2,
        name: "Automotores Carlos Palacios",
        address: "Av. de los Capulies Frente al IESS.",
        phone: "02 2555 212 ext 306 – 307",
        mobile: "0986128980",
        hours: "8:00 a 18:30",
        status: "Cerrado",
        image: "/distributor-1.jpg",
        location: { lat: -1.2491, lng: -78.6168 }, // Ambato coordinates
      },
    ],
    cuenca: [
      {
        id: 3,
        name: "Distribuidor Cuenca",
        address: "Av. Principal Cuenca",
        phone: "07 2555 212",
        mobile: "0986128981",
        hours: "8:00 a 18:30",
        status: "Abierto",
        image: "/distributor-2.jpg",
        location: { lat: -2.9006, lng: -79.0045 }, // Cuenca coordinates
      },
    ],
    guayaquil: [
      {
        id: 4,
        name: "Distribuidor Guayaquil",
        address: "Av. Principal Guayaquil",
        phone: "04 2555 212",
        mobile: "0986128982",
        hours: "8:00 a 18:30",
        status: "Cerrado",
        image: "/distributor-3.jpg",
        location: { lat: -2.1894, lng: -79.8891 }, // Guayaquil coordinates
      },
    ],
  };

  // Initialize Google Maps
  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey:
          process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "YOUR_API_KEY_HERE",
        version: "weekly",
      });

      try {
        const google = await loader.load();

        // Default center (Ecuador)
        const defaultCenter = { lat: -1.8312, lng: -78.1834 };

        const mapInstance = new google.maps.Map(mapRef.current, {
          center: defaultCenter,
          zoom: 7,
          styles: [
            {
              featureType: "all",
              elementType: "labels.text.fill",
              stylers: [{ color: "#7c93a3" }, { lightness: -10 }],
            },
            {
              featureType: "all",
              elementType: "labels.text.stroke",
              stylers: [{ color: "#000000" }, { lightness: 13 }],
            },
            {
              featureType: "administrative",
              elementType: "geometry.fill",
              stylers: [{ color: "#000000" }],
            },
            {
              featureType: "administrative",
              elementType: "geometry.stroke",
              stylers: [
                { color: "#144b53" },
                { lightness: 14 },
                { weight: 1.4 },
              ],
            },
            {
              featureType: "landscape",
              elementType: "all",
              stylers: [{ color: "#08304b" }],
            },
            {
              featureType: "poi",
              elementType: "geometry",
              stylers: [{ color: "#0c4152" }, { lightness: 5 }],
            },
            {
              featureType: "road.highway",
              elementType: "geometry.fill",
              stylers: [{ color: "#000000" }],
            },
            {
              featureType: "road.highway",
              elementType: "geometry.stroke",
              stylers: [{ color: "#0b434f" }, { lightness: 25 }],
            },
            {
              featureType: "road.arterial",
              elementType: "geometry.fill",
              stylers: [{ color: "#000000" }],
            },
            {
              featureType: "road.arterial",
              elementType: "geometry.stroke",
              stylers: [{ color: "#0b3d51" }, { lightness: 16 }],
            },
            {
              featureType: "road.local",
              elementType: "geometry",
              stylers: [{ color: "#000000" }],
            },
            {
              featureType: "transit",
              elementType: "all",
              stylers: [{ color: "#146474" }],
            },
            {
              featureType: "water",
              elementType: "all",
              stylers: [{ color: "#021019" }],
            },
          ],
        });

        setMap(mapInstance);
      } catch (error) {
        console.error("Error loading Google Maps:", error);
      }
    };

    if (mapRef.current) {
      initMap();
    }
  }, []);

  // Add markers when map is ready
  useEffect(() => {
    if (!map) return;

    // Clear existing markers
    markers.forEach((marker) => marker.setMap(null));

    // Add new markers for all distributors
    const newMarkers = [];
    Object.values(distributors)
      .flat()
      .forEach((distributor) => {
        const marker = new google.maps.Marker({
          position: distributor.location,
          map: map,
          title: distributor.name,
          icon: {
            url:
              "data:image/svg+xml;charset=UTF-8," +
              encodeURIComponent(`
              <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 10.5 12 20 12 20s12-9.5 12-20c0-6.627-5.373-12-12-12z" fill="#3B82F6"/>
                <circle cx="12" cy="12" r="6" fill="white"/>
              </svg>
            `),
            scaledSize: new google.maps.Size(24, 32),
          },
        });

        // Add click listener to marker
        marker.addListener("click", () => {
          setSelectedDistributor(distributor);
        });

        newMarkers.push(marker);
      });

    setMarkers(newMarkers);
  }, [map]);

  // Center map on selected distributor
  useEffect(() => {
    if (map && selectedDistributor) {
      map.setCenter(selectedDistributor.location);
      map.setZoom(15);
    }
  }, [selectedDistributor, map]);

  const toggleCity = (city) => {
    setExpandedCities((prev) => ({
      ...prev,
      [city]: !prev[city],
    }));
  };

  const handleDistributorClick = (distributor) => {
    setSelectedDistributor(distributor);
  };

  const filteredDistributors = Object.entries(distributors).reduce(
    (acc, [city, cityDistributors]) => {
      const filtered = cityDistributors.filter(
        (distributor) =>
          distributor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          distributor.address.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (filtered.length > 0) {
        acc[city] = filtered;
      }
      return acc;
    },
    {}
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const distributorVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-7xl mx-auto px-6 lg:px-12"
    >
      {/* Title */}
      <motion.div variants={itemVariants} className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl lg:text-4xl font-bold text-white mb-4"
        >
          Nuestro equipo de especialistas está en 26 puntos de servicio en todo
          el país.
        </motion.h2>
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section - Search and Distributors List */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-1 bg-gray-900 rounded-lg p-6"
        >
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative mb-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </motion.div>
            <input
              type="text"
              placeholder="Busca Tu Ubicación"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
          </motion.div>

          {/* Distributors List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            {Object.entries(filteredDistributors).map(
              ([city, cityDistributors], cityIndex) => (
                <motion.div
                  key={city}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + cityIndex * 0.1 }}
                  className="border border-gray-700 rounded-lg overflow-hidden"
                >
                  {/* City Header */}
                  <motion.button
                    onClick={() => toggleCity(city)}
                    className="w-full px-4 py-3 bg-gray-800 text-white font-semibold flex justify-between items-center hover:bg-gray-700 transition-colors"
                    whileHover={{ backgroundColor: "#374151" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="capitalize">{city}</span>
                    <motion.div
                      animate={{ rotate: expandedCities[city] ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </motion.button>

                  {/* Distributors in City */}
                  <AnimatePresence>
                    {expandedCities[city] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-gray-900 overflow-hidden"
                      >
                        {cityDistributors.map((distributor, index) => (
                          <motion.div
                            key={distributor.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className={`border-b border-gray-700 last:border-b-0 p-4 hover:bg-gray-800 cursor-pointer transition-colors ${
                              selectedDistributor?.id === distributor.id
                                ? "bg-blue-900/20 border-l-4 border-l-blue-500"
                                : ""
                            }`}
                            onClick={() => handleDistributorClick(distributor)}
                            whileHover={{ x: 5 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="text-gray-400 text-sm font-medium mb-2">
                              DISTRIBUIDOR
                            </div>
                            <h3 className="text-white font-semibold mb-2">
                              {distributor.name}
                            </h3>
                            <div className="text-gray-300 text-sm space-y-1">
                              <div className="flex items-center">
                                <motion.div
                                  whileHover={{ scale: 1.1 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <MapPin className="w-4 h-4 mr-2" />
                                </motion.div>
                                {distributor.address}
                              </div>
                              <div className="flex items-center">
                                <motion.div
                                  whileHover={{ scale: 1.1 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <Phone className="w-4 h-4 mr-2" />
                                </motion.div>
                                {distributor.phone} / {distributor.mobile}
                              </div>
                              <div className="flex items-center">
                                <motion.div
                                  whileHover={{ scale: 1.1 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <Clock className="w-4 h-4 mr-2" />
                                </motion.div>
                                <span
                                  className={
                                    distributor.status === "Cerrado"
                                      ? "text-red-400"
                                      : "text-green-400"
                                  }
                                >
                                  {distributor.status}
                                </span>
                                <span className="text-gray-400 ml-2">
                                  • {distributor.hours}
                                </span>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            )}
          </motion.div>
        </motion.div>

        {/* Right Section - Google Map */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-2 bg-gray-900 rounded-lg p-6 relative h-full"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            ref={mapRef}
            className="w-full h-full rounded-lg"
            style={{ minHeight: "400px" }}
          />
          <DistributorInfo
            distributor={selectedDistributor}
            onClose={() => setSelectedDistributor(null)}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
