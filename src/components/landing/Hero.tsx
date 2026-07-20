"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CTAButtons } from "@/components/landing/CTAButtons";
import { CompletionIllustration } from "@/components/landing/CompletionIllustration";
import { FloatingWidgets } from "@/components/landing/FloatingWidgets";
import { Navbar } from "@/components/landing/Navbar";

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src="/landing/hero-bg.png"
          alt="Pastel landscape with soft hills and warm light"
          fill
          priority
          sizes="100vw"
          className="object-cover object-bottom"
        />
      </motion.div>

      <Navbar />
      <FloatingWidgets />

      <div className="mx-auto grid min-h-[100svh] max-w-[var(--max-content-width)] items-center gap-12 px-6 pb-16 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pt-28">
        <div className="relative z-20 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="max-w-[11ch] font-heading text-[clamp(4.25rem,11vw,9.25rem)] leading-[0.88] text-foreground"
          >
            Waiting can become{" "}
            <span className="bg-linear-to-r from-primary to-orb-end bg-clip-text text-transparent">
              something
            </span>{" "}
            meaningful.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
            className="mt-7 max-w-[520px] text-lg leading-8 text-muted-foreground"
          >
            Drift transforms the forgotten moments between destinations into calm, personal AI
            experiences shaped around where you are, how much time you have, and how you want to
            feel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.24, ease: "easeOut" }}
            className="mt-9"
          >
            <CTAButtons />
          </motion.div>
        </div>

        <div className="relative z-20">
          <CompletionIllustration />
        </div>
      </div>
    </section>
  );
}
