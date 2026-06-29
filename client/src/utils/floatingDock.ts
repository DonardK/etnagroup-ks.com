import type { CSSProperties } from 'react'

/** Shared fixed bottom-right anchor for chat FAB and promo banner. */
export const FLOATING_DOCK_STYLE: CSSProperties = {
  position: 'fixed',
  bottom: 'max(24px, env(safe-area-inset-bottom, 0px))',
  right: 'max(24px, env(safe-area-inset-right, 0px))',
  zIndex: 9999,
}
