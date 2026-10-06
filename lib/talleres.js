// Red de talleres de posventa. Fuente: "INFORMACION JEFES DE TALLER.xlsx" (Verónica, 2026-10-06).
// Mismo shape que consume ConcesionariosMap: [{ cityName, distributors: [...] }].
//
// Coordenadas: los talleres que comparten local con un concesionario reusan sus coordenadas
// (verificadas). Los marcados `// aprox.` se geocodificaron con OpenStreetMap y hay que
// confirmarlos con el link de Google Maps del local antes de salir a producción.
//
// Los teléfonos son los del jefe de taller que mandó el cliente (El Coca figura como personal).
// No hay horarios de taller en el listado, así que no se muestran.
export const TALLERES = [
  {
    cityName: "Quito",
    distributors: [
      {
        name: "Jetour Quito Norte",
        address: "Av. Galo Plaza Lasso.",
        mobile: "098 873 2151",
        location: { lat: -0.1009535, lng: -78.4722191 }, // aprox.
      },
      {
        name: "Jetour 6 de Diciembre",
        address: "Av. 6 de Diciembre y Av. Galo Plaza Lasso.",
        mobile: "098 873 2625",
        location: { lat: -0.1209912, lng: -78.4801387 },
      },
      {
        name: "Jetour Carapungo",
        address: "Calle N68H y Av. Simón Bolívar.",
        mobile: "099 310 0446",
        location: { lat: -0.1116535, lng: -78.4581169 },
      },
      {
        name: "Jetour Tumbaco",
        address: "Av. Guayasamín y Rumiñahui.",
        mobile: "099 027 2450",
        location: { lat: -0.2143709, lng: -78.3915218 },
      },
      {
        name: "Jetour Sangolquí",
        address: "Av. General Rumiñahui S/N y Shyris.",
        mobile: "098 873 2320",
        location: { lat: -0.3458435, lng: -78.4572162 },
      },
    ],
  },
  {
    cityName: "Guayaquil",
    distributors: [
      {
        name: "Jetour Juan Tanca Marengo",
        address: "Ing. José Antonio Gómez Gault y Av. Juan Tanca Marengo.",
        mobile: "093 916 2335",
        location: { lat: -2.1393611, lng: -79.9280278 },
      },
      {
        name: "Juan Tanca Marengo · Taller JAC",
        address: "Ing. José Antonio Gómez Gault y Av. Juan Tanca Marengo.",
        mobile: "096 970 9797",
        // Mismo predio que el anterior; se corre unos metros para que ambos marcadores se vean.
        location: { lat: -2.1390611, lng: -79.9277278 },
      },
      {
        name: "Jetour Américas",
        address: "Av. de las Américas y Justino Cornejo.",
        mobile: "098 873 3758",
        location: { lat: -2.1620684, lng: -79.8910852 },
      },
      {
        name: "Jetour Vía a Daule",
        address: "Km 4.5 Vía a Daule.",
        mobile: "099 952 0252",
        location: { lat: -2.1598609, lng: -79.9303457 },
      },
      {
        name: "Jetour Samborondón",
        address: "Av. Miguel Yúnez, Km 14.5 Vía a Samborondón.",
        mobile: "098 873 7280",
        location: { lat: -2.0406915, lng: -79.8517941 },
      },
    ],
  },
  {
    cityName: "Cuenca",
    distributors: [
      {
        name: "Jetour Av. España",
        address: "Av. España, Castellana y Segovia.",
        mobile: "096 743 8332",
        location: { lat: -2.8860, lng: -78.9820 }, // aprox.
      },
      {
        name: "Jetour 12 de Octubre",
        address: "Av. 12 de Octubre y Cristóbal Colón.",
        mobile: "098 873 3835",
        location: { lat: -2.91364, lng: -79.021688 },
      },
    ],
  },
  {
    cityName: "Manta",
    distributors: [
      {
        name: "Jetour Manta",
        address: "Av. 4 de Noviembre S/N.",
        mobile: "099 823 7749",
        phone: "096 975 4319",
        location: { lat: -0.973852, lng: -80.700257 },
      },
    ],
  },
  {
    cityName: "Machala",
    distributors: [
      {
        name: "Jetour Machala",
        address: "Av. 25 de Junio, junto a McDonald's.",
        mobile: "098 873 4857",
        location: { lat: -3.2777041, lng: -79.9346419 },
      },
    ],
  },
  {
    cityName: "Riobamba",
    distributors: [
      {
        name: "Jetour Riobamba",
        address: "Av. Lizarzaburu y Bolívar, esquina.",
        mobile: "098 873 4585",
        location: { lat: -1.6494366, lng: -78.6700196 }, // aprox.
      },
    ],
  },
  {
    cityName: "Ibarra",
    distributors: [
      {
        name: "Jetour Ibarra",
        address: "Panamericana Norte, sector Chorlaví, frente a la gasolinera Petroworld.",
        mobile: "099 910 5278",
        location: { lat: 0.3373862, lng: -78.160687 },
      },
    ],
  },
  {
    cityName: "Yantzaza",
    distributors: [
      {
        name: "Jetour Yantzaza",
        address:
          "Av. Troncal Amazónica, barrio Amazonas, a 500 m de la gasolinera Petroecuador.",
        mobile: "098 393 8137",
        location: { lat: -3.829766, lng: -78.7608343 }, // aprox. (centro de Yantzaza)
      },
    ],
  },
  {
    cityName: "El Coca",
    distributors: [
      {
        name: "Jetour El Coca",
        address: "Av. Alejandro Labaka, a 100 m del aeropuerto.",
        mobile: "098 045 8488",
        location: { lat: -0.4601442515850067, lng: -76.98680877685547 },
      },
    ],
  },
];
