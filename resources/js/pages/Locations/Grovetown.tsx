"use client"

import type React from "react"

import Template from "../About/Template"
import AnimatedElement from "@/components/ui/animated-element"
import { Link } from "@inertiajs/react"
import { useRef, useEffect, useState } from "react"
import { MapPin, Phone, Mail, Clock, ChevronRight, Star, Users, Award, Calendar } from "lucide-react"
import gsap from "gsap"

export default function Grovetown() {
  const particlesRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)

  // State for currently selected facility image
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Facility images
  const facilityImages = [
    {
      thumb: "/Images/team/JIU JITSU.jpg",
      full: "/Images/team/JIU JITSU.jpg",
      alt: "Grovetown Training Area",
    },
    {
      thumb: "/Images/team/88A5D580-B43D-4916-92F9-2B8037264B27-rotated-e1724873881945.jpg",
      full: "/Images/team/88A5D580-B43D-4916-92F9-2B8037264B27-rotated-e1724873881945.jpg",
      alt: "Grovetown Equipment Wall",
    },
    {
      thumb: "/Images/team/TN-Lil-Dragons.jpg",
      full: "/Images/team/TN-Lil-Dragons.jpg",
      alt: "Kids Classes Area",
    },
    {
      thumb: "/Images/team/TN-Teen-Karate.jpg",
      full: "/Images/team/TN-Teen-Karate.jpg",
      alt: "Grovetown Pro Shop",
    },
  ]

  // Set the first image as selected by default
  useEffect(() => {
    if (facilityImages.length > 0 && !selectedImage) {
      setSelectedImage(facilityImages[0].full)
    }
  }, [])

  // Function to handle image error
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.currentTarget
    img.onerror = null // Prevent infinite loop
    img.src = "/api/placeholder/400/300" // Fallback to placeholder
  }

  // Communities served
  const communitiesServed = ["Grovetown", "Harlem", "Appling", "Augusta", "Martinez", "Evans"]

  // Reviews
  const reviews = [
    {
      name: "Mark Mills",
      content: "Absolutely one of the best martial arts facilities anywhere.",
    },
    {
      name: "Kristine Gaylor Winning",
      content:
        "Best place to be a kid and even get to learn respect, self control, and discipline. Make it a family sport!!",
    },
    {
      name: "Sharnise Hill",
      content:
        "My son, Sebastien, really enjoys learning with the other children. As his mother I love how they keep his attention and focus on the class it's helped him a lot with focusing in preschool and at home. And for that I thank the Staff of SKC!!",
    },
    {
      name: "Crystal",
      content:
        "They're very informative, give clear descriptions of what the class consist of with structure. They have payment plans that are reasonable if you can't afford to pay it all at once. If you are a single mother that want to get your kid(s) focused, disciplined and full of confidence…than Seiglers Karate is the place to be. My kid has enjoyed this class and has been attending for a little over a month, plus they are very supportive for not just the kid but the parents.",
    },
    {
      name: "Sarah Hemphill",
      content:
        "My son has been attending SKC for almost 2 yrs. He absolutely looks forward to his classes every week and loves the parties they have. He's started to set goals for himself over the year and it's a proud and exciting moment for both him and I to see him achieve them! The instructors are fantastic at what they do and seem to make an effort to focus on making your kid better even in a full class of students! I highly recommend SKC to anyone considering karate for their child!",
    },
    {
      name: "Kimberly Perry Sanderlin",
      content:
        "Just started but the journey has been AMAZING! Could see a difference in son's FOCUS and SELF-AWARENESS after the consult session! Received his Gi and starter packet today and he's excited about his next session! Thanks for developing such a comprehensive program! Definitely getting MORE than many face-to-face offerings!",
    },
  ]

  // Operating hours
  const operatingHours = [
    { day: "Monday", hours: "1:00 PM – 9:00 PM" },
    { day: "Tuesday", hours: "1:00 PM – 9:00 PM" },
    { day: "Wednesday", hours: "1:00 PM – 9:00 PM" },
    { day: "Thursday", hours: "1:00 PM – 9:00 PM" },
    { day: "Friday", hours: "1:00 PM – 9:00 PM" },
    { day: "Saturday", hours: "Open for Special Events Only" },
    { day: "Sunday", hours: "Closed" },
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
    <Template title="Grovetown Location">
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
                  <span className="text-red-400 uppercase tracking-wider text-xs font-semibold">Our Dojo</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-red-200">
                  <span className="text-red-600">Grovetown</span>, GA Location
                </h1>
                <div className="h-0.5 w-12 bg-gradient-to-r from-red-600 to-red-400 rounded-full mb-3"></div>
                <p className="text-sm text-gray-300 mb-4 max-w-lg">
                  Nestled in the Central Savannah River Area (CSRA), our Grovetown dojo provides state-of-the-art
                  facilities and expert instruction for martial artists of all levels.
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
                  {selectedImage ? (
                    <img
                      src={selectedImage || "/placeholder.svg"}
                      alt="Seigler's Karate Center Grovetown Facility"
                      className="w-full h-full object-cover"
                      onError={handleImageError}
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full w-full bg-gradient-to-br from-red-900/30 to-black">
                      <span className="text-xl font-bold text-red-500/50">Loading...</span>
                    </div>
                  )}
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </div>

      {/* Facility Images - Horizontal Scrolling */}
      <section className="py-4 relative bg-black/40">
        <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-2 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex space-x-4 overflow-x-auto pb-4 -mx-4 px-4">
            {facilityImages.map((image, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-32 h-24 rounded-md border ${selectedImage === image.full ? "border-red-600" : "border-red-900/20"} overflow-hidden cursor-pointer transition-all duration-300 hover:border-red-600/70 transform hover:scale-105`}
                onClick={() => setSelectedImage(image.full)}
              >
                <img
                  src={image.thumb || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                  onError={handleImageError}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Info - Two Column Layout */}
      <section className="py-6 relative">
        <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-2 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Info */}
            <div className="rounded-lg border border-red-900/30 bg-black/60 shadow-md backdrop-blur-sm p-4 hover:border-red-600/50 transition-all duration-300">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center">
                <MapPin className="h-4 w-4 text-red-500 mr-2" />
                Contact Information
              </h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full mb-4"></div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-red-900/20 p-2 rounded-full mr-3 flex-shrink-0">
                    <MapPin className="h-4 w-4 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1">Address</h3>
                    <p className="text-xs text-gray-300">
                      271 Meridian Drive
                      <br />
                      Grovetown, GA 30813
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-900/20 p-2 rounded-full mr-3 flex-shrink-0">
                    <Phone className="h-4 w-4 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1">Phone</h3>
                    <p className="text-xs text-gray-300">(706) 855-5685</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-900/20 p-2 rounded-full mr-3 flex-shrink-0">
                    <Mail className="h-4 w-4 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1">Email</h3>
                    <p className="text-xs text-gray-300">skc@goskc.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center text-xs text-red-400 hover:text-red-300 transition-colors"
                >
                  Contact Us
                  <ChevronRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* Hours */}
            <div className="rounded-lg border border-red-900/30 bg-black/60 shadow-md backdrop-blur-sm p-4 hover:border-red-600/50 transition-all duration-300">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center">
                <Clock className="h-4 w-4 text-red-500 mr-2" />
                Operating Hours
              </h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full mb-4"></div>

              <div className="space-y-1">
                {operatingHours.map((item, index) => (
                  <div key={index} className="flex justify-between border-b border-red-900/20 py-1 last:border-0">
                    <span className="text-xs font-medium text-white w-32">{item.day}:</span>
                    <span className="text-xs text-gray-300">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-6 relative">
        <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-2 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="rounded-lg border border-red-900/30 bg-black/60 shadow-md backdrop-blur-sm overflow-hidden">
            <div className="h-64 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.123456789012!2d-82.19876543210987!3d33.4567890123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDI3JzI0LjQiTiA4MsKwMTEnNTUuNiJX!5e0!3m2!1sen!2sus!4v1712345678910!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Communities We Serve */}
      <section className="py-6 relative">
        <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-2 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-lg font-bold text-white mb-4 flex items-center justify-center">
            <MapPin className="h-4 w-4 text-red-500 mr-2" />
            Communities We Serve
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full mb-4 mx-auto"></div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {communitiesServed.map((community, index) => (
              <div
                key={index}
                className="rounded-lg border border-red-900/30 bg-black/60 shadow-md backdrop-blur-sm p-3 text-center hover:border-red-600/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                <h4 className="text-sm font-semibold text-white">{community}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Our Grovetown Location */}
      <section className="py-6 relative">
        <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-2 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="rounded-lg border border-red-900/30 bg-black/60 shadow-md backdrop-blur-sm p-4 hover:border-red-600/50 transition-all duration-300">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center">
              <Star className="h-4 w-4 text-red-500 mr-2" />
              About Our Grovetown Location
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full mb-4"></div>

            <p className="text-xs text-gray-300 leading-relaxed mb-4">
              Nestled in the Central Savana River Area or CSRA, Seigler's Karate Center offers more than just martial
              arts training. It's a vibrant community where both kids and adults come together to build confidence,
              develop leadership skills, and embrace personal growth. Our focus goes beyond mastering punches and kicks;
              we're dedicated to fostering an environment where everyone can thrive and evolve.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="rounded bg-black/40 border border-red-900/20 p-3">
                <h3 className="text-sm font-bold text-white mb-2 flex items-center">
                  <Users className="h-3 w-3 text-red-500 mr-1" />
                  For Children
                </h3>
                <p className="text-xs text-gray-300">
                  Martial arts provides a strong foundation in self-esteem and respect, essential in today's world.
                  Facing challenges like bullying and peer pressure becomes easier with the confidence and skills gained
                  from our classes.
                </p>
              </div>

              <div className="rounded bg-black/40 border border-red-900/20 p-3">
                <h3 className="text-sm font-bold text-white mb-2 flex items-center">
                  <Users className="h-3 w-3 text-red-500 mr-1" />
                  For Adults
                </h3>
                <p className="text-xs text-gray-300">
                  Adults find our school to be a sanctuary from the hustle and bustle of daily life. It's not just about
                  getting fit; it's about joining a community committed to self-improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews & Testimonials - Horizontal Scrolling */}
      <section className="py-6 relative">
        <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-2 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-lg font-bold text-white mb-4 flex items-center justify-center">
            <Star className="h-4 w-4 text-red-500 mr-2" />
            Hear From Our Community
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full mb-4 mx-auto"></div>

          <div className="overflow-x-auto pb-4 -mx-4 px-4">
            <div className="flex space-x-4" style={{ minWidth: "max-content" }}>
              {reviews.slice(0, 4).map((review, index) => (
                <div
                  key={index}
                  className="w-80 flex-shrink-0 rounded-lg border border-red-900/30 bg-black/60 shadow-md backdrop-blur-sm p-4 hover:border-red-600/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-3">
                    <div className="mr-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-red-700 to-red-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {review.name.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">{review.name}</h4>
                      <div className="flex text-yellow-400 mt-0.5">
                        <Star className="h-2 w-2 fill-current" />
                        <Star className="h-2 w-2 fill-current" />
                        <Star className="h-2 w-2 fill-current" />
                        <Star className="h-2 w-2 fill-current" />
                        <Star className="h-2 w-2 fill-current" />
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-300 line-clamp-4">{review.content}</p>
                </div>
              ))}
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
              <Link
                href="/contact"
                className="bg-white text-red-700 font-medium py-1.5 px-4 rounded text-xs shadow-md hover:bg-gray-100 transition-all duration-300"
              >
                Start Training
              </Link>
              <Link
                href="/programs"
                className="bg-transparent border border-white text-white hover:bg-white/10 font-medium py-1.5 px-4 rounded text-xs transition-all duration-300"
              >
                Schedule Tour
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Template>
  )
}
