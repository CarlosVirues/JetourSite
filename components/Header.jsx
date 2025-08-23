"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({ transparent = false, border = false }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shouldBeTransparent = transparent && !isScrolled;

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/postventa", label: "Postventa" },
    { href: "/concesionarios", label: "Concesionarios" },
    { href: "/noticias", label: "Noticias" },
    { href: "/contacto", label: "Contacto" },
  ];

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 text-white py-4 px-6 lg:px-12 transition-all duration-300 ${
        shouldBeTransparent ? "bg-transparent" : "bg-black/95 backdrop-blur-sm"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto flex justify-between items-center pb-4 ${
          border ? "border-b border-gray-50/50" : ""
        }`}
      >
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
              className="w-auto h-10"
            />
          </Link>
        </motion.div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className={`transition-colors relative ${
                  isActive(item.href)
                    ? "text-white font-semibold"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {item.label}
                <AnimatePresence>
                  {isActive(item.href) && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      exit={{ width: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"
                    />
                  )}
                </AnimatePresence>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile menu button */}
        <motion.button
          onClick={toggleMobileMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-white relative z-50"
          aria-label="Toggle mobile menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <motion.span
              animate={
                isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.3 }}
              className="w-6 h-0.5 bg-white block mb-1.5"
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="w-6 h-0.5 bg-white block mb-1.5"
            />
            <motion.span
              animate={
                isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.3 }}
              className="w-6 h-0.5 bg-white block"
            />
          </div>
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
              onClick={closeMobileMenu}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-md z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-700">
                  <Image
                    src="/jetour-logo.png"
                    alt="JETOUR"
                    width={200}
                    height={40}
                    className="w-auto h-8"
                  />
                  <motion.button
                    onClick={closeMobileMenu}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-white"
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
                  </motion.button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-6 py-8">
                  <div className="space-y-6">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          onClick={closeMobileMenu}
                          className={`block text-lg font-medium transition-all duration-300 relative ${
                            isActive(item.href)
                              ? "text-blue-400"
                              : "text-white hover:text-blue-400"
                          }`}
                        >
                          <span className="relative">
                            {item.label}
                            {isActive(item.href) && (
                              <motion.div
                                layoutId="mobileActiveIndicator"
                                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400"
                                initial={false}
                                transition={{
                                  type: "spring",
                                  stiffness: 300,
                                  damping: 30,
                                }}
                              />
                            )}
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
