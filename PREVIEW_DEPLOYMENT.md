# Quick Preview Deployment Guide

This guide shows you how to temporarily deploy your site so employees can access it and find images. **This is NOT for production** - just for internal review.

## 🌐 Option 1: Netlify

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

## 🔗 Option 2: Cloudflare Pages (Free)

1. Go to https://pages.cloudflare.com
2. Connect your GitHub repository (or upload manually)
3. Build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Deploy - you'll get a URL automatically

---

## 🏠 Option 3: Local Network Access (If employees are nearby)

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

## 🔐 Option 4: ngrok (Tunnel to localhost)

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
| **Netlify** | 5 min | Free | Stable | Quick preview |
| **Cloudflare Pages** | 10 min | Free | Stable | Quick preview |
| **Local Network** | 2 min | Free | Stable | Same office |
| **ngrok** | 5 min | Free* | Changes | Testing |

*Free tier has limitations

---

## 🔄 Updating the Preview

When you make changes:

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
- You can password-protect Netlify deployments if needed

---

## 🛑 When Done Testing

Simply stop deploying or delete the deployment from the platform dashboard. No harm done!
