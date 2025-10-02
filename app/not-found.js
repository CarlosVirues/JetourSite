import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Car } from "lucide-react";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black/40 to-black flex items-center justify-center px-4">
      <div className="w-full max-w-2xl mx-auto text-center">
        {/* Logo JETOUR */}
        <div className="mb-8 relative aspect-video max-w-48 mx-auto">
          <Image
            src="/jetour-logo.png"
            alt="JETOUR"
            fill
            className="h-8 mx-auto mb-4 object-contain object-center absolute top-0 left-0"
          />
        </div>

        {/* 404 Error */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-white/20 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-white mb-4">
            Página no encontrada
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
        </div>

        {/* Ilustración de vehículo */}
        <div className="mb-8">
          <Car className="w-24 h-24 text-blue-400 mx-auto mb-4" />
          <p className="text-blue-300">
            Pero no te preocupes, nuestros vehículos JETOUR sí están disponibles
          </p>
        </div>

        {/* Botones de navegación */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full flex items-center gap-2">
              <Home className="w-5 h-5" />
              Ir al Inicio
            </Button>
          </Link>
        </div>

        {/* Enlaces útiles */}
        <div className="mt-12 pt-8 border-t border-blue-700">
          <p className="text-white mb-4">Enlaces útiles:</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link
              href="/concesionarios"
              className="text-white hover:text-white transition-colors"
            >
              Concesionarios
            </Link>
            <Link
              href="/contacto"
              className="text-white hover:text-white transition-colors"
            >
              Contacto
            </Link>
            <Link
              href="/posventa"
              className="text-white hover:text-white transition-colors"
            >
              Posventa
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
