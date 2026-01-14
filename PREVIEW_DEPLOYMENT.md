# Quick Preview Deployment Guide

This guide shows you how to temporarily deploy your site so employees can access it and find images. **This is NOT for production** - just for internal review.

## 🚀 Option 1: Vercel (Easiest - Recommended)

**Free, takes 5 minutes, gives you a shareable URL**

### Steps:

1. **Install Vercel CLI** (if you don't have it):
   ```bash
   npm install -g vercel
   ```

2. **Navigate to client folder**:
   ```bash
   cd client
   ```

3. **Deploy**:
   ```bash
   vercel
   ```
   
   - It will ask you to login (create free account if needed)
   - Press Enter to accept defaults
   - It will give you a URL like: `https://etnagroup-ks-com.vercel.app`

4. **Share the URL** with your employees!

5. **To update** (when you make changes):
   ```bash
   vercel --prod
   ```

**Note**: The first deployment creates a preview URL. Use `--prod` flag for a stable URL.

---

## 🌐 Option 2: Netlify (Also Easy)

**Free, drag-and-drop or CLI**

### Steps:

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Build your site**:
   ```bash
   cd client
   npm run build
   ```

3. **Deploy**:
   ```bash
   netlify deploy --prod --dir=dist
   ```
   
   - First time: Login and follow prompts
   - You'll get a URL like: `https://random-name-12345.netlify.app`

4. **Share the URL**!

---

## 🔗 Option 3: Cloudflare Pages (Free)

1. Go to https://pages.cloudflare.com
2. Connect your GitHub repository (or upload manually)
3. Build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Deploy - you'll get a URL automatically

---

## 🏠 Option 4: Local Network Access (If employees are nearby)

If your employees are on the same network (same office/WiFi):

1. **Find your local IP**:
   - Windows: Open Command Prompt, type `ipconfig`, look for "IPv4 Address"
   - Mac/Linux: Open Terminal, type `ifconfig` or `ip addr`

2. **Start the dev server**:
   ```bash
   cd client
   npm run dev -- --host
   ```

3. **Share the URL**: `http://YOUR_IP:5173` (e.g., `http://192.168.1.100:5173`)

**Note**: This only works on the same network!

---

## 🔐 Option 5: ngrok (Tunnel to localhost)

**Makes your localhost accessible from anywhere**

1. **Sign up** at https://ngrok.com (free account)

2. **Download ngrok** and install

3. **Start your dev server**:
   ```bash
   cd client
   npm run dev
   ```

4. **In another terminal, start ngrok**:
   ```bash
   ngrok http 5173
   ```

5. **Share the ngrok URL** (e.g., `https://abc123.ngrok.io`)

**Note**: Free ngrok URLs change each time you restart. Paid plans give you a stable URL.

---

## 📋 Quick Comparison

| Option | Setup Time | Cost | URL Stability | Best For |
|--------|------------|------|---------------|----------|
| **Vercel** | 5 min | Free | Stable | Quick preview |
| **Netlify** | 5 min | Free | Stable | Quick preview |
| **Cloudflare Pages** | 10 min | Free | Stable | Quick preview |
| **Local Network** | 2 min | Free | Stable | Same office |
| **ngrok** | 5 min | Free* | Changes | Testing |

*Free tier has limitations

---

## 🎯 Recommended: Vercel

**Why?**
- ✅ Fastest setup
- ✅ Free
- ✅ Stable URL
- ✅ Easy updates
- ✅ No credit card needed

**Quick Start:**
```bash
npm install -g vercel
cd client
vercel
```

Then share the URL you get!

---

## 🔄 Updating the Preview

When you make changes:

**Vercel:**
```bash
cd client
vercel --prod
```

**Netlify:**
```bash
cd client
npm run build
netlify deploy --prod --dir=dist
```

---

## ⚠️ Important Notes

- These are **preview/staging** environments - NOT production
- Free tiers may have limitations (bandwidth, build time)
- URLs are public - don't share sensitive data
- You can password-protect Vercel/Netlify deployments if needed

---

## 🛑 When Done Testing

Simply stop deploying or delete the deployment from the platform dashboard. No harm done!
