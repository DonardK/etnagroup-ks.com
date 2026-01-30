/**
 * Prefixes a path with the app base URL (e.g. /etnagroup-ks.com/ on GitHub Pages).
 * In the browser, returns a full absolute URL so images load correctly.
 */
export function assetUrl(path: string): string {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')
  const normalized = path.startsWith('/') ? path.slice(1) : path
  const pathOnly = base ? `${base}/${normalized}` : `/${normalized}`
  // Full URL so images load on GitHub Pages (avoids base-tag/relative issues)
  if (typeof window !== 'undefined' && window.location?.origin) {
    return `${window.location.origin}${pathOnly}`
  }
  return pathOnly
}
