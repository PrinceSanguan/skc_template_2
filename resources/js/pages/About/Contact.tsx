"use client"

import type React from "react"

import Template from "./Template"
import AnimatedElement from "@/components/ui/animated-element"
import { Link } from "@inertiajs/react"
import { useState, useRef, useEffect } from "react"
import { MapPin, Phone, ChevronRight, Calendar } from "lucide-react"
import gsap from "gsap"

export default function Contact() {
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
  const particlesRef = useRef<HTMLDivElement>(null)

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
    <Template title="Contact Us">
      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-[40vh] flex items-center">
        {/* Particle effect container */}
        <div ref={particlesRef} className="absolute inset-0 pointer-events-none z-10"></div>

        {/* Background decorative elements */}
        <div className="absolute top-1/4 -right-10 w-40 h-40 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-red-600/15 rounded-full blur-2xl"></div>
        <div className="absolute right-0 top-1/2 w-24 h-24 bg-red-500/10 rounded-full blur-xl"></div>

        <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>

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
            <div className="inline-flex items-center space-x-2 mb-4 justify-center w-full">
              <div className="h-px w-8 bg-red-500"></div>
              <span className="text-red-400 uppercase tracking-wider text-sm font-semibold">Get In Touch</span>
              <div className="h-px w-8 bg-red-500"></div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-red-200">
              Contact <span className="text-red-600">Us</span>
            </h1>
            <div className="mx-auto h-1 w-20 bg-gradient-to-r from-red-600 to-red-400 rounded-full mt-2"></div>
          </AnimatedElement>

          <AnimatedElement type="fadeIn" delay={0.3}>
            <div className="text-xl text-center text-gray-200 mt-8 mb-8 max-w-3xl mx-auto">
              <p className="leading-relaxed">
                Have a question about our programs or ready to begin your martial arts journey? We're here to help! Get
                in touch with us today.
              </p>
            </div>
          </AnimatedElement>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Form Section */}
          <AnimatedElement type="slideInLeft" delay={0.4} className="lg:col-span-2">
            <div className="rounded-xl border border-red-900/30 bg-black/60 shadow-xl backdrop-blur-sm p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-white mb-6 relative inline-block">
                  Send Us a Message
                  <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
                </h2>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium text-white mb-2">Thank You!</h3>
                    <p className="text-gray-300 mb-6">
                      Your message has been sent successfully. We'll get back to you within 24-48 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white py-2 px-6 rounded-md transition-colors shadow-[0_4px_10px_rgba(220,38,38,0.3)] hover:shadow-[0_6px_15px_rgba(220,38,38,0.4)]"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                          className="w-full bg-black/40 border border-red-900/30 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
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
                          className="w-full bg-black/40 border border-red-900/30 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                          className="w-full bg-black/40 border border-red-900/30 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
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
                          className="w-full bg-black/40 border border-red-900/30 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
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
                        className="w-full bg-black/40 border border-red-900/30 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
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
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-black/40 border border-red-900/30 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        placeholder="Tell us about your martial arts goals or any questions you have..."
                      ></textarea>
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white py-3 px-6 rounded-md transition-colors flex items-center justify-center shadow-[0_4px_10px_rgba(220,38,38,0.3)] hover:shadow-[0_6px_15px_rgba(220,38,38,0.4)] ${
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
          </AnimatedElement>

          {/* Location Info */}
          <AnimatedElement type="slideInRight" delay={0.5}>
            <div className="space-y-8">
              <div className="rounded-xl border border-red-900/30 bg-black/60 shadow-xl backdrop-blur-sm p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600/5 rounded-full blur-xl"></div>

                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-white mb-4 relative inline-block">
                    Our Locations
                    <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
                  </h3>

                  <div className="space-y-6">
                    <div className="bg-black/30 rounded-lg p-4 border border-red-900/20 hover:border-red-600/30 transition-all duration-300">
                      <h4 className="font-medium text-red-500 mb-2 flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        Evans, GA
                      </h4>
                      <p className="text-gray-300 mb-1">4307 Washington Rd</p>
                      <p className="text-gray-300 mb-1">Evans, GA 30809</p>
                      <p className="text-gray-300 mb-3 flex items-center">
                        <Phone className="h-3 w-3 mr-1 text-red-500" />
                        (706) 524-3444
                      </p>
                      <Link
                        href="/locations/evans"
                        className="text-sm text-red-400 hover:text-red-300 flex items-center group"
                      >
                        View Details
                        <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>

                    <div className="bg-black/30 rounded-lg p-4 border border-red-900/20 hover:border-red-600/30 transition-all duration-300">
                      <h4 className="font-medium text-red-500 mb-2 flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        Grovetown, GA
                      </h4>
                      <p className="text-gray-300 mb-1">5159 Columbia Rd</p>
                      <p className="text-gray-300 mb-1">Grovetown, GA 30813</p>
                      <p className="text-gray-300 mb-3 flex items-center">
                        <Phone className="h-3 w-3 mr-1 text-red-500" />
                        (706) 524-5678
                      </p>
                      <Link
                        href="/locations/grovetown"
                        className="text-sm text-red-400 hover:text-red-300 flex items-center group"
                      >
                        View Details
                        <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-red-900/30 bg-black/60 shadow-xl backdrop-blur-sm p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-red-600/5 rounded-full blur-xl"></div>

                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-white mb-4 relative inline-block">
                    Business Hours
                    <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
                  </h3>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-2 border-b border-red-900/20">
                      <span className="text-gray-300 flex items-center">
                        <Calendar className="h-3 w-3 mr-2 text-red-500" />
                        Monday - Friday
                      </span>
                      <span className="text-white">9:00 AM - 9:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-red-900/20">
                      <span className="text-gray-300 flex items-center">
                        <Calendar className="h-3 w-3 mr-2 text-red-500" />
                        Saturday
                      </span>
                      <span className="text-white">9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-300 flex items-center">
                        <Calendar className="h-3 w-3 mr-2 text-red-500" />
                        Sunday
                      </span>
                      <span className="text-white">Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-red-900/30 bg-black/60 shadow-xl backdrop-blur-sm p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600/5 rounded-full blur-xl"></div>

                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-white mb-4 relative inline-block">
                    Connect With Us
                    <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
                  </h3>

                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-black/40 border border-red-900/30 flex items-center justify-center text-gray-300 hover:text-red-400 hover:border-red-600/50 transition-all duration-300 transform hover:scale-110"
                    >
                      <span className="sr-only">Facebook</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-black/40 border border-red-900/30 flex items-center justify-center text-gray-300 hover:text-red-400 hover:border-red-600/50 transition-all duration-300 transform hover:scale-110"
                    >
                      <span className="sr-only">Instagram</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-black/40 border border-red-900/30 flex items-center justify-center text-gray-300 hover:text-red-400 hover:border-red-600/50 transition-all duration-300 transform hover:scale-110"
                    >
                      <span className="sr-only">YouTube</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>

        {/* Map Section */}
        <AnimatedElement type="fadeIn" delay={0.6}>
          <div className="rounded-xl border border-red-900/30 bg-black/60 shadow-xl backdrop-blur-sm p-8 mb-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white mb-6 relative inline-block">
                Find Us
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
              </h2>
              <div className="h-96 bg-black/40 border border-red-900/20 rounded-lg flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 pointer-events-none"></div>
                <span className="text-gray-400 relative z-10">Interactive Map Would Be Displayed Here</span>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* FAQ Section */}
        <AnimatedElement type="fadeIn" delay={0.7}>
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 relative inline-block">
                Frequently Asked Questions
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-red-900/30 bg-black/60 shadow-xl backdrop-blur-sm p-6 hover:border-red-600/50 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600/5 rounded-full blur-xl"></div>

                <div className="relative z-10">
                  <h3 className="text-lg font-medium mb-3 text-white">Do I need previous martial arts experience?</h3>
                  <p className="text-gray-300">
                    Not at all! Our programs are designed for students of all experience levels, from complete beginners
                    to advanced practitioners. Our instructors will help you progress at your own pace.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-red-900/30 bg-black/60 shadow-xl backdrop-blur-sm p-6 hover:border-red-600/50 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-red-600/5 rounded-full blur-xl"></div>

                <div className="relative z-10">
                  <h3 className="text-lg font-medium mb-3 text-white">How often should I attend classes?</h3>
                  <p className="text-gray-300">
                    For optimal progress, we recommend attending classes 2-3 times per week. However, we understand that
                    everyone's schedule is different, and we offer flexible class times to accommodate various needs.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-red-900/30 bg-black/60 shadow-xl backdrop-blur-sm p-6 hover:border-red-600/50 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-600/5 rounded-full blur-xl"></div>

                <div className="relative z-10">
                  <h3 className="text-lg font-medium mb-3 text-white">What should I wear to my first class?</h3>
                  <p className="text-gray-300">
                    For your first class, comfortable athletic clothing is appropriate. If you decide to continue
                    training, you'll need a traditional karate uniform (gi), which can be purchased at our pro shop.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-red-900/30 bg-black/60 shadow-xl backdrop-blur-sm p-6 hover:border-red-600/50 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-red-600/5 rounded-full blur-xl"></div>

                <div className="relative z-10">
                  <h3 className="text-lg font-medium mb-3 text-white">Do you offer trial classes?</h3>
                  <p className="text-gray-300">
                    Yes! We offer a free introductory class for new students. This allows you to experience our teaching
                    style and facility before making a commitment. Contact us to schedule your free class.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* CTA */}
        <AnimatedElement type="fadeIn" delay={0.8}>
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
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Begin Your Martial Arts Journey?</h2>
              <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
                Take the first step toward self-improvement through martial arts training. Visit one of our locations or
                contact us today to schedule your free introductory class.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/locations/evans"
                  className="bg-white text-red-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-md text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center mx-auto"
                >
                  Find a Location
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="tel:+17065243444"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-md text-lg transition-all duration-300 flex items-center justify-center mx-auto"
                >
                  Call Us: (706) 524-3444
                  <Phone className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </Template>
  )
}
