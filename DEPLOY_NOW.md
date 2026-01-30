# 🚀 Quick Deployment Guide

## Step 1: Publish to GitHub (via Cursor)

Since you've connected Cursor to GitHub:

1. **In Cursor**, open the Source Control panel (Ctrl+Shift+G)
2. Click the **"..."** menu (three dots) at the top
3. Select **"Publish to GitHub"** or **"Publish Branch"**
4. Choose:
   - Repository name: `etnagroup-ks`
   - Visibility: Private (recommended) or Public
5. Click **"Publish"**

**OR** if you already created a repo, share the URL and I'll connect it!

---

## Step 2: Deploy (Get Live URL)

Once your code is on GitHub, use **GitHub Pages** or **Netlify**:

### Option A: GitHub Pages

1. In your repo go to **Settings** → **Pages**
2. Under **Source**, select branch (e.g. `main`) and folder (e.g. `/ (root)` or the folder that contains your built site)
3. If using a separate build step, use a GitHub Action to build and publish `client/dist`
4. Your site will be at: `https://YOUR_USERNAME.github.io/etnagroup-ks`

### Option B: Netlify

1. Go to **https://netlify.com** → Add new site → Import from Git
2. Select your repo, set **Base directory**: `client`, **Build command**: `npm run build`, **Publish directory**: `client/dist`
3. Deploy and copy the URL

---

## Step 3: Custom domain (optional)

If you prefer GitHub Pages:

1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - Branch: `gh-pages` (or `main`)
   - Folder: `/ (root)` or `/client/dist`
4. Click **Save**
5. Wait for deployment (check Actions tab)
6. Your site will be at: `https://YOUR_USERNAME.github.io/etnagroup-ks`

**Note**: GitHub Pages requires enabling in repository settings first.

---

## ✅ What You'll Get

- **GitHub Pages**: `https://YOUR_USERNAME.github.io/etnagroup-ks`
- **Netlify**: `https://your-site.netlify.app` (or similar)

---

## 🔄 Updating the Site

Just push to GitHub:
```bash
git add .
git commit -m "Update website"
git push
```

GitHub Pages or Netlify will redeploy automatically if connected to your repo.
