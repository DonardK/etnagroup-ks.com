/** Cloudflare R2 media CDN — folder structure mirrors former `client/public/` paths. */
export const MEDIA_BASE_URL = (
  import.meta.env.VITE_MEDIA_BASE_URL || 'https://media.etnagroup-ks.com'
).replace(/\/$/, '')

export const HERO_VIDEO_URL = `${MEDIA_BASE_URL}/hero-video.mp4`

/**
 * Resolves a site media path to the R2 CDN URL.
 * Example: `/visuals/ElsaResidenceVisuals/Renderi 1.jpg`
 *   → `https://media.etnagroup-ks.com/visuals/ElsaResidenceVisuals/Renderi 1.jpg`
 */
export function assetUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) {
    return path
  }

  const normalized = path.startsWith('/') ? path.slice(1) : path
  return `${MEDIA_BASE_URL}/${normalized}`
}

/**
 * Floor-plan PDF URL. Elsa Blloku D lives on R2 (files exceed Pages' 25 MiB
 * limit); other residences still ship with the Pages deploy for now.
 */
export function pdfUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) {
    return path
  }

  const normalized = path.startsWith('/') ? path.slice(1) : path
  if (normalized.includes('Elsa Blloku D/')) {
    return assetUrl(normalized)
  }

  const base = import.meta.env.BASE_URL || '/'
  return `${base}${normalized}`
}
