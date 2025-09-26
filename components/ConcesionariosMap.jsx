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
    cuenca: [
      {
        id: 1,
        name: "Jetour Terminal Terrestre",
        address: "Av. España & Sebastián de Benalcazar., Esquina.",
        phone: "",
        mobile: "098 577 8754",
        hours: "8:00 a 18:30",
        status: "Abierto",
        image: "/distributor-cuenca-1.jpg",
        location: {
          lat: -2.89340771379905,
          lng: -78.9941836149093,
        },
        contact: "",
        map: null,
      },
      {
        id: 2,
        name: "Jetour Doce de Octubre",
        address:
          'Av. 12 de Octubre & Cristobal Colón., Concesionario "Grupo Roldán"., A 100 metros del Terminal Terrestre de Cuenca.',
        phone: "",
        mobile: "098 480 6673",
        hours: "8:00 a 18:30",
        status: "Abierto",
        image: "/distributor-cuenca-2.jpg",
        location: {
          lat: -2.91336040028869e16,
          lng: -79.0217509484293,
        },
        contact: "",
        map: null,
      },
    ],
    guayaquil: [
      {
        id: 3,
        name: "Jetour Juan Tanca Marengo",
        address:
          'Av. Juan Tanca Marengo & Ing. José A. Gómez., Concesionario "Grupo Roldán"., Al frente del Colegio "Americano" de Guayaquil.',
        phone: "",
        mobile: "099 451 8699",
        hours: "8:00 a 18:30",
        status: "Abierto",
        image: "/distributor-guayaquil-3.jpg",
        location: {
          lat: -2139561298172950.0,
          lng: -79.928049639801,
        },
        contact: "",
        map: null,
      },
      {
        id: 5,
        name: "Jetour Vía a Daule",
        address:
          'Km. 4 ½ Vía a Daule y Av. 17., Concesionario "Grupo Roldán"., Frente a "Mi Comisariato".',
        phone: "",
        mobile: "098 723 0797",
        hours: "8:00 a 18:30",
        status: "Abierto",
        image: "/distributor-guayaquil-5.jpg",
        location: {
          lat: -2.15966914566634,
          lng: -79.928587116395,
        },
        contact: "",
        map: null,
      },
      {
        id: 6,
        name: "Jetour Américas",
        address: "Av. de las Américas y Justino Cornejo.",
        phone: "",
        mobile: "098 572 7913",
        hours: "8:00 a 18:30",
        status: "Abierto",
        image: "/distributor-guayaquil-6.jpg",
        location: {
          lat: -2.16190748938581,
          lng: -79.8909064214684,
        },
        contact: "",
        map: null,
      },
    ],
    machala: [
      {
        id: 4,
        name: "Jetour Machala",
        address:
          'Av. 25 de Junio 1/2 y Vía a Pasaje., A 200 metros de "Ciudad del Sol".',
        phone: "",
        mobile: "098 725 7461",
        hours: "8:00 a 18:30",
        status: "Abierto",
        image: "/distributor-machala-4.jpg",
        location: {
          lat: -3.27761381384434,
          lng: -79.9344141401797,
        },
        contact: "",
        map: null,
      },
    ],
    quito: [
      {
        id: 7,
        name: "Jetour Tumbaco",
        address:
          'Av. Oswaldo Guayasamín., Concesionario "Grupo Roldán"., Frente a "El Hornero".',
        phone: "",
        mobile: "098 086 0728",
        hours: "8:00 a 18:30",
        status: "Abierto",
        image: "/distributor-quito-7.jpg",
        location: {
          lat: -2.14965,
          lng: -78.3905918490184,
        },
        contact: "",
        map: null,
      },
      {
        id: 8,
        name: "Jetour Seis de Diciembre",
        address: "Av. Seis de Diciembre y Av. Diez de Agosto., Esquina.",
        phone: "",
        mobile: "093 948 5628",
        hours: "8:00 a 18:30",
        status: "Abierto",
        image: "/distributor-quito-8.jpg",
        location: {
          lat: -1.21281,
          lng: -78.4796423771644,
        },
        contact: "",
        map: null,
      },
      {
        id: 9,
        name: "Jetour Carapungo",
        address:
          'Av. Simón Bolívar y N69H., Concesionario "Grupo Roldán"., A una cuadra del CC "Portal Shopping", sentido Norte-Sur.',
        phone: "",
        mobile: "098 285 7679",
        hours: "8:00 a 18:30",
        status: "Abierto",
        image: "/distributor-quito-9.jpg",
        location: {
          lat: -1.11516,
          lng: -78.4581901956712,
        },
        contact: "",
        map: null,
      },
      {
        id: 10,
        name: "Jetour Sangolquí",
        address:
          'Av. Shyris & Vía a Amaguaña., Concesionario "Grupo Roldán"., Diagonal a la escuela "Riobamba".',
        phone: "",
        mobile: "093 976 1755",
        hours: "8:00 a 18:30",
        status: "Abierto",
        image: "/distributor-quito-10.jpg",
        location: {
          lat: -3.46006,
          lng: -78.4567991543767,
        },
        contact: "",
        map: null,
      },
      {
        id: 11,
        name: "Jetour Guamaní",
        address:
          'Av. Pedro Vicente Maldonado y Calle F., Concesionario "Grupo Roldán".',
        phone: "",
        mobile: "098 304 9733",
        hours: "8:00 a 18:30",
        status: "Abierto",
        image: "/distributor-quito-11.jpg",
        location: {
          lat: -3.51649,
          lng: -78.5493491018494,
        },
        contact: "",
        map: null,
      },
    ],
    ibarra: [
      {
        id: 12,
        name: "Jetour Ibarra",
        address:
          'Sector Chorlavi, Carretera Panamericana, Concesionario "Grupo Roldán"., Diagonal a la gasolinera "Petro World".',
        phone: "",
        mobile: "098 889 9599",
        hours: "8:00 a 18:30",
        status: "Abierto",
        image: "/distributor-ibarra-12.jpg",
        location: {
          lat: -3.51801,
          lng: -78.5492059337632,
        },
        contact: "",
        map: null,
      },
    ],
    loja: [
      {
        id: 13,
        name: "Jetour Loja",
        address:
          'Av Isidro Ayora y Velazco Ibarra., Concesionario "Grupo Roldán"., Al frente del Concesionario "Salvador Bustamante Celi".',
        phone: "",
        mobile: "098-655-6875",
        hours: "8:00 a 18:30",
        status: "Abierto",
        image: "/distributor-loja-13.jpg",
        location: {
          lat: -3.97633892019208,
          lng: -79.2025767838636,
        },
        contact: "",
        map: null,
      },
    ],
    manta: [
      {
        id: 14,
        name: "Jetour Manta",
        address:
          'Av. 4 de Noviembre y Calle 320., Concesionario "Grupo Roldán"., Esquina.',
        phone: "",
        mobile: "099 976 6622",
        hours: "8:00 a 18:30",
        status: "Abierto",
        image: "/distributor-manta-14.jpg",
        location: {
          lat: -3.97634815223686,
          lng: -79.2025565925374,
        },
        contact: "",
        map: null,
      },
    ],
    riobamba: [
      {
        id: 15,
        name: "Jetour Riobamba",
        address:
          'Av Lizarzaburo y Bolivar Esquina, Concesionario "Grupo Roldán"., Frente a "Terpel".',
        phone: "",
        mobile: "0985305363",
        hours: "8:00 a 18:30",
        status: "Abierto",
        image: "/distributor-riobamba-15.jpg",
        location: {
          lat: -1.6420328,
          lng: -78.6768569,
        },
        contact: "",
        map: null,
      },
    ],
  };

  // const distributors = {
  //   ambato: [
  //     {
  //       id: 1,
  //       name: "Automotores Carlos Palacios",
  //       address: "Av. de los Capulies Frente al IESS.",
  //       phone: "02 2555 212 ext 306 – 307",
  //       mobile: "0986128980",
  //       hours: "8:00 a 18:30",
  //       status: "Cerrado",
  //       image: "/distributor-1.jpg",
  //       location: { lat: -1.2491, lng: -78.6168 }, // Ambato coordinates
  //     },
  //     {
  //       id: 2,
  //       name: "Automotores Carlos Palacios",
  //       address: "Av. de los Capulies Frente al IESS.",
  //       phone: "02 2555 212 ext 306 – 307",
  //       mobile: "0986128980",
  //       hours: "8:00 a 18:30",
  //       status: "Cerrado",
  //       image: "/distributor-1.jpg",
  //       location: { lat: -1.2491, lng: -78.6168 }, // Ambato coordinates
  //     },
  //   ],
  //   cuenca: [
  //     {
  //       id: 3,
  //       name: "Distribuidor Cuenca",
  //       address: "Av. Principal Cuenca",
  //       phone: "07 2555 212",
  //       mobile: "0986128981",
  //       hours: "8:00 a 18:30",
  //       status: "Abierto",
  //       image: "/distributor-2.jpg",
  //       location: { lat: -2.9006, lng: -79.0045 }, // Cuenca coordinates
  //     },
  //   ],
  //   guayaquil: [
  //     {
  //       id: 4,
  //       name: "Distribuidor Guayaquil",
  //       address: "Av. Principal Guayaquil",
  //       phone: "04 2555 212",
  //       mobile: "0986128982",
  //       hours: "8:00 a 18:30",
  //       status: "Cerrado",
  //       image: "/distributor-3.jpg",
  //       location: { lat: -2.1894, lng: -79.8891 }, // Guayaquil coordinates
  //     },
  //   ],
  // };

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
                              </div>
                              {distributor.hours_weekdays && (
                                <div className="flex items-center text-gray-400 text-sm">
                                  <Clock className="w-4 h-4 mr-2" />
                                  <span>
                                    LUN - VIE: {distributor.hours_weekdays}
                                  </span>
                                </div>
                              )}
                              {distributor.hours_saturday && (
                                <div className="flex items-center text-gray-400 text-sm">
                                  <Clock className="w-4 h-4 mr-2" />
                                  <span>SÁB: {distributor.hours_saturday}</span>
                                </div>
                              )}
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
