"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function VehicleGallery({ vehicleData }) {
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
    },
    {
      id: 2,
      src: "/models/t2/2-t2.jpg",
      alt: "JETOUR T2 vista lateral",
    },
    {
      id: 3,
      src: "/models/t2/3-t2.jpg",
      alt: "Interior JETOUR T2",
    },
    {
      id: 4,
      src: "/models/t2/4-t2.jpg",
      alt: "Maletero JETOUR T2",
    },
    {
      id: 5,
      src: "/models/t2/5-t2.jpg",
      alt: "Asientos JETOUR T2",
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
        <div className="space-y-96">
          {images.map((image, index) => {
            const isLeft = index % 2 === 0;
            const imageRef = useRef(null);
            const { scrollYProgress: imageScrollProgress } = useScroll({
              target: imageRef,
              offset: ["start end", "end start"],
            });

            const scale = useTransform(
              imageScrollProgress,
              [0, 0.3, 0.7, 1],
              [0.8, 1.5, 1.5, 0.8]
            );
            const width = useTransform(
              imageScrollProgress,
              [0, 0.3, 0.7, 1],
              ["50%", "100%", "100%", "50%"]
            );
            const opacity = useTransform(
              imageScrollProgress,
              [0, 0.1, 0.2, 0.8, 0.9, 1],
              [0, 0.5, 1, 1, 0.5, 0]
            );
            const y = useTransform(imageScrollProgress, [0, 1], [50, -50]);

            return (
              <motion.div
                key={image.id}
                ref={imageRef}
                className={`relative h-screen flex items-center ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
                style={{ y }}
              >
                <motion.div
                  className="relative h-3/4 overflow-hidden"
                  style={{
                    scale,
                    opacity,
                    width,
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
