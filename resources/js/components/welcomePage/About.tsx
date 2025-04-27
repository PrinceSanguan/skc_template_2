"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Award, MapPin, Users, Clock } from "lucide-react"
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
      // Animate elements with the .animate-in class
      gsap.fromTo(
        ".animate-in",
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        },
      )

      // Image animation
      gsap.fromTo(
        image,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          delay: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: image,
            start: "top 80%",
          },
        },
      )
    }
  }, [])

  return (
    <section ref={sectionRef} id="about" className="relative py-24 text-white">
      {/* Main content */}
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Central content */}
        <div className="relative">
          <div className="animate-in mb-16 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="text-red-600">ABOUT</span> <span className="text-white">OUR DOJO</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {/* Image section */}
            <div ref={imageRef} className="relative">
              <div className="relative h-[350px] w-full overflow-hidden rounded-lg shadow-md border border-red-900/10">
                {/* Main image */}
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('Images/team/88A5D580-B43D-4916-92F9-2B8037264B27-rotated-e1724873881945.jpg')",
                  }}
                ></div>

                {/* Simple gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                {/* Year badge - simplified */}
                <div className="absolute top-4 right-4 bg-black/70 px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-white">EST. 1982</span>
                </div>
              </div>
            </div>

            {/* Content section */}
            <div ref={contentRef} className="space-y-6">
              <div className="animate-in p-6 rounded-lg">
                <h3 className="text-xl font-bold text-red-500 mb-5">Our Story</h3>
                <div className="space-y-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Since 1982, Seigler's Karate Center has empowered kids, teens & adults through martial arts. We
                    instill life skills like focus, discipline & respect, helping students achieve success on and off
                    the mat.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Searching for the perfect martial arts school can feel like a challenge. At SKC, we make it easy for
                    you and your family to find your best selves through martial arts. Our skilled instructors are
                    committed to understanding your goals and guiding you towards success.
                  </p>
                </div>
              </div>

              <div className="animate-in pt-4">
                <Button
                  variant="default"
                  className="bg-red-600 hover:bg-red-700 px-6 py-2 text-white text-sm font-medium rounded-md"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>

          {/* Stats section - simplified */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="animate-in rounded-md border border-red-900/10 bg-black/40 p-5 text-center">
              <div className="flex flex-col items-center">
                <Clock className="mb-3 text-red-500" size={18} />
                <span className="block text-xl font-bold text-white mb-1">40+</span>
                <span className="text-xs text-gray-400">YEARS</span>
              </div>
            </div>
            <div className="animate-in rounded-md border border-red-900/10 bg-black/40 p-5 text-center">
              <div className="flex flex-col items-center">
                <Users className="mb-3 text-red-500" size={18} />
                <span className="block text-xl font-bold text-white mb-1">1000+</span>
                <span className="text-xs text-gray-400">STUDENTS</span>
              </div>
            </div>
            <div className="animate-in rounded-md border border-red-900/10 bg-black/40 p-5 text-center">
              <div className="flex flex-col items-center">
                <MapPin className="mb-3 text-red-500" size={18} />
                <span className="block text-xl font-bold text-white mb-1">2+</span>
                <span className="text-xs text-gray-400">LOCATIONS</span>
              </div>
            </div>
            <div className="animate-in rounded-md border border-red-900/10 bg-black/40 p-5 text-center">
              <div className="flex flex-col items-center">
                <Award className="mb-3 text-red-500" size={18} />
                <span className="block text-xl font-bold text-white mb-1">6+</span>
                <span className="text-xs text-gray-400">PROGRAMS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
