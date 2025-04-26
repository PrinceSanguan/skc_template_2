"use client"

import type React from "react"

import Template from "../Programs/Template"
import AnimatedElement from "@/components/ui/animated-element"
import { Link } from "@inertiajs/react"
import { useState, useEffect } from "react"

export default function WrittenReviews() {
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const defaultProfilePicture = "/images/team/Default-Profile-Picture-PNG-Image-Transparent-Background.png"

  useEffect(() => {
    // Set images as loaded after component mounts to prevent hydration issues
    setImagesLoaded(true)
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
    },
  ]

  return (
    <Template title="Written Reviews">
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
              Written Reviews
            </h1>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-red-600"></div>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-red-700 to-red-500 mx-auto mb-6 rounded-full shadow-sm"></div>
        </AnimatedElement>

        <AnimatedElement type="fadeIn" delay={0.3}>
          <p className="text-xl md:text-2xl text-center text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            Read real stories from our students about how training at Seigler's Karate Center has positively impacted
            their lives.
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

        {/* Written Reviews Grid - Enhanced */}
        <div className="mb-24">
          <div className="grid grid-cols-1 gap-10">
            {reviews.map((review, index) => (
              <AnimatedElement
                key={review.id}
                type={index % 2 === 0 ? "slideInLeft" : "slideInRight"}
                delay={0.4 + index * 0.1}
              >
                <div className="rounded-2xl overflow-hidden mb-6 border border-red-900/50 bg-black/70 backdrop-blur-md shadow-[0_0_25px_rgba(0,0,0,0.7)] transition-all duration-500 hover:shadow-[0_0_35px_rgba(139,0,0,0.3)] transform hover:-translate-y-1">
                  <div className="md:flex">
                    <div className="md:w-1/3 relative bg-gradient-to-br from-red-900/40 to-black/60">
                      {imagesLoaded && (
                        <img
                          src={`/focused-fighter.png?key=eidkq&height=400&width=300&query=martial arts student ${review.name}`}
                          alt={review.name}
                          className="w-full h-full object-cover absolute inset-0 opacity-70"
                          style={{ minHeight: "300px" }}
                          onError={handleImageError}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                      {/* Achievement badge - enhanced */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-gradient-to-r from-red-700 to-red-900 text-white text-sm font-semibold px-4 py-2 rounded-lg inline-block mb-2 shadow-lg border border-red-600/30">
                          {review.achievement}
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

                      <h3 className="text-3xl font-bold mb-3 tracking-tight">{review.name}</h3>
                      <div className="flex items-center mb-6">
                        <div className="h-px w-12 bg-red-600/70"></div>
                        <p className="text-gray-400 px-3 text-sm">
                          {review.age} years old | {review.program} | {review.years}{" "}
                          {review.years === 1 ? "year" : "years"} of training
                        </p>
                      </div>
                      <p className="text-gray-300 mb-8 italic text-lg leading-relaxed">"{review.quote}"</p>
                      {review.parent && (
                        <p className="text-gray-400 text-sm flex items-center">
                          <span className="w-6 h-px bg-red-600/50 mr-3"></span>
                          {review.parent}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>

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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Write Your Own Review?</h2>
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
