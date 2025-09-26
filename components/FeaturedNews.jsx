"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getFeaturedNews } from "@/lib/data-site";

export default function FeaturedNews() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [featuredArticles, setFeaturedArticles] = useState([]);

  useEffect(() => {
    const articles = getFeaturedNews();
    setFeaturedArticles(articles);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredArticles.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + featuredArticles.length) % featuredArticles.length
    );
  };

  if (featuredArticles.length === 0) {
    return null;
  }

  return (
    <section className="relative bg-black text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Destacados del mes
          </h2>
        </motion.div>

        {/* Featured Articles Slider */}
        <div className="relative">
          {/* Navigation Arrows */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-2 md:-left-20 top-1/2 transform -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white p-2 md:p-4 rounded-full transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-5 h-5 md:w-8 md:h-8" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="absolute right-2 md:-right-20 top-1/2 transform -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white p-2 md:p-4 rounded-full transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-5 h-5 md:w-8 md:h-8" />
          </motion.button>

          {/* Articles Container */}
          <div className="relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {Array.from({ length: 2 }).map((_, index) => {
                const articleIndex =
                  (currentSlide + index) % featuredArticles.length;
                const article = featuredArticles[articleIndex];

                return (
                  <motion.article
                    key={`${article.id}-${currentSlide}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative group cursor-pointer ${
                      index === 0 ? "block" : "hidden lg:block"
                    }`}
                    whileHover={{ y: -8 }}
                  >
                    <Link href={`/noticias/${article.slug}`}>
                      <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden bg-gray-800">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                        {/* Content overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                            {article.title}
                          </h3>

                          <div className="flex items-center space-x-4 text-sm text-gray-300 mb-4">
                            <span>{article.date}</span>
                            <span>•</span>
                            <span>{article.category}</span>
                          </div>

                          <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-6">
                            {article.excerpt}
                          </p>

                          <div className="flex items-center space-x-2 text-blue-400 font-medium group-hover:space-x-3 transition-all duration-300">
                            <span>Leer más</span>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
