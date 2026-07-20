"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ExperienceCard, type ExperienceCardData } from "@/components/landing/ExperienceCard";

const experiences: ExperienceCardData[] = [
  {
    title: "The Forgotten Letter",
    artwork: "/landing/forgotten-letter.png",
    part: "01 / 05",
    description: "A quiet note from a version of you that waited, noticed, and remembered.",
    fit: "cover",
  },
  {
    title: "The Last Train",
    artwork: "/landing/last-train.png",
    part: "02 / 05",
    description: "A cinematic pause between platforms, memory, and the place you are heading.",
    fit: "cover",
  },
  {
    title: "The Coffee Conversation",
    artwork: "/landing/coffee-conversation.png",
    part: "03 / 05",
    description: "A reflective dialogue designed for the length of a warm drink cooling down.",
    fit: "contain",
    bgColor: "#1b1307",
  },
  {
    title: "The Time Capsule",
    artwork: "/landing/time-capsule.png",
    part: "04 / 05",
    description: "A small emotional artifact made from this exact moment and saved for later.",
    fit: "contain",
    bgColor: "#2f1a07",
  },
  {
    title: "The Museum That Never Existed",
    artwork: "/landing/museum-never-existed.png",
    part: "05 / 05",
    description: "A private exhibit assembled from memory, imagination, and passing time.",
    fit: "cover",
  },
];

export function ExperienceGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const containerCenter = container.scrollLeft + container.clientWidth / 2;
      let closestIndex = 0;
      let minDistance = Infinity;

      const children = container.children;
      for (let i = 0; i < children.length; i++) {
        const child = children[i] as HTMLElement;
        const childCenter = child.offsetLeft + child.clientWidth / 2;
        const distance = Math.abs(containerCenter - childCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = i;
        }
      }
      setActiveIndex(closestIndex);
    };

    handleScroll();

    container.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      id="experience-gallery"
      className="relative overflow-hidden bg-background px-6 py-[var(--section-padding)] lg:px-8"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/landing/gallery-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40 blur-[5px]"
        />
      </div>

      <div className="mx-auto grid max-w-[var(--max-content-width)] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="max-w-xl">
          <h2 className="font-heading text-[length:var(--font-size-heading-2)] text-foreground">
            Experience stories crafted just for{" "}
            <span className="bg-linear-to-r from-primary to-orb-end bg-clip-text text-transparent">
              your
            </span>{" "}
            moment.
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Drift creates small, personal interludes for the time you actually have, from airport
            pauses to quiet coffees and late commutes.
          </p>
        </div>

        <div
          ref={containerRef}
          aria-label="Experience story carousel"
          className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-6 pt-2 [scrollbar-width:none] md:px-[calc(50%-165px)] lg:-mx-8 lg:px-[calc(50%-165px)] [&::-webkit-scrollbar]:hidden"
        >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.title}
              experience={experience}
              isActive={index === activeIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


