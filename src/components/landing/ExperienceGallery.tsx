import { ExperienceCard, type ExperienceCardData } from "@/components/landing/ExperienceCard";

const experiences: ExperienceCardData[] = [
  {
    title: "The Forgotten Letter",
    artwork: "/landing/story-letter.svg",
    part: "01 / 05",
    description: "A quiet note from a version of you that waited, noticed, and remembered.",
  },
  {
    title: "The Last Train",
    artwork: "/landing/story-train.svg",
    part: "02 / 05",
    description: "A cinematic pause between platforms, memory, and the place you are heading.",
  },
  {
    title: "The Coffee Conversation",
    artwork: "/landing/story-coffee.svg",
    part: "03 / 05",
    description: "A reflective dialogue designed for the length of a warm drink cooling down.",
  },
  {
    title: "The Time Capsule",
    artwork: "/landing/story-capsule.svg",
    part: "04 / 05",
    description: "A small emotional artifact made from this exact moment and saved for later.",
  },
  {
    title: "The Museum That Never Existed",
    artwork: "/landing/story-museum.svg",
    part: "05 / 05",
    description: "A private exhibit assembled from memory, imagination, and passing time.",
  },
];

export function ExperienceGallery() {
  return (
    <section
      id="experience-gallery"
      className="overflow-hidden bg-background px-6 py-[var(--section-padding)] lg:px-8"
    >
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
          aria-label="Experience story carousel"
          className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-6 pt-2 [scrollbar-width:none] lg:-mx-8 lg:px-8 [&::-webkit-scrollbar]:hidden"
        >
          {experiences.map((experience) => (
            <ExperienceCard key={experience.title} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
