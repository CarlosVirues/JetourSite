"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function ServiceTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacus tristique.",
      author: "Andrea Hernández",
      date: "26 marzo 2024",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacus tristique.",
      author: "Carlos Gutiérrez",
      date: "15 abril 2024",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacus tristique.",
      author: "María Rodriguez",
      date: "8 mayo 2024",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="relative bg-black text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <Quote className="w-12 h-12 text-blue-500 flex-shrink-0" />
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  Lo que nuestros clientes dicen
                </h2>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center space-x-4">
              <motion.button
                onClick={prevTestimonial}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              <motion.button
                onClick={nextTestimonial}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content - Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatePresence mode="wait">
                {testimonials
                  .slice(currentTestimonial, currentTestimonial + 2)
                  .map((testimonial, index) => (
                    <motion.div
                      key={`${testimonial.id}-${currentTestimonial}`}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
                    >
                      {/* Quote indicator */}
                      <div className="absolute -top-3 -left-3">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <Quote className="w-3 h-3 text-white" />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {testimonial.text}
                        </p>

                        <div className="border-t border-gray-600 pt-4">
                          <p className="text-white font-semibold text-sm">
                            {testimonial.author}
                          </p>
                          <p className="text-blue-500 text-xs">
                            Cliente desde {testimonial.date}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
