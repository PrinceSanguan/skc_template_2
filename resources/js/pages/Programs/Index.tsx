"use client"

import Template from "./Template"
import AnimatedElement from "@/components/ui/animated-element"
import { Link } from "@inertiajs/react"
import { useRef, useEffect } from "react"
import { ChevronRight, Award, Users, Clock, MapPin, ArrowRight } from "lucide-react"
import gsap from "gsap"

export default function ProgramsIndex() {
  const particlesRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)

  const programs = [
    {
      id: "lil-dragons",
      title: "Lil Dragons (4 — 5)",
      description:
        "A fun and engaging program designed specifically for young children aged 4-5, focusing on basic motor skills, coordination, and social skills through martial arts activities.",
      image:
        "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      link: "/programs/lil-dragons",
      icon: "dragon",
    },
    {
      id: "kids-karate",
      title: "Kids Karate (6 — 10)",
      description:
        "Empowering children ages 6-10 with focus, discipline, and confidence while teaching practical self-defense techniques and traditional karate values.",
      image:
        "https://images.unsplash.com/photo-1599586120252-4c0b2893abd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      link: "/programs/kids-karate",
      icon: "child",
    },
    {
      id: "teens-karate",
      title: "Teens Karate (11 — 13)",
      description:
        "A dynamic program tailored for teens that builds mental strength, physical fitness, and leadership skills while navigating the challenges of adolescence.",
      image:
        "https://images.unsplash.com/photo-1599586120380-910c76c5f50b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      link: "/programs/teens-karate",
      icon: "teen",
    },
    {
      id: "adult-kempo",
      title: "Adult Kempo Karate (14+)",
      description:
        "A comprehensive martial arts system for adults, teaching practical self-defense, traditional forms, and physical conditioning in a supportive environment.",
      image:
        "https://images.unsplash.com/photo-1555597673-b21d5c3c8c9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      link: "/programs/adult-kempo",
      icon: "adult",
    },
    {
      id: "kickboxing",
      title: "Kickboxing (14+)",
      description:
        "High-energy cardio workouts combined with authentic martial arts techniques, providing an excellent way to improve fitness, reduce stress, and learn striking skills.",
      image:
        "https://images.unsplash.com/photo-1549824506-bfeba95ef151?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      link: "/programs/kickboxing",
      icon: "kick",
    },
    {
      id: "jiu-jitsu",
      title: "Jiu Jitsu (14+)",
      description:
        "Focused on ground fighting and submission techniques, our Jiu Jitsu program emphasizes leverage and technique over strength, making it an effective martial art for practitioners of all sizes.",
      image:
        "https://images.unsplash.com/photo-1558304970-cb2878c1a42b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      link: "/programs/jiu-jitsu",
      icon: "ground",
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

  // Function to render program icon
  const renderProgramIcon = (iconType: string) => {
    switch (iconType) {
      case "dragon":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path d="M12 3c-1.2 0-2.4.6-3 1.7A3.6 3.6 0 0 0 4.6 9c-1 .6-1.7 1.8-1.7 3 0 2 1.4 3.4 3.4 3.4.6 0 1.1-.2 1.7-.4.3 1 .8 1.8 1.5 2.5.2.2.3.4.5.6.2.3.4.5.6.8.8.8 1.8 1.2 2.8 1.2 1 0 2-.4 2.8-1.2l.6-.8c.2-.2.3-.4.5-.6.7-.7 1.2-1.5 1.5-2.5.6.2 1.1.4 1.7.4 2 0 3.4-1.4 3.4-3.4 0-1.2-.7-2.4-1.7-3A3.6 3.6 0 0 0 15 4.7C14.4 3.6 13.2 3 12 3z" />
          </svg>
        )
      case "child":
        return <Users className="w-6 h-6" />
      case "teen":
        return <Users className="w-6 h-6" />
      case "adult":
        return <Users className="w-6 h-6" />
      case "kick":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
            <path d="M7 11v8" />
            <path d="M17 11v8" />
            <path d="M14 10V5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" />
            <path d="M10 10V3a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v7" />
            <path d="M18 10V5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" />
          </svg>
        )
      case "ground":
        return <Award className="w-6 h-6" />
      default:
        return <Award className="w-6 h-6" />
    }
  }

  return (
    <Template title="Programs">
      {/* Red top border */}
      <div className="h-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800"></div>

      {/* Hero Section */}
      <div ref={heroRef} className="relative overflow-hidden bg-black">
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

        <div className="container relative mx-auto px-4 py-16 z-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <AnimatedElement type="fadeIn" delay={0.2}>
                <div className="inline-flex items-center space-x-2 mb-4">
                  <div className="h-px w-8 bg-red-500"></div>
                  <span className="text-red-400 uppercase tracking-wider text-sm font-semibold">Training Programs</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-red-200">
                  Our Martial Arts <span className="text-red-600">Programs</span>
                </h1>
                <div className="h-1 w-20 bg-gradient-to-r from-red-600 to-red-400 rounded-full mt-2 mb-6"></div>
                <p className="text-xl text-gray-200 mb-8 max-w-xl">
                  At Seigler's Karate Center, we offer a variety of martial arts programs tailored to different ages and
                  skill levels. Discover the perfect class for you or your child.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-white text-red-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-md text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Schedule a Free Class
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </AnimatedElement>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <AnimatedElement type="fadeIn" delay={0.4}>
                <div className="relative rounded-xl overflow-hidden h-80 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1555597673-b21d5c3c8c9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="Martial Arts Training"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <div className="text-sm text-red-400 uppercase tracking-wider mb-2">Featured Program</div>
                    <h2 className="text-2xl font-bold text-white">Adult Kempo Karate</h2>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="bg-black py-20">
        <div className="container mx-auto px-4">
          {/* Featured Programs */}
          <div className="mb-20">
            <AnimatedElement type="fadeIn" delay={0.2}>
              <div className="flex items-center mb-10">
                <div className="h-px w-8 bg-red-500 mr-4"></div>
                <h2 className="text-3xl font-bold text-white">Featured Programs</h2>
              </div>
            </AnimatedElement>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programs.slice(0, 2).map((program, index) => (
                <AnimatedElement key={program.id} type="fadeInUp" delay={0.3 + index * 0.1}>
                  <div className="relative h-96 rounded-xl overflow-hidden group">
                    <img
                      src={program.image || "/placeholder.svg"}
                      alt={program.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-700 to-red-600 flex items-center justify-center mr-3 text-white">
                          {renderProgramIcon(program.icon)}
                        </div>
                        <h3 className="text-2xl font-bold text-white">{program.title}</h3>
                      </div>
                      <p className="text-gray-300 mb-6">{program.description}</p>
                      <Link
                        href={program.link}
                        className="inline-flex items-center bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-black py-2 px-4 rounded-lg transition-all duration-300 shadow-[0_4px_10px_rgba(220,38,38,0.3)] hover:shadow-[0_6px_15px_rgba(220,38,38,0.4)] self-start"
                      >
                        Learn More
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>

          {/* All Programs */}
          <div className="mb-20">
            <AnimatedElement type="fadeIn" delay={0.4}>
              <div className="flex items-center mb-10">
                <div className="h-px w-8 bg-red-500 mr-4"></div>
                <h2 className="text-3xl font-bold text-white">All Programs</h2>
              </div>
            </AnimatedElement>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {programs.slice(2).map((program, index) => (
                <AnimatedElement key={program.id} type="fadeInUp" delay={0.5 + index * 0.1}>
                  <div className="rounded-xl border border-red-900/30 bg-black/60 shadow-xl backdrop-blur-sm overflow-hidden h-full flex flex-col hover:border-red-600/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-900/20 group">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={program.image || "/placeholder.svg"}
                        alt={program.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    </div>

                    <div className="p-5 flex-grow flex flex-col">
                      <h3 className="text-lg font-bold text-white mb-2">{program.title}</h3>
                      <p className="text-gray-300 text-sm mb-4 flex-grow line-clamp-3">{program.description}</p>
                      <Link
                        href={program.link}
                        className="mt-auto inline-flex items-center text-red-400 hover:text-red-300 transition-colors"
                      >
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <AnimatedElement type="fadeIn" delay={0.6}>
            <div className="mb-20">
              <div className="flex items-center mb-10">
                <div className="h-px w-8 bg-red-500 mr-4"></div>
                <h2 className="text-3xl font-bold text-white">Benefits</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="rounded-xl border border-red-900/30 bg-black/60 shadow-xl backdrop-blur-sm p-6 hover:border-red-600/50 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600/5 rounded-full blur-xl"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-700 to-red-600 flex items-center justify-center mb-6 text-white">
                      <Award className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">Physical Development</h3>
                    <p className="text-gray-300">
                      Improve strength, flexibility, coordination, and overall fitness through structured training that
                      challenges the body in new ways.
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-red-900/30 bg-black/60 shadow-xl backdrop-blur-sm p-6 hover:border-red-600/50 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-red-600/5 rounded-full blur-xl"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-700 to-red-600 flex items-center justify-center mb-6 text-white">
                      <Users className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">Mental Strength</h3>
                    <p className="text-gray-300">
                      Develop focus, discipline, and perseverance that translate to success in all areas of life, from
                      school to career.
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-red-900/30 bg-black/60 shadow-xl backdrop-blur-sm p-6 hover:border-red-600/50 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-600/5 rounded-full blur-xl"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-700 to-red-600 flex items-center justify-center mb-6 text-white">
                      <Clock className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">Self-Defense Skills</h3>
                    <p className="text-gray-300">
                      Learn practical techniques that build confidence and provide the skills to stay safe in any
                      situation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>

          {/* CTA */}
          <AnimatedElement type="fadeIn" delay={0.7}>
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
              <div className="relative z-10 p-12 flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                  <h2 className="text-3xl font-bold text-white mb-4">Not Sure Which Program Is Right for You?</h2>
                  <p className="text-lg text-gray-100">
                    We invite you to visit one of our locations for a free trial class. Our instructors will help you
                    find the perfect program based on your age, experience, and goals.
                  </p>
                </div>
                <div className="md:w-1/3 flex flex-col space-y-4">
                  <Link
                    href="/contact"
                    className="bg-white text-red-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-md text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
                  >
                    Schedule a Free Class
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    href="/locations/evans"
                    className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-md text-lg transition-all duration-300 flex items-center justify-center"
                  >
                    Visit a Location
                    <MapPin className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </Template>
  )
}
