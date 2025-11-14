# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally
```bash
npm run dev
```

### 3. Open Browser
Visit [http://localhost:3000](http://localhost:3000)

## 🎮 How the Mini-Game Works

1. **First Visit**: You'll see the mini-game
2. **Goal**: Click the red targets to score 100 points in 30 seconds
3. **Win**: Once you win, the website unlocks
4. **Storage**: Your progress is saved in browser (localStorage)
5. **Replay**: Click "Play Game Again" on the home page

## 📝 Next Steps

1. **Customize Content**:
   - Edit `app/about/page.tsx` - Add your about info
   - Edit `app/cv/page.tsx` - Add your CV content
   - Edit `app/contact/page.tsx` - Add contact details
   - Edit `app/vr/page.tsx` - Add VR projects

2. **Customize Mini-Game**:
   - Edit `components/MiniGame.tsx`
   - Change win condition, time limit, or game mechanics

3. **Deploy**:
   ```bash
   git add .
   git commit -m "Deploy Next.js website"
   git push origin master
   ```
   Then enable GitHub Actions in repository Settings → Pages

## 🎨 Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React 18** - UI library

## 📚 Need Help?

- See `DEPLOYMENT.md` for detailed deployment instructions
- See `README.md` for full documentation

