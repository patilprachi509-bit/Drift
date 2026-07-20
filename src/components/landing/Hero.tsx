"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CTAButtons } from "@/components/landing/CTAButtons";
import { CompletionIllustration } from "@/components/landing/CompletionIllustration";
import { FloatingWidgets } from "@/components/landing/FloatingWidgets";
import { Navbar } from "@/components/landing/Navbar";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
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

      <div className="mx-auto grid max-w-[var(--max-content-width)] items-center gap-y-8 lg:gap-y-0 lg:grid-cols-[55%_45%] lg:gap-x-16 px-6 pb-16 pt-32 lg:px-8 lg:pb-24 lg:pt-36">
        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="order-1 lg:col-start-1 lg:row-start-1 max-w-[540px] font-heading text-[clamp(2.75rem,6.5vw,5.5rem)] leading-[0.88] text-foreground"
        >
          Waiting can become{" "}
          <span className="bg-linear-to-r from-primary to-orb-end bg-clip-text text-transparent">
            something
          </span>{" "}
          meaningful.
        </motion.h1>

        <div className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-3 lg:self-center justify-self-center w-full relative z-20">
          <CompletionIllustration />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
          className="order-3 lg:col-start-1 lg:row-start-2 mt-5 lg:mt-6 max-w-[520px] text-lg leading-8 text-muted-foreground"
        >
          Drift transforms the forgotten moments between destinations into calm, personal AI
          experiences shaped around where you are, how much time you have, and how you want to
          feel.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.24, ease: "easeOut" }}
          className="order-4 lg:col-start-1 lg:row-start-3 mt-6 lg:mt-8"
        >
          <CTAButtons />
        </motion.div>
      </div>
    </section>
  );
}
