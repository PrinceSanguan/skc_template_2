"use client"

import Template from "../About/Template"
import AnimatedElement from "@/components/ui/animated-element"
import { Link } from "@inertiajs/react"
import { useRef, useEffect, useState } from "react"
import { MapPin, Phone, Mail, Clock, ChevronRight, Star, Users } from "lucide-react"
import gsap from "gsap"

export default function Evans() {
  const particlesRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  
  // State for currently selected facility image
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Facility images 
  const facilityImages = [
    {
      thumb: "/Images/team/JIU JITSU.jpg", 
      full: "/Images/team/JIU JITSU.jpg",
      alt: "Main Training Area"
    },
    {
      thumb: "/Images/team/88A5D580-B43D-4916-92F9-2B8037264B27-rotated-e1724873881945.jpg", 
      full: "/Images/team/88A5D580-B43D-4916-92F9-2B8037264B27-rotated-e1724873881945.jpg",
      alt: "Equipment Wall"
    },
    {
      thumb: "/Images/team/TN-Lil-Dragons.jpg", 
      full: "/Images/team/TN-Lil-Dragons.jpg",
      alt: "Kids Training Area"
    },
    {
      thumb: "/Images/team/TN-Teen-Karate.jpg", 
      full: "/Images/team/TN-Teen-Karate.jpg",
      alt: "Pro Shop"
    }
  ]

  // Set the first image as selected by default
  useEffect(() => {
    if (facilityImages.length > 0 && !selectedImage) {
      setSelectedImage(facilityImages[0].full)
    }
  }, [])

  // Function to handle image error
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.currentTarget;
    img.onerror = null; // Prevent infinite loop
    img.src = "/api/placeholder/400/300"; // Fallback to placeholder
  };

  // Communities served
  const communitiesServed = [
    "Evans, GA",
    "Augusta, GA",
    "Martinez, GA",
    "Grovetown, GA",
    "Appling, GA",
    "Harlem, GA",
    "Fort Eisenhower, GA",
    "North Augusta, SC",
  ]

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
    {
      name: "Braswell Tanksley",
      content:
        "This is an excellent program for children it helps boost confidence and increases their mental focus as well as discipline.",
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
    <Template title="Evans Location">
      {/* Hero Section */}
      <div ref={heroRef} className="relative overflow-hidden min-h-[40vh] flex items-center">
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
              <span className="text-red-400 uppercase tracking-wider text-sm font-semibold">Our Dojo</span>
              <div className="h-px w-8 bg-red-500"></div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-red-200">
              <span className="text-red-600">Evans</span>, GA Location
            </h1>
            <div className="mx-auto h-1 w-20 bg-gradient-to-r from-red-600 to-red-400 rounded-full mt-2"></div>
          </AnimatedElement>

          <AnimatedElement type="fadeIn" delay={0.3}>
            <div className="text-xl text-center text-gray-200 mt-8 mb-8 max-w-3xl mx-auto">
              <p className="leading-relaxed">
                Nestled in the Central Savannah River Area (CSRA), our premier Evans dojo provides state-of-the-art
                facilities and expert instruction for martial artists of all levels.
              </p>
            </div>
          </AnimatedElement>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Location Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Facility Gallery */}
          <AnimatedElement type="slideInLeft" delay={0.4}>
            <div className="rounded-xl border border-red-900/30 bg-black/60 shadow-xl backdrop-blur-sm overflow-hidden hover:border-red-600/50 transition-all duration-300 relative">
              <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>

              <div className="aspect-w-16 aspect-h-9">
                <div className="h-72 bg-black/40 flex items-center justify-center relative overflow-hidden">
                  {selectedImage ? (
                    <>
                      <img 
                        src={selectedImage} 
                        alt="Seigler's Karate Center Facility" 
                        className="w-full h-full object-cover"
                        onError={handleImageError}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 pointer-events-none"></div>
                    </>
                  ) : (
                    <div className="flex items-center justify-center h-full w-full">
                      <span className="text-lg text-gray-400 relative z-10">Loading Facility Images...</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="p-8 relative z-10">
                <h2 className="text-2xl font-bold mb-4 text-white relative inline-block">
                  Our Facility
                  <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Our state-of-the-art facility features padded training areas, specialized equipment, changing rooms, a
                  viewing area for parents, and a pro shop with quality martial arts supplies.
                </p>
                <div className="grid grid-cols-2 gap-3 mt-6">
                  {facilityImages.map((image, index) => (
                    <div 
                      key={index} 
                      className={`h-24 bg-black/40 border ${selectedImage === image.full ? 'border-red-600' : 'border-red-900/20'} rounded-lg flex items-center justify-center transform transition-all duration-300 hover:scale-105 hover:border-red-600/70 cursor-pointer overflow-hidden`}
                      onClick={() => setSelectedImage(image.full)}
                    >
                      <img 
                        src={image.thumb} 
                        alt={image.alt} 
                        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                        onError={handleImageError}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedElement>

          {/* Contact & Location */}
          <AnimatedElement type="slideInRight" delay={0.4}>
            <div className="rounded-xl border border-red-900/30 bg-black/60 shadow-xl backdrop-blur-sm overflow-hidden h-full hover:border-red-600/50 transition-all duration-300 relative">
              <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
              <div className="absolute -top-20 -left-20 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>

              <div className="aspect-w-16 aspect-h-9">
                <div className="h-72 bg-black/40 flex items-center justify-center relative overflow-hidden">
                  {/* Replace with actual Google Map or map image */}
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.1234567890123!2d-82.13456789012345!3d33.54321098765432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDMyJzM1LjYiTiA4MsKwMDgnMDQuOCJX!5e0!3m2!1sen!2sus!4v1712345678901!5m2!1sen!2sus" 
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
              <div className="p-8 relative z-10">
                <h2 className="text-2xl font-bold mb-6 text-white relative inline-block">
                  Location & Contact
                  <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start group">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-700 to-red-600 flex items-center justify-center mr-4 shadow-lg group-hover:shadow-red-500/20 transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Address</h3>
                      <p className="text-gray-300 mt-2 group-hover:text-gray-200 transition-colors duration-300">
                        4150 Washington Road, Suite 4
                        <br />
                        Evans, GA 30809
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-700 to-red-600 flex items-center justify-center mr-4 shadow-lg group-hover:shadow-red-500/20 transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Phone</h3>
                      <p className="text-gray-300 mt-2 group-hover:text-gray-200 transition-colors duration-300">
                        (706) 855-5685
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-700 to-red-600 flex items-center justify-center mr-4 shadow-lg group-hover:shadow-red-500/20 transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Email</h3>
                      <p className="text-gray-300 mt-2 group-hover:text-gray-200 transition-colors duration-300">
                        skc@goskc.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-700 to-red-600 flex items-center justify-center mr-4 shadow-lg group-hover:shadow-red-500/20 transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Hours</h3>
                      <div className="text-gray-300 mt-2 group-hover:text-gray-200 transition-colors duration-300 space-y-1">
                        {operatingHours.map((item, index) => (
                          <div
                            key={index}
                            className="flex justify-between border-b border-red-900/20 py-1 last:border-0"
                          >
                            <span className="font-medium w-32">{item.day}:</span>
                            <span>{item.hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="block w-full bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white text-center font-medium py-4 px-6 rounded-lg transition-all duration-300 shadow-[0_4px_10px_rgba(220,38,38,0.3)] hover:shadow-[0_6px_15px_rgba(220,38,38,0.4)] transform hover:-translate-y-1 items-center justify-center"
                  >
                    Contact Us
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>

        {/* About Our Evans Location */}
        <AnimatedElement type="fadeIn" delay={0.5}>
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 relative inline-block">
                About Our Evans Location
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
              </h2>
            </div>

            <div className="rounded-xl border border-red-900/30 bg-black/60 shadow-xl backdrop-blur-sm p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>

              {/* Martial arts silhouette */}
              <div
                className="absolute bottom-0 right-0 w-64 h-64 bg-contain bg-no-repeat bg-right-bottom opacity-10"
                style={{ backgroundImage: "url('/karate-silhouette-1.png')" }}
              ></div>

              <div className="relative z-10">
                <p className="text-gray-200 mb-6 leading-relaxed">
                  Nestled in the Central Savana River Area or CSRA, Seigler's Karate Center offers more than just
                  martial arts training. It's a vibrant community where both kids and adults come together to build
                  confidence, develop leadership skills, and embrace personal growth. Our focus goes beyond mastering
                  punches and kicks; we're dedicated to fostering an environment where everyone can thrive and evolve.
                </p>

                <p className="text-gray-200 mb-6 leading-relaxed">
                  Martial arts is far more than what you see in movies. It's a journey that instills discipline,
                  respect, and perseverance—qualities that benefit every aspect of life. Augusta, with its dynamic and
                  diverse community, perfectly complements our mission.
                </p>

                <p className="text-gray-200 mb-6 leading-relaxed">
                  At SKC, we are committed to making a meaningful impact, helping our members grow into confident,
                  compassionate, and wise individuals.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                  <div className="rounded-xl border border-red-900/30 bg-black/40 p-6 hover:border-red-600/50 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-700 to-red-600 flex items-center justify-center mr-3 shadow-lg">
                        <Users className="h-5 w-5 text-white" />
                      </div>
                      For Children
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Martial arts provides a strong foundation in self-esteem and respect, essential in today's world.
                      Facing challenges like bullying and peer pressure becomes easier with the confidence and skills
                      gained from our classes. We teach kids that perseverance through tough times leads to growth, both
                      in martial arts and in life.
                    </p>
                  </div>

                  <div className="rounded-xl border border-red-900/30 bg-black/40 p-6 hover:border-red-600/50 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-700 to-red-600 flex items-center justify-center mr-3 shadow-lg">
                        <Users className="h-5 w-5 text-white" />
                      </div>
                      For Adults
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Adults find our school to be a sanctuary from the hustle and bustle of daily life. It's not just
                      about getting fit; it's about joining a community committed to self-improvement. Our dojo offers a
                      holistic approach to wellness, combining physical fitness with mental clarity and personal
                      fulfillment.
                    </p>
                  </div>
                </div>

                <p className="text-gray-200 mt-10 leading-relaxed">
                  At SKC, we believe in the transformative power of martial arts to enhance every aspect of life. We
                  focus on nurturing the whole person—body, mind, and spirit. Joining our dojo means taking on life's
                  challenges with courage and an open heart. We're proud to be Augusta's premier destination for
                  personal growth, where leaders are developed and the community becomes stronger every day.
                </p>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* Communities We Serve */}
        <AnimatedElement type="fadeIn" delay={0.5}>
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 mb-4 justify-center">
                <div className="h-px w-8 bg-red-500"></div>
                <span className="text-red-400 uppercase tracking-wider text-sm font-semibold">
                  Communities We Serve
                </span>
                <div className="h-px w-8 bg-red-500"></div>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 relative inline-block">
                Providing High-Quality Martial Arts
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {communitiesServed.map((community, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-red-900/30 bg-black/60 shadow-xl backdrop-blur-sm p-6 text-center hover:border-red-600/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_6px_15px_rgba(220,38,38,0.2)] relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-red-600/5 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-red-600/5 rounded-full blur-xl"></div>

                  <div className="relative z-10">
                    <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-gradient-to-r from-red-700 to-red-600 flex items-center justify-center shadow-lg">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-white font-semibold text-lg">{community}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedElement>

        {/* Reviews & Testimonials */}
        <AnimatedElement type="fadeIn" delay={0.6}>
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 mb-4 justify-center">
                <div className="h-px w-8 bg-red-500"></div>
                <span className="text-red-400 uppercase tracking-wider text-sm font-semibold">Reviews & Feedback</span>
                <div className="h-px w-8 bg-red-500"></div>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 relative inline-block">
                Hear From Our Community
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
              </h2>
              <p className="text-gray-300 text-center max-w-3xl mx-auto mt-6">
                See what our members are saying! Browse through the reviews to get a glimpse of the SKC experience
                straight from our community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.slice(0, 6).map((review, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-red-900/30 bg-black/60 shadow-xl backdrop-blur-sm p-8 hover:border-red-600/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_6px_15px_rgba(220,38,38,0.2)] relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-red-600/5 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-red-600/5 rounded-full blur-xl"></div>

                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="mr-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-red-700 to-red-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                          {review.name.charAt(0)}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg">{review.name}</h4>
                        <div className="flex text-yellow-400 mt-1">
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <svg
                        className="absolute -top-4 -left-2 h-8 w-8 text-red-600/30"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="text-gray-300 relative pl-6 leading-relaxed">{review.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedElement>

        {/* CTA */}
        <AnimatedElement type="fadeIn" delay={0.7}>
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
                Join us at Seigler's Karate Center in Evans and discover the transformative power of martial arts
                training. We offer a free introductory class for new students!
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-x-0 sm:space-x-4 gap-y-4 sm:gap-y-0">
                <Link
                  href="/contact"
                  className="bg-white text-red-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-md text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center mx-0 sm:mr-3"
                >
                  Schedule a Free Class
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/programs"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-md text-lg transition-all duration-300 flex items-center justify-center mx-0"
                >
                  Explore Our Programs
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </Template>
  )
}