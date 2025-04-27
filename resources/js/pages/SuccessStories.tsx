"use client"

import type React from "react"

import Template from "@/pages/Programs/Template"
import AnimatedElement from "@/components/ui/animated-element"
import { Link } from "@inertiajs/react"
import { useState, useEffect, useRef } from "react"
import { ChevronRight, Star, Award, Calendar, User, Quote, Play, ArrowRight } from "lucide-react"

export default function SuccessStories() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [activeVideoId, setActiveVideoId] = useState("tAfJPan3ih0")
  const [activeTab, setActiveTab] = useState("all")
  const videoRef = useRef<HTMLIFrameElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  // Default profile picture path
  const defaultProfilePicture = "/images/team/Default-Profile-Picture-PNG-Image-Transparent-Background.png"

  useEffect(() => {
    // Set images as loaded after component mounts to prevent hydration issues
    setImagesLoaded(true)

    // Add scroll animation for timeline
    const handleScroll = () => {
      if (timelineRef.current) {
        const timelineItems = timelineRef.current.querySelectorAll(".timeline-item")
        timelineItems.forEach((item) => {
          const rect = item.getBoundingClientRect()
          if (rect.top < window.innerHeight * 0.8) {
            item.classList.add("timeline-visible")
          }
        })
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Trigger once on mount
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Add CSS for timeline animation via JavaScript
    const style = document.createElement("style")
    style.textContent = `
    .timeline-container .timeline-visible {
      opacity: 1 !important;
      transform: translateX(0) !important;
    }
  `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  const handlePlayVideo = (videoId: string) => {
    setIsVideoPlaying(true)
    setActiveVideoId(videoId)
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
      category: "teens",
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
      category: "kids",
    },
    {
      id: 3,
      name: "The Rodriguez Family",
      program: "Family Program",
      years: 1,
      achievement: "Family Transformation",
      quote:
        "Training together has brought our family closer than ever. We've learned to support each other, communicate better, and share in each other's achievements. It's become the highlight of our week.",
      image: "/martial-arts-family.jpg",
      category: "family",
    },
    {
      id: 4,
      name: "James Thompson",
      age: 42,
      program: "Adult Kempo",
      years: 4,
      achievement: "Physical Transformation",
      quote:
        "I lost 50 pounds and gained a new outlook on life. The discipline I've learned at SKC has helped me in my career, relationships, and health. I'm in the best shape of my life at 42.",
      image: "/martial-arts-adult.jpg",
      category: "adults",
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
      category: "adults",
    },
    {
      id: 2,
      name: "Maria Gonzalez",
      role: "Parent of Lil Dragons Student",
      quote:
        "My son has transformed from a shy 4-year-old to a confident 5-year-old with amazing focus. His preschool teacher even asked what changed. The answer? Seigler's Karate Center!",
      image: "/martial-arts-student-maria.jpg",
      category: "kids",
    },
    {
      id: 3,
      name: "Robert Smith",
      role: "Kickboxing Student, 1 Year",
      quote:
        "I've lost 35 pounds since joining the kickboxing program. The instructors push you to your limits but are incredibly supportive. The community here is what keeps me coming back.",
      image: "/martial-arts-student-robert.jpg",
      category: "adults",
    },
    {
      id: 4,
      name: "Amanda Taylor",
      role: "Jiu Jitsu Student, 3 Years",
      quote:
        "As a woman, learning self-defense has been empowering. The skills I've gained at Seigler's have given me confidence that extends to every area of my life.",
      image: "/martial-arts-student-amanda.jpg",
      category: "adults",
    },
    {
      id: 5,
      name: "The Wilson Family",
      role: "Family Program, 2 Years",
      quote:
        "Training together has become our family tradition. We've learned to support each other both on and off the mat. The bonds we've formed are unbreakable.",
      image: "/martial-arts-family-wilson.jpg",
      category: "family",
    },
    {
      id: 6,
      name: "Tyler Jackson",
      role: "Teens Program, 3 Years",
      quote:
        "Martial arts helped me through some tough times in high school. The discipline and focus I learned at SKC improved my grades and helped me get into my dream college.",
      image: "/martial-arts-teen-tyler.jpg",
      category: "teens",
    },
  ]

  // Video testimonials
  const videoTestimonials = [
    {
      id: 1,
      name: "James Thompson",
      title: "From Bullied to Black Belt",
      description: "Watch James' journey from being bullied to becoming a confident black belt.",
      videoId: "tAfJPan3ih0",
      category: "kids",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      title: "Finding Strength After Adversity",
      description: "Sarah shares how martial arts helped her recover from a serious injury.",
      videoId: "5CrGryQ5TtQ",
      category: "adults",
    },
    {
      id: 3,
      name: "The Martinez Family",
      title: "A Family Transformed",
      description: "See how training together strengthened this family's bonds.",
      videoId: "v78zxfQmhVk",
      category: "family",
    },
  ]

  // Stats
  const stats = [
    { label: "Active Students", value: "500+", icon: "👥", category: "all" },
    { label: "Black Belts Awarded", value: "120+", icon: "🥋", category: "all" },
    { label: "Years of Operation", value: "15+", icon: "🏆", category: "all" },
    { label: "Competitions Won", value: "200+", icon: "🏅", category: "all" },
    { label: "Kids Confidence Boost", value: "95%", icon: "👦", category: "kids" },
    { label: "Teen Leadership Skills", value: "87%", icon: "👧", category: "teens" },
    { label: "Adult Fitness Improvement", value: "92%", icon: "💪", category: "adults" },
    { label: "Family Bonding", value: "98%", icon: "👨‍👩‍👧‍👦", category: "family" },
  ]

  const filteredStories =
    activeTab === "all" ? featuredStories : featuredStories.filter((story) => story.category === activeTab)

  const filteredTestimonials =
    activeTab === "all" ? testimonials : testimonials.filter((testimonial) => testimonial.category === activeTab)

  const filteredVideos =
    activeTab === "all" ? videoTestimonials : videoTestimonials.filter((video) => video.category === activeTab)

  const filteredStats =
    activeTab === "all"
      ? stats.filter((stat) => stat.category === "all")
      : stats.filter((stat) => stat.category === activeTab || stat.category === "all")

  return (
    <Template title="Success Stories">
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
          <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
            {/* Background image with overlay */}
            <div className="absolute inset-0 bg-black">
              {imagesLoaded && (
                <img
                  src="/martial-arts-student-michael.jpg"
                  alt="Success Stories"
                  className="w-full h-full object-cover opacity-30"
                  onError={handleImageError}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/50"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl">
                  <div className="flex items-center mb-4">
                    <div className="h-1 w-12 bg-red-600 mr-4"></div>
                    <Star className="h-5 w-5 text-red-500" />
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                    Transforming Lives Through Martial Arts
                  </h1>
                  <div className="w-32 h-1 bg-gradient-to-r from-red-700 to-red-500 mb-6"></div>
                  <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
                    Discover how martial arts training at Seigler's Karate Center has transformed the lives of our
                    students, building confidence, discipline, and skills that last a lifetime.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/success-stories/written-reviews"
                      className="bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white py-3 px-6 rounded-lg transition-all duration-300 shadow-md border border-red-500/30 flex items-center"
                    >
                      Written Reviews
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                    <Link
                      href="/success-stories/video-testimonials"
                      className="bg-black/50 hover:bg-black/70 text-white py-3 px-6 rounded-lg transition-all duration-300 shadow-md border border-white/10 flex items-center"
                    >
                      Video Testimonials
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          {/* Program Tabs - New */}
          <AnimatedElement type="fadeIn" delay={0.3}>
            <div className="mb-16">
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
                  onClick={() => setActiveTab("teens")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === "teens"
                      ? "bg-gradient-to-r from-red-700 to-red-600 text-white shadow-md"
                      : "bg-black/40 text-gray-300 hover:bg-black/60"
                  }`}
                >
                  Teens
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
              </div>
            </div>
          </AnimatedElement>

          {/* Stats Section - New Circular Design */}
          <AnimatedElement type="fadeIn" delay={0.4}>
            <div className="mb-20">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  Our Impact
                </h2>
                <div className="w-16 h-0.5 bg-gradient-to-r from-red-700 to-red-500 mx-auto mb-2 rounded-full"></div>
                <p className="text-gray-300 text-sm">The numbers speak for themselves</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {filteredStats.map((stat, index) => (
                  <AnimatedElement key={index} type="fadeInUp" delay={0.5 + index * 0.1}>
                    <div className="flex flex-col items-center">
                      <div className="relative w-24 h-24 mb-4">
                        {/* Circular background */}
                        <div className="absolute inset-0 rounded-full bg-black/60 border border-red-900/30"></div>

                        {/* Progress circle */}
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="45" fill="none" stroke="#3f0d0d" strokeWidth="8" />
                          <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="url(#redGradient)"
                            strokeWidth="8"
                            strokeDasharray="283"
                            strokeDashoffset={283 - (283 * Number.parseInt(stat.value)) / 100}
                            strokeLinecap="round"
                            transform="rotate(-90 50 50)"
                          />
                          <defs>
                            <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#b91c1c" />
                              <stop offset="100%" stopColor="#dc2626" />
                            </linearGradient>
                          </defs>
                        </svg>

                        {/* Icon and value */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <div className="text-xl mb-1">{stat.icon}</div>
                          <div className="text-lg font-bold text-white">{stat.value}</div>
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-300">{stat.label}</p>
                      </div>
                    </div>
                  </AnimatedElement>
                ))}
              </div>
            </div>
          </AnimatedElement>

          {/* Featured Success Stories - Timeline Layout */}
          <div className="mb-24">
            <AnimatedElement type="fadeIn" delay={0.6}>
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  Featured Success Stories
                </h2>
                <div className="w-16 h-0.5 bg-gradient-to-r from-red-700 to-red-500 mx-auto mb-2 rounded-full"></div>
                <p className="text-gray-300 text-sm">Real transformations from our students</p>
              </div>
            </AnimatedElement>

            {/* Timeline */}
            <div className="relative timeline-container" ref={timelineRef}>
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-red-700 via-red-600 to-red-700"></div>

              {filteredStories.map((story, index) => (
                <div
                  key={story.id}
                  className={`timeline-item mb-16 opacity-0 transition-all duration-1000 ${
                    index % 2 === 0 ? "translate-x-12" : "-translate-x-12"
                  }`}
                >
                  <div className={`md:flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-600 rounded-full border-4 border-black z-10"></div>

                    {/* Content */}
                    <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                      <div className="rounded-xl overflow-hidden border border-red-900/30 bg-black/60 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-xl hover:border-red-600/40 transform hover:-translate-y-1">
                        <div className="p-6">
                          <div className="bg-gradient-to-r from-red-700 to-red-900 text-white text-xs font-semibold px-3 py-1 rounded-lg inline-block mb-3 shadow-md border border-red-600/30">
                            {story.achievement}
                          </div>

                          <h3 className="text-xl font-bold mb-2">{story.name}</h3>

                          <div className="flex flex-wrap gap-3 mb-4">
                            {story.age && (
                              <div className="flex items-center text-xs text-gray-400">
                                <User className="h-3 w-3 mr-1" />
                                <span>{story.age} years old</span>
                              </div>
                            )}
                            {story.program && (
                              <div className="flex items-center text-xs text-gray-400">
                                <Award className="h-3 w-3 mr-1" />
                                <span>{story.program}</span>
                              </div>
                            )}
                            {story.years && (
                              <div className="flex items-center text-xs text-gray-400">
                                <Calendar className="h-3 w-3 mr-1" />
                                <span>
                                  {story.years} {story.years === 1 ? "year" : "years"} training
                                </span>
                              </div>
                            )}
                          </div>

                          <div className="relative mb-4">
                            <Quote className="absolute top-0 left-0 h-4 w-4 text-red-600/40" />
                            <p className="text-gray-300 text-sm italic pl-6 pr-2">"{story.quote}"</p>
                            <Quote className="absolute bottom-0 right-0 h-4 w-4 text-red-600/40 transform rotate-180" />
                          </div>

                          {story.parent && <p className="text-gray-400 text-xs">— {story.parent}</p>}
                        </div>
                      </div>
                    </div>

                    {/* Image */}
                    <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"} mt-6 md:mt-0`}>
                      <div className="rounded-xl overflow-hidden border border-red-900/30 bg-black/60 backdrop-blur-sm shadow-lg h-64 relative">
                        {imagesLoaded && (
                          <img
                            src={story.image || defaultProfilePicture}
                            alt={story.name}
                            className="w-full h-full object-cover opacity-80"
                            onError={handleImageError}
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                        {/* Year badge */}
                        <div className="absolute bottom-4 left-4 bg-black/70 text-white text-xs font-semibold px-3 py-1 rounded-full border border-red-600/30">
                          {story.years} {story.years === 1 ? "Year" : "Years"} at SKC
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video Testimonials - Carousel */}
          {filteredVideos.length > 0 && (
            <AnimatedElement type="fadeIn" delay={0.7}>
              <div className="mb-24">
                <div className="text-center mb-10">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    Video Success Stories
                  </h2>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-red-700 to-red-500 mx-auto mb-2 rounded-full"></div>
                  <p className="text-gray-300 text-sm">Watch our students share their journeys</p>
                </div>

                {/* Video Player */}
                <div className="rounded-xl overflow-hidden border border-red-900/30 bg-black/60 backdrop-blur-sm shadow-xl mb-8">
                  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                    {isVideoPlaying ? (
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
                    ) : (
                      <>
                        {imagesLoaded && (
                          <div className="absolute inset-0 overflow-hidden">
                            <img
                              src={`https://img.youtube.com/vi/${activeVideoId}/maxresdefault.jpg`}
                              alt="Success Story"
                              className="w-full h-full object-cover opacity-70"
                              onError={handleImageError}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30"></div>
                          </div>
                        )}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center max-w-2xl px-4">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                              {videoTestimonials.find((v) => v.videoId === activeVideoId)?.title ||
                                "Student Success Story"}
                            </h3>
                            <p className="text-gray-300 mb-6 text-sm md:text-base">
                              {videoTestimonials.find((v) => v.videoId === activeVideoId)?.description ||
                                "Watch this inspiring transformation story."}
                            </p>
                            <button
                              onClick={() => handlePlayVideo(activeVideoId)}
                              className="bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white py-3 px-6 rounded-lg transition-all duration-300 shadow-md border border-red-500/30 flex items-center mx-auto"
                            >
                              <Play className="mr-2 h-5 w-5" />
                              Watch Video
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Video Thumbnails */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {filteredVideos.map((video) => (
                    <div
                      key={video.id}
                      onClick={() => {
                        setIsVideoPlaying(false)
                        setActiveVideoId(video.videoId)
                      }}
                      className={`rounded-lg overflow-hidden border cursor-pointer transition-all duration-300 transform hover:-translate-y-1 ${
                        activeVideoId === video.videoId
                          ? "border-red-600 shadow-[0_0_10px_rgba(220,38,38,0.3)]"
                          : "border-red-900/30 hover:border-red-600/50"
                      }`}
                    >
                      <div className="relative">
                        {imagesLoaded && (
                          <img
                            src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
                            alt={video.title}
                            className="w-full h-32 object-cover"
                            onError={handleImageError}
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-10 h-10 bg-red-600/80 rounded-full flex items-center justify-center">
                            <Play className="h-5 w-5 text-white" />
                          </div>
                        </div>
                      </div>
                      <div className="p-3 bg-black/80">
                        <h4 className="text-sm font-medium text-white truncate">{video.title}</h4>
                        <p className="text-xs text-gray-400 truncate">{video.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedElement>
          )}

          {/* Testimonials - Card Grid */}
          {filteredTestimonials.length > 0 && (
            <div className="mb-24">
              <AnimatedElement type="fadeIn" delay={0.8}>
                <div className="text-center mb-10">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    What Our Students Say
                  </h2>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-red-700 to-red-500 mx-auto mb-2 rounded-full"></div>
                  <p className="text-gray-300 text-sm">Hear from our community</p>
                </div>
              </AnimatedElement>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredTestimonials.map((testimonial, index) => (
                  <AnimatedElement key={testimonial.id} type="fadeInUp" delay={0.9 + index * 0.1}>
                    <div className="rounded-xl border border-red-900/30 bg-black/60 backdrop-blur-sm p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-red-600/40 transform hover:-translate-y-1 h-full flex flex-col">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden border border-red-600/50 mr-4 flex-shrink-0">
                          {imagesLoaded ? (
                            <img
                              src={testimonial.image || defaultProfilePicture}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                              onError={handleImageError}
                            />
                          ) : (
                            <div className="w-full h-full bg-red-900/30 flex items-center justify-center">
                              <User className="h-6 w-6 text-red-600/70" />
                            </div>
                          )}
                        </div>
                        <div>
                          <h3 className="font-bold text-sm">{testimonial.name}</h3>
                          <p className="text-gray-400 text-xs">{testimonial.role}</p>
                        </div>
                      </div>

                      <div className="relative flex-grow">
                        <Quote className="absolute top-0 left-0 h-4 w-4 text-red-600/40" />
                        <p className="text-gray-300 text-sm italic pl-6 pr-2 mb-6">"{testimonial.quote}"</p>
                        <Quote className="absolute bottom-0 right-0 h-4 w-4 text-red-600/40 transform rotate-180" />
                      </div>
                    </div>
                  </AnimatedElement>
                ))}
              </div>
            </div>
          )}

          {/* CTA - Updated */}
          <AnimatedElement type="fadeIn" delay={1.0}>
            <div className="rounded-xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-900 z-0"></div>

              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-40 h-40 bg-red-600/20 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-red-600/20 rounded-full filter blur-3xl"></div>

              <div className="relative z-10 p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Ready to Write Your Success Story?</h2>
                <p className="text-white text-sm md:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
                  Join the hundreds of students who have transformed their lives through martial arts training at
                  Seigler's Karate Center. Your journey begins with a single step.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-red-700 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg shadow-md transition-all duration-300 text-sm flex items-center justify-center"
                  >
                    Start with a Free Class
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="/programs"
                    className="bg-transparent border border-white text-white hover:bg-white/10 font-medium py-3 px-6 rounded-lg shadow-md transition-all duration-300 text-sm flex items-center justify-center"
                  >
                    Explore Our Programs
                    <ArrowRight className="ml-2 h-4 w-4" />
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
