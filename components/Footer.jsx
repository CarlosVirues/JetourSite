"use client";

import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const linkVariants = {
    hover: {
      x: 5,
      transition: { duration: 0.2 },
    },
  };

  const socialVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Grupo Roldán */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/roldan-logo.png"
                alt="JETOUR"
                width={402}
                height={134}
                className="w-auto h-12"
              />
            </motion.div>

            <p className="text-sm text-gray-300">
              Distribuido por Grupo Roldán, empresa fundada en la ciudad de
              Cuenca en 1970.
            </p>
          </motion.div>

          {/* Explora */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-bold text-lg">Explora</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/postventa", label: "Postventa" },
                { href: "/concesionarios", label: "Concesionarios" },
                { href: "/noticias", label: "Noticias" },
                { href: "/contacto", label: "Contacto" },
              ].map((link, index) => (
                <motion.li
                  key={link.href}
                  variants={linkVariants}
                  whileHover="hover"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Modelos */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-bold text-lg">Modelos</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/vehiculos/t1", label: "T1" },
                { href: "/vehiculos/t2-phev", label: "T2 PHEV" },
                { href: "/vehiculos/x50", label: "X50" },
                { href: "/vehiculos/x70-sport", label: "X70 Sport" },
                { href: "/vehiculos/x70-plus", label: "X70 PLUS" },
                { href: "/vehiculos/dashing", label: "DASHING" },
              ].map((link, index) => (
                <motion.li
                  key={link.href}
                  variants={linkVariants}
                  whileHover="hover"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Jetour Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/">
                <Image
                  src="/jetour-logo.png"
                  alt="JETOUR"
                  width={318}
                  height={60}
                  className="w-auto h-6"
                />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex space-x-4"
            >
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                {
                  icon: () => (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  ),
                  href: "#",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-white hover:text-gray-300 transition-colors"
                  variants={socialVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-2 text-sm"
            >
              <p className="text-gray-300">info@jetourecuador.com</p>
              <p className="text-gray-300">+593 997 001 986</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Footer Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-800 mt-8 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-300">
              Copyright 2025 © Jetour Ecuador
            </p>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex space-x-6 text-sm"
            >
              {[
                {
                  href: "/aviso-proteccion-datos",
                  label: "Aviso de Protección de Datos",
                },
                {
                  href: "/proteccion-datos",
                  label: "Política de Protección de Datos",
                },
              ].map((link, index) => (
                <motion.div
                  key={link.href}
                  variants={linkVariants}
                  whileHover="hover"
                >
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
