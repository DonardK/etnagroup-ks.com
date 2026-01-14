# GitHub Setup & Deployment Guide

## Step 1: Create GitHub Repository

1. Go to https://github.com
2. Click **"+"** → **"New repository"**
3. Name: `etnagroup-ks` (or any name you like)
4. Choose **Private** (recommended) or **Public**
5. **DO NOT** check "Initialize with README"
6. Click **"Create repository"**

## Step 2: Push Your Code to GitHub

After creating the repo, GitHub will show you commands. Run these in your terminal:

```bash
# Navigate to your project folder
cd "C:\Users\donar\Documents\Cursor Programs\etnagroup-ks.com"

# Add GitHub as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/etnagroup-ks.git

# Rename branch to main (if needed)
git branch -M main

# Push your code
git push -u origin main
```

**Note**: You'll be asked to login to GitHub. Use a Personal Access Token if prompted.

## Step 3: Deploy from GitHub

### Option A: Vercel (Recommended - Easiest)

1. Go to https://vercel.com
2. Sign up/Login with GitHub
3. Click **"Add New Project"**
4. Import your repository: `YOUR_USERNAME/etnagroup-ks`
5. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `client` (click "Edit" and set to `client`)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `dist` (auto-detected)
6. Click **"Deploy"**
7. Wait 2-3 minutes
8. **Copy the URL** (e.g., `https://etnagroup-ks.vercel.app`)
9. **Share this URL with your employees!**

### Option B: Netlify

1. Go to https://netlify.com
2. Sign up/Login with GitHub
3. Click **"Add new site"** → **"Import an existing project"**
4. Choose **GitHub** → Select your repository
5. Configure:
   - **Base directory**: `client`
   - **Build command**: `npm run build`
   - **Publish directory**: `client/dist`
6. Click **"Deploy site"**
7. **Copy the URL** and share it!

### Option C: Cloudflare Pages

1. Go to https://pages.cloudflare.com
2. Sign up/Login with GitHub
3. Click **"Create a project"** → **"Connect to Git"**
4. Select your repository
5. Configure:
   - **Framework preset**: Vite
   - **Build command**: `npm run build`
   - **Build output directory**: `client/dist`
   - **Root directory**: `/client`
6. Click **"Save and Deploy"**
7. **Copy the URL** and share it!

## Step 4: Updating the Site

Whenever you make changes:

1. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Updated website"
   git push
   ```

2. **The site will automatically update** in 1-2 minutes!

## 🔐 Getting GitHub Personal Access Token (if needed)

If Git asks for authentication:

1. Go to https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Name it: "Etna Group Project"
4. Select scopes: **repo** (full control)
5. Click **"Generate token"**
6. **Copy the token** (you won't see it again!)
7. Use this token as your password when Git asks

## ✅ Quick Checklist

- [ ] Created GitHub repository
- [ ] Pushed code to GitHub
- [ ] Deployed to Vercel/Netlify/Cloudflare
- [ ] Got the preview URL
- [ ] Shared URL with employees

## 🎯 Recommended: Vercel

**Why Vercel?**
- ✅ Easiest setup
- ✅ Free
- ✅ Auto-deploys on every push
- ✅ Fast
- ✅ Stable URL

**Time to deploy**: ~5 minutes total!
