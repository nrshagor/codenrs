"use client"

import { useEffect, useState, useCallback } from "react"
import { m, useSpring, useMotionValue } from "framer-motion"

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX)
    cursorY.set(e.clientY)
    if (!isVisible) setIsVisible(true)
  }, [cursorX, cursorY, isVisible])

  const handleMouseEnter = useCallback(() => setIsVisible(true), [])
  const handleMouseLeave = useCallback(() => setIsVisible(false), [])

  const INTERACTIVE_SELECTOR =
    'a, button, [role="button"], input, textarea, select, [data-interactive]'

  useEffect(() => {
    // Only enable custom cursor on desktop
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      return
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    // Delegate hover tracking through bubbling mouseover/mouseout on the
    // document instead of a MutationObserver + per-element listeners —
    // that approach re-scanned the whole DOM on every hydration mutation
    // and was a major source of main-thread blocking time.
    const handlePointerOver = (e: MouseEvent) => {
      const target = e.target as Element | null
      if (target?.closest(INTERACTIVE_SELECTOR)) setIsHovering(true)
    }
    const handlePointerOut = (e: MouseEvent) => {
      const related = e.relatedTarget as Element | null
      if (!related?.closest(INTERACTIVE_SELECTOR)) setIsHovering(false)
    }

    document.addEventListener("mouseover", handlePointerOver)
    document.addEventListener("mouseout", handlePointerOut)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseover", handlePointerOver)
      document.removeEventListener("mouseout", handlePointerOut)
    }
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave])

  // Don't render on mobile/tablet
  if (typeof window !== 'undefined' && window.innerWidth < 1024) {
    return null
  }

  return (
    <>
      {/* Outer ring - follows with lag */}
      <m.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <m.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isHovering ? 1.4 : 1,
            opacity: isVisible ? (isHovering ? 0.4 : 0.6) : 0,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <div 
            className="w-10 h-10 rounded-full border border-[#00D2FF]/50"
            style={{
              boxShadow: isHovering 
                ? '0 0 20px rgba(0, 210, 255, 0.45), inset 0 0 10px rgba(0, 210, 255, 0.15)'
                : '0 0 10px rgba(0, 210, 255, 0.25)'
            }}
          />
        </m.div>
      </m.div>
      
      {/* Inner dot - direct follow */}
      <m.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <m.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isHovering ? 0.5 : 1,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        >
          <div 
            className="w-2 h-2 rounded-full bg-[#00D2FF]"
            style={{
              boxShadow: '0 0 12px rgba(0, 210, 255, 0.85)'
            }}
          />
        </m.div>
      </m.div>
    </>
  )
}
