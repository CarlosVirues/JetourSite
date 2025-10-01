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
        title:
          "Apuesta por el Dashing ll Jetour Ecuador",
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
        features: ["Motor eficiente", "Tecnología avanzada", "Diseño moderno"],
      },
      {
        id: "t2-phev",
        name: "T2 PHEV",
        image: "/models/model-t2.jpg",
        description: "Tecnología híbrida para un futuro sostenible",
        features: ["Motor híbrido", "Eficiencia máxima", "Emisiones reducidas"],
      },
      {
        id: "x50",
        name: "X50",
        image: "/models/model-x50.jpg",
        description: "SUV compacto con personalidad única",
        features: ["Diseño SUV", "Interior espacioso", "Conectividad total"],
      },
      {
        id: "x70-sport",
        name: "X70 Sport",
        image: "/models/model-x70.jpg",
        description: "La experiencia deportiva que buscabas",
        features: ["Motor deportivo", "Suspensión deportiva", "Aerodinámica"],
      },
      {
        id: "x70-plus",
        name: "X70 PLUS",
        image: "/models/model-x70.jpg",
        description: "Máximo espacio y comodidad para toda la familia",
        features: ["Espacio premium", "Confort familiar", "Versatilidad"],
      },
      {
        id: "dashing",
        name: "DASHING",
        image: "/models/model-t1.jpg", // Placeholder
        description: "El futuro de la movilidad ya está aquí",
        features: [
          "Diseño futurista",
          "Tecnología de punta",
          "Experiencia premium",
        ],
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
    title: "Grupo Roldán",
    subtitle: "Tu socio de confianza en Ecuador",
    description:
      "Con más de 25 años de experiencia en el mercado automotriz ecuatoriano, Grupo Roldán se ha consolidado como el distribuidor oficial de JETOUR en Ecuador, ofreciendo productos de calidad mundial y un servicio excepcional.",
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
    backgroundImage: "/roldan-section-bg.jpg",
    logo: "/roldan-logo.png",
  },
};

// Jetour Life data
export const jetourLifeData = {
  home: {
    title: "JETOUR Life",
    subtitle: "Más que un vehículo, un estilo de vida",
    description:
      "Únete a la comunidad JETOUR y descubre un mundo de experiencias, aventuras y conexiones que van más allá de la conducción.",
    features: [
      {
        title: "Eventos Exclusivos",
        description:
          "Participa en eventos y actividades únicas para propietarios JETOUR",
        image: "/post-jetourlife.jpg",
      },
      {
        title: "Comunidad Global",
        description:
          "Conecta con otros propietarios JETOUR alrededor del mundo",
        image: "/post-jetourlife.jpg",
      },
      {
        title: "Beneficios Especiales",
        description: "Accede a descuentos y promociones exclusivas",
        image: "/post-jetourlife.jpg",
      },
    ],
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
  },
};

// Vehicle Model Pages data - Estructura específica para cada modelo
export const vehicleModelPagesData = {
  t1: {
    hero: {
      backgroundImage: "/models/hero/t1-hero.jpg",
      vehicleName: "T1",
      vehicleDescription: "Apuesta por un 4x4 que destaca",
      height: "h-96 lg:h-[600px]",
      logoImage: "/models/t1/t1-logo.png",
      logoAlt: "T1 Logo",
    },
    features: {
      items: [
        {
          id: 1,
          title: "Motor",
          image: "/models/t1/t1-features-1.jpg",
          description: "2.0 TGDI",
        },
        {
          id: 2,
          title: "Estructura",
          image: "/models/t1/t1-features-2.jpg",
          description: "4X4 (5 puertas y 5 asientos)",
        },
        {
          id: 3,
          title: "Transmisión",
          image: "/models/t1/t1-features-3.jpg",
          description: "8 AT Electrónica",
        },
      ],
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
    heroShowcase: {
      title: "Experimenta la libertad de ir a donde quieras",
      subtitle: "Descubre todo lo que te espera a bordo de un T1",

      slides: [
        {
          id: 1,
          image: "/models/t1/t1-showcase-1.jpg",
          title: "8 modos de manejo”",
        },

        {
          id: 2,
          image: "/models/t1/t1-showcase-2.jpg",
          title: "Pantalla táctil 15.6",
        },
        {
          id: 3,
          image: "/models/t1/t1-showcase-3.jpg",
          title: "Asiento eléctrico 6 vías y copilota 4 vías",
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
  },
  t2: {
    hero: {
      backgroundImage: "/models/hero/t2-hero.jpg",
      vehicleName: "T2",
      vehicleDescription: "Apuesta por nuevas experiencias",
      height: "h-96 lg:h-[600px]",
      logoImage: "/models/t2/t2-logo.png",
      logoAlt: "T2 Logo",
    },
    features: {
      items: [
        {
          id: 1,
          title: "Motor",
          image: "/models/t2/t2-features-1.jpg",
          description: "2.0 TGDI",
        },
        {
          id: 2,
          title: "Estructura",
          image: "/models/t2/t2-features-2.jpg",
          description: "4X4 (5 puertas y 5 asientos)",
        },
        {
          id: 3,
          title: "Transmisión",
          image: "/models/t2/t2-features-3.jpg",
          description: "7 DCT Doble embrague",
        },
      ],
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
    heroShowcase: {
      title: "JETOUR T2 Libera tu instinto explorador",
      subtitle:
        "Potencia, inteligencia y un espíritu indomable en cada kilómetro.",

      slides: [
        {
          id: 1,
          image: "/models/t2/t2-showcase-1.jpg",
          title: "Sunroof panorámico",
        },
        {
          id: 2,
          image: "/models/t2/t2-showcase-2.jpg",
          title: "6 modos de manejo",
        },
        {
          id: 3,
          image: "/models/t2/t2-showcase-3.jpg",
          title: "Pantalla táctil 15.6”",
        },
        {
          id: 4,
          image: "/models/t2/t2-showcase-4.jpg",
          title: "Cámara 5400 HD",
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
    // Aquí se pueden agregar más secciones específicas del modelo T2
    // specifications: {...},
    // gallery: [...],
  },
  "t2-phev": {
    hero: {
      backgroundImage: "/models/hero/t2-phev-hero.jpg",
      vehicleName: "T2 PHEV",
      vehicleDescription: "Apuesta por tecnología híbrida",
      height: "h-96 lg:h-[600px]",
      logoImage: "/models/t2-phev/t2-phev-logo.png",
      logoAlt: "T2 PHEV Logo",
    },
    features: {
      items: [
        {
          id: 1,
          title: "Motor",
          image: "/models/t2-phev/t2-phev-features-1.jpg",
          description:
            "3 motores: Combustión 1.5L turboalimentado, Motor eléctrico 1 - 100 Hp, Motor eléctrico 2 - 120 Hp",
        },
        {
          id: 2,
          title: "Estructura",
          image: "/models/t2-phev/t2-phev-features-2.jpg",
          description: "4X2 (5 puertas y 5 asientos)",
        },
        {
          id: 3,
          title: "Transmisión",
          image: "/models/t2-phev/t2-phev-features-3.jpg",
          description: "DHT 3 velocidades",
        },
      ],
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
          src: "/models/t2-phev/t2-phev-gallery-3.jpg",
          alt: "Interior JETOUR T2 PHEV",
        },
        {
          id: 4,
          src: "/models/t2-phev/t2-phev-gallery-4.jpg",
          alt: "Maletero JETOUR T2 PHEV",
        },
        {
          id: 5,
          src: "/models/t2-phev/t2-phev-gallery-5.jpg",
          alt: "Asientos JETOUR T2 PHEV",
        },
        {
          id: 6,
          src: "/models/t2-phev/t2-phev-gallery-6.jpg",
          alt: "Asientos JETOUR T2 PHEV",
        },
      ],
    },
    heroShowcase: {
      title: "JETOUR T2 PHEV",
      subtitle:
        "Movilidad inteligente, eficiente y sofisticada.",

      slides: [
        {
          id: 1,
          image: "/models/t2-phev/t2-phev-showcase-1.jpg",
          title: "Sunroof panorámico",
        },
        {
          id: 2,
          image: "/models/t2-phev/t2-phev-showcase-2.jpg",
          title: "Pantalla Táctil 15.6” LCD",
        },
        {
          id: 3,
          image: "/models/t2-phev/t2-phev-showcase-3.jpg",
          title: "6 modos de manejo",
        },
        {
          id: 4,
          image: "/models/t2-phev/t2-phev-showcase-4.jpg",
          title: "Asientos eléctrico 6 vías y copiloto 4 vía",
        },
        {
          id: 5,
          image: "/models/t2-phev/t2-phev-showcase-5.jpg",
          title: "Asientos de cuero con 3 memorias de posición",
        },
      ],
    },
    // Sección 360° del modelo T2 PHEV
    threeSixty: {
      model: "t2-phev",
      totalFrames: 28,
      title: "Vista 360° del T2 PHEV",
      subtitle:
        "Arrastra para rotar el vehículo o usa los controles de navegación",
      imagePath:
        "https://storage.googleapis.com/xiyimgengine/jetour/360/t2-phev-new",
      showInstructions: true,
      colorsPath: "/models/t2-phev/colors",
      totalColors: 4,
      colorNames: ["misty-cyan", "night-black", "silver-snow", "white"],
    },
    // Secciones específicas del modelo T2 PHEV
  },
  x50: {
    hero: {
      backgroundImage: "/models/hero/x50-hero.jpg",
      vehicleName: "X50",
      vehicleDescription: "Apuesta por el SUV que te representa",
      height: "h-96 lg:h-[600px]",
      logoImage: "/models/x50/x50-logo.png",
      logoAlt: "X50 Logo",
    },
    features: {
      items: [
        {
          id: 1,
          title: "Motor",
          image: "/models/x50/x50-features-1.jpg",
          description: "Manual 1500cc DCT 1500cc Turbo",
        },
        {
          id: 2,
          title: "Estructura",
          image: "/models/x50/x50-features-2.jpg",
          description: "SUV (5 puertas y 5 asientos)",
        },
        {
          id: 3,
          title: "Transmisión",
          image: "/models/x50/x50-features-3.jpg",
          description: "Manual 5 velocidad + reversa - DCT - 6DCT",
        },
      ],
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
    heroShowcase: {
      title: "Innovación en cada detalle",
      subtitle:
        "Equilibrio perfecto entre estilo dinámico, tecnología intuitiva y una sorprendente amplitud.",

      slides: [
        {
          id: 1,
          image: "/models/x50/x50-showcase-1.jpg",
          title: "Pantalla 10,25”",
          description: "Característica de interior premium",
        },
        {
          id: 2,
          image: "/models/x50/x50-showcase-2.jpg",
          title: "Asientos de cuero",
          description: "Tecnología de interior avanzada",
        },
        {
          id: 3,
          image: "/models/x50/x50-showcase-3.jpg",
          title: "Versión AT y MT",
          description: "Confort total para tu familia",
        },
        {
          id: 4,
          image: "/models/x50/x50-showcase-4.jpg",
          title: "Volante ajustable",
          description: "Confort total para tu familia",
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
      colorsPath: "/models/x50/colors",
      totalColors: 5,
      colorNames: ["azul", "blanco", "gris", "negro", "plata"],
    },
    // Secciones específicas del modelo X50
  },
  "x70-sport": {
    hero: {
      backgroundImage: "/models/hero/x70-sport-hero.jpg",
      vehicleName: "X70 Sport",
      vehicleDescription: "Seguridad y estilo para los que amas",
      height: "h-96 lg:h-[600px]",
      logoImage: "/models/x70-sport/x70-sport-logo.png",
      logoAlt: "X70 Sport Logo",
    },
    features: {
      items: [
        {
          id: 1,
          title: "Motor",
          image: "/models/x70/x70-features-1.jpg",
          description: "1.5 turbo intercooler",
        },
        {
          id: 2,
          title: "Estructura",
          image: "/models/x70/x70-features-2.jpg",
          description: "SUV (5 puertas y 7 asientos)",
        },
        {
          id: 3,
          title: "Transmisión",
          image: "/models/x70/x70-features-3.jpg",
          description:
            "Full MT y Limited MT - 6MT - Limited AT - 6DCT Electronic",
        },
      ],
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
    heroShowcase: {
      title: "Descubre su grandeza en cada detalle",
      subtitle: "X70 Sport tiene todo lo que tu familia desea.",

      slides: [
        // Seguridad - 3 items
        {
          id: 1,
          image: "/models/x70-sport/x70-sport-showcase-1.jpg",
          title: "3 filas de asientos",
        },
        {
          id: 2,
          image: "/models/x70-sport/x70-sport-showcase-2.jpg",
          title: "Pantalla multimedia 10.25”",
        },
        {
          id: 3,
          image: "/models/x70-sport/x70-sport-showcase-3.jpg",
          title: "Versión MT Y AT",
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
      colorsPath: "/models/x70-sport/colors",
      totalColors: 4,
      colorNames: ["black", "future-blue", "smoky-brown", "white"],
    },
    // Secciones específicas del modelo X70 Sport
  },
  "x70-plus": {
    hero: {
      backgroundImage: "/models/hero/x70-plus-hero.jpg",
      vehicleName: "X70 PLUS",
      vehicleDescription: "Apuesta por elevar tu nivel",
      height: "h-96 lg:h-[600px]",
      logoImage: "/models/x70/x70-plus-logo.png",
      logoAlt: "X70 PLUS Logo",
    },
    features: {
      items: [
        {
          id: 1,
          title: "Motor",
          image: "/models/x70/x70-features-1.jpg",
          description: "1500 Turbo Geometria Variable",
        },
        {
          id: 2,
          title: "Estructura",
          image: "/models/x70/x70-features-2.jpg",
          description: "SUV (5 puertas y 7 asientos)",
        },
        {
          id: 3,
          title: "Transmisión",
          image: "/models/x70/x70-features-3.jpg",
          description:
            "Manual 6 velocidad + reversa - Automática electrónica - 6DCT Embrague húmedo",
        },
      ],
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
    heroShowcase: {
      title: "Descubre su grandeza en cada detalle",
      subtitle: "X70 Plus tiene todo lo que tu familia desea.",

      slides: [
        // Seguridad - 3 items
        {
          id: 1,
          image: "/models/x70/x70-plus-showcase-1.jpg",
          title: "Sunroof panorámico",
        },
        {
          id: 2,
          image: "/models/x70/x70-plus-showcase-2.jpg",
          title: 'Doble pantalla integrada de 10,25" + 10,25"',
        },
        {
          id: 3,
          image: "/models/x70/x70-plus-showcase-3.jpg",
          title: "3 filas de asientos",
        },
        {
          id: 4,
          image: "/models/x70/x70-plus-showcase-4.jpg",
          title: "Caja electrónica",
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
      colorsPath: "/models/x70/colors",
      totalColors: 4,
      colorNames: ["azul", "blanco", "negro", "plata"],
    },
    // Secciones específicas del modelo X70 PLUS
  },
  dashing: {
    hero: {
      backgroundImage: "/models/hero/dashing-hero.jpg",
      vehicleName: "DASHING",
      vehicleDescription: "Apuesta por estilo",
      height: "h-96 lg:h-[600px]",
      logoImage: "/models/dashing/dashing-logo.png",
      logoAlt: "DASHING Logo",
    },
    features: {
      items: [
        {
          id: 1,
          title: "Motor",
          image: "/models/dashing/dashing-features-1.jpg",
          description: "Full, Limited MT, Limited DCT - 1.5T - RS 1.6 TGDI",
        },
        {
          id: 2,
          title: "Estructura",
          image: "/models/dashing/dashing-features-2.jpg",
          description: "SUV (5 puertas y 5 asientos)",
        },
        {
          id: 3,
          title: "Transmisión",
          image: "/models/dashing/dashing-features-3.jpg",
          description: "Full, Limited MT - 6MT - Lmited DCT - 6DCT - RS 7DCT",
        },
      ],
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
    heroShowcase: {
      title: "Tecnología e innovación ",
      subtitle: "Descubre todo lo que te espera a bordo de un DASHING",

      slides: [
        {
          id: 1,
          image: "/models/dashing/dashing-showcase-1.jpg",
          title: "Cargador de teléfono wireless",
        },
        {
          id: 2,
          image: "/models/dashing/dashing-showcase-2.jpg",
          title: "Pantalla 15.6”",
        },
        {
          id: 3,
          image: "/models/dashing/dashing-showcase-3.jpg",
          title: "Estilo minimalista",
        },
        {
          id: 4,
          image: "/models/dashing/dashing-showcase-4.jpg",
          title: "Carplay Auto",
        },
        {
          id: 5,
          image: "/models/dashing/dashing-showcase-5.jpg",
          title: "Sunroof panorámico",
        },
        {
          id: 6,
          image: "/models/dashing/dashing-showcase-6.jpg",
          title: "Asientos deportivos y eléctricos",
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
      colorsPath: "/models/dashing/colors",
      totalColors: 6,
      colorNames: ["rojo", "plata", "negro", "blanco", "gris", "azul"],
    },
    // Secciones específicas del modelo DASHING
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
