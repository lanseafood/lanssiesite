# Deployment Guide - Next.js Website

## Quick Start

Your website is now built with **Next.js + TypeScript** and can be deployed to GitHub Pages automatically!

## Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **View your site:**
   - Open [http://localhost:3000](http://localhost:3000)
   - The mini-game will appear first
   - Score 100 points to unlock the website

## Deployment to GitHub Pages

### Automatic Deployment (Recommended)

GitHub Actions is already configured! Just:

1. **Push to master branch:**
   ```bash
   git add .
   git commit -m "Deploy Next.js website"
   git push origin master
   ```

2. **Enable GitHub Pages:**
   - Go to your repository Settings → Pages
   - Under "Source", select **GitHub Actions**
   - The workflow will automatically build and deploy on every push

### Manual Deployment

If you prefer manual deployment:

1. **Build the site:**
   ```bash
   npm run build
   ```

2. **The `out/` directory contains static files**

3. **Deploy `out/` directory to GitHub Pages:**
   - Use GitHub Pages settings to point to `out/` directory
   - Or push `out/` contents to `gh-pages` branch

## What Changed from Jekyll?

- ✅ **No Ruby required** - Just Node.js
- ✅ **TypeScript** - Type-safe development
- ✅ **React components** - Reusable, modern code
- ✅ **Mini-game gateway** - Interactive entry point
- ✅ **Modern tooling** - Next.js, Tailwind CSS
- ✅ **Better performance** - Optimized builds

## Customization

### Mini-Game

Edit `components/MiniGame.tsx` to:
- Change win condition (currently 100 points)
- Adjust time limit (currently 30 seconds)
- Modify game mechanics
- Change styling

### Pages

Edit pages in `app/` directory:
- `app/page.tsx` - Home page
- `app/about/page.tsx` - About page
- `app/cv/page.tsx` - CV page
- `app/contact/page.tsx` - Contact page
- `app/vr/page.tsx` - VR page

### Styling

- **Tailwind CSS**: Edit classes directly in components
- **Custom CSS**: Add to `app/globals.css`
- **Custom fonts**: Already configured in `app/globals.css`

## Troubleshooting

### Build Errors

```bash
# Clear cache and reinstall
rm -rf node_modules .next out
npm install
npm run build
```

### Local Development Issues

```bash
# Make sure you're using Node.js 18+
node --version

# Clear Next.js cache
rm -rf .next
npm run dev
```

### GitHub Pages Not Updating

1. Check GitHub Actions tab for build errors
2. Verify Pages settings point to GitHub Actions
3. Wait a few minutes for deployment to complete

## HTTPS/SSL

HTTPS is automatically enabled on GitHub Pages. Once deployed, your site will be available at:
- `https://lanssie.com` (if DNS is configured)
- `https://lanseafood.github.io/lanssiesite` (GitHub Pages URL)

## Need Help?

- Next.js Docs: https://nextjs.org/docs
- TypeScript Docs: https://www.typescriptlang.org/docs
- Tailwind CSS Docs: https://tailwindcss.com/docs
