"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram, Heart, MessageCircle, Send } from "lucide-react";

export default function JetourLife() {
  const instagramPosts = [
    {
      id: 1,
      image: "/post-jetourlife.jpg",
      title: "JETOUR SMART WATCH",
      subtitle: "INTELLIGENT TRAVEL WITHOUT BOUNDARIES",
      likes: 245,
      comments: 18,
    },
    {
      id: 2,
      image: "/post-jetourlife.jpg",
      title: "JETOUR SMART WATCH",
      subtitle: "TECHNOLOGY ON THE WRIST CONFIDENCE ON YOUR FEET",
      likes: 312,
      comments: 25,
    },
    {
      id: 3,
      image: "/post-jetourlife.jpg",
      title: "LIFESTYLE",
      subtitle: "ADVENTURE AWAITS",
      likes: 189,
      comments: 32,
    },
    {
      id: 4,
      image: "/post-jetourlife.jpg",
      title: "JETOUR STYLE",
      subtitle: "MODERN LIFESTYLE",
      likes: 267,
      comments: 15,
    },
    {
      id: 5,
      image: "/post-jetourlife.jpg",
      title: "JETOUR LIFE",
      subtitle: "CONFIDENCE IN EVERY STEP",
      likes: 198,
      comments: 21,
    },
    {
      id: 6,
      image: "/post-jetourlife.jpg",
      title: "JETOUR LIFE",
      subtitle: "ECO-FRIENDLY TRAVEL GIFT BOX",
      likes: 156,
      comments: 12,
    },
    {
      id: 7,
      image: "/post-jetourlife.jpg",
      title: "JETOUR LIFE ECO-FRIENDLY TRAVEL GIFT BOX",
      subtitle:
        "INCLUDES SEVERAL ENVIRONMENTALLY FRIENDLY GIFTS AND LOW-CARBON TRANSPORTATION ESSENTIALS",
      likes: 223,
      comments: 28,
    },
    {
      id: 8,
      image: "/post-jetourlife.jpg",
      title: "JETOUR LIFE IN-CAR ESSENTIALS GIFT BOX",
      subtitle:
        "INCLUDES SEVERAL IN-CAR DAILY COLLECTIONS AND PROTECTIVE SAFETY PRODUCTS FOR PASSENGERS",
      likes: 334,
      comments: 41,
    },
  ];

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative bg-black text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-6 flex justify-center"
          >
            <Image
              src="/jetourlife-logo.png"
              alt="JETOUR LIFE"
              width={400}
              height={120}
              className="w-auto h-16 md:h-20 lg:h-24"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-2 mb-6"
          >
            <p className="text-lg md:text-xl text-gray-300">
              Más allá del asfalto, un estilo de vida que te acompaña.
            </p>
            <p className="text-base md:text-lg text-gray-400">
              ¡Sigue nuestro Instagram y encuentra tu próxima aventura favorita!
            </p>
            <p className="text-sm md:text-base font-bold">@jetour.life</p>
          </motion.div>
        </motion.div>

        {/* Instagram Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {instagramPosts.map((post, index) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              className={`relative group cursor-pointer overflow-hidden rounded-lg`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Post Image */}
              <div
                className={`relative h-64 md:h-92 bg-gray-800 overflow-hidden`}
              >
                {/* Real Instagram post image */}
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-sm md:text-base mb-1 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 text-xs leading-tight">
                      {post.subtitle}
                    </p>
                  </div>
                </div>

                {/* Hover Interaction Icons */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center bg-black/50 transition-opacity duration-300"
                >
                  <div className="flex space-x-6 text-white">
                    <motion.div
                      className="flex items-center space-x-1"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Heart className="w-6 h-6" />
                      <span className="text-sm">{post.likes}</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center space-x-1"
                      whileHover={{ scale: 1.1 }}
                    >
                      <MessageCircle className="w-6 h-6" />
                      <span className="text-sm">{post.comments}</span>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <Send className="w-6 h-6" />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Instagram Post Indicator */}
                <div className="absolute top-4 right-4">
                  <Instagram className="w-5 h-5 text-white/70" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
