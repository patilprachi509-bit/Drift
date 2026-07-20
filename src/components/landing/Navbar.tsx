import Link from "next/link";
import { Moon } from "lucide-react";

const navItems = ["For You", "How it Works", "Use Cases", "About"] as const;

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-[var(--max-content-width)] items-center justify-between gap-5 px-6 py-5 lg:px-8"
      >
        <Link
          href="/"
          className="group rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          aria-label="Drift home"
        >
          <span className="block font-heading text-3xl leading-none text-foreground">Drift</span>
          <span className="block text-xs text-muted-foreground">AI Experience Engine</span>
        </Link>

        <div className="hidden items-center gap-8 rounded-pill border border-border/70 bg-surface/30 px-6 py-3 text-sm text-foreground/80 backdrop-blur-md lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
              className="rounded-sm outline-none transition-colors duration-normal ease-standard hover:text-primary-hover focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/experience"
            className="hidden rounded-pill border border-border/80 bg-surface/35 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur-md outline-none transition-colors duration-normal ease-standard hover:border-primary hover:text-primary-hover focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background sm:inline-flex"
          >
            Begin Your Interlude
          </Link>
          <button
            type="button"
            aria-label="Toggle theme"
            className="grid size-10 place-items-center rounded-pill border border-border/80 bg-surface/35 text-foreground backdrop-blur-md outline-none transition-colors duration-normal ease-standard hover:border-primary hover:text-primary-hover focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          >
            <Moon aria-hidden="true" className="size-4" />
          </button>
        </div>
      </nav>
    </header>
  );
}
