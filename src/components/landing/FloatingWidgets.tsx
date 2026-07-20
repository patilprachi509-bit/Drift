"use client";

import Image from "next/image";
import { Coffee, HeartPulse, Plane, TrainFront } from "lucide-react";
import { motion } from "framer-motion";
import type { ComponentType, CSSProperties, SVGProps } from "react";

type Widget = {
  label: string;
  image: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  className: string;
  delay: number;
  clipPath: string;
};

const widgets: Widget[] = [
  {
    label: "Airport",
    image: "/landing/airport-bg.png",
    icon: Plane,
    className: "left-[3%] top-[24%]",
    delay: 0,
    clipPath: "polygon(8% 38%, 48% 8%, 92% 36%, 82% 78%, 38% 91%, 12% 68%)",
  },
  {
    label: "Hospital",
    image: "/landing/hospital-bg.png",
    icon: HeartPulse,
    className: "right-[3%] top-[20%]",
    delay: 1.2,
    clipPath: "polygon(50% 14%, 88% 34%, 78% 78%, 50% 94%, 22% 78%, 12% 34%)",
  },
  {
    label: "Coffee Shop",
    image: "/landing/coffee-bg.png",
    icon: Coffee,
    className: "left-[4%] bottom-[22%]",
    delay: 0.6,
    clipPath: "polygon(14% 18%, 80% 10%, 94% 42%, 80% 86%, 20% 90%, 6% 50%)",
  },
  {
    label: "Commute",
    image: "/landing/commute-bg.png",
    icon: TrainFront,
    className: "right-[4%] bottom-[20%]",
    delay: 1.8,
    clipPath: "polygon(18% 12%, 74% 8%, 94% 42%, 84% 88%, 28% 92%, 6% 58%)",
  },
];

export function FloatingWidgets() {
  return (
    <div aria-label="Common waiting moments" className="pointer-events-none absolute inset-0 z-10">
      {widgets.map(({ label, image, icon: Icon, className, delay, clipPath }) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: [0, -12, 0] }}
          transition={{
            opacity: { duration: 0.45, delay },
            y: { duration: 8.5 + delay, repeat: Infinity, ease: "easeInOut" },
          }}
          className={`absolute hidden h-24 w-[120px] overflow-hidden border border-surface/20 bg-surface/10 opacity-65 shadow-soft backdrop-blur-sm xl:block ${className}`}
          style={{ clipPath } as CSSProperties}
        >
          <Image src={image} alt="" fill sizes="120px" className="object-cover opacity-40" />
          <div className="absolute inset-0 bg-surface/5" />
          <div className="absolute inset-x-2.5 bottom-3.5 flex items-center gap-1.5 text-xs font-normal text-foreground/50">
            <Icon aria-hidden="true" className="size-3.5 shrink-0" />
            <span className="truncate">{label}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
