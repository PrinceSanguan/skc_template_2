"use client"

import type React from "react"

import Template from "../Programs/Template"
import AnimatedElement from "@/components/ui/animated-element"
import { Link } from "@inertiajs/react"
import { useState, useEffect, useRef } from "react"

export default function VideoTestimonials() {
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [activeVideoId, setActiveVideoId] = useState("")
  const videoRef = useRef<HTMLIFrameElement>(null)
  const defaultProfilePicture = "/images/team/Default-Profile-Picture-PNG-Image-Transparent-Background.png"

  useEffect(() => {
    // Set images as loaded after component mounts to prevent hydration issues
    setImagesLoaded(true)
  }, [])

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = defaultProfilePicture
  }

  const handlePlayVideo = (videoId: string) => {
    setIsVideoPlaying(true)
    setActiveVideoId(videoId)
  }

  // Video testimonials data with actual YouTube video IDs
  const videoTestimonials = [
    {
      id: 1,
      name: "James Thompson",
      age: 12,
      program: "Kids Karate",
      years: 4,
      title: "From Bullied to Black Belt",
      description:
        "When James first came to us at age 8, he was being bullied at school and struggled with self-confidence. After 4 years of dedicated training, he not only earned his black belt but also developed the confidence to stand up for himself and others.",
      videoId: "tAfJPan3ih0",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      age: 34,
      program: "Adult Kempo",
      years: 2,
      title: "Finding Strength After Adversity",
      description:
        "After recovering from a serious injury, Sarah found both physical and mental healing through martial arts. Her journey at Seigler's Karate Center demonstrates how martial arts can help rebuild strength, confidence, and resilience.",
      videoId: "5CrGryQ5TtQ",
    },
    {
      id: 3,
      name: "The Martinez Family",
      title: "A Family Transformed",
      description:
        "What started as karate lessons for their kids turned into a family activity that transformed the Martinez family. Hear how training together has strengthened their bonds and brought positive changes to all their lives.",
      videoId: "v78zxfQmhVk",
    },
    {
      id: 4,
      name: "Coach Mike",
      program: "Teens Karate",
      years: 10,
      title: "The Instructor's Perspective",
      description:
        "Coach Mike has been teaching at Seigler's for over a decade. In this video, he shares his most memorable moments seeing students transform and grow through martial arts training.",
      videoId: "HgZ9U6EC-QU",
    },
  ]

  return (
    <Template title="Video Testimonials">
      {/* Enhanced decorative elements */}
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
        {/* Hero Section - Enhanced */}
        <AnimatedElement type="fadeIn" delay={0.2}>
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-red-600"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-center px-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 tracking-tight">
              Video Testimonials
            </h1>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-red-600"></div>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-red-700 to-red-500 mx-auto mb-6 rounded-full shadow-sm"></div>
        </AnimatedElement>

        <AnimatedElement type="fadeIn" delay={0.3}>
          <p className="text-xl md:text-2xl text-center text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            Watch inspiring videos from our students sharing their martial arts journey at Seigler's Karate Center.
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

        {/* Video Testimonials Grid - Enhanced */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {videoTestimonials.map((video, index) => (
              <AnimatedElement key={video.id} type="fadeInUp" delay={0.4 + index * 0.1}>
                <div className="rounded-2xl overflow-hidden h-full flex flex-col border border-red-900/50 bg-black/70 backdrop-blur-md shadow-[0_0_25px_rgba(0,0,0,0.7)] transition-all duration-500 hover:shadow-[0_0_35px_rgba(139,0,0,0.3)] transform hover:-translate-y-1">
                  <div className="relative">
                    {imagesLoaded && (
                      <div className="w-full h-64 relative overflow-hidden">
                        <img
                          src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                          alt={video.title}
                          className="w-full h-full object-cover"
                          onError={handleImageError}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30"></div>
                      </div>
                    )}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={() => handlePlayVideo(video.videoId)}
                        className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center hover:from-red-700 hover:to-red-900 transition-all duration-300 transform hover:scale-110 shadow-[0_0_25px_rgba(220,38,38,0.5)]"
                      >
                        <svg
                          className="w-10 h-10 text-white ml-1"
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
                      </button>
                    </div>
                  </div>
                  <div className="p-8 flex-grow flex flex-col relative">
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                      <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-red-600">
                        <path d="M50,0 C77.6,0 100,22.4 100,50 C100,77.6 77.6,100 50,100 C22.4,100 0,77.6 0,50 C0,22.4 22.4,0 50,0 Z M50,20 C33.4,20 20,33.4 20,50 C20,66.6 33.4,80 50,80 C66.6,80 80,66.6 80,50 C80,33.4 66.6,20 50,20 Z" />
                      </svg>
                    </div>

                    <div className="bg-gradient-to-r from-red-700 to-red-900 text-white text-sm font-semibold px-4 py-2 rounded-lg inline-block mb-4 shadow-lg border border-red-600/30 self-start">
                      {video.title}
                    </div>

                    <h3 className="text-2xl font-bold mb-3">{video.name}</h3>
                    <div className="flex items-center mb-6">
                      <div className="h-px w-12 bg-red-600/70"></div>
                      <p className="text-gray-400 px-3 text-sm">
                        {video.age && `${video.age} years old`}
                        {video.program && (video.age ? ` | ${video.program}` : video.program)}
                        {video.years &&
                          (video.program || video.age
                            ? ` | ${video.years} ${video.years === 1 ? "year" : "years"} of training`
                            : `${video.years} ${video.years === 1 ? "year" : "years"} of training`)}
                      </p>
                    </div>
                    <p className="text-gray-300 mb-8 flex-grow">{video.description}</p>
                    <button
                      onClick={() => handlePlayVideo(video.videoId)}
                      className="self-start bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 px-6 rounded-lg transition-all duration-300 shadow-lg border border-red-500/30 transform hover:scale-105"
                    >
                      Watch Video
                    </button>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>

        {/* Featured Video Section - Enhanced */}
        <AnimatedElement type="fadeIn" delay={0.8}>
          <div className="rounded-2xl overflow-hidden mb-20 border border-red-900/50 bg-black/70 backdrop-blur-md shadow-[0_0_25px_rgba(0,0,0,0.7)]">
            <div className="md:flex">
              <div className="md:w-2/3 relative">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  {isVideoPlaying ? (
                    <iframe
                      ref={videoRef}
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${activeVideoId || "tAfJPan3ih0"}?autoplay=1`}
                      title="Student Success Highlights"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0"
                    ></iframe>
                  ) : (
                    <>
                      {imagesLoaded && (
                        <div className="absolute inset-0 overflow-hidden">
                          <img
                            src="https://img.youtube.com/vi/tAfJPan3ih0/maxresdefault.jpg"
                            alt="How SKC Boosted This Child's Confidence and Leadership"
                            className="w-full h-full object-cover opacity-60"
                            onError={handleImageError}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/50"></div>
                        </div>
                      )}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <button
                            onClick={() => handlePlayVideo("tAfJPan3ih0")}
                            className="w-24 h-24 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center hover:from-red-700 hover:to-red-900 transition-all duration-300 transform hover:scale-110 shadow-[0_0_35px_rgba(220,38,38,0.5)] mx-auto mb-6"
                          >
                            <svg
                              className="w-12 h-12 text-white ml-1"
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
                          </button>
                          <p className="text-white text-xl font-medium">
                            Click to watch our student success highlights
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="md:w-1/3 p-10 relative">
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                  <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-red-600">
                    <path d="M50,0 C77.6,0 100,22.4 100,50 C100,77.6 77.6,100 50,100 C22.4,100 0,77.6 0,50 C0,22.4 22.4,0 50,0 Z M50,20 C33.4,20 20,33.4 20,50 C20,66.6 33.4,80 50,80 C66.6,80 80,66.6 80,50 C80,33.4 66.6,20 50,20 Z" />
                  </svg>
                </div>

                <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  {isVideoPlaying ? "Now Playing" : "Student Success Highlights"}
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-red-700 to-red-500 mb-6 rounded-full"></div>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  {isVideoPlaying
                    ? "Watch how SKC has boosted this child's confidence and leadership skills through martial arts training. See the real transformation that happens at Seigler's Karate Center."
                    : "This video showcases how SKC goes beyond teaching martial arts. It's about real growth—at home, at school, and in life. From building confidence and discipline to encouraging leadership, every child can thrive at Seigler's Karate Center."}
                </p>
                {!isVideoPlaying && (
                  <button
                    onClick={() => handlePlayVideo("tAfJPan3ih0")}
                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 px-6 rounded-lg transition-all duration-300 shadow-lg border border-red-500/30 transform hover:scale-105"
                  >
                    Watch Video
                  </button>
                )}
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* Japanese-inspired decorative element */}
        <div className="flex justify-center mb-16">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
        </div>

        {/* CTA - Enhanced */}
        <AnimatedElement type="fadeIn" delay={0.9}>
          <div className="rounded-2xl overflow-hidden relative mb-10">
            {/* Enhanced background with gradient only */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-950 z-0"></div>

            {/* Enhanced decorative elements */}
            <div className="absolute top-0 left-0 w-60 h-60 bg-red-600/30 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-red-600/30 rounded-full filter blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-600/10 rounded-full filter blur-3xl"></div>

            <div className="relative z-10 p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Be Our Next Success Story?</h2>
              <p className="text-white text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                Join our community and start your martial arts journey at Seigler's Karate Center. Your transformation
                begins with a single step.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link
                  href="/contact"
                  className="bg-white text-red-700 hover:bg-gray-100 font-medium py-4 px-10 rounded-lg shadow-lg transition-all duration-300 text-lg border border-white/30 hover:scale-105 transform"
                >
                  Start with a Free Class
                </Link>
                <Link
                  href="/success-stories"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-4 px-10 rounded-lg shadow-lg transition-all duration-300 text-lg hover:scale-105 transform"
                >
                  Back to All Success Stories
                </Link>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </Template>
  )
}
