"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function VehicleGallery({ vehicleGalleryData }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-tight"
      >
        {vehicleGalleryData.title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-gray-300 text-lg"
      >
        {vehicleGalleryData.subtitle}
      </motion.p>

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-8">
        {vehicleGalleryData.images.map((image, index) => {
          const rowIndex = Math.floor(index / 2);
          const isEvenRow = rowIndex % 2 === 0;
          const isFirstImage = index % 2 === 0;
          const totalImages = vehicleGalleryData.images.length;
          const isLastImage = index === totalImages - 1;
          const isOddTotal = totalImages % 2 !== 0;

          // Alternar el patrón: fila par (0,2,4...) empieza con imagen grande a la izquierda
          // fila impar (1,3,5...) empieza con imagen grande a la derecha
          let colSpan = "lg:col-span-2";

          // Si es la última imagen y hay número impar, ocupa todo el ancho
          if (isLastImage && isOddTotal) {
            colSpan = "lg:col-start-2 lg:col-span-3";
          } else if (isEvenRow && isFirstImage) {
            colSpan = "lg:col-span-3"; // Primera imagen de fila par: ocupa 2 columnas
          } else if (!isEvenRow && !isFirstImage) {
            colSpan = "lg:col-span-3"; // Segunda imagen de fila impar: ocupa 2 columnas
          }

          return (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className={`relative aspect-video ${colSpan} cursor-pointer group`}
              onClick={() => openLightbox(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover object-center rounded-lg transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 75vw, 50vw"
                priority={index < 2}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={800}
              height={600}
              className="object-contain rounded-lg"
            />
            {/* Botón de cerrar */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
