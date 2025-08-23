"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ArticleDetail({ article }) {
  return (
    <article className="relative bg-black text-white">
      {/* Article Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          {/* Article Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
              {article.title}
            </h1>
          </motion.div>

          {/* Article Body */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* First Paragraph */}
            <div className="text-gray-200 leading-relaxed text-lg">
              <p>
                La marca china Jetour, perteneciente al grupo Chery, continúa su
                expansión global con un fuerte enfoque en América Latina. En
                mayo de 2025, eligió a Panamá como punto estratégico para lanzar
                su nuevo SUV T1, marcando un hito clave en su posicionamiento
                regional.
              </p>
            </div>

            {/* First Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden mb-8"
            >
              <Image
                src={article.contentImage1}
                alt="JETOUR vehicles showcase"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                className="object-cover"
              />
            </motion.div>

            {/* Content Sections */}
            <div className="space-y-8 text-gray-200 leading-relaxed">
              {/* Event Section */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  Evento de lanzamiento regional
                </h3>
                <p className="text-lg leading-relaxed">
                  El 14 de mayo, Jetour organizó un evento de alto perfil en
                  Ciudad de Panamá con la presencia de distribuidores y medios
                  de prensa latinoamericanos de Colombia, México, Ecuador, Perú,
                  Colombia, Argentina y Chile. Este evento no solo presentó al
                  T1, sino que consolidó la presencia de la marca en la región.
                </p>
              </div>

              {/* T1 Versatility Section */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  El T1: Versatilidad urbana y aventura
                </h3>
                <p className="text-lg leading-relaxed">
                  El T1 se mostró como un SUV compacto, robusto y tecnológico,
                  ideal para la ciudad y terrenos variados.
                </p>
              </div>

              {/* Features Section - Two Columns */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Left Column - Text */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                    Principales características:
                  </h3>
                  <ul className="space-y-2 text-lg">
                    <li>
                      • Motor 2.0L turbo y caja automática de 8 velocidades
                    </li>
                    <li>• Tracción 4x4 inteligente</li>
                    <li>
                      • Siete modos de conducción (arena, barro, nieve, montaña,
                      etc.)
                    </li>
                    <li>
                      • Cabina moderna con pantalla táctil y conectividad
                      completa
                    </li>
                  </ul>

                  <p className="text-lg leading-relaxed mt-6">
                    Además, se espera una versión híbrida enchufable para
                    finales de 2025.
                  </p>
                </div>

                {/* Right Column - Image */}
                <div className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden">
                  <Image
                    src={article.contentImage3 || article.contentImage2}
                    alt="JETOUR T1 características"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Panamericana Campaign */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  Campaña "Jetour Panamericana"
                </h3>
                <p className="text-lg leading-relaxed">
                  Como parte de su filosofía "Travel+", Jetour inició un
                  recorrido real por la Carretera Panamericana, poniendo a
                  prueba al T1 en diferentes climas y rutas de América Latina.
                  Este tour también sirve para generar cercanía con la cultura y
                  necesidades de los usuarios locales.
                </p>
              </div>

              {/* Investment Section */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  Inversión y soporte regional
                </h3>
                <p className="text-lg leading-relaxed">
                  Jetour anunció una inversión en infraestructura, red de
                  concesionarios y capacitación técnica en Panamá, como base
                  para su expansión a países vecinos. Se proyecta también el T2
                  LDM híbrido y el renovado Traveler 2025.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </article>
  );
}
