import { useEffect, useState } from 'react'

const TOUCH_DEVICE_QUERY = '(hover: none), (pointer: coarse)'

/** True on phones/tablets where hover is unavailable — map zones stay visible. */
export function useTouchDevice(): boolean {
  const [isTouchDevice, setIsTouchDevice] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia(TOUCH_DEVICE_QUERY).matches
  )

  useEffect(() => {
    const mq = window.matchMedia(TOUCH_DEVICE_QUERY)
    const update = () => setIsTouchDevice(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return isTouchDevice
}
