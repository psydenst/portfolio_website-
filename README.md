# Portfolio - Next.js

A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ⚡ Next.js 14 with App Router
- 🎨 Tailwind CSS for styling
- 📱 Responsive design
- 🚀 Optimized for performance
- 🔧 TypeScript support
- 📦 Optimized build process

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build Optimizations

This project includes several optimizations for faster builds:

- **SWC Minification**: Faster compilation than Terser
- **Package Import Optimization**: Optimized imports for lucide-react
- **Image Optimization**: WebP and AVIF formats with responsive sizes
- **Bundle Splitting**: Vendor chunks for better caching
- **Console Removal**: Removes console logs in production
- **Standalone Output**: Optimized for deployment

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
portfolio/
├── src/
│   ├── app/           # Next.js App Router pages
│   ├── components/    # Reusable components
│   └── lib/          # Utility functions
├── public/           # Static assets
└── ...config files
``` 