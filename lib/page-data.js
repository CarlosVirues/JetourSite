// Centralized page data configuration
// This file contains all the data for each page to make it easy to maintain and modify

// Hero configurations
import { getHeroData } from "./hero-data.js";

// Vehicle models data
import { vehicleModels } from "./vehicle-models.js";

// Video gallery data
export const videoGalleryData = {
  home: {
    title: "JETOUR en Ecuador y el mundo",
    videos: [
      {
        id: 1,
        title: "Jetour x Driving to Mars",
        thumbnail: "/image-jetour-demo.jpg",
        views: "Leer más",
        type: "image",
      },
      {
        id: 2,
        title:
          "Reseña del Jetour T2 Beyond 2.0T XWD 2025: ¿Más de lo que parece?",
        thumbnail: "/video-jetour-demo.jpg",
        videoUrl: "https://www.youtube.com/watch?v=8sb-6s4Brmo",
        views: "Ver video",
        type: "video",
      },
      {
        id: 3,
        title: "Apuesta por el Dashing ll Jetour Ecuador",
        thumbnail: "/video-jetour-demo.jpg",
        videoUrl: "https://www.youtube.com/watch?v=NlTGmkVsQ48",
        views: "Ver video",
        type: "video",
      },
    ],
  },
  // Videos específicos para páginas de vehículos
  vehiculos: {
    title: "Videos del Modelo",
    videos: [
      {
        id: 1,
        title: "Test Drive del Modelo",
        thumbnail: "/video-jetour-demo.jpg",
        videoUrl: "https://youtube.com/watch?v=vehiculo1",
        views: "Ver video",
        type: "video",
      },
      {
        id: 2,
        title: "Características del Modelo",
        thumbnail: "/image-jetour-demo.jpg",
        views: "Leer más",
        type: "image",
      },
    ],
  },
};

// Global Stats data
export const globalStatsData = {
  home: {
    stats: [
      {
        id: 1,
        number: "1M+",
        label: "Vehículos vendidos",
        description: "En más de 80 países",
        backgroundVideo: "/video/global-stats-1.mp4",
        backgroundImage: "/global-stats-1.jpg",
      },
      {
        id: 2,
        number: "500+",
        label: "Centros de servicio",
        description: "Red mundial de soporte",
        backgroundVideo: "/video/global-stats-2.mp4",
        backgroundImage: "/global-stats-2.jpg",
      },
      {
        id: 3,
        number: "25+",
        label: "Años de experiencia",
        description: "Innovación constante",
        backgroundVideo: "/video/global-stats-3.mp4",
        backgroundImage: "/global-stats-3.jpg",
      },
    ],
  },
};

// Vehicle Showcase data
export const vehicleShowcaseData = {
  home: {
    title: "Nuestros Modelos",
    subtitle: "Descubre la gama completa de vehículos JETOUR",
    vehicles: [
      {
        id: "t1",
        name: "T1",
        image: "/models/model-t1.jpg",
        description: "El perfecto equilibrio entre estilo y rendimiento",
      },
      {
        id: "t2-phev",
        name: "T2 PHEV",
        image: "/models/model-t2.jpg",
        description: "Tecnología híbrida para un futuro sostenible",
      },
      {
        id: "x50",
        name: "X50",
        image: "/models/model-x50.jpg",
        description: "SUV compacto con personalidad única",
      },
      {
        id: "x70-sport",
        name: "X70 Sport",
        image: "/models/model-x70.jpg",
        description: "La experiencia deportiva que buscabas",
      },
      {
        id: "x70-plus",
        name: "X70 PLUS",
        image: "/models/model-x70.jpg",
        description: "Máximo espacio y comodidad para toda la familia",
      },
      {
        id: "dashing",
        name: "DASHING",
        image: "/models/model-t1.jpg", // Placeholder
        description: "El futuro de la movilidad ya está aquí",
      },
      {
        id: "g700",
        name: "G700",
        image: "/models/model-g700.jpg", // Placeholder
        description: "Rendimiento Todoterreno Excepcional",
      },
    ],
  },
};

// Quote Form data
export const quoteFormData = {
  home: {
    title: "Solicita tu Cotización",
    subtitle: "Obtén información personalizada sobre el modelo que te interesa",
    carModels: [
      { id: "t1", name: "T1" },
      { id: "t2-phev", name: "T2 PHEV" },
      { id: "x50", name: "X50" },
      { id: "x70-sport", name: "X70 Sport" },
      { id: "x70-plus", name: "X70 Plus" },
      { id: "dashing", name: "Dashing" },
    ],
  },
};

// Roldan Section data
export const roldanSectionData = {
  home: {
    title: "En Ecuador, Jetour tiene el respaldo de Grupo Roldán.",
    backgroundImage: "/roldan-section-bg.jpg",
    logo: "/logo-roldan-home.png",
    features: [
      {
        icon: "🏢",
        title: "Distribuidor Oficial",
        description: "Representante exclusivo de JETOUR en Ecuador",
      },
      {
        icon: "🔧",
        title: "Servicio Técnico",
        description: "Red de talleres especializados y técnicos certificados",
      },
      {
        icon: "🚗",
        title: "Venta y Postventa",
        description:
          "Acompañamiento completo durante todo el ciclo de vida del vehículo",
      },
      {
        icon: "📞",
        title: "Atención 24/7",
        description: "Soporte y asistencia cuando más lo necesites",
      },
    ],
  },
};

// Jetour Life data
export const jetourLifeData = {
  home: {
    title: "JETOUR Life",
    subtitle: "Más que un vehículo, un estilo de vida",
    description:
      "Únete a la comunidad JETOUR y descubre un mundo de experiencias, aventuras y conexiones que van más allá de la conducción.",
    cta: {
      text: "Únete a JETOUR Life",
      link: "/jetour-life",
    },
  },
};

// Contact page data
export const contactPageData = {
  contacto: {
    hero: {
      backgroundImage: "/bg-contacto.jpg",
      title: "Contáctanos",
      subtitle: "Estamos aquí para ayudarte",
      showScrollIndicator: false,
      height: "h-screen",
    },
    contactInfo: {
      title: "Información de Contacto",
      items: [
        {
          icon: "📍",
          title: "Dirección",
          content: "Av. España 8-99 y Sevilla, Diagonal al Cuerpo de Bomberos",
          city: "Quito, Ecuador",
        },
        {
          icon: "📞",
          title: "Teléfono",
          content: "072807317",
          extensions: "EXT 1511/1508/1509/1514",
        },
        {
          icon: "✉️",
          title: "Email",
          content: "info@jetour.com.ec",
        },
        {
          icon: "🕒",
          title: "Horarios",
          content: "Lunes a Viernes: 8:00 AM - 6:00 PM",
          weekend: "Sábados: 8:00 AM - 2:00 PM",
        },
      ],
    },
  },
};

// Postventa page data
export const postventaPageData = {
  postventa: {
    hero: {
      backgroundImage: "/bg-postventa.jpg",
      title: "Postventa",
      subtitle: "Servicio y mantenimiento de excelencia",
      showScrollIndicator: true,
      height: "h-screen",
    },
    services: [
      {
        title: "Mantenimiento Preventivo",
        description:
          "Mantén tu JETOUR en perfectas condiciones con nuestro servicio de mantenimiento preventivo.",
        image: "/mechanic1.jpg",
      },
      {
        title: "Reparaciones Especializadas",
        description:
          "Técnicos certificados y repuestos originales para cualquier reparación.",
        image: "/mechanic2.jpg",
      },
      {
        title: "Repuestos Originales",
        description:
          "Garantiza el mejor rendimiento con repuestos originales JETOUR.",
        image: "/parts1.jpg",
      },
    ],
  },
};

// Concesionarios page data
export const concesionariosPageData = {
  concesionarios: {
    hero: {
      backgroundImage: "/bg-concesionarios.jpg",
      title: "Concesionarios",
      subtitle: "Encuentra tu concesionario más cercano",
      showScrollIndicator: true,
      height: "h-96 lg:h-[400px]",
    },
    distributors: [
      {
        name: "Grupo Roldán - Quito",
        address: "Av. España 8-99 y Sevilla, Diagonal al Cuerpo de Bomberos",
        phone: "072807317",
        email: "quito@gruporoldan.com.ec",
        coordinates: { lat: -0.2295, lng: -78.5249 },
      },
      // Agregar más concesionarios aquí
    ],
  },
};

// Noticias page data
export const noticiasPageData = {
  noticias: {
    hero: {
      backgroundImage: "/bg-news.jpg",
      title: "Noticias",
      subtitle: "Mantente al día con las últimas novedades de JETOUR",
      showScrollIndicator: true,
      height: "h-screen",
    },
    featuredNews: {
      title: "Noticia Destacada",
      articles: [
        {
          id: 1,
          title: "JETOUR presenta su nueva gama de vehículos eléctricos",
          excerpt:
            "La marca china continúa innovando en el sector de la movilidad sostenible...",
          image: "/articles/article1.jpg",
          date: "2024-01-15",
          category: "Innovación",
        },
        {
          id: 2,
          title: "Grupo Roldán inaugura nuevo centro de servicio en Quito",
          excerpt:
            "El nuevo centro cuenta con tecnología de punta y técnicos especializados...",
          image: "/articles/article2.jpg",
          date: "2024-01-10",
          category: "Servicio",
        },
      ],
    },
  },
};

// Live Room page data
export const liveroomPageData = {
  liveroom: {
    hero: {
      backgroundImage: "/bg-liveroom.jpg",
      title: "Live Room",
      subtitle: "Descubre el Suv que esta redescubriendo el futuro",
      showScrollIndicator: true,
      height: "h-screen",
    },
    quoteForm: {},
    globalStats: {},
  },
};

// Vehicle Model Pages data - Estructura específica para cada modelo
export const vehicleModelPagesData = {
  t1: {
    hero: {
      backgroundImage: "/models/hero/t1-hero.jpg", // Fallback image
      backgroundVideo: "https://storage.googleapis.com/xiyimgengine/jetour/hero/banner-t1.mp4",
      vehicleName: "T1",
      vehicleDescription: "Apuesta por un 4x4 que destaca",
      height: "h-screen",
      logoImage: "/models/t1/t1-logo.png",
      logoAlt: "T1 Logo",
      highlights: [
        {
          id: 1,
          text: "OFF ROAD 4x4 XWD"
        },
        {
          id: 2,
          text: "Motor 2.0L TGDI 250 Hp"
        },
        {
          id: 3,
          text: "Techo Panorámico"
        },
        {
          id: 4,
          text: "Sistema Audio SONY"
        }
      ]
    },
    videoGallery: {
      title: "Mira el JETOUR T1 en Acción",
      videos: [
        {
          id: 1,
          title: "Test Drive JETOUR T1 - Potencia y Versatilidad",
          thumbnail: "/models/t1/t1-video-1.jpg",
          videoUrl: "https://www.youtube.com/watch?v=U6jMLFob_-4",
          views: "Ver video",
          type: "video",
        },
        {
          id: 2,
          title: "Características del JETOUR T1",
          thumbnail: "/models/t1/t1-video-1.jpg",
          videoUrl: "https://www.youtube.com/watch?v=8sb-6s4Brmo",
          views: "Ver video",
          type: "video",
        },
      ],
    },
    vehicleGallery: {
      title: "Descubre su",
      subtitle: "espíritu indomable",
      images: [
        {
          id: 1,
          src: "/models/t1/t1-gallery-1.jpg",
          alt: "JETOUR T1 vista frontal",
        },
        {
          id: 2,
          src: "/models/t1/t1-gallery-2.jpg",
          alt: "JETOUR T1 vista lateral",
        },
        {
          id: 3,
          src: "/models/t1/t1-gallery-3.jpg",
          alt: "Interior JETOUR T1",
        },
        {
          id: 4,
          src: "/models/t1/t1-gallery-4.jpg",
          alt: "Maletero JETOUR T1",
        },
        {
          id: 5,
          src: "/models/t1/t1-gallery-5.jpg",
          alt: "Asientos JETOUR T1",
        },
        {
          id: 6,
          src: "/models/t1/t1-gallery-6.jpg",
          alt: "Asientos JETOUR T1",
        },
      ],
    },
    // Sección 360° del modelo T1
    threeSixty: {
      model: "t1",
      totalFrames: 28,
      title: "Vista 360° del T1",
      subtitle:
        "Arrastra para rotar el vehículo o usa los controles de navegación",
      imagePath: "https://storage.googleapis.com/xiyimgengine/jetour/360/t1",
      showInstructions: true,
    },
    // Selector de colores del modelo T1
    vehicleColors: {
      model: "t1",
      colorsPath: "/models/t1/colors",
      totalColors: 6,
      colorNames: [
        "azul",
        "blanco",
        "dorado",
        "gris",
        "negro",
        "verde-electrico",
      ],
    },
    // Selector de colores nuevo
    vehicleColorsNew: {
      modelName: "T1",
      colors: [
        {
          name: "Azul Profundo",
          hex: "#2C5AA0",
          image: "/models/t1/t1-color-azul.png"
        },
        {
          name: "Blanco Perlado",
          hex: "#F8F9FA",
          image: "/models/t1/t1-color-blanco.png"
        },
        {
          name: "Dorado Metálico",
          hex: "#D4AF37",
          image: "/models/t1/t1-color-dorado.png"
        },
        {
          name: "Gris Titanio",
          hex: "#71797E",
          image: "/models/t1/t1-color-gris.png"
        },
        {
          name: "Negro Obsidiana",
          hex: "#1C1C1C",
          image: "/models/t1/t1-color-negro.png"
        },
        {
          name: "Verde Eléctrico",
          hex: "#32CD32",
          image: "/models/t1/t1-color-verde-electrico.png"
        }
      ]
    },
    featureSlides: [
      {
        title: "Tecnología",
        slides: [
          {
            backgroundImage: "/models/t1/t1-features-1.1.jpg",
            bullets: [
              "Consola central de mando 15,6\”",
              "Apple Carplay y Android Auto",
            ]
          },
        ]
      },
      {
        title: "Confort",
        slides: [
          {
            backgroundImage: "/models/t1/t1-features-2.1.jpg",
            bullets: [
              "Asientos deportivos premium de Cuero, zero gravity",
              "Ventilación en los asientos",
            ]
          },
          {
            backgroundImage: "/models/t1/t1-features-2.2.jpg",
            bullets: [
              "Aire Acondicionado multizona",
            ]
          },
        ]
      },
      {
        title: "Seguridad",
        slides: [
          {
            backgroundImage: "/models/t1/t1-features-3.1.jpg",
            bullets: [
              "Asistente para arranque en pendiente y control de descenso",
              "Frenos de disco con ABS y sistema de control de estabilidad y EBD",
            ]
          },
        ]
      },
      {
        title: "Desempeño",
        slides: [
          {
            backgroundImage: "/models/t1/t1-features-4.1.jpg",
            bullets: [
              "Off Road XWD",
              "8 Modos de manejo",
            ]
          },
        ]
      },
      {
        title: "Extras",
        slides: [
          {
            backgroundImage: "/models/t1/t1-features-5.1.jpg",
            bullets: [
              "Cargador celular inalambrico",
              "Freno de Mano de botón",
            ]
          },
          {
            backgroundImage: "/models/t1/t1-features-5.2.jpg",
            bullets: [
              "Luces diurnas LED",
            ]
          },
        ]
      },
    ],
    // Ficha técnica disponible
    technicalSheet: true,
    // Video de especificaciones
    specificationsVideo: {
      videoUrl: "https://storage.googleapis.com/xiyimgengine/jetour/especificaciones/interior-t1.mp4",
      title: "Especificaciones técnicas",
      model: "T1",
      logoImage: "/models/t1/t1-logo.png",
      logoAlt: "T1 Logo",
      description: "La aventura también puede ser elegante. Un 4x4 que combina presencia, potencia y distinción."
    },
  },
  t2: {
    hero: {
      backgroundImage: "/models/hero/t2-hero.jpg", // Fallback image
      backgroundVideo: "https://storage.googleapis.com/xiyimgengine/jetour/hero/banner-t2.mp4",
      vehicleName: "T2",
      vehicleDescription: "Apuesta por nuevas experiencias",
      height: "h-screen",
      logoImage: "/models/t2/t2-logo.png",
      logoAlt: "T2 Logo",
      highlights: [
        {
          id: 1,
          text: "Motor 2.0L TGDI 250 Hp"
        },
        {
          id: 2,
          text: "OFF ROAD 4x4 XWD"
        },
        {
          id: 3,
          text: "Techo Panorámico"
        },
        {
          id: 4,
          text: "7 Modos de Manejo"
        }
      ]
    },
    videoGallery: {
      title: "Mira el JETOUR T2 en Acción",
      videos: [
        {
          id: 1,
          title: "Test Drive JETOUR T2 - Tecnología Futurista",
          thumbnail: "/models/dashing/video-1.jpg",
          videoUrl: "https://www.youtube.com/watch?v=G1nUXudRE04",
          views: "Ver video",
          type: "video",
        },
        {
          id: 2,
          title: "Características del JETOUR T2",
          thumbnail: "/models/dashing/video-2.jpg",
          videoUrl: "https://www.youtube.com/watch?v=OQVBD1otpX8",
          views: "Ver video",
          type: "video",
        },
      ],
    },
    vehicleGallery: {
      title: "Si verlo es emocionante, ",
      subtitle: "manejarlo es irresistible",
      images: [
        {
          id: 1,
          src: "/models/t2/t2-gallery-1.jpg",
          alt: "JETOUR T2 vista frontal",
        },
        {
          id: 2,
          src: "/models/t2/t2-gallery-2.jpg",
          alt: "JETOUR T2 vista lateral",
        },
        {
          id: 3,
          src: "/models/t2/t2-gallery-3.jpg",
          alt: "Interior JETOUR T2",
        },
        {
          id: 4,
          src: "/models/t2/t2-gallery-4.jpeg",
          alt: "Maletero JETOUR T2",
        },
        {
          id: 5,
          src: "/models/t2/t2-gallery-5.jpg",
          alt: "Asientos JETOUR T2",
        },
        {
          id: 6,
          src: "/models/t2/t2-gallery-6.jpeg",
          alt: "JETOUR T2 vista frontal",
        },
      ],
    },
    // Sección 360° del modelo T2
    threeSixty: {
      model: "t2",
      totalFrames: 25,
      title: "Vista 360° del T2",
      subtitle:
        "Arrastra para rotar el vehículo o usa los controles de navegación",
      imagePath: "https://storage.googleapis.com/xiyimgengine/jetour/360/t2",
      showInstructions: true,
    },
    // Selector de colores del modelo T2
    vehicleColors: {
      model: "t2",
      colorsPath: "/models/t2/colors",
      totalColors: 5,
      colorNames: [
        "dakar-edition",
        "misty-cyan",
        "night-black",
        "silver-mate",
        "silver-snow",
      ],
    },
    // Selector de colores nuevo
    vehicleColorsNew: {
      modelName: "T2",
      colors: [
        {
          name: "Edición Dakar",
          hex: "#B87333",
          image: "/models/t2/t2-color-dakar.png"
        },
        {
          name: "Cian Niebla",
          hex: "#B0E0E6",
          image: "/models/t2/t2-color-misty-cyan.png"
        },
        {
          name: "Negro Noche",
          hex: "#1C1C1C",
          image: "/models/t2/t2-color-negro.png"
        },
        {
          name: "Plata Mate",
          hex: "#A8A8A8",
          image: "/models/t2/t2-color-silver-mate.png"
        },
        {
          name: "Plata Nieve",
          hex: "#E5E5E5",
          image: "/models/t2/t2-color-silver-snow.png"
        }
      ]
    },
    featureSlides: [
      {
        title: "Desempeño",
        slides: [
          {
            backgroundImage: "/models/t2/t2-features-1.1.jpg",
            bullets: [
              "8 Modos de manejo",
              "Transmisión 7 DCT con paletas al volante",
            ]
          },
          {
            backgroundImage: "/models/t2/t2-features-1.4.jpg",
            bullets: [
              "Suspensión independiente en las cuatro ruedas",
            ]
          },
          {
            backgroundImage: "/models/t2/t2-features-1.3.jpg",
            bullets: [
              "Alto rendimiento en rutas múltiples",
            ]
          },
          {
            backgroundImage: "/models/t2/t2-features-1.2.jpg",
            bullets: [
              "Off-road en terreno extremo",
            ]
          },
          {
            backgroundImage: "/models/t2/t2-features-1.5.jpg",
            bullets: [
              "Ángulos de ataque, salida y altura al suelo",
            ]
          },
        ]
      },
      {
        title: "Tecnología",
        slides: [
          {
            backgroundImage: "/models/t2/t2-features-2.1.jpg",
            bullets: [
              "Consola central de mando 15,6\”",
              "Apple Carplay y Android Auto",
            ]
          },
          {
            backgroundImage: "/models/t2/t2-features-2.2.jpg",
            bullets: [
              "Sistema inteligente de torque (chasis / ejes visibles)",
            ]
          },
          {
            backgroundImage: "/models/t2/t2-features-2.3.jpg",
            bullets: [
              "Diferencial inteligente y transmisión 4x4",
            ]
          },
        ]
      },
      {
        title: "Confort",
        slides: [
          {
            backgroundImage: "/models/t2/t2-features-3.1.jpg",
            bullets: [
              "Asientos deportivos premium de Cuero",
              "Asiento del piloto con regulación eléctrica con 3 memorias",
            ]
          },
          {
            backgroundImage: "/models/t2/t2-features-3.2.jpg",
            bullets: [
              "Ventilación en los asientos",
              "Aire Acondicionado climatizador de doble zona",
            ]
          },
        ]
      },
      {
        title: "Seguridad",
        slides: [
          {
            backgroundImage: "/models/t2/t2-features-4.1.jpg",
            bullets: [
              "Asistente para arranque en pendiente y control de descenso",
              "Frenos de disco con ABS y sistema de control de estabilidad y EBD",
            ]
          },
          {
            backgroundImage: "/models/t2/t2-features-4.2.jpg",
            bullets: [
              "Sistema de detección de punto ciego",
            ]
          },
          {
            backgroundImage: "/models/t2/t2-features-4.3.jpg",
            bullets: [
              "6 Airbags",
            ]
          },
          {
            backgroundImage: "/models/t2/t2-features-4.4.jpg",
            bullets: [
              "Cámara de Retro 540° más sensores delanteros y traseros",
            ]
          },
          {
            backgroundImage: "/models/t2/t2-features-4.5.jpg",
            bullets: [
              "Estabilidad y seguridad en conducción",
            ]
          },
        ]
      },
      {
        title: "Extras",
        slides: [
          {
            backgroundImage: "/models/t2/t2-features-5.3.jpg",
            bullets: [
              "Capacidad de carga y comodidad",
            ]
          },
          {
            backgroundImage: "/models/t2/t2-features-5.4.jpg",
            bullets: [
              "Techo panorámico extra grande",
            ]
          },
          {
            backgroundImage: "/models/t2/t2-features-5.5.jpg",
            bullets: [
              "Puerta posterior eléctrica",
            ]
          },
        ]
      },
    ],
    // Ficha técnica disponible
    technicalSheet: true,
    // Video de especificaciones
    specificationsVideo: {
      videoUrl: "https://storage.googleapis.com/xiyimgengine/jetour/especificaciones/interior-t2.mp4",
      title: "Especificaciones técnicas",
      model: "T2",
      logoImage: "/models/t2/t2-logo.png",
      logoAlt: "T2 Logo",
      description: "Destaca con su diseño OFF-ROAD. 4x4 XWD con 7 modos de manejo."
    },
    // Aquí se pueden agregar más secciones específicas del modelo T2
    // specifications: {...},
    // gallery: [...],
  },
  "t2-phev": {
    hero: {
      backgroundImage: "/models/hero/t2-phev-hero.jpg", // Fallback image
      backgroundVideo: "https://storage.googleapis.com/xiyimgengine/jetour/hero/banner-t2-phev2.mp4",
      vehicleName: "T2 PHEV",
      vehicleDescription: "Apuesta por tecnología híbrida",
      height: "h-screen",
      logoImage: "/models/t2-phev/t2-phev-logo.png",
      logoAlt: "T2 PHEV Logo",
      highlights: [
        {
          id: 1,
          text: "+1.200 km de autonomía"
        },
        {
          id: 2,
          text: "Diseño off-road agresivo"
        },
        {
          id: 3,
          text: "Híbrido enchufable (PHEV)"
        },
        {
          id: 4,
          text: "Transmisión híbrida 3DHT"
        }
      ]
    },
    videoGallery: {
      title: "Mira el JETOUR T2 PHEV en Acción",
      videos: [
        {
          id: 1,
          title: "Test Drive JETOUR T2 PHEV - Tecnología Híbrida",
          thumbnail: "/models/t2-phev/t2-phev-video-1.jpg",
          videoUrl: "https://www.youtube.com/watch?v=ad0c8X2Ytl0",
          views: "Ver video",
          type: "video",
        },
        {
          id: 2,
          title: "Características del JETOUR T2 PHEV",
          thumbnail: "/models/t2-phev/t2-phev-video-1.jpg",
          videoUrl: "https://www.youtube.com/watch?v=0PHDQKbcxSI",
          views: "Ver video",
          type: "video",
        },
      ],
    },
    vehicleGallery: {
      title: "Tecnología híbrida,",
      subtitle: "con 1000 km de autonomía",
      images: [
        {
          id: 1,
          src: "/models/t2-phev/t2-phev-gallery-1.jpg",
          alt: "JETOUR T2 PHEV vista frontal",
        },
        {
          id: 2,
          src: "/models/t2-phev/t2-phev-gallery-2.jpg",
          alt: "JETOUR T2 PHEV vista lateral",
        },
        {
          id: 3,
          src: "/models/t2-phev/t2-phev-gallery-4.jpg",
          alt: "Maletero JETOUR T2 PHEV",
        },
        {
          id: 4,
          src: "/models/t2-phev/t2-phev-gallery-5.jpg",
          alt: "Asientos JETOUR T2 PHEV",
        },
        {
          id: 5,
          src: "/models/t2-phev/t2-phev-gallery-6.jpg",
          alt: "Asientos JETOUR T2 PHEV",
        },
      ],
    },
    // Sección 360° del modelo T2 PHEV
    threeSixty: {
      model: "t2-phev",
      totalFrames: 27,
      title: "Vista 360° del T2 PHEV",
      subtitle:
        "Arrastra para rotar el vehículo o usa los controles de navegación",
      imagePath:
        "https://storage.googleapis.com/xiyimgengine/jetour/360/t2-phev-new",
      showInstructions: true,
    },
    // Selector de colores del modelo T2 PHEV
    vehicleColors: {
      model: "t2-phev",
      colorsPath: "/models/t2-phev/colors",
      totalColors: 4,
      colorNames: ["misty-cyan", "night-black", "silver-snow", "white"],
    },
    // Selector de colores nuevo
    vehicleColorsNew: {
      modelName: "T2 PHEV",
      colors: [
        {
          name: "Cian Niebla",
          hex: "#B0E0E6",
          image: "/models/t2-phev/t2-phev-color-misty-cyan.png"
        },
        {
          name: "Negro Noche",
          hex: "#1C1C1C",
          image: "/models/t2-phev/t2-phev-color-night-black.png"
        },
        {
          name: "Plata Nieve",
          hex: "#E5E5E5",
          image: "/models/t2-phev/t2-phev-color-silver-snow.png"
        },
        {
          name: "Blanco Puro",
          hex: "#FFFFFF",
          image: "/models/t2-phev/t2-phev-color-white.png"
        },
        {
          name: "Plomo Mate",
          hex: "#494A50",
          image: "/models/t2-phev/t2-phev-color-plomo-mate.png"
        }
      ]
    },
    featureSlides: [
      {
        title: "Tecnología",
        slides: [
          {
            backgroundImage: "/models/t2-phev/t2-phev-features-1.1.jpg",
            bullets: [
              "Consola central de mando 15,6\”",
              "Volante de cuero multifunción con mandos",
            ]
          },
          {
            backgroundImage: "/models/t2-phev/t2-phev-features-1.2.jpg",
            bullets: [
              "4 modos de manejo",
            ]
          },
          {
            backgroundImage: "/models/t2-phev/t2-phev-features-1.3.jpg",
            bullets: [
              "Tecnología híbrida eficiente",
            ]
          },
          {
            backgroundImage: "/models/t2-phev/t2-phev-features-1.4.jpg",
            bullets: [
              "Power Supply para camping o paseos",
            ]
          },
          {
            backgroundImage: "/models/t2-phev/t2-phev-features-1.5.jpg",
            bullets: [
              "Capacidad de badeo",
            ]
          },
          {
            backgroundImage: "/models/t2-phev/t2-phev-features-1.6.jpg",
            bullets: [
              "Baterías a prueba de agua",
            ]
          },
        ]
      },
      {
        title: "Confort",
        slides: [
          {
            backgroundImage: "/models/t2-phev/t2-phev-features-2.2.jpg",
            bullets: [
              "Asientos deportivos premium de cuero",
              "Asiento del piloto con regulación eléctrica con 3 memorias",
            ]
          },
          {
            backgroundImage: "/models/t2-phev/t2-phev-features-2.3.jpg",
            bullets: [
              "A/C de doble zona",
            ]
          },
        ]
      },
      {
        title: "Seguridad",
        slides: [
          {
            backgroundImage: "/models/t2-phev/t2-phev-features-3.1.jpg",
            bullets: [
              "Asistente para arranque en pendiente y control de descenso",
              "Frenos de disco con ABS y sistema de control de estabilidad y EBD",
            ]
          },
        ]
      },
      {
        title: "Desempeño",
        slides: [
          {
            backgroundImage: "/models/t2-phev/t2-phev-features-4.1.jpg",
            bullets: [
              "Gran Potencia por su sistema híbrido enchufable",
              "Capacidad de manejo solo en Electrico",
            ]
          },
        ]
      },
      {
        title: "Extras",
        slides: [
          {
            backgroundImage: "/models/t2-phev/t2-phev-features-5.1.jpg",
            bullets: [
              "Freno de Mano de botón",
              "Luces diurnas LED",
            ]
          },
          {
            backgroundImage: "/models/t2-phev/t2-phev-features-5.2.jpg",
            bullets: [
              "Cargador celular inalámbrico",
            ]
          },
        ]
      },
    ],
    // Ficha técnica disponible
    technicalSheet: true,
    // Video de especificaciones
    specificationsVideo: {
      videoUrl: "https://storage.googleapis.com/xiyimgengine/jetour/especificaciones/interior-t2-phev.mp4",
      title: "Especificaciones técnicas",
      model: "T2 PHEV",
      logoImage: "/models/t2-phev/t2-phev-logo.png",
      logoAlt: "T2 PHEV Logo",
      description: "Tu rutina sin pausas. 1200 km de autonomía combinada para que nada te detenga."
    },
    // Secciones específicas del modelo T2 PHEV
  },
  x50: {
    hero: {
      backgroundImage: "/models/hero/x50-hero.jpg", // Fallback image
      backgroundVideo: "https://storage.googleapis.com/xiyimgengine/jetour/hero/banner-x50.mp4",
      vehicleName: "X50",
      vehicleDescription: "Apuesta por el SUV que te representa",
      height: "h-screen",
      logoImage: "/models/x50/x50-logo.png",
      logoAlt: "X50 Logo",
      highlights: [
        {
          id: 1,
          text: "Motor 1.5 Turbo AT"
        },
        {
          id: 2,
          text: "Doble pantalla 10.25\""
        },
        {
          id: 3,
          text: "CarPlay y Android Auto"
        },
        {
          id: 4,
          text: "Controles al Volante"
        }
      ]
    },
    videoGallery: {
      title: "Mira el JETOUR X50 en Acción",
      videos: [
        {
          id: 1,
          title: "Test Drive JETOUR X50 - Vida Urbana",
          thumbnail: "/models/x50/x50-video-1.jpg",
          videoUrl: "https://www.youtube.com/watch?v=SFeQ0elBd0w",
          views: "Ver video",
          type: "video",
        },
        {
          id: 2,
          title: "Características del JETOUR X50",
          thumbnail: "/models/x50/x50-video-1.jpg",
          videoUrl: "https://www.youtube.com/watch?v=YTkCq6gy_Sg",
          views: "Ver video",
          type: "video",
        },
      ],
    },
    vehicleGallery: {
      title: "Su esencia",
      subtitle: "en cada detalle",
      images: [
        {
          id: 1,
          src: "/models/x50/x50-gallery-1.jpg",
          alt: "JETOUR X50 vista frontal",
        },
        {
          id: 2,
          src: "/models/x50/x50-gallery-2.jpg",
          alt: "JETOUR X50 vista lateral",
        },
        {
          id: 3,
          src: "/models/x50/x50-gallery-3.jpg",
          alt: "Interior JETOUR X50",
        },
        {
          id: 4,
          src: "/models/x50/x50-gallery-4.jpg",
          alt: "Maletero JETOUR X50",
        },
        {
          id: 5,
          src: "/models/x50/x50-gallery-5.jpg",
          alt: "Asientos JETOUR X50",
        },
        {
          id: 6,
          src: "/models/x50/x50-gallery-6.jpg",
          alt: "JETOUR X50 vista frontal",
        },
        {
          id: 7,
          src: "/models/x50/x50-gallery-7.jpg",
          alt: "JETOUR X50 vista lateral",
        },
        {
          id: 8,
          src: "/models/x50/x50-gallery-8.jpg",
          alt: "JETOUR X50 vista frontal",
        },
      ],
    },
    // Sección 360° del modelo X50
    threeSixty: {
      model: "x50",
      totalFrames: 29,
      title: "Vista 360° del X50",
      subtitle:
        "Arrastra para rotar el vehículo o usa los controles de navegación",
      imagePath: "https://storage.googleapis.com/xiyimgengine/jetour/360/x50",
      showInstructions: true,
    },
    // Selector de colores del modelo X50
    vehicleColors: {
      model: "x50",
      colorsPath: "/models/x50/colors",
      totalColors: 5,
      colorNames: ["azul", "blanco", "gris", "negro", "plata"],
    },
    // Selector de colores nuevo
    vehicleColorsNew: {
      modelName: "X50",
      colors: [
        {
          // Retirado a pedido de Jetour (correo Verónica Vergara, 2026-07). Se oculta en vez de
          // borrar por si se pide reactivar — ver components/VehicleColorsNew.jsx (filtro `hidden`).
          name: "Azul Cielo",
          hex: "#5DADE2",
          image: "/models/x50/x50-color-azul.png",
          hidden: true
        },
        {
          name: "Blanco",
          hex: "#F8F9FA",
          image: "/models/x50/x50-color-blanco.png"
        },
        {
          name: "Gris",
          hex: "#6C7A89",
          image: "/models/x50/x50-color-gris.png"
        },
        {
          name: "Negro",
          hex: "#1C1C1C",
          image: "/models/x50/x50-color-negro.png"
        },
        {
          name: "Plata",
          hex: "#C0C0C0",
          image: "/models/x50/x50-color-plata.png"
        }
      ]
    },
    featureSlides: [
      {
        title: "Seguridad",
        slides: [
          {
            backgroundImage: "/models/x50/x50-features-1.1.jpg",
            bullets: [
              "Asistente para arranque en pendiente",
              "Frenos de disco con ABS y sistema de control de estabilidad",
            ]
          },
          {
            backgroundImage: "/models/x50/x50-features-1.2.jpg",
            bullets: [
              "Sistema de detección de punto ciego",
              "Cámara de Retro 360°",
            ]
          }
        ]
      },
      {
        title: "Tecnología",
        slides: [
          {
            backgroundImage: "/models/x50/x50-features-2.2.jpg",
            bullets: [
              "Doble pantalla integrada 10,25\” + 10,25\”", 
              "Apple Carplay y Android Auto",
            ]
          },
          {
            backgroundImage: "/models/x50/x50-features-2.3.jpg",
            bullets: [
              "Volante ajustable con mandos multifunción",
            ]
          },
        ]
      },
      {
        title: "Confort",
        slides: [
          {
            backgroundImage: "/models/x50/x50-features-3.1.jpg",
            bullets: [
              "Asientos de Cuero",
            ]
          },
          {
            backgroundImage: "/models/x50/x50-features-3.2.jpg",
            bullets: [
              "A/C Con salidas delanteras y posteriores",
            ]
          },
          {
            backgroundImage: "/models/x50/x50-features-3.3.jpg",
            bullets: [
              "Control Velocidad Crucero",
            ]
          },
        ]
      },
    ],
    // Ficha técnica disponible
    technicalSheet: true,
    // Video de especificaciones
    specificationsVideo: {
      videoUrl: "https://storage.googleapis.com/xiyimgengine/jetour/especificaciones/interior-x50.mp4",
      title: "Especificaciones técnicas",
      model: "X50",
      logoImage: "/models/x50/x50-logo.png",
      logoAlt: "X50 Logo",
      description: "El más amplio de su segmento. Espacio interior confortable y tecnológico."
    },
    // Secciones específicas del modelo X50
  },
  "x70-sport": {
    hero: {
      backgroundImage: "/models/hero/x70-sport-hero.jpg", // Fallback image
      backgroundVideo: "https://storage.googleapis.com/xiyimgengine/jetour/hero/banner-x70-sport.mp4",
      vehicleName: "X70 Sport",
      vehicleDescription: "Seguridad y estilo para los que amas",
      height: "h-screen",
      logoImage: "/models/x70-sport/x70-sport-logo.png",
      logoAlt: "X70 Sport Logo",
      highlights: [
        {
          id: 1,
          text: "Motor 1.5 Turbo 6MT / 6DCT"
        },
        {
          id: 2,
          text: "3 filas de asientos 7 pasajeros"
        },
        {
          id: 3,
          text: "Techo Panorámico"
        },
        {
          id: 4,
          text: "Llantas y aros deportivos R20\""
        }
      ]
    },
    videoGallery: {
      title: "Mira el JETOUR X70 Sport en Acción",
      videos: [
        {
          id: 1,
          title: "Test Drive JETOUR X70 Sport - Sofisticación",
          thumbnail: "/models/x70/x70-sport-video-1.jpg",
          videoUrl: "https://www.youtube.com/watch?v=zuLI66LQOBM",
          views: "Ver video",
          type: "video",
        },
      ],
    },
    vehicleGallery: {
      title: "Equipamiento, diseño y espacio",
      subtitle: "para toda la familia.",
      images: [
        {
          id: 1,
          src: "/models/x70/x70-sport-gallery-1.jpg",
          alt: "JETOUR X70 Sport vista frontal",
        },
        {
          id: 2,
          src: "/models/x70/x70-sport-gallery-2.jpg",
          alt: "JETOUR X70 Sport vista lateral",
        },
        {
          id: 3,
          src: "/models/x70/x70-sport-gallery-3.jpeg",
          alt: "Interior JETOUR X70 Sport",
        },
        {
          id: 4,
          src: "/models/x70/x70-sport-gallery-4.jpg",
          alt: "Maletero JETOUR X70 Sport",
        },
        {
          id: 5,
          src: "/models/x70/x70-sport-gallery-5.jpeg",
          alt: "Asientos JETOUR X70 Sport",
        },
        {
          id: 6,
          src: "/models/x70/x70-sport-gallery-6.jpeg",
          alt: "JETOUR X70 Sport vista frontal",
        },
        {
          id: 7,
          src: "/models/x70/x70-sport-gallery-7.jpg",
          alt: "JETOUR X70 Sport vista lateral",
        },
      ],
    },
    // Sección 360° del modelo X70 Sport
    threeSixty: {
      model: "x70-sport",
      totalFrames: 28,
      title: "Vista 360° del X70 Sport",
      subtitle:
        "Arrastra para rotar el vehículo o usa los controles de navegación",
      imagePath:
        "https://storage.googleapis.com/xiyimgengine/jetour/360/x70-sport-new",
      showInstructions: true,
    },
    // Selector de colores del modelo X70 Sport
    vehicleColors: {
      model: "x70-sport",
      colorsPath: "/models/x70-sport/colors",
      totalColors: 4,
      colorNames: ["black", "future-blue", "smoky-brown", "white"],
    },
    featureSlides: [
      {
        title: "Seguridad",
        slides: [
          {
            backgroundImage: "/models/x70-sport/x70-sport-features-1.1.jpg",
            bullets: [
              "Asistente para arranque en pendiente",
              "Frenos de disco con ABS y sistema de control de estabilidad",
            ]
          },
          {
            backgroundImage: "/models/x70-sport/x70-sport-features-1.2.jpg",
            bullets: [
              "Sistema de detección de punto ciego",
              "Cámara de Retro 360° más sensores delanteros y traseros",
            ]
          }
        ]
      },
      {
        title: "Tecnología",
        slides: [
          {
            backgroundImage: "/models/x70-sport/x70-sport-features-2.1.jpg",
            bullets: [
              "Pantalla multimedia 10,25\”",
              "Panel digital de instrumentos de 12,3\”",
            ]
          },
          {
            backgroundImage: "/models/x70-sport/x70-sport-features-2.2.jpg",
            bullets: [
              "Apple Carplay y Android Auto",
            ]
          },
        ]
      },
      {
        title: "Confort",
        slides: [
          {
            backgroundImage: "/models/x70-sport/x70-sport-features-3.1.jpg",
            bullets: [
              "Asientos de Cuero",
            ]
          },
          {
            backgroundImage: "/models/x70-sport/x70-sport-features-3.3.jpg",
            bullets: [
              "3 Filas de Asiento",
            ]
          },
          {
            backgroundImage: "/models/x70-sport/x70-sport-features-3.2.jpg",
            bullets: [
              "A/C con salidas delanteras y posteriores",
              "Volante ajustable con mandos multifunción",
            ]
          },
          {
            backgroundImage: "/models/x70-sport/x70-sport-features-3.4.jpg",
            bullets: [
              "Amplio espacio de carga con capacidad 1260 litros",
            ]
          },
        ]
      },
      {
        title: "Extras",
        slides: [
          {
            backgroundImage: "/models/x70-sport/x70-sport-features-4.1.jpg",
            bullets: [
              "Techo Panorámico*",
            ]
          },
          {
            backgroundImage: "/models/x70-sport/x70-sport-features-4.2.jpg",
            bullets: [
              "Antena “aleta de tiburón\”",
            ]
          },
        ]
      },
    ],
    // Selector de colores nuevo
    vehicleColorsNew: {
      modelName: "X70 Sport",
      colors: [
        {
          name: "Negro",
          hex: "#1C1C1C",
          image: "/models/x70-sport/x70-sport-color-black.png"
        },
        {
          name: "Azul",
          hex: "#2E86AB",
          image: "/models/x70-sport/x70-sport-color-future.blue.png"
        },
        {
          // Retirado a pedido de Jetour (correo Verónica Vergara, 2026-07). Oculto, no borrado.
          name: "Marrón Ahumado",
          hex: "#b9b3b3",
          image: "/models/x70-sport/x70-sport-color-smoky-brown.png",
          hidden: true
        },
        {
          name: "Blanco",
          hex: "#F8F9FA",
          image: "/models/x70-sport/x70-sport-color-white.png"
        },
        // Asignación confirmada por Jetour (2026-07-22): el archivo "Plata 1" es Plata Cemento.
        {
          name: "Plata Cemento",
          hex: "#8D9499",
          image: "/models/x70-sport/x70-sport-color-plata-1.png"
        },
        {
          name: "Plata",
          hex: "#868A91",
          image: "/models/x70-sport/x70-sport-color-plata-2.png"
        }
      ]
    },
    // Ficha técnica disponible
    technicalSheet: true,
    // Video de especificaciones
    specificationsVideo: {
      videoUrl: "https://storage.googleapis.com/xiyimgengine/jetour/especificaciones/interior-x70-sport.mp4",
      title: "Especificaciones técnicas",
      model: "X70 Sport",
      logoImage: "/models/x70/x70-sport-logo.png",
      logoAlt: "X70 Sport Logo",
      description: "El más amplio del segmento. Espacio interior confortable y tecnológico."
    },
    // Secciones específicas del modelo X70 Sport
  },
  "x70-plus": {
    hero: {
      backgroundImage: "/models/hero/x70-plus-hero.jpg", // Fallback image
      backgroundVideo: "https://storage.googleapis.com/xiyimgengine/jetour/hero/banner-x70-plus.mp4",
      vehicleName: "X70 PLUS",
      vehicleDescription: "Apuesta por elevar tu nivel",
      height: "h-screen",
      logoImage: "/models/x70/x70-plus-logo.png",
      logoAlt: "X70 PLUS Logo",
      highlights: [
        {
          id: 1,
          text: "Motor 1.5T 160 HP Transmisión 6DCT"
        },
        {
          id: 2,
          text: "3 filas de asientos 7 pasajeros"
        },
        {
          id: 3,
          text: "Techo Panorámico"
        },
        {
          id: 4,
          text: "Doble Pantalla 10.25\""
        }
      ]
    },
    videoGallery: {
      title: "JETOUR X70 PLUS en Acción",
      videos: [
        {
          id: 1,
          title: "Test Drive JETOUR X70 Plus - Sofisticación",
          thumbnail: "/models/x70/x70-sport-video-1.jpg",
          videoUrl: "https://www.youtube.com/watch?v=zuLI66LQOBM",
          views: "Ver video",
          type: "video",
        },
      ],
    },
    vehicleGallery: {
      title: "Galería del JETOUR X70 PLUS",
      subtitle: "Descubre cada detalle del X70 PLUS en imágenes",
      images: [
        {
          id: 1,
          src: "/models/x70/x70-plus-gallery-1.jpg",
          alt: "JETOUR X70 Sport vista frontal",
        },
        {
          id: 2,
          src: "/models/x70/x70-plus-gallery-2.jpg",
          alt: "JETOUR X70 Sport vista lateral",
        },
        {
          id: 3,
          src: "/models/x70/x70-plus-gallery-3.jpg",
          alt: "Interior JETOUR X70 Sport",
        },
        {
          id: 4,
          src: "/models/x70/x70-plus-gallery-4.jpg",
          alt: "Maletero JETOUR X70 Sport",
        },
        {
          id: 5,
          src: "/models/x70/x70-plus-gallery-5.jpg",
          alt: "Asientos JETOUR X70 Sport",
        },
        {
          id: 6,
          src: "/models/x70/x70-plus-gallery-6.jpg",
          alt: "JETOUR X70 Sport vista frontal",
        },
        {
          id: 7,
          src: "/models/x70/x70-plus-gallery-7.jpg",
          alt: "JETOUR X70 Sport vista lateral",
        },
      ],
    },
    // Sección 360° del modelo X70 Plus
    threeSixty: {
      model: "x70-plus",
      totalFrames: 28,
      title: "Vista 360° del X70 Plus",
      subtitle:
        "Arrastra para rotar el vehículo o usa los controles de navegación",
      imagePath:
        "https://storage.googleapis.com/xiyimgengine/jetour/360/x70-plus",
      showInstructions: true,
    },
    // Selector de colores del modelo X70 Plus
    vehicleColors: {
      model: "x70-plus",
      colorsPath: "/models/x70/colors",
      totalColors: 4,
      colorNames: ["azul", "blanco", "negro", "plata"],
    },
    // Selector de colores nuevo
    vehicleColorsNew: {
      modelName: "X70 Plus",
      colors: [
        {
          name: "Azul",
          hex: "#1E3A8A",
          image: "/models/x70/x70-plus-color-azul.png"
        },
        {
          name: "Blanco",
          hex: "#F8F9FA",
          image: "/models/x70/x70-plus-color-blanco.png"
        },
        {
          name: "Negro",
          hex: "#1C1C1C",
          image: "/models/x70/x70-plus-color-negro.png"
        },
        {
          // Retirado — confirmado por Jetour (2026-07-22). Oculto, no borrado.
          name: "Plata Metálico",
          hex: "#C0C0C0",
          image: "/models/x70/x70-plus-color-plata.png",
          hidden: true
        },
        // Foto y nombre confirmados por Jetour (2026-07-22).
        {
          name: "Plomo",
          hex: "#393B42",
          image: "/models/x70/x70-plus-color-plomo-mate.png"
        }
      ]
    },
    featureSlides: [
      {
        title: "Seguridad",
        slides: [
          {
            backgroundImage: "/models/x70/x70-plus-features-1.1.jpg",
            bullets: [
              "Asistente para arranque en pendiente",
            ]
          },
          {
            backgroundImage: "/models/x70/x70-plus-features-1.2.jpg",
            bullets: [
              "Sistema de detección de punto ciego",
              "Cámara de Retro 360° más sensores delanteros y traseros",
            ]
          },
          {
            backgroundImage: "/models/x70/x70-plus-features-1.3.jpg",
            bullets: [
              "4 Airbags",
            ]
          },
        ]
      },
      {
        title: "Tecnología",
        slides: [
          {
            backgroundImage: "/models/x70/x70-plus-features-2.1.jpg",
            bullets: [
              "Doble Pantalla integrada de Instrumentos y multimedia 10,25\”",
              "Apple Carplay y Android Auto",
            ]
          },
        ]
      },
      {
        title: "Confort",
        slides: [
          {
            backgroundImage: "/models/x70/x70-plus-features-3.1.jpg",
            bullets: [
              "Asientos de Cuero",
            ]
          },
          {
            backgroundImage: "/models/x70/x70-plus-features-3.2.jpg",
            bullets: [
              "A/C Con salidas delanteras y posteriores",
            ]
          },
          {
            backgroundImage: "/models/x70/x70-plus-features-3.3.jpg",
            bullets: [
              "Volante ajustable con mandos multifunción",
            ]
          },
          {
            backgroundImage: "/models/x70/x70-plus-features-3.4.jpg",
            bullets: [
              "Asiento del piloto con regulación eléctrica",
            ]
          },
        ]
      },
      {
        title: "Extras",
        slides: [
          {
            backgroundImage: "/models/x70/x70-plus-features-4.1.jpg",
            bullets: [
              "Luces diurnas LED",
              "Retrovisores eléctricos plegables",
            ]
          },
        ]
      },
    ],
    // Ficha técnica disponible
    technicalSheet: true,
    // Video de especificaciones
    specificationsVideo: {
      videoUrl: "https://storage.googleapis.com/xiyimgengine/jetour/especificaciones/interior-x70-plus.mp4",
      title: "Especificaciones técnicas",
      model: "X70 Plus",
      logoImage: "/models/x70/x70-plus-logo.png",
      logoAlt: "X70 Plus Logo",
      description: "Lujo que se nota en cada detalle. Un interior sofisticado diseñado para siete pasajeros."
    },
    // Secciones específicas del modelo X70 PLUS
  },
  dashing: {
    hero: {
      backgroundImage: "/models/hero/dashing-hero.jpg", // Fallback image
      backgroundVideo: "https://storage.googleapis.com/xiyimgengine/jetour/hero/banner-dashing.mp4",
      vehicleName: "DASHING",
      vehicleDescription: "Apuesta por estilo",
      height: "h-screen",
      logoImage: "/models/dashing/dashing-logo.png",
      logoAlt: "DASHING Logo",
      highlights: [
        {
          id: 1,
          text: "Motor 1.5 Turbo 160 HP"
        },
        {
          id: 2,
          text: "Diseño deportivo y minimalista"
        },
        {
          id: 3,
          text: "Techo Panorámico"
        },
        {
          id: 4,
          text: "Control Remoto inteligente"
        }
      ]
    },
    videoGallery: {
      title: "Mira el JETOUR DASHING en Acción",
      videos: [
        {
          id: 1,
          title: "Test Drive JETOUR DASHING - Tecnología Futurista",
          thumbnail: "/models/dashing/video-1.jpg",
          videoUrl: "https://www.youtube.com/watch?v=NeOarL4aJrA",
          views: "Ver video",
          type: "video",
        },
        {
          id: 2,
          title: "Características del JETOUR DASHING",
          thumbnail: "/models/dashing/video-2.jpg",
          videoUrl: "https://www.youtube.com/watch?v=nNMiuoWW9dQ",
          views: "Ver video",
          type: "video",
        },
      ],
    },
    vehicleGallery: {
      title: "Diseño",
      subtitle: "que desafía",
      images: [
        {
          id: 1,
          src: "/models/dashing/dashing-gallery-1.jpg",
          alt: "JETOUR DASHING vista frontal",
        },
        {
          id: 2,
          src: "/models/dashing/dashing-gallery-2.jpg",
          alt: "JETOUR DASHING vista lateral",
        },
        {
          id: 3,
          src: "/models/dashing/dashing-gallery-3.jpg",
          alt: "Interior JETOUR DASHING",
        },
        {
          id: 4,
          src: "/models/dashing/dashing-gallery-4.jpeg",
          alt: "Maletero JETOUR DASHING",
        },
        {
          id: 5,
          src: "/models/dashing/dashing-gallery-5.jpeg",
          alt: "Asientos JETOUR DASHING",
        },
        {
          id: 6,
          src: "/models/dashing/dashing-gallery-6.jpeg",
          alt: "JETOUR DASHING vista frontal",
        },
        {
          id: 7,
          src: "/models/dashing/dashing-gallery-7.jpeg",
          alt: "JETOUR DASHING vista lateral",
        },
      ],
    },
    // Sección 360° del modelo DASHING
    threeSixty: {
      model: "dashing",
      totalFrames: 28,
      title: "Vista 360° del DASHING",
      subtitle:
        "Arrastra para rotar el vehículo o usa los controles de navegación",
      imagePath:
        "https://storage.googleapis.com/xiyimgengine/jetour/360/dashing",
      showInstructions: true,
    },
    // Selector de colores del modelo DASHING
    vehicleColors: {
      model: "dashing",
      colorsPath: "/models/dashing/colors",
      totalColors: 6,
      colorNames: ["rojo", "plata", "negro", "blanco", "gris", "azul"],
    },
    // Selector de colores nuevo
    vehicleColorsNew: {
      modelName: "Dashing",
      colors: [
        {
          // Retirado a pedido de Jetour (correo Verónica Vergara, 2026-07). Oculto, no borrado.
          name: "Azul Cielo",
          hex: "#87CEEB",
          image: "/models/dashing/dashing-color-azul.png",
          hidden: true
        },
        {
          name: "Blanco",
          hex: "#F8F9FA",
          image: "/models/dashing/dashing-color-blanco.png"
        },
        {
          name: "Plomo",
          hex: "#808080",
          image: "/models/dashing/dashing-color-gris.png"
        },
        {
          name: "Negro",
          hex: "#1C1C1C",
          image: "/models/dashing/dashing-color-negro.png"
        },
        {
          name: "Plata Cemento",
          hex: "#C0C0C0",
          image: "/models/dashing/dashing-color-plata.png"
        },
        {
          name: "Rojo",
          hex: "#DC143C",
          image: "/models/dashing/dashing-color-rojo.png"
        }
      ]
    },
    featureSlides: [
      {
        title: "Tecnología",
        slides: [
          {
            backgroundImage: "/models/dashing/dashing-features-1.1.jpg",
            bullets: [
              "Consola central de mando 12,8\”",
              "Botón de encendido",
            ]
          },
          {
            backgroundImage: "/models/dashing/dashing-features-1.2.jpg",
            bullets: [
              "Volante con Joysticks para control, multifunción",
            ]
          },
          {
            backgroundImage: "/models/dashing/dashing-features-1.3.jpg",
            bullets: [
              "Apple Carplay y Android Auto",
            ]
          },
        ]
      },
      {
        title: "Confort",
        slides: [
          {
            backgroundImage: "/models/dashing/dashing-features-2.1.jpg",
            bullets: [
              "Calefacción y ventilación en los asientos",
            ]
          },
          {
            backgroundImage: "/models/dashing/dashing-features-2.2.jpg",
            bullets: [
              "Asientos deportivos de Cuero",
              "Asiento del piloto con regulación eléctrica",
            ]
          },
          {
            backgroundImage: "/models/dashing/dashing-features-2.3.jpg",
            bullets: [
              "Control Velocidad Crucero",
            ]
          },
          {
            backgroundImage: "/models/dashing/dashing-features-2.4.jpg",
            bullets: [
              "Apertura del maletero eléctrica",
            ]
          },
        ]
      },
      {
        title: "Seguridad",
        slides: [
          {
            backgroundImage: "/models/dashing/dashing-features-3.1.jpg",
            bullets: [
              "Frenos de disco con ABS y sistema de control de estabilidad y EBD",
              "Asistente para arranque en pendiente y control de descenso",
            ]
          },
          {
            backgroundImage: "/models/dashing/dashing-features-3.2.jpg",
            bullets: [
              "Sistema de detección de punto ciego",
            ]
          },
          {
            backgroundImage: "/models/dashing/dashing-features-3.3.jpg",
            bullets: [
              "Cámara de Retro 360° más sensores delanteros y traseros",
            ]
          },
          {
            backgroundImage: "/models/dashing/dashing-features-3.5.jpg",
            bullets: [
              "4 Airbags",
            ]
          },
        ]
      },
      {
        title: "Extras",
        slides: [
          {
            backgroundImage: "/models/dashing/dashing-features-4.1.jpg",
            bullets: [
              "Llave inteligente con manos libres",
            ]
          },
          {
            backgroundImage: "/models/dashing/dashing-features-4.3.jpg",
            bullets: [
              "Retrovisores eléctricos plegables",
            ]
          },
          {
            backgroundImage: "/models/dashing/dashing-features-4.4.jpg",
            bullets: [
              "Luces automáticas. Sistema \“sígueme a casa\”",
            ]
          },
          {
            backgroundImage: "/models/dashing/dashing-features-4.5.jpg",
            bullets: [
              "Sistema de vidrios con apertura y cierre \“ONE TOUCH\”",
            ]
          },
          {
            backgroundImage: "/models/dashing/dashing-features-4.6.jpg",
            bullets: [
              "Techo Panorámico",
            ]
          },
        ]
      },
    ],
    // Ficha técnica disponible
    technicalSheet: true,
    // Video de especificaciones
    specificationsVideo: {
      videoUrl: "https://storage.googleapis.com/xiyimgengine/jetour/especificaciones/interior-dashing.mp4",
      title: "Especificaciones técnicas",
      model: "Dashing",
      logoImage: "/models/dashing/dashing-logo.png",
      logoAlt: "Dashing Logo",
      description: "Diseño que mira al futuro. Tecnológico en cada espacio."
    },
    // Secciones específicas del modelo DASHING
  },
  "dashing-phev": {
    hero: {
      backgroundImage: "/models/dashing-phev/banner-principal.jpg",
      vehicleName: "DASHING PHEV",
      vehicleDescription: "Diseño en tendencia y tecnología inteligente",
      height: "h-screen",
      logoImage: "/models/dashing-phev/dashing-phev-logo.png",
      logoAlt: "DASHING PHEV Logo",
      highlights: [
        { id: 1, text: "Techo panorámico" },
        { id: 2, text: "Potencia combinada 360 Hp" },
        { id: 3, text: "Encendido remoto del motor" },
        { id: 4, text: "Autonomía combinada 1200 km" },
      ],
    },
    featureSlides: [
      {
        title: "Tecnología",
        slides: [
          {
            backgroundImage: "/models/dashing-phev/dashing-phev-features-1.1.jpg",
            bullets: ["Sistema de audio Sony 8"],
          },
          {
            backgroundImage: "/models/dashing-phev/dashing-phev-features-1.2.jpg",
            bullets: ["Control por voz Hello Jetour"],
          },
          {
            backgroundImage: "/models/dashing-phev/dashing-phev-features-1.3.jpg",
            bullets: ["Encendido remoto del motor"],
          },
        ],
      },
      {
        title: "Interior Deportivo",
        slides: [
          {
            backgroundImage: "/models/dashing-phev/dashing-phev-features-2.1.jpg",
            bullets: ["Asientos de cuero"],
          },
          {
            backgroundImage: "/models/dashing-phev/dashing-phev-features-2.2.jpg",
            bullets: ["Volante de cuero con botones multifuncional"],
          },
          {
            backgroundImage: "/models/dashing-phev/dashing-phev-features-2.3.jpg",
            bullets: ['Consola central de mando 12.8"'],
          },
        ],
      },
      {
        title: "Confort",
        slides: [
          {
            backgroundImage: "/models/dashing-phev/dashing-phev-features-3.1.jpg",
            bullets: ["Climatizador bizona"],
          },
          {
            backgroundImage: "/models/dashing-phev/dashing-phev-features-3.2.jpg",
            bullets: ["Apoyabrazos central con refrigeración"],
          },
          {
            backgroundImage: "/models/dashing-phev/dashing-phev-features-3.3.jpg",
            bullets: ["Purificadores de aire inteligente"],
          },
        ],
      },
      {
        title: "Seguridad",
        slides: [
          {
            backgroundImage: "/models/dashing-phev/dashing-phev-features-4.1.jpg",
            bullets: ["Cámara 360 HD panorámica"],
          },
          {
            backgroundImage: "/models/dashing-phev/dashing-phev-features-4.2.jpg",
            bullets: ["Asistencia de conducción inteligente"],
          },
        ],
      },
    ],
    specificationsVideo: {
      imageUrl: "/models/dashing-phev/banner-diseno.jpg",
      title: "Diseño",
      model: "Dashing PHEV",
      logoImage: "/models/dashing-phev/dashing-phev-logo.png",
      logoAlt: "Dashing PHEV Logo",
      description: "Diseño en tendencia y tecnología inteligente",
    },
    vehicleGallery: {
      title: "Descubre su",
      subtitle: "diseño en tendencia",
      images: [
        { id: 1, src: "/models/dashing-phev/dashing-phev-gallery-1.jpg", alt: "JETOUR Dashing PHEV vista frontal" },
        { id: 2, src: "/models/dashing-phev/dashing-phev-gallery-2.jpg", alt: "JETOUR Dashing PHEV vista trasera" },
        { id: 3, src: "/models/dashing-phev/dashing-phev-gallery-3.jpg", alt: "JETOUR Dashing PHEV en movimiento" },
        { id: 4, src: "/models/dashing-phev/dashing-phev-gallery-4.jpg", alt: "JETOUR Dashing PHEV vista lateral" },
        { id: 5, src: "/models/dashing-phev/dashing-phev-gallery-5.jpg", alt: "JETOUR Dashing PHEV detalle llantas" },
        { id: 6, src: "/models/dashing-phev/dashing-phev-gallery-6.jpg", alt: "Interior JETOUR Dashing PHEV" },
      ],
    },
    // Colores tomados del sitio en vivo (jetourecuador.com/vehiculos/dashing-phev, 2026-07-22) —
    // se implementaron después de la migración y no habían quedado en este hardcode. Rename
    // confirmado por Verónica Vergara (McCann): Moongray → Plomo. "Gris" se mantiene como está
    // publicado hoy (su correo lo menciona como "Plata Cemento → Gris", lectura ambigua — confirmar
    // si de verdad hay que cambiar el nombre visible).
    vehicleColorsNew: {
      modelName: "Dashing PHEV",
      colors: [
        {
          name: "Blanco",
          hex: "#F8F9FA",
          image: "/models/dashing-phev/dashing-phev-blanco.png"
        },
        {
          name: "Plata",
          hex: "#C0C0C0",
          image: "/models/dashing-phev/dashing-phev-plata.png"
        },
        {
          name: "Gris",
          hex: "#808080",
          image: "/models/dashing-phev/dashing-phev-gris.png"
        },
        {
          name: "Plomo",
          hex: "#71797E",
          image: "/models/dashing-phev/dashing-phev-moongray.png"
        },
        {
          name: "Negro",
          hex: "#1C1C1C",
          image: "/models/dashing-phev/dashing-phev-negro.png"
        }
      ]
    },
    // 360° y ficha técnica: los agregó la agencia anterior a la landing en vivo durante
    // junio-julio 2026, DESPUÉS de nuestro snapshot de migración, así que no estaban en este
    // hardcode y se perdieron al hacer el cutover. Recuperados del deployment de devxiy
    // (2026-07-30) antes de que lo den de baja. Reportado por Verónica Vergara.
    // Los 35 frames siguen en el bucket GCS de devxiy; respaldados en
    // /Users/elsarito/Jeteour/gcs-jetour-export/360/dashing-phev/.
    threeSixty: {
      model: "dashing-phev",
      totalFrames: 35,
      title: "Vista 360° del Dashing PHEV",
      subtitle:
        "Arrastra para rotar el vehículo o usa los controles de navegación",
      imagePath:
        "https://storage.googleapis.com/xiyimgengine/jetour/360/dashing-phev",
      showInstructions: true,
    },
    technicalSheet: true,
  },
  g700: {
    hero: {
      backgroundImage: "/models/hero/g700-hero.jpg", // Fallback image
      backgroundVideo: "https://storage.googleapis.com/xiyimgengine/jetour/hero/banner-g700.mp4",
      vehicleName: "G700",
      vehicleDescription: "Más allá del horizonte",
      height: "h-screen",
      logoImage: "/models/g700/g700-logo.png",
      logoAlt: "G700",
      highlights: [
        {
          id: 1,
          text: "Motor 2.0L turbo 903 Hp",
        },
        {
          id: 2,
          text: "Dos motores eléctricos",
        },
        {
          id: 3,
          text: "Sistema Híbrido Enchufable",
        },
        {
          id: 4,
          text: "+1400 km de autonomía combinada",
        }
      ]
    },
    vehicleGallery: {
      title: "Descubre su",
      subtitle: "espíritu indomable",
      images: [
        {
          id: 1,
          src: "/models/g700/g700-gallery-1.jpg",
          alt: "JETOUR G700 vista lateral",
        },
        {
          id: 2,
          src: "/models/g700/g700-gallery-2.jpg",
          alt: "JETOUR G700 vista frontal",
        },
        {
          id: 3,
          src: "/models/g700/g700-gallery-3.jpg",
          alt: "Interior JETOUR G700",
        },
        {
          id: 4,
          src: "/models/g700/g700-gallery-4.jpg",
          alt: "Interior JETOUR G700",
        },
        {
          id: 5,
          src: "/models/g700/g700-gallery-5.jpg",
          alt: "JETOUR G700 en acción",
        },
        {
          id: 6,
          src: "/models/g700/g700-gallery-6.jpg",
          alt: "JETOUR G700 en acción",
        },
      ],
    },
    // Sección 360° del modelo G700
    threeSixty: {
      model: "g700",
      totalFrames: 24,
      title: "Vista 360° del G700",
      subtitle:
        "Arrastra para rotar el vehículo o usa los controles de navegación",
      imagePath: "https://storage.googleapis.com/xiyimgengine/jetour/360/g700",
      showInstructions: true,
    },
    // Selector de colores nuevo
    vehicleColorsNew: {
      modelName: "G700",
      colors: [
        {
          name: "Blanco",
          hex: "#FAFAFA",
          image: "/models/g700/g700-color-blanco.png"
        },
        {
          name: "Naranja Mate",
          hex: "#943213",
          image: "/models/g700/g700-color-naranja.png"
        },
        {
          name: "Negro",
          hex: "#1C1C1C",
          image: "/models/g700/g700-color-negro.png"
        },
        {
          // Retirado a pedido de Jetour (correo Verónica Vergara, 2026-07). Oculto, no borrado.
          name: "Plata Metalizado",
          hex: "#B8BFC7",
          image: "/models/g700/g700-color-plata.png",
          hidden: true
        },
        {
          name: "Arena",
          hex: "#A09279",
          image: "/models/g700/g700-color-arena.png"
        },
        {
          name: "Azul",
          hex: "#1D3852",
          image: "/models/g700/g700-color-azul.png"
        },
        {
          name: "Plomo Mate",
          hex: "#616970",
          image: "/models/g700/g700-color-plomo-mate.png"
        }
      ]
    },
    // Ficha técnica disponible
    technicalSheet: true,
    // Video de especificaciones
    specificationsVideo: {
      videoUrl: "https://storage.googleapis.com/xiyimgengine/jetour/especificaciones/interior-g700.mp4",
      title: "Especificaciones del G700",
      subtitle: "Conoce todos los detalles técnicos",
      model: "G700",
      logoImage: "/models/g700/g700-logo.png",
      logoAlt: "G700 Logo",
      description: "Diseñado para destacar. Lujo, tecnología y potencia 4x4 para cualquier terreno."
    },
    // Feature Slides - Array dinámico de módulos
    // Puede tener 1, 2, 5 o cualquier cantidad de categorías
    // Cada categoría renderiza como un módulo de pantalla completa independiente
    featureSlides: [
      {
        title: "Desempeño",
        slides: [
          {
            backgroundImage: "/models/g700/g700-features-1.1.jpg",
            bullets: [
              "903 Hp de potencia combinada Motor Combustión 210 Hp + Motor eléctrico frontal 285 Hp + Motor eléctrico trasero 408 Hp",
            ]
          },
          {
            backgroundImage: "/models/g700/g700-features-1.2.jpg",
            bullets: [
              "De 0 a 100 Km/h en 4.6 segundos",
            ]
          },
          {
            backgroundImage: "/models/g700/g700-features-1.3.jpg",
            bullets: [
              "4x4 con 8 modos de manejo",
              "Chasis de estructura GAIA de alta resistencia (Generation All-Terrain Intelligent Architecture)",
            ]
          },
          {
            backgroundImage: "/models/g700/g700-features-1.4.jpg",
            bullets: [
              "Más de 1400 km de autonomía combinada",
            ]
          },
        ]
      },
      {
        title: "Confort",
        slides: [
          {
            backgroundImage: "/models/g700/g700-features-2.1.jpg",
            bullets: [
              "Asientos eléctricos, super lujo zero gravity, de cuero",
            ]
          },
          {
            backgroundImage: "/models/g700/g700-features-2.2.jpg",
            bullets: [
              "3 filas de asientos para 6 pasajeros",
              "Calefacción, ventilación y masajeador en los asientos",
            ]
          },
          {
            backgroundImage: "/models/g700/g700-features-2.3.jpg",
            bullets: [
              "Sunroof delantero y trasero",
              "Pantalla de videos segunda fila",
            ]
          },
          {
            backgroundImage: "/models/g700/g700-features-2.4.jpg",
            bullets: [
              "Aire acondicionado individual por pasajero",
            ]
          },
          {
            backgroundImage: "/models/g700/g700-features-2.5.jpg",
            bullets: [
              "Interior premium",
            ]
          },
        ]
      },
      {
        title: "Tecnología",
        slides: [
          {
            backgroundImage: "/models/g700/g700-features-3.1.jpg",
            bullets: [
              "Consola central de mando 15,6\"",
              "Pantalla de instrumentos de 35,4\"",
            ]
          },
          {
            backgroundImage: "/models/g700/g700-features-3.2.jpg",
            bullets: [
              "Volante con Joysticks para control, multifunción",
              "Botón de encendido",
            ]
          },
        ]
      },
      {
        title: "Capacidad Off-Road",
        slides: [
          {
            backgroundImage: "/models/g700/g700-features-4.1.jpg",
            bullets: [
              "Bloqueo de los diferenciales delantero y trasero",
              "Giro 180°",
            ]
          },
          {
            backgroundImage: "/models/g700/g700-features-4.2.jpg",
            bullets: [
              "Capacidad de Vadeo 90 cm",
            ]
          },
          {
            backgroundImage: "/models/g700/g700-features-4.3.jpg",
            bullets: [
              "8 Modos de Manejo",
            ]
          },
          {
            backgroundImage: "/models/g700/g700-features-4.4.jpg",
            bullets: [
              "4x4 con caja reductora 4 LOW",
            ]
          },
        ]
      },
      {
        title: "Seguridad",
        slides: [
          {
            backgroundImage: "/models/g700/g700-features-5.1.jpg",
            bullets: [
              "11 Airbags",
            ]
          },
          {
            backgroundImage: "/models/g700/g700-features-5.2.jpg",
            bullets: [
              "Asistente para arranque en pendiente y control de descenso",
              "Frenos de disco con ABS y sistema de control de estabilidad y EBD",
            ]
          },
          {
            backgroundImage: "/models/g700/g700-features-5.3.jpg",
            bullets: [
              "Sistema de detección de punto ciego",
              "Cámara de Retro 360° más sensores delanteros y traseros",
            ]
          },
        ]
      },
      {
        title: "Extras",
        slides: [
          {
            backgroundImage: "/models/g700/g700-features-6.1.jpg",
            bullets: [
              "Sistema de sonido Lexicon By Harman",
            ]
          },
          {
            backgroundImage: "/models/g700/g700-features-6.2.jpg",
            bullets: [
              "Estribos laterales automáticos",
            ]
          },
          {
            backgroundImage: "/models/g700/g700-features-6.3.jpg",
            bullets: [
              "Sistema de iluminación interna multicolor",
            ]
          },
          {
            backgroundImage: "/models/g700/g700-features-6.4.jpg",
            bullets: [
              "Almacenamiento sin límites",
            ]
          },
          {
            backgroundImage: "/models/g700/g700-features-6.5.jpg",
            bullets: [
              "Refrigeradora central",
            ]
          },
        ]
      },
    ],
  },
  "t1-phev": {
    hero: {
      backgroundImage: "/models/hero/t1-phev-hero.jpg", // Fallback image
      backgroundVideo: "https://storage.googleapis.com/xiyimgengine/jetour/hero/banner-t1-phev.mp4",
      vehicleName: "T1 PHEV",
      vehicleDescription: "Apuesta por elevar tu nivel",
      height: "h-screen",
      logoImage: "/models/t1-phev/t1-phev-logo.png",
      logoAlt: "T1 PHEV Logo",
      highlights: [
        {
          id: 1,
          text: "Motor Combustion 1.5 Turbo 136 Hp"
        },
        {
          id: 2,
          text: "+ 1200 Km Autonomía"
        },
        {
          id: 3,
          text: "Híbrido Enchufable PHEV"
        },
        {
          id: 4,
          text: "Motor Eléctrico 240 Hp"
        }
      ]
    },
    vehicleGallery: {
      title: "Galería del JETOUR T1 PHEV",
      subtitle: "Descubre cada detalle",
      images: [
        {
          id: 1,
          src: "/models/t1-phev/t1-phev-gallery-1.jpg",
          alt: "JETOUR T1 PHEV vista lateral",
        },
        {
          id: 2,
          src: "/models/t1-phev/t1-phev-gallery-2.jpg",
          alt: "JETOUR T1 PHEV vista frontal",
        },
        {
          id: 3,
          src: "/models/t1-phev/t1-phev-gallery-3.jpg",
          alt: "Interior JETOUR T1 PHEV",
        },
        {
          id: 4,
          src: "/models/t1-phev/t1-phev-gallery-4.jpg",
          alt: "Interior JETOUR T1 PHEV",
        },
        {
          id: 5,
          src: "/models/t1-phev/t1-phev-gallery-5.jpg",
          alt: "JETOUR T1 PHEV en acción",
        },
      ],
    },
    featureSlides: [
      {
        title: "Tecnología",
        slides: [
          {
            backgroundImage: "/models/t1-phev/t1-phev-features-1.1.jpg",
            bullets: [
              "Consola central de mando 15,6\”",
              "Volante de cuero multifunción con mandos",
            ]
          },
        ]
      },
      {
        title: "Confort",
        slides: [
          {
            backgroundImage: "/models/t1-phev/t1-phev-features-2.2.jpg",
            bullets: [
              "Apertura de puerta de maletero automática",
              "Aire Acondicionado de doble zona",
            ]
          },
          {
            backgroundImage: "/models/t1-phev/t1-phev-features-2.3.jpg",
            bullets: [
              "Asientos deportivos premium de Cuero, zero gravity",
              "Ventilación en los asientos",
            ]
          },
          {
            backgroundImage: "/models/t1-phev/t1-phev-features-2.4.jpg",
            bullets: [
              "Asientos eléctricos ajustables",
            ]
          },
        ]
      },
      {
        title: "Desempeño",
        slides: [
          {
            backgroundImage: "/models/t1-phev/t1-phev-features-4.1.jpg",
            bullets: [
              "Gran Potencia por su sistema híbrido enchufable",
              "Capacidad de Manejo solo en modo Eléctrico",
            ]
          },
          {
            backgroundImage: "/models/t1-phev/t1-phev-features-3.1.jpg",
            bullets: [
              "Gran ahorro de combustible", 
              "Ideal para viajes",
            ]
          },
        ]
      },
      {
        title: "Extras",
        slides: [
          {
            backgroundImage: "/models/t1-phev/t1-phev-features-5.1.jpg",
            bullets: [
              "Cargador celular inalambrico",
              "Freno de Mano de botón",

            ]
          },
        ]
      },
    ],
    // Ficha técnica disponible
    technicalSheet: true,
    // Video de especificaciones
    specificationsVideo: {
      videoUrl: "https://storage.googleapis.com/xiyimgengine/jetour/especificaciones/interior-t1-phev.mp4",
      title: "Especificaciones técnicas",
      model: "T1 PHEV",
      logoImage: "/models/t1/t1-phev-logo.png",
      logoAlt: "T1 PHEV Logo",
      description: "Un SUV que destaca con su estilo urbano. 1000 km de autonomía combinada."
    },
  },
  // Landing F700 (campaña) armada con textos y fotos entregados por Jetour el 2026-07-17/19.
  // Pendiente del cliente: video/foto de hero dedicados, logo del modelo, fotos de galería,
  // imagen por categoría de features, video de especificaciones y ficha técnica PDF.
  // hero.backgroundImage usa temporalmente el render de color "Grey Matte" mientras llega el banner oficial.
  f700: {
    hero: {
      // Banner y logo entregados por Jetour el 2026-08-12. A diferencia del resto de modelos,
      // cuyos videos viven en el bucket GCS de la agencia anterior, estos se sirven desde el
      // repo: no tenemos acceso de escritura a ese bucket. Ver nota de bandwidth abajo.
      backgroundImage: "/models/f700/f700-gallery-1.jpg",
      backgroundVideo: "/models/f700/f700-banner.mp4",
      vehicleName: "F700",
      vehicleDescription: "Potencia, tecnología y autonomía para llegar más lejos.",
      height: "h-screen",
      logoImage: "/models/f700/f700-logo.png",
      logoAlt: "F700",
      highlights: [
        { id: 1, text: "Autonomía combinada +1400 Km" },
        { id: 2, text: "903 HP de potencia combinada" },
        { id: 3, text: "Motor híbrido 2.0 TD" },
        { id: 4, text: "Tracción eléctrica 4x4" },
      ],
    },
    // Sección 360° del modelo F700 (versión "Highway grey" entregada por el cliente)
    threeSixty: {
      model: "f700",
      totalFrames: 72,
      title: "Vista 360° del F700",
      subtitle:
        "Arrastra para rotar el vehículo o usa los controles de navegación",
      imagePath: "/models/f700/360",
      showInstructions: true,
    },
    // Selector de colores nuevo
    vehicleColorsNew: {
      modelName: "F700",
      colors: [
        {
          name: "Silver Snow",
          hex: "#9BA0A8",
          image: "/models/f700/f700-color-silver-snow.png"
        },
        {
          name: "Nomad Brown",
          hex: "#A89C8E",
          image: "/models/f700/f700-color-nomad-brown.png"
        },
        {
          name: "Himalaya White",
          hex: "#D8D9DA",
          image: "/models/f700/f700-color-himalaya-white.png"
        },
        {
          // "Grey Mate" (una sola t) tal como lo pidió Jetour el 2026-07-30. El archivo que
          // entregaron se llama grey-matte y en inglés la grafía sería "Matte", pero el nombre
          // visible lo define el cliente.
          name: "Grey Mate",
          hex: "#7C848B",
          image: "/models/f700/f700-color-grey-matte.png"
        },
        {
          name: "Frontier Black",
          hex: "#1A1B1F",
          image: "/models/f700/f700-color-frontier-black.png"
        }
      ]
    },
    // Feature Slides - textos entregados por el cliente; sin imagen propia por categoría todavía
    featureSlides: [
      // Imágenes de specs entregadas por Jetour (2026-08-12, carpeta "WEB SPECS"), originales
      // a 5760x3240 y hasta 12 MB; reducidas a 2560x1440 (~550 KB) para igualar al resto del
      // sitio. Se pasa de una slide con todas las viñetas a una slide por imagen, que es el
      // patrón de los otros modelos.
      // Las viñetas que el docx nuevo no lista pero SÍ están publicadas hoy (9 Airbags, asientos
      // traseros, gancho de remolque, antirrobo) se conservan agrupadas al final de su categoría
      // — pendiente que el cliente confirme si se retiran. No se borra copy sin aprobación.
      {
        title: "Tecnología",
        slides: [
          {
            backgroundImage: "/models/f700/f700-features-1.1.jpg",
            bullets: [
              "Pantalla Táctil LCD 15.6”",
              "Pantalla de instrumentos 35.4”",
            ]
          },
          {
            backgroundImage: "/models/f700/f700-features-1.2.jpg",
            bullets: [
              "Bluetooth, Apple CarPlay y Android Auto",
              "Control por voz “Hola Jetour”",
            ]
          },
          {
            backgroundImage: "/models/f700/f700-features-1.3.jpg",
            bullets: [
              "Sistema de audio JAMBO de 10 parlantes",
            ]
          },
        ]
      },
      {
        title: "Confort",
        slides: [
          {
            backgroundImage: "/models/f700/f700-features-2.1.jpg",
            bullets: [
              "Asientos de cuero con ventilación/calefacción",
              "Asientos delanteros con función de masaje",
            ]
          },
          {
            backgroundImage: "/models/f700/f700-features-2.2.jpg",
            bullets: [
              "Techo panorámico",
            ]
          },
          {
            backgroundImage: "/models/f700/f700-features-2.3.jpg",
            bullets: [
              "Refrigerador",
              "Asientos traseros con reposabrazos y portavasos",
            ]
          },
        ]
      },
      {
        title: "Seguridad",
        slides: [
          {
            backgroundImage: "/models/f700/f700-features-3.1.jpg",
            bullets: [
              "Cámara de asistencia al conductor HD 540",
            ]
          },
          {
            backgroundImage: "/models/f700/f700-features-3.2.jpg",
            bullets: [
              "Sistema automático de frenado (AEB)",
            ]
          },
          {
            backgroundImage: "/models/f700/f700-features-3.3.jpg",
            bullets: [
              "Monitoreo punto ciego (BSD)",
              "9 Airbags",
            ]
          },
        ]
      },
      {
        title: "Extras",
        slides: [
          {
            backgroundImage: "/models/f700/f700-features-4.1.jpg",
            bullets: [
              "Luz ambiental de 64 colores",
            ]
          },
          {
            backgroundImage: "/models/f700/f700-features-4.2.jpg",
            bullets: [
              "Llave inteligente",
              "Gancho de remolque",
              "Sistema antirrobo electrónico del motor",
            ]
          },
        ]
      },
    ],
    // Ficha técnica entregada por Jetour (2026-07-22) — comprimida de 16.4MB a ~850KB para web
    technicalSheet: true,
    // Galería entregada por Jetour el 2026-08-12: 6 PNG a 5760x3240 (138 MB) reducidas a
    // 1920x1080 JPG (2.7 MB), que es la medida del resto de galerías del sitio.
    vehicleGallery: {
      title: "Descubre su",
      subtitle: "potencia híbrida",
      images: [
        { id: 1, src: "/models/f700/f700-gallery-1.jpg", alt: "JETOUR F700 vista lateral" },
        { id: 2, src: "/models/f700/f700-gallery-2.jpg", alt: "JETOUR F700 vista frontal" },
        { id: 3, src: "/models/f700/f700-gallery-3.jpg", alt: "JETOUR F700 vista trasera" },
        { id: 4, src: "/models/f700/f700-gallery-4.jpg", alt: "JETOUR F700 en movimiento" },
        { id: 5, src: "/models/f700/f700-gallery-5.jpg", alt: "JETOUR F700 detalle exterior" },
        { id: 6, src: "/models/f700/f700-gallery-6.jpg", alt: "JETOUR F700 interior" },
      ],
    },
    // Video de interior entregado por Jetour el 2026-08-12. Recomprimido de 10.1 MB a 4 MB
    // manteniendo 1080p. Igual que el banner, se sirve desde el repo y no desde GCS.
    specificationsVideo: {
      videoUrl: "/models/f700/f700-interior.mp4",
      title: "Especificaciones del F700",
      subtitle: "Conoce todos los detalles técnicos",
      model: "F700",
      logoImage: "/models/f700/f700-logo.png",
      logoAlt: "F700 Logo",
      description:
        "Potencia, tecnología y autonomía para llegar más lejos.",
    },
  },
};

// Main function to get all page data
export function getPageData(pageKey) {
  return {
    hero: getHeroData(pageKey),
    videoGallery: videoGalleryData[pageKey] || videoGalleryData.home,
    globalStats: globalStatsData[pageKey] || globalStatsData.home,
    vehicleShowcase: vehicleShowcaseData[pageKey] || vehicleShowcaseData.home,
    quoteForm: quoteFormData[pageKey] || quoteFormData.home,
    roldanSection: roldanSectionData[pageKey] || roldanSectionData.home,
    jetourLife: jetourLifeData[pageKey] || jetourLifeData.home,
    contact: contactPageData[pageKey] || contactPageData.contacto,
    postventa: postventaPageData[pageKey] || postventaPageData.postventa,
    concesionarios:
      concesionariosPageData[pageKey] || concesionariosPageData.concesionarios,
    noticias: noticiasPageData[pageKey] || noticiasPageData.noticias,
    vehicleModels: vehicleModels,
  };
}

// Individual getter functions for specific data
export function getVideoGalleryData(key = "home") {
  return videoGalleryData[key] || videoGalleryData.home;
}

export function getGlobalStatsData(key = "home") {
  return globalStatsData[key] || globalStatsData.home;
}

export function getVehicleShowcaseData(key = "home") {
  return vehicleShowcaseData[key] || vehicleShowcaseData.home;
}

export function getQuoteFormData(key = "home") {
  return quoteFormData[key] || quoteFormData.home;
}

export function getRoldanSectionData(key = "home") {
  return roldanSectionData[key] || roldanSectionData.home;
}

export function getJetourLifeData(key = "home") {
  return jetourLifeData[key] || jetourLifeData.home;
}

export function getContactPageData(key = "contacto") {
  return contactPageData[key] || contactPageData.contacto;
}

export function getPostventaPageData(key = "postventa") {
  return postventaPageData[key] || postventaPageData.postventa;
}

export function getConcesionariosPageData(key = "concesionarios") {
  return concesionariosPageData[key] || concesionariosPageData.concesionarios;
}

export function getNoticiasPageData(key = "noticias") {
  return noticiasPageData[key] || noticiasPageData.noticias;
}

// Function to get specific vehicle model page data
export function getVehicleModelPageData(modelKey) {
  const key = modelKey?.toLowerCase() || "";
  return vehicleModelPagesData[key] || vehicleModelPagesData["t1"];
}

// A diferencia de getVehicleModelPageData (que cae a T1 a propósito para las landings
// de campaña con modelo fijo), esto permite a /vehiculos/[model] distinguir un slug
// real de uno inexistente y responder 404 en vez de servir contenido de T1 en silencio.
export function isKnownVehicleModel(modelKey) {
  const key = modelKey?.toLowerCase() || "";
  return Boolean(vehicleModelPagesData[key]);
}
