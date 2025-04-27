"use client"

import type React from "react"

import Template from "../Programs/Template"
import AnimatedElement from "@/components/ui/animated-element"
import { Link } from "@inertiajs/react"
import { useState, useEffect, useRef } from "react"
import { ChevronRight, Star, Quote, Award, Calendar, User, Filter, Search, MessageSquare, ThumbsUp } from "lucide-react"

export default function WrittenReviews() {
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [activeFilter, setActiveFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedReview, setSelectedReview] = useState<number | null>(null)
  const quoteContainerRef = useRef<HTMLDivElement>(null)
  const defaultProfilePicture = "/images/team/Default-Profile-Picture-PNG-Image-Transparent-Background.png"

  useEffect(() => {
    // Set images as loaded after component mounts to prevent hydration issues
    setImagesLoaded(true)

    // Add floating animation CSS
    const styleEl = document.createElement("style")
    styleEl.innerHTML = `
      @keyframes float-quote {
        0% { transform: translateY(0px) rotate(-2deg); }
        50% { transform: translateY(-10px) rotate(2deg); }
        100% { transform: translateY(0px) rotate(-2deg); }
      }
      
      .quote-bubble {
        animation: float-quote 8s ease-in-out infinite;
      }
      
      .star-rating .star-filled {
        clip-path: inset(0 0 0 0);
        transition: clip-path 0.3s ease;
      }
      
      .review-card:hover .star-rating .star-filled {
        clip-path: inset(0 0 0 0);
      }
    `
    document.head.appendChild(styleEl)

    return () => {
      document.head.removeChild(styleEl)
    }
  }, [])

  // Handle image error by replacing with default profile picture
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = defaultProfilePicture
  }

  // Written reviews data
  const reviews = [
    {
      id: 1,
      name: "Michael Chen",
      age: 15,
      program: "Teens Karate",
      years: 3,
      achievement: "Black Belt Achievement",
      quote:
        "When I started at Seigler's, I was shy and struggled with confidence. The instructors believed in me when I didn't believe in myself. Now I'm a black belt and assistant instructor, helping others find their strength.",
      rating: 5,
      date: "2023-05-15",
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
      rating: 5,
      date: "2023-07-22",
    },
    {
      id: 3,
      name: "David Johnson",
      age: 42,
      program: "Adult Kempo",
      years: 2,
      achievement: "Physical Transformation",
      quote:
        "I joined Seigler's at 42 years old, thinking I was too old to start martial arts. Two years later, I'm in the best shape of my life and have skills I never thought possible. The instructors make everyone feel welcome regardless of age or fitness level.",
      rating: 5,
      date: "2023-03-10",
    },
    {
      id: 4,
      name: "Emma Rodriguez",
      age: 13,
      program: "Teens Karate",
      years: 4,
      achievement: "Competition Winner",
      quote:
        "I've won three regional tournaments this year alone! The training at Seigler's is intense but always fun. My coaches know exactly how to push me to be my best while keeping my technique perfect. I've made so many friends here too.",
      rating: 5,
      date: "2023-08-05",
    },
    {
      id: 5,
      name: "Robert Smith",
      age: 35,
      program: "Kickboxing",
      years: 1,
      achievement: "Weight Loss Journey",
      quote:
        "I've lost 35 pounds since joining the kickboxing program. The instructors push you to your limits but are incredibly supportive. The community here is what keeps me coming back, and I've never felt stronger or healthier in my life.",
      rating: 4,
      date: "2023-09-18",
    },
    {
      id: 6,
      name: "Olivia Parker",
      age: 10,
      program: "Kids Karate",
      years: 3,
      achievement: "Discipline Master",
      quote:
        "Karate has taught me to be disciplined and respectful. I used to have trouble sitting still in class, but now my teachers say I'm one of the most focused students. I love practicing my forms at home every day!",
      parent: "Thomas Parker, Olivia's father",
      rating: 5,
      date: "2023-06-30",
    },
    {
      id: 7,
      name: "James Wilson",
      age: 28,
      program: "Adult Kempo",
      years: 1,
      achievement: "Stress Relief",
      quote:
        "My job in tech is incredibly stressful, and Kempo has become my sanctuary. The combination of physical exertion and mental focus has done wonders for my anxiety levels. The instructors create such a positive atmosphere.",
      rating: 5,
      date: "2023-04-12",
    },
  ]

  // Filter reviews based on active filter and search term
  const filteredReviews = reviews.filter((review) => {
    const matchesFilter = activeFilter === "all" || review.program.toLowerCase().includes(activeFilter.toLowerCase())
    const matchesSearch =
      review.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.quote.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.achievement.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  // Get unique programs for filter
  const programs = Array.from(new Set(reviews.map((review) => review.program)))

  // Stats data
  const stats = [
    { label: "Total Reviews", value: reviews.length, icon: MessageSquare },
    { label: "Average Rating", value: "4.9", icon: Star },
    { label: "5-Star Reviews", value: "85%", icon: ThumbsUp },
    { label: "Years of Experience", value: "25+", icon: Calendar },
  ]

  // Generate random position for quote bubbles
  const getRandomPosition = (index: number) => {
    const positions = [
      { top: "10%", left: "5%" },
      { top: "15%", right: "8%" },
      { top: "40%", left: "12%" },
      { top: "60%", right: "10%" },
      { top: "75%", left: "7%" },
      { top: "30%", right: "5%" },
      { top: "85%", right: "15%" },
    ]
    return positions[index % positions.length]
  }

  // Render star rating
  const renderStarRating = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <div key={star} className="relative star-rating">
            <Star className="w-4 h-4 text-gray-400" />
            <Star
              className={`w-4 h-4 text-yellow-500 absolute top-0 left-0 star-filled`}
              style={{
                clipPath: star <= rating ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
              }}
            />
          </div>
        ))}
      </div>
    )
  }

  return (
    <Template title="Written Reviews">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated particles */}
        <div className="absolute inset-0 z-0">
          {Array.from({ length: 30 }).map((_, index) => (
            <div
              key={index}
              className="particle absolute bg-red-500/10 rounded-full"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 15 + 10}s linear infinite`,
                opacity: Math.random() * 0.4 + 0.1,
              }}
            />
          ))}
        </div>

        {/* Decorative blurs */}
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-red-600/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-red-600/10 rounded-full filter blur-3xl" />

        {/* Floating quote bubbles */}
        <div ref={quoteContainerRef} className="absolute inset-0 overflow-hidden">
          {reviews.slice(0, 7).map((review, index) => {
            const position = getRandomPosition(index)
            const delay = `${index * 1.5}s`

            return (
              <div
                key={`quote-${index}`}
                className="absolute quote-bubble opacity-5"
                style={{
                  ...position,
                  animationDelay: delay,
                }}
              >
                <Quote className="w-16 h-16 text-red-600" />
              </div>
            )
          })}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Hero banner */}
        <div className="relative h-64 md:h-80 overflow-hidden mb-12 bg-gradient-to-r from-black to-red-900">
          {imagesLoaded && (
            <div className="absolute inset-0 opacity-20">
              <img src="/placeholder.svg?key=hm4l7" alt="Students in dojo" className="w-full h-full object-cover" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10">
            <AnimatedElement type="fadeIn" delay={0.2}>
              <div className="flex items-center justify-center mb-2">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-red-600"></div>
                <h1 className="text-4xl md:text-5xl font-bold text-center px-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 tracking-tight">
                  Student Success Stories
                </h1>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-red-600"></div>
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-red-700 to-red-500 mx-auto mb-4 rounded-full shadow-sm"></div>
            </AnimatedElement>

            <AnimatedElement type="fadeIn" delay={0.3}>
              <p className="text-base md:text-lg text-center text-gray-300 mb-8 max-w-2xl mx-auto">
                Real stories from our students about their transformative journeys at Seigler's Karate Center
              </p>
            </AnimatedElement>

            <AnimatedElement type="fadeIn" delay={0.4}>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/video-testimonials"
                  className="bg-red-700 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-md shadow-md transition-all duration-300 text-sm flex items-center"
                >
                  Watch Video Testimonials
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 font-medium py-2 px-6 rounded-md shadow-md transition-all duration-300 text-sm flex items-center"
                >
                  Share Your Story
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </AnimatedElement>
          </div>
        </div>

        {/* Stats section */}
        <div className="container mx-auto px-4 mb-16">
          <AnimatedElement type="fadeIn" delay={0.5}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="relative bg-gradient-to-br from-black to-red-950 rounded-lg p-6 border border-red-900/30 shadow-lg overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-red-600/5 rounded-full transform translate-x-1/3 -translate-y-1/3 group-hover:bg-red-600/10 transition-all duration-500"></div>

                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-red-900/30 flex items-center justify-center mr-3 group-hover:bg-red-800/40 transition-all duration-300">
                      <stat.icon className="w-5 h-5 text-red-500" />
                    </div>
                    <div className="h-px flex-grow bg-gradient-to-r from-red-600/40 to-transparent"></div>
                  </div>

                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedElement>
        </div>

        {/* Filter and search section */}
        <div className="container mx-auto px-4 mb-8">
          <AnimatedElement type="fadeIn" delay={0.6}>
            <div className="bg-black/40 backdrop-blur-sm border border-red-900/20 rounded-lg p-4 md:p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <h2 className="text-xl font-bold text-white flex items-center">
                  <Filter className="w-5 h-5 mr-2 text-red-500" />
                  Filter Reviews
                </h2>

                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search reviews..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-black/60 border border-red-900/30 rounded-md py-2 pl-10 pr-4 text-sm text-white w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-red-600/50 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveFilter("all")}
                  className={`px-3 py-1 text-xs rounded-full transition-all duration-300 ${
                    activeFilter === "all"
                      ? "bg-red-700 text-white"
                      : "bg-black/40 text-gray-300 hover:bg-black/60 border border-red-900/30"
                  }`}
                >
                  All Programs
                </button>

                {programs.map((program) => (
                  <button
                    key={program}
                    onClick={() => setActiveFilter(program)}
                    className={`px-3 py-1 text-xs rounded-full transition-all duration-300 ${
                      activeFilter === program
                        ? "bg-red-700 text-white"
                        : "bg-black/40 text-gray-300 hover:bg-black/60 border border-red-900/30"
                    }`}
                  >
                    {program}
                  </button>
                ))}
              </div>
            </div>
          </AnimatedElement>
        </div>

        {/* Featured review */}
        {selectedReview !== null && (
          <div className="container mx-auto px-4 mb-12">
            <AnimatedElement type="fadeIn" delay={0.2}>
              <div className="relative bg-gradient-to-br from-red-950 to-black rounded-xl overflow-hidden border border-red-900/30 shadow-xl">
                <div className="absolute top-0 right-0 w-40 h-40 bg-red-600/10 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-red-600/10 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>

                <div className="relative z-10 p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-red-600 mr-3" />
                    <div className="h-px flex-grow bg-gradient-to-r from-red-600/40 to-transparent"></div>
                    <button
                      onClick={() => setSelectedReview(null)}
                      className="ml-3 text-gray-400 hover:text-white transition-colors"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="md:flex items-start gap-6">
                    <div className="md:w-1/4 mb-4 md:mb-0">
                      {imagesLoaded && (
                        <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto md:mx-0 rounded-full overflow-hidden border-2 border-red-600/30 shadow-lg">
                          <img
                            src={`/placeholder.svg?key=w3v7y&key=vcvm3&key=rx1o1&key=uwxjv&height=200&width=200&query=martial arts student portrait ${reviews[selectedReview].name}`}
                            alt={reviews[selectedReview].name}
                            className="w-full h-full object-cover"
                            onError={handleImageError}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>
                      )}

                      <div className="text-center md:text-left mt-3">
                        <h3 className="text-lg font-bold text-white">{reviews[selectedReview].name}</h3>
                        <p className="text-xs text-gray-400">
                          {reviews[selectedReview].age} years old | {reviews[selectedReview].program}
                        </p>
                        <div className="mt-2 flex justify-center md:justify-start">
                          {renderStarRating(reviews[selectedReview].rating)}
                        </div>
                      </div>
                    </div>

                    <div className="md:w-3/4">
                      <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-red-900/20 relative">
                        <div className="absolute -top-3 -left-3 text-red-600 opacity-20">
                          <Quote className="w-10 h-10" />
                        </div>

                        <p className="text-gray-200 italic text-lg leading-relaxed mb-4">
                          "{reviews[selectedReview].quote}"
                        </p>

                        <div className="flex flex-wrap items-center gap-3 mt-4">
                          <div className="bg-red-900/30 text-white text-xs px-3 py-1 rounded-full flex items-center">
                            <Award className="w-3 h-3 mr-1" />
                            {reviews[selectedReview].achievement}
                          </div>

                          <div className="bg-black/40 text-gray-300 text-xs px-3 py-1 rounded-full flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {reviews[selectedReview].years} {reviews[selectedReview].years === 1 ? "year" : "years"}{" "}
                            training
                          </div>

                          {reviews[selectedReview].parent && (
                            <div className="bg-black/40 text-gray-300 text-xs px-3 py-1 rounded-full flex items-center">
                              <User className="w-3 h-3 mr-1" />
                              {reviews[selectedReview].parent}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        )}

        {/* Reviews grid */}
        <div className="container mx-auto px-4 mb-16">
          <AnimatedElement type="fadeIn" delay={0.7}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredReviews.length > 0 ? (
                filteredReviews.map((review, index) => (
                  <div
                    key={review.id}
                    className="review-card group bg-gradient-to-br from-black to-red-950/30 rounded-lg overflow-hidden border border-red-900/20 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-red-600/30 hover:-translate-y-1 cursor-pointer"
                    onClick={() => setSelectedReview(reviews.findIndex((r) => r.id === review.id))}
                  >
                    <div className="h-32 relative overflow-hidden">
                      {imagesLoaded && (
                        <img
                          src={`/focused-sparring.png?key=p1613&height=300&width=500&query=martial arts training ${review.program}`}
                          alt={review.program}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

                      <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                        <div className="bg-red-700/90 text-white text-xs px-2 py-1 rounded shadow-md">
                          {review.program}
                        </div>
                        <div className="text-white text-xs bg-black/60 backdrop-blur-sm px-2 py-1 rounded">
                          {new Date(review.date).toLocaleDateString("en-US", { year: "numeric", month: "short" })}
                        </div>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                          {review.name}
                        </h3>
                        {renderStarRating(review.rating)}
                      </div>

                      <div className="flex items-center mb-3">
                        <div className="h-px w-12 bg-red-600/30"></div>
                        <p className="text-gray-400 px-2 text-xs">
                          {review.years} {review.years === 1 ? "year" : "years"} of training
                        </p>
                      </div>

                      <p className="text-gray-300 text-sm line-clamp-3 mb-3 italic">
                        "{review.quote.substring(0, 100)}..."
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="bg-red-900/30 text-white text-xs px-2 py-1 rounded-full">
                          {review.achievement}
                        </div>
                        <div className="text-red-500 text-xs flex items-center group-hover:text-red-400 transition-colors">
                          Read more
                          <ChevronRight className="ml-1 w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-red-900/20 inline-block">
                    <p className="text-gray-300 mb-2">No reviews match your current filters.</p>
                    <button
                      onClick={() => {
                        setActiveFilter("all")
                        setSearchTerm("")
                      }}
                      className="text-red-500 hover:text-red-400 transition-colors text-sm"
                    >
                      Clear all filters
                    </button>
                  </div>
                </div>
              )}
            </div>
          </AnimatedElement>
        </div>

        {/* CTA section */}
        <div className="container mx-auto px-4 mb-16">
          <AnimatedElement type="fadeIn" delay={0.8}>
            <div className="relative rounded-xl overflow-hidden">
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-900 to-black z-0"></div>

              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-64 h-64 bg-red-600/10 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-600/10 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
              </div>

              <div className="relative z-10 p-6 md:p-10 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Write Your Own Success Story?</h2>
                <p className="text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
                  Join the hundreds of students who have transformed their lives through martial arts training at
                  Seigler's Karate Center. Your journey begins with a single step.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-red-700 hover:bg-gray-100 font-medium py-3 px-8 rounded-md shadow-md transition-all duration-300 border border-white/20 hover:shadow-lg flex items-center justify-center"
                  >
                    Start with a Free Class
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="/programs"
                    className="bg-transparent border border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-md shadow-md transition-all duration-300 hover:shadow-lg flex items-center justify-center"
                  >
                    Explore Our Programs
                    <ChevronRight className="ml-2 h-4 w-4" />
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
