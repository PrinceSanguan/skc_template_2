"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"

const Feedback = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current

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
  }, [])

  // Animate content when testimonial changes
  useEffect(() => {
    const content = document.querySelector(".testimonial-text")
    const avatar = document.querySelector(".testimonial-avatar")
    const info = document.querySelector(".testimonial-info")

    if (content && avatar && info && !isAnimating) {
      setIsAnimating(true)

      // Animate out
      gsap.to([content, avatar, info], {
        opacity: 0,
        y: 20,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.in",
        onComplete: () => {
          // Animate in
          gsap.to([avatar, info, content], {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
            onComplete: () => {
              setIsAnimating(false)
            },
          })
        },
      })
    }
  }, [activeTestimonial])

  const testimonials = [
    {
      id: 1,
      content:
        "My son has been begging to take karate for two years. He was diagnosed with ADD, hyperactive type with sensory issue components. This summer I decided to try the intro 6 week class. We had our first class and the staff was wonderful. After one week, I can already tell his confidence is growing. So far we love Seigler's!",
      name: "Shanna Nelson Greene",
      position: "Parent",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      program: "Kids Karate",
      rating: 5,
    },
    {
      id: 2,
      content:
        "Accountability and an awesome workout! I had the knowledge of how to loose weight and get fit, but like so many of us, I needed that push to get me started! Having a scheduled class time and training with athletes at the top of their game has motivated me to crush my goals.",
      name: "Rachel Kimbrough-Eugene",
      position: "Member",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      program: "Adult Kickboxing",
      rating: 5,
    },
    {
      id: 3,
      content:
        "Seigler's Karate Center is the BEST place to send your kids! A wonderful blend of Karate, leadership training and character building. Instructors know each child by name and are truly dedicated to their craft and the success of every child.",
      name: "Obambi A",
      position: "Parent",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      program: "Lil Dragons",
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    if (!isAnimating) {
      setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }
  }

  const prevTestimonial = () => {
    if (!isAnimating) {
      setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    }
  }

  return (
    <section ref={sectionRef} id="feedback" className="relative py-24 text-white">
      {/* Subtle background element */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 max-w-5xl">
        <div className="title-container mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-red-500/50"></div>
            <span className="text-red-500 uppercase tracking-wider text-sm font-medium">Testimonials</span>
            <div className="h-px w-12 bg-red-500/50"></div>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-white">
            <span className="text-red-600">MEMBER</span> TESTIMONIALS
          </h2>
        </div>

        <div className="testimonial-content relative">
          {/* Quote decorative element */}
          <div className="absolute -top-10 -left-10 opacity-5">
            <Quote size={120} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Left side - Avatar and info */}
            <div className="md:col-span-1 flex flex-col items-center md:items-start">
              <div className="testimonial-avatar relative mb-6 transition-all duration-300 group">
                <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-red-500 shadow-lg shadow-red-900/20 transition-transform duration-500 group-hover:scale-105">
                  <img
                    src={testimonials[activeTestimonial].avatar || "/placeholder.svg"}
                    alt={testimonials[activeTestimonial].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-red-700 to-red-500 text-white text-xs px-3 py-1 rounded-full shadow-md">
                  {testimonials[activeTestimonial].program}
                </div>
              </div>

              <div className="testimonial-info text-center md:text-left">
                <h3 className="text-xl font-semibold text-white mb-1">{testimonials[activeTestimonial].name}</h3>
                <p className="text-sm text-gray-400 mb-3">{testimonials[activeTestimonial].position}</p>

                {/* Star rating */}
                <div className="flex items-center mb-6 justify-center md:justify-start">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-500 fill-yellow-500 mr-1" />
                  ))}
                </div>
              </div>

              {/* Testimonial navigation */}
              <div className="flex space-x-4 mt-auto">
                <button
                  onClick={prevTestimonial}
                  disabled={isAnimating}
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-red-900/20 hover:border-red-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={nextTestimonial}
                  disabled={isAnimating}
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-red-900/20 hover:border-red-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              {/* Pagination indicators */}
              <div className="flex space-x-3 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => !isAnimating && setActiveTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeTestimonial === index ? "bg-red-500 w-6" : "bg-gray-700 hover:bg-gray-600"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                    disabled={isAnimating}
                  />
                ))}
              </div>
            </div>

            {/* Right side - Testimonial content */}
            <div className="md:col-span-2 flex flex-col">
              <div className="mb-4">
                <Quote className="text-red-500 opacity-30" size={40} />
              </div>

              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-gray-800 hover:border-red-900/30 transition-colors duration-500 flex-grow relative overflow-hidden group">
                {/* Subtle highlight effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/0 to-red-900/0 group-hover:from-red-900/5 group-hover:to-red-900/0 transition-all duration-700"></div>

                <p className="testimonial-text text-gray-300 text-lg leading-relaxed relative z-10">
                  {testimonials[activeTestimonial].content}
                </p>
              </div>

              <div className="mt-8 flex justify-end">
                <button className="text-sm text-red-500 hover:text-red-400 transition-colors flex items-center group">
                  Read more testimonials
                  <ChevronRight
                    size={16}
                    className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feedback
