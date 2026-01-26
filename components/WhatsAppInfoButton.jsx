"use client";

import { MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function WhatsAppInfoButton({ modelName = null }) {
  const pathname = usePathname();
  const phoneNumber = "593999999999"; // TODO: Reemplazar con el número real de WhatsApp
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Mostrar el botón después de 500ms para una entrada suave
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Determinar el mensaje según la ruta
  const getMessage = () => {
    if (pathname === "/") {
      return "Hola, estoy interesado en conocer más sobre los vehículos Jetour, por favor ayúdenme con mayor información.";
    } else if (pathname.includes("/posventa")) {
      return "Hola, estoy interesado en los servicios de posventa y mantenimiento para mi Jetour, por favor ayúdenme con mayor información.";
    } else if (pathname.includes("/concesionarios")) {
      return "Hola, estoy interesado en visitar uno de sus concesionarios, por favor ayúdenme con información sobre sus ubicaciones y horarios.";
    } else if (pathname.includes("/contacto")) {
      return "Hola, estoy interesado en realizar una consulta general con un asesor, por favor ayúdenme con mayor información.";
    } else if (pathname.includes("/vehiculos/") && modelName) {
      return `Hola, estoy interesado en el modelo ${modelName}, por favor ayúdenme con mayor información y disponibilidad.`;
    } else {
      return "Hola, estoy interesado en conocer más sobre Jetour, por favor ayúdenme con mayor información.";
    }
  };
  
  const handleWhatsApp = () => {
    const message = getMessage();
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleWhatsApp}
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
      }`}
      aria-label="Más información por WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden md:inline">Más información</span>
    </button>
  );
}