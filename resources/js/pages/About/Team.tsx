"use client"

import Template from "./Template"
import AnimatedElement from "@/components/ui/animated-element"
import { Link } from "@inertiajs/react"
import { MapPin, Phone, Mail, ChevronRight, Award, Star, Calendar, Users } from "lucide-react"
import { useEffect, useRef } from "react"
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

  // Function to render belt rank with appropriate color
  const renderBeltRank = (belt: string) => {
    let beltColor = "bg-black"

    if (belt.includes("1st")) beltColor = "bg-black"
    else if (belt.includes("2nd")) beltColor = "bg-black"
    else if (belt.includes("3rd")) beltColor = "bg-black"
    else if (belt.includes("4th")) beltColor = "bg-black"
    else if (belt.includes("5th")) beltColor = "bg-black"
    else if (belt.includes("6th")) beltColor = "bg-black"
    else if (belt.includes("7th")) beltColor = "bg-black"
    else if (belt.includes("8th")) beltColor = "bg-black"

    return (
      <div className="flex items-center">
        <div className={`w-3 h-3 ${beltColor} border border-red-500 mr-2`}></div>
        <span>{belt}</span>
      </div>
    )
  }

  return (
    <Template title="Our Team">
      {/* Hero Section */}
      <div ref={heroRef} className="relative overflow-hidden min-h-[60vh] flex items-center">
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
              <span className="text-red-400 uppercase tracking-wider text-sm font-semibold">Meet Our Masters</span>
              <div className="h-px w-8 bg-red-500"></div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-red-200">
              <span className="text-red-600">Expert</span> Instructors
            </h1>
            <div className="mx-auto h-1 w-20 bg-gradient-to-r from-red-600 to-red-400 rounded-full mt-2"></div>
          </AnimatedElement>

          <AnimatedElement type="fadeIn" delay={0.3}>
            <div className="text-xl text-center text-gray-200 mt-8 mb-8 max-w-3xl mx-auto">
              <p className="leading-relaxed">
                Since 1982, Seigler's Karate Center has empowered kids, teens & adults through martial arts excellence.
              </p>
            </div>
          </AnimatedElement>

          {/* Stats */}
          <AnimatedElement type="fadeIn" delay={0.4}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
              <div className="rounded-xl border border-red-900/30 bg-black/60 p-4 text-center shadow-xl backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 group">
                <div className="flex flex-col items-center">
                  <Award
                    className="mb-2 text-red-500 group-hover:text-red-400 transition-colors duration-300"
                    size={24}
                  />
                  <span className="block text-3xl font-bold text-white mb-1 group-hover:text-red-400 transition-colors duration-300">
                    40+
                  </span>
                  <span className="text-xs text-gray-400 uppercase tracking-wider">Years Experience</span>
                </div>
              </div>
              <div className="rounded-xl border border-red-900/30 bg-black/60 p-4 text-center shadow-xl backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 group">
                <div className="flex flex-col items-center">
                  <Users
                    className="mb-2 text-red-500 group-hover:text-red-400 transition-colors duration-300"
                    size={24}
                  />
                  <span className="block text-3xl font-bold text-white mb-1 group-hover:text-red-400 transition-colors duration-300">
                    6
                  </span>
                  <span className="text-xs text-gray-400 uppercase tracking-wider">Expert Instructors</span>
                </div>
              </div>
              <div className="rounded-xl border border-red-900/30 bg-black/60 p-4 text-center shadow-xl backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 group">
                <div className="flex flex-col items-center">
                  <Star
                    className="mb-2 text-red-500 group-hover:text-red-400 transition-colors duration-300"
                    size={24}
                  />
                  <span className="block text-3xl font-bold text-white mb-1 group-hover:text-red-400 transition-colors duration-300">
                    155+
                  </span>
                  <span className="text-xs text-gray-400 uppercase tracking-wider">Combined Years</span>
                </div>
              </div>
              <div className="rounded-xl border border-red-900/30 bg-black/60 p-4 text-center shadow-xl backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 group">
                <div className="flex flex-col items-center">
                  <Calendar
                    className="mb-2 text-red-500 group-hover:text-red-400 transition-colors duration-300"
                    size={24}
                  />
                  <span className="block text-3xl font-bold text-white mb-1 group-hover:text-red-400 transition-colors duration-300">
                    1000+
                  </span>
                  <span className="text-xs text-gray-400 uppercase tracking-wider">Students Trained</span>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>

      {/* Team Introduction */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedElement type="fadeIn" delay={0.3}>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white relative inline-block">
                Meet Our Team
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
              </h2>
              <p className="text-lg text-gray-300 mb-12 leading-relaxed">
                Meet our dedicated team of martial arts instructors! Each member of our staff brings a unique set of
                skills and a deep passion for martial arts, committed to providing exceptional training and fostering a
                supportive, empowering community for all our students.
              </p>
            </div>
          </AnimatedElement>

          {/* Team Members Grid */}
          <div ref={teamGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-12">
            {teamMembers.map((member, index) => (
              <AnimatedElement key={member.name} type="fadeInUp" delay={0.2 + index * 0.1}>
                <Link href={`/about/team/${member.slug}`} className="block">
                  <div className="group rounded-xl border border-red-900/30 bg-black/60 shadow-xl backdrop-blur-sm overflow-hidden hover:border-red-600/50 transition-all duration-300 flex flex-col transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-900/20 cursor-pointer">
                    <div className="w-full">
                      {" "}
                      {/* Added padding-top here */}
                      <div className="relative h-64 overflow-hidden">
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
                              span.className = "text-6xl font-bold text-red-500/50"
                              span.textContent = member.name.charAt(0)
                              parent.appendChild(span)
                            }
                          }}
                          style={{ objectPosition: "center 20%" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>

                        {/* Red overlay on hover */}
                        <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Belt rank badge */}
                        {member.belt && (
                          <div className="absolute top-4 right-4 bg-black/80 text-white text-xs py-1 px-2 rounded-md border border-red-500/50 backdrop-blur-sm">
                            {member.belt}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col justify-between relative">
                      {/* Decorative elements */}
                      <div className="absolute top-0 right-0 w-16 h-16 bg-red-600/5 rounded-full blur-xl"></div>

                      <div>
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-red-400 transition-colors duration-300">
                          {member.name}
                        </h3>
                        <div className="w-12 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full mb-3"></div>
                        <p className="text-red-400 font-semibold mb-3">{member.position}</p>

                        {/* Experience and specialties */}
                        <div className="mt-3 space-y-2">
                          {member.yearsExperience && (
                            <div className="flex items-center text-sm text-gray-300">
                              <Calendar className="h-4 w-4 text-red-500 mr-2" />
                              <span>{member.yearsExperience} years experience</span>
                            </div>
                          )}

                          {member.specialties && (
                            <div className="flex flex-wrap gap-1 mt-3">
                              {member.specialties.map((specialty, i) => (
                                <span
                                  key={i}
                                  className="text-xs bg-red-900/20 text-red-300 px-1.5 py-0.5 rounded-full border border-red-900/30 inline-block text-[10px]"
                                >
                                  {specialty}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        <div className="mt-4 pt-3 border-t border-red-900/20">
                          <p className="text-red-400 group-hover:text-red-300 flex items-center">
                            View full biography
                            <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Our Legacy Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
        <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>

        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>

        {/* Martial arts silhouette */}
        <div
          className="absolute bottom-0 right-0 w-64 h-64 bg-contain bg-no-repeat bg-right-bottom opacity-10"
          style={{ backgroundImage: "url('/karate-silhouette-1.png')" }}
        ></div>

        <div className="container mx-auto px-4 relative z-20">
          <AnimatedElement type="fadeIn" delay={0.2}>
            <div className="rounded-xl border border-red-900/30 bg-black/60 shadow-xl backdrop-blur-sm p-10 max-w-4xl mx-auto relative overflow-hidden">
              {/* Japanese calligraphy background */}
              <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 opacity-5 w-64 h-64">
                <svg viewBox="0 0 100 100" className="w-full h-full text-red-500">
                  <path
                    d="M30,20 Q50,10 70,20 T90,40 Q80,60 90,80 T70,90 Q50,100 30,90 T10,70 Q20,50 10,30 T30,20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative inline-block">
                  Seigler's Karate Center
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mt-8">
                  Since 1982, Seigler's Karate Center has empowered kids, teens & adults through martial arts. We
                  instill life skills like focus, discipline & respect, helping students achieve success on and off the
                  mat.
                </p>

                {/* Legacy highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                  <div className="rounded-lg bg-black/40 border border-red-900/20 p-4 hover:border-red-600/30 transition-all duration-300">
                    <div className="text-red-500 mb-2">
                      <Award size={24} className="mx-auto" />
                    </div>
                    <h3 className="text-white font-semibold mb-1">Award-Winning</h3>
                    <p className="text-sm text-gray-400">Recognized excellence in martial arts instruction</p>
                  </div>
                  <div className="rounded-lg bg-black/40 border border-red-900/20 p-4 hover:border-red-600/30 transition-all duration-300">
                    <div className="text-red-500 mb-2">
                      <Users size={24} className="mx-auto" />
                    </div>
                    <h3 className="text-white font-semibold mb-1">Family Owned</h3>
                    <p className="text-sm text-gray-400">Three generations of martial arts excellence</p>
                  </div>
                  <div className="rounded-lg bg-black/40 border border-red-900/20 p-4 hover:border-red-600/30 transition-all duration-300">
                    <div className="text-red-500 mb-2">
                      <Star size={24} className="mx-auto" />
                    </div>
                    <h3 className="text-white font-semibold mb-1">Traditional Values</h3>
                    <p className="text-sm text-gray-400">Preserving authentic martial arts traditions</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedElement type="fadeIn" delay={0.4}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative inline-block">
                Our Locations
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
              </h2>
            </div>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {locations.map((location, index) => (
              <AnimatedElement key={location.name} type="fadeInUp" delay={0.3 + index * 0.1}>
                <div className="rounded-xl border border-red-900/30 bg-black/60 shadow-xl backdrop-blur-sm p-8 hover:border-red-600/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-900/20 relative overflow-hidden group">
                  {/* Decorative elements */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600/5 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-red-600/5 rounded-full blur-xl"></div>

                  {/* Location image placeholder */}
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-red-500">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
                      <path d="M50,10 L50,90 M10,50 L90,50" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                      <MapPin className="h-6 w-6 text-red-500 mr-2" />
                      {location.name}
                    </h3>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full mb-4"></div>

                    <div className="bg-black/30 rounded-lg p-4 mb-4 border border-red-900/20">
                      <p className="text-gray-300 mb-1">{location.address}</p>
                      <p className="text-gray-300">
                        {location.city}, GA {location.zip}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div className="bg-black/30 rounded-lg p-3 border border-red-900/20 flex items-center">
                        <Phone className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{location.phone}</span>
                      </div>
                      <div className="bg-black/30 rounded-lg p-3 border border-red-900/20 flex items-center">
                        <Mail className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{location.email}</span>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-red-900/20 flex justify-between items-center">
                      <Link
                        href={`/locations/${location.city.toLowerCase()}`}
                        className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors group-hover:translate-x-1"
                      >
                        View Location Details
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>

                      <Link
                        href={`/contact?location=${location.city.toLowerCase()}`}
                        className="text-sm bg-red-900/20 text-red-300 px-3 py-1 rounded-full border border-red-900/30 hover:bg-red-900/30 transition-colors duration-300"
                      >
                        Contact
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedElement type="fadeIn" delay={0.2}>
            <div className="relative rounded-xl overflow-hidden">
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
                <p className="text-lg text-gray-100 mb-8">
                  Join our community and discover the transformative power of martial arts training.
                </p>

                <div className="flex flex-col sm:flex-row justify-center space-x-0 sm:space-x-4">
                  <button className="bg-white text-red-700 font-bold py-3 px-8 rounded-md text-lg shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 flex items-center mx-0 sm:mr-3">
                    Start Your Training Today
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </button>

                  <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-md text-lg transition-all duration-300 flex items-center mx-0">
                    Schedule a Tour
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </button>
                </div>

                {/* Testimonial preview */}
                <div className="mt-10 pt-6 border-t border-white/20 max-w-2xl mx-auto">
                  <div className="italic text-white/90 text-sm">
                    "Seigler's Karate Center has transformed my child's confidence and focus. The instructors are
                    exceptional!"
                  </div>
                  <div className="mt-2 text-white/70 text-xs">— Sarah M., Parent</div>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </Template>
  )
}
