"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { getFilteredNews } from "@/lib/data-site";

export default function RelatedNews({ currentArticleId }) {
  // Obtener 3 artículos relacionados (excluyendo el actual)
  const { news } = getFilteredNews("all", 4, 0);
  const relatedNews = news
    .filter((article) => article.id !== currentArticleId)
    .slice(0, 3);

  return (
    <section className="py-16 md:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Noticias relacionadas
          </h2>
        </motion.div>

        {/* Related News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedNews.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              whileHover={{ y: -8 }}
            >
              <Link href={`/noticias/${article.slug}`}>
                <div className="bg-gray-900/50 rounded-2xl overflow-hidden transition-all duration-300 group-hover:bg-gray-800/50">
                  {/* Article Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>

                  {/* Article Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-blue-400 transition-colors duration-300">
                      {article.title}
                    </h3>

                    {/* Date and Category */}
                    <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
                      <span>{article.date}</span>
                      <span>-</span>
                      <span className="text-blue-400">{article.category}</span>
                    </div>

                    {/* Excerpt */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {article.excerpt}
                    </p>

                    {/* Read more link */}
                    <div className="flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors duration-300">
                      <span>Leer más</span>
                      <motion.svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </motion.svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
