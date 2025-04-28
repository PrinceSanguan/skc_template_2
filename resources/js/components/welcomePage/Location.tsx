"use client"

import { useState, useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MapPin, Phone, Clock, CheckCircle, ChevronRight, Mail, ArrowRight } from "lucide-react"
import { Link } from "@inertiajs/react"

const Location = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeLocation, setActiveLocation] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current

    if (section) {
      // Title animation
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

      // Map animation
      if (mapRef.current) {
        gsap.fromTo(
          mapRef.current,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: mapRef.current,
              start: "top 80%",
            },
          },
        )
      }
    }
  }, [])

  // Animate content when location changes
  useEffect(() => {
    const content = document.querySelector(".location-details")

    if (content && !isAnimating) {
      setIsAnimating(true)

      // Animate out
      gsap.to(content, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          // Animate in
          gsap.to(content, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            onComplete: () => {
              setIsAnimating(false)
            },
          })
        },
      })
    }
  }, [activeLocation])

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
      mapUrl: "https://maps.google.com/?q=4150+Washington+Road+Evans+GA",
      image: "/Images/team/ga388endgrovetown.webp",
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
      mapUrl: "https://maps.google.com/?q=271+Meridian+Drive+Grovetown+GA",
      image: "/Images/team/adobestock-469148590.jpg",
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
      mapUrl: "https://maps.google.com/?q=Augusta+GA",
      image: "/Images/team/Augusta-Riverwalk-Best-Things-to-do-in-Augusta.jpg",
    },
  ]

  return (
    <section ref={sectionRef} id="locations" className="relative py-24 text-white">
      {/* Subtle background elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="title-container mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-red-500/50"></div>
            <span className="text-red-500 uppercase tracking-wider text-sm font-medium">Find Us</span>
            <div className="h-px w-12 bg-red-500/50"></div>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-white">
            <span className="text-red-600">OUR</span> LOCATIONS
          </h2>
        </div>

        {/* Location selector tabs */}
        <div className="mb-12 overflow-x-auto">
          <div className="flex min-w-max">
            {locations.map((location, index) => (
              <button
                key={location.id}
                className={`px-6 py-3 text-sm font-medium whitespace-nowrap relative ${
                  activeLocation === index ? "text-red-500" : "text-gray-400 hover:text-gray-300"
                }`}
                onClick={() => !isAnimating && setActiveLocation(index)}
                disabled={isAnimating}
              >
                {location.name}
                {activeLocation === index && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"></span>}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Map and image */}
          <div ref={mapRef} className="order-2 lg:order-1">
            <div className="relative rounded-xl overflow-hidden border border-gray-800 shadow-lg h-[400px] group">
              <img
                src={locations[activeLocation].image || "/placeholder.svg"}
                alt={`${locations[activeLocation].name} facility`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay with location info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 border border-red-900/20 transform transition-transform duration-500 group-hover:translate-y-2">
                  <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
                    <MapPin className="text-red-500 mr-2" size={20} />
                    {locations[activeLocation].name}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {locations[activeLocation].address}, {locations[activeLocation].city},{" "}
                    {locations[activeLocation].state} {locations[activeLocation].zip}
                  </p>
                  <a
                    href={locations[activeLocation].mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-red-500 hover:text-red-400 transition-colors group"
                  >
                    View on Google Maps
                    <ChevronRight
                      size={16}
                      className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Location details */}
          <div className="order-1 lg:order-2">
            <div className="location-details bg-black/30 backdrop-blur-sm rounded-xl border border-gray-800 p-8 h-full">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center mr-3 text-sm font-bold">
                  {locations[activeLocation].id}
                </span>
                {locations[activeLocation].name}
              </h3>

              <div className="space-y-6">
                {/* Contact info */}
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Phone className="text-red-500 mr-3 mt-1 flex-shrink-0" size={18} />
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="text-white">{locations[activeLocation].phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="text-red-500 mr-3 mt-1 flex-shrink-0" size={18} />
                    <div>
                      <p className="text-sm text-gray-400">Hours</p>
                      <p className="text-white">{locations[activeLocation].hours}</p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-lg font-medium text-white mb-3">Location Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {locations[activeLocation].features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="pt-4 space-y-3">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white py-2 px-4 rounded-md shadow-md"
                  >
                    <span className="flex items-center">
                      Schedule a Tour
                      <ArrowRight size={16} className="ml-2" />
                    </span>
                  </Link>

                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center border border-red-900/30 bg-transparent rounded-md py-2 px-4 text-red-500 hover:bg-red-900/20 hover:border-red-500/50 hover:text-red-400"
                  >
                    <span className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      Get Directions
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="h-px w-8 bg-red-500/50"></div>
            <span className="text-red-500 uppercase tracking-wider text-sm font-medium">Contact Us</span>
            <div className="h-px w-8 bg-red-500/50"></div>
          </div>

          <p className="mb-6 text-gray-300 max-w-2xl mx-auto">
            Have questions about our locations or want to schedule a tour? Reach out to us directly and our team will be
            happy to assist you.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border border-red-600/30 px-8 py-3 text-red-400 hover:bg-red-900/20 hover:border-red-500/50 hover:text-red-300 transition-all duration-300 shadow-lg shadow-red-900/10 group"
          >
            <span className="flex items-center">
              <Mail className="mr-2" size={18} />
              Email Us at skc@goskc.com
              <ChevronRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Location
