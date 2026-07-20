"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export type ExperienceCardData = {
  title: string;
  artwork: string;
  part: string;
  description: string;
};

type ExperienceCardProps = {
  experience: ExperienceCardData;
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="min-w-[285px] snap-center rounded-lg border bg-surface p-4 shadow-soft transition-shadow duration-normal ease-standard hover:shadow-medium sm:min-w-[330px]"
    >
      <div className="mx-auto w-full max-w-[230px] rounded-[2rem] border border-foreground/10 bg-foreground p-2">
        <div className="overflow-hidden rounded-[1.55rem] bg-background">
          <Image
            src={experience.artwork}
            alt={`${experience.title} artwork`}
            width={360}
            height={640}
            loading="lazy"
            className="aspect-[9/16] h-auto w-full object-cover"
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
