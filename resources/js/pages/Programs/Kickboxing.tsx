"use client"

import Template from "../About/Template"
import AnimatedElement from "@/components/ui/animated-element"
import { Link } from "@inertiajs/react"
import { useRef, useEffect } from "react"
import { ChevronRight, Shield, Award, Users, Calendar, Brain, Heart } from "lucide-react"
import gsap from "gsap"

export default function Kickboxing() {
  const particlesRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)

  // Sample class schedule
  const schedule = [
    { day: "Tuesday", time: "7:00 PM - 8:00 PM" },
    { day: "Thursday", time: "7:00 PM - 8:00 PM" },
    { day: "Saturday", time: "10:00 AM - 11:00 AM" },
  ]

  // Program benefits
  const benefits = [
    {
      title: "Full Body Workout",
      description: "Burn calories, build muscle, and improve cardiovascular health through high-intensity training.",
      icon: <Brain className="w-5 h-5 text-white" />,
    },
    {
      title: "Self-Defense Skills",
      description: "Learn practical striking techniques that work in real-world self-defense situations.",
      icon: <Shield className="w-5 h-5 text-white" />,
    },
    {
      title: "Stress Relief",
      description: "Channel negative energy and daily stress into powerful strikes and combinations.",
      icon: <Award className="w-5 h-5 text-white" />,
    },
    {
      title: "Confidence Building",
      description: "Develop mental toughness and self-assurance through challenging training and skill development.",
      icon: <Users className="w-5 h-5 text-white" />,
    },
  ]

  // Program stats
  const stats = [
    { label: "Age Range", value: "14+ years" },
    { label: "Class Duration", value: "60 minutes" },
    { label: "Classes Per Week", value: "2-3 recommended" },
    { label: "Intensity Level", value: "High" },
  ]

  // GSAP animations
  useEffect(() => {
    // Create particles
    if (particlesRef.current) {
      const particles = particlesRef.current
      const colors = ["#ff4b4b", "#ffffff", "#ff8080", "#ffcc00", "#ff6b6b"]
      const particleInterval = setInterval(() => {
        const particle = document.createElement("div")
        const size = Math.random() * 4 + 1 // Smaller particles
        const color = colors[Math.floor(Math.random() * colors.length)]

        particle.style.position = "absolute"
        particle.style.width = `${size}px`
        particle.style.height = `${size}px`
        particle.style.borderRadius = "50%"
        particle.style.backgroundColor = color
        particle.style.opacity = "0.3" // Lower opacity
        particle.style.left = `${Math.random() * 100}%`
        particle.style.top = `${Math.random() * 100}%`

        particles.appendChild(particle)

        gsap.to(particle, {
          x: Math.random() * 30 - 15, // Smaller movement range
          y: Math.random() * 20 - 10,
          opacity: 0,
          duration: 3 + Math.random() * 2, // Shorter duration
          ease: "power1.out",
          onComplete: () => {
            if (particles.contains(particle)) {
              particles.removeChild(particle)
            }
          },
        })
      }, 400) // Less frequent particles

      return () => {
        if (particleInterval) {
          clearInterval(particleInterval)
        }
      }
    }
  }, [])

  return (
    <Template title="Kickboxing (14+)">
      {/* Thin red accent line at the top */}
      <div className="h-1 w-full bg-gradient-to-r from-red-900 via-red-600 to-red-900"></div>

      {/* Hero Section - Horizontal Layout */}
      <div ref={heroRef} className="relative overflow-hidden py-8 flex items-center">
        {/* Particle effect container */}
        <div ref={particlesRef} className="absolute inset-0 pointer-events-none z-10"></div>

        {/* Background with subtle pattern and gradient */}
        <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-2 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90"></div>

        {/* Martial arts silhouettes - smaller and more subtle */}
        <div
          className="absolute bottom-0 right-0 w-32 h-32 bg-contain bg-no-repeat bg-right-bottom opacity-5"
          style={{ backgroundImage: "url('/karate-silhouette-1.png')" }}
        ></div>

        <div className="container relative mx-auto px-4 py-6 z-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left side - Text content */}
            <div className="w-full md:w-1/2 md:pr-8">
              <AnimatedElement type="fadeIn" delay={0.2}>
                <div className="inline-flex items-center space-x-2 mb-2">
                  <div className="h-px w-6 bg-red-500"></div>
                  <span className="text-red-400 uppercase tracking-wider text-xs font-semibold">Ages 14+</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-red-200">
                  <span className="text-red-600">Kickboxing</span> Program
                </h1>
                <div className="h-0.5 w-12 bg-gradient-to-r from-red-600 to-red-400 rounded-full mb-3"></div>
                <p className="text-sm text-gray-300 mb-4 max-w-lg">
                  A high-energy martial arts fitness program combining boxing, kicks, and conditioning for ages 14 and
                  up.
                </p>
              </AnimatedElement>

              {/* Stats - Horizontal compact row */}
              <AnimatedElement type="fadeIn" delay={0.3}>
                <div className="flex flex-wrap justify-between gap-2 mt-4 mb-4">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 bg-black/40 px-3 py-1.5 rounded-md border border-red-900/20"
                    >
                      <Calendar className="text-red-500" size={16} />
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-white">{stat.value}</span>
                        <span className="text-[10px] text-gray-400 uppercase tracking-wider">{stat.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedElement>
            </div>

            {/* Right side - Image */}
            <div className="w-full md:w-1/2 mt-6 md:mt-0">
              <AnimatedElement type="fadeIn" delay={0.4}>
                <div className="relative h-48 md:h-64 overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-black/40 z-10"></div>
                  <img
                    src="/Images/team/88A5D580-B43D-4916-92F9-2B8037264B27-rotated-e1724873881945.jpg"
                    alt="Kickboxing Class"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = "none"
                      const parent = target.parentElement
                      if (parent) {
                        parent.classList.add(
                          "bg-gradient-to-br",
                          "from-red-900/30",
                          "to-black",
                          "flex",
                          "items-center",
                          "justify-center",
                        )
                        const span = document.createElement("span")
                        span.className = "text-xl font-bold text-red-500/50"
                        span.textContent = "Kickboxing"
                        parent.appendChild(span)
                      }
                    }}
                  />
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </div>

      {/* Program Description - Two Column Layout */}
      <section className="py-6 relative">
        <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-2 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Program Overview - 2/3 width */}
            <div className="md:col-span-2 rounded-lg border border-red-900/30 bg-black/60 shadow-md backdrop-blur-sm p-4 hover:border-red-600/50 transition-all duration-300">
              <h2 className="text-lg font-bold text-white mb-2 flex items-center">
                <Award className="h-4 w-4 text-red-500 mr-2" />
                Program Overview
              </h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full mb-3"></div>

              <p className="text-xs text-gray-300 leading-relaxed mb-3">
                Our Kickboxing program at Seigler's Karate Center combines elements of boxing, Muay Thai, and
                traditional martial arts into an exciting, high-energy workout that develops functional striking skills
                while providing an exceptional cardiovascular training experience.
              </p>
              <p className="text-xs text-gray-300 leading-relaxed mb-3">
                Whether you're looking to get in shape, learn practical self-defense, or simply enjoy a fun and
                challenging workout, our kickboxing classes offer something for everyone. No previous martial arts
                experience is required—just bring your enthusiasm and willingness to learn!
              </p>
              <p className="text-xs text-gray-300 leading-relaxed">
                Each class incorporates pad work, bag drills, partner exercises, and conditioning to create a
                comprehensive training session that will leave you feeling empowered and energized.
              </p>
            </div>

            {/* Class Schedule - 1/3 width */}
            <div className="rounded-lg border border-red-900/30 bg-black/60 shadow-md backdrop-blur-sm p-4 hover:border-red-600/50 transition-all duration-300">
              <h2 className="text-lg font-bold text-white mb-2 flex items-center">
                <Calendar className="h-4 w-4 text-red-500 mr-2" />
                Class Schedule
              </h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full mb-3"></div>

              <div className="mb-4">
                <h3 className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-2">Evans Location</h3>
                <div className="space-y-1">
                  {schedule.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between py-1 border-b border-red-900/20 hover:border-red-600/30 transition-colors"
                    >
                      <span className="text-xs font-medium text-white">{item.day}</span>
                      <span className="text-xs text-gray-300">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-2">Grovetown Location</h3>
                <div className="space-y-1">
                  {schedule.map((item, index) => (
                    <div
                      key={`g-${index}`}
                      className="flex justify-between py-1 border-b border-red-900/20 hover:border-red-600/30 transition-colors"
                    >
                      <span className="text-xs font-medium text-white">{item.day}</span>
                      <span className="text-xs text-gray-300">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-6 relative">
        <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-2 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-lg font-bold text-white mb-4 flex items-center">
            <Shield className="h-4 w-4 text-red-500 mr-2" />
            Benefits for You
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full mb-4"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="rounded-lg border border-red-900/30 bg-black/60 shadow-md backdrop-blur-sm p-4 hover:border-red-600/50 transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="bg-red-900/20 p-2 rounded-full mr-3 flex-shrink-0">
                    <div className="bg-red-900/40 p-1.5 rounded-full text-red-400">{benefit.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1">{benefit.title}</h3>
                    <p className="text-xs text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-6 relative">
        <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-2 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="rounded-lg border border-red-900/30 bg-black/60 shadow-md backdrop-blur-sm p-4 hover:border-red-600/50 transition-all duration-300">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center">
              <Calendar className="h-4 w-4 text-red-500 mr-2" />
              What to Expect in Class
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full mb-4"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-bold text-white mb-2 flex items-center">
                  <div className="bg-red-900/20 p-1.5 rounded-full mr-2">
                    <Calendar className="h-3 w-3 text-red-500" />
                  </div>
                  Class Structure
                </h3>
                <ul className="space-y-1.5 text-xs text-gray-300">
                  <li className="flex items-start">
                    <svg
                      className="w-3 h-3 text-red-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Dynamic warm-up and joint mobility (10 min)</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-3 h-3 text-red-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Technical training - proper striking form (15 min)</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-3 h-3 text-red-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Combination work on pads/bags (15 min)</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-3 h-3 text-red-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Partner drills and defensive techniques (10 min)</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-3 h-3 text-red-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Conditioning exercises and cool-down (10 min)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold text-white mb-2 flex items-center">
                  <div className="bg-red-900/20 p-1.5 rounded-full mr-2">
                    <Heart className="h-3 w-3 text-red-500" />
                  </div>
                  What to Bring
                </h3>
                <ul className="space-y-1.5 text-xs text-gray-300">
                  <li className="flex items-start">
                    <svg
                      className="w-3 h-3 text-red-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Comfortable athletic clothing</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-3 h-3 text-red-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Hand wraps (can be purchased at our pro shop)</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-3 h-3 text-red-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Boxing gloves (16oz recommended, available for loan)</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-3 h-3 text-red-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Water bottle</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-3 h-3 text-red-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Towel (optional)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compact CTA Banner */}
      <section className="py-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900 to-red-700"></div>
        <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-3 md:mb-0">
              <h2 className="text-lg font-bold text-white">Ready to Transform Your Fitness Through Martial Arts?</h2>
              <p className="text-xs text-gray-100">
                Begin your kickboxing journey with a free introductory class at Seigler's Karate Center.
              </p>
            </div>
            <div className="flex space-x-2">
              <Link
                href="/contact"
                className="bg-white text-red-700 font-medium py-1.5 px-4 rounded text-xs shadow-md hover:bg-gray-100 transition-all duration-300"
              >
                Schedule a Free Class
                <ChevronRight className="ml-1 h-3 w-3 inline" />
              </Link>
              <Link
                href="/programs"
                className="bg-transparent border border-white text-white hover:bg-white/10 font-medium py-1.5 px-4 rounded text-xs transition-all duration-300"
              >
                View All Programs
                <ChevronRight className="ml-1 h-3 w-3 inline" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Template>
  )
}
