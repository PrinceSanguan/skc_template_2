"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MapPin, ChevronRight, ArrowRight, Calendar, Clock, Info } from "lucide-react"

const Communities = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current
    const cards = cardsRef.current

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

    // Cards animation
    if (cards) {
      gsap.fromTo(
        cards.querySelectorAll(".community-card"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cards,
            start: "top 80%",
          },
        },
      )
    }
  }, [])

  const communities = [
    {
      id: 1,
      title: "Augusta, GA",
      description:
        "Our flagship location serving the Augusta area with comprehensive martial arts programs for all ages and skill levels.",
      members: "Core Location",
      image: "/augusta-ga.png",
      established: "1982",
      classes: "Mon-Fri: 4pm-8pm, Sat: 9am-12pm",
    },
    {
      id: 2,
      title: "Martinez, GA",
      description:
        "Serving the Martinez community with our signature martial arts training and character development programs.",
      members: "Growing Community",
      image: "/martinez-ga.png",
      established: "1998",
      classes: "Mon-Fri: 3pm-7pm, Sat: 10am-1pm",
    },
    {
      id: 3,
      title: "Grovetown, GA",
      description: "Our newest location bringing martial arts excellence to the Grovetown area at 271 Meridian Drive.",
      members: "New Location",
      image: "/grovetown-ga.png",
      established: "2021",
      classes: "Mon-Fri: 4pm-8pm, Sat: 9am-12pm",
    },
    {
      id: 4,
      title: "Evans, GA",
      description:
        "Serving Evans with professional martial arts instruction for all ages at 4150 Washington Road, Suite 4.",
      members: "Main Dojo",
      image: "/evans-ga.png",
      established: "1995",
      classes: "Mon-Fri: 4pm-9pm, Sat: 8am-1pm",
    },
  ]

  const additionalAreas = [
    "North Augusta, SC",
    "Appling, GA",
    "Harlem, GA",
    "Fort Eisenhower, GA",
    "Thomson, GA",
    "Waynesboro, GA",
  ]

  return (
    <section ref={sectionRef} id="communities" className="relative py-24 text-white">
      {/* Subtle background elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="title-container mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-red-500/50"></div>
            <span className="text-red-500 uppercase tracking-wider text-sm font-medium">Our Reach</span>
            <div className="h-px w-12 bg-red-500/50"></div>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-white">
            <span className="text-red-600">COMMUNITIES</span> WE SERVE
          </h2>
          <p className="mx-auto max-w-2xl text-gray-300 mt-4">
            Providing high-quality martial arts instruction throughout the CSRA area. Find a location near you and start
            your martial arts journey today.
          </p>
        </div>

        {/* Horizontal scrolling cards */}
        <div className="mb-16 overflow-hidden">
          <div
            ref={cardsRef}
            className="flex space-x-6 pb-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {communities.map((community, index) => (
              <div
                key={community.id}
                className="community-card flex-shrink-0 w-[300px] md:w-[350px] snap-center"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className="h-full rounded-xl border border-gray-800 overflow-hidden bg-black/40 backdrop-blur-sm transition-all duration-300 hover:border-red-500/30 hover:shadow-lg hover:shadow-red-900/10"
                  style={{
                    transform: hoveredIndex === index ? "translateY(-8px)" : "translateY(0)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={community.image || "/placeholder.svg"}
                      alt={community.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-red-600/90 text-white text-xs font-medium px-3 py-1 rounded-full">
                      {community.members}
                    </div>
                    <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                      Est. {community.established}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
                      <MapPin className="text-red-500 mr-2" size={18} />
                      {community.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{community.description}</p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start">
                        <Clock className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-gray-300 text-sm">{community.classes}</span>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full border-red-900/30 text-red-500 hover:bg-red-900/20 hover:border-red-500/50 hover:text-red-400 group"
                    >
                      <span className="flex items-center">
                        Visit Location
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
        </div>

        {/* Map and additional areas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map visualization */}
          <div className="lg:col-span-2 bg-black/30 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden">
            <div className="p-6 border-b border-gray-800">
              <h3 className="text-xl font-semibold text-white flex items-center">
                <MapPin className="text-red-500 mr-2" size={20} />
                CSRA Coverage Map
              </h3>
            </div>
            <div className="relative aspect-[16/9] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent z-10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full relative">
                  <img
                    src="/augusta-ga.png"
                    alt="Map of Augusta area"
                    className="w-full h-full object-cover opacity-60"
                  />

                  {/* Location markers */}
                  <div className="absolute top-[30%] left-[40%] transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 bg-red-600 rounded-full animate-ping absolute"></div>
                    <div className="w-4 h-4 bg-red-600 rounded-full relative"></div>
                    <div className="absolute top-6 left-6 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                      Augusta, GA
                    </div>
                  </div>

                  <div className="absolute top-[40%] left-[60%] transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 bg-red-600 rounded-full animate-ping absolute"></div>
                    <div className="w-4 h-4 bg-red-600 rounded-full relative"></div>
                    <div className="absolute top-6 left-6 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                      Evans, GA
                    </div>
                  </div>

                  <div className="absolute top-[60%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 bg-red-600 rounded-full animate-ping absolute"></div>
                    <div className="w-4 h-4 bg-red-600 rounded-full relative"></div>
                    <div className="absolute top-6 left-6 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                      Grovetown, GA
                    </div>
                  </div>

                  <div className="absolute top-[50%] left-[30%] transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 bg-red-600 rounded-full animate-ping absolute"></div>
                    <div className="w-4 h-4 bg-red-600 rounded-full relative"></div>
                    <div className="absolute top-6 left-6 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                      Martinez, GA
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional areas */}
          <div className="bg-black/30 backdrop-blur-sm rounded-xl border border-gray-800 p-6">
            <h3 className="text-xl font-semibold text-white flex items-center mb-6">
              <Info className="text-red-500 mr-2" size={20} />
              Additional Areas
            </h3>

            <div className="space-y-4">
              {additionalAreas.map((area, index) => (
                <div
                  key={index}
                  className="p-3 border border-gray-800/50 rounded-lg hover:border-red-500/30 transition-colors duration-300 hover:bg-red-900/5 flex items-center"
                >
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">{area}</span>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Button className="w-full bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white shadow-md group">
                <span className="flex items-center">
                  Find a Location Near You
                  <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Contact section */}
        <div className="mt-16 text-center">
          <p className="mb-6 text-gray-300">Interested in bringing Seigler's Karate Center to your community?</p>
          <Button
            variant="outline"
            className="rounded-lg border-red-600/30 px-8 py-3 text-red-400 hover:bg-red-900/20 hover:border-red-500/50 hover:text-red-300 transition-all duration-300 shadow-lg shadow-red-900/10 group"
          >
            <span className="flex items-center">
              <Calendar className="mr-2" size={18} />
              Schedule a Consultation
              <ChevronRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Communities
