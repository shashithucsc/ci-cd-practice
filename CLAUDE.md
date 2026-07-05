# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

This is a **Next.js 15 App Router** portfolio site with TypeScript, TailwindCSS 4, and Framer Motion.

### Pages & Routing

- `/` — Single-page portfolio (all sections on one page, hash-based navigation)
- `/notes` — Study notes listing page

The homepage ([app/page.tsx](app/page.tsx)) assembles all section components in order. Section navigation uses anchor IDs (`#home`, `#about`, `#projects`, `#skills`, `#education`).

### Component Structure

All components live in [components/](components/) and are `'use client'` components due to Framer Motion animations. Data is hardcoded directly inside each component file — no external data source or CMS.

Key components and their roles:
- [LoadingAnimation.tsx](components/LoadingAnimation.tsx) — Animated page load screen shown before main content
- [Navbar.tsx](components/Navbar.tsx) — Sticky nav with scroll-based active-section detection and mobile drawer
- [HeroSection.tsx](components/HeroSection.tsx) — Landing with parallax, mouse-following spotlight, floating avatar
- [AboutSection.tsx](components/AboutSection.tsx) — Bio and experience timeline
- [ProjectsSection.tsx](components/ProjectsSection.tsx) — Project grid with expandable modals (~30KB, largest component)
- [SkillsSection.tsx](components/SkillsSection.tsx) — Animated progress bars
- [EducationSection.tsx](components/EducationSection.tsx) — Education timeline
- [NotesSection.tsx](components/NotesSection.tsx) — Study notes browser (~24KB)
- [Footer.tsx](components/Footer.tsx) — Contact section with mouse-following spotlight

### Styling Conventions

Styling uses **TailwindCSS 4** with custom glass morphism utilities defined in [app/globals.css](app/globals.css):

- `.glass`, `.glass-strong`, `.glass-light` — frosted glass cards
- `.glow-primary`, `.glow-secondary`, `.glow-accent` — colored glow box-shadows
- `.gradient-text` — animated gradient text

Custom Tailwind animations (`float`, `pulse-glow`, `gradient-shift`) are defined in [tailwind.config.ts](tailwind.config.ts). Dark mode is toggled via the `class` strategy.

### SEO & Metadata

- Site metadata is in [app/layout.tsx](app/layout.tsx) (title, description, OpenGraph)
- [app/robots.ts](app/robots.ts) and [app/sitemap.ts](app/sitemap.ts) auto-generate SEO files

### Static Assets

- Profile images: `public/images/`
- CV PDF: `public/Shashith_rashmika_CV_SE.pdf`
- Notes PDFs: `public/notes/`

### Path Alias

`@/*` maps to the project root (configured in [tsconfig.json](tsconfig.json)).
