# Step-by-Step Deployment Guide for Etna Group Website

This guide will walk you through deploying your website to Hostinger or any hosting provider.

## Prerequisites

- Node.js installed (v18 or higher)
- Git installed (optional, for version control)
- Hosting account (Hostinger, Vercel, Netlify, etc.)
- Domain name (if using custom domain)

---

## Option 1: Deploy to Hostinger (cPanel/File Manager)

### Step 1: Build the Website

1. Open your terminal/command prompt
2. Navigate to the client directory:
   ```bash
   cd client
   ```

3. Install dependencies (if not already done):
   ```bash
   npm install
   ```

4. Build the production version:
   ```bash
   npm run build
   ```

5. This creates a `dist` folder with all the production files.

### Step 2: Upload to Hostinger

1. **Log in to Hostinger**:
   - Go to https://www.hostinger.com/
   - Log in to your account
   - Go to **hPanel** or **cPanel**

2. **Access File Manager**:
   - Find and click **File Manager**
   - Navigate to `public_html` folder (or your domain's root folder)

3. **Upload Files**:
   - Delete any existing files in `public_html` (backup first if needed)
   - Upload **ALL contents** from the `client/dist` folder to `public_html`
   - Make sure to upload:
     - `index.html`
     - `404.html`
     - `assets/` folder
     - `brand/` folder
     - `buildings/` folder
     - `projects/` folder
     - `SVG Residences/` folder (if exists)
     - Any other folders/files

4. **Set Permissions** (if needed):
   - Files: 644
   - Folders: 755

### Step 3: Configure .htaccess for React Router

Create a `.htaccess` file in `public_html` with this content:

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

This ensures React Router works correctly with direct URLs.

### Step 4: Test Your Website

1. Visit your domain: `https://yourdomain.com`
2. Test all pages:
   - Home page
   - Project pages (`/projektet/elsa`, `/projektet/tara`, etc.)
   - About page (`/per-ne`)
   - Contact page (`/kontakt`)

---

## Option 2: Deploy to Vercel (Recommended - Easiest)

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Deploy

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Run deployment:
   ```bash
   vercel
   ```

3. Follow the prompts:
   - Login to Vercel (or create account)
   - Link to existing project or create new
   - Confirm settings

4. **For production deployment**:
   ```bash
   vercel --prod
   ```

### Step 3: Configure Custom Domain (Optional)

1. Go to Vercel dashboard
2. Select your project
3. Go to **Settings** → **Domains**
4. Add your custom domain
5. Update DNS records as instructed

---

## Option 3: Deploy to Netlify

### Step 1: Build Settings

1. Go to https://www.netlify.com/
2. Sign up/Login
3. Click **Add new site** → **Deploy manually**

### Step 2: Build and Deploy

1. Build your site:
   ```bash
   cd client
   npm run build
   ```

2. Drag and drop the `dist` folder to Netlify

### Step 3: Configure for Continuous Deployment

1. Connect to Git repository (GitHub, GitLab, etc.)
2. Set build command: `npm run build`
3. Set publish directory: `dist`

---

## Post-Deployment Checklist

### ✅ Verify All Pages Work

- [ ] Home page loads correctly
- [ ] All project detail pages work (`/projektet/elsa`, `/projektet/tara`, etc.)
- [ ] About page works (`/per-ne`)
- [ ] Contact page works (`/kontakt`)
- [ ] Footer maps display correctly
- [ ] All images load properly
- [ ] Navigation works

### ✅ Test Contact Form

- [ ] Form submits correctly
- [ ] EmailJS is configured (or mailto fallback works)
- [ ] Success/error messages display

### ✅ Check Mobile Responsiveness

- [ ] Test on mobile devices
- [ ] Test on tablets
- [ ] Test on different browsers

### ✅ Performance Check

- [ ] Images are optimized
- [ ] Page loads quickly
- [ ] No console errors

---

## Troubleshooting

### Issue: 404 Errors on Direct URLs

**Solution**: Make sure `.htaccess` file is uploaded and configured correctly (for Hostinger).

### Issue: Images Not Loading

**Solution**: 
- Check file paths are correct
- Ensure all folders are uploaded
- Check file permissions

### Issue: White Screen

**Solution**:
- Check browser console for errors
- Verify `index.html` is in root directory
- Check that `assets` folder exists

### Issue: Routes Not Working

**Solution**:
- Ensure `.htaccess` is configured (Hostinger)
- Check base path in `vite.config.ts` is set to `/`

---

## Environment Variables (If Needed)

If you set up EmailJS, create environment variables in your hosting platform:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

**Note**: For static hosting, you may need to rebuild after adding environment variables.

---

## Quick Deploy Commands Summary

```bash
# Navigate to client directory
cd client

# Install dependencies
npm install

# Build for production
npm run build

# The dist folder is ready to upload!
```

---

## Need Help?

- Check browser console for errors
- Verify all files are uploaded correctly
- Test locally first: `npm run preview` (after build)
- Contact hosting support if issues persist

---

## Next Steps After Deployment

1. Set up EmailJS for contact form (see `EMAILJS_SETUP.md`)
2. Configure Google Analytics (optional)
3. Set up SSL certificate (usually automatic)
4. Test all functionality thoroughly
5. Share your website URL! 🎉
