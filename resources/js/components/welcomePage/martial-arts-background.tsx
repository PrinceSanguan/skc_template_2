"use client"

import { useEffect, useRef, type ReactNode } from "react"
import gsap from "gsap"

interface SciFiMartialArtsBackgroundProps {
  children: ReactNode
}

const SciFiMartialArtsBackground = ({ children }: SciFiMartialArtsBackgroundProps) => {
  const backgroundRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const scanlineRef = useRef<HTMLDivElement>(null)

  // Initialize subtle sci-fi grid
  useEffect(() => {
    if (!gridRef.current) return

    // Create horizontal grid lines
    for (let i = 0; i < 20; i++) {
      const line = document.createElement("div")
      line.className = "grid-line horizontal"
      line.style.position = "absolute"
      line.style.height = "1px"
      line.style.left = "0"
      line.style.right = "0"
      line.style.top = `${i * 5}%`
      line.style.background =
        "linear-gradient(90deg, rgba(255,50,0,0) 0%, rgba(255,70,0,0.3) 50%, rgba(255,50,0,0) 100%)"
      line.style.opacity = "0"

      // Animate line
      gsap.to(line, {
        opacity: 0.25,
        duration: 1,
        delay: i * 0.1,
        ease: "power1.inOut",
      })

      gridRef.current.appendChild(line)
    }

    // Create vertical grid lines
    for (let i = 0; i < 20; i++) {
      const line = document.createElement("div")
      line.className = "grid-line vertical"
      line.style.position = "absolute"
      line.style.width = "1px"
      line.style.top = "0"
      line.style.bottom = "0"
      line.style.left = `${i * 5}%`
      line.style.background =
        "linear-gradient(0deg, rgba(255,50,0,0) 0%, rgba(255,70,0,0.3) 50%, rgba(255,50,0,0) 100%)"
      line.style.opacity = "0"

      // Animate line
      gsap.to(line, {
        opacity: 0.25,
        duration: 1,
        delay: i * 0.1,
        ease: "power1.inOut",
      })

      gridRef.current.appendChild(line)
    }

    // Create a few accent points at grid intersections
    for (let i = 0; i < 20; i++) {
      const point = document.createElement("div")
      point.className = "grid-point"

      // Random position at a grid intersection
      const x = Math.floor(Math.random() * 20) * 5
      const y = Math.floor(Math.random() * 20) * 5

      point.style.position = "absolute"
      point.style.width = "4px"
      point.style.height = "4px"
      point.style.borderRadius = "50%"
      point.style.backgroundColor = "rgba(255,100,0,0.5)"
      point.style.left = `${x}%`
      point.style.top = `${y}%`
      point.style.transform = "translate(-50%, -50%)"
      point.style.boxShadow = "0 0 8px rgba(255,100,0,0.7)"
      point.style.opacity = "0"

      // Animate point
      gsap.to(point, {
        opacity: 1,
        duration: 2,
        delay: Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })

      gridRef.current.appendChild(point)
    }
  }, [])

  // Initialize scanline effect
  useEffect(() => {
    if (!scanlineRef.current) return

    const scanline = document.createElement("div")
    scanline.style.position = "absolute"
    scanline.style.left = "0"
    scanline.style.right = "0"
    scanline.style.height = "100px"
    scanline.style.background =
      "linear-gradient(to bottom, rgba(255,50,0,0) 0%, rgba(255,50,0,0.03) 50%, rgba(255,50,0,0) 100%)"
    scanline.style.opacity = "0.5"
    scanline.style.zIndex = "1"

    scanlineRef.current.appendChild(scanline)

    // Animate scanline
    gsap.to(scanline, {
      top: "100%",
      duration: 8,
      repeat: -1,
      ease: "none",
      onStart: () => {
        scanline.style.top = "-100px"
      },
    })
  }, [])

  return (
    <div ref={backgroundRef} className="relative min-h-screen overflow-hidden">
      {/* Enhanced gradient background with fiery tones */}
      <div
        className="fixed inset-0 z-0"
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #150505 50%, #1a0505 100%)",
        }}
      ></div>

      {/* Subtle warm radial gradient */}
      <div
        className="fixed inset-0 z-1 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at bottom, rgba(255,50,0,0.15) 0%, rgba(255,30,0,0.05) 30%, transparent 70%)",
        }}
      ></div>

      {/* Subtle grid overlay */}
      <div ref={gridRef} className="fixed inset-0 z-1 pointer-events-none"></div>

      {/* Scanline effect container */}
      <div ref={scanlineRef} className="fixed inset-0 z-2 pointer-events-none overflow-hidden"></div>

      {/* Very subtle noise texture */}
      <div
        className="fixed inset-0 z-2 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      ></div>

      {/* Subtle vignette */}
      <div
        className="fixed inset-0 z-2 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.3) 100%)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default SciFiMartialArtsBackground
