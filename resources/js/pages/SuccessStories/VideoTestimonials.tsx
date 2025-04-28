"use client"

import type React from "react"

import Template from "../Programs/Template"
import AnimatedElement from "@/components/ui/animated-element"
import { Link } from "@inertiajs/react"
import { useState, useEffect, useRef } from "react"
import { ChevronRight, Play, Star, User, Calendar, Award } from "lucide-react"

export default function VideoTestimonials() {
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [activeVideoId, setActiveVideoId] = useState("")
  const [activeTab, setActiveTab] = useState("all")
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
      category: "kids",
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
      category: "adults",
    },
    {
      id: 3,
      name: "The Martinez Family",
      title: "A Family Transformed",
      description:
        "What started as karate lessons for their kids turned into a family activity that transformed the Martinez family. Hear how training together has strengthened their bonds and brought positive changes to all their lives.",
      videoId: "v78zxfQmhVk",
      category: "family",
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
      category: "instructors",
    },
  ]

  const filteredVideos =
    activeTab === "all" ? videoTestimonials : videoTestimonials.filter((video) => video.category === activeTab)

  return (
    <Template title="Video Testimonials">
      {/* Thin red line at top */}
      <div className="h-1 w-full bg-gradient-to-r from-red-700 via-red-600 to-red-700"></div>

      {/* Particle animation background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full">
            {Array.from({ length: 30 }).map((_, index) => (
              <div
                key={index}
                className="particle absolute bg-red-500/10 rounded-full"
                style={{
                  width: `${Math.random() * 6 + 2}px`,
                  height: `${Math.random() * 6 + 2}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${Math.random() * 10 + 5}s linear infinite`,
                  opacity: Math.random() * 0.3 + 0.1,
                }}
              />
            ))}
          </div>
        </div>

        {/* Decorative blurs */}
        <div className="absolute top-1/4 -left-20 w-40 h-40 bg-red-600/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-40 h-40 bg-red-600/10 rounded-full filter blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Hero Banner - Full Width */}
        <AnimatedElement type="fadeIn" delay={0.2}>
          <div className="relative h-[40vh] min-h-[300px] w-full overflow-hidden">
            {/* Background image with overlay */}
            <div className="absolute inset-0 bg-black">
              {imagesLoaded && (
                <img
                  src="https://img.youtube.com/vi/tAfJPan3ih0/maxresdefault.jpg"
                  alt="Success Stories"
                  className="w-full h-full object-cover opacity-40"
                  onError={handleImageError}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/50"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl">
                  <div className="flex items-center mb-4">
                    <div className="h-1 w-12 bg-red-600 mr-4"></div>
                    <Star className="h-5 w-5 text-red-500" />
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Success Stories</h1>
                  <div className="w-24 h-1 bg-gradient-to-r from-red-700 to-red-500 mb-4"></div>
                  <p className="text-gray-300 text-lg mb-6 max-w-xl">
                    Watch inspiring videos from our students sharing their martial arts journey at Seigler's Karate
                    Center.
                  </p>
                  <button
                    onClick={() => handlePlayVideo("tAfJPan3ih0")}
                    className="bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white py-3 px-6 rounded-lg transition-all duration-300 shadow-md border border-red-500/30 flex items-center"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch Featured Video
                  </button>
                </div>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          {/* Video Player Section - Appears when a video is playing */}
          {isVideoPlaying && (
            <AnimatedElement type="fadeIn" delay={0.1}>
              <div className="mb-12 rounded-xl overflow-hidden border border-red-900/30 bg-black/60 backdrop-blur-sm shadow-xl">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    ref={videoRef}
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
                    title="Student Success Story"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0"
                  ></iframe>
                </div>
                <div className="p-4 bg-black/80 border-t border-red-900/30">
                  <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                    Now Playing
                  </h3>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-red-700 to-red-500 my-2 rounded-full"></div>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-300 text-sm">
                      {videoTestimonials.find((v) => v.videoId === activeVideoId)?.title || "Student Success Story"}
                    </p>
                    <button onClick={() => setIsVideoPlaying(false)} className="text-gray-400 hover:text-white text-sm">
                      Close Video
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          )}

          {/* Category Tabs - New */}
          <AnimatedElement type="fadeIn" delay={0.3}>
            <div className="mb-8">
              <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === "all"
                      ? "bg-gradient-to-r from-red-700 to-red-600 text-white shadow-md"
                      : "bg-black/40 text-gray-300 hover:bg-black/60"
                  }`}
                >
                  All Stories
                </button>
                <button
                  onClick={() => setActiveTab("kids")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === "kids"
                      ? "bg-gradient-to-r from-red-700 to-red-600 text-white shadow-md"
                      : "bg-black/40 text-gray-300 hover:bg-black/60"
                  }`}
                >
                  Kids
                </button>
                <button
                  onClick={() => setActiveTab("adults")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === "adults"
                      ? "bg-gradient-to-r from-red-700 to-red-600 text-white shadow-md"
                      : "bg-black/40 text-gray-300 hover:bg-black/60"
                  }`}
                >
                  Adults
                </button>
                <button
                  onClick={() => setActiveTab("family")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === "family"
                      ? "bg-gradient-to-r from-red-700 to-red-600 text-white shadow-md"
                      : "bg-black/40 text-gray-300 hover:bg-black/60"
                  }`}
                >
                  Families
                </button>
                <button
                  onClick={() => setActiveTab("instructors")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === "instructors"
                      ? "bg-gradient-to-r from-red-700 to-red-600 text-white shadow-md"
                      : "bg-black/40 text-gray-300 hover:bg-black/60"
                  }`}
                >
                  Instructors
                </button>
              </div>
            </div>
          </AnimatedElement>

          {/* Video Testimonials - Masonry Grid Layout */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredVideos.map((video, index) => (
                <AnimatedElement
                  key={video.id}
                  type="fadeInUp"
                  delay={0.4 + index * 0.1}
                  className={`${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
                >
                  <div
                    className={`rounded-xl overflow-hidden border border-red-900/30 bg-black/60 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-xl hover:border-red-600/40 h-full flex flex-col ${
                      index === 0 ? "md:col-span-2" : ""
                    }`}
                  >
                    <div className="relative">
                      {imagesLoaded && (
                        <div className={`w-full relative overflow-hidden ${index === 0 ? "h-64" : "h-48"}`}>
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
                          className={`${index === 0 ? "w-20 h-20" : "w-16 h-16"} bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center hover:from-red-700 hover:to-red-900 transition-all duration-300 transform hover:scale-110 shadow-lg`}
                        >
                          <Play className={`${index === 0 ? "w-10 h-10" : "w-8 h-8"} text-white ml-1`} />
                        </button>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <div className="bg-black/70 text-white text-xs font-semibold px-2 py-1 rounded-md border border-red-600/30">
                          {video.category === "kids" && "Kids Program"}
                          {video.category === "adults" && "Adult Program"}
                          {video.category === "family" && "Family Success"}
                          {video.category === "instructors" && "Instructor"}
                        </div>
                      </div>
                    </div>

                    <div className="p-4 flex-grow flex flex-col">
                      <div className="bg-gradient-to-r from-red-700 to-red-900 text-white text-xs font-semibold px-3 py-1 rounded-lg inline-block mb-3 shadow-md border border-red-600/30 self-start">
                        {video.title}
                      </div>

                      <h3 className={`${index === 0 ? "text-xl" : "text-lg"} font-bold mb-2`}>{video.name}</h3>

                      {/* Info Icons */}
                      <div className="flex flex-wrap gap-3 mb-3">
                        {video.age && (
                          <div className="flex items-center text-xs text-gray-400">
                            <User className="h-3 w-3 mr-1" />
                            <span>{video.age} years old</span>
                          </div>
                        )}
                        {video.program && (
                          <div className="flex items-center text-xs text-gray-400">
                            <Award className="h-3 w-3 mr-1" />
                            <span>{video.program}</span>
                          </div>
                        )}
                        {video.years && (
                          <div className="flex items-center text-xs text-gray-400">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>
                              {video.years} {video.years === 1 ? "year" : "years"} training
                            </span>
                          </div>
                        )}
                      </div>

                      <p className="text-gray-300 text-sm mb-4 flex-grow">{video.description}</p>

                      <button
                        onClick={() => handlePlayVideo(video.videoId)}
                        className="self-start bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white py-2 px-4 rounded-lg transition-all duration-300 shadow-md border border-red-500/30 text-sm flex items-center"
                      >
                        Watch Video
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>

          {/* Testimonial Quote Section - New */}
          <AnimatedElement type="fadeIn" delay={0.7}>
            <div className="mb-16 relative rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-red-900 to-red-800"></div>
              <div className="absolute top-0 left-0 w-40 h-40 bg-red-600/20 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-red-600/20 rounded-full filter blur-3xl"></div>

              <div className="relative z-10 p-8 md:p-12">
                <div className="text-6xl text-red-500/30 font-serif absolute top-4 left-8">"</div>
                <blockquote className="text-white text-lg md:text-xl italic max-w-3xl mx-auto text-center px-8 md:px-12">
                  Seigler's Karate Center has transformed not just my child's physical abilities, but their entire
                  outlook on life. The confidence, discipline, and respect they've gained extends far beyond the dojo.
                </blockquote>
                <div className="text-6xl text-red-500/30 font-serif absolute bottom-4 right-8">"</div>
                <div className="mt-6 text-center">
                  <p className="text-white font-medium">Jennifer Williams</p>
                  <p className="text-gray-300 text-sm">Parent of a Black Belt Student</p>
                </div>
              </div>
            </div>
          </AnimatedElement>

          {/* CTA - Updated */}
          <AnimatedElement type="fadeIn" delay={0.8}>
            <div className="rounded-xl overflow-hidden relative">
              <div className="absolute inset-0 bg-black/80 z-0"></div>

              {/* Decorative elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 border-2 border-red-600/20 rounded-full"></div>
                <div className="w-48 h-48 border-2 border-red-600/30 rounded-full absolute"></div>
                <div className="w-32 h-32 border-2 border-red-600/40 rounded-full absolute"></div>
              </div>

              <div className="relative z-10 p-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Ready to Begin Your Journey?</h2>
                <p className="text-gray-300 text-sm md:text-base mb-6 max-w-2xl mx-auto">
                  Join our community and start your martial arts journey at Seigler's Karate Center. Your transformation
                  begins with a single step.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link
                    href="/contact"
                    className="bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white py-3 px-6 rounded-lg shadow-md transition-all duration-300 text-sm flex items-center justify-center"
                  >
                    Start with a Free Class
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                  <Link
                    href="/success-stories"
                    className="bg-transparent border border-red-600/50 text-white hover:bg-red-600/10 font-medium py-3 px-6 rounded-lg shadow-md transition-all duration-300 text-sm flex items-center justify-center"
                  >
                    View All Success Stories
                    <ChevronRight className="ml-1 h-4 w-4" />
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
