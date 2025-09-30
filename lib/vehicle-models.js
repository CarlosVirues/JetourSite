// Vehicle models data configuration
export const vehicleModels = {
  t2: {
    name: "T2",
    hero: {
      backgroundImage: "/models/hero/t2-hero.jpg",
      showScrollIndicator: false,
      height: "h-96 lg:h-[1200px] ",
    },
    description:
      "El JETOUR T2 es la perfecta combinación de estilo, rendimiento y tecnología para tus aventuras diarias.",
    features: [
      "Motor eficiente y potente",
      "Tecnología de vanguardia",
      "Diseño moderno y atractivo",
      "Máxima seguridad",
    ],
  },
  t1: {
    name: "T1",
    hero: {
      backgroundImage: "/models/hero/t1-hero.jpg",
      showScrollIndicator: false,
      height: "h-96 lg:h-[1200px] ",
    },
    description:
      "El JETOUR T1 es la perfecta combinación de estilo, rendimiento y tecnología para tus aventuras diarias.",
    features: [
      "Motor eficiente y potente",
      "Tecnología de vanguardia",
      "Diseño moderno y atractivo",
      "Máxima seguridad",
    ],
  },
  "t2-phev": {
    name: "T2 PHEV",
    hero: {
      backgroundImage: "/models/hero/t2-phev-hero.jpg",
      showScrollIndicator: false,
      height: "h-96 lg:h-[1200px] ",
    },
    description:
      "El JETOUR T2 PHEV combina la eficiencia de un motor híbrido con la potencia que necesitas para cualquier viaje.",
    features: [
      "Tecnología híbrida plug-in",
      "Máxima eficiencia de combustible",
      "Emisiones reducidas",
      "Conducción inteligente",
    ],
  },
  x50: {
    name: "X50",
    hero: {
      backgroundImage: "/models/hero/x50-hero.jpg",
      showScrollIndicator: false,
      height: "h-96 lg:h-[1200px] ",
    },
    description:
      "El JETOUR X50 redefine el concepto de SUV compacto con su diseño elegante y tecnología avanzada.",
    features: [
      "Diseño SUV compacto",
      "Interior espacioso y cómodo",
      "Tecnología de conectividad",
      "Rendimiento optimizado",
    ],
  },
  "x70-sport": {
    name: "X70 Sport",
    hero: {
      backgroundImage: "/models/hero/x70-hero.jpg",
      showScrollIndicator: false,
      height: "h-96 lg:h-[1200px] ",
    },
    description:
      "El JETOUR X70 Sport ofrece una experiencia de conducción deportiva con la comodidad de un SUV premium.",
    features: [
      "Motor deportivo potente",
      "Suspensión deportiva",
      "Diseño aerodinámico",
      "Tecnología deportiva",
    ],
  },
  "x70-plus": {
    name: "X70 Plus",
    hero: {
      backgroundImage: "/models/hero/x70-hero.jpg",
      showScrollIndicator: false,
      height: "h-96 lg:h-[1200px] ",
    },
    description:
      "El JETOUR X70 PLUS es la versión más espaciosa y cómoda de la familia X70, perfecta para toda la familia.",
    features: [
      "Máximo espacio interior",
      "Confort premium",
      "Tecnología avanzada",
      "Versatilidad familiar",
    ],
  },
  dashing: {
    name: "Dashing",
    hero: {
      backgroundImage: "/models/hero/dashing-hero.jpg",
      showScrollIndicator: false,
      height: "h-96 lg:h-[1200px] ",
    },
    description:
      "El JETOUR DASHING representa la innovación y el futuro de la movilidad con su diseño revolucionario.",
    features: [
      "Diseño futurista",
      "Tecnología de punta",
      "Máxima eficiencia",
      "Experiencia premium",
    ],
  },
};

// Function to get vehicle model data by model key
export function getVehicleModel(modelKey) {
  return vehicleModels[modelKey] || vehicleModels.t1;
}

// Function to get hero configuration for a specific model
export function getVehicleHeroConfig(modelKey) {
  const model = getVehicleModel(modelKey);
  return model.hero;
}

// Function to get all available models
export function getAllModels() {
  return Object.keys(vehicleModels);
}
