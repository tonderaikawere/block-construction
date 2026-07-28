# Block Construction Next.js Website

This is a premium replica of the Block Construction Webflow Ecommerce template built with Next.js and TypeScript.

## Tech Stack
- **Framework**: Next.js 15+ (App Router)
- **Styling**: Vanilla CSS (migrated from Webflow styles)
- **Languages**: TypeScript, JavaScript
- **Libraries**: jQuery (used for legacy animations and layout)

## Local Setup
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Folder Structure
- `public/`: Assets (images, fonts, scripts)
- `src/app/`: Next.js pages and API routing
- `src/app/html_sources.ts`: Pre-compiled static HTML structures from the Webflow migration

## Backend API Routes
- **POST `/api/contact`**: Receives form submissions from the contact page.
