"use client";

import { useState, useEffect, useRef, useMemo } from "react";
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
import { motion, AnimatePresence } from "framer-motion";

// Función para obtener datos por defecto si no hay datos de Sanity (FALLBACK - NO SE USA ACTUALMENTE)
function getDefaultDistributors() {
  return {
    cuenca: [
      {
        id: 1,
        name: "Jetour Terminal Terrestre",
        address: "Av. España & Sebastián de Benalcazar., Esquina.",
        phone: "",
        mobile: "098 577 8754",
        hours_weekdays: "08:30 - 18:30",
        hours_saturday: "08:30 - 14:00",
        status: "Abierto",
        image: "/distributor-cuenca-1.jpg",
        location: {
          lat: -2.893555,
          lng: -78.994299,
        },
        contact: "",
        map: null,
      },
      {
        id: 2,
        name: "Jetour 12 de Octubre",
        address:
          'Av. 12 de Octubre & Cristobal Colón., Concesionario "Grupo Roldán"., A 100 metros del Terminal Terrestre de Cuenca.',
        phone: "",
        mobile: "098 480 6673",
        hours_weekdays: "08:30 - 18:30",
        hours_saturday: "08:30 - 14:00",
        status: "Abierto",
        image: "/distributor-cuenca-2.jpg",
        location: {
          lat: -2.91364,
          lng: -79.021688,
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
        hours_weekdays: "08:30 - 18:30",
        hours_saturday: "08:30 - 14:00",
        status: "Abierto",
        image: "/distributor-guayaquil-3.jpg",
        location: {
          lat: -2.1393611,
          lng: -79.9280278,
        },
        contact: "",
        map: null,
      },
      {
        id: 11,
        name: "Jetour El Pan",
        address:
          'Av. Miguel Yunez S/N, 5 Km 14, Samborondón, Concesionario "Grupo Roldán".',
        phone: "",
        mobile: "095 921 7323",
        hours_weekdays: "08:30 - 18:30",
        hours_saturday: "08:30 - 14:00",
        status: "Abierto",
        image: "/distributor-guayaquil-11.jpg",
        location: {
          lat: -2.0406915,
          lng: -79.8517941,
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
        hours_weekdays: "08:30 - 18:30",
        hours_saturday: "08:30 - 14:00",
        status: "Abierto",
        image: "/distributor-guayaquil-5.jpg",
        location: {
          lat: -2.1598609,
          lng: -79.9303457,
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
        hours_weekdays: "08:30 - 18:30",
        hours_saturday: "08:30 - 14:00",
        status: "Abierto",
        image: "/distributor-guayaquil-6.jpg",
        location: {
          lat: -2.1620684,
          lng: -79.8910852,
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
        hours_weekdays: "08:30 - 18:30",
        hours_saturday: "08:30 - 14:00",
        status: "Abierto",
        image: "/distributor-machala-4.jpg",
        location: {
          lat: -3.2777041,
          lng: -79.9346419,
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
        hours_weekdays: "08:30 - 18:30",
        hours_saturday: "08:30 - 14:00",
        status: "Abierto",
        image: "/distributor-quito-7.jpg",
        location: {
          lat: -0.2143709,
          lng: -78.3915218,
        },
        contact: "",
        map: null,
      },
      {
        id: 8,
        name: "Jetour 6 de Diciembre",
        address: "Av. 6 de Diciembre y Av. 10 de Agosto., Esquina.",
        phone: "",
        mobile: "093 948 5628",
        hours_weekdays: "08:30 - 18:30",
        hours_saturday: "08:30 - 14:00",
        status: "Abierto",
        image: "/distributor-quito-8.jpg",
        location: {
          lat: -0.1209912,
          lng: -78.4801387,
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
        hours_weekdays: "08:30 - 18:30",
        hours_saturday: "08:30 - 14:00",
        status: "Abierto",
        image: "/distributor-quito-9.jpg",
        location: {
          lat: -0.1116535,
          lng: -78.4581169,
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
        hours_weekdays: "08:30 - 18:30",
        hours_saturday: "08:30 - 14:00",
        status: "Abierto",
        image: "/distributor-quito-10.jpg",
        location: {
          lat: -0.3458435,
          lng: -78.4572162,
        },
        contact: "",
        map: null,
      },
      {
        id: 17,
        name: "Jetour Granados",
        address:
          "Av. de los Granados y Vía a Nayón, Esquina., Frente al ECOPARK.",
        phone: "",
        // TODO: contacto PENDIENTE — el cliente enviará el número
        mobile: "",
        hours_weekdays: "08:30 - 18:30",
        hours_saturday: "08:30 - 14:00",
        status: "Abierto",
        // TODO: foto propia del local (por ahora reusa imagen de Quito)
        image: "/distributor-quito-7.jpg",
        // Coordenadas exactas provistas por el cliente
        location: {
          lat: -0.16271676872760302,
          lng: -78.46277150118105,
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
        hours_weekdays: "08:30 - 18:30",
        hours_saturday: "08:30 - 14:00",
        status: "Abierto",
        image: "/distributor-ibarra-12.jpg",
        location: {
          lat: 0.3373862,
          lng: -78.160687,
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
        hours_weekdays: "08:30 - 18:30",
        hours_saturday: "08:30 - 14:00",
        status: "Abierto",
        image: "/distributor-loja-13.jpg",
        location: {
          lat: -3.9762776,
          lng: -79.2027584,
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
        hours_weekdays: "08:30 - 18:30",
        hours_saturday: "08:30 - 14:00",
        status: "Abierto",
        image: "/distributor-manta-14.jpg",
        location: {
          lat: -0.973852,
          lng: -80.700257,
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
        hours_weekdays: "08:30 - 18:30",
        hours_saturday: "08:30 - 14:00",
        status: "Abierto",
        image: "/distributor-riobamba-15.jpg",
        location: {
          lat: -1.6419167,
          lng: -78.6768056,
        },
        contact: "",
        map: null,
      },
      {
        id: 16,
        name: "Jetour Riobamba La Campana",
        address:
          "Av. Canónigo Ramos y Pedro León Donoso., A una cuadra del monumento a La Campana.",
        phone: "",
        mobile: "098 768 5621",
        hours_weekdays: "08:30 - 18:30",
        hours_saturday: "09:00 - 14:00",
        status: "Abierto",
        // TODO: foto propia del local (por ahora reusa la imagen de Riobamba)
        image: "/distributor-riobamba-15.jpg",
        // Coordenadas aproximadas sobre Av. Canónigo Ramos (norte de Riobamba).
        // TODO: verificar con Google Maps la ubicación exacta del local.
        location: {
          lat: -1.6475,
          lng: -78.67,
        },
        contact: "",
        map: null,
      },
    ],
  };
}

// Transforma el objeto de getDefaultDistributors() (agrupado por clave de ciudad)
// al shape { cityName, distributors } que consume el componente (igual que Sanity).
function getDefaultCities() {
  const labels = {
    cuenca: "Cuenca",
    guayaquil: "Guayaquil",
    machala: "Machala",
    riobamba: "Riobamba",
    manta: "Manta",
    loja: "Loja",
    ibarra: "Ibarra",
    quito: "Quito",
  };
  const byCity = getDefaultDistributors();
  return Object.entries(byCity).map(([key, distributors]) => ({
    cityName: labels[key] || key,
    distributors,
  }));
}

export default function ConcesionariosMap({
  title = "Nuestro equipo de especialistas está en 26 puntos de servicio en todo el país.",
  cities: citiesProp = [],
}) {
  // Si Sanity trae datos, se usan; si viene vacío (concesionariosPage no migrado a Sanity),
  // caemos al listado hardcoded. Concesionarios = deuda técnica (ver MIGRACION-STATUS.md).
  const cities = useMemo(
    () => (citiesProp.length > 0 ? citiesProp : getDefaultCities()),
    [citiesProp]
  );

  // Crear array plano de todos los distribuidores con ID único
  const allDistributors = useMemo(() => {
    if (cities.length === 0) return [];

    return cities.flatMap((city, cityIndex) =>
      city.distributors.map((distributor, distributorIndex) => ({
        ...distributor,
        cityName: city.cityName,
        cityId: city.cityName.toLowerCase(),
        uniqueId: `${city.cityName.toLowerCase()}-${distributorIndex}`, // ID único basado en ciudad y posición
      }))
    );
  }, [cities]);

  // Configurar ciudades expandidas dinámicamente usando useMemo
  const initialExpandedCities = useMemo(() => {
    if (cities.length === 0) return {};

    return cities.reduce((acc, city, index) => {
      acc[city.cityName.toLowerCase()] = index === 0; // Solo la primera ciudad expandida
      return acc;
    }, {});
  }, [cities]);

  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCities, setExpandedCities] = useState(initialExpandedCities);
  const [selectedDistributor, setSelectedDistributor] = useState(null);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [infoWindows, setInfoWindows] = useState([]);
  const [markerMap, setMarkerMap] = useState(new Map()); // Map distributor.id -> {marker, infoWindow}
  const mapRef = useRef(null);
  // Solo intentamos cargar Google Maps si hay API key. Sin key ocultamos el mapa (en vez
  // de mostrar el recuadro de error de Google) y el listado ocupa todo el ancho.
  // Al cargar NEXT_PUBLIC_GOOGLE_MAPS_API_KEY en Vercel y redeployar, el mapa reaparece solo.
  const hasMapsKey = Boolean(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);

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

    if (hasMapsKey && mapRef.current) {
      initMap();
    }
  }, [hasMapsKey]);

  // Add markers when map is ready or distributors change
  useEffect(() => {
    if (!map || allDistributors.length === 0) return;

    // Clear existing markers and info windows
    markers.forEach((marker) => marker.setMap(null));
    infoWindows.forEach((infoWindow) => infoWindow.close());
    markerMap.clear();

    // Add new markers for all distributors from Sanity
    const newMarkers = [];
    const newInfoWindows = [];
    const newMarkerMap = new Map();

    allDistributors.forEach((distributor) => {
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

      // Create InfoWindow content
      const infoWindowContent = `
          <div style="
            color: black; 
            padding: 16px; 
            border-radius: 8px; 
            min-width: 280px;
            font-family: system-ui, -apple-system, sans-serif;
          ">
            <h3 style="
              margin: 0 0 12px 0; 
              font-size: 16px; 
              font-weight: 600;
              color: #3b82f6;
            ">${distributor.name}</h3>
            
            <div style="margin-bottom: 8px; display: flex; align-items: flex-start; font-size: 14px;">
              <span style="color: #9ca3af; margin-right: 8px;">📍</span>
              <span style="color: #000;">${distributor.address}</span>
            </div>
            
            <div style="margin-bottom: 8px; display: flex; align-items: center; font-size: 14px;">
              <span style="color: #9ca3af; margin-right: 8px;">📞</span>
              <span style="color: #000;">${distributor.mobile || distributor.phone || "Contacto próximamente"}</span>
            </div>
            
            <div style="margin-bottom: 8px; display: flex; align-items: center; font-size: 14px;">
              <span style="color: #9ca3af; margin-right: 8px;">🕒</span>
              <span style="color: ${
                distributor.status === "Abierto" ? "#10b981" : "#ef4444"
              };">
                ${distributor.status}
              </span>
            </div>
            
            ${
              distributor.hours_weekdays
                ? `
              <div style="margin-bottom: 4px; font-size: 13px; color: #9ca3af;">
                LUN - VIE: ${distributor.hours_weekdays}
              </div>
            `
                : ""
            }
            
            ${
              distributor.hours_saturday
                ? `
              <div style="font-size: 13px; color: #9ca3af;">
                SÁB: ${distributor.hours_saturday}
              </div>
            `
                : ""
            }
          </div>
        `;

      const infoWindow = new google.maps.InfoWindow({
        content: infoWindowContent,
      });

      // Add click listener to marker to show InfoWindow
      marker.addListener("click", () => {
        // Close all other info windows using the map
        newMarkerMap.forEach(({ infoWindow: iw }) => iw.close());

        // Open this info window
        infoWindow.open(map, marker);

        // Set selected distributor for sidebar highlight
        setSelectedDistributor(distributor);

        // Center map on marker
        map.setCenter(distributor.location);
        map.setZoom(15);
      });

      newMarkers.push(marker);
      newInfoWindows.push(infoWindow);

      // Store in map for direct access by distributor uniqueId
      newMarkerMap.set(distributor.uniqueId, {
        marker,
        infoWindow,
        distributor,
      });
    });

    setMarkers(newMarkers);
    setInfoWindows(newInfoWindows);
    setMarkerMap(newMarkerMap);
  }, [map, allDistributors]); // Depend on map and allDistributors from Sanity

  // Map centering is now handled directly in click handlers

  const toggleCity = (city) => {
    setExpandedCities((prev) => ({
      ...prev,
      [city]: !prev[city],
    }));
  };

  const handleDistributorClick = (distributor, cityIndex, distributorIndex) => {
    setSelectedDistributor(distributor);

    // Create the same uniqueId that was used when creating the marker
    const uniqueId = `${distributor.cityName?.toLowerCase() || cities[cityIndex]?.cityName?.toLowerCase()}-${distributorIndex}`;

    // Find and open the corresponding InfoWindow using the markerMap
    if (map && markerMap.has(uniqueId)) {
      // Close all info windows first
      markerMap.forEach(({ infoWindow }) => infoWindow.close());

      // Get the specific marker and info window for this distributor
      const { marker, infoWindow } = markerMap.get(uniqueId);

      // Open the info window
      infoWindow.open(map, marker);

      // Center map on the marker
      map.setCenter(distributor.location);
      map.setZoom(15);
    }
  };

  // Filtrar distribuidores basado en el término de búsqueda
  const filteredCities = useMemo(() => {
    if (!cities.length) return [];

    // Si no hay término de búsqueda, mostrar todas las ciudades
    if (!searchTerm.trim()) return cities;

    return cities
      .map((city) => {
        // Si el término coincide con el nombre de la ciudad, mostrar todos sus distribuidores
        const cityMatches = city.cityName.toLowerCase().includes(searchTerm.toLowerCase());
        
        return {
          ...city,
          distributors: cityMatches 
            ? city.distributors // Mostrar todos si la ciudad coincide
            : city.distributors.filter(
                (distributor) =>
                  distributor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  distributor.address.toLowerCase().includes(searchTerm.toLowerCase())
              ),
        };
      })
      .filter((city) => city.distributors.length > 0);
  }, [cities, searchTerm]);

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
          {title}
        </motion.h2>
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section - Search and Distributors List */}
        <motion.div
          variants={itemVariants}
          className={`${hasMapsKey ? "lg:col-span-1" : "lg:col-span-3"} bg-gray-900 rounded-lg p-6`}
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
            {cities.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-400">
                  No hay datos de concesionarios disponibles.
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Configure los datos desde Sanity Studio.
                </p>
              </div>
            ) : filteredCities.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-400">
                  No se encontraron concesionarios que coincidan con tu
                  búsqueda.
                </p>
              </div>
            ) : (
              filteredCities.map((city, cityIndex) => (
                <motion.div
                  key={city.cityName}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + cityIndex * 0.1 }}
                  className="border border-gray-700 rounded-lg overflow-hidden"
                >
                  {/* City Header */}
                  <motion.button
                    onClick={() => toggleCity(city.cityName.toLowerCase())}
                    className="w-full px-4 py-3 bg-gray-800 text-white font-semibold flex justify-between items-center hover:bg-gray-700 transition-colors"
                    whileHover={{ backgroundColor: "#374151" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="capitalize">{city.cityName}</span>
                    <motion.div
                      animate={{
                        rotate: expandedCities[city.cityName.toLowerCase()]
                          ? 180
                          : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </motion.button>

                  {/* Distributors in City */}
                  <AnimatePresence>
                    {expandedCities[city.cityName.toLowerCase()] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-gray-900 overflow-hidden"
                      >
                        {city.distributors.map(
                          (distributor, distributorIndex) => {
                            const uniqueId = `${city.cityName.toLowerCase()}-${distributorIndex}`;
                            return (
                              <motion.div
                                key={uniqueId}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.4,
                                  delay: distributorIndex * 0.1,
                                }}
                                className={`border-b border-gray-700 last:border-b-0 p-4 hover:bg-gray-800 cursor-pointer transition-colors ${
                                  selectedDistributor?.uniqueId === uniqueId
                                    ? "bg-blue-900/20 border-l-4 border-l-blue-500"
                                    : ""
                                }`}
                                onClick={() =>
                                  handleDistributorClick(
                                    distributor,
                                    cityIndex,
                                    distributorIndex
                                  )
                                }
                                whileHover={{ x: 5 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                {/* <div className="text-gray-400 text-sm font-medium mb-2">
                              DISTRIBUIDOR
                            </div> */}
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
                                    {distributor.phone || distributor.mobile
                                      ? [distributor.phone, distributor.mobile]
                                          .filter(Boolean)
                                          .join(" / ")
                                      : "Contacto próximamente"}
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
                                      <span>
                                        SÁB: {distributor.hours_saturday}
                                      </span>
                                    </div>
                                  )}
                                </div>
                              </motion.div>
                            );
                          }
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))
            )}
          </motion.div>
        </motion.div>

        {/* Right Section - Google Map (solo si hay API key configurada) */}
        {hasMapsKey && (
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
            {/* Info is now shown directly on map markers via InfoWindows */}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
