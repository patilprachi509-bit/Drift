"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function CompletionIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: [1, 1.025, 1] }}
      transition={{
        opacity: { duration: 0.45, delay: 0.35 },
        scale: { duration: 7.5, repeat: Infinity, ease: "easeInOut" },
      }}
      className="relative mx-auto flex w-full max-w-sm flex-col items-center lg:max-w-md"
    >
      <Image
        src="/landing/completion.svg"
        alt="Abstract illustration showing a completed interlude"
        width={720}
        height={720}
        priority
        className="h-auto w-full"
      />
      <p className="-mt-8 font-heading text-4xl text-foreground sm:text-5xl">Interlude Complete</p>
    </motion.div>
  );
}
