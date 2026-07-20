# Drift Engineering Specification
## Landing Page v1.0

---

# Status

Ready for implementation.

This document is the implementation specification for the Drift landing page.

Codex must implement this page according to this specification instead of inventing layouts or interactions.

---

# Goal

The landing page should immediately communicate one idea:

> Drift transforms waiting time into meaningful AI experiences.

The page should feel:

- Calm
- Premium
- Human
- Emotional
- Beautiful
- Modern

Avoid looking like:

- AI chatbot
- SaaS dashboard
- Productivity app
- Travel booking website
- Interior design website

The experience should feel closer to Apple, Linear and Headspace than traditional AI products.

---

# Overall Layout

The landing page consists of two sections only.

Section 01
Hero

Section 02
Experience Gallery

No additional sections should be implemented in this task.

---

# Section 01
Hero

Contains:

Navigation

Headline

Supporting text

Primary CTA

Secondary CTA

Background illustration

Floating contextual widgets

Experience completion illustration

---

# Navigation

Left

Drift logo

Small tagline

Center

For You

How it Works

Use Cases

About

Right

Begin Your Interlude button

Theme toggle

Navigation remains transparent.

No sticky navigation.

---

# Background

Use the approved pastel landscape illustration.

Requirements

Do not blur.

Do not fade.

Do not darken.

Do not overlay gradients that hide artwork.

The illustration is part of the brand identity.

---

# Hero Heading

Use Instrument Serif.

Do not use a standard stacked headline.

Typography should feel editorial.

The word

something

uses the gradient accent.

The typography should dominate the left side.

The headline should become the strongest visual element after the illustration.

---

# Hero Description

Maximum width

520px

Body font

Inter

Readable line height.

---

# Primary CTA

Begin Your Interlude

Gradient

Orange → Coral

Rounded pill.

Hover

Lift

Glow

Subtle scale

---

# Secondary CTA

See how it works

Text button

Arrow icon

Minimal animation.

---

# Floating Context Widgets

Display only

Airport

Hospital

Coffee Shop

Commute

Requirements

Do not use rectangles.

Use custom silhouettes.

Airport

Airplane silhouette

Hospital

Heart silhouette

Coffee

Coffee mug silhouette

Commute

Train / Metro silhouette

Widgets float slowly.

Images remain visible inside shapes.

Background remains partially visible through the shapes.

Glass effect.

Do not use opaque colors.

---

# Experience Completion Illustration

Use only

Large illustration

Heading

Interlude Complete

No surrounding card.

No buttons.

No shadows around illustration.

Acts as emotional proof.

---

# Hero Animation

Page loads

Background

Fade in

Headline

Slide upward

CTA

Fade

Widgets

Float continuously

Person illustration

Subtle breathing motion

No exaggerated animation.

Everything should feel peaceful.

---

# Section 02

Experience Gallery

Purpose

Demonstrate what Drift can create.

---

# Layout

Two-column layout.

Left

Heading

Description

Right

Horizontal carousel.

---

# Heading

Experience stories crafted just for your moment.

Editorial typography.

Highlight

your

using gradient.

---

# Carousel

Horizontal.

Snap scrolling.

Desktop

Centered active card.

Adjacent cards partially visible.

Mobile

Swipe naturally.

---

# Experience Cards

Include

The Forgotten Letter

The Last Train

The Coffee Conversation

The Time Capsule

The Museum That Never Existed

Every card

Phone mockup

Unique artwork

Part indicator

Description

Primary action

Secondary action

Hover

Lift

Shadow

Scale

Very subtle.

---

# Motion

Framer Motion only.

Avoid heavy animation.

Duration

250–450ms

Ease

easeOut

Floating widgets

8–10 second loop.

---

# Responsive

Desktop

1440+

Tablet

1024

Mobile

390+

No horizontal overflow.

---

# Accessibility

Semantic HTML

Keyboard navigation

Visible focus states

Minimum AA contrast

Buttons accessible

Images have alt text

---

# Performance

Use next/image.

Lazy load gallery images.

Avoid unnecessary re-renders.

Animation should remain at 60fps.

---

# Folder Structure

src/

components/

landing/

Navbar.tsx

Hero.tsx

FloatingWidgets.tsx

CompletionIllustration.tsx

ExperienceGallery.tsx

ExperienceCard.tsx

CTAButtons.tsx

---

# Tech Stack

Next.js App Router

TypeScript

TailwindCSS

shadcn/ui

Framer Motion

next/image

Lucide Icons

---

# Acceptance Criteria

The implementation is complete only if

✓ Responsive

✓ Matches approved visual direction

✓ Smooth animations

✓ Lighthouse performance friendly

✓ No layout shifts

✓ Accessible

✓ Clean reusable components

✓ Passes lint

✓ Passes build

✓ Passes format

---

# Out of Scope

Do NOT implement

Authentication

AI generation

Backend

Context selection

Time selection

Thinking screen

Experience renderer

Footer

FAQ

Testimonials

Pricing

Only implement the landing page described above.