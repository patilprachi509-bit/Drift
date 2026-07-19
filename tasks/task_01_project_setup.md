# Task 01 – Initialize the Drift Project

## Context

Read `PROJECT.md` before starting.

You are joining the Drift project as a senior frontend engineer.

Your responsibility is to establish a production-ready foundation for the application.

Do NOT implement any business features.

The objective of this task is only to create a scalable project structure that future tasks can build upon.

---

# Objective

Initialize a Next.js application using the latest stable versions and configure the project according to the standards defined in `PROJECT.md`.

---

# Tech Stack

Framework

- Next.js (App Router)
- React
- TypeScript

Styling

- Tailwind CSS
- CSS Variables
- shadcn/ui

Animation

- Framer Motion

Icons

- Lucide React

Utilities

- clsx
- tailwind-merge
- class-variance-authority

Developer Experience

- ESLint
- Prettier
- Path aliases (@/*)

---

# Project Structure

Create a clean and scalable folder structure.

src/

app/

components/

components/ui

components/layout

components/landing

components/setup

components/experience

components/shared

lib/

hooks/

types/

styles/

public/

public/icons

public/illustrations

public/backgrounds

---

# Theme

Configure a light-first design system.

Requirements

- CSS variables
- No hardcoded colors
- Easy future theme customization

Do NOT implement branding colors yet.

---

# Typography

Configure fonts using next/font.

Heading Font

Instrument Serif

Body Font

Inter

Fonts must be globally available.

---

# Routing

Create placeholder routes only.

/

Landing

/experience

/not-found

Do not build UI.

Each page may simply display its route name.

---

# Code Standards

Strict TypeScript

Functional components

No business logic

No mock data

No API routes

No environment variables

No OpenAI integration

No placeholder components

---

# Acceptance Criteria

✅ Project starts successfully

✅ npm run dev works

✅ npm run build succeeds

✅ No TypeScript errors

✅ No ESLint errors

✅ Folder structure matches specification

✅ Fonts are configured

✅ Tailwind configured

✅ shadcn installed

✅ Framer Motion installed

---

# Out of Scope

Do NOT build

- Landing page
- Forms
- AI
- APIs
- Components
- Animations
- Experiences

Only build the project foundation.