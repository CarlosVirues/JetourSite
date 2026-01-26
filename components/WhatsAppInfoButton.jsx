"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppInfoButton({ message, className = "" }) {
  const phoneNumber = "593999999999"; // TODO: Reemplazar con el número real de WhatsApp
  
  const handleWhatsApp = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleWhatsApp}
      className={`inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      Más información
    </button>
  );
}