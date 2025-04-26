"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Location = () => {
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
        cards.querySelectorAll(".location-card"),
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

  const locations = [
    {
      id: 1,
      name: "Evans Location",
      address: "4150 Washington Road, Suite 4",
      city: "Evans",
      state: "GA",
      zip: "30809",
      phone: "(706) 855-5685",
      hours: "Mon-Fri: 4pm-8pm, Sat: 9am-12pm",
      features: [
        "State-of-the-art dojo",
        "Certified black belt instructors",
        "Specialized youth programs",
        "Adult martial arts classes",
      ],
    },
    {
      id: 2,
      name: "Grovetown Location",
      address: "271 Meridian Drive",
      city: "Grovetown",
      state: "GA",
      zip: "30813",
      phone: "(706) 855-5685",
      hours: "Mon-Fri: 4pm-8pm, Sat: 9am-12pm",
      features: ["Modern training facility", "Family classes", "After-school programs", "Advanced belt training"],
    },
    {
      id: 3,
      name: "Augusta Location",
      address: "Coming Soon",
      city: "Augusta",
      state: "GA",
      zip: "",
      phone: "(706) 855-5685",
      hours: "Opening Fall 2023",
      features: ["Pre-registration available", "Grand opening specials", "All ages welcome", "New student orientation"],
    },
  ]

  return (
    <section id="locations" ref={sectionRef} className="relative py-20 text-white overflow-hidden">
      {/* Subtle particles container */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none z-5"></div>

      <div className="container relative mx-auto px-4 z-10">
        <div className="title-container mb-16 text-center">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="h-px w-8 bg-red-500"></div>
            <span className="text-red-400 uppercase tracking-wider text-sm font-semibold">Find Us</span>
            <div className="h-px w-8 bg-red-500"></div>
          </div>
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">Our Locations</h2>
          <p className="mx-auto max-w-2xl text-gray-300 mt-4">
            Find a Seigler's Karate Center near you and start your martial arts journey today.
          </p>
          <div className="mx-auto mt-6 h-1 w-20 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
        </div>

        <div ref={cardsRef} className="grid gap-8 md:grid-cols-3">
          {locations.map((location) => (
            <div
              key={location.id}
              className="location-card rounded-xl border border-red-900/20 bg-black/60 p-6 shadow-xl transition-all duration-300 hover:border-red-600/40 backdrop-blur-sm group hover:shadow-red-900/5"
            >
              <div className="relative mb-4">
                <div className="absolute -top-2 -left-2 w-12 h-12 bg-gradient-to-br from-red-700 to-red-500 rounded-lg flex items-center justify-center text-white font-bold shadow-md">
                  {location.id}
                </div>
                <h3 className="ml-10 text-xl font-semibold text-white group-hover:text-red-400 transition-colors duration-300">
                  {location.name}
                </h3>
              </div>

              <div className="mb-5 pl-2 border-l-2 border-red-900/30 group-hover:border-red-500/50 transition-colors duration-300">
                <p className="text-gray-300">{location.address}</p>
                <p className="text-gray-300">
                  {location.city}, {location.state} {location.zip}
                </p>
                <p className="mt-2 text-gray-200 font-medium flex items-center">
                  <svg
                    className="mr-2 h-4 w-4 text-red-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  {location.phone}
                </p>
                <p className="text-gray-200 font-medium flex items-center">
                  <svg
                    className="mr-2 h-4 w-4 text-red-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {location.hours}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="mb-3 font-medium text-white flex items-center">
                  <svg
                    className="mr-2 h-5 w-5 text-red-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Features:
                </h4>
                <ul className="space-y-2 pl-7">
                  {location.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                    >
                      <svg
                        className="mr-2 h-4 w-4 text-red-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex space-x-3">
                <Button
                  variant="default"
                  className="flex-1 bg-gradient-to-r from-red-700 to-red-600 text-white hover:from-red-600 hover:to-red-500 hover:text-white transition-all duration-300 shadow-md"
                >
                  <span className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    Visit Location
                  </span>
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-red-600/30 text-red-500 hover:bg-red-900/20 hover:border-red-500/50 hover:text-red-400 transition-all duration-300"
                >
                  <span className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4"
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
          <p className="mb-6 text-gray-300">
            Email us at{" "}
            <a
              href="mailto:skc@goskc.com"
              className="text-red-400 hover:text-red-300 transition-colors duration-300 font-medium hover:underline"
            >
              skc@goskc.com
            </a>{" "}
            for more information or to schedule a tour.
          </p>
          <Button
            variant="outline"
            className="rounded-xl border-red-600/30 px-8 py-4 text-red-400 hover:bg-red-900/20 hover:border-red-500/50 hover:text-red-300 transition-all duration-300 shadow-lg shadow-red-900/20 transform hover:scale-105 group"
          >
            <span className="flex items-center">
              <svg
                className="mr-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Contact Us About Locations
              <svg
                className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1"
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

export default Location
