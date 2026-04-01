# Strixora Labs — Website

Production-ready marketing website for Strixora Labs, built with Next.js 15, React 19, Tailwind CSS, and Framer Motion.

## Stack

| Layer       | Technology                           |
|-------------|--------------------------------------|
| Framework   | Next.js 15 (App Router)              |
| Language    | TypeScript                           |
| Styling     | Tailwind CSS v3                      |
| Animations  | Framer Motion                        |
| Theming     | next-themes (dark / light)           |
| Forms       | React Hook Form + Zod validation     |
| Icons       | Lucide React                         |
| Email       | Resend (optional, see below)         |
| Font        | Inter + JetBrains Mono (Google Fonts)|

## Project Structure

```
strixoralabs/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout (Navbar, Footer, ThemeProvider)
│   ├── page.tsx                # Home page
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── industries/page.tsx
│   ├── projects/page.tsx
│   ├── contact/page.tsx
│   └── api/contact/route.ts    # Contact form API endpoint
│
├── components/
│   ├── layout/                 # Navbar, Footer, NewsletterForm
│   ├── brand/                  # OwlLogo SVG
│   ├── home/                   # Hero, Services, Industries, WhyUs, FeaturedProjects, CTA
│   ├── about/                  # AboutHero, AboutMission, AboutValues, AboutTeam
│   ├── services/               # ServicesHero, ServicesDetail, ServiceProcess
│   ├── industries/             # IndustriesHero, IndustriesDetail
│   ├── projects/               # ProjectsHero, ProjectsGrid
│   ├── contact/                # ContactHero, ContactForm, ContactInfo
│   ├── providers/              # ThemeProvider
│   └── ui/                     # Button, Badge, SectionLabel, ThemeToggle
│
├── lib/
│   └── utils.ts                # cn() utility (clsx + tailwind-merge)
│
├── public/
│   └── favicon.svg
│
├── tailwind.config.ts
├── next.config.ts
└── .env.local.example
```

## Local Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Environment variables

```bash
cp .env.local.example .env.local
```

The site works without any env vars — the contact form logs to console in development.  
To send real emails, add your [Resend](https://resend.com) API key to `.env.local` and uncomment the Resend block in `app/api/contact/route.ts`.

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 4. Build for production

```bash
npm run build
npm start
```

## Enabling Email (Resend)

1. Sign up at [resend.com](https://resend.com) and create an API key
2. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxx
   FROM_EMAIL=noreply@strixoralabs.com
   CONTACT_EMAIL=hello@strixoralabs.com
   ```
3. In `app/api/contact/route.ts`, uncomment the Resend block

## Customisation

- **Brand colours** — edit `tailwind.config.ts` → `colors.brand`
- **Company content** — update each component's data arrays directly
- **Logo** — replace `components/brand/OwlLogo.tsx` with your own SVG
- **Favicon** — replace `public/favicon.svg`
- **Meta tags** — update `app/layout.tsx` → `metadata`

## Deployment

The site is optimised for [Vercel](https://vercel.com):

```bash
npx vercel
```

Or any platform that supports Node.js (Railway, Render, Fly.io, AWS Amplify).
