"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTAButtons() {
  return (
    <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
      <motion.a
        href="/experience"
        whileHover={{ y: -3, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="rounded-pill bg-linear-to-r from-primary to-orb-end px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-primary-soft outline-none transition-[box-shadow] duration-normal ease-standard hover:shadow-primary-glow focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
      >
        Begin Your Interlude
      </motion.a>

      <motion.a
        href="#experience-gallery"
        whileHover={{ x: 4 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="inline-flex items-center gap-2 rounded-pill px-2 py-2 text-sm font-medium text-foreground outline-none transition-colors duration-normal ease-standard hover:text-primary-hover focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
      >
        See how it works
        <ArrowRight aria-hidden="true" className="size-4" />
      </motion.a>
    </div>
  );
}
