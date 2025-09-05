import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Aviso de Política de Protección de Datos Personales - Jetour",
  description:
    "Aviso sobre nuestro compromiso con la protección de datos personales conforme a la Ley Orgánica de Protección de Datos Personales",
};

export default function AvisoProteccionDatosPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header transparent={true} border={true} />

      {/* Hero Section */}
      <section className="relative h-64 lg:h-80 bg-gradient-to-r from-black to-gray-900 overflow-hidden">
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
              Aviso de Política de Protección de Datos Personales
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-black py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center">
            <div className="space-y-8">
              <div className="text-gray-300 text-lg leading-relaxed space-y-6">
                <p>
                  En cumplimiento con lo establecido en la Ley Orgánica de
                  Protección de Datos Personales, Ecuabeiben se compromete a
                  respetar los derechos, principios y obligaciones derivados de
                  dicha Ley.
                </p>

                <p>
                  El objetivo principal de esta política es garantizar la
                  privacidad y seguridad de la información personal de los
                  titulares de los datos personales, así como cumplir con los
                  mejores estándares legales.
                </p>

                <p>
                  Agradecemos tu confianza en nosotros y queremos asegurarte que
                  tus datos están en buenas manos.
                </p>
              </div>

              {/* CTA Button */}
              <div className="mt-12">
                <Link
                  href="/proteccion-datos"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 text-lg"
                >
                  Ver Políticas de Protección de Datos Personales
                </Link>
              </div>

              {/* Footer Message */}
              <div className="mt-12">
                <p className="text-blue-400 text-xl font-medium">
                  Nos preocupamos por usted
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
