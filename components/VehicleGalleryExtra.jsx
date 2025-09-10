"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function VehicleGalleryExtra({ vehicleData }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const images = [
    {
      id: 1,
      src: "/models/t2/1-t2.jpg",
      alt: "JETOUR T2 en puente",
      zoom: [0.8, 1.2], // Zoom aleatorio
      x: [-100, 50], // Desplazamiento X aleatorio
      y: [80, -40], // Desplazamiento Y aleatorio
      opacity: [0, 0, 0.2, 0.5, 0.8, 1, 1, 0.8, 0.5, 0.2, 0], // Fade aleatorio
    },
    {
      id: 2,
      src: "/models/t2/2-t2.jpg",
      alt: "JETOUR T2 vista lateral",
      zoom: [0.9, 1.4], // Zoom aleatorio
      x: [120, -30], // Desplazamiento X aleatorio
      y: [-60, 70], // Desplazamiento Y aleatorio
      opacity: [0, 0, 0.2, 0.5, 0.8, 1, 1, 0.8, 0.5, 0.2, 0], // Fade aleatorio
    },
    {
      id: 3,
      src: "/models/t2/3-t2.jpg",
      alt: "Interior JETOUR T2",
      zoom: [0.7, 1.3], // Zoom aleatorio
      x: [-80, 100], // Desplazamiento X aleatorio
      y: [50, -80], // Desplazamiento Y aleatorio
      opacity: [0, 0, 0.2, 0.5, 0.8, 1, 1, 0.8, 0.5, 0.2, 0], // Fade aleatorio
    },
    {
      id: 4,
      src: "/models/t2/4-t2.jpg",
      alt: "Maletero JETOUR T2",
      zoom: [0.85, 1.5], // Zoom aleatorio
      x: [90, -60], // Desplazamiento X aleatorio
      y: [-70, 40], // Desplazamiento Y aleatorio
      opacity: [0, 0, 0.2, 0.5, 0.8, 1, 1, 0.8, 0.5, 0.2, 0], // Fade aleatorio
    },
    {
      id: 5,
      src: "/models/t2/5-t2.jpg",
      alt: "Asientos JETOUR T2",
      zoom: [0.9, 1.1], // Zoom aleatorio
      x: [-50, 80], // Desplazamiento X aleatorio
      y: [60, -50], // Desplazamiento Y aleatorio
      opacity: [0, 0, 0.2, 0.5, 0.8, 1, 1, 0.8, 0.5, 0.2, 0], // Fade aleatorio
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative bg-black text-white py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Title - Top Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24 max-w-2xl"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-tight">
            Si verlo es emocionante, manejarlo es irresistible.
          </h2>
        </motion.div>

        {/* Scroll-triggered Images */}
        <div className="space-y-[200vh]">
          {images.map((image, index) => {
            const isLeft = index % 2 === 0;
            const imageRef = useRef(null);
            const { scrollYProgress: imageScrollProgress } = useScroll({
              target: imageRef,
              offset: ["start end", "end start"],
            });

            // Efectos únicos para cada imagen - PATRONES COMPLETAMENTE DIFERENTES
            let scale, opacity, y, x;

            if (image.id === 1) {
              // Imagen 1: Efecto de zoom dramático con fade rápido
              scale = useTransform(
                imageScrollProgress,
                [0, 0.2, 0.5, 0.8, 1],
                [0.5, 0.8, 1.3, 1.1, 0.7]
              );
              opacity = useTransform(
                imageScrollProgress,
                [0, 0.1, 0.3, 0.7, 0.9, 1],
                [0, 0.8, 1, 1, 0.3, 0]
              );
              y = useTransform(imageScrollProgress, [0, 0.5, 1], [100, 0, -80]);
              x = useTransform(
                imageScrollProgress,
                [0, 0.5, 1],
                [-150, 0, 100]
              );
            } else if (image.id === 2) {
              // Imagen 2: Efecto de deslizamiento horizontal con zoom suave
              scale = useTransform(
                imageScrollProgress,
                [0, 0.3, 0.6, 0.9, 1],
                [0.8, 1.1, 1.2, 1.0, 0.9]
              );
              opacity = useTransform(
                imageScrollProgress,
                [0, 0.2, 0.4, 0.6, 0.8, 1],
                [0, 0.3, 0.7, 1, 0.6, 0]
              );
              y = useTransform(imageScrollProgress, [0, 0.5, 1], [-60, 0, 70]);
              x = useTransform(
                imageScrollProgress,
                [0, 0.2, 0.5, 0.8, 1],
                [200, 100, 0, -100, -200]
              );
            } else if (image.id === 3) {
              // Imagen 3: Efecto de rotación y zoom extremo
              scale = useTransform(
                imageScrollProgress,
                [0, 0.1, 0.4, 0.6, 0.9, 1],
                [0.6, 0.9, 1.5, 1.4, 0.8, 0.5]
              );
              opacity = useTransform(
                imageScrollProgress,
                [0, 0.15, 0.3, 0.5, 0.7, 0.85, 1],
                [0, 0.2, 0.6, 1, 1, 0.4, 0]
              );
              y = useTransform(
                imageScrollProgress,
                [0, 0.3, 0.7, 1],
                [80, 0, 0, -60]
              );
              x = useTransform(
                imageScrollProgress,
                [0, 0.3, 0.7, 1],
                [-80, 0, 0, 100]
              );
            } else if (image.id === 4) {
              // Imagen 4: Efecto de pulso con movimiento vertical
              scale = useTransform(
                imageScrollProgress,
                [0, 0.2, 0.4, 0.6, 0.8, 1],
                [0.7, 1.0, 1.3, 1.1, 0.9, 0.6]
              );
              opacity = useTransform(
                imageScrollProgress,
                [0, 0.25, 0.5, 0.75, 1],
                [0, 0.5, 1, 0.7, 0]
              );
              y = useTransform(
                imageScrollProgress,
                [0, 0.2, 0.4, 0.6, 0.8, 1],
                [-100, -50, 0, 50, 100, 150]
              );
              x = useTransform(imageScrollProgress, [0, 0.5, 1], [90, 0, -60]);
            } else if (image.id === 5) {
              // Imagen 5: Efecto de zoom gradual con fade lento
              scale = useTransform(
                imageScrollProgress,
                [0, 0.1, 0.3, 0.5, 0.7, 0.9, 1],
                [0.9, 1.0, 1.1, 1.2, 1.1, 1.0, 0.9]
              );
              opacity = useTransform(
                imageScrollProgress,
                [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
                [0, 0.1, 0.2, 0.4, 0.6, 0.8, 1, 0.8, 0.6, 0.4, 0]
              );
              y = useTransform(imageScrollProgress, [0, 0.5, 1], [60, 0, -50]);
              x = useTransform(imageScrollProgress, [0, 0.5, 1], [-50, 0, 80]);
            }

            return (
              <motion.div
                key={image.id}
                ref={imageRef}
                className="relative h-screen flex items-center justify-center"
              >
                <motion.div
                  className="relative w-3/4 md:w-1/2 h-3/4 overflow-hidden"
                  style={{
                    scale,
                    opacity,
                    x,
                    y,
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 75vw, 50vw"
                    priority={index < 2}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
