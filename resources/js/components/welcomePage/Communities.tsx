"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Communities = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current
    const cards = cardsRef.current
    const particles = particlesRef.current

    // Title animation
    if (section) {
      gsap.fromTo(
        section.querySelector(".title-container"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        },
      )
    }

    // Cards animation
    if (cards) {
      gsap.fromTo(
        cards.querySelectorAll(".community-card"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cards,
            start: "top 80%",
          },
        },
      )
    }

    // Create subtle fire particles
    if (particles) {
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
          },
        })
      }, 300) // Less frequent particles

      return () => {
        if (particleInterval) {
          clearInterval(particleInterval)
        }
      }
    }
  }, [])

  const communities = [
    {
      id: 1,
      title: "Augusta, GA",
      description:
        "Our flagship location serving the Augusta area with comprehensive martial arts programs for all ages and skill levels.",
      members: "Core Location",
      image: "/Images/team/Augusta-Riverwalk-Best-Things-to-do-in-Augusta.jpg",
    },
    {
      id: 2,
      title: "Martinez, GA",
      description:
        "Serving the Martinez community with our signature martial arts training and character development programs.",
      members: "Growing Community",
      image: "/Images/team/535b81457a154c1399dfddd432cbf866_716x444.jpg",
    },
    {
      id: 3,
      title: "Grovetown, GA",
      description:
        "271 Meridian Drive Grovetown, GA 30813 - Our newest location bringing martial arts excellence to the Grovetown area.",
      members: "New Location",
      image: "/Images/team/ga388endgrovetown.webp",
    },
    {
      id: 4,
      title: "Evans, GA",
      description:
        "4150 Washington Road, Suite 4, Evans, GA, 30809 - Serving Evans with professional martial arts instruction for all ages.",
      members: "Main Dojo",
      image: "/Images/team/adobestock-469148590.jpg",
    },
  ]

  return (
    <section id="communities" ref={sectionRef} className="relative py-20 text-white overflow-hidden">
      {/* Subtle particles container */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none z-5"></div>

      <div className="container relative mx-auto px-4 z-20">
        <div className="title-container mb-16 text-center">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="h-px w-8 bg-red-500"></div>
            <span className="text-red-400 uppercase tracking-wider text-sm font-semibold">Our Locations</span>
            <div className="h-px w-8 bg-red-500"></div>
          </div>
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">Communities We Serve</h2>
          <p className="mx-auto max-w-2xl text-gray-300 mt-4">
            Providing high-quality martial arts instruction throughout the CSRA area. Find a location near you and start
            your martial arts journey today.
          </p>
          <div className="mx-auto mt-6 h-1 w-20 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
        </div>

        <div ref={cardsRef} className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {communities.map((community) => (
            <div
              key={community.id}
              className="community-card group overflow-hidden rounded-xl bg-black/60 shadow-xl transition-all duration-300 backdrop-blur-sm border border-red-900/20 hover:border-red-600/40 hover:shadow-red-900/5"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={community.image || "/placeholder.svg"}
                  alt={community.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-3 left-3 rounded-full bg-gradient-to-r from-red-700 to-red-500 px-3 py-1 text-xs font-medium text-white shadow-lg">
                  {community.members}
                </div>
              </div>
              <div className="p-5">
                <h3 className="mb-2 text-xl font-semibold text-white group-hover:text-red-400 transition-colors duration-300">
                  {community.title}
                </h3>
                <p className="mb-4 text-gray-300">{community.description}</p>
                <Button
                  variant="outline"
                  className="w-full border-red-600/30 text-red-500 hover:bg-red-900/20 hover:border-red-500/50 hover:text-red-400 transition-all duration-300 group-hover:text-red-400"
                >
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Get Directions
                  </span>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="mx-auto max-w-3xl mb-8">
            <p className="text-gray-300">
              We also proudly serve: North Augusta, SC, Appling, GA, Harlem, GA, Fort Eisenhower, GA, and surrounding
              areas.
            </p>
          </div>
          <Button
            variant="default"
            className="rounded-xl bg-gradient-to-r from-red-700 to-red-600 px-8 py-4 text-white hover:from-red-600 hover:to-red-500 hover:text-white transition-all duration-300 shadow-lg shadow-red-900/20 transform hover:scale-105 relative group overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center">
              Contact Us For More Locations
              <svg
                className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Communities
