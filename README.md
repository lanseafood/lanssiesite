# Lanssie's Personal Website

A modern personal website built with Next.js, TypeScript, and React featuring a mini-game gateway.

## Features

- 🎮 **Mini-Game Gateway**: Play a fun mini-game to unlock access to the website
- ⚡ **Next.js 14**: Modern React framework with App Router
- 📘 **TypeScript**: Type-safe development
- 🎨 **Tailwind CSS**: Utility-first CSS framework
- 📱 **Responsive Design**: Works on all devices
- 🚀 **Static Export**: Ready for GitHub Pages deployment

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

This creates a static export in the `out/` directory, ready for GitHub Pages.

## Project Structure

```
lanssiesite/
├── app/                 # Next.js App Router pages
│   ├── page.tsx         # Home page with mini-game
│   ├── about/           # About page
│   ├── cv/              # CV page
│   ├── contact/         # Contact page
│   └── vr/              # VR projects page
├── components/          # React components
│   └── MiniGame.tsx     # Mini-game component
├── public/              # Static assets
│   ├── images/          # Images
│   └── css/             # Custom CSS and fonts
└── package.json         # Dependencies
```

## Mini-Game

The mini-game is a click-based target game where players need to score 100 points within 30 seconds to unlock the website. The completion status is stored in localStorage, so players don't need to replay it every time.

## Deployment

### GitHub Pages

1. Build the static site:
```bash
npm run build
```

2. The `out/` directory contains the static files

3. Configure GitHub Pages to serve from the `out/` directory, or use GitHub Actions (see below)

### GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ master ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

## Customization

- Edit `components/MiniGame.tsx` to customize the game
- Modify pages in `app/` directory
- Update styles in `app/globals.css` and Tailwind config
- Add your content to the respective pages

## Tech Stack

- **Next.js 14**: React framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **React 18**: UI library

## License

Personal project - All rights reserved
