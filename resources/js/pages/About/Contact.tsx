"use client"

import type React from "react"

import Template from "./Template"
import { Link } from "@inertiajs/react"
import { useState, useRef, useEffect } from "react"
import { MapPin, Phone, Mail, Calendar, Users, Award, Star, ArrowRight } from "lucide-react"
import gsap from "gsap"

export default function Contact() {
  // Refs for GSAP animations
  const heroRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState<"form" | "locations">("form")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    location: "",
    program: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        location: "",
        program: "",
      })
    }, 1500)
  }

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

  const locations = [
    {
      name: "Evans, GA",
      address: "4150 Washington Road, Suite 4",
      city: "Evans",
      zip: "30809",
      phone: "(706) 855-5685",
      email: "skc@goskc.com",
    },
    {
      name: "Grovetown, GA",
      address: "271 Meridian Drive",
      city: "Grovetown",
      zip: "30813",
      phone: "(706) 855-5685",
      email: "skc@goskc.com",
    },
  ]

  return (
    <Template title="Contact Us">
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
              <div className="inline-flex items-center space-x-2 mb-2">
                <div className="h-px w-6 bg-red-500"></div>
                <span className="text-red-400 uppercase tracking-wider text-xs font-semibold">Get In Touch</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-red-200">
                <span className="text-red-600">Contact</span> Us
              </h1>
              <div className="h-0.5 w-12 bg-gradient-to-r from-red-600 to-red-400 rounded-full mb-3"></div>
              <p className="text-sm text-gray-300 mb-4 max-w-lg">
                Have questions about our martial arts programs? We're here to help. Reach out to us and we'll get back
                to you as soon as possible.
              </p>

              {/* Stats - Horizontal compact row */}
              <div className="flex flex-wrap justify-between gap-2 mt-4 mb-4">
                <div className="flex items-center space-x-2 bg-black/40 px-3 py-1.5 rounded-md border border-red-900/20">
                  <Award className="text-red-500" size={16} />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white">40+</span>
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider">Years</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 bg-black/40 px-3 py-1.5 rounded-md border border-red-900/20">
                  <Users className="text-red-500" size={16} />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white">2</span>
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider">Locations</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 bg-black/40 px-3 py-1.5 rounded-md border border-red-900/20">
                  <Star className="text-red-500" size={16} />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white">5★</span>
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider">Rating</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 bg-black/40 px-3 py-1.5 rounded-md border border-red-900/20">
                  <Calendar className="text-red-500" size={16} />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white">6</span>
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider">Days Open</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="w-full md:w-1/2 mt-6 md:mt-0">
              <div className="relative h-48 md:h-64 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-black/40 z-10"></div>
                <img
                  src="/world-map-vintage.png"
                  alt="World Map"
                  className="w-full h-full object-cover"
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    const target = e.currentTarget
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
                      span.textContent = "Contact Us"
                      parent.appendChild(span)
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabbed Content Section */}
      <section className="py-6 relative">
        <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-2 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          {/* Tab Navigation */}
          <div className="flex border-b border-red-900/20 mb-6">
            <button
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === "form" ? "text-red-500 border-b-2 border-red-500" : "text-gray-400 hover:text-gray-300"
              }`}
              onClick={() => setActiveTab("form")}
            >
              Contact Form
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === "locations"
                  ? "text-red-500 border-b-2 border-red-500"
                  : "text-gray-400 hover:text-gray-300"
              }`}
              onClick={() => setActiveTab("locations")}
            >
              Our Locations
            </button>
          </div>

          {/* Form Tab Content */}
          {activeTab === "form" && (
            <div className="rounded-lg border border-red-900/30 bg-black/60 shadow-md backdrop-blur-sm p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-2 mix-blend-overlay"></div>
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <h2 className="text-xl font-bold text-white mb-4 relative inline-block">
                  Send Us a Message
                  <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
                </h2>

                {isSubmitted ? (
                  <div className="text-center py-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white mb-2">Thank You!</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      Your message has been sent successfully. We'll get back to you within 24-48 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white py-2 px-4 rounded-md text-sm transition-colors shadow-md"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-black/40 border border-red-900/30 rounded-md py-2 px-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-black/40 border border-red-900/30 rounded-md py-2 px-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-black/40 border border-red-900/30 rounded-md py-2 px-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                        />
                      </div>

                      <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-1">
                          Preferred Location
                        </label>
                        <select
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          className="w-full bg-black/40 border border-red-900/30 rounded-md py-2 px-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                        >
                          <option value="">Select a location</option>
                          <option value="evans">Evans, GA</option>
                          <option value="grovetown">Grovetown, GA</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="program" className="block text-sm font-medium text-gray-300 mb-1">
                        Program of Interest
                      </label>
                      <select
                        id="program"
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        className="w-full bg-black/40 border border-red-900/30 rounded-md py-2 px-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                      >
                        <option value="">Select a program</option>
                        <option value="kids">Kids Karate (5-12)</option>
                        <option value="teens">Teen Martial Arts (13-17)</option>
                        <option value="adults">Adult Karate</option>
                        <option value="kickboxing">Kickboxing</option>
                        <option value="private">Private Lessons</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-black/40 border border-red-900/30 rounded-md py-2 px-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                        placeholder="Tell us about your martial arts goals or any questions you have..."
                      ></textarea>
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white py-2 px-6 rounded-md transition-colors flex items-center justify-center shadow-md ${
                          isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
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
                            Sending Message...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          )}

          {/* Locations Tab Content */}
          {activeTab === "locations" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {locations.map((location, index) => (
                <div
                  key={location.name}
                  className="rounded-lg border border-red-900/30 bg-black/60 shadow-md backdrop-blur-sm p-4 hover:border-red-600/50 transition-all duration-300"
                >
                  <div className="flex items-start">
                    <div className="bg-red-900/20 p-2 rounded-full mr-3">
                      <MapPin className="h-4 w-4 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white mb-1">{location.name}</h3>
                      <p className="text-xs text-gray-300 mb-1">{location.address}</p>
                      <p className="text-xs text-gray-300 mb-2">
                        {location.city}, GA {location.zip}
                      </p>

                      <div className="flex space-x-3 mb-2">
                        <div className="flex items-center text-xs text-gray-300">
                          <Phone className="h-3 w-3 text-red-500 mr-1" />
                          {location.phone}
                        </div>
                        <div className="flex items-center text-xs text-gray-300">
                          <Mail className="h-3 w-3 text-red-500 mr-1" />
                          {location.email}
                        </div>
                      </div>

                      <Link
                        href={`/locations/${location.city.toLowerCase()}`}
                        className="inline-flex items-center text-xs text-red-400 hover:text-red-300 transition-colors group"
                      >
                        View Details
                        <ArrowRight className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-6 relative">
        <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-2 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="rounded-lg border border-red-900/30 bg-black/60 shadow-md backdrop-blur-sm p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-2 mix-blend-overlay"></div>
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-xl font-bold text-white mb-4 relative inline-block">
                Business Hours
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-black/30 rounded-lg p-4 border border-red-900/20">
                  <h3 className="text-sm font-medium text-white mb-2">Weekdays</h3>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Monday - Friday</span>
                      <span className="text-gray-300">4:00 PM - 8:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="bg-black/30 rounded-lg p-4 border border-red-900/20">
                  <h3 className="text-sm font-medium text-white mb-2">Weekend</h3>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Saturday</span>
                      <span className="text-gray-300">9:00 AM - 12:00 PM</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Sunday</span>
                      <span className="text-gray-300">Closed</span>
                    </div>
                  </div>
                </div>

                <div className="bg-black/30 rounded-lg p-4 border border-red-900/20">
                  <h3 className="text-sm font-medium text-white mb-2">Office Hours</h3>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Monday - Friday</span>
                      <span className="text-gray-300">10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Saturday</span>
                      <span className="text-gray-300">9:00 AM - 12:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-6 relative">
        <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-2 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-xl font-bold text-white mb-4 relative inline-block">
            Frequently Asked Questions
            <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-red-900/30 bg-black/60 shadow-md backdrop-blur-sm p-4 hover:border-red-600/50 transition-all duration-300">
              <h3 className="text-sm font-medium text-white mb-2">Do I need previous martial arts experience?</h3>
              <p className="text-xs text-gray-300">
                Not at all! Our programs are designed for students of all experience levels, from complete beginners to
                advanced practitioners. Our instructors will help you progress at your own pace.
              </p>
            </div>

            <div className="rounded-lg border border-red-900/30 bg-black/60 shadow-md backdrop-blur-sm p-4 hover:border-red-600/50 transition-all duration-300">
              <h3 className="text-sm font-medium text-white mb-2">How often should I attend classes?</h3>
              <p className="text-xs text-gray-300">
                For optimal progress, we recommend attending classes 2-3 times per week. However, we understand that
                everyone's schedule is different, and we offer flexible class times to accommodate various needs.
              </p>
            </div>

            <div className="rounded-lg border border-red-900/30 bg-black/60 shadow-md backdrop-blur-sm p-4 hover:border-red-600/50 transition-all duration-300">
              <h3 className="text-sm font-medium text-white mb-2">What should I wear to my first class?</h3>
              <p className="text-xs text-gray-300">
                For your first class, comfortable athletic clothing is appropriate. If you decide to continue training,
                you'll need a traditional karate uniform (gi), which can be purchased at our pro shop.
              </p>
            </div>

            <div className="rounded-lg border border-red-900/30 bg-black/60 shadow-md backdrop-blur-sm p-4 hover:border-red-600/50 transition-all duration-300">
              <h3 className="text-sm font-medium text-white mb-2">Do you offer trial classes?</h3>
              <p className="text-xs text-gray-300">
                Yes! We offer a free introductory class for new students. This allows you to experience our teaching
                style and facility before making a commitment. Contact us to schedule your free class.
              </p>
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
              <h2 className="text-lg font-bold text-white">Ready to Begin Your Martial Arts Journey?</h2>
              <p className="text-xs text-gray-100">
                Join our community and discover the transformative power of martial arts.
              </p>
            </div>
            <div className="flex space-x-2">
              <button className="bg-white text-red-700 font-medium py-1.5 px-4 rounded text-xs shadow-md hover:bg-gray-100 transition-all duration-300">
                Start Training
              </button>
              <button className="bg-transparent border border-white text-white hover:bg-white/10 font-medium py-1.5 px-4 rounded text-xs transition-all duration-300">
                Schedule Tour
              </button>
            </div>
          </div>
        </div>
      </section>
    </Template>
  )
}
