# Etna Group — Real Estate Website

**Live site:** [https://etnagroup-ks.com](https://etnagroup-ks.com) · [https://donardk.github.io/etnagroup-ks.com/](https://donardk.github.io/etnagroup-ks.com/)

A React website for **Etna Group** — the Kosovo-based company that **builds and sells** its own residential complexes. The site showcases those projects, interactive building maps, apartment floor-plan PDFs, a contact form, and **Etna** — a floating AI assistant that answers questions in Albanian or English and links to matching planimetri.

---

## Contents

1. [Overview](#overview)
2. [Tech stack](#tech-stack)
3. [Project structure](#project-structure)
4. [Pages and routes](#pages-and-routes)
5. [Data and content](#data-and-content)
6. [Media (Cloudflare R2)](#media-cloudflare-r2)
7. [AI chat assistant (Etna)](#ai-chat-assistant-etna)
8. [Contact form (EmailJS)](#contact-form-emailjs)
9. [Local development](#local-development)
10. [Building for production](#building-for-production)
11. [Deployment](#deployment)
12. [Updating content](#updating-content)
13. [Troubleshooting](#troubleshooting)

---

## Overview

**Etna Group** is a construction and real-estate developer in Kosovo: it designs, builds, and directly sells apartments in its own residence projects (Elsa, Tiani, Tara, Joni, and the completed Etna Residence in Fushë Kosovë). This repository is the public marketing website for those developments — not a third-party listing portal.

The site is a **React single-page application** (SPA). Project and apartment data is bundled from TypeScript files at build time. Images and video are served from a Cloudflare R2 CDN. The contact form uses EmailJS (with a mailto fallback).

The **Etna** AI assistant runs on a **Cloudflare Pages Function** (`POST /api/chat`) backed by Workers AI. It is available on the production Cloudflare Pages deployment (`etnagroup-ks.com`). The GitHub Pages mirror serves the static frontend only — the chat API is not available there.

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
| AI assistant | Cloudflare Workers AI (`@cf/qwen/qwen3-30b-a3b-fp8`) via Pages Functions |
| Media CDN | Cloudflare R2 (`media.etnagroup-ks.com`) |
| Hosting (production) | Cloudflare Pages (`client/wrangler.toml`) |
| Hosting (mirror) | GitHub Pages (CI on push to `main`) |

---

## Project structure

```
etnagroup-ks.com/
├── client/
│   ├── src/
│   │   ├── pages/              # Route pages
│   │   ├── components/
│   │   │   ├── chat/           # ChatWidget (floating Etna assistant)
│   │   │   └── layout/         # Navbar, footer, etc.
│   │   ├── data/
│   │   │   ├── apartmentCatalog.ts  # Single source of truth for apartment PDFs
│   │   │   ├── apartmentSpecs.ts    # Auto-generated room/layout specs per PDF
│   │   │   ├── projects.ts
│   │   │   └── …               # Per-project re-exports from apartmentCatalog
│   │   ├── hooks/
│   │   └── utils/              # assetUrl(), chat helpers
│   ├── functions/
│   │   └── api/chat.ts         # Cloudflare Pages Function — Workers AI backend
│   ├── scripts/
│   │   └── extract-apartment-specs.mjs
│   ├── public/                 # PDFs, CNAME, .htaccess, 404.html
│   ├── wrangler.toml           # Cloudflare Pages config (AI binding, build output)
│   └── package.json
├── .github/workflows/          # GitHub Pages deploy workflows
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

The floating **Etna** chat widget and the navbar **Bisedo me mua** button are shown on all pages except `/qr-code`.

---

## Data and content

All content is static TypeScript data — no database.

| File | Purpose |
|------|---------|
| `client/src/data/projects.ts` | Project listings, descriptions, availability |
| `client/src/data/apartmentCatalog.ts` | **Single source of truth** for all apartment PDFs (used by pages, chat, and per-project data files) |
| `client/src/data/apartmentSpecs.ts` | Per-apartment room counts and areas (auto-generated from PDFs — see [Updating content](#updating-content)) |
| `client/src/data/residenceVisuals.ts` | Hero images per residence |
| `client/src/data/elsaApartmentPdfs.ts` | Re-exports Elsa block lists from `apartmentCatalog.ts` |
| `client/src/data/joniApartmentPdfs.ts` | Re-exports Joni floor lists from `apartmentCatalog.ts` |

Apartment PDFs live in `client/public/Residences Apartments/` and are copied into the build output.

**Naming convention:** `{Building}-{Block}-{area}m².pdf` (e.g. `Elsa-A-66.39m².pdf`, `Tiani-B-88.0m².pdf`). Tara uses `Tara-{area}m².pdf`; Joni uses `Joni-K1-{area}m².pdf` (floor groups: `K1`, `K1-6`, `K2-6`).

---

## Media (Cloudflare R2)

Large media (images, video, SVGs) is hosted on R2 at `https://media.etnagroup-ks.com`. The `assetUrl()` helper in `client/src/utils/assetUrl.ts` resolves paths to the CDN.

During production builds, Vite strips heavy media folders from `dist/` (they are not duplicated in the deploy artifact). Locally, files may still exist under `client/public/` for development.

**Hero video:** `https://media.etnagroup-ks.com/hero-video.mp4`

Override the CDN base URL with `VITE_MEDIA_BASE_URL` in `client/.env` if needed.

---

## AI chat assistant (Etna)

**Etna** is the site's digital sales consultant. Visitors open it from the floating button (bottom-right) or the navbar **Bisedo me mua** link.

### What it does

- Replies in the user's language (Albanian or English).
- Answers questions about Etna Group projects, construction status, building features, and apartment layouts.
- When a user mentions a size in m², the client finds the closest matching apartments across projects and:
  - Injects verified room/layout specs into the AI prompt.
  - Shows **Shiko Planimetrinë** buttons linking to the real floor-plan PDFs.
- Appends a contact-phone footer to every reply (`+383 46 38 38 38`).

### Architecture

| Piece | Location |
|-------|----------|
| UI widget | `client/src/components/chat/ChatWidget.tsx` |
| Open-chat signal | `client/src/utils/chat.ts` (`openChat()` / `etna:open-chat` event) |
| Apartment matching | `client/src/data/apartmentCatalog.ts` (`findApartmentsByArea`, `parseRequestedArea`) |
| API endpoint | `client/functions/api/chat.ts` → `POST /api/chat` |
| Cloudflare config | `client/wrangler.toml` (Workers AI binding, `pages_build_output_dir = "./dist"`) |

**Model:** `@cf/qwen/qwen3-30b-a3b-fp8` (multilingual, including Albanian). The function caps history length, message size, and output tokens to control cost.

### Rate limiting

Cloudflare Pages does not support the Workers `[[ratelimits]]` binding. Limit abuse via:

1. In-code caps in `functions/api/chat.ts` (already in place).
2. A **WAF Rate Limiting** rule on `/api/chat` in the Cloudflare dashboard (recommended).
3. Optional: a KV-based per-IP counter in the function (the code already checks `env.RATE_LIMITER` if ever bound).

### Local testing

The chat API is a Cloudflare Pages Function — it does not run on the Vite dev server alone. To test locally:

```bash
cd client
npm run build
npx wrangler pages dev dist
```

Open the URL Wrangler prints (usually `http://localhost:8788`). Requires a Cloudflare account with Workers AI enabled.

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
| `npm run dev` | Start Vite dev server (static site only; chat API unavailable) |
| `npm run build` | Type-check and build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | TypeScript check |

To test the AI chat locally, see [AI chat assistant (Etna)](#ai-chat-assistant-etna).

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

### Cloudflare Pages (production — required for AI chat)

The primary deployment for `etnagroup-ks.com` is **Cloudflare Pages** with the root directory set to `client/`. Configuration lives in `client/wrangler.toml`:

- `pages_build_output_dir = "./dist"` — Vite build output
- `[ai] binding = "AI"` — Workers AI for `/api/chat`

Connect the repo in the Cloudflare dashboard (or deploy with `npx wrangler pages deploy dist` from `client/` after building). Once `wrangler.toml` is in use, those fields are managed by the file, not the dashboard.

View function logs: `npx wrangler pages deployment tail` (from `client/`).

### GitHub Pages (automatic mirror)

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds `client/` and publishes to GitHub Pages.

- **Project site:** `https://donardk.github.io/etnagroup-ks.com/`
- **Custom domain:** can also point here via `client/public/CNAME`

The GitHub Pages deployment is **static only** — the Etna chat widget will show an error when calling `/api/chat` because Pages Functions do not run on GitHub Pages.

A second workflow (`.github/workflows/deploy-user-pages.yml`) can deploy to the root of `donardk.github.io`. It requires a `DEPLOY_TO_USER_PAGES_TOKEN` secret (GitHub PAT with write access to `donardk/donardk.github.io`).

### Hostinger (manual, static only)

1. Pull latest code and build (no special env vars needed):
   ```bash
   cd client
   npm ci
   npm run build
   ```
2. Upload all contents of `client/dist/` to Hostinger **public_html**.
3. Ensure `.htaccess` is present for SPA routing.
4. Enable SSL in hPanel.

The AI chat will not work on Hostinger unless you proxy `/api/chat` to Cloudflare separately.

### Updating the live site

```bash
git add .
git commit -m "Your change description"
git push origin main
```

GitHub Actions rebuilds the GitHub Pages mirror automatically. Cloudflare Pages redeploys on push if connected to the repo.

---

## Updating content

### Projects and descriptions

Edit `client/src/data/projects.ts`, then rebuild and deploy.

### Apartment PDFs and catalog

1. Add or replace PDF files under `client/public/Residences Apartments/` using the naming convention above.
2. Add or update entries in `client/src/data/apartmentCatalog.ts` (the single source of truth). Per-project files (`elsaApartmentPdfs.ts`, `joniApartmentPdfs.ts`, etc.) derive from it automatically.
3. Regenerate room specs for the chatbot:
   ```bash
   cd client
   npm i -D pdf-parse
   node scripts/extract-apartment-specs.mjs
   npm remove pdf-parse   # optional cleanup
   ```
4. Rebuild and deploy.

### Images and video

Upload new media to the R2 bucket at `media.etnagroup-ks.com`, keeping the same folder structure as `client/public/`. Reference paths via `assetUrl('/visuals/...')`.

### Chat behaviour

The Cloudflare Workers AI assistant ("Etna") is configured in `client/functions/api/chat.ts`:
- `SYSTEM_PROMPT_BASE` — company facts, construction status, and sales guardrails
- Reply checks in the same file — rewrite if the model invents counts, prices, or sizes
- Catalog matching in `client/src/data/apartmentCatalog.ts` (injected every turn)

Redeploy to Cloudflare Pages for prompt changes to take effect.

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| 404 on routes like `/kontakt` | Add/fix `.htaccess` SPA rewrite rules on Apache hosts |
| Images or video not loading | Check R2 CDN is reachable; verify paths in `assetUrl()` |
| Contact form not sending | Confirm EmailJS env vars are set; check browser console |
| White screen after deploy | Ensure `index.html` is at the site root, not inside a subfolder |
| Stale content after deploy | Hard-refresh (Ctrl+Shift+R) or clear CDN cache |
| Chat says "unavailable" on GitHub Pages | Expected — chat requires Cloudflare Pages Functions; use `etnagroup-ks.com` or `wrangler pages dev` |
| Chat 500 / empty replies | Check Cloudflare Workers AI is enabled; tail logs with `wrangler pages deployment tail` |
| Chat works in prod but not locally | Build first, then run `npx wrangler pages dev dist` from `client/` |
| Planimetri buttons missing | Ensure the PDF exists in `public/` and has a matching entry in `apartmentCatalog.ts` |
| Wrong room details in chat | Re-run `scripts/extract-apartment-specs.mjs` after PDF changes |

---

© 2026 Etna Group. All rights reserved.
