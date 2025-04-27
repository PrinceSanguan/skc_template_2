"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"
import gsap from "gsap"

const MinimalistHero = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)

  // Initialize animations and effects
  useEffect(() => {
    if (!heroRef.current) return

    // Animate elements with the .animate-in class
    gsap.fromTo(
      ".animate-in",
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
        delay: 0.2,
      },
    )

    // Logo animation
    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: 0.2,
          ease: "back.out(1.7)",
        },
      )

      // Subtle pulse effect for the logo
      gsap.to(logoRef.current, {
        filter: "drop-shadow(0 0 8px rgba(220, 38, 38, 0.5))",
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
      })
    }

    // Create fire particles
    if (particlesRef.current) {
      const particles = particlesRef.current
      const colors = ["#ff4b4b", "#ff8c42", "#ffdc5e", "#ff6b6b", "#ff3333"]
      const particleInterval = setInterval(() => {
        const particle = document.createElement("div")
        const size = Math.random() * 4 + 1
        const color = colors[Math.floor(Math.random() * colors.length)]

        particle.style.position = "absolute"
        particle.style.width = `${size}px`
        particle.style.height = `${size}px`
        particle.style.borderRadius = "50%"
        particle.style.backgroundColor = color
        particle.style.opacity = "0.4"
        particle.style.left = `${Math.random() * 100}%`
        particle.style.bottom = "0"

        particles.appendChild(particle)

        gsap.to(particle, {
          x: Math.random() * 30 - 15,
          y: -(Math.random() * 30 + 10),
          opacity: 0,
          duration: 2 + Math.random() * 1,
          ease: "power1.out",
          onComplete: () => {
            if (particles.contains(particle)) {
              particles.removeChild(particle)
            }
          },
        })
      }, 300)

      return () => {
        if (particleInterval) {
          clearInterval(particleInterval)
        }
      }
    }
  }, [])

  return (
    <div ref={heroRef} className="relative min-h-screen overflow-hidden text-white flex flex-col pt-16">
      {/* Red top border - matching navbar */}
      <div className="h-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800"></div>

      {/* Main content area with sci-fi layout */}
      <div className="flex-1 flex">
        {/* Left sidebar */}
        <div className="animate-in w-24 md:w-48 border-r border-red-900/20 p-4 flex flex-col justify-between backdrop-blur-sm bg-black/30">
          <div className="space-y-6">
            {/* Logo emblem - matching navbar */}
            <div ref={logoRef} className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xs">SKC</span>
              </div>
            </div>

            <div className="hidden md:block space-y-1">
              <div className="text-xs text-gray-400">SYSTEM STATUS</div>
              <div className="text-sm flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                ONLINE
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="hidden md:block">
              <div className="text-xs text-gray-400 mb-2">SOCIAL</div>
              <div className="space-y-3">
                {["FB", "IG", "YT"].map((item, index) => (
                  <div key={index} className="text-sm hover:text-red-400 cursor-pointer transition-colors">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="text-xs rotate-180" style={{ writingMode: "vertical-lr" }}>
              SEIGLER'S KARATE CENTER
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col backdrop-blur-sm bg-black/30">
          {/* Particle effect container */}
          <div
            ref={particlesRef}
            className="absolute inset-x-0 bottom-0 h-24 pointer-events-none overflow-hidden opacity-50"
          ></div>

          {/* Central content */}
          <div className="flex-1 flex items-center p-6 md:p-12 relative z-10">
            <div className="animate-in max-w-xl">
              <div className="text-sm text-red-400 uppercase tracking-wider mb-2">
                Augusta's Premier Martial Arts Center
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="text-red-600">MARTIAL ARTS</span> <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-400">
                  EXCELLENCE
                </span>
              </h1>
              <p className="text-gray-300 mb-8 max-w-md">
                Discover the path to physical mastery and mental discipline through expert martial arts training.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white shadow-[0_4px_10px_rgba(220,38,38,0.3)] hover:shadow-[0_6px_15px_rgba(220,38,38,0.4)] transition-all duration-300">
                  Start Training
                </Button>
                <Button
                  variant="outline"
                  className="border-red-900/20 hover:bg-red-900/20 hover:text-red-400 transition-all duration-300"
                >
                  Explore Programs
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom info bar */}
          <div className="animate-in border-t border-red-900/20 p-4 flex justify-between items-center text-xs backdrop-blur-sm bg-black/30">
            <div>VERSION 2.4.1</div>
            <div className="flex items-center gap-2">
              <span>SCROLL TO EXPLORE</span>
              <ChevronDown className="h-4 w-4 animate-bounce" />
            </div>
            <div>© 2023</div>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="animate-in hidden md:flex w-48 border-l border-red-900/20 p-4 flex-col justify-between backdrop-blur-sm bg-black/30">
          <div>
            <div className="text-xs text-gray-400 mb-3">PROGRAMS</div>
            <div className="space-y-3">
              {[
                { name: "ADULT CLASSES", value: "92%" },
                { name: "KIDS PROGRAM", value: "87%" },
                { name: "COMPETITION", value: "95%" },
              ].map((item, index) => (
                <div key={index} className="space-y-1">
                  <div className="text-sm flex justify-between">
                    <span>{item.name}</span>
                    <span>{item.value}</span>
                  </div>
                  <div className="h-1 bg-white/10 w-full">
                    <div
                      className="h-full bg-gradient-to-r from-red-700 to-red-600"
                      style={{ width: item.value }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs text-gray-400 mb-3">NEXT CLASS</div>
            <div className="text-sm">ADULT KEMPO</div>
            <div className="text-xs text-gray-400">TODAY • 18:00</div>
            <Button
              variant="link"
              className="text-xs text-red-400 hover:text-red-300 p-0 mt-2 h-auto flex items-center"
            >
              <span>VIEW SCHEDULE</span>
              <ArrowRight className="ml-2 h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MinimalistHero
