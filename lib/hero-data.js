// Hero data configuration
export const heroData = {
  home: {
    backgroundVideo: "/video-home.mp4",
    backgroundImage: "/home-bg.jpg",
    logoImage: "/logo-jetour-home-hero.png",
    logoAlt: "JETOUR",
    logoWidth: 1172,
    logoHeight: 142,
    subtitle: "Apuesta por ti",
    showScrollIndicator: true,
    height: "h-96 lg:h-[800px]",
  },
  contact: {
    backgroundImage: "/bg-contacto.jpg",
    logoImage: "/logo-jetour-home-hero.png",
    logoAlt: "JETOUR",
    logoWidth: 800,
    logoHeight: 100,
    subtitle: "Contáctanos",
    showScrollIndicator: false,
    height: "h-96 h-[500px]",
  },
  vehicles: {
    backgroundImage: "/bg-vehiculos.jpg",
    logoImage: "/logo-jetour-home-hero.png",
    logoAlt: "JETOUR",
    logoWidth: 1000,
    logoHeight: 120,
    subtitle: "Nuestros Vehículos",
    showScrollIndicator: false,
    height: "h-96 h-[500px]",
  },
  postventa: {
    backgroundImage: "/bg-postventa.jpg",
    logoImage: "/logo-jetour-home-hero.png",
    logoAlt: "JETOUR",
    logoWidth: 900,
    logoHeight: 110,
    subtitle: "Servicio Postventa",
    showScrollIndicator: false,
    height: "h-96 h-[500px]",
  },
  concesionarios: {
    backgroundImage: "/bg-concesionarios.jpg",
    logoImage: "/logo-jetour-home-hero.png",
    logoAlt: "JETOUR",
    logoWidth: 850,
    logoHeight: 105,
    subtitle: "Nuestros Concesionarios",
    showScrollIndicator: false,
    height: "h-96 h-[500px]",
  },
};

// Function to get hero data by page
export function getHeroData(page) {
  return heroData[page] || heroData.home;
}
