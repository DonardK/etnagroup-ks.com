# Video File Setup

The video file `Animacioni Elsa Residence.mp4` (145 MB) is too large for GitHub and has been excluded from the repository.

## Option 1: Upload Video to Cloud Storage (Recommended)

### Using Cloudinary (Free tier available):

1. Sign up at https://cloudinary.com (free account)
2. Upload your video: `client/public/home page/Animacioni Elsa Residence.mp4`
3. Copy the video URL
4. Update `client/src/pages/HomePage.tsx`:
   ```tsx
   <source src="YOUR_CLOUDINARY_VIDEO_URL" type="video/mp4" />
   ```

### Using Vercel Blob Storage:

1. After deploying to Vercel, you can upload large files
2. Or use Vercel's file upload API

### Using AWS S3 / CloudFront:

1. Upload video to S3 bucket
2. Enable CloudFront CDN
3. Use CloudFront URL in your code

## Option 2: Add Video After Deployment

1. After deploying to Vercel/Netlify
2. Manually upload the video file to the hosting platform
3. Update the path in your code

## Option 3: Use Git LFS (For Future)

If you want to track large files in Git:

```bash
git lfs install
git lfs track "*.mp4"
git add .gitattributes
git add "client/public/home page/Animacioni Elsa Residence.mp4"
git commit -m "Add video with Git LFS"
git push
```

**Note**: Git LFS has usage limits on free GitHub accounts.

## Quick Fix for Now

The video file is still on your computer at:
`client/public/home page/Animacioni Elsa Residence.mp4`

For local development, it will work fine. For production, upload it to a CDN or cloud storage service.
