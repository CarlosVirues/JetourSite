import { cache } from "react";
import Header from "@/components/Header";
import ConcesionariosMap from "@/components/ConcesionariosMap";
import Footer from "@/components/Footer";
import Image from "next/image";
import RoldanSection from "@/components/RoldanSection";
import WhatsAppInfoButton from "@/components/WhatsAppInfoButton";
import { getPageData } from "@/lib/page-data";
import { getConcesionariosPageData, getHomePageData } from "@/lib/sanity";
import { buildMetadata } from "@/lib/seo";

// cache(): generateMetadata y el componente piden lo mismo. Sin esto serían dos queries.
const getConcesionariosData = cache(async () => await getConcesionariosPageData());

// 2026-08-12: igual que la home, esta página no tenía metadata propia y heredaba la global.
// Con el bloque `seo` vacío el comportamiento no cambia. Ojo: el doc `concesionariosPage`
// hoy NO existe en el dataset, así que esto devuelve {} hasta que se cree.
export async function generateMetadata() {
  const data = (await getConcesionariosData()) ?? {};
  return buildMetadata(data.seo);
}

export default async function ConcesionariosPage() {
  // Obtener datos de Sanity para concesionarios y Roldan section
  const concesionariosData = await getConcesionariosData();
  const homeData = await getHomePageData();

  // Datos estáticos como fallback
  const pageData = getPageData("home");

  return (
    <div className="min-h-screen bg-black">
      <Header transparent={true} border={true} />

      {/* Hero Section */}
      <section className="relative h-96 lg:h-[500px] bg-gradient-to-r from-black to-gray-900 overflow-hidden">
        {/* Background Image Placeholder - You can replace this with an actual car image */}
        <Image
          src="/bg-concesionarios.jpg"
          alt="Concesionarios"
          fill
          className="object-cover"
        />

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4">
              Concesionarios
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="bg-black py-16 lg:py-24">
        {/* Título "Concesionarios" = el que muestra el sitio original (su Sanity);
            el default del componente ("26 puntos...") ya no es exacto y difiere del original */}
        <ConcesionariosMap
          title={concesionariosData?.title || "Concesionarios"}
          cities={concesionariosData?.cities || []}
        />
      </section>

      {/* Roldan Section */}
      <RoldanSection {...(homeData?.roldanSection || pageData.roldanSection)} />

      <Footer />
      
      {/* Floating WhatsApp Button */}
      <WhatsAppInfoButton />
    </div>
  );
}
