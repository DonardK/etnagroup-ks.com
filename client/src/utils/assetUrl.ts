/**
 * Prefixes a path with the app base URL (e.g. /etnagroup-ks.com/ on GitHub Pages).
 * Use for all static assets (images) so they load when the app is served from a subpath.
 */
export function assetUrl(path: string): string {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')
  const normalized = path.startsWith('/') ? path.slice(1) : path
  return base ? `${base}/${normalized}` : `/${normalized}`
}
