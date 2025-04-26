"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Award, MapPin, Users, Clock, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const About = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current
    const image = imageRef.current
    const content = contentRef.current
    const stats = statsRef.current

    if (section && image && content && stats) {
      // Title animation with improved easing
      gsap.fromTo(
        section.querySelector(".title-container"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        },
      )

      // Image animation with more dynamic movement
      gsap.fromTo(
        image,
        { opacity: 0, x: -50, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        },
      )

      // Text content animation with staggered reveal
      gsap.fromTo(
        content.querySelectorAll("h3, p"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: content,
            start: "top 80%",
          },
        },
      )

      // Stats animation with bounce effect
      gsap.fromTo(
        stats.querySelectorAll(".stat-item"),
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: stats,
            start: "top 90%",
          },
        },
      )
    }
  }, [])

  return (
    <section id="about" className="relative py-24 text-white" ref={sectionRef}>
      {/* Background image with enhanced overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-40"
        style={{ backgroundImage: "url('/dojo-background.png')" }}
      ></div>

      <div className="container relative mx-auto px-4 z-20">
        <div className="title-container mb-16 text-center">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="h-px w-8 bg-red-500"></div>
            <span className="text-red-400 uppercase tracking-wider text-sm font-semibold">Our Legacy</span>
            <div className="h-px w-8 bg-red-500"></div>
          </div>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-red-200">
            About Our Dojo
          </h2>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-red-600 to-red-400 rounded-full mt-6"></div>
        </div>

        <div className="flex flex-col items-center gap-16 md:flex-row">
          <div className="w-full md:w-5/12" ref={imageRef}>
            <div className="relative h-[450px] w-full overflow-hidden rounded-2xl shadow-2xl">
              {/* Main image */}
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: "url('Images/team/88A5D580-B43D-4916-92F9-2B8037264B27-rotated-e1724873881945.jpg')" }}
              ></div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-gradient-to-r from-red-600/20 to-red-500/5 blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-gradient-to-r from-red-600/10 to-yellow-500/5 blur-xl"></div>

              {/* Year badge */}
              <div className="absolute top-6 right-6 bg-black/70 backdrop-blur-sm rounded-xl px-4 py-2 border border-red-500/30">
                <span className="text-lg font-semibold text-white">Est. 1982</span>
              </div>

              {/* Bottom text */}
              <div className="absolute bottom-0 left-0 w-full p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Award className="text-red-500" size={20} />
                  <h3 className="text-xl font-bold text-white">Award-Winning Training</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Recognized for excellence in martial arts instruction and student development
                </p>
              </div>
            </div>
          </div>

          <div className="w-full space-y-8 md:w-7/12" ref={contentRef}>
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
              <div className="space-y-4">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Since 1982, Seigler's Karate Center has empowered kids, teens & adults through martial arts. We
                  instill life skills like focus, discipline & respect, helping students achieve success on and off the
                  mat.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Searching for the perfect martial arts school can feel like a challenge. At SKC, we make it easy for
                  you and your family to find your best selves through martial arts. Our skilled instructors are
                  committed to understanding your goals and guiding you towards success in a dynamic, engaging, and
                  supportive atmosphere.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6" ref={statsRef}>
              <div className="stat-item rounded-xl border border-red-900/30 bg-black/60 p-6 text-center shadow-xl backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 group">
                <div className="flex flex-col items-center">
                  <Clock
                    className="mb-3 text-red-500 group-hover:text-red-400 transition-colors duration-300"
                    size={28}
                  />
                  <span className="block text-4xl font-bold text-white mb-1 group-hover:text-red-400 transition-colors duration-300">
                    40+
                  </span>
                  <span className="text-sm text-gray-400">Years Experience</span>
                </div>
              </div>
              <div className="stat-item rounded-xl border border-red-900/30 bg-black/60 p-6 text-center shadow-xl backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 group">
                <div className="flex flex-col items-center">
                  <Users
                    className="mb-3 text-red-500 group-hover:text-red-400 transition-colors duration-300"
                    size={28}
                  />
                  <span className="block text-4xl font-bold text-white mb-1 group-hover:text-red-400 transition-colors duration-300">
                    1000+
                  </span>
                  <span className="text-sm text-gray-400">Happy Students</span>
                </div>
              </div>
              <div className="stat-item rounded-xl border border-red-900/30 bg-black/60 p-6 text-center shadow-xl backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 group">
                <div className="flex flex-col items-center">
                  <MapPin
                    className="mb-3 text-red-500 group-hover:text-red-400 transition-colors duration-300"
                    size={28}
                  />
                  <span className="block text-4xl font-bold text-white mb-1 group-hover:text-red-400 transition-colors duration-300">
                    2+
                  </span>
                  <span className="text-sm text-gray-400">Locations</span>
                </div>
              </div>
              <div className="stat-item rounded-xl border border-red-900/30 bg-black/60 p-6 text-center shadow-xl backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 group">
                <div className="flex flex-col items-center">
                  <Award
                    className="mb-3 text-red-500 group-hover:text-red-400 transition-colors duration-300"
                    size={28}
                  />
                  <span className="block text-4xl font-bold text-white mb-1 group-hover:text-red-400 transition-colors duration-300">
                    6+
                  </span>
                  <span className="text-sm text-gray-400">Programs</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Button
                variant="default"
                className="bg-gradient-to-r from-red-700 to-red-500 hover:from-red-600 hover:to-red-400 px-8 py-6 text-white font-medium shadow-[0_8px_30px_rgb(225,29,72,0.3)] rounded-xl text-lg transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  Learn More About Our Story
                  <ChevronRight
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    size={20}
                  />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
