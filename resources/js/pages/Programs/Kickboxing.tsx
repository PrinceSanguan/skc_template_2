"use client"

import Template from "../About/Template"
import AnimatedElement from "@/components/ui/animated-element"
import { Link } from "@inertiajs/react"
import { ChevronRight } from "lucide-react"
import { useRef, useEffect } from "react"
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
      icon: (
        <svg
          className="w-10 h-10 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      title: "Stress Relief",
      description: "Channel negative energy and daily stress into powerful strikes and combinations.",
      icon: (
        <svg
          className="w-10 h-10 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Self-Defense Skills",
      description: "Learn practical striking techniques that work in real-world self-defense situations.",
      icon: (
        <svg
          className="w-10 h-10 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Confidence Building",
      description: "Develop mental toughness and self-assurance through challenging training and skill development.",
      icon: (
        <svg
          className="w-10 h-10 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ]

  // GSAP animations
  useEffect(() => {
    // Create particles
    if (particlesRef.current) {
      const particles = particlesRef.current
      const colors = ["#ff4b4b", "#ffffff", "#ff8080", "#ffcc00", "#ff6b6b"]
      const particleInterval = setInterval(() => {
        const particle = document.createElement("div")
        const size = Math.random() * 6 + 2
        const color = colors[Math.floor(Math.random() * colors.length)]

        particle.style.position = "absolute"
        particle.style.width = `${size}px`
        particle.style.height = `${size}px`
        particle.style.borderRadius = "50%"
        particle.style.backgroundColor = color
        particle.style.opacity = "0.4"
        particle.style.left = `${Math.random() * 100}%`
        particle.style.top = `${Math.random() * 100}%`

        particles.appendChild(particle)

        gsap.to(particle, {
          x: Math.random() * 50 - 25,
          y: Math.random() * 40 - 20,
          opacity: 0,
          duration: 4 + Math.random() * 3,
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
    <Template title="Kickboxing (14+)">
      {/* Hero Section */}
      <div ref={heroRef} className="relative overflow-hidden min-h-[60vh] flex items-center">
        {/* Particle effect container */}
        <div ref={particlesRef} className="absolute inset-0 pointer-events-none z-10"></div>

        {/* Background decorative elements */}
        <div className="absolute top-1/4 -right-10 w-40 h-40 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-red-600/15 rounded-full blur-2xl"></div>
        <div className="absolute right-0 top-1/2 w-24 h-24 bg-red-500/10 rounded-full blur-xl"></div>

        <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>

        {/* Hero image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/Images/team/88A5D580-B43D-4916-92F9-2B8037264B27-rotated-e1724873881945.jpg"
            alt="Kickboxing Class"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>

        {/* Martial arts silhouettes */}
        <div
          className="absolute bottom-0 right-0 w-64 h-64 bg-contain bg-no-repeat bg-right-bottom opacity-10"
          style={{ backgroundImage: "url('/karate-silhouette-1.png')" }}
        ></div>
        <div
          className="absolute top-0 left-0 w-48 h-48 bg-contain bg-no-repeat bg-left-top opacity-10"
          style={{ backgroundImage: "url('/karate-silhouette-2.png')" }}
        ></div>

        <div className="container relative mx-auto px-4 py-24 z-20">
          <AnimatedElement type="fadeIn" delay={0.2}>
            <div className="inline-flex items-center space-x-2 mb-4">
              <div className="h-px w-8 bg-red-500"></div>
              <span className="text-red-400 uppercase tracking-wider text-sm font-semibold">Ages 14+</span>
              <div className="h-px w-8 bg-red-500"></div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-red-200">
              <span className="text-red-600">Kickboxing</span> Program
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-red-600 to-red-400 rounded-full mt-2 mb-6"></div>
          </AnimatedElement>

          <AnimatedElement type="fadeIn" delay={0.3}>
            <p className="text-xl text-gray-200 max-w-xl leading-relaxed">
              A high-energy martial arts fitness program combining boxing, kicks, and conditioning for ages 14 and up.
            </p>
          </AnimatedElement>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Program Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <AnimatedElement type="slideInLeft" delay={0.4}>
            <div className="rounded-xl border border-red-900/30 bg-black/60 shadow-xl backdrop-blur-sm p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-6 relative inline-block">
                  Program Overview
                  <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
                </h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Our Kickboxing program at Seigler's Karate Center combines elements of boxing, Muay Thai, and
                  traditional martial arts into an exciting, high-energy workout that develops functional striking
                  skills while providing an exceptional cardiovascular training experience.
                </p>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Whether you're looking to get in shape, learn practical self-defense, or simply enjoy a fun and
                  challenging workout, our kickboxing classes offer something for everyone. No previous martial arts
                  experience is required—just bring your enthusiasm and willingness to learn!
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Each class incorporates pad work, bag drills, partner exercises, and conditioning to create a
                  comprehensive training session that will leave you feeling empowered and energized.
                </p>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement type="slideInRight" delay={0.4}>
            <div className="rounded-xl border border-red-900/30 bg-black/60 shadow-xl backdrop-blur-sm p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
              <div className="absolute -top-20 -left-20 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6 relative inline-block">
                  Class Schedule
                  <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
                </h3>

                <div className="mb-8">
                  <h4 className="font-semibold text-red-400 mb-3 text-lg">Evans Location</h4>
                  <div className="space-y-2">
                    {schedule.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between py-2 border-b border-red-900/20 hover:border-red-600/30 transition-colors"
                      >
                        <span className="font-medium text-white">{item.day}</span>
                        <span className="text-gray-300">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-red-400 mb-3 text-lg">Grovetown Location</h4>
                  <div className="space-y-2">
                    {schedule.map((item, index) => (
                      <div
                        key={`g-${index}`}
                        className="flex justify-between py-2 border-b border-red-900/20 hover:border-red-600/30 transition-colors"
                      >
                        <span className="font-medium text-white">{item.day}</span>
                        <span className="text-gray-300">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>

        {/* Program Benefits */}
        <AnimatedElement type="fadeIn" delay={0.5}>
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 mb-4 justify-center">
                <div className="h-px w-8 bg-red-500"></div>
                <span className="text-red-400 uppercase tracking-wider text-sm font-semibold">Skills Development</span>
                <div className="h-px w-8 bg-red-500"></div>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 relative inline-block">
                Program Benefits
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-red-900/30 bg-black/60 shadow-xl backdrop-blur-sm p-6 hover:border-red-600/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_6px_15px_rgba(220,38,38,0.2)] relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-red-600/5 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-red-600/5 rounded-full blur-xl"></div>

                  <div className="relative z-10">
                    <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedElement>

        {/* Skill Levels */}
        <AnimatedElement type="fadeIn" delay={0.6}>
          <div className="rounded-xl border border-red-900/30 bg-black/60 shadow-xl backdrop-blur-sm p-8 mb-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>

            {/* Martial arts silhouette */}
            <div
              className="absolute bottom-0 right-0 w-64 h-64 bg-contain bg-no-repeat bg-right-bottom opacity-10"
              style={{ backgroundImage: "url('/karate-silhouette-1.png')" }}
            ></div>

            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-8 relative inline-block">
                Skill Levels
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {["Beginner", "Intermediate", "Advanced"].map((level, index) => {
                  const descriptions = [
                    "Perfect for those new to martial arts or kickboxing. Focus on fundamental techniques, basic combinations, and building fitness foundations.",
                    "For students with some kickboxing experience who are ready to advance their skills and increase training intensity.",
                    "For experienced practitioners looking to refine their skills and train at peak intensity.",
                  ]

                  const skills = [
                    [
                      "Learn proper stance and basic striking",
                      "Develop coordination and balance",
                      "Build foundational fitness",
                    ],
                    [
                      "More complex striking combinations",
                      "Introduction to defensive techniques",
                      "Higher intensity conditioning",
                    ],
                    [
                      "Advanced combination work and timing",
                      "Technical sparring (optional)",
                      "Performance-level conditioning",
                    ],
                  ]

                  return (
                    <div key={index} className="bg-black/40 border border-red-900/20 rounded-xl p-6 backdrop-blur-sm">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-700 to-red-600 flex items-center justify-center mr-3 shadow-lg">
                          <span className="text-white font-bold">{index + 1}</span>
                        </div>
                        {level}
                      </h3>
                      <p className="text-gray-300 mb-4">{descriptions[index]}</p>
                      <ul className="space-y-3 text-gray-300">
                        {skills[index].map((skill, i) => (
                          <li key={i} className="flex items-start">
                            <svg
                              className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* Class Structure */}
        <AnimatedElement type="fadeIn" delay={0.6}>
          <div className="rounded-xl border border-red-900/30 bg-black/60 shadow-xl backdrop-blur-sm p-8 mb-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>

            {/* Martial arts silhouette */}
            <div
              className="absolute bottom-0 right-0 w-64 h-64 bg-contain bg-no-repeat bg-right-bottom opacity-10"
              style={{ backgroundImage: "url('/karate-silhouette-1.png')" }}
            ></div>

            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-8 relative inline-block">
                What to Expect in Class
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-700 to-red-600 flex items-center justify-center mr-3 shadow-lg">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                    </div>
                    Class Structure
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0"
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
                        className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0"
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
                        className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0"
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
                        className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0"
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
                        className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0"
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
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-700 to-red-600 flex items-center justify-center mr-3 shadow-lg">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                        />
                      </svg>
                    </div>
                    What to Bring
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0"
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
                        className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0"
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
                        className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0"
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
                        className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0"
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
                        className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Towel (optional)</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Mouthguard (for intermediate/advanced training)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* CTA */}
        <AnimatedElement type="fadeIn" delay={0.7}>
          <div className="relative rounded-xl overflow-hidden mb-8">
            {/* Background with overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-900 to-red-700"></div>
            <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-10 mix-blend-overlay"></div>

            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-red-600/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-red-600/20 rounded-full blur-3xl"></div>

            {/* Martial arts silhouettes */}
            <div
              className="absolute bottom-0 right-0 w-64 h-64 bg-contain bg-no-repeat bg-right-bottom opacity-10"
              style={{ backgroundImage: "url('/karate-silhouette-1.png')" }}
            ></div>

            {/* Content */}
            <div className="relative z-10 p-10 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Kickstart Your Fitness Journey?</h2>
              <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
                Experience the ultimate full-body workout that builds strength, confidence, and real-world skills. Join
                us for a free introductory class today!
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-x-0 sm:space-x-4 gap-y-4 sm:gap-y-0">
                <Link
                  href="/contact"
                  className="bg-white text-red-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-md text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center mx-0 sm:mr-3"
                >
                  Try Your First Class FREE
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/programs"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-md text-lg transition-all duration-300 flex items-center justify-center mx-0"
                >
                  View All Programs
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </Template>
  )
}
