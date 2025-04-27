"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Calendar, User, Clock, ArrowRight, ChevronRight, Search, ChevronLeft } from "lucide-react"

const Blog = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeCategory, setActiveCategory] = useState("All")
  const [currentPage, setCurrentPage] = useState(0)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current
    const cards = cardsRef.current

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
  }, [currentPage, activeCategory])

  const categories = ["All", "Youth Programs", "Martial Arts Styles", "Student Guidance", "Self Defense", "Fitness"]

  const blogs = [
    {
      id: 1,
      title: "The Benefits of Martial Arts for Children",
      excerpt:
        "Discover how martial arts training can help children develop discipline, confidence, and physical fitness. Our youth programs are designed to instill important life skills while providing a fun and engaging environment for learning.",
      date: "June 15, 2023",
      author: "Sensei Michael",
      image: "/blog-children-martial-arts.png",
      category: "Youth Programs",
      readTime: "5 min read",
      featured: true,
    },
    {
      id: 2,
      title: "Karate vs Taekwondo: Understanding the Differences",
      excerpt:
        "A comprehensive comparison of two popular martial arts styles and their unique approaches to self-defense. Learn about the history, techniques, and philosophy behind these distinct martial arts traditions.",
      date: "May 28, 2023",
      author: "Master Chen",
      image: "/blog-karate-vs-taekwondo.png",
      category: "Martial Arts Styles",
      readTime: "7 min read",
      featured: true,
    },
    {
      id: 3,
      title: "Preparing for Your First Belt Test",
      excerpt:
        "Essential tips and mental preparation strategies to help you succeed in your upcoming belt examination. Learn how to manage test anxiety and showcase your skills with confidence.",
      date: "April 12, 2023",
      author: "Sensei Sarah",
      image: "/blog-belt-test.png",
      category: "Student Guidance",
      readTime: "4 min read",
      featured: true,
    },
    {
      id: 4,
      title: "5 Self-Defense Techniques Everyone Should Know",
      excerpt:
        "Learn practical self-defense moves that can help you stay safe in potentially dangerous situations. These techniques are simple to learn but effective in real-world scenarios.",
      date: "March 5, 2023",
      author: "Sensei David",
      image: "/blog-self-defense.png",
      category: "Self Defense",
      readTime: "6 min read",
      featured: false,
    },
    {
      id: 5,
      title: "Martial Arts for Fitness: Beyond the Spiritual Aspects",
      excerpt:
        "Explore how martial arts training provides a complete fitness regimen that builds strength, flexibility, and cardiovascular health while teaching valuable skills.",
      date: "February 18, 2023",
      author: "Coach Amanda",
      image: "/blog-martial-arts-fitness.png",
      category: "Fitness",
      readTime: "5 min read",
      featured: false,
    },
    {
      id: 6,
      title: "The History and Evolution of Karate",
      excerpt:
        "Dive into the rich history of Karate, from its origins in Okinawa to its global popularity today. Understand how this martial art has evolved while maintaining its core principles.",
      date: "January 30, 2023",
      author: "Sensei Tanaka",
      image: "/blog-karate-history.png",
      category: "Martial Arts Styles",
      readTime: "8 min read",
      featured: false,
    },
  ]

  const filteredBlogs = activeCategory === "All" ? blogs : blogs.filter((blog) => blog.category === activeCategory)

  // Pagination
  const postsPerPage = 3
  const totalPages = Math.ceil(filteredBlogs.length / postsPerPage)
  const currentPosts = filteredBlogs.slice(currentPage * postsPerPage, (currentPage + 1) * postsPerPage)

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <section ref={sectionRef} id="blog" className="relative py-24 text-white">
      {/* Subtle background elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="title-container mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-red-500/50"></div>
            <span className="text-red-500 uppercase tracking-wider text-sm font-medium">Insights & Tips</span>
            <div className="h-px w-12 bg-red-500/50"></div>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-white">
            <span className="text-red-600">MARTIAL ARTS</span> JOURNAL
          </h2>
          <p className="mx-auto max-w-2xl text-gray-300 mt-4">
            Insights, tips, and stories from our martial arts community. Stay informed with the latest trends and
            techniques.
          </p>
        </div>

        {/* Top search and filter bar */}
        <div className="mb-10 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="relative w-full md:w-auto">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full md:w-64 bg-black/50 border border-gray-700 rounded-lg py-2 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
          </div>

          <div className="flex flex-wrap gap-2 justify-center md:justify-end">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category)
                  setCurrentPage(0)
                }}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-red-600 text-white"
                    : "bg-black/30 border border-gray-800 text-gray-300 hover:border-red-500/30 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Magazine-style layout */}
        <div ref={cardsRef} className="mb-10">
          {currentPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-10">
              {currentPosts.map((blog, index) => (
                <div
                  key={blog.id}
                  className={`blog-card ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex flex-col md:flex-row bg-black/30 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden hover:border-red-500/30 transition-all duration-300 group`}
                >
                  <div className="md:w-1/2 relative">
                    <img
                      src={blog.image || "/placeholder.svg"}
                      alt={blog.title}
                      className="w-full h-full object-cover min-h-[300px] transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent md:hidden"></div>

                    {/* Category badge */}
                    <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                      {blog.category}
                    </div>

                    {/* Reading time */}
                    <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {blog.readTime}
                    </div>
                  </div>

                  <div className="md:w-1/2 p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center text-sm text-gray-400 mb-4">
                        <div className="flex items-center mr-4">
                          <Calendar className="w-4 h-4 mr-1 text-red-500" />
                          <span>{blog.date}</span>
                        </div>
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1 text-red-500" />
                          <span>{blog.author}</span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
                        {blog.title}
                      </h3>

                      <p className="text-gray-300 mb-6">{blog.excerpt}</p>
                    </div>

                    <Button className="self-start bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white shadow-md group">
                      <span className="flex items-center">
                        Read Article
                        <ArrowRight
                          size={16}
                          className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-black/30 backdrop-blur-sm rounded-lg border border-gray-800">
              <p className="text-gray-400">No articles found in this category.</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {filteredBlogs.length > postsPerPage && (
          <div className="flex justify-center items-center space-x-4 mb-10">
            <Button
              variant="outline"
              size="sm"
              onClick={prevPage}
              disabled={currentPage === 0}
              className={`border-gray-700 ${
                currentPage === 0 ? "opacity-50 cursor-not-allowed" : "hover:border-red-500/50 hover:text-red-400"
              }`}
            >
              <ChevronLeft size={16} className="mr-1" />
              Previous
            </Button>

            <div className="text-sm text-gray-400">
              Page {currentPage + 1} of {totalPages}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
              className={`border-gray-700 ${
                currentPage === totalPages - 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:border-red-500/50 hover:text-red-400"
              }`}
            >
              Next
              <ChevronRight size={16} className="ml-1" />
            </Button>
          </div>
        )}

        {/* Newsletter signup */}
        <div className="bg-gradient-to-r from-black/60 to-black/40 backdrop-blur-sm rounded-xl border border-gray-800 p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
                <p className="text-gray-300 max-w-md">
                  Subscribe to our newsletter to receive the latest martial arts insights, tips, and exclusive content.
                </p>
              </div>

              <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full sm:w-64 bg-black/50 border border-gray-700 rounded-lg py-2 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50"
                />
                <Button className="bg-red-600 hover:bg-red-700 text-white">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
