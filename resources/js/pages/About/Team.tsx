"use client"

import Template from "./Template"
import AnimatedElement from "@/components/ui/animated-element"
import { Link } from "@inertiajs/react"
import {
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Award,
  Star,
  Calendar,
  Users,
  ArrowRight,
  Bookmark,
  Shield,
  Target,
} from "lucide-react"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

interface TeamMember {
  name: string
  position: string
  bio?: string
  slug: string
  imageUrl: string
  belt?: string
  yearsExperience?: number
  specialties?: string[]
}

interface Location {
  name: string
  address: string
  city: string
  zip: string
  phone: string
  email: string
}

export default function Team() {
  // Refs for GSAP animations
  const heroRef = useRef<HTMLDivElement>(null)
  const teamGridRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState<"instructors" | "locations">("instructors")

  // Enhanced team members with additional data
  const teamMembers: TeamMember[] = [
    {
      name: "Mr. Tommy Seigler",
      position: "Founder/Owner",
      imageUrl: "/Images/team/Tommy.jpg",
      slug: "tommy-seigler",
      belt: "8th Degree Black Belt",
      yearsExperience: 45,
      specialties: ["Traditional Karate", "Self Defense", "Leadership"],
    },
    {
      name: "Mrs. Jennifer Seigler Waters",
      position: "Executive Sensei",
      imageUrl: "/Images/team/Jennifer.jpg",
      slug: "jennifer-seigler-waters",
      belt: "6th Degree Black Belt",
      yearsExperience: 30,
      specialties: ["Kids Program Development", "Tournament Competition", "Character Development"],
    },
    {
      name: "Mrs. Lisa Corley",
      position: "Chief of Operations",
      imageUrl: "/Images/team/Lisa.jpg",
      slug: "lisa-corley",
      belt: "5th Degree Black Belt",
      yearsExperience: 25,
      specialties: ["Program Management", "Staff Training", "Student Relations"],
    },
    {
      name: "Mr. Titus Waters",
      position: "Head Sensei",
      imageUrl: "/Images/team/Titus.jpg",
      slug: "titus-waters",
      belt: "5th Degree Black Belt",
      yearsExperience: 22,
      specialties: ["Advanced Techniques", "Weapons Training", "Competition Coaching"],
    },
    {
      name: "Mr. Daniel Corley",
      position: "Senior Sensei",
      imageUrl: "/Images/team/Daniel.jpg",
      slug: "daniel-corley",
      belt: "4th Degree Black Belt",
      yearsExperience: 18,
      specialties: ["Adult Martial Arts", "Kickboxing", "Physical Conditioning"],
    },
    {
      name: "Ms. Cameron Corley",
      position: "Senior Success Coach",
      imageUrl: "/Images/team/Cameron.jpg",
      slug: "cameron-corley",
      belt: "3rd Degree Black Belt",
      yearsExperience: 15,
      specialties: ["Youth Development", "Leadership Training", "Tournament Preparation"],
    },
  ]

  const locations: Location[] = [
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

  // Core values for the new section
  const coreValues = [
    {
      icon: <Shield className="h-4 w-4" />,
      title: "Discipline",
      description: "Building mental fortitude and self-control through consistent practice",
    },
    {
      icon: <Target className="h-4 w-4" />,
      title: "Focus",
      description: "Developing concentration skills that transfer to all areas of life",
    },
    {
      icon: <Bookmark className="h-4 w-4" />,
      title: "Respect",
      description: "Cultivating honor for self, others, and traditions",
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

  return (
    <Template title="Our Team">
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
              <AnimatedElement type="fadeIn" delay={0.2}>
                <div className="inline-flex items-center space-x-2 mb-2">
                  <div className="h-px w-6 bg-red-500"></div>
                  <span className="text-red-400 uppercase tracking-wider text-xs font-semibold">Meet Our Masters</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-red-200">
                  <span className="text-red-600">Expert</span> Instructors
                </h1>
                <div className="h-0.5 w-12 bg-gradient-to-r from-red-600 to-red-400 rounded-full mb-3"></div>
                <p className="text-sm text-gray-300 mb-4 max-w-lg">
                  Since 1982, Seigler's Karate Center has empowered kids, teens & adults through martial arts
                  excellence, building confidence, discipline, and character.
                </p>
              </AnimatedElement>

              {/* Stats - Horizontal compact row */}
              <AnimatedElement type="fadeIn" delay={0.3}>
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
                      <span className="text-sm font-bold text-white">6</span>
                      <span className="text-[10px] text-gray-400 uppercase tracking-wider">Instructors</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 bg-black/40 px-3 py-1.5 rounded-md border border-red-900/20">
                    <Star className="text-red-500" size={16} />
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-white">155+</span>
                      <span className="text-[10px] text-gray-400 uppercase tracking-wider">Combined Years</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 bg-black/40 px-3 py-1.5 rounded-md border border-red-900/20">
                    <Calendar className="text-red-500" size={16} />
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-white">1000+</span>
                      <span className="text-[10px] text-gray-400 uppercase tracking-wider">Students</span>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            </div>

            {/* Right side - Image */}
            <div className="w-full md:w-1/2 mt-6 md:mt-0">
              <AnimatedElement type="fadeIn" delay={0.4}>
                <div className="relative h-48 md:h-64 overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-black/40 z-10"></div>
                  <img
                    src="/Images/team/group-photo.jpg"
                    alt="Seigler's Karate Center Team"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
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
                        span.textContent = "SKC Team"
                        parent.appendChild(span)
                      }
                    }}
                  />
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values - New Three Column Section */}
      <section className="py-6 relative bg-black/40">
        <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-2 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-3 gap-4">
            {coreValues.map((value, index) => (
              <div key={value.title} className="flex flex-col items-center text-center p-3">
                <div className="bg-red-900/20 p-2 rounded-full mb-2">
                  <div className="bg-red-900/40 p-1.5 rounded-full text-red-400">{value.icon}</div>
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">{value.title}</h3>
                <p className="text-xs text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabbed Content Section */}
      <section className="py-6 relative">
        <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-2 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          {/* Tab Navigation */}
          <div className="flex border-b border-red-900/20 mb-6">
            <button
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === "instructors"
                  ? "text-red-500 border-b-2 border-red-500"
                  : "text-gray-400 hover:text-gray-300"
              }`}
              onClick={() => setActiveTab("instructors")}
            >
              Our Instructors
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

          {/* Instructors Tab Content */}
          {activeTab === "instructors" && (
            <div>
              {/* Horizontal scrolling team members */}
              <div className="overflow-x-auto pb-4 -mx-4 px-4">
                <div className="flex space-x-4" style={{ minWidth: "max-content" }}>
                  {teamMembers.map((member, index) => (
                    <div key={member.name} className="w-64 flex-shrink-0">
                      <Link href={`/about/team/${member.slug}`} className="block">
                        <div className="group rounded-lg border border-red-900/30 bg-black/60 shadow-md backdrop-blur-sm overflow-hidden hover:border-red-600/50 transition-all duration-300 flex flex-col transform hover:-translate-y-1 hover:shadow-lg hover:shadow-red-900/20 cursor-pointer">
                          <div className="relative h-36 overflow-hidden">
                            <img
                              src={member.imageUrl || "/placeholder.svg"}
                              alt={member.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement
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
                                  span.className = "text-4xl font-bold text-red-500/50"
                                  span.textContent = member.name.charAt(0)
                                  parent.appendChild(span)
                                }
                              }}
                              style={{ objectPosition: "center 20%" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>

                            {/* Belt rank badge */}
                            {member.belt && (
                              <div className="absolute top-2 right-2 bg-black/80 text-white text-[10px] py-0.5 px-1.5 rounded border border-red-500/50 backdrop-blur-sm">
                                {member.belt}
                              </div>
                            )}
                          </div>
                          <div className="p-3 flex-grow flex flex-col justify-between">
                            <div>
                              <h3 className="text-sm font-bold text-white mb-0.5 group-hover:text-red-400 transition-colors duration-300">
                                {member.name}
                              </h3>
                              <div className="w-8 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full mb-1"></div>
                              <p className="text-xs text-red-400 font-medium mb-1">{member.position}</p>

                              {/* Specialties */}
                              {member.specialties && (
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {member.specialties.map((specialty, i) => (
                                    <span
                                      key={i}
                                      className="text-[9px] bg-red-900/20 text-red-300 px-1 py-0.5 rounded-full border border-red-900/30 inline-block"
                                    >
                                      {specialty}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>

                            <div className="mt-2 pt-2 border-t border-red-900/20">
                              <p className="text-xs text-red-400 group-hover:text-red-300 flex items-center">
                                View profile
                                <ArrowRight className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
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
                        className="inline-flex items-center text-xs text-red-400 hover:text-red-300 transition-colors"
                      >
                        View Details
                        <ChevronRight className="ml-1 h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Legacy & Philosophy - Side by Side */}
      <section className="py-6 relative">
        <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-2 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Legacy */}
            <div className="rounded-lg border border-red-900/30 bg-black/60 shadow-md backdrop-blur-sm p-4">
              <h2 className="text-lg font-bold text-white mb-2 flex items-center">
                <Award className="h-4 w-4 text-red-500 mr-2" />
                Our Legacy
              </h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full mb-3"></div>
              <p className="text-xs text-gray-300 leading-relaxed mb-3">
                Since 1982, Seigler's Karate Center has empowered kids, teens & adults through martial arts. We instill
                life skills like focus, discipline & respect, helping students achieve success on and off the mat.
              </p>
              <div className="grid grid-cols-3 gap-2 mt-2">
                <div className="rounded bg-black/40 border border-red-900/20 p-2 text-center">
                  <div className="text-red-500 mb-1">
                    <Award size={14} className="mx-auto" />
                  </div>
                  <h3 className="text-xs text-white font-medium">Award-Winning</h3>
                </div>
                <div className="rounded bg-black/40 border border-red-900/20 p-2 text-center">
                  <div className="text-red-500 mb-1">
                    <Users size={14} className="mx-auto" />
                  </div>
                  <h3 className="text-xs text-white font-medium">Family Owned</h3>
                </div>
                <div className="rounded bg-black/40 border border-red-900/20 p-2 text-center">
                  <div className="text-red-500 mb-1">
                    <Star size={14} className="mx-auto" />
                  </div>
                  <h3 className="text-xs text-white font-medium">Traditional</h3>
                </div>
              </div>
            </div>

            {/* Philosophy */}
            <div className="rounded-lg border border-red-900/30 bg-black/60 shadow-md backdrop-blur-sm p-4">
              <h2 className="text-lg font-bold text-white mb-2 flex items-center">
                <Star className="h-4 w-4 text-red-500 mr-2" />
                Our Philosophy
              </h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full mb-3"></div>
              <p className="text-xs text-gray-300 leading-relaxed">
                At Seigler's Karate Center, we believe martial arts training extends far beyond physical techniques. Our
                philosophy centers on developing the whole person - mind, body, and spirit. We emphasize:
              </p>
              <ul className="mt-2 space-y-1">
                <li className="flex items-start">
                  <ChevronRight className="h-3 w-3 text-red-500 mt-0.5 mr-1 flex-shrink-0" />
                  <span className="text-xs text-gray-300">Character development through consistent practice</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-3 w-3 text-red-500 mt-0.5 mr-1 flex-shrink-0" />
                  <span className="text-xs text-gray-300">Respect for self, others, and traditions</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-3 w-3 text-red-500 mt-0.5 mr-1 flex-shrink-0" />
                  <span className="text-xs text-gray-300">Discipline as a pathway to achievement</span>
                </li>
              </ul>
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
