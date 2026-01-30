# Complete Guide: Deploy Etna Group Site from GitHub to Hostinger

**Last updated: January 2026**

This guide walks you through publishing your website from GitHub to Hostinger, step by step. No steps are skipped.

---

## What you need before starting

- A **Hostinger** account (e.g. Single or higher) with a **domain** (e.g. `etnagroup-ks.com`) attached.
- Your project on **GitHub** (e.g. `DonardK/etnagroup-ks.com`).
- **Node.js** installed on your computer (e.g. v20 or v22 from [nodejs.org](https://nodejs.org)).

---

## Part 1: First-time setup on Hostinger

### Step 1.1 — Log in to Hostinger

1. Go to **https://www.hostinger.com**
2. Click **Log in** and sign in.
3. You should see **hPanel** (Hostinger control panel).

### Step 1.2 — Confirm your domain

1. In hPanel, open **Websites** (or **Hosting**).
2. Click your hosting plan / domain (e.g. `etnagroup-ks.com`).
3. Note the **domain** you will use for the site (e.g. `https://etnagroup-ks.com`).

### Step 1.3 — Open File Manager

1. In hPanel, find the **Files** section.
2. Click **File Manager**.
3. In the file tree, open **public_html**.  
   This folder is the **root** of your website. Everything you upload for the main site goes here.

---

## Part 2: Get the code and build for Hostinger

Your site is built as a **static** app. You build it once on your PC, then upload the built files. For Hostinger the site runs at the **root** of your domain (e.g. `etnagroup-ks.com`), so we build **without** the GitHub Pages base path.

### Step 2.1 — Get the latest code from GitHub

1. On your computer, open a terminal (PowerShell or Command Prompt).
2. Go to your project folder, for example:
   ```bash
   cd "C:\Users\donar\Documents\Cursor Programs\etnagroup-ks.com"
   ```
3. Pull the latest code:
   ```bash
   git pull origin main
   ```
   If you don’t have the repo yet: clone it first (`git clone https://github.com/DonardK/etnagroup-ks.com.git`), then `cd etnagroup-ks.com` and run `git pull origin main`.

### Step 2.2 — Install dependencies and build (for Hostinger)

1. Go into the **client** folder:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm ci
   ```
   (If that fails, try `npm install`.)
3. Build for production **without** setting `BASE_PATH` (so the app uses base `/` for Hostinger):
   ```bash
   npm run build
   ```
4. When it finishes, you should see a **dist** folder inside `client` with no errors.

**Important:** Do **not** set the `BASE_PATH` environment variable when building for Hostinger. The project is already set up so that:
- **Hostinger:** build with no `BASE_PATH` → base `/` → correct for `https://etnagroup-ks.com`.
- **GitHub Pages:** build with `BASE_PATH=/etnagroup-ks.com/` in the workflow → correct for `https://donardk.github.io/etnagroup-ks.com/`.

### Step 2.3 — Check what you will upload

1. Open the folder: `client\dist`
2. You should see at least:
   - **index.html** (main page)
   - **assets** (folder with .js and .css)
   - **visuals** (folder with residence images)
   - **brand** (folder with logos)
   - Possibly **buildings**, **SVG Residences**, etc.

You will upload **the contents** of this `dist` folder into Hostinger’s **public_html** (not the `dist` folder itself).

---

## Part 3: Upload the site to Hostinger

### Step 3.1 — Clear or backup the current site (if any)

1. In Hostinger **File Manager**, make sure you are inside **public_html**.
2. If there are already files (e.g. a default page):
   - Either select all, then **Delete** (after backing up if needed), or
   - Create a folder like **backup_old** and move existing files into it.

### Step 3.2 — Upload the built files

1. Still in **public_html** in File Manager.
2. Click **Upload** (or **Upload files**).
3. On your PC, go to `client\dist`.
4. Select **all** items inside `dist`:
   - `index.html`
   - folder `assets`
   - folder `visuals`
   - folder `brand`
   - any other folders or files (e.g. `buildings`, `SVG Residences`, `.htaccess` if present).
5. Upload them so that:
   - **index.html** is directly inside **public_html**.
   - **assets**, **visuals**, **brand**, etc. are directly inside **public_html** (not inside a nested `dist` folder).

### Step 3.3 — Add the .htaccess file (required for routing)

Your app uses client-side routing (e.g. `/kontakt`, `/projektet/elsa`). Hostinger must serve **index.html** for those paths. That’s done with **.htaccess**.

1. In File Manager, inside **public_html**, click **+ File** or **New file**.
2. Name the file exactly: **.htaccess**
3. Open it for editing and paste this **exactly**:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

4. Save and close.

If your Hostinger uses **Nginx** instead of Apache, you cannot use .htaccess; ask Hostinger support to add:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

---

## Part 4: SSL (HTTPS) and final check

### Step 4.1 — Enable SSL

1. In hPanel, go to **SSL** (or **Security** → **SSL**).
2. Find your domain and enable **SSL** (e.g. **Let’s Encrypt** or **Free SSL**).
3. Wait until it shows as active (often a few minutes).
4. Your site should be reachable at **https://etnagroup-ks.com** (and usually http will redirect to https).

### Step 4.2 — Verify the site

1. Open **https://yourdomain.com** (e.g. `https://etnagroup-ks.com`) in a browser.
2. Check:
   - Homepage loads.
   - Navigation works (e.g. **Për ne**, **Kontakt**, **Projektet**).
   - Direct links work: e.g. `https://yourdomain.com/kontakt`, `https://yourdomain.com/projektet/elsa`.
   - Images and logos load.
3. If something doesn’t work, see **Troubleshooting** below.

---

## Part 5: Updating the site later

When you change the code and want to update the live site:

1. **Get latest code:**
   ```bash
   cd "C:\Users\donar\Documents\Cursor Programs\etnagroup-ks.com"
   git pull origin main
   ```

2. **Rebuild (still no BASE_PATH for Hostinger):**
   ```bash
   cd client
   npm ci
   npm run build
   ```

3. **Re-upload to Hostinger:**
   - In File Manager, go to **public_html**.
   - Delete the old files (or replace them). Do **not** delete **.htaccess** unless you’re replacing it.
   - Upload again **all contents** of `client\dist` (same as in Step 3.2).

4. **Optional:** Hard-refresh the site in the browser (Ctrl+Shift+R or Cmd+Shift+R) to avoid cache.

---

## Part 6 (Optional): Deploy from GitHub with FTP

If you want GitHub to build and upload to Hostinger automatically when you push:

### Step 6.1 — Get FTP details from Hostinger

1. In hPanel, go to **FTP Accounts** (under **Files** or **Advanced**).
2. Note or create an account and write down:
   - **FTP host** (e.g. `ftp.yourdomain.com` or the host shown)
   - **Username**
   - **Password**

### Step 6.2 — Add secrets in GitHub

1. Open your repo on GitHub: **https://github.com/DonardK/etnagroup-ks.com**
2. Go to **Settings** → **Secrets and variables** → **Actions**.
3. Click **New repository secret** and add three secrets:
   - Name: **FTP_HOST**  → Value: your FTP host
   - Name: **FTP_USER**  → Value: your FTP username
   - Name: **FTP_PASSWORD**  → Value: your FTP password

### Step 6.3 — Add the workflow file

1. In your repo, create the file: **.github/workflows/deploy-hostinger.yml**
2. Paste this content:

```yaml
name: Deploy to Hostinger

on:
  workflow_dispatch:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          cache-dependency-path: client/package-lock.json

      - name: Install and build (for Hostinger)
        working-directory: ./client
        run: |
          npm ci
          npm run build

      - name: Deploy to Hostinger via FTP
        uses: SamKirkland/FTP-Deploy-Action@v4.3.5
        with:
          server: ${{ secrets.FTP_HOST }}
          username: ${{ secrets.FTP_USER }}
          password: ${{ secrets.FTP_PASSWORD }}
          local-dir: ./client/dist/
          server-dir: ./public_html/
```

3. Commit and push (e.g. push to `main`).

### Step 6.4 — Run the workflow

1. On GitHub, open the **Actions** tab.
2. Select **Deploy to Hostinger**.
3. Click **Run workflow** → **Run workflow**.
4. When the job is green, the site on Hostinger should be updated. Check the job log if something fails (e.g. wrong FTP host or path).

---

## Troubleshooting

| Problem | What to do |
|--------|------------|
| **Blank or wrong page** | Ensure you built **without** `BASE_PATH`. Only the GitHub Pages workflow should set `BASE_PATH=/etnagroup-ks.com/`. |
| **404 on links like /kontakt or /projektet/elsa** | Add or fix **.htaccess** in **public_html** with the exact content from Step 3.3. |
| **Images not loading** | Confirm you uploaded the **visuals**, **brand**, and **assets** folders from `client\dist`. Check browser DevTools (F12) → Network for 404s. |
| **Build fails (npm run build)** | Run `npm ci` in `client`. If errors remain, run `npm run build` and fix any TypeScript or missing-module errors shown. |
| **FTP deploy fails** | Check **FTP_HOST** (no `ftp://`), **FTP_USER**, **FTP_PASSWORD**. On Hostinger, **server-dir** is usually `./public_html/`. |

---

## Quick checklist (first deploy)

- [ ] Logged into Hostinger hPanel
- [ ] Opened File Manager → **public_html**
- [ ] Ran `git pull origin main` and `cd client` then `npm ci` and `npm run build` (no BASE_PATH)
- [ ] Uploaded **all contents** of `client\dist` into **public_html**
- [ ] Created **.htaccess** in **public_html** with the SPA rewrite rules
- [ ] Enabled SSL for the domain
- [ ] Opened https://yourdomain.com and tested homepage, navigation, and a few routes

---

## Summary

- **Hostinger** serves **static files** from **public_html**.
- You **build** the app on your PC with `npm run build` in `client` **without** setting `BASE_PATH`.
- You **upload** the **contents** of `client\dist` to **public_html** and add **.htaccess** for routing.
- **SSL** is enabled in hPanel so the site runs over HTTPS.
- **Optional:** GitHub Actions can build and deploy to Hostinger via FTP using the workflow and secrets above.

**Need help:** Hostinger support (24/7 in hPanel) or [support.hostinger.com](https://support.hostinger.com).
