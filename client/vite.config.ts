import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { rmSync } from 'node:fs'
import { join } from 'node:path'

/** Media served from R2 — must not ship in Cloudflare Pages dist (25 MiB/file limit). */
const R2_MEDIA_DIRS = ['visuals', 'SVG Residences', 'brand', 'buildings', 'home page']

function excludeR2MediaFromDist(): Plugin {
  return {
    name: 'exclude-r2-media-from-dist',
    closeBundle() {
      const outDir = join(process.cwd(), 'dist')
      for (const dir of R2_MEDIA_DIRS) {
        rmSync(join(outDir, dir), { recursive: true, force: true })
      }
      rmSync(join(outDir, 'hero-video.mp4'), { force: true })
    },
  }
}

// https://vite.dev/config/
// base '/' so assets load from /assets/ on custom domain and donardk.github.io root
export default defineConfig(() => ({
  base: '/',
  plugins: [react(), excludeR2MediaFromDist()],
  server: {
    port: 5173,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
}))
