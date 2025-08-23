"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getFilteredNews, newsCategories } from "@/lib/data-site";

export default function NewsGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);
  const itemsPerPage = 6;

  // Cargar noticias iniciales y cuando cambia la categoría
  useEffect(() => {
    const loadInitialNews = async () => {
      setLoading(true);
      setNews([]);
      setOffset(0);

      // Simular llamada al backend (reducido para mejor UX)
      await new Promise((resolve) => setTimeout(resolve, 200));

      const result = getFilteredNews(activeCategory, itemsPerPage, 0);

      setNews(result.news);
      setOffset(itemsPerPage);
      setHasMore(result.hasMore);
      setLoading(false);
    };

    loadInitialNews();
  }, [activeCategory]);

  const loadNews = async (reset = false) => {
    setLoading(true);

    // Simular llamada al backend (reducido para mejor UX)
    await new Promise((resolve) => setTimeout(resolve, 200));

    const currentOffset = reset ? 0 : offset;
    const result = getFilteredNews(activeCategory, itemsPerPage, currentOffset);

    if (reset) {
      setNews(result.news);
      setOffset(itemsPerPage);
    } else {
      setNews((prev) => [...prev, ...result.news]);
      setOffset((prev) => prev + itemsPerPage);
    }

    setHasMore(result.hasMore);
    setLoading(false);
  };

  const handleCategoryChange = (categoryId) => {
    if (categoryId !== activeCategory) {
      setActiveCategory(categoryId);
    }
  };

  const handleLoadMore = () => {
    loadNews(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative bg-black text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header with title and filters */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 md:mb-16">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 lg:mb-0"
          >
            Últimas noticias
          </motion.h2>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            {newsCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeCategory === category.id
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-transparent text-gray-300 border-gray-600 hover:border-blue-500 hover:text-blue-500"
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>

        {/* News Grid */}
        {loading && news.length === 0 ? (
          // Loading placeholder
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            <p className="text-gray-400 mt-4">Cargando noticias...</p>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {news.map((article, index) => (
              <motion.article
                key={`${article.id}-${activeCategory}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative group cursor-pointer"
                whileHover={{ y: -8 }}
              >
                <Link href={`/noticias/${article.slug}`}>
                  <div className="relative h-64 md:h-72 rounded-2xl overflow-hidden bg-gray-800 mb-6">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white leading-tight group-hover:text-blue-400 transition-colors duration-300">
                      {article.title}
                    </h3>

                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.category}</span>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center space-x-2 text-blue-500 text-sm font-medium group-hover:space-x-3 transition-all duration-300">
                      <span>Leer más</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        )}

        {/* Load More Button */}
        {hasMore && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12 md:mt-16"
          >
            <motion.button
              onClick={handleLoadMore}
              disabled={loading}
              className="bg-transparent border-2 border-blue-500 text-white px-8 py-3 rounded-full font-semibold text-lg flex items-center justify-center gap-3 mx-auto hover:bg-blue-500 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Cargar más noticias
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        )}

        {/* Loading indicator for load more */}
        {loading && news.length > 0 && (
          <div className="text-center mt-12">
            <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
          </div>
        )}
      </div>
    </section>
  );
}
