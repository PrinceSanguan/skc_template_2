"use client"

import Template from "../About/Template"
import AnimatedElement from "@/components/ui/animated-element"
import { Link } from "@inertiajs/react"
import { useRef, useEffect } from "react"
import { ChevronRight, Shield, Brain, Dumbbell, Users, Award, Clock, Calendar, Target } from "lucide-react"
import gsap from "gsap"

export default function TeensKarate() {
  const particlesRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)

  // Sample class schedule
  const schedule = [
    { day: "Tuesday", time: "6:00 PM - 7:15 PM" },
    { day: "Thursday", time: "6:00 PM - 7:15 PM" },
    { day: "Saturday", time: "10:00 AM - 11:15 AM" },
  ]

  // Program benefits
  const benefits = [
    {
      title: "Self-Confidence",
      description:
        "Build genuine self-esteem through progressive skill development and overcoming challenges in a supportive environment.",
      icon: <Award className="w-5 h-5" />,
    },
    {
      title: "Mental Focus",
      description:
        "Develop concentration and mental discipline that translates to improved academic performance and goal achievement.",
      icon: <Brain className="w-5 h-5" />,
    },
    {
      title: "Physical Fitness",
      description:
        "Build strength, flexibility, coordination, and endurance through dynamic workouts designed for growing teen bodies.",
      icon: <Dumbbell className="w-5 h-5" />,
    },
    {
      title: "Leadership Skills",
      description:
        "Develop responsibility, integrity and leadership qualities through structured martial arts training and mentoring opportunities.",
      icon: <Users className="w-5 h-5" />,
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
          x: Math.random() * 40 - 20, // Less movement
          y: Math.random() * 30 - 15,
          opacity: 0,
          duration: 3 + Math.random() * 2,
          ease: "power1.out",
          onComplete: () => {
            if (particles.contains(particle)) {
              particles.removeChild(particle)
            }
          },
        })
      }, 400) // Slower interval

      return () => {
        if (particleInterval) {
          clearInterval(particleInterval)
        }
      }
    }
  }, [])

  return (
    <Template title="Teens Karate (11-13)">
      {/* Thin red line at top */}
      <div className="h-1 w-full bg-gradient-to-r from-red-700 via-red-600 to-red-700"></div>

      {/* Hero Section */}
      <div ref={heroRef} className="relative overflow-hidden py-8">
        {/* Particle effect container */}
        <div ref={particlesRef} className="absolute inset-0 pointer-events-none z-10"></div>

        {/* Background decorative elements */}
        <div className="absolute top-1/4 -right-10 w-40 h-40 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-red-600/15 rounded-full blur-2xl"></div>
        <div className="absolute right-0 top-1/2 w-24 h-24 bg-red-500/10 rounded-full blur-xl"></div>

        <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>

        <div className="container relative mx-auto px-4 z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <AnimatedElement type="fadeIn" delay={0.2}>
              <div>
                <div className="inline-flex items-center space-x-2 mb-3">
                  <div className="h-px w-6 bg-red-500"></div>
                  <span className="text-red-400 uppercase tracking-wider text-xs font-semibold">Ages 11-13</span>
                  <div className="h-px w-6 bg-red-500"></div>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-red-200">
                  Teens <span className="text-red-600">Karate</span> Program
                </h1>
                <div className="h-1 w-16 bg-gradient-to-r from-red-600 to-red-400 rounded-full mt-1 mb-4"></div>

                <p className="text-base text-gray-200 leading-relaxed mb-6">
                  Building confidence, discipline and strength in teens ages 11-13 through specialized martial arts
                  training designed for adolescent development.
                </p>

                {/* Quick stats */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="bg-black/40 border border-red-900/30 rounded-lg p-2 backdrop-blur-sm">
                    <div className="flex items-center mb-1">
                      <Clock className="w-4 h-4 text-red-500 mr-2" />
                      <span className="text-white text-xs font-medium">Class Duration</span>
                    </div>
                    <p className="text-gray-300 text-xs">75 Minutes</p>
                  </div>
                  <div className="bg-black/40 border border-red-900/30 rounded-lg p-2 backdrop-blur-sm">
                    <div className="flex items-center mb-1">
                      <Calendar className="w-4 h-4 text-red-500 mr-2" />
                      <span className="text-white text-xs font-medium">Classes Per Week</span>
                    </div>
                    <p className="text-gray-300 text-xs">2-3 Recommended</p>
                  </div>
                  <div className="bg-black/40 border border-red-900/30 rounded-lg p-2 backdrop-blur-sm">
                    <div className="flex items-center mb-1">
                      <Target className="w-4 h-4 text-red-500 mr-2" />
                      <span className="text-white text-xs font-medium">Focus Areas</span>
                    </div>
                    <p className="text-gray-300 text-xs">Technique & Leadership</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-[0_4px_10px_rgba(220,38,38,0.3)] hover:shadow-[0_6px_15px_rgba(220,38,38,0.4)] transform hover:-translate-y-1 flex items-center justify-center text-sm"
                  >
                    Schedule a Free Class
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                  <Link
                    href="/programs"
                    className="bg-transparent border border-red-600/50 text-white hover:bg-red-600/10 font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center text-sm"
                  >
                    View All Programs
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement type="fadeIn" delay={0.3}>
              <div className="relative rounded-xl overflow-hidden shadow-xl border border-red-900/30 h-[280px] lg:h-[320px]">
                <img
                  src="/Images/team/TN-Teen-Karate.jpg"
                  alt="Teens Karate Class"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="flex items-center gap-2 text-white">
                    <Shield className="h-4 w-4 text-red-500" />
                    <span className="font-medium text-sm">Building tomorrow's leaders through martial arts</span>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Program Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          <AnimatedElement type="fadeIn" delay={0.4} className="lg:col-span-8">
            <div className="rounded-xl border border-red-900/30 bg-black/60 shadow-lg backdrop-blur-sm p-4 relative overflow-hidden h-full">
              <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <h2 className="text-xl font-bold text-white mb-3 relative inline-block">
                  Program Overview
                  <div className="absolute -bottom-1 left-0 w-10 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
                </h2>
                <p className="text-gray-300 mb-3 leading-relaxed text-sm">
                  Our Teens Karate program at Seigler's Karate Center is specifically designed for the unique needs of
                  adolescents aged 11-13, addressing both their physical development and emotional growth during this
                  important transitional period.
                </p>
                <p className="text-gray-300 mb-3 leading-relaxed text-sm">
                  Teens at this age are developing their identities and facing new challenges. Our program combines
                  dynamic physical training with mental discipline, helping students build confidence, focus, and
                  resilience while learning practical self-defense skills.
                </p>
                <p className="text-gray-300 leading-relaxed text-sm">
                  Our experienced instructors understand how to connect with and motivate teens, creating a positive
                  peer environment where students can challenge themselves, develop leadership skills, and form
                  friendships based on mutual respect and shared goals.
                </p>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement type="fadeIn" delay={0.4} className="lg:col-span-4">
            <div className="rounded-xl border border-red-900/30 bg-black/60 shadow-lg backdrop-blur-sm p-4 relative overflow-hidden h-full">
              <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
              <div className="absolute -top-20 -left-20 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <h3 className="text-lg font-bold text-white mb-3 relative inline-block">
                  Class Schedule
                  <div className="absolute -bottom-1 left-0 w-10 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
                </h3>

                <div className="mb-4">
                  <h4 className="font-semibold text-red-400 mb-2 text-xs">Evans Location</h4>
                  <div className="space-y-1">
                    {schedule.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between py-1.5 border-b border-red-900/20 hover:border-red-600/30 transition-colors"
                      >
                        <span className="font-medium text-white text-xs">{item.day}</span>
                        <span className="text-gray-300 text-xs">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-red-400 mb-2 text-xs">Grovetown Location</h4>
                  <div className="space-y-1">
                    {schedule.map((item, index) => (
                      <div
                        key={`g-${index}`}
                        className="flex justify-between py-1.5 border-b border-red-900/20 hover:border-red-600/30 transition-colors"
                      >
                        <span className="font-medium text-white text-xs">{item.day}</span>
                        <span className="text-gray-300 text-xs">{item.time}</span>
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
          <div className="mb-12">
            <div className="text-center mb-6">
              <div className="inline-flex items-center space-x-2 mb-2 justify-center">
                <div className="h-px w-5 bg-red-500"></div>
                <span className="text-red-400 uppercase tracking-wider text-xs font-semibold">Skills Development</span>
                <div className="h-px w-5 bg-red-500"></div>
              </div>
              <h2 className="text-xl font-bold text-white mb-2 relative inline-block">
                Benefits for Teens
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-red-900/30 bg-black/60 shadow-lg backdrop-blur-sm p-4 hover:border-red-600/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(220,38,38,0.2)] relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-red-600/5 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-red-600/5 rounded-full blur-xl"></div>

                  <div className="relative z-10">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-700 to-red-600 flex items-center justify-center mb-3 shadow-md group-hover:shadow-red-500/20 transition-all duration-300 group-hover:scale-110">
                      {benefit.icon}
                    </div>
                    <h3 className="text-base font-semibold text-white mb-1">{benefit.title}</h3>
                    <p className="text-gray-300 text-xs">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedElement>

        {/* What to Expect */}
        <AnimatedElement type="fadeIn" delay={0.6}>
          <div className="rounded-xl border border-red-900/30 bg-black/60 shadow-lg backdrop-blur-sm p-4 mb-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>

            {/* Martial arts silhouette */}
            <div
              className="absolute bottom-0 right-0 w-48 h-48 bg-contain bg-no-repeat bg-right-bottom opacity-10"
              style={{ backgroundImage: "url('/karate-silhouette-1.png')" }}
            ></div>

            <div className="relative z-10">
              <h2 className="text-xl font-bold text-white mb-4 relative inline-block">
                What to Expect in Class
                <div className="absolute -bottom-1 left-0 w-10 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-base font-semibold text-white mb-2 flex items-center">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-r from-red-700 to-red-600 flex items-center justify-center mr-2 shadow-md">
                      <svg
                        className="w-3.5 h-3.5 text-white"
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
                    Curriculum Highlights
                  </h3>
                  <ul className="space-y-1.5 text-gray-300 text-xs">
                    <li className="flex items-start">
                      <svg
                        className="w-3.5 h-3.5 text-red-500 mr-1.5 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Advanced striking and blocking techniques</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-3.5 h-3.5 text-red-500 mr-1.5 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Traditional and modern kata (forms)</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-3.5 h-3.5 text-red-500 mr-1.5 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Controlled sparring and self-defense scenarios</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-3.5 h-3.5 text-red-500 mr-1.5 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Physical conditioning and agility training</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-3.5 h-3.5 text-red-500 mr-1.5 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Leadership and mentoring opportunities</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white mb-2 flex items-center">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-r from-red-700 to-red-600 flex items-center justify-center mr-2 shadow-md">
                      <svg
                        className="w-3.5 h-3.5 text-white"
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
                    Advancement Path
                  </h3>
                  <ul className="space-y-1.5 text-gray-300 text-xs">
                    <li className="flex items-start">
                      <svg
                        className="w-3.5 h-3.5 text-red-500 mr-1.5 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Belt progression with regular testing opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-3.5 h-3.5 text-red-500 mr-1.5 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Tournament competition opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-3.5 h-3.5 text-red-500 mr-1.5 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Junior instructor program for advanced students</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-3.5 h-3.5 text-red-500 mr-1.5 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Special workshops and training camps</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* CTA */}
        <AnimatedElement type="fadeIn" delay={0.7}>
          <div className="relative rounded-xl overflow-hidden mb-6">
            {/* Background with overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-900 to-red-700"></div>
            <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-10 mix-blend-overlay"></div>

            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-red-600/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-red-600/20 rounded-full blur-3xl"></div>

            {/* Content */}
            <div className="relative z-10 p-4 md:p-6 flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-4 md:mb-0 md:pr-4">
                <h2 className="text-xl font-bold text-white mb-2">Help Your Teen Develop Confidence and Character</h2>
                <p className="text-gray-100 text-xs md:text-sm">
                  Begin your teen's martial arts journey with a free introductory class at Seigler's Karate Center. See
                  firsthand how our Teens Karate program can help navigate the challenges of adolescence.
                </p>
              </div>
              <div className="md:w-1/3 flex flex-col sm:flex-row md:flex-col gap-2">
                <Link
                  href="/contact"
                  className="bg-white text-red-700 hover:bg-gray-100 font-medium py-1.5 px-4 rounded-md text-xs shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
                >
                  Schedule a Free Class
                  <ChevronRight className="ml-1 h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/programs"
                  className="bg-transparent border border-white text-white hover:bg-white/10 font-medium py-1.5 px-4 rounded-md text-xs transition-all duration-300 flex items-center justify-center"
                >
                  View All Programs
                  <ChevronRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </Template>
  )
}
