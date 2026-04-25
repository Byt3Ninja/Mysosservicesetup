# MySOS - Emergency Medical Service App

## Overview
MySOS is a mobile-first emergency medical service application for the Egyptian market. It connects users with emergency services (ambulances, doctors, nurses, etc.) with real-time tracking, similar to ride-hailing apps.

## Tech Stack
- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI primitives (shadcn/ui style)
- **Icons**: Lucide React
- **Routing**: React Router v7
- **Animations**: Motion (Framer Motion)
- **Forms**: React Hook Form
- **Backend**: Supabase (Auth, PostgreSQL, Storage, Edge Functions)
- **Package Manager**: pnpm

## Project Structure
```
src/
  app/
    App.tsx              # Main app component with routing
    components/          # Feature components (screens, UI)
      ui/                # Reusable UI primitives (shadcn-style)
    contexts/            # React contexts (LanguageContext, etc.)
    supabase/            # Edge function logic
    utils/               # Utility functions, Supabase config
  assets/                # Static assets (Figma exports)
  styles/                # Global CSS, theme
  main.tsx               # Entry point
supabase/                # Supabase Edge Functions (Deno/Hono)
```

## Development
- Run with: `pnpm dev` (workflow: "Start application")
- Build with: `pnpm build`
- Dev server: port 5000, host 0.0.0.0

## Key Notes
- Package.json was cleaned up from Figma's version-suffixed format (e.g., `@radix-ui/react-slot@1.1.2`) to standard npm format
- Source file imports were similarly cleaned from version-suffixed format
- Supabase JSR imports (`jsr:@supabase/supabase-js`) fixed to use `@jsr/supabase__supabase-js`
- Supports English/Arabic (RTL) via LanguageContext
- Mobile-first design (375px target width)

## Deployment
- Type: Static site
- Build command: `pnpm build`
- Output directory: `dist`
