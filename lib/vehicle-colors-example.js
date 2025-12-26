// EJEMPLO DE NUEVA ESTRUCTURA DE DATOS CON MÓDULOS SEPARADOS
// Este archivo es un ejemplo de cómo estructurar los datos con 360° y colores separados
// Puedes usar esto como referencia para actualizar /lib/page-data.js

// ==========================================
// EJEMPLO 1: Modelo con 360° Y colores
// ==========================================
const modeloCompleto = {
  t1: {
    hero: { /* ... */ },
    features: { /* ... */ },
    vehicleGallery: { /* ... */ },
    heroShowcase: { /* ... */ },
    videoGallery: { /* ... */ },
    
    // MÓDULO 360° INDEPENDIENTE (sin información de colores)
    threeSixty: {
      model: "t1",
      totalFrames: 28,
      title: "Vista 360° del T1",
      subtitle: "Arrastra para rotar el vehículo o usa los controles de navegación",
      imagePath: "https://storage.googleapis.com/xiyimgengine/jetour/360/t1",
      showInstructions: true,
    },
    
    // MÓDULO DE COLORES INDEPENDIENTE (separado del 360°)
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
  },
};

// ==========================================
// EJEMPLO 2: Modelo solo con 360° (SIN colores)
// ==========================================
const modeloSolo360 = {
  x50: {
    hero: { /* ... */ },
    features: { /* ... */ },
    vehicleGallery: { /* ... */ },
    heroShowcase: { /* ... */ },
    videoGallery: { /* ... */ },
    
    // TIENE 360°
    threeSixty: {
      model: "x50",
      totalFrames: 28,
      title: "Vista 360° del X50",
      subtitle: "Arrastra para rotar el vehículo",
      imagePath: "https://storage.googleapis.com/xiyimgengine/jetour/360/x50",
      showInstructions: true,
    },
    
    // NO TIENE vehicleColors - no se mostrará el selector de colores
  },
};

// ==========================================
// EJEMPLO 3: Modelo solo con colores (SIN 360°)
// ==========================================
const modeloSoloColores = {
  t2: {
    hero: { /* ... */ },
    features: { /* ... */ },
    vehicleGallery: { /* ... */ },
    heroShowcase: { /* ... */ },
    videoGallery: { /* ... */ },
    
    // NO TIENE threeSixty - no se mostrará la vista 360°
    
    // TIENE selector de colores
    vehicleColors: {
      model: "t2",
      colorsPath: "/models/t2/colors",
      totalColors: 4,
      colorNames: [
        "rojo",
        "azul",
        "blanco",
        "negro",
      ],
    },
  },
};

// ==========================================
// EJEMPLO 4: G700 sin colores ni 360°
// ==========================================
const g700SinColorNi360 = {
  g700: {
    hero: {
      backgroundImage: "/models/hero/g700-hero.jpg",
      vehicleName: "G700",
      vehicleDescription: "Rendimiento Todoterreno Excepcional",
      height: "h-96 lg:h-[600px]",
      logoImage: "/models/g700/g700-logo.png",
      logoAlt: "G700",
    },
    features: {
      items: [
        {
          id: 1,
          title: "Motor",
          image: "/models/g700/g700-features-1.jpg",
          description: "2.0 TGDI",
        },
        {
          id: 2,
          title: "Estructura",
          image: "/models/g700/g700-features-2.jpg",
          description: "4X4 (5 puertas y 6 asientos)",
        },
        {
          id: 3,
          title: "Transmisión",
          image: "/models/g700/g700-features-3.jpg",
          description: "8 AT Electrónica",
        },
      ],
    },
    vehicleGallery: { /* ... */ },
    heroShowcase: { /* ... */ },
    videoGallery: { /* ... */ },
    
    // NO TIENE threeSixty - no se mostrará la vista 360°
    // NO TIENE vehicleColors - no se mostrará el selector de colores
  },
};

// ==========================================
// EJEMPLO 5: G700 con 360° pero SIN colores
// ==========================================
const g700Con360SinColores = {
  g700: {
    hero: { /* ... */ },
    features: { /* ... */ },
    vehicleGallery: { /* ... */ },
    heroShowcase: { /* ... */ },
    videoGallery: { /* ... */ },
    
    // TIENE 360°
    threeSixty: {
      model: "g700",
      totalFrames: 28,
      title: "Vista 360° del G700",
      subtitle: "Arrastra para rotar el vehículo o usa los controles de navegación",
      imagePath: "https://storage.googleapis.com/xiyimgengine/jetour/360/g700",
      showInstructions: true,
    },
    
    // NO TIENE vehicleColors - no se mostrará el selector de colores
  },
};

export default {
  modeloCompleto,
  modeloSolo360,
  modeloSoloColores,
  g700SinColorNi360,
  g700Con360SinColores,
};
