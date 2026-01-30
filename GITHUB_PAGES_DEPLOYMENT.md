# Step-by-Step Guide: Deploy Website to GitHub Pages

## Prerequisites
- GitHub account
- Git installed on your computer
- Node.js installed (for local testing)

## Step 1: Push Your Code to GitHub

If you haven't already, make sure all your changes are committed and pushed:

```bash
git add .
git commit -m "Update favicon and add GitHub Pages deployment"
git push origin main
```

## Step 2: Enable GitHub Pages in Repository Settings

1. Go to your GitHub repository: `https://github.com/DonardK/etnagroup-ks.com`
2. Click on **Settings** (top menu bar)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
5. Click **Save**

## Step 3: Trigger the Deployment

The GitHub Actions workflow will automatically run when you:
- Push to the `main` branch (already done if you pushed in Step 1)
- Or manually trigger it:
  1. Go to the **Actions** tab in your repository
  2. Select **Deploy to GitHub Pages** workflow
  3. Click **Run workflow** button
  4. Select the branch (`main`) and click **Run workflow**

## Step 4: Wait for Deployment

1. Go to the **Actions** tab
2. You'll see the workflow running
3. Wait for it to complete (usually 2-5 minutes)
4. Once it shows a green checkmark ✅, the deployment is complete

## Step 5: Access Your Website

1. Go back to **Settings** → **Pages**
2. You'll see your site URL: `https://donardk.github.io/etnagroup-ks.com/`
3. It may take a few minutes for the site to be accessible after first deployment

## Troubleshooting

### If the site shows 404:
- Wait 5-10 minutes for DNS propagation
- Check the Actions tab to ensure deployment succeeded
- Verify the base path in `vite.config.ts` (should be empty for root deployment)

### If you need to update the site:
- Just push changes to `main` branch
- The workflow will automatically rebuild and redeploy

### If you want to test locally:
```bash
cd client
npm install
npm run build
npm run preview
```

## Notes

- The website will be available at: `https://donardk.github.io/etnagroup-ks.com/`
- The backend API needs to be deployed separately (consider Railway, Render, or another host for the .NET API)
- For production, update API endpoints in your frontend code to point to your deployed backend URL
