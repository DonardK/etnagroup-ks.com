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

## Step 2: Deploy to Vercel (Get Live URL)

Once your code is on GitHub:

### Option A: Quick Deploy (Recommended)

1. Go to: **https://vercel.com/new**
2. Click **"Import Git Repository"**
3. Select your GitHub repository: `etnagroup-ks`
4. Configure:
   - **Root Directory**: Click "Edit" → Set to `client`
   - **Framework Preset**: Vite (auto-detected)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `dist` (auto-detected)
5. Click **"Deploy"**
6. Wait 2-3 minutes
7. **Copy the URL** (e.g., `https://etnagroup-ks.vercel.app`)
8. **Share this URL with your employees!** 🎉

### Option B: Via Vercel CLI

```bash
cd client
vercel --prod
```

---

## Step 3: Enable GitHub Pages (Alternative)

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

- **Vercel**: `https://etnagroup-ks.vercel.app` (or similar)
- **GitHub Pages**: `https://YOUR_USERNAME.github.io/etnagroup-ks`

**Vercel is recommended** - faster, easier, and better for React apps!

---

## 🔄 Updating the Site

Just push to GitHub:
```bash
git add .
git commit -m "Update website"
git push
```

Vercel will automatically redeploy in 1-2 minutes!
