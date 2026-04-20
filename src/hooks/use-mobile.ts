import * as React from "react"

const MOBILE_BREAKPOINT = 768

const subscribeToViewportChanges = (onStoreChange: () => void) => {
  const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)

  mql.addEventListener("change", onStoreChange)

  return () => mql.removeEventListener("change", onStoreChange)
}

const getViewportSnapshot = () => window.innerWidth < MOBILE_BREAKPOINT
const getServerViewportSnapshot = () => false

export function useIsMobile() {
  return React.useSyncExternalStore(
    subscribeToViewportChanges,
    getViewportSnapshot,
    getServerViewportSnapshot
  )
}
