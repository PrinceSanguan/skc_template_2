"use client"

import { useEffect, useRef, type ReactNode } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface MartialArtsBackgroundProps {
  children: ReactNode
}

const MartialArtsBackground = ({ children }: MartialArtsBackgroundProps) => {
  const particlesRef = useRef<HTMLDivElement>(null)
  const decorativeElementsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Register GSAP plugins
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)
    }

    // Animate decorative elements
    if (decorativeElementsRef.current) {
      gsap.to(decorativeElementsRef.current.querySelectorAll(".floating-element"), {
        y: -10,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3,
      })
    }

    // Create subtle fire particles
    if (particlesRef.current) {
      const particles = particlesRef.current
      // Subtle fire colors
      const colors = ["#ff9500", "#ff6a00", "#ff4d00", "#ff8800"]
      const particleInterval = setInterval(() => {
        const particle = document.createElement("div")
        const size = Math.random() * 4 + 1 // Smaller particles
        const color = colors[Math.floor(Math.random() * colors.length)]

        particle.style.position = "absolute"
        particle.style.width = `${size}px`
        particle.style.height = `${size}px`
        particle.style.borderRadius = "50%"
        particle.style.backgroundColor = color
        particle.style.opacity = (0.2 + Math.random() * 0.2).toString() // Lower opacity
        particle.style.left = `${Math.random() * 100}%`
        particle.style.bottom = "0"

        particles.appendChild(particle)

        // Gentle upward movement
        gsap.to(particle, {
          x: Math.random() * 30 - 15, // Less horizontal movement
          y: -(Math.random() * 100 + 50), // Less height
          opacity: 0,
          duration: 3 + Math.random() * 2,
          ease: "power1.out",
          onComplete: () => {
            if (particles.contains(particle)) {
              particles.removeChild(particle)
            }
          }
        })
      }, 300) // Less frequent particles

      return () => {
        if (particleInterval) clearInterval(particleInterval)
      }
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Dark background base */}
      <div className="fixed inset-0 bg-black z-0"></div>

      {/* Subtle gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-t from-red-900/40 via-black/95 to-black z-0"></div>

      {/* Very subtle side gradients */}
      <div className="fixed left-0 bottom-0 w-1/3 h-full bg-gradient-to-r from-red-800/10 to-transparent z-0"></div>
      <div className="fixed right-0 bottom-0 w-1/3 h-full bg-gradient-to-l from-red-800/10 to-transparent z-0"></div>

      {/* Gentle glow at bottom */}
      <div className="fixed bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-red-700/15 to-transparent z-1"></div>

      {/* Japanese-inspired pattern overlay */}
      <div className="fixed inset-0 opacity-3 mix-blend-overlay z-0"></div>

      {/* Subtle particles container */}
      <div ref={particlesRef} className="fixed inset-0 pointer-events-none z-5"></div>

      {/* Decorative elements - more subtle */}
      <div ref={decorativeElementsRef} className="fixed inset-0 pointer-events-none z-2">
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 floating-element bg-red-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-32 h-32 floating-element bg-orange-500/5 rounded-full blur-2xl"></div>
        <div className="absolute right-1/3 top-1/2 w-24 h-24 floating-element bg-red-500/5 rounded-full blur-xl"></div>
      </div>

      {/* Martial arts silhouette elements - more subtle */}
      <div
        className="fixed bottom-0 right-0 w-64 h-64 bg-contain bg-no-repeat bg-right-bottom z-1 opacity-10"
        style={{ backgroundImage: "url('/karate-silhouette-1.png')" }}
      ></div>
      <div
        className="fixed top-0 left-0 w-48 h-48 bg-contain bg-no-repeat bg-left-top z-1 opacity-10"
        style={{ backgroundImage: "url('/karate-silhouette-2.png')" }}
      ></div>

      {/* Content */}
      <div className="relative z-20">{children}</div>
    </div>
  )
}

export default MartialArtsBackground