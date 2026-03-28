"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"

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

  useEffect(() => {
    // Only enable custom cursor on desktop
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      return
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    // Track hover states for interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, [data-interactive]'
    )

    const handleInteractiveEnter = () => setIsHovering(true)
    const handleInteractiveLeave = () => setIsHovering(false)

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleInteractiveEnter)
      el.addEventListener("mouseleave", handleInteractiveLeave)
    })

    // MutationObserver to handle dynamically added elements
    const observer = new MutationObserver(() => {
      const newInteractiveElements = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, [data-interactive]'
      )
      newInteractiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleInteractiveEnter)
        el.removeEventListener("mouseleave", handleInteractiveLeave)
        el.addEventListener("mouseenter", handleInteractiveEnter)
        el.addEventListener("mouseleave", handleInteractiveLeave)
      })
    })

    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleInteractiveEnter)
        el.removeEventListener("mouseleave", handleInteractiveLeave)
      })
      observer.disconnect()
    }
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave])

  // Don't render on mobile/tablet
  if (typeof window !== 'undefined' && window.innerWidth < 1024) {
    return null
  }

  return (
    <>
      {/* Outer ring - follows with lag */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isHovering ? 1.4 : 1,
            opacity: isVisible ? (isHovering ? 0.4 : 0.6) : 0,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <div 
            className="w-10 h-10 rounded-full border border-[#00F5D4]/50"
            style={{
              boxShadow: isHovering 
                ? '0 0 20px rgba(0, 245, 212, 0.4), inset 0 0 10px rgba(0, 245, 212, 0.1)'
                : '0 0 10px rgba(0, 245, 212, 0.2)'
            }}
          />
        </motion.div>
      </motion.div>
      
      {/* Inner dot - direct follow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isHovering ? 0.5 : 1,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        >
          <div 
            className="w-2 h-2 rounded-full bg-[#00F5D4]"
            style={{
              boxShadow: '0 0 10px rgba(0, 245, 212, 0.8)'
            }}
          />
        </motion.div>
      </motion.div>
    </>
  )
}
