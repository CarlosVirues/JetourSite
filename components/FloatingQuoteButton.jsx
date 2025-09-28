"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingQuoteButton() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll for pulse animation
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToQuoteForm = () => {
    const quoteForm = document.getElementById("quote-form");
    if (quoteForm) {
      quoteForm.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const buttonVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
      y: 100,
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
    exit: {
      scale: 0,
      opacity: 0,
      y: 100,
      transition: {
        duration: 0.2,
      },
    },
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed bottom-6 right-6 z-50"
        >
          <motion.button
            onClick={scrollToQuoteForm}
            className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-3 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={pulseVariants}
            animate={isScrolled ? "pulse" : "visible"}
          >
            {/* Icon */}
            <motion.div
              whileHover={{ rotate: 15 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>

            {/* Text */}
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="font-semibold text-sm whitespace-nowrap overflow-hidden"
            >
              Cotizar
            </motion.span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
