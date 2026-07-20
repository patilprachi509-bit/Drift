"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export type ExperienceCardData = {
  title: string;
  artwork: string;
  part: string;
  description: string;
  fit?: "cover" | "contain";
  bgColor?: string;
};

type ExperienceCardProps = {
  experience: ExperienceCardData;
  isActive?: boolean;
};

export function ExperienceCard({ experience, isActive = true }: ExperienceCardProps) {
  return (
    <motion.article
      animate={{
        opacity: isActive ? 1 : 0.6,
        scale: isActive ? 1 : 0.96,
      }}
      whileHover={{ y: -6, scale: isActive ? 1.015 : 0.975 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="min-w-[285px] snap-center rounded-lg border bg-surface p-4 shadow-soft transition-shadow duration-normal ease-standard hover:shadow-medium sm:min-w-[330px]"
    >
      <div className="mx-auto w-full max-w-[230px] rounded-[2rem] border border-foreground/10 bg-foreground p-2">
        <div 
          className="overflow-hidden rounded-[1.55rem]"
          style={{ backgroundColor: experience.bgColor || "var(--background)" }}
        >
          <Image
            src={experience.artwork}
            alt={`${experience.title} artwork`}
            width={360}
            height={640}
            loading="lazy"
            className={`aspect-[9/16] h-auto w-full ${
              experience.fit === "contain" ? "object-contain" : "object-cover"
            }`}
          />
        </div>
      </div>

      <div className="mt-5 space-y-4">
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-heading text-3xl leading-none text-foreground">{experience.title}</h3>
          <span className="shrink-0 rounded-pill border px-3 py-1 text-xs text-muted-foreground">
            {experience.part}
          </span>
        </div>
        <p className="text-sm leading-6 text-muted-foreground">{experience.description}</p>
        <div className="flex items-center justify-between gap-4">
          <a
            href="/experience"
            className="rounded-pill bg-primary px-4 py-2 text-sm font-medium text-primary-foreground outline-none transition-colors duration-normal ease-standard hover:bg-primary-hover focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-surface"
          >
            Begin
          </a>
          <a
            href="/experience"
            className="inline-flex items-center gap-1 rounded-pill px-2 py-2 text-sm font-medium text-foreground outline-none transition-colors duration-normal ease-standard hover:text-primary-hover focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-surface"
          >
            Preview
            <ArrowRight aria-hidden="true" className="size-4" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

