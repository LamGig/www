# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a marketing website for LamGig.com built with Next.js 15, React 19, and Tailwind CSS v4. The project uses HeroUI React components (beta version) for the UI library.

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **React**: Version 19
- **Styling**: Tailwind CSS v4 with PostCSS
- **UI Components**: HeroUI React (beta version)
- **TypeScript**: Full TypeScript support with strict mode

### Project Structure
```
src/
├── app/                 # Next.js App Router pages
│   ├── page.tsx        # Homepage
│   ├── layout.tsx      # Root layout with fonts
│   └── globals.css     # Global styles
└── components/         # React components
    ├── SiteHeader/     # Header component
    ├── SiteFooter/     # Footer component
    └── HeroSection/    # Hero section component
    └── ui/             # Custom UI components
```

### Key Configuration
- Uses `@/*` path aliases for imports (configured in tsconfig.json)
- Tailwind CSS v4 with PostCSS plugin
- Geist Sans and Geist Mono fonts from Google Fonts
- Turbopack for fast development builds

### Component Architecture
- Components are organized in folders with index.ts exports
- Uses HeroUI components (Navbar, Button, Link, etc.)
- TypeScript interfaces for props and component definitions

## Important Notes

- The project uses Tailwind CSS v4 which has different configuration than v3
- HeroUI React is in beta version due to Next.js Tailwind v4 compatibility
- Uses App Router pattern for routing and layouts
- Site has max-width of `max-w-7xl`