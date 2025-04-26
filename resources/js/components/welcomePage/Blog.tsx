"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Blog = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current
    const cards = cardsRef.current
    const particles = particlesRef.current

    // Title animation
    if (section) {
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
        cards.querySelectorAll(".blog-card"),
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

    // Create subtle fire particles
    if (particles) {
      const colors = ["#ff9500", "#ff6a00", "#ff4d00", "#ff8800"]
      const particleInterval = setInterval(() => {
        const particle = document.createElement("div")
        const size = Math.random() * 4 + 1 // Smaller particles
        const color = colors[Math.floor(Math.random() * colors.length)]

        particle.style.position = "absolute"
        particle.style.width = `${size}px`
        particle.style.height = `${size}px`
        particle.style.borderRadius = "50%"
        particle.style.backgroundColor = color
        particle.style.opacity = (0.2 + Math.random() * 0.2).toString() // Lower opacity
        particle.style.left = `${Math.random() * 100}%`
        particle.style.bottom = "0"

        particles.appendChild(particle)

        // Gentle upward movement
        gsap.to(particle, {
          x: Math.random() * 30 - 15, // Less horizontal movement
          y: -(Math.random() * 100 + 50), // Less height
          opacity: 0,
          duration: 3 + Math.random() * 2,
          ease: "power1.out",
          onComplete: () => {
            if (particles.contains(particle)) {
              particles.removeChild(particle)
            }
          },
        })
      }, 300) // Less frequent particles

      return () => {
        if (particleInterval) {
          clearInterval(particleInterval)
        }
      }
    }
  }, [])

  const blogs = [
    {
      id: 1,
      title: "The Benefits of Martial Arts for Children",
      excerpt:
        "Discover how martial arts training can help children develop discipline, confidence, and physical fitness.",
      date: "June 15, 2023",
      author: "Sensei Michael",
      image: "/Images/team/TN-Lil-Dragons.jpg",
      category: "Youth Programs",
    },
    {
      id: 2,
      title: "Karate vs Taekwondo: Understanding the Differences",
      excerpt:
        "A comprehensive comparison of two popular martial arts styles and their unique approaches to self-defense.",
      date: "May 28, 2023",
      author: "Master Chen",
      image: "/Images/team/Copy-of-IMG_3535-1-scaled-1-683x1024.jpg",
      category: "Martial Arts Styles",
    },
    {
      id: 3,
      title: "Preparing for Your First Belt Test",
      excerpt:
        "Essential tips and mental preparation strategies to help you succeed in your upcoming belt examination.",
      date: "April 12, 2023",
      author: "Sensei Sarah",
      image: "/Images/team/TN-Kids-Karate.jpg",
      category: "Student Guidance",
    },
  ]

  return (
    <section id="blog" ref={sectionRef} className="relative py-20 text-white overflow-hidden">
      {/* Subtle particles container */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none z-5"></div>

      <div className="container relative mx-auto px-4 z-20">
        <div className="title-container mb-16 text-center">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="h-px w-8 bg-red-500"></div>
            <span className="text-red-400 uppercase tracking-wider text-sm font-semibold">Insights & Tips</span>
            <div className="h-px w-8 bg-red-500"></div>
          </div>
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">Latest from Our Blog</h2>
          <p className="mx-auto max-w-2xl text-gray-300 mt-4">
            Insights, tips, and stories from our martial arts community. Stay informed with the latest trends and
            techniques.
          </p>
          <div className="mx-auto mt-6 h-1 w-20 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
        </div>

        <div ref={cardsRef} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="blog-card group overflow-hidden rounded-xl bg-black/60 shadow-xl transition-all duration-300 backdrop-blur-sm border border-red-900/20 hover:border-red-600/40 hover:shadow-red-900/5"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={blog.image || "/placeholder.svg"}
                  alt={blog.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-3 left-3 rounded-full bg-gradient-to-r from-red-700 to-red-500 px-3 py-1 text-xs font-medium text-white shadow-lg">
                  {blog.category}
                </div>
              </div>
              <div className="p-5">
                <div className="mb-3 flex items-center text-sm text-gray-400">
                  <svg
                    className="w-4 h-4 mr-1 text-red-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2 2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>{blog.date}</span>
                  <span className="mx-2">•</span>
                  <svg
                    className="w-4 h-4 mr-1 text-red-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span>{blog.author}</span>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white group-hover:text-red-400 transition-colors duration-300">
                  {blog.title}
                </h3>
                <p className="mb-4 text-gray-300">{blog.excerpt}</p>
                <Button
                  variant="outline"
                  className="w-full border-red-600/30 text-red-500 hover:bg-red-900/20 hover:border-red-500/50 hover:text-red-400 transition-all duration-300 group-hover:text-red-400"
                >
                  <span className="flex items-center">
                    Read More
                    <svg
                      className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            variant="default"
            className="rounded-xl bg-gradient-to-r from-red-700 to-red-600 px-8 py-4 text-white hover:from-red-600 hover:to-red-500 hover:text-white transition-all duration-300 shadow-lg shadow-red-900/20 transform hover:scale-105 relative group overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center">
              View All Articles
              <svg
                className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Blog
