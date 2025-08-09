# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
LamGig is a Next.js 15 marketing website for a mobile app development service. It features a multi-step project submission form that sends client inquiries via Resend API.

## Development Commands

```bash
# Start development server (uses Turbopack for faster builds)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Architecture & Tech Stack

### Core Framework
- **Next.js 15** with App Router architecture
- **TypeScript** with strict mode enabled
- **React 19** with concurrent features
- **Tailwind CSS 4** for styling (via @tailwindcss/postcss)

### UI Framework & Components
- **HeroUI (@heroui/react)** as primary UI component library
- **Framer Motion** for animations and transitions
- **Lucide React** for iconography
- No React Hook Form - forms use controlled components with useState

### Email Service
- **Resend** API for sending emails
- Email templates using React components
- API endpoint: `/api/send-project`
- Environment variable: `RESEND_API_KEY`
- Sends to: `nhat@lamgig.com`
- From address: `noreply@updatemail.lamgig.com`

### Key Components

#### StartProjectForm (`/src/components/StartProjectForm/StartProjectForm.tsx`)
- Multi-step form flow: package selection → business details → contact info
- Form state managed with useState
- Package pre-selection via URL query parameter (`?package=standard|enterprise`)
- Email validation with regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- API submission to `/api/send-project` endpoint
- Animated success state with thank you message
- Loading overlay during submission
- Error handling with user-friendly messages

#### HeroSection (`/src/components/HeroSection/HeroSection.tsx`)
- Animated text reveals using Framer Motion with stagger effects
- Feature cards with hover animations
- Trust indicators (pricing, timeline, support)
- Background pattern with gradient orbs
- Links to `/start` for main CTA

### API Routes

#### `/api/send-project`
- Accepts POST requests with project submission data
- Required fields: email, firstName, lastName, businessDescription, projectNeeds, selectedPackage
- Optional fields: company, phone
- Uses Resend SDK to send formatted email
- Returns success/error JSON response

### Styling Patterns
- Tailwind CSS with custom color scheme
- Primary color accessed via `text-primary`, `bg-primary`
- HeroUI component customization via `classNames` prop
- Consistent animation durations (0.2s, 0.3s, 0.6s)
- Border radius patterns: `rounded-lg`, `rounded-xl`, `rounded-2xl`
- Shadow patterns for depth
- Responsive breakpoints: `sm:`, `md:`, `lg:`

### Animation Patterns
- Framer Motion for complex animations
- Container/item pattern for staggered reveals
- Spring animations for natural motion
- Scale transforms on hover
- Path animations for SVG elements
- AnimatePresence for exit animations

### TypeScript Configuration
- Strict mode enabled
- Target: ES2017
- Module resolution: bundler
- Path alias: `@/*` maps to `./src/*`
- JSX: preserve (for Next.js optimization)

### Font Setup
- Geist Sans for body text (`--font-geist-sans`)
- Geist Mono for code (`--font-geist-mono`)
- Applied via CSS variables in layout.tsx