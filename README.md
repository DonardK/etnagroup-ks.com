# Etna Group — Real Estate Website

**Live site:** [https://etnagroup-ks.com](https://etnagroup-ks.com) · [https://donardk.github.io/etnagroup-ks.com/](https://donardk.github.io/etnagroup-ks.com/)

A static React website for Etna Group's residential complexes in Pristina, Kosovo. It showcases projects, interactive building maps, apartment PDFs, and a contact form.

---

## Contents

1. [Overview](#overview)
2. [Tech stack](#tech-stack)
3. [Project structure](#project-structure)
4. [Pages and routes](#pages-and-routes)
5. [Data and content](#data-and-content)
6. [Media (Cloudflare R2)](#media-cloudflare-r2)
7. [Contact form (EmailJS)](#contact-form-emailjs)
8. [Local development](#local-development)
9. [Building for production](#building-for-production)
10. [Deployment](#deployment)
11. [Updating content](#updating-content)
12. [Troubleshooting](#troubleshooting)

---

## Overview

The site is a **static single-page application** (SPA). All project data is bundled from TypeScript files at build time. Images and video are served from a Cloudflare R2 CDN. The contact form uses EmailJS (with a mailto fallback).

There is no backend API in this project — deployment is frontend-only.

---

## Tech stack

| Layer | Technology |
|-------|------------|
| Framework | React 19 + TypeScript |
| Build tool | Vite 7 |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Routing | React Router 7 |
| Contact form | EmailJS |
| Media CDN | Cloudflare R2 (`media.etnagroup-ks.com`) |
| Hosting | GitHub Pages (CI on push to `main`) |

---

## Project structure

```
etnagroup-ks.com/
├── client/
│   ├── src/
│   │   ├── pages/           # Route pages
│   │   ├── components/      # UI components and building maps
│   │   ├── data/            # Static project and PDF data
│   │   ├── hooks/           # Shared React hooks
│   │   └── utils/           # assetUrl() — R2 CDN resolver
│   ├── public/              # PDFs, CNAME, .htaccess, 404.html
│   └── package.json
├── .github/workflows/       # GitHub Pages deploy workflows
└── README.md
```

---

## Pages and routes

| Path | Page |
|------|------|
| `/` | Home |
| `/projektet/:id` | Project detail (`elsa`, `tiani`, `tara`, `joni`) |
| `/per-ne` | About |
| `/kontakt` | Contact |
| `/elsaresidence-bllokua` … `bllokue` | Elsa Residence blocks A–E |
| `/tianiresidence-blloku-a`, `blloku-b` | Tiani Residence blocks |
| `/tararesidence-apartments` | Tara Residence apartments |
| `/joniresidence-kati-1` … `kati-6` | Joni Residence floors |
| `/qr-code` | QR code page (no navbar/footer) |

Legacy redirects are defined in `client/src/App.tsx` for old URLs.

---

## Data and content

All content is static TypeScript data — no database.

| File | Purpose |
|------|---------|
| `client/src/data/projects.ts` | Project listings, descriptions, availability |
| `client/src/data/residenceVisuals.ts` | Hero images per residence |
| `client/src/data/elsaApartmentPdfs.ts` | Elsa block PDF links |
| `client/src/data/joniApartmentPdfs.ts` | Joni floor PDF links |

Apartment PDFs live in `client/public/Residences Apartments/` and are copied into the build output.

**Naming convention:** `{Building}-{Block}-{area}m².pdf` (e.g. `Elsa-A-66.39m².pdf`, `Tiani-B-88.0m².pdf`). Tara uses `Tara-{area}m².pdf`; Joni uses `Joni-K1-{area}m².pdf` (floor groups: `K1`, `K1-6`, `K2-6`).

---

## Media (Cloudflare R2)

Large media (images, video, SVGs) is hosted on R2 at `https://media.etnagroup-ks.com`. The `assetUrl()` helper in `client/src/utils/assetUrl.ts` resolves paths to the CDN.

During production builds, Vite strips heavy media folders from `dist/` (they are not duplicated in the deploy artifact). Locally, files may still exist under `client/public/` for development.

**Hero video:** `https://media.etnagroup-ks.com/hero-video.mp4`

Override the CDN base URL with `VITE_MEDIA_BASE_URL` in `client/.env` if needed.

---

## Contact form (EmailJS)

The contact page sends emails to **info@etnagroup-ks.com** via [EmailJS](https://www.emailjs.com/). If EmailJS is not configured, the form falls back to opening the user's email client with a pre-filled mailto link.

### Setup

1. Create a free EmailJS account.
2. Add an **Email Service** (Gmail, Outlook, etc.) and copy the **Service ID**.
3. Create an **Email Template** with these variables:
   - `{{from_name}}`, `{{from_email}}`, `{{phone}}`, `{{project}}`, `{{message}}`, `{{reply_to}}`
   - Set **To Email** to `info@etnagroup-ks.com`
4. Copy your **Public Key** from Account → General.
5. Create `client/.env`:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

6. Restart the dev server. Never commit `.env` to git.

For production, set the same variables in your hosting platform and rebuild.

---

## Local development

### Prerequisites

- Node.js 20+ and npm

### Commands

```bash
cd client
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

| Script | Description |
|--------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Type-check and build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | TypeScript check |

---

## Building for production

```bash
cd client
npm ci
npm run build
```

Output is in `client/dist/`. Upload the **contents** of that folder to your host.

For Apache hosts (e.g. Hostinger), include the SPA rewrite rules from `client/public/.htaccess` so client-side routes work on direct URLs.

---

## Deployment

### GitHub Pages (automatic)

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds `client/` and publishes to GitHub Pages.

- **Project site:** `https://donardk.github.io/etnagroup-ks.com/`
- **Custom domain:** `etnagroup-ks.com` (via `client/public/CNAME`)

A second workflow (`.github/workflows/deploy-user-pages.yml`) can deploy to the root of `donardk.github.io`. It requires a `DEPLOY_TO_USER_PAGES_TOKEN` secret (GitHub PAT with write access to `donardk/donardk.github.io`).

### Hostinger (manual)

1. Pull latest code and build (no special env vars needed):
   ```bash
   cd client
   npm ci
   npm run build
   ```
2. Upload all contents of `client/dist/` to Hostinger **public_html**.
3. Ensure `.htaccess` is present for SPA routing.
4. Enable SSL in hPanel.

### Updating the live site

```bash
git add .
git commit -m "Your change description"
git push origin main
```

GitHub Actions rebuilds and redeploys automatically.

---

## Updating content

### Projects and descriptions

Edit `client/src/data/projects.ts`, then rebuild and deploy.

### Apartment PDFs

Add PDF files under `client/public/Residences Apartments/` and update the matching data file (`elsaApartmentPdfs.ts` or `joniApartmentPdfs.ts`).

### Images and video

Upload new media to the R2 bucket at `media.etnagroup-ks.com`, keeping the same folder structure as `client/public/`. Reference paths via `assetUrl('/visuals/...')`.

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| 404 on routes like `/kontakt` | Add/fix `.htaccess` SPA rewrite rules on Apache hosts |
| Images or video not loading | Check R2 CDN is reachable; verify paths in `assetUrl()` |
| Contact form not sending | Confirm EmailJS env vars are set; check browser console |
| White screen after deploy | Ensure `index.html` is at the site root, not inside a subfolder |
| Stale content after deploy | Hard-refresh (Ctrl+Shift+R) or clear CDN cache |

---

© 2026 Etna Group. All rights reserved.
