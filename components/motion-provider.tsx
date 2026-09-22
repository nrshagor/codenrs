"use client"

import { LazyMotion } from "framer-motion"

// Loading domAnimation via a dynamic import splits it into its own chunk
// instead of bundling it into the initial JS the browser must parse
// before the page becomes interactive.
const loadFeatures = () =>
  import("framer-motion").then((mod) => mod.domAnimation)

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      {children}
    </LazyMotion>
  )
}
