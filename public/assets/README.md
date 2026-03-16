# 📁 Image Assets — Upload Guide

Drop your WebP images in this folder structure before deploying to Vercel.
All images in `public/` are served at the ROOT URL (e.g., `/assets/hero.webp`).

## Required Files

### Hero
- `public/assets/hero.webp`
  → Your background-removed portrait photo (transparent PNG converted to WebP)
  → Recommended: portrait aspect ratio (~3:4), min 800px wide

### Chokka Brand
- `public/assets/chokka-logo.webp`
  → Chokka brand logo (square, transparent background)

### Chokka Instagram Feed (6 post thumbnails)
- `public/assets/chokka/post-1.webp`
- `public/assets/chokka/post-2.webp`
- `public/assets/chokka/post-3.webp`
- `public/assets/chokka/post-4.webp`
- `public/assets/chokka/post-5.webp`
- `public/assets/chokka/post-6.webp`
  → Square (1:1) Instagram post thumbnails

### Portfolio / Website Screenshots
- `public/assets/projects/project-1.webp`
- `public/assets/projects/project-2.webp`
- `public/assets/projects/project-3.webp`
- `public/assets/projects/project-4.webp`
- `public/assets/projects/project-5.webp`
  → 16:9 or 4:3 screenshots of your built websites

## Converting to WebP
Use https://squoosh.app (free, browser-based) or:
```bash
cwebp input.png -o output.webp
```

## After Adding Images
In the code, these are already referenced:
- Hero: `<img src="/assets/hero.webp" />` → uncomment in Hero.jsx
- Chokka logo: `<img src="/assets/chokka-logo.webp" />` → uncomment in Chokka.jsx
- Portfolio: `<img src="/assets/projects/project-N.webp" />` → referenced in Portfolio.jsx
- Instagram feed: `src="/assets/chokka/post-N.webp"` → referenced in Chokka.jsx
