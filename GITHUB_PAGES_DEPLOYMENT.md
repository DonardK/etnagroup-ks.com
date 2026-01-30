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

## Deploy Etna site to root: https://donardk.github.io/

To serve the Etna Group site at **https://donardk.github.io/** (instead of `/etnagroup-ks.com/`), a second workflow deploys the built site into the **donardk.github.io** repository.

### One-time setup: Personal Access Token (PAT)

1. **Create a PAT** (GitHub → Settings → Developer settings → Personal access tokens):
   - **Classic** token with scope **repo** (or at least write access to `donardk/donardk.github.io`).
   - Copy the token; you won’t see it again.

2. **Add the token as a secret** in the **etnagroup-ks.com** repo:
   - Repo **etnagroup-ks.com** → **Settings** → **Secrets and variables** → **Actions**.
   - **New repository secret**:
     - Name: `DEPLOY_TO_USER_PAGES_TOKEN`
     - Value: paste the PAT.

3. **Default branch of donardk.github.io**:  
   The workflow pushes to the `main` branch. If your **donardk.github.io** repo uses `master` as the default branch, edit `.github/workflows/deploy-user-pages.yml` and set `publish_branch: master`.

### What runs

- On every push to `main`, the workflow **Deploy to donardk.github.io (root)** runs.
- It builds the app with base `/` and pushes the contents of `client/dist` to the root of **donardk/donardk.github.io**.
- **Warning:** This overwrites whatever is currently in that repo. If you had another site there, it will be replaced by the Etna site.

### URLs after setup

- **Root (user site):** https://donardk.github.io/ → Etna Group site.
- **Project site (optional):** https://donardk.github.io/etnagroup-ks.com/ → same app from the other workflow, if you keep it.

---

## Custom domain (etnagroup-ks.com)

To avoid a blank white screen on your custom domain:

1. **CNAME is included in the deploy**  
   The repo has `client/public/CNAME` with `etnagroup-ks.com`. Vite copies it into `dist/`, and the workflow deploys that, so the published site root includes **index.html** and **CNAME**. If your custom domain is different (e.g. `www.etnagroup-ks.com`), edit `client/public/CNAME` to that exact domain (one line, no `https://`).

2. **GitHub Pages settings**  
   In the **donardk.github.io** repo: **Settings → Pages → Custom domain**. Enter your domain (e.g. `etnagroup-ks.com`) and save. GitHub will show DNS instructions if needed.

3. **Root structure**  
   The workflow publishes the **contents** of `client/dist/` to the **root** of the `gh-pages` branch, so **index.html** is at the top level (not inside a subfolder). Asset paths in the built HTML use `/assets/...` so they work on both donardk.github.io and your custom domain.

---

## Notes

- The website will be available at: `https://donardk.github.io/etnagroup-ks.com/` (project site) and, after the one-time setup above, at **https://donardk.github.io/** (root).
- The backend API needs to be deployed separately (consider Railway, Render, or another host for the .NET API)
- For production, update API endpoints in your frontend code to point to your deployed backend URL
