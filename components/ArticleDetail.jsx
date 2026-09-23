"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

const portableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?.url) return null;
      return (
        <div className="relative h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden my-8">
          <Image
            src={value.asset.url}
            alt={value.alt || ""}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            className="object-cover"
          />
        </div>
      );
    },
  },
  block: {
    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg md:text-xl font-bold text-white mt-6 mb-3">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-lg leading-relaxed mb-4">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="space-y-2 text-lg list-disc list-inside mb-4">
        {children}
      </ul>
    ),
  },
};

export default function ArticleDetail({ article }) {
  return (
    <article className="relative bg-black text-white">
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-12"
          >
            {article.category && (
              <span className="inline-block text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">
                {article.category}
              </span>
            )}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              {article.title}
            </h1>
            <div className="flex items-center justify-center gap-3 text-sm text-gray-400">
              <span>{article.date}</span>
              {article.author && (
                <>
                  <span>•</span>
                  <span>Por {article.author}</span>
                </>
              )}
            </div>
          </motion.div>

          {/* Hero Image */}
          {article.image && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden mb-12"
            >
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                className="object-cover"
                priority
              />
            </motion.div>
          )}

          {/* Excerpt + Body */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {article.excerpt && (
              <p className="text-xl text-gray-100 leading-relaxed mb-8 border-l-4 border-blue-500 pl-6">
                {article.excerpt}
              </p>
            )}

            <div className="text-gray-200">
              {article.content && article.content.length > 0 ? (
                <PortableText
                  value={article.content}
                  components={portableTextComponents}
                />
              ) : (
                <p className="text-lg leading-relaxed text-gray-400 italic">
                  Contenido próximamente.
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </article>
  );
}
