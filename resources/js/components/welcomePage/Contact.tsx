"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
  CheckCircle,
} from "lucide-react"

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const mapRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [activeLocation, setActiveLocation] = useState("evans")
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  })

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current
    const map = mapRef.current
    const form = formRef.current

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
    }

    // Map animation
    if (map) {
      gsap.fromTo(
        map,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: map,
            start: "top 80%",
          },
        },
      )
    }

    // Form animation
    if (form) {
      gsap.fromTo(
        form,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: form,
            start: "top 80%",
          },
        },
      )
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target
    setFormData({
      ...formData,
      [id]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true)
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormSubmitted(false)
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          program: "",
          message: "",
        })
      }, 3000)
    }, 1000)
  }

  const locations = [
    {
      id: "evans",
      name: "Evans Location",
      address: "4150 Washington Road, Suite 4",
      city: "Evans, GA 30809",
      phone: "(706) 855-5685",
      hours: "Mon-Fri: 4pm-8pm, Sat: 9am-12pm",
      mapUrl: "https://maps.google.com/?q=4150+Washington+Road+Evans+GA",
      image: "/evans-ga.png",
    },
    {
      id: "grovetown",
      name: "Grovetown Location",
      address: "271 Meridian Drive",
      city: "Grovetown, GA 30813",
      phone: "(706) 855-5685",
      hours: "Mon-Fri: 4pm-8pm, Sat: 9am-12pm",
      mapUrl: "https://maps.google.com/?q=271+Meridian+Drive+Grovetown+GA",
      image: "/grovetown-ga.png",
    },
  ]

  const activeLocationData = locations.find((loc) => loc.id === activeLocation) || locations[0]

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 text-white">
      {/* Subtle background elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="title-container mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-red-500/50"></div>
            <span className="text-red-500 uppercase tracking-wider text-sm font-medium">Get In Touch</span>
            <div className="h-px w-12 bg-red-500/50"></div>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-white">
            <span className="text-red-600">CONTACT</span> US
          </h2>
          <p className="mx-auto max-w-2xl text-gray-300 mt-4">
            Have questions about our martial arts programs? We're here to help. Reach out to us and we'll get back to
            you as soon as possible.
          </p>
        </div>

        {/* Interactive map and contact info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Left side - Location tabs and map */}
          <div className="lg:col-span-2">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden">
              {/* Location tabs */}
              <div className="flex border-b border-gray-800">
                {locations.map((location) => (
                  <button
                    key={location.id}
                    onClick={() => setActiveLocation(location.id)}
                    className={`flex-1 py-4 px-6 text-sm font-medium transition-all duration-300 ${
                      activeLocation === location.id
                        ? "bg-red-900/20 text-red-400 border-b-2 border-red-500"
                        : "text-gray-400 hover:text-white hover:bg-gray-800/30"
                    }`}
                  >
                    {location.name}
                  </button>
                ))}
              </div>

              {/* Map area */}
              <div ref={mapRef} className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={activeLocationData.image || "/placeholder.svg"}
                  alt={`Map of ${activeLocationData.name}`}
                  className="w-full h-full object-cover"
                />

                {/* Map overlay with location info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4 border border-red-900/20 max-w-md">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <MapPin className="text-red-500 mr-2" size={20} />
                      {activeLocationData.name}
                    </h3>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-start">
                        <MapPin className="text-red-500 mr-3 mt-1 flex-shrink-0" size={16} />
                        <div>
                          <p className="text-white">{activeLocationData.address}</p>
                          <p className="text-white">{activeLocationData.city}</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <Phone className="text-red-500 mr-3 mt-1 flex-shrink-0" size={16} />
                        <p className="text-white">{activeLocationData.phone}</p>
                      </div>

                      <div className="flex items-start">
                        <Clock className="text-red-500 mr-3 mt-1 flex-shrink-0" size={16} />
                        <p className="text-white">{activeLocationData.hours}</p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <a
                        href={activeLocationData.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-red-500 hover:text-red-400 transition-colors group"
                      >
                        View on Google Maps
                        <ArrowRight
                          size={16}
                          className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Quick contact info */}
          <div className="bg-black/30 backdrop-blur-sm rounded-xl border border-gray-800 p-6">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <MessageSquare className="text-red-500 mr-2" size={20} />
              Quick Contact
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-red-900/20 text-red-500">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <p className="mt-1 text-gray-300">(706) 855-5685</p>
                  <p className="text-xs text-gray-400 mt-1">Call us for immediate assistance</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-red-900/20 text-red-500">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="font-medium text-white">Email</p>
                  <p className="mt-1 text-gray-300">skc@goskc.com</p>
                  <p className="text-xs text-gray-400 mt-1">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-red-900/20 text-red-500">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="font-medium text-white">Business Hours</p>
                  <p className="mt-1 text-gray-300">Mon-Fri: 4pm-8pm</p>
                  <p className="text-gray-300">Sat: 9am-12pm</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium text-white mb-4">Connect With Us</h4>
              <div className="grid grid-cols-4 gap-3">
                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-900/20 text-red-400 transition-all duration-300 hover:bg-red-900/40 hover:text-white"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-900/20 text-red-400 transition-all duration-300 hover:bg-red-900/40 hover:text-white"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-900/20 text-red-400 transition-all duration-300 hover:bg-red-900/40 hover:text-white"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-900/20 text-red-400 transition-all duration-300 hover:bg-red-900/40 hover:text-white"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div className="bg-black/30 backdrop-blur-sm rounded-xl border border-gray-800 p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>

          <div className="relative z-10">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">Send Us a Message</h3>

            {formSubmitted ? (
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-green-900/30 flex items-center justify-center">
                    <CheckCircle className="text-green-500" size={32} />
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Message Sent Successfully!</h4>
                <p className="text-gray-300">Thank you for contacting us. We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-gray-700 bg-black/40 p-3 text-white placeholder-gray-500 focus:border-red-500 focus:outline-none"
                    placeholder="John"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-gray-700 bg-black/40 p-3 text-white placeholder-gray-500 focus:border-red-500 focus:outline-none"
                    placeholder="Doe"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-gray-700 bg-black/40 p-3 text-white placeholder-gray-500 focus:border-red-500 focus:outline-none"
                    placeholder="john.doe@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-gray-700 bg-black/40 p-3 text-white placeholder-gray-500 focus:border-red-500 focus:outline-none"
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div>
                  <label htmlFor="program" className="block text-sm font-medium text-gray-300 mb-1">
                    Interested Program
                  </label>
                  <select
                    id="program"
                    value={formData.program}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-gray-700 bg-black/40 p-3 text-white focus:border-red-500 focus:outline-none"
                    required
                  >
                    <option value="">Select a program</option>
                    <option value="lil-dragons">Lil Dragons (4-5)</option>
                    <option value="kids">Kids Karate (6-10)</option>
                    <option value="teens">Teens Karate (11-13)</option>
                    <option value="adults">Adult Kempo Karate (14+)</option>
                    <option value="kickboxing">Kickboxing (14+)</option>
                    <option value="jiu-jitsu">Jiu Jitsu (14+)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-1">
                    Preferred Location
                  </label>
                  <select
                    id="location"
                    value={activeLocation}
                    onChange={(e) => setActiveLocation(e.target.value)}
                    className="w-full rounded-lg border border-gray-700 bg-black/40 p-3 text-white focus:border-red-500 focus:outline-none"
                    required
                  >
                    {locations.map((location) => (
                      <option key={location.id} value={location.id}>
                        {location.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full rounded-lg border border-gray-700 bg-black/40 p-3 text-white placeholder-gray-500 focus:border-red-500 focus:outline-none"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>

                <div className="md:col-span-2">
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white shadow-md group"
                  >
                    <span className="flex items-center justify-center">
                      <Send className="mr-2" size={18} />
                      Send Message
                    </span>
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* FAQ section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Frequently Asked Questions</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/30 backdrop-blur-sm rounded-lg border border-gray-800 p-6 hover:border-red-900/30 transition-colors duration-300">
              <h4 className="text-lg font-medium text-white mb-2">What age groups do you offer classes for?</h4>
              <p className="text-gray-300">
                We offer classes for all age groups, starting from 4 years old. Our programs include Lil Dragons (4-5),
                Kids Karate (6-10), Teens Karate (11-13), and Adult programs (14+).
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-lg border border-gray-800 p-6 hover:border-red-900/30 transition-colors duration-300">
              <h4 className="text-lg font-medium text-white mb-2">Do I need prior experience to join?</h4>
              <p className="text-gray-300">
                No prior experience is necessary. Our programs are designed to accommodate beginners and we'll guide you
                through every step of your martial arts journey.
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-lg border border-gray-800 p-6 hover:border-red-900/30 transition-colors duration-300">
              <h4 className="text-lg font-medium text-white mb-2">How often should I attend classes?</h4>
              <p className="text-gray-300">
                For optimal progress, we recommend attending classes 2-3 times per week. However, we understand that
                schedules vary, and we can work with you to find a frequency that fits your lifestyle.
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-lg border border-gray-800 p-6 hover:border-red-900/30 transition-colors duration-300">
              <h4 className="text-lg font-medium text-white mb-2">What should I wear to my first class?</h4>
              <p className="text-gray-300">
                For your first class, comfortable athletic clothing is fine. If you decide to continue, you'll need a
                proper uniform (gi), which can be purchased through our pro shop.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
