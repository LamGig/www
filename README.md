# LamGig

A modern Next.js 15 marketing website for mobile app development services, featuring a multi-step project submission form and seamless client onboarding.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📦 Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 4
- **UI Components:** HeroUI (@heroui/react)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Email Service:** Resend API
- **Runtime:** React 19

## 🏗️ Project Structure

```
www/
├── src/
│   ├── app/           # Next.js App Router pages
│   ├── components/    # React components
│   │   ├── HeroSection/
│   │   └── StartProjectForm/
│   └── api/           # API routes
│       └── send-project/
├── public/            # Static assets
└── CLAUDE.md         # AI assistant instructions
```

## 🔧 Environment Variables

Create a `.env.local` file with:

```env
RESEND_API_KEY=your_resend_api_key_here
```

## 📋 Features

- **Multi-step Project Form:** Interactive form flow for project submissions
- **Package Selection:** Standard and Enterprise package options
- **Email Notifications:** Automated email delivery via Resend API
- **Responsive Design:** Mobile-first approach with Tailwind CSS
- **Smooth Animations:** Engaging user experience with Framer Motion
- **TypeScript:** Full type safety throughout the codebase

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Create production build
- `npm start` - Run production server
- `npm run lint` - Run ESLint for code quality

### Key Components

**StartProjectForm** - Multi-step form handling project submissions
- Package selection (Standard/Enterprise)
- Business details collection
- Contact information
- Email validation and submission

**HeroSection** - Landing page hero with animations
- Animated text reveals
- Feature cards
- Trust indicators
- Call-to-action buttons

### API Endpoints

**POST `/api/send-project`**
- Handles project form submissions
- Sends formatted emails via Resend
- Required fields: email, firstName, lastName, businessDescription, projectNeeds, selectedPackage

## 📧 Email Configuration

The application uses Resend for email delivery:
- **Template:** React-based email components

## 🎨 Styling Guidelines

- Primary colors via `text-primary` and `bg-primary`
- Consistent border radius: `rounded-lg`, `rounded-xl`, `rounded-2xl`
- Responsive breakpoints: `sm:`, `md:`, `lg:`
- Animation durations: 0.2s, 0.3s, 0.6s

## 🚀 Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📝 License

Private repository - All rights reserved

## 🤝 Contributing

Please follow the existing code patterns and conventions outlined in CLAUDE.md when contributing to this project.