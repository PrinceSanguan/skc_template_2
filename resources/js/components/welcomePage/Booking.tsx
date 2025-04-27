"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Calendar, Clock, DollarSign, Users, ChevronRight, CheckCircle, ArrowRight, MapPin } from "lucide-react"

const Booking = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeTab, setActiveTab] = useState("programs")
  const [selectedProgram, setSelectedProgram] = useState<number | null>(null)
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

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

      // Tab content animation
      gsap.fromTo(
        section.querySelector(".tab-content"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section.querySelector(".tab-content"),
            start: "top 80%",
          },
        },
      )

      // Program cards animation
      gsap.fromTo(
        section.querySelectorAll(".program-card"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section.querySelector(".programs-grid"),
            start: "top 80%",
          },
        },
      )
    }
  }, [activeTab])

  const services = [
    {
      id: 1,
      name: "Free Trial Class",
      description: "Experience a martial arts class with no obligation to continue",
      duration: "45 min",
      price: "FREE",
      icon: <Calendar className="h-6 w-6" />,
      benefits: ["No obligation", "Meet instructors", "Tour facility", "Q&A session"],
    },
    {
      id: 2,
      name: "Beginner Package",
      description: "6-week introductory course including uniform and first belt test",
      duration: "2x weekly",
      price: "$149",
      icon: <Users className="h-6 w-6" />,
      benefits: ["Uniform included", "Belt test included", "Structured curriculum", "Progress tracking"],
    },
    {
      id: 3,
      name: "One-on-One Training",
      description: "Private training session with a certified black belt instructor",
      duration: "30 min",
      price: "$49",
      icon: <Clock className="h-6 w-6" />,
      benefits: ["Personalized attention", "Customized training", "Accelerated learning", "Flexible scheduling"],
    },
    {
      id: 4,
      name: "Family Program",
      description: "Train together as a family with our special family pricing",
      duration: "Ongoing",
      price: "From $199/mo",
      icon: <Users className="h-6 w-6" />,
      benefits: ["Up to 4 family members", "Shared experience", "Discounted rate", "Flexible scheduling"],
    },
  ]

  const locations = [
    {
      id: "evans",
      name: "Evans, GA",
      address: "4150 Washington Road, Suite 4",
      hours: "Mon-Fri: 4pm-8pm, Sat: 9am-12pm",
      phone: "(706) 855-5685",
      image: "/evans-ga.png",
    },
    {
      id: "grovetown",
      name: "Grovetown, GA",
      address: "271 Meridian Drive",
      hours: "Mon-Fri: 4pm-8pm, Sat: 9am-12pm",
      phone: "(706) 855-5685",
      image: "/grovetown-ga.png",
    },
    {
      id: "augusta",
      name: "Augusta, GA (Coming Soon)",
      address: "Location to be announced",
      hours: "Opening Fall 2023",
      phone: "(706) 855-5685",
      image: "/augusta-ga.png",
    },
  ]

  const handleProgramSelect = (id: number) => {
    setSelectedProgram(id)
    setActiveTab("form")

    // Scroll to form
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleLocationSelect = (id: string) => {
    setSelectedLocation(id)
  }

  return (
    <section id="booking" ref={sectionRef} className="relative py-24 text-white">
      {/* Subtle background elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="title-container mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-red-500/50"></div>
            <span className="text-red-500 uppercase tracking-wider text-sm font-medium">Join Us</span>
            <div className="h-px w-12 bg-red-500/50"></div>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-white">
            <span className="text-red-600">SCHEDULE</span> & PRICING
          </h2>
          <p className="mx-auto max-w-2xl text-gray-300 mt-4">
            Get started with Seigler's Karate Center today. Select a program and schedule your first class.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setActiveTab("programs")}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "programs"
                  ? "bg-red-600 text-white"
                  : "bg-black/30 border border-gray-800 text-gray-300 hover:border-red-500/30 hover:text-white"
              }`}
            >
              Select Program
            </button>
            <button
              onClick={() => setActiveTab("form")}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "form"
                  ? "bg-red-600 text-white"
                  : "bg-black/30 border border-gray-800 text-gray-300 hover:border-red-500/30 hover:text-white"
              }`}
            >
              Request Information
            </button>
          </div>
        </div>

        {/* Tab content */}
        <div className="tab-content">
          {activeTab === "programs" && (
            <div className="programs-grid grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`program-card group bg-black/30 backdrop-blur-sm rounded-xl border ${
                    selectedProgram === service.id
                      ? "border-red-500/50 shadow-lg shadow-red-900/10"
                      : "border-gray-800 hover:border-red-500/30"
                  } overflow-hidden transition-all duration-300`}
                >
                  <div className="p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 p-3 rounded-lg bg-red-900/20 text-red-500 mr-4">{service.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white group-hover:text-red-400 transition-colors duration-300">
                          {service.name}
                        </h3>
                        <p className="text-gray-300 text-sm mt-1">{service.description}</p>
                      </div>
                      <div className="ml-4 text-right">
                        <div className="text-xl font-bold text-white">{service.price}</div>
                        <div className="text-sm text-gray-400">{service.duration}</div>
                      </div>
                    </div>

                    <div className="mt-6 space-y-2">
                      {service.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="text-red-500 mr-2 flex-shrink-0" size={16} />
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6">
                      <Button
                        onClick={() => handleProgramSelect(service.id)}
                        className={`w-full ${
                          selectedProgram === service.id
                            ? "bg-red-600 hover:bg-red-700"
                            : "bg-black/50 hover:bg-red-900/20 border border-red-900/30 hover:border-red-500/50"
                        } text-white group`}
                      >
                        <span className="flex items-center justify-center">
                          {selectedProgram === service.id ? "Selected" : "Select Program"}
                          <ChevronRight
                            size={16}
                            className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "form" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left side - Location selection */}
              <div className="bg-black/30 backdrop-blur-sm rounded-xl border border-gray-800 p-6">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <MapPin className="text-red-500 mr-2" size={20} />
                  Select Location
                </h3>

                <div className="space-y-4">
                  {locations.map((location) => (
                    <div
                      key={location.id}
                      onClick={() => handleLocationSelect(location.id)}
                      className={`flex cursor-pointer rounded-lg border ${
                        selectedLocation === location.id
                          ? "border-red-500/50 bg-red-900/10"
                          : "border-gray-800 hover:border-red-500/30 bg-black/40"
                      } p-4 transition-all duration-300 group`}
                    >
                      <div className="w-20 h-20 rounded-lg overflow-hidden mr-4 flex-shrink-0">
                        <img
                          src={location.image || "/placeholder.svg"}
                          alt={location.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-white group-hover:text-red-400 transition-colors duration-300">
                          {location.name}
                        </h4>
                        <p className="text-sm text-gray-300 mt-1">{location.address}</p>
                        <div className="flex items-center text-xs text-gray-400 mt-2">
                          <Clock className="mr-1" size={12} />
                          {location.hours}
                        </div>
                      </div>
                      <div className="ml-2 flex items-center">
                        <div
                          className={`w-5 h-5 rounded-full border-2 ${
                            selectedLocation === location.id ? "border-red-500 bg-red-500/20" : "border-gray-600"
                          } flex items-center justify-center`}
                        >
                          {selectedLocation === location.id && <div className="w-2 h-2 rounded-full bg-red-500"></div>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-red-900/10 border border-red-900/30 rounded-lg">
                  <h4 className="font-medium text-white mb-2 flex items-center">
                    <DollarSign className="text-red-500 mr-2" size={16} />
                    Online Exclusive Offer
                  </h4>
                  <p className="text-sm text-gray-300">
                    Sign up online today and receive a special discount on your first month's membership!
                  </p>
                </div>
              </div>

              {/* Right side - Form */}
              <div className="bg-black/30 backdrop-blur-sm rounded-xl border border-gray-800 p-6">
                <h3 className="text-xl font-semibold text-white mb-6">Request Information</h3>

                <form ref={formRef} className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      placeholder="Enter your full name"
                      className="w-full rounded-lg border border-gray-700 bg-black/40 p-3 text-white placeholder-gray-500 focus:border-red-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email address"
                      className="w-full rounded-lg border border-gray-700 bg-black/40 p-3 text-white placeholder-gray-500 focus:border-red-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Enter your phone number"
                      className="w-full rounded-lg border border-gray-700 bg-black/40 p-3 text-white placeholder-gray-500 focus:border-red-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="program" className="block text-sm font-medium text-gray-300 mb-1">
                      Program
                    </label>
                    <select
                      id="program"
                      value={selectedProgram || ""}
                      onChange={(e) => setSelectedProgram(Number(e.target.value) || null)}
                      className="w-full rounded-lg border border-gray-700 bg-black/40 p-3 text-white focus:border-red-500 focus:outline-none"
                    >
                      <option value="">Select a Program</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-1">
                      Location
                    </label>
                    <select
                      id="location"
                      value={selectedLocation || ""}
                      onChange={(e) => setSelectedLocation(e.target.value || null)}
                      className="w-full rounded-lg border border-gray-700 bg-black/40 p-3 text-white focus:border-red-500 focus:outline-none"
                    >
                      <option value="">Select Location</option>
                      {locations.map((location) => (
                        <option key={location.id} value={location.id}>
                          {location.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Additional Information (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Any specific questions or concerns?"
                      className="w-full rounded-lg border border-gray-700 bg-black/40 p-3 text-white placeholder-gray-500 focus:border-red-500 focus:outline-none"
                    ></textarea>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white shadow-md group">
                    <span className="flex items-center justify-center">
                      Get Information
                      <ArrowRight
                        size={16}
                        className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </Button>

                  <p className="text-xs text-gray-400 mt-4">
                    By submitting this form, you are providing consent for Seigler's Karate Center to contact you via
                    email or text. Standard rates may apply. You can opt-out anytime by replying STOP.
                  </p>
                </form>
              </div>
            </div>
          )}
        </div>

        {/* Testimonial */}
        <div className="mt-16 bg-black/30 backdrop-blur-sm rounded-xl border border-gray-800 p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>

          <div className="relative z-10 text-center">
            <div className="inline-block mb-4">
              <svg className="h-10 w-10 text-red-500 opacity-50" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
            </div>
            <p className="text-xl text-gray-300 italic max-w-3xl mx-auto mb-6">
              "Joining Seigler's Karate Center was one of the best decisions I've made for my family. The instructors
              are exceptional, and the programs are well-structured. My children have gained confidence, discipline, and
              physical fitness."
            </p>
            <div className="font-medium text-white">Sarah Johnson</div>
            <div className="text-sm text-gray-400">Parent of two students • Member since 2021</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Booking
