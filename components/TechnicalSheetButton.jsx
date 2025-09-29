"use client";

import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";
import Link from "next/link";

export default function TechnicalSheetButton({ model = "t1" }) {
  return (
    <div className="flex justify-center mt-8 mb-16">
      <Link
        href={`/models/${
          model === "x70-plus" ? "x70" : model
        }/ficha-tecnica-${model}.pdf`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.button
          className="px-4 md:px-6 py-2 md:py-3 border-2 rounded-full font-semibold transition-all duration-300 text-sm md:text-base  border-blue-500 text-blue-500 bg-blue-500/10 flex items-center gap-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FileText className="w-6 h-6" />
          <span>Ver Ficha</span>
          <Download className="w-5 h-5" />
        </motion.button>
      </Link>
    </div>
  );
}
