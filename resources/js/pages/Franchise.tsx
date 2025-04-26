"use client"

import type React from "react"

import { Head } from "@inertiajs/react"
import { useEffect, useRef, useState } from "react"
import Navbar from "@/components/welcomePage/Navbar"
import Footer from "@/components/welcomePage/Footer"
import { initScrollAnimations } from "@/utils/animations"
import AnimatedElement from "@/components/ui/animated-element"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Franchise() {
  const headerRef = useRef<HTMLHeadingElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const fireParticlesRef = useRef<HTMLDivElement>(null)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    message: "",
  })
  const [formFocus, setFormFocus] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleInputFocus = (name: string) => {
    setFormFocus(name)
  }

  const handleInputBlur = () => {
    setFormFocus(null)
  }

  useEffect(() => {
    // Set images as loaded after component mounts to prevent hydration issues
    setImagesLoaded(true)

    // Initialize animations when component mounts
    initScrollAnimations()

    // Simple fade-in animation for the header
    if (headerRef.current) {
      gsap.from(headerRef.current, {
        opacity: 0,
        y: -30,
        duration: 1,
        ease: "power3.out",
      })
    }

    // Create fire particles animation for the header
    if (fireParticlesRef.current) {
      const particles = fireParticlesRef.current
      const colors = ["#ff4b4b", "#ff8c42", "#ffdc5e", "#ff6b6b", "#ff3333"]
      const particleInterval = setInterval(() => {
        const particle = document.createElement("div")
        const size = Math.random() * 6 + 2
        const color = colors[Math.floor(Math.random() * colors.length)]

        particle.style.position = "absolute"
        particle.style.width = `${size}px`
        particle.style.height = `${size}px`
        particle.style.borderRadius = "50%"
        particle.style.backgroundColor = color
        particle.style.opacity = "0.6"
        particle.style.left = `${Math.random() * 100}%`
        particle.style.bottom = "0"

        particles.appendChild(particle)

        gsap.to(particle, {
          x: Math.random() * 50 - 25,
          y: -(Math.random() * 80 + 40),
          opacity: 0,
          duration: 2 + Math.random() * 2,
          ease: "power1.out",
          onComplete: () => {
            if (particles.contains(particle)) {
              particles.removeChild(particle)
            }
          },
        })
      }, 200)

      return () => {
        if (particleInterval) {
          clearInterval(particleInterval)
        }
      }
    }
  }, [])

  return (
    <>
      <Head title="Franchise Opportunity | Seigler's Karate Center">
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
      </Head>

      <div className="flex min-h-screen flex-col bg-black text-white">
        <Navbar />

        {/* Main content */}
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
            {/* Background image with overlay */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black z-10"></div>
              {imagesLoaded && (
                <img src="/Images/team/63d03cc126d6cd7584f54e0c-1-1024x576.png" alt="Martial arts training" className="w-full h-full object-cover" />
              )}
            </div>

            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Red blur elements */}
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600 rounded-full filter blur-[100px] opacity-20 animate-pulse"></div>
              <div
                className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-red-700 rounded-full filter blur-[120px] opacity-15 animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>

              {/* Japanese-inspired decorative elements */}
              <div className="absolute top-20 left-10 w-40 h-40">
                <div className="absolute inset-0 border-2 border-red-500 opacity-20 rounded-full"></div>
                <div className="absolute inset-4 border border-red-500 opacity-15 rounded-full"></div>
                <div className="absolute inset-8 border border-red-500 opacity-10 rounded-full"></div>
              </div>
              <div className="absolute bottom-20 right-10 w-40 h-40">
                <div className="absolute inset-0 border-2 border-red-500 opacity-20 rounded-full"></div>
                <div className="absolute inset-4 border border-red-500 opacity-15 rounded-full"></div>
                <div className="absolute inset-8 border border-red-500 opacity-10 rounded-full"></div>
              </div>
            </div>

            {/* Fire particles container */}
            <div
              ref={fireParticlesRef}
              className="absolute inset-x-0 bottom-0 h-40 pointer-events-none overflow-hidden z-20"
            ></div>

            {/* Martial arts silhouette elements */}
            <div
              className="absolute bottom-0 right-0 w-64 h-64 bg-contain bg-no-repeat bg-right-bottom z-0 opacity-10"
              style={{ backgroundImage: "url('/karate-silhouette-1.png')" }}
            ></div>
            <div
              className="absolute top-0 left-0 w-48 h-48 bg-contain bg-no-repeat bg-left-top z-0 opacity-10"
              style={{ backgroundImage: "url('/karate-silhouette-2.png')" }}
            ></div>

            {/* Japanese pattern overlay */}
            <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay z-0"></div>

            {/* Hero Content */}
            <div className="container mx-auto px-4 z-20 relative">
              <div className="max-w-4xl mx-auto text-center">
                <h1
                  ref={headerRef}
                  className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white"
                >
                  SEIZE THE SKC FRANCHISE OPPORTUNITY
                </h1>
                <div className="w-32 h-1 bg-gradient-to-r from-red-700 to-red-500 mx-auto mb-6"></div>
                <p className="text-xl mb-8 text-gray-200">
                  A LONGSTANDING LEGACY, EXPERT LEADERSHIP, DIVERSE REVENUE STREAMS,
                  <br className="hidden md:block" />
                  AND A COMMITMENT TO COMMUNITY IMPACT
                </p>
                <div className="text-center">
                  <a
                    href="#download-brochure"
                    className="inline-block bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 px-8 py-4 rounded-md text-lg font-semibold text-white transition-all duration-300 shadow-[0_4px_15px_rgba(220,38,38,0.4)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.6)] hover:-translate-y-1"
                  >
                    DOWNLOAD OUR BROCHURE
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom wave pattern for natural transition */}
            <div className="absolute bottom-0 left-0 right-0 h-16 z-10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div
                className="absolute bottom-0 left-0 right-0 h-32 opacity-10"
                style={{
                  backgroundImage: "url('/wave-pattern.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center bottom",
                  transform: "scaleY(0.5)",
                }}
              ></div>
            </div>
          </section>

          {/* Discover Section */}
          <section className="py-20 bg-gradient-to-b from-black via-black/95 to-black/90 relative overflow-hidden">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 to-transparent z-0"></div>

            {/* Japanese pattern overlay */}
            <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay z-0"></div>

            <div className="container mx-auto px-4 relative z-10">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <AnimatedElement type="fadeIn" delay={0.2}>
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-tr from-red-600 to-red-900 rounded-lg blur-sm opacity-70"></div>
                    {imagesLoaded ? (
                      <img
                        src="/Images/team/Copy-of-IMG_9985-1-scaled-1.jpg"
                        alt="SKC Students"
                        className="w-full h-auto object-cover rounded-lg relative z-10"
                      />
                    ) : (
                      <div className="w-full h-[400px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg relative z-10 flex items-center justify-center">
                        <svg className="w-12 h-12 text-red-500 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </AnimatedElement>

                <AnimatedElement type="fadeIn" delay={0.3}>
                  <div>
                    <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white">
                      DISCOVER THE SKC FRANCHISE OPPORTUNITY
                    </h2>
                    <div className="w-24 h-0.5 bg-gradient-to-r from-red-700 to-red-500 mb-6"></div>
                    <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-red-800/20 shadow-[0_4px_20px_rgba(0,0,0,0.5),_0_0_15px_rgba(220,38,38,0.2)]">
                      <p className="text-gray-300 mb-4">
                        As Augusta's top martial arts school, SKC offers a supportive community where students of all
                        ages can learn from expert instructors in a safe, exciting environment. Our diverse programs
                        include karate, kickboxing and jiu-jitsu to ensure broad market appeal and consistent revenue
                        streams.
                      </p>
                      <p className="text-gray-300 mb-4">
                        Since 1982, Seigler's Karate Center has built a legacy of excellence with sustained growth and
                        profitability. Serving over 500 students and generating over $1 million annually for the past 14
                        years, SKC's proven business model and track record ensures long-term success and stability.
                      </p>
                      <p className="text-gray-300">
                        Invest in a franchise with a rich history and a commitment to community impact. Join the SKC
                        legacy to get into the business of changing lives and building leaders!
                      </p>
                    </div>
                    <div className="mt-8 text-center">
                      <a
                        href="#download-brochure"
                        className="inline-block bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 px-6 py-3 rounded-md font-semibold text-white transition-all duration-300 shadow-[0_4px_10px_rgba(220,38,38,0.3)] hover:shadow-[0_6px_15px_rgba(220,38,38,0.4)] hover:-translate-y-1"
                      >
                        DOWNLOAD OUR BROCHURE
                      </a>
                    </div>
                  </div>
                </AnimatedElement>
              </div>
            </div>

            {/* Bottom decorative element for natural transition */}
            <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-0.5 bg-gradient-to-r from-transparent via-red-600/20 to-transparent"></div>
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-64 h-0.5 bg-gradient-to-r from-transparent via-red-600/10 to-transparent"></div>
            </div>
          </section>

          {/* Key Franchise Insights Section */}
          <section className="py-20 bg-gradient-to-b from-black/90 via-black/95 to-black relative overflow-hidden">
            {/* Japanese pattern overlay */}
            <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay z-0"></div>

            {/* Martial arts silhouette elements */}
            <div
              className="absolute bottom-0 right-0 w-64 h-64 bg-contain bg-no-repeat bg-right-bottom z-0 opacity-10"
              style={{ backgroundImage: "url('/karate-silhouette-1.png')" }}
            ></div>

            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white mb-2">
                  KEY FRANCHISE INSIGHTS
                </h2>
                <div className="w-32 h-0.5 bg-gradient-to-r from-red-700 to-red-500 mx-auto mb-8"></div>

                <div className="grid grid-cols-2 gap-8 max-w-md mx-auto mb-16">
                  <div className="text-center bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-red-800/20 shadow-[0_4px_20px_rgba(0,0,0,0.5),_0_0_15px_rgba(220,38,38,0.2)]">
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 mb-1">
                      $40,000
                    </div>
                    <div className="text-gray-300">Initial Franchise Fee</div>
                  </div>
                  <div className="text-center bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-red-800/20 shadow-[0_4px_20px_rgba(0,0,0,0.5),_0_0_15px_rgba(220,38,38,0.2)]">
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 mb-1">
                      $110,000
                    </div>
                    <div className="text-gray-300">Minimum Estimated Cost</div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <AnimatedElement type="fadeInUp" delay={0.3}>
                  <div className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.5),_0_0_15px_rgba(220,38,38,0.2)] border border-red-900/20 hover:-translate-y-1 transition-all duration-300">
                    <div className="h-64 overflow-hidden relative">
                      {imagesLoaded ? (
                        <img
                          src="/Images/team/Copy-of-IMG_0115-1-scaled-1-1024x683 (1).jpg"
                          alt="SKC Support"
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                          <svg className="w-12 h-12 text-red-500 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    <div className="p-6 relative">
                      <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 mb-2">
                        OUR SUPPORT
                      </h3>
                      <div className="w-16 h-0.5 bg-gradient-to-r from-red-700 to-red-500 mb-3"></div>
                      <p className="text-gray-300">
                        SKC provides continuous training and guidance ensuring franchisees are fully equipped to
                        succeed. Our team of renowned experts fosters professional and personal growth, helping
                        franchisees to develop leadership skills, discipline, and a sense of accomplishment.
                      </p>
                    </div>
                  </div>
                </AnimatedElement>

                <AnimatedElement type="fadeInUp" delay={0.5}>
                  <div className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.5),_0_0_15px_rgba(220,38,38,0.2)] border border-red-900/20 hover:-translate-y-1 transition-all duration-300">
                    <div className="h-64 overflow-hidden relative">
                      {imagesLoaded ? (
                        <img
                          src="/Images/team/Copy-of-IMG_8401-1-scaled-1-1024x683 (1).jpg"
                          alt="SKC Mission"
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                          <svg className="w-12 h-12 text-red-500 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    <div className="p-6 relative">
                      <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 mb-2">
                        OUR MISSION
                      </h3>
                      <div className="w-16 h-0.5 bg-gradient-to-r from-red-700 to-red-500 mb-3"></div>
                      <p className="text-gray-300">
                        At SKC Franchise, we're driven by a mission to empower franchisees to excel in their business
                        while fostering positive local change. Our goal is to cultivate a network of passionate leaders
                        who are dedicated to advancing martial arts excellence and contributing to their communities.
                      </p>
                    </div>
                  </div>
                </AnimatedElement>

                <AnimatedElement type="fadeInUp" delay={0.7}>
                  <div className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.5),_0_0_15px_rgba(220,38,38,0.2)] border border-red-900/20 hover:-translate-y-1 transition-all duration-300">
                    <div className="h-64 overflow-hidden relative">
                      {imagesLoaded ? (
                        <img
                          src="/Images/team/Copy-of-IMG_8865-2-scaled-1-1024x683.jpg"
                          alt="Ideal Franchisee"
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                          <svg className="w-12 h-12 text-red-500 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    <div className="p-6 relative">
                      <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 mb-2">
                        IDEAL FRANCHISEE
                      </h3>
                      <div className="w-16 h-0.5 bg-gradient-to-r from-red-700 to-red-500 mb-3"></div>
                      <p className="text-gray-300">
                        SKC Franchise is seeking partners who are passionate about and have a background in martial
                        arts. Ideal candidates should bring a genuine enthusiasm for the SKC culture and skills in
                        building relationships and connecting with clients. If you're eager to grow with us and embrace
                        our mission, we want you to join the SKC family!
                      </p>
                    </div>
                  </div>
                </AnimatedElement>
              </div>
            </div>

            {/* Bottom decorative element for natural transition */}
            <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
              <div
                className="absolute bottom-0 left-0 right-0 h-24 opacity-10"
                style={{
                  backgroundImage: "url('/wave-pattern.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center bottom",
                  transform: "scaleY(0.5) scaleX(-1)",
                }}
              ></div>
            </div>
          </section>

          {/* Commitment Section */}
          <section className="py-20 bg-gradient-to-b from-black via-red-950/5 to-black relative overflow-hidden">
            {/* Japanese pattern overlay */}
            <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay z-0"></div>

            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Red blur elements */}
              <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-red-600 rounded-full filter blur-[100px] opacity-10 animate-pulse"></div>
              <div
                className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-red-700 rounded-full filter blur-[120px] opacity-10 animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>

              {/* Japanese-inspired decorative elements */}
              <div className="absolute top-20 right-10 w-40 h-40">
                <div className="absolute inset-0 border-2 border-red-500 opacity-10 rounded-full"></div>
                <div className="absolute inset-4 border border-red-500 opacity-8 rounded-full"></div>
                <div className="absolute inset-8 border border-red-500 opacity-5 rounded-full"></div>
              </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white mb-2">
                  THE SKC COMMITMENT TO YOUR SUCCESS
                </h2>
                <div className="w-32 h-0.5 bg-gradient-to-r from-red-700 to-red-500 mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <AnimatedElement type="fadeIn" delay={0.3}>
                  <div className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.5),_0_0_15px_rgba(220,38,38,0.2)] border border-red-900/20 hover:-translate-y-1 transition-all duration-300 h-full">
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 mb-2">
                        OPERATIONAL SUPPORT
                      </h3>
                      <div className="w-16 h-0.5 bg-gradient-to-r from-red-700 to-red-500 mb-4"></div>
                      <p className="text-gray-300 mb-6">
                        The SKC family provides robust support across all facets of your franchise operations. From day
                        one, you'll receive ongoing assistance covering everything from the technical training to
                        administrative procedures.
                      </p>
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-tr from-red-600/20 to-red-900/20 rounded-lg blur-sm"></div>
                        {imagesLoaded && (
                          <img
                            src="/Images/team/Copy-of-IMG_3576-scaled-2-1024x683.jpg"
                            alt="Operational Support"
                            className="w-full h-auto rounded-lg relative z-10"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </AnimatedElement>

                <AnimatedElement type="fadeIn" delay={0.5}>
                  <div className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.5),_0_0_15px_rgba(220,38,38,0.2)] border border-red-900/20 hover:-translate-y-1 transition-all duration-300 h-full">
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 mb-2">
                        MARKETING SUPPORT
                      </h3>
                      <div className="w-16 h-0.5 bg-gradient-to-r from-red-700 to-red-500 mb-4"></div>
                      <p className="text-gray-300 mb-6">
                        SKC Franchise provides advertising materials and strategies refined over years of experience to
                        drive student enrollment and retention. This ensures our franchisees have the resources to
                        effectively attract and engage clients.
                      </p>
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-tr from-red-600/20 to-red-900/20 rounded-lg blur-sm"></div>
                        {imagesLoaded && (
                          <img
                            src="/Images/team/63d03cc126d6cd7584f54e0c-1-1024x576.png"
                            alt="Marketing Support"
                            className="w-full h-auto rounded-lg relative z-10"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </AnimatedElement>

                <AnimatedElement type="fadeIn" delay={0.7}>
                  <div className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.5),_0_0_15px_rgba(220,38,38,0.2)] border border-red-900/20 hover:-translate-y-1 transition-all duration-300 h-full">
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 mb-2">
                        COMPREHENSIVE TRAINING
                      </h3>
                      <div className="w-16 h-0.5 bg-gradient-to-r from-red-700 to-red-500 mb-4"></div>
                      <p className="text-gray-300 mb-6">
                        Our program includes six weeks of initial hands-on and video instruction at our Georgia HQ. Upon
                        opening, you'll receive an additional week of on-site coaching to ensure a smooth transition and
                        continued success.
                      </p>
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-tr from-red-600/20 to-red-900/20 rounded-lg blur-sm"></div>
                        {imagesLoaded && (
                          <img
                            src="/Images/team/88A5D580-B43D-4916-92F9-2B8037264B27-rotated-e1724873881945.jpg"
                            alt="Comprehensive Training"
                            className="w-full h-auto rounded-lg relative z-10"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </AnimatedElement>
              </div>
            </div>

            {/* Bottom decorative element for natural transition */}
            <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-0.5 bg-gradient-to-r from-transparent via-red-600/20 to-transparent"></div>
            </div>
          </section>

          {/* Path to Ownership */}
          <section className="py-20 bg-gradient-to-b from-black via-black/95 to-black relative overflow-hidden">
            {/* Japanese pattern overlay */}
            <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay z-0"></div>

            {/* Martial arts silhouette elements */}
            <div
              className="absolute top-0 left-0 w-48 h-48 bg-contain bg-no-repeat bg-left-top z-0 opacity-10"
              style={{ backgroundImage: "url('/karate-silhouette-2.png')" }}
            ></div>

            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white mb-2">
                  YOUR PATH TO SKC OWNERSHIP
                </h2>
                <div className="w-32 h-0.5 bg-gradient-to-r from-red-700 to-red-500 mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <AnimatedElement type="fadeIn" delay={0.3}>
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-tr from-red-600 to-red-900 rounded-lg blur-sm opacity-70"></div>
                    {imagesLoaded ? (
                      <img
                        src="/Images/team/ADULTKEMPO.jpg"
                        alt="SKC Path to Ownership"
                        className="w-full h-auto object-cover rounded-lg relative z-10"
                      />
                    ) : (
                      <div className="w-full h-[400px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg relative z-10 flex items-center justify-center">
                        <svg className="w-12 h-12 text-red-500 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </AnimatedElement>

                <AnimatedElement type="fadeIn" delay={0.4}>
                  <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-red-900/20 shadow-[0_4px_20px_rgba(0,0,0,0.5),_0_0_15px_rgba(220,38,38,0.2)]">
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 mb-2">
                        INTRODUCTION
                      </h3>
                      <div className="w-16 h-0.5 bg-gradient-to-r from-red-700 to-red-500 mb-2"></div>
                      <p className="text-gray-300">
                        Submit our contact form to express your interest in SKC Franchise and begin the conversation
                        about a potential partnership.
                      </p>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 mb-2">
                        KICK-OFF
                      </h3>
                      <div className="w-16 h-0.5 bg-gradient-to-r from-red-700 to-red-500 mb-2"></div>
                      <p className="text-gray-300">
                        We'll schedule an initial call to discuss our franchise in detail, answer any questions you
                        have, and outline our process.
                      </p>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 mb-2">
                        DISCOVERY DAY
                      </h3>
                      <div className="w-16 h-0.5 bg-gradient-to-r from-red-700 to-red-500 mb-2"></div>
                      <p className="text-gray-300">
                        Visit our headquarters to meet the team, tour our facilities, and gain deeper insights into SKC
                        Franchise for a firsthand assessment.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 mb-2">
                        FOUNDATIONAL KNOWLEDGE
                      </h3>
                      <div className="w-16 h-0.5 bg-gradient-to-r from-red-700 to-red-500 mb-2"></div>
                      <p className="text-gray-300">
                        We offer thorough training and support, including initial instruction, on-site guidance, and
                        ongoing assistance to ensure your success.
                      </p>
                    </div>
                  </div>
                </AnimatedElement>
              </div>

              {/* Take the next step */}
              <div className="mt-16 text-center">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 mb-2">
                  TAKE THE NEXT STEP
                </h3>
                <div className="w-24 h-0.5 bg-gradient-to-r from-red-700 to-red-500 mx-auto mb-4"></div>
                <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                  Ready to transform your future? Fill out our contact form today to start a conversation about how SKC
                  can help you achieve your goals, create success, and benefit your community.
                </p>
                <a
                  href="#download-brochure"
                  className="inline-block bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 px-8 py-4 rounded-md text-lg font-semibold text-white transition-all duration-300 shadow-[0_4px_15px_rgba(220,38,38,0.4)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.6)] hover:-translate-y-1"
                >
                  DOWNLOAD OUR BROCHURE
                </a>
              </div>
            </div>

            {/* Bottom decorative element for natural transition */}
            <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
              <div
                className="absolute bottom-0 left-0 right-0 h-24 opacity-10"
                style={{
                  backgroundImage: "url('/wave-pattern.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center bottom",
                  transform: "scaleY(0.5)",
                }}
              ></div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section
            id="download-brochure"
            className="py-20 bg-gradient-to-b from-black via-red-950/10 to-black relative"
            ref={formRef}
          >
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Red blur elements */}
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600 rounded-full filter blur-[100px] opacity-20 animate-pulse"></div>
              <div
                className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-red-700 rounded-full filter blur-[120px] opacity-15 animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>

              {/* Japanese-inspired decorative elements */}
              <div className="absolute bottom-20 left-10 w-40 h-40">
                <div className="absolute inset-0 border-2 border-red-500 opacity-20 rounded-full"></div>
                <div className="absolute inset-4 border border-red-500 opacity-15 rounded-full"></div>
                <div className="absolute inset-8 border border-red-500 opacity-10 rounded-full"></div>
              </div>
            </div>

            {/* Japanese pattern overlay */}
            <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay z-0"></div>

            <div className="absolute inset-0 bg-black/50 z-0"></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <AnimatedElement type="fadeIn" delay={0.2}>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white mb-2">
                      YOUR SUCCESS STORY STARTS AT SKC
                    </h2>
                    <div className="w-32 h-0.5 bg-gradient-to-r from-red-700 to-red-500 mb-6"></div>
                    <p className="text-gray-300 mb-8">
                      By choosing SKC Franchise, you are investing in a franchise that not only offers a proven and
                      profitable business model but also prioritizes community impact and personal development for a
                      more rewarding and sustainable business. Our experienced leadership team is offering you a spot in
                      our life-changing legacy. Are you ready to make the next move?
                    </p>
                    <div className="text-xs text-gray-400 mt-8">
                      <p className="mb-2 font-bold">Legal Disclaimer:</p>
                      <p>
                        This is not a franchise offering. A franchise offering can be made by us only in a state if we
                        are first registered, excluded, exempted or otherwise qualified to offer franchises in that
                        state, and only if we provide you with an appropriate franchise disclosure document. Follow-up
                        or individualized responses to you that involve either effecting or attempting to effect the
                        sale of a franchise will be made only if we are first in compliance with state registration
                        requirements, or are covered by an applicable state exclusion or exemption.
                      </p>
                    </div>
                  </div>
                </AnimatedElement>

                <AnimatedElement type="fadeIn" delay={0.4}>
                  <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-red-400/20 shadow-[0_4px_20px_rgba(0,0,0,0.5),_0_0_15px_rgba(220,38,38,0.2)]">
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative group">
                          <input
                            type="text"
                            name="name"
                            value={formState.name}
                            onChange={handleInputChange}
                            onFocus={() => handleInputFocus("name")}
                            onBlur={handleInputBlur}
                            placeholder="Your Name"
                            className="w-full px-4 py-3 bg-gray-900/70 border border-red-900/30 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white transition-all duration-300"
                          />
                          <div
                            className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-red-600 to-red-400 transition-all duration-300 ${formFocus === "name" ? "w-full" : "w-0"}`}
                          ></div>
                        </div>
                        <div className="relative group">
                          <input
                            type="email"
                            name="email"
                            value={formState.email}
                            onChange={handleInputChange}
                            onFocus={() => handleInputFocus("email")}
                            onBlur={handleInputBlur}
                            placeholder="someone@example.com"
                            className="w-full px-4 py-3 bg-gray-900/70 border border-red-900/30 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white transition-all duration-300"
                          />
                          <div
                            className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-red-600 to-red-400 transition-all duration-300 ${formFocus === "email" ? "w-full" : "w-0"}`}
                          ></div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative group">
                          <input
                            type="tel"
                            name="phone"
                            value={formState.phone}
                            onChange={handleInputChange}
                            onFocus={() => handleInputFocus("phone")}
                            onBlur={handleInputBlur}
                            placeholder="Phone Number"
                            className="w-full px-4 py-3 bg-gray-900/70 border border-red-900/30 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white transition-all duration-300"
                          />
                          <div
                            className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-red-600 to-red-400 transition-all duration-300 ${formFocus === "phone" ? "w-full" : "w-0"}`}
                          ></div>
                        </div>
                        <div className="relative group">
                          <input
                            type="text"
                            name="state"
                            value={formState.state}
                            onChange={handleInputChange}
                            onFocus={() => handleInputFocus("state")}
                            onBlur={handleInputBlur}
                            placeholder="Desired State"
                            className="w-full px-4 py-3 bg-gray-900/70 border border-red-900/30 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white transition-all duration-300"
                          />
                          <div
                            className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-red-600 to-red-400 transition-all duration-300 ${formFocus === "state" ? "w-full" : "w-0"}`}
                          ></div>
                        </div>
                      </div>
                      <div className="relative group">
                        <textarea
                          name="message"
                          value={formState.message}
                          onChange={handleInputChange}
                          onFocus={() => handleInputFocus("message")}
                          onBlur={handleInputBlur}
                          placeholder="Message"
                          rows={5}
                          className="w-full px-4 py-3 bg-gray-900/70 border border-red-900/30 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white transition-all duration-300"
                        ></textarea>
                        <div
                          className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-red-600 to-red-400 transition-all duration-300 ${formFocus === "message" ? "w-full" : "w-0"}`}
                        ></div>
                      </div>
                      <div className="text-center">
                        <button
                          type="submit"
                          className="relative inline-block bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 px-8 py-4 rounded-md text-lg font-semibold text-white transition-all duration-300 shadow-[0_4px_15px_rgba(220,38,38,0.4)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.6)] w-full hover:-translate-y-1 overflow-hidden group"
                        >
                          <span className="relative z-10">DOWNLOAD OUR BROCHURE</span>
                          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-600 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        </button>
                      </div>
                    </form>
                  </div>
                </AnimatedElement>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}
