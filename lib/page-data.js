// Centralized page data configuration
// This file contains all the data for each page to make it easy to maintain and modify

// Hero configurations
import { getHeroData } from "./hero-data";

// Vehicle models data
import { vehicleModels } from "./vehicle-models";

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
              "Volante de cuero multifunción con mandos",
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
              "Apertura de puerta de maletero automática",
              "Asiento del piloto con regulación eléctrica con 3 memorias",
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
              "Sistema ADAS (advance Driver Assistance System)",
              "Asistente para arranque en pendiente y control de descenso",
              "Frenos de disco con ABS y sistema de control de estabilidad y EBD",
              "Sistema de detección de punto ciego",
              "6 Airbags",
              "Cámara de Retro 540° más sensores delanteros y traseros",
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
              "Bloqueo de los diferenciales",
              "Transmisión 8AT",
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
              "Luces y Plumas automáticas",
              "Freno de Mano de botón",
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
              "Bloqueo de los diferenciales",
              "Transmisión 7 DCT con paletas al volante",
            ]
          },
          {
            backgroundImage: "/models/t2/t2-features-1.2.jpg",
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
            backgroundImage: "/models/t2/t2-features-1.4.jpg",
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
              "Volante de cuero multifunción con mandos",
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
              "Ventilación en los asientos",
            ]
          },
          {
            backgroundImage: "/models/t2/t2-features-3.2.jpg",
            bullets: [
              "USB A y C mas cargador Inalámbrico",
              "Aire Acondicionado climatizador de doble zona",
            ]
          },
          {
            backgroundImage: "/models/t2/t2-features-3.3.jpg",
            bullets: [
              "Asiento del piloto con regulación eléctrica con 3 memorias",
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
            backgroundImage: "/models/t2-phev/t2-phev-features-2.1.jpg",
            bullets: [
              "Asientos deportivos premium de cuero",
            ]
          },
          {
            backgroundImage: "/models/t2-phev/t2-phev-features-2.2.jpg",
            bullets: [
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
              "Luces y Plumas automáticas",
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
          name: "Azul Cielo",
          hex: "#5DADE2",
          image: "/models/x50/x50-color-azul.png"
        },
        {
          name: "Blanco Perlado",
          hex: "#F8F9FA",
          image: "/models/x50/x50-color-blanco.png"
        },
        {
          name: "Gris Titanio",
          hex: "#6C7A89",
          image: "/models/x50/x50-color-gris.png"
        },
        {
          name: "Negro Noche",
          hex: "#1C1C1C",
          image: "/models/x50/x50-color-negro.png"
        },
        {
          name: "Plata Brillante",
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
              "Botón de encendido",
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
              "Botón de encendido",
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
          name: "Negro Noche",
          hex: "#1C1C1C",
          image: "/models/x70-sport/x70-sport-color-black.png"
        },
        {
          name: "Azul Futuro",
          hex: "#2E86AB",
          image: "/models/x70-sport/x70-sport-color-future.blue.png"
        },
        {
          name: "Marrón Ahumado",
          hex: "#b9b3b3",
          image: "/models/x70-sport/x70-sport-color-smoky-brown.png"
        },
        {
          name: "Blanco Perla",
          hex: "#F8F9FA",
          image: "/models/x70-sport/x70-sport-color-white.png"
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
          name: "Azul Profundo",
          hex: "#1E3A8A",
          image: "/models/x70/x70-plus-color-azul.png"
        },
        {
          name: "Blanco Perlado",
          hex: "#F8F9FA",
          image: "/models/x70/x70-plus-color-blanco.png"
        },
        {
          name: "Negro Elegante",
          hex: "#1C1C1C",
          image: "/models/x70/x70-plus-color-negro.png"
        },
        {
          name: "Plata Metálico",
          hex: "#C0C0C0",
          image: "/models/x70/x70-plus-color-plata.png"
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
              "4 Airbags",
              "Asistente para arranque en pendiente",
            ]
          },
          {
            backgroundImage: "/models/x70/x70-plus-features-1.2.jpg",
            bullets: [
              "Frenos de disco con ABS y sistema de control de estabilidad",
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
              "Llave inteligente con manos libres",
            ]
          },
          {
            backgroundImage: "/models/x70/x70-plus-features-2.2.jpg",
            bullets: [
              "Apple Carplay y Android Auto",
              "Botón de encendido",
              "Botón freno de mano",
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
              "Techo Panorámico",
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
          name: "Azul Cielo",
          hex: "#87CEEB",
          image: "/models/dashing/dashing-color-azul.png"
        },
        {
          name: "Blanco Perlado",
          hex: "#F8F9FA",
          image: "/models/dashing/dashing-color-blanco.png"
        },
        {
          name: "Gris Metálico",
          hex: "#808080",
          image: "/models/dashing/dashing-color-gris.png"
        },
        {
          name: "Negro Profundo",
          hex: "#1C1C1C",
          image: "/models/dashing/dashing-color-negro.png"
        },
        {
          name: "Plata Brillante",
          hex: "#C0C0C0",
          image: "/models/dashing/dashing-color-plata.png"
        },
        {
          name: "Rojo Pasión",
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
          {
            backgroundImage: "/models/dashing/dashing-features-2.5.jpg",
            bullets: [
              "Asiento del piloto con regulación eléctrica",
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
            backgroundImage: "/models/dashing/dashing-features-3.4.jpg",
            bullets: [
              "Asistente para arranque en pendiente y control de descenso",
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
      videoUrl: "https://storage.googleapis.com/xiyimgengine/jetour/especificaciones/interior-dashing-2.mp4",
      title: "Especificaciones técnicas",
      model: "Dashing",
      logoImage: "/models/dashing/dashing-logo.png",
      logoAlt: "Dashing Logo",
      description: "Diseño que mira al futuro. Tecnológico en cada espacio."
    },
    // Secciones específicas del modelo DASHING
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
          text: "Motonr 2.0L turbo 903 Hp",
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
          name: "Blanco Perla",
          hex: "#FAFAFA",
          image: "/models/g700/g700-color-blanco.png"
        },
        {
          name: "Naranja Adventure",
          hex: "#E85D2C", 
          image: "/models/g700/g700-color-naranja.png"
        },
        {
          name: "Negro Obsidiana",
          hex: "#1C1C1C",
          image: "/models/g700/g700-color-negro.png"
        },
        {
          name: "Plata Metalizado",
          hex: "#B8BFC7",
          image: "/models/g700/g700-color-plata.png"
        }
      ]
    },
    // NO tiene ficha técnica
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
              "Más de 1400 km de autonomía combinada",
            ]
          },
          {
            backgroundImage: "/models/g700/g700-features-1.2.jpg",
            bullets: [
              "De 0 a 100 Km/h en 4.6 segundos",
              "4x4 con 8 modos de manejo",
              "Chasis de estructura GAIA de alta resistencia (Generation All-Terrain Intelligent Architecture)"
            ]
          }
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
              "3er puesto VIP con mesa de trabajo",
              "Pantalla de videos segunda fila"
            ]
          }
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
              "Volante con Joysticks para control, multifunción",
              "Apple Carplay y Android Auto",
              "Control por voz \"Hola Jetour\"",
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
              "4x4 con caja reductora 4 LOW",
              "Bloqueo de los diferenciales delantero y trasero",
              "Capacidad de Vadeo 90 cm",
              "Giro 180°",
              "8 Modos de Manejo",
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
              "Asistente para arranque en pendiente y control de descenso",
              "Frenos de disco con ABS y sistema de control de estabilidad y EBD",
              "Sistema de detección de punto ciego",
              "Cámara de Retro 360° más sensores delanteros y traseros",
              "Sistema ADAS (advance Driver Assistance System)",
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
              "Control por Voz \“Hola Jetour\”",
              "Llave inteligente con manos libres",
              "Freno de Mano de botón",
              "Luces diurnas LED",
              "Retrovisores eléctricos plegables",
              "Sistema de Luces automáticas con el sistema \“sígueme a casa\”",
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
              "Carplay y Android Auto",
            ]
          },
        ]
      },
      {
        title: "Confort",
        slides: [
          {
            backgroundImage: "/models/t1-phev/t1-phev-features-2.1.jpg",
            bullets: [
              "Asientos deportivos premium de Cuero, zero gravity",
              "Ventilación en los asientos",
            ]
          },
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
              "Asiento del piloto con regulación eléctrica con 3 memorias",
            ]
          }
        ]
      },
      {
        title: "Desempeño",
        slides: [
          {
            backgroundImage: "/models/t1-phev/t1-phev-features-4.1.jpg",
            bullets: [
              "Gran Potencia por su sistema híbrido enchufable",
              "Ideal para viajes",
            ]
          },
          {
            backgroundImage: "/models/t1-phev/t1-phev-features-3.1.jpg",
            bullets: [
              "Gran ahorro de combustible", 
              "Capacidad de Manejo solo en modo Eléctrico",
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
              "4 Modos de manejo",

            ]
          },
        ]
      },
    ],
    // NO tiene ficha técnica
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
  return vehicleModelPagesData[modelKey] || vehicleModelPagesData["t1"];
}
