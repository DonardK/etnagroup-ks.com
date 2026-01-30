# Hostinger Deployment Guide

This guide will help you deploy your Etna Group website to Hostinger.

## Prerequisites

1. A Hostinger account with a domain configured
2. Node.js installed on your local machine (for building)
3. FTP access or File Manager access in Hostinger

## Step 1: Build the Website for Production

First, you need to build the React application for production:

```bash
cd client
npm run build
```

This will create a `dist` folder in the `client` directory with all the optimized production files.

## Step 2: Prepare Files for Upload

The build process creates static files in `client/dist/`. You need to upload all contents of this folder to your Hostinger hosting.

**Important:** Make sure to upload:
- All files from `client/dist/`
- The `public` folder contents (images, SVGs, etc.) should already be in `dist` after build
- Make sure `index.html` is in the root of your website directory

## Step 3: Upload to Hostinger

### Option A: Using File Manager (Recommended for beginners)

1. **Log in to Hostinger:**
   - Go to https://www.hostinger.com
   - Log in to your account
   - Go to **hPanel** (Hostinger Control Panel)

2. **Access File Manager:**
   - In hPanel, find **Files** section
   - Click on **File Manager**

3. **Navigate to your domain:**
   - Go to `public_html` folder (this is your website root)
   - If you have a subdomain or addon domain, navigate to that folder instead

4. **Upload files:**
   - Delete any existing files in `public_html` (or backup first)
   - Upload all files from `client/dist/` to `public_html`
   - Make sure `index.html` is directly in `public_html`

### Option B: Using FTP (Faster for large files)

1. **Get FTP credentials:**
   - In hPanel, go to **FTP Accounts**
   - Note your FTP host, username, and password
   - Or create a new FTP account if needed

2. **Use an FTP client:**
   - Download FileZilla (free): https://filezilla-project.org/
   - Connect using your FTP credentials
   - Navigate to `public_html` folder
   - Upload all files from `client/dist/`

## Step 4: Configure Base Path (IMPORTANT!)

**Before building**, you need to update the base path in `client/vite.config.ts`:

1. **If your domain is the root domain** (e.g., `yourdomain.com`):
   - Edit `client/vite.config.ts` and change:
   ```typescript
   base: process.env.NODE_ENV === 'production' ? '/' : '/',
   ```

2. **If your website is in a subdirectory** (e.g., `yourdomain.com/subfolder`):
   - Edit `client/vite.config.ts` and change:
   ```typescript
   base: process.env.NODE_ENV === 'production' ? '/subfolder/' : '/',
   ```

3. **Then rebuild:**
   ```bash
   cd client
   npm run build
   ```

**Note:** Currently, the config is set to `/etnagroup-ks.com/` for GitHub Pages. You MUST change this to `/` for Hostinger root domain hosting.

## Step 5: Set Up Routing (Important!)

Since this is a Single Page Application (SPA) with React Router, you need to configure your server to handle client-side routing.

### For Apache (Most Hostinger plans use Apache):

Create a `.htaccess` file in your `public_html` folder with this content:

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

This ensures that all routes (like `/elsa`, `/kontakt`, etc.) are handled by your React app.

### For Nginx (If your Hostinger plan uses Nginx):

You'll need to add this to your Nginx configuration (contact Hostinger support if you can't access this):

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## Step 6: Verify Deployment

1. Visit your domain in a browser
2. Test all pages:
   - Homepage (`/`)
   - About page (`/per-ne`)
   - Contact page (`/kontakt`)
   - Project pages (`/elsa`, `/tiani`, `/tara`, `/joni`, `/etna`)
3. Check that images load correctly
4. Test the interactive building selector
5. Verify the map in the footer works

## Step 7: SSL Certificate (HTTPS)

Hostinger usually provides free SSL certificates:

1. In hPanel, go to **SSL**
2. Enable **Let's Encrypt SSL** for your domain
3. Wait a few minutes for it to activate
4. Your site will be accessible via HTTPS

## Troubleshooting

### Images not loading:
- Check that all files from `public` folder are in `dist` after build
- Verify image paths use `import.meta.env.BASE_URL` correctly
- Check browser console for 404 errors

### 404 errors on routes:
- Make sure `.htaccess` file is uploaded and configured correctly
- Verify mod_rewrite is enabled on your Apache server (contact Hostinger support if needed)

### Build errors:
- Make sure all dependencies are installed: `npm install`
- Check for TypeScript errors: `npm run build` will show them

### Performance issues:
- The build process already optimizes files (minification, tree-shaking)
- Consider enabling GZIP compression in Hostinger hPanel
- Use a CDN for static assets if needed

## Updating the Website

When you need to update the website:

1. Make changes to your code
2. Build again: `cd client && npm run build`
3. Upload the new `dist` folder contents to Hostinger
4. Clear browser cache if needed

## Additional Tips

1. **Backup:** Always backup your current site before uploading new files
2. **Version Control:** Keep your code in Git (GitHub, GitLab, etc.) for easy rollback
3. **Testing:** Test the build locally before uploading:
   ```bash
   cd client
   npm run build
   npm run preview  # Test the production build locally
   ```

## Need Help?

- Hostinger Support: Available 24/7 in hPanel
- Check Hostinger documentation: https://support.hostinger.com/

---

**Quick Checklist:**
- [ ] Built the project (`npm run build`)
- [ ] Uploaded all files from `client/dist/` to `public_html`
- [ ] Created `.htaccess` file for routing
- [ ] Tested all pages work correctly
- [ ] Enabled SSL certificate
- [ ] Verified images and assets load properly
