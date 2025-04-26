"use client"

import Template from "../About/Template"
import AnimatedElement from "@/components/ui/animated-element"
import { Link } from "@inertiajs/react"
import { useRef, useEffect } from "react"
import { ChevronRight } from "lucide-react"
import gsap from "gsap"

export default function LilDragons() {
  const particlesRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)

  // Sample class schedule
  const schedule = [
    { day: "Monday", time: "4:30 PM - 5:15 PM" },
    { day: "Wednesday", time: "4:30 PM - 5:15 PM" },
    { day: "Saturday", time: "9:00 AM - 9:45 AM" },
  ]

  // Program benefits
  const benefits = [
    {
      title: "Improved Focus",
      description: "Activities designed to improve attention span and listening skills in young children.",
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
      title: "Motor Skills Development",
      description: "Fun exercises that enhance coordination, balance, and agility in a safe environment.",
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
    {
      title: "Social Skills",
      description: "Encouraging teamwork, respect, and positive interaction with peers and instructors.",
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
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
    {
      title: "Confidence Building",
      description: "Age-appropriate challenges that build self-esteem and a sense of accomplishment.",
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
            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
          />
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
    <Template title="Lil Dragons (4-5)">
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
            src="/Images/team/TN-Lil-Dragons.jpg"
            alt="Lil Dragons Karate Class"
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
              <span className="text-red-400 uppercase tracking-wider text-sm font-semibold">Ages 4-5</span>
              <div className="h-px w-8 bg-red-500"></div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-red-200">
              Lil <span className="text-red-600">Dragons</span> Program
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-red-600 to-red-400 rounded-full mt-2 mb-6"></div>
          </AnimatedElement>

          <AnimatedElement type="fadeIn" delay={0.3}>
            <p className="text-xl text-gray-200 max-w-xl leading-relaxed">
              A fun and engaging martial arts program designed especially for children ages 4-5, focusing on developing
              essential life skills in a supportive environment.
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
                  The Lil Dragons program at Seigler's Karate Center is specifically designed for young children aged
                  4-5, focusing on developing essential life skills through martial arts in a fun, engaging environment.
                </p>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Our experienced instructors understand how young children learn and have created age-appropriate
                  classes that capture their attention while teaching valuable skills that will benefit them throughout
                  their lives.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Through games, activities, and basic martial arts techniques, children develop coordination, balance,
                  focus, and social skills while having a great time. Our supportive environment ensures every child
                  feels successful and builds confidence with each class.
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
                Benefits for Your Child
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

        {/* What to Expect */}
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
                      <span>Warm-up games and exercises</span>
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
                      <span>Basic martial arts techniques</span>
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
                      <span>Coordination and balance activities</span>
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
                      <span>Focus and listening exercises</span>
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
                      <span>Fun cool-down activities</span>
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
                      <span>Comfortable clothing for first class (uniform can be purchased later)</span>
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
                      <span>Positive attitude and willingness to have fun!</span>
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
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Give Your Child the Gift of Martial Arts?</h2>
              <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
                Start your child's martial arts journey with a free introductory class at Seigler's Karate Center. See
                firsthand how our Lil Dragons program can benefit your child's development.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-x-0 sm:space-x-4 gap-y-4 sm:gap-y-0">
                <Link
                  href="/contact"
                  className="bg-white text-red-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-md text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center mx-0 sm:mr-3"
                >
                  Schedule a Free Class
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
