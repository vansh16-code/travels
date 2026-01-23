# Dreamscape Travels Website

A modern, professional travel website built with Next.js 16, React 19, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- 🖼️ Image carousel hero section
- 📦 Tour package showcase
- 💬 WhatsApp integration for enquiries
- 📱 Mobile-friendly navigation
- ⚡ Fast performance with Next.js
- 🎯 SEO optimized

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, or bun

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
bun install
```

3. Copy `.env.local.example` to `.env.local` and configure:

```bash
cp .env.local.example .env.local
```

4. Run the development server:

```bash
npm run dev
# or
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

### Other Platforms

```bash
npm run build
npm start
```

## Configuration

### WhatsApp Integration

Update the phone number in:
- `src/components/PackagesSection.tsx`
- `src/components/ContactSection.tsx`

### Images

Place your images in the `/public` folder:
- Hero carousel: `car1.jpg`, `car2.jpg`, `car3.jpg`, `c5.webp`
- Services: `flight.jpg`, `hotel.webp`, `tour.png`, `photo.jpeg`, `food.webp`, `transport.jpg`
- Packages: `c5.webp`, `shimla.jpg`, `gulmarg.jpg`
- Logo: `head.png`

## Tech Stack

- **Framework:** Next.js 16
- **UI Library:** React 19
- **Styling:** Tailwind CSS 4
- **Components:** Radix UI, shadcn/ui
- **Icons:** Lucide React
- **Carousel:** Embla Carousel

## Contact

Dreamscape Travels
- Phone: +91 88820 00090, +91 84377 97777
- Email: dreamscapetravals2025@gmail.com
- Address: #4528 Street No 2, Guru Nanak Pura, Sultanwind Road, Amritsar, Punjab 143001

## License

© 2026 Dreamscape Travels. All rights reserved.
