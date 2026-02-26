import React, { createContext, useContext, useEffect, useState } from 'react'

interface AnimationContextType {
  reduceMotion: boolean
}

const AnimationContext = createContext<AnimationContextType>({ reduceMotion: false })

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setReduceMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return (
    <AnimationContext.Provider value={{ reduceMotion }}>
      {children}
    </AnimationContext.Provider>
  )
}

export function useAnimation() {
  return useContext(AnimationContext)
}
