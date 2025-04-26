"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef, type ReactNode, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ChevronRight, Star, Calendar, Award, Users } from "lucide-react"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Animated component wrapper
interface AnimatedElementProps {
  children: ReactNode
  delay?: number
  className?: string
  animation?: "fadeIn" | "slideUp" | "slideRight"
}

const AnimatedElement = ({ children, delay = 0, className = "", animation = "fadeIn" }: AnimatedElementProps) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let animationProps = {}

    switch (animation) {
      case "fadeIn":
        animationProps = { opacity: 0, y: 0 }
        break
      case "slideUp":
        animationProps = { opacity: 0, y: 30 }
        break
      case "slideRight":
        animationProps = { opacity: 0, x: -20 }
        break
    }

    gsap.fromTo(el, animationProps, {
      opacity: 1,
      y: 0,
      x: 0,
      duration: 0.9,
      delay,
      ease: "power3.out",
    })
  }, [delay, animation])

  return (
    <div ref={ref} className={`opacity-0 ${className}`}>
      {children}
    </div>
  )
}

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    // Fade in the hero section
    gsap.fromTo(heroRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5, ease: "power2.inOut" })

    // Fade in the image with delay
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1.2, delay: 0.5, ease: "power3.out" },
    )
  }, [])

  return (
    <div ref={heroRef} className="py-32 text-white">
      <div className="container relative mx-auto px-4 z-10">
        <div className="flex flex-col items-center justify-between lg:flex-row gap-12">
          <div className="mb-10 max-w-2xl space-y-8 md:mb-0">
            <AnimatedElement delay={0.2} animation="slideUp">
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-px w-8 bg-red-500"></div>
                <span className="text-red-400 uppercase tracking-wider text-sm font-semibold">
                  Augusta's Premier Dojo
                </span>
              </div>
              <h1 className="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-red-200">
                Martial Arts{" "}
                <span className="block mt-1">
                  &amp; <span className="text-red-500">Fitness</span> for All
                </span>
              </h1>
            </AnimatedElement>

            <AnimatedElement delay={0.4} animation="slideUp">
              <p className="text-xl text-gray-300 leading-relaxed">
                At Seigler's Karate Center, we're passionate about using martial arts to help you live your best life.
                Our programs cater to all ages and skill levels.
              </p>
            </AnimatedElement>

            <AnimatedElement delay={0.6} animation="slideUp" className="flex flex-wrap gap-5">
              <Button
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                variant="default"
                className="bg-gradient-to-r from-red-700 to-red-500 hover:from-red-600 hover:to-red-400 px-8 py-6 text-white font-medium shadow-[0_8px_30px_rgb(225,29,72,0.3)] rounded-xl text-lg transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  Select a Program
                  <ChevronRight
                    className={`ml-2 transition-transform duration-300 ${isHovering ? "translate-x-1" : ""}`}
                    size={20}
                  />
                </span>
              </Button>
              <Button
                variant="outline"
                className="border-red-500/30 px-8 py-6 text-lg text-white bg-black/30 backdrop-blur-sm hover:bg-red-600/20 hover:border-red-500/50 transition-all duration-300 rounded-xl"
              >
                <Calendar className="mr-2" size={18} />
                View Schedule & Pricing
              </Button>
            </AnimatedElement>

            <AnimatedElement delay={0.8} animation="slideUp">
              <div className="mt-8 flex flex-col sm:flex-row gap-6">
                <div className="flex items-center">
                  <div className="flex mr-2">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-gray-300">
                    <span className="font-bold text-white">4.9</span> Rating (200+ reviews)
                  </span>
                </div>
                <div className="flex items-center">
                  <Award className="mr-2 text-red-500" size={20} />
                  <span className="text-gray-300">Award-winning instruction</span>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={1} animation="slideUp">
              <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">15+</span>
                  <span className="text-gray-400">Years Experience</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">500+</span>
                  <span className="text-gray-400">Students Trained</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">All</span>
                  <span className="text-gray-400">Ages Welcome</span>
                </div>
              </div>
            </AnimatedElement>
          </div>

          <div ref={imageRef} className="w-full max-w-xl">
            <div className="relative">
              {/* Main image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl mb-8 md:mb-0">
                <img
                  src="Images/team/ADULTKEMPO.jpg"
                  alt="Martial Arts Class at Seigler's Karate Center"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 rounded-xl bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-lg flex items-center">
                  <span className="mr-2">🔥</span>
                  LIMITED TIME OFFER
                </div>

                {/* Floating info card */}
                <div className="absolute right-2 sm:right-4 md:right-6 bottom-0 sm:bottom-2 md:bottom-4 bg-black/80 backdrop-blur-md rounded-xl p-4 shadow-xl border border-red-500/20 w-[200px] sm:w-[220px]">
                  <div className="flex items-center mb-2">
                    <Users className="text-red-500 mr-2 flex-shrink-0" size={16} />
                    <h3 className="font-semibold truncate">Classes For All Ages</h3>
                  </div>
                  <p className="text-sm text-gray-300">Kids, teens, and adults programs available</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 rounded-full bg-gradient-to-r from-red-600/20 to-red-500/5 blur-xl"></div>
              <div className="absolute -z-10 -bottom-8 -right-8 w-40 h-40 rounded-full bg-gradient-to-r from-red-600/10 to-yellow-500/5 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
