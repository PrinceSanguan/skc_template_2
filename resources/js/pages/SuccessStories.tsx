"use client"

import type React from "react"

import Template from "@/pages/Programs/Template"
import AnimatedElement from "@/components/ui/animated-element"
import { Link } from "@inertiajs/react"
import { useState, useEffect, useRef } from "react"

export default function SuccessStories() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoRef = useRef<HTMLIFrameElement>(null)

  // Default profile picture path
  const defaultProfilePicture = "/images/team/Default-Profile-Picture-PNG-Image-Transparent-Background.png"

  useEffect(() => {
    // Set images as loaded after component mounts to prevent hydration issues
    setImagesLoaded(true)
  }, [])

  const handlePlayVideo = () => {
    setIsVideoPlaying(true)
  }

  // Handle image error by using the default profile picture
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = defaultProfilePicture
  }

  // Featured success stories
  const featuredStories = [
    {
      id: 1,
      name: "Michael Chen",
      age: 15,
      program: "Teens Karate",
      years: 3,
      achievement: "Black Belt Achievement",
      quote:
        "When I started at Seigler's, I was shy and struggled with confidence. The instructors believed in me when I didn't believe in myself. Now I'm a black belt and assistant instructor, helping others find their strength.",
      image: "/martial-arts-student-michael.jpg",
    },
    {
      id: 2,
      name: "Sophia Williams",
      age: 8,
      program: "Kids Karate",
      years: 2,
      achievement: "Improved Focus & Confidence",
      quote:
        "Before karate, Sophia struggled with focus in school and was often anxious in new situations. Since joining Seigler's, her teachers have noticed dramatic improvements in her attention and confidence.",
      parent: "Jennifer Williams, Sophia's mother",
      image: "/martial-arts-student-sophia.jpg",
    },
  ]

  // Testimonials
  const testimonials = [
    {
      id: 1,
      name: "David Johnson",
      role: "Adult Kempo Student, 2 Years",
      quote:
        "I joined Seigler's at 42 years old, thinking I was too old to start martial arts. Two years later, I'm in the best shape of my life and have skills I never thought possible.",
      image: "/martial-arts-student-david.png",
    },
    {
      id: 2,
      name: "Maria Gonzalez",
      role: "Parent of Lil Dragons Student",
      quote:
        "My son has transformed from a shy 4-year-old to a confident 5-year-old with amazing focus. His preschool teacher even asked what changed. The answer? Seigler's Karate Center!",
      image: "/martial-arts-student-maria.jpg",
    },
    {
      id: 3,
      name: "Robert Smith",
      role: "Kickboxing Student, 1 Year",
      quote:
        "I've lost 35 pounds since joining the kickboxing program. The instructors push you to your limits but are incredibly supportive. The community here is what keeps me coming back.",
      image: "/martial-arts-student-robert.jpg",
    },
    {
      id: 4,
      name: "Amanda Taylor",
      role: "Jiu Jitsu Student, 3 Years",
      quote:
        "As a woman, learning self-defense has been empowering. The skills I've gained at Seigler's have given me confidence that extends to every area of my life.",
      image: "/martial-arts-student-amanda.jpg",
    },
  ]

  // Stats
  const stats = [
    { label: "Active Students", value: "500+", icon: "👥" },
    { label: "Black Belts Awarded", value: "120+", icon: "🥋" },
    { label: "Years of Operation", value: "15+", icon: "🏆" },
    { label: "Competitions Won", value: "200+", icon: "🏅" },
  ]

  return (
    <Template title="Success Stories">
      {/* Enhanced decorative elements - removed background images */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Particle animation with more particles and varied sizes */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full">
            {Array.from({ length: 40 }).map((_, index) => (
              <div
                key={index}
                className="particle absolute bg-red-500/20 rounded-full"
                style={{
                  width: `${Math.random() * 8 + 2}px`,
                  height: `${Math.random() * 8 + 2}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${Math.random() * 15 + 10}s linear infinite`,
                  opacity: Math.random() * 0.5 + 0.3,
                }}
              />
            ))}
          </div>
        </div>

        {/* More decorative blurs with varied sizes and positions */}
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-red-600/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-red-600/20 rounded-full filter blur-3xl" />
        <div className="absolute top-3/4 left-1/3 w-40 h-40 bg-red-600/10 rounded-full filter blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-red-600/10 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Success Stories Navigation - Enhanced */}
        <AnimatedElement type="fadeIn" delay={0.1}>
          <div className="mb-16">
            <div className="relative max-w-xs mx-auto md:mx-0">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex justify-between items-center bg-gradient-to-r from-red-700 to-red-900 hover:from-red-800 hover:to-red-950 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 border border-red-600/30"
              >
                <span className="text-lg tracking-wider">SUCCESS STORIES</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${isDropdownOpen ? "transform rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute z-20 w-full mt-2 bg-black/90 backdrop-blur-md rounded-lg shadow-lg overflow-hidden border border-red-900/50 transform transition-all duration-300 origin-top">
                  <Link
                    href="/success-stories/written-reviews"
                    className="block px-6 py-3 text-white hover:bg-red-900/50 transition-colors border-b border-red-900/30 font-medium"
                  >
                    Written Reviews
                  </Link>
                  <Link
                    href="/success-stories/video-testimonials"
                    className="block px-6 py-3 text-white hover:bg-red-900/50 transition-colors font-medium"
                  >
                    Video Testimonials
                  </Link>
                </div>
              )}
            </div>
          </div>
        </AnimatedElement>

        {/* Hero Section - Enhanced */}
        <AnimatedElement type="fadeIn" delay={0.2}>
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-red-600"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-center px-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 tracking-tight">
              Success Stories & Testimonials
            </h1>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-red-600"></div>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-red-700 to-red-500 mx-auto mb-6 rounded-full shadow-sm"></div>
        </AnimatedElement>

        <AnimatedElement type="fadeIn" delay={0.3}>
          <p className="text-xl md:text-2xl text-center text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            Discover how martial arts training at Seigler's Karate Center has transformed the lives of our students,
            building confidence, discipline, and skills that last a lifetime.
          </p>
        </AnimatedElement>

        {/* Japanese-inspired decorative element */}
        <div className="flex justify-center mb-16">
          <div className="w-16 h-16 relative">
            <div className="absolute inset-0 border-2 border-red-600 rounded-full"></div>
            <div className="absolute inset-2 border border-red-600/50 rounded-full"></div>
            <div className="absolute inset-4 border border-red-600/30 rounded-full"></div>
            <div className="absolute inset-6 border border-red-600/20 rounded-full"></div>
          </div>
        </div>

        {/* Featured Success Stories - Enhanced */}
        <div className="mb-24">
          <AnimatedElement type="fadeIn" delay={0.4}>
            <div className="flex items-center justify-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 tracking-tight">
                Featured Success Stories
              </h2>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-red-700 to-red-500 mx-auto mb-16 rounded-full shadow-sm"></div>
          </AnimatedElement>

          {featuredStories.map((story, index) => (
            <AnimatedElement
              key={story.id}
              type={index % 2 === 0 ? "slideInLeft" : "slideInRight"}
              delay={0.5 + index * 0.1}
            >
              <div className="rounded-2xl overflow-hidden mb-16 border border-red-900/50 bg-black/70 backdrop-blur-md shadow-[0_0_25px_rgba(0,0,0,0.7)] transition-all duration-500 hover:shadow-[0_0_35px_rgba(139,0,0,0.3)] transform hover:-translate-y-1">
                <div className="md:flex">
                  <div className="md:w-1/3 relative bg-gradient-to-br from-red-900/40 to-black/60">
                    {imagesLoaded && (
                      <img
                        src={story.image || defaultProfilePicture}
                        alt={story.name}
                        className="w-full h-full object-cover absolute inset-0 opacity-70"
                        onError={handleImageError}
                      />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-red-600/20 backdrop-blur-sm flex items-center justify-center border border-red-600/30">
                        <svg
                          className="w-12 h-12 text-red-600/70"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                    {/* Achievement badge - enhanced */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-gradient-to-r from-red-700 to-red-900 text-white text-sm font-semibold px-4 py-2 rounded-lg inline-block mb-2 shadow-lg border border-red-600/30">
                        {story.achievement}
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8 md:p-10 relative">
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                      <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-red-600">
                        <path d="M50,0 C77.6,0 100,22.4 100,50 C100,77.6 77.6,100 50,100 C22.4,100 0,77.6 0,50 C0,22.4 22.4,0 50,0 Z M50,20 C33.4,20 20,33.4 20,50 C20,66.6 33.4,80 50,80 C66.6,80 80,66.6 80,50 C80,33.4 66.6,20 50,20 Z" />
                      </svg>
                    </div>

                    <h3 className="text-3xl font-bold mb-3 tracking-tight">{story.name}</h3>
                    <div className="flex items-center mb-6">
                      <div className="h-px w-12 bg-red-600/70"></div>
                      <p className="text-gray-400 px-3 text-sm">
                        {story.age} years old | {story.program} | {story.years} {story.years === 1 ? "year" : "years"}{" "}
                        of training
                      </p>
                    </div>
                    <p className="text-gray-300 mb-8 italic text-lg leading-relaxed">"{story.quote}"</p>
                    {story.parent && (
                      <p className="text-gray-400 text-sm flex items-center">
                        <span className="w-6 h-px bg-red-600/50 mr-3"></span>
                        {story.parent}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Japanese-inspired decorative element */}
        <div className="flex justify-center mb-16">
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 border border-red-600/30 transform rotate-45"></div>
            <div className="absolute inset-4 border border-red-600/50 transform rotate-45"></div>
            <div className="absolute inset-8 border border-red-600/70 transform rotate-45"></div>
            <div className="absolute inset-0 border border-red-600/30 transform rotate-[135deg]"></div>
            <div className="absolute inset-4 border border-red-600/50 transform rotate-[135deg]"></div>
            <div className="absolute inset-8 border border-red-600/70 transform rotate-[135deg]"></div>
          </div>
        </div>

        {/* Impact Stats - Enhanced */}
        <AnimatedElement type="fadeIn" delay={0.7}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="rounded-2xl border border-red-900/50 bg-black/70 backdrop-blur-md p-8 text-center shadow-[0_0_25px_rgba(0,0,0,0.7)] transition-all duration-500 hover:shadow-[0_0_35px_rgba(139,0,0,0.3)] transform hover:-translate-y-1 hover:scale-105"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-300 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedElement>

        {/* Testimonials - Enhanced */}
        <div className="mb-24">
          <AnimatedElement type="fadeIn" delay={0.8}>
            <div className="flex items-center justify-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 tracking-tight">
                What Our Students Say
              </h2>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-red-700 to-red-500 mx-auto mb-16 rounded-full shadow-sm"></div>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedElement key={testimonial.id} type="fadeInUp" delay={0.9 + index * 0.1}>
                <div className="rounded-2xl border border-red-900/50 bg-black/70 backdrop-blur-md p-8 shadow-[0_0_25px_rgba(0,0,0,0.7)] transition-all duration-500 hover:shadow-[0_0_35px_rgba(139,0,0,0.3)] relative overflow-hidden group">
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden">
                    <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-red-700 to-red-900 transform -translate-x-12 -translate-y-12 rotate-45 group-hover:scale-110 transition-transform duration-500"></div>
                  </div>

                  <div className="flex items-center mb-6 relative">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-red-600 mr-5 shadow-lg bg-gradient-to-br from-red-900/40 to-black/60 flex items-center justify-center">
                      {imagesLoaded ? (
                        <img
                          src={testimonial.image || defaultProfilePicture}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          onError={handleImageError}
                        />
                      ) : (
                        <svg
                          className="w-10 h-10 text-red-600/70"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.021A5 5 0 0010 11z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">{testimonial.name}</h3>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>

                  {/* Quote icon */}
                  <div className="absolute top-6 right-6 text-red-600/20 text-5xl font-serif">"</div>

                  <p className="text-gray-300 italic relative z-10 text-lg leading-relaxed">"{testimonial.quote}"</p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>

        {/* Japanese-inspired decorative element */}
        <div className="flex justify-center mb-16">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
        </div>

        {/* Video Testimonial Section - Enhanced */}
        <AnimatedElement type="fadeIn" delay={1.1}>
          <div className="rounded-2xl border border-red-900/50 bg-black/70 backdrop-blur-md overflow-hidden mb-24 shadow-[0_0_25px_rgba(0,0,0,0.7)] transition-all duration-500 hover:shadow-[0_0_35px_rgba(139,0,0,0.3)]">
            <div className="md:flex">
              <div
                className="md:w-1/2 bg-black/60 flex items-center justify-center p-10 relative"
                style={{ minHeight: "450px" }}
              >
                {/* Enhanced decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
                  <div className="absolute top-0 left-0 w-40 h-40 bg-red-600/30 rounded-full filter blur-3xl"></div>
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-red-600/30 rounded-full filter blur-3xl"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-red-600/10 rounded-full filter blur-3xl"></div>
                </div>

                {imagesLoaded && !isVideoPlaying && (
                  <img
                    src="https://img.youtube.com/vi/tAfJPan3ih0/maxresdefault.jpg"
                    alt="How SKC Boosted This Child's Confidence and Leadership"
                    className="absolute inset-0 w-full h-full object-cover opacity-70"
                    onError={(e) => {
                      e.currentTarget.src = defaultProfilePicture
                      e.currentTarget.className = "absolute inset-0 w-full h-full object-contain opacity-40"
                    }}
                  />
                )}

                {!isVideoPlaying ? (
                  <div className="text-center relative z-10">
                    <div
                      className="w-24 h-24 rounded-full bg-red-600/30 backdrop-blur-sm flex items-center justify-center mx-auto mb-6 cursor-pointer hover:bg-red-600/40 transition-all duration-300 border border-red-600/50 shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:shadow-[0_0_25px_rgba(220,38,38,0.5)] group"
                      onClick={handlePlayVideo}
                    >
                      <svg
                        className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-300 text-lg">Click to watch this transformation story</p>
                  </div>
                ) : (
                  <div className="relative z-10 w-full h-full">
                    <iframe
                      ref={videoRef}
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/tAfJPan3ih0?autoplay=1"
                      title="James' Transformation Story"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0"
                    ></iframe>
                  </div>
                )}
              </div>
              <div className="md:w-1/2 p-10">
                <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  How SKC Boosted This Child's Confidence and Leadership
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-red-700 to-red-500 mb-8 rounded-full"></div>

                {/* Decorative Japanese character */}
                <div className="absolute top-8 right-8 text-6xl text-red-600/10 font-serif">力</div>

                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  In this powerful parent testimonial, you'll hear how SKC goes beyond teaching martial arts. It's about
                  real growth—at home, at school, and in life.
                </p>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  From building confidence and discipline to encouraging leadership, see how our program has transformed
                  this child's life both on and off the mat.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-red-700 to-red-900 hover:from-red-800 hover:to-red-950 text-white py-3 px-8 rounded-lg shadow-lg transition-all duration-300 font-medium border border-red-600/30"
                >
                  Start Your Journey
                </Link>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* CTA - Enhanced - Removed background images */}
        <AnimatedElement type="fadeIn" delay={1.2}>
          <div className="rounded-2xl overflow-hidden relative mb-10">
            {/* Enhanced background with gradient only */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-950 z-0"></div>

            {/* Enhanced decorative elements */}
            <div className="absolute top-0 left-0 w-60 h-60 bg-red-600/30 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-red-600/30 rounded-full filter blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-600/10 rounded-full filter blur-3xl"></div>

            <div className="relative z-10 p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Write Your Success Story?</h2>
              <p className="text-white text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                Join the hundreds of students who have transformed their lives through martial arts training at
                Seigler's Karate Center. Your journey begins with a single step.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link
                  href="/contact"
                  className="bg-white text-red-700 hover:bg-gray-100 font-medium py-4 px-10 rounded-lg shadow-lg transition-all duration-300 text-lg border border-white/30 hover:scale-105 transform"
                >
                  Start with a Free Class
                </Link>
                <Link
                  href="/programs"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-4 px-10 rounded-lg shadow-lg transition-all duration-300 text-lg hover:scale-105 transform"
                >
                  Explore Our Programs
                </Link>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </Template>
  )
}
