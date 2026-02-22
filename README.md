# Khodimul Ummah - Company Profile

Company profile website for **PT. Khodimul Ummah**, a licensed Indonesian Migrant Worker Placement Company (P3MI) specializing in sending workers to **Saudi Arabia**, **Dubai (UAE)**, and **Qatar**.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000?logo=vercel)

## Live Demo

[https://khodimul-ummah.hendisantika.my.id](https://khodimul-ummah.hendisantika.my.id)

## Features

- **Responsive Design** - Mobile-first approach, works on all screen sizes
- **Sticky Navbar** - Transparent-to-solid scroll effect with mobile hamburger menu
- **Hero Section** - Full-screen gradient hero with CTA and destination flags
- **Company Stats** - Key metrics (5,000+ workers, 3 countries, 10+ years, 98% satisfaction)
- **About Section** - Company profile with key values
- **Services** - 6 service cards (Domestic, Construction, Hospitality, Training, Documents, Protection)
- **Destinations** - Country-specific cards for Saudi Arabia, Dubai & Qatar with salary info
- **Process Flow** - 6-step placement process from registration to monitoring
- **Why Choose Us** - 6 key advantages
- **Testimonials** - Worker success stories with glassmorphism cards
- **CTA Banner** - Call-to-action with WhatsApp integration
- **Contact Form** - Form with destination selector + office info & social media links
- **Footer** - Company info, quick links, destinations & contact details
- **Vercel Analytics** - Built-in analytics tracking
- **SEO Optimized** - Metadata, OpenGraph tags, and Indonesian locale

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Runtime**: [Bun](https://bun.sh/)
- **Analytics**: [@vercel/analytics](https://vercel.com/analytics)
- **Fonts**: [Geist](https://vercel.com/font) (Sans & Mono)
- **Deployment**: [Vercel](https://vercel.com/)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+

### Installation

```bash
# Clone the repository
git clone https://github.com/hendisantika/khodimul-ummah.git
cd khodimul-ummah

# Install dependencies
bun install

# Start development server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
bun run build
bun start
```

## Project Structure

```
app/
├── components/
│   ├── Navbar.tsx          # Sticky navigation with scroll effect
│   ├── Hero.tsx            # Full-screen hero section
│   ├── Stats.tsx           # Key company metrics
│   ├── About.tsx           # Company profile
│   ├── Services.tsx        # Service offerings
│   ├── Destinations.tsx    # Saudi, Dubai & Qatar cards
│   ├── Process.tsx         # 6-step placement flow
│   ├── WhyChooseUs.tsx     # Key advantages
│   ├── Testimonials.tsx    # Worker testimonials
│   ├── CTA.tsx             # Call-to-action banner
│   ├── Contact.tsx         # Contact form & info
│   └── Footer.tsx          # Site footer
├── globals.css             # Theme, animations & custom styles
├── layout.tsx              # Root layout with metadata & analytics
└── page.tsx                # Main page composing all sections
```

## License

All rights reserved. &copy; PT. Khodimul Ummah.
