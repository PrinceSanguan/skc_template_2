"use client"

import type React from "react"

import { useState } from "react"
import Template from "./Template"
import { Link } from "@inertiajs/react"
import { ChevronRight, ChevronLeft, Calendar, Search, Tag, Clock, ArrowRight } from "lucide-react"

// Simplified blog post interface
interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  author: string
  imageUrl: string
  category: string
}

export default function Blog() {
  // State for active category filter
  const [activeCategory, setActiveCategory] = useState("All Posts")
  const [searchQuery, setSearchQuery] = useState("")

  // Reduced blog data set
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "At What Age Should Kids Start Martial Arts?",
      excerpt:
        'One of the most common questions parents ask about martial arts is, "At what age should my child start training?"',
      date: "April 3, 2025",
      author: "John Seigler",
      imageUrl: "/Images/team/TN-Lil-Dragons.jpg",
      category: "Kids Martial Arts",
    },
    {
      id: 2,
      title: "Why Adults Should Consider Martial Arts for Fitness",
      excerpt: "Finding the right fitness routine as an adult can be a challenge.",
      date: "March 3, 2025",
      author: "Sarah Johnson",
      imageUrl: "/Images/team/ADULTKEMPO.jpg",
      category: "Adult Martial Arts",
    },
    {
      id: 3,
      title: "How Martial Arts Boosts Self-Defense for Teens",
      excerpt: "Teenagers face a variety of challenges as they navigate the world.",
      date: "February 3, 2025",
      author: "Michael Chen",
      imageUrl: "/Images/team/TN-Teen-Karate.jpg",
      category: "Adult Martial Arts",
    },
    {
      id: 4,
      title: "Benefits of Martial Arts for Kids Aged 4 to 10",
      excerpt: "Kids between the ages of 4 and 10 are in a pivotal phase of growth.",
      date: "January 3, 2025",
      author: "Lisa Williams",
      imageUrl: "/Images/team/TN-Kids-Karate.jpg",
      category: "Kids Martial Arts",
    },
    {
      id: 5,
      title: "Techniques vs. Principles: The Core of Martial Arts Mastery",
      excerpt: "In martial arts, the distinction between techniques and principles often defines a student's journey.",
      date: "December 16, 2024",
      author: "John Seigler",
      imageUrl: "/Images/team/JIU JITSU.jpg",
      category: "Adult Martial Arts",
    },
    {
      id: 6,
      title: "How Martial Arts Training Boosts Focus and Discipline in Children",
      excerpt: "In today's fast-paced world, children are exposed to numerous distractions.",
      date: "December 2, 2024",
      author: "Sarah Johnson",
      imageUrl: "/Images/team/Copy-of-IMG_0115-1-scaled-1-1024x683.jpg",
      category: "Kids Martial Arts",
    },
  ]

  // Categories for the filter buttons
  const categories = ["All Posts", "Kids Martial Arts", "Adult Martial Arts"]

  // Filter posts based on active category and search query
  const filteredPosts = blogPosts.filter(
    (post) =>
      (activeCategory === "All Posts" || post.category === activeCategory) &&
      (searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  // Featured post (first post)
  const featuredPost = blogPosts[0]

  // Simple image error handler with proper typing
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.currentTarget
    img.onerror = null
    img.src = "/focused-martial-artist.png"
  }

  return (
    <Template title="Blog">
      <div className="relative">
        {/* Red accent line at top */}
        <div className="h-0.5 w-full bg-red-600"></div>

        <div className="container mx-auto px-4 py-6">
          {/* Hero section */}
          <div className="flex flex-col md:flex-row items-center mb-8 gap-6">
            <div className="w-full md:w-1/2 text-left">
              <div className="inline-flex items-center space-x-2 mb-2">
                <div className="h-px w-6 bg-red-500"></div>
                <span className="text-red-400 uppercase tracking-wider text-xs font-semibold">
                  Insights & Knowledge
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white">
                Martial Arts <span className="text-red-600">Blog</span>
              </h1>
              <div className="h-0.5 w-16 bg-red-600 mb-3"></div>
              <p className="text-sm text-gray-300 mb-4 max-w-lg">
                Insights, tips, and stories from our karate journey. Stay informed about techniques, events, and the
                martial arts lifestyle.
              </p>

              {/* Search bar */}
              <div className="relative max-w-md">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-black/40 border border-red-900/30 rounded-full py-2 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
              </div>
            </div>

            {/* Featured post preview */}
            <div className="w-full md:w-1/2">
              <div className="rounded-lg border border-red-900/30 bg-black/60 shadow-lg overflow-hidden">
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-2/5 h-32 sm:h-auto relative overflow-hidden">
                    <img
                      src={featuredPost.imageUrl || "/placeholder.svg?height=400&width=600&query=martial%20arts"}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                      onError={handleImageError}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
                  </div>
                  <div className="sm:w-3/5 p-4">
                    <div className="flex items-center mb-2">
                      <span className="text-xs text-red-400 bg-red-900/20 px-2 py-0.5 rounded-full">
                        {featuredPost.category}
                      </span>
                      <span className="text-xs text-gray-400 ml-2 flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {featuredPost.date}
                      </span>
                    </div>
                    <Link href={`/about/blog/${featuredPost.id}`}>
                      <h3 className="text-sm font-semibold text-white mb-1 hover:text-red-400">{featuredPost.title}</h3>
                    </Link>
                    <p className="text-xs text-gray-300 mb-2">{featuredPost.excerpt}</p>
                    <Link
                      href={`/about/blog/${featuredPost.id}`}
                      className="inline-flex items-center text-xs text-red-400 hover:text-red-300"
                    >
                      Read Featured Article
                      <ChevronRight className="h-3 w-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Category tabs */}
          <div className="mb-6 border-b border-red-900/20 pb-2 flex items-center justify-between">
            <div className="flex items-center space-x-1 overflow-x-auto">
              <Tag className="h-3 w-3 text-red-500 mr-1" />
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category)}
                  className={`${
                    activeCategory === category
                      ? "bg-red-600 text-white"
                      : "bg-black/40 text-gray-300 hover:bg-red-900/20"
                  } text-xs px-3 py-1 rounded-full whitespace-nowrap`}
                >
                  {category}
                </button>
              ))}
            </div>
            <span className="text-xs text-gray-500">{filteredPosts.length} articles</span>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="rounded-lg border border-red-900/30 bg-black/60 shadow-md overflow-hidden flex flex-col h-full"
              >
                <Link href={`/about/blog/${post.id}`}>
                  <div className="h-36 w-full relative overflow-hidden">
                    <img
                      src={post.imageUrl || "/placeholder.svg?height=400&width=600&query=martial%20arts"}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      onError={handleImageError}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute top-2 left-2">
                      <span className="text-xs text-white bg-red-600/80 px-2 py-0.5 rounded-full">{post.category}</span>
                    </div>
                  </div>
                </Link>
                <div className="p-3 flex-grow flex flex-col">
                  <Link href={`/about/blog/${post.id}`}>
                    <h3 className="text-sm font-semibold text-white mb-1 hover:text-red-400">{post.title}</h3>
                  </Link>
                  <p className="text-xs text-gray-300 mb-2 flex-grow">{post.excerpt}</p>
                  <div className="flex justify-between items-center mt-2 pt-2 border-t border-red-900/20">
                    <span className="text-xs text-gray-400 flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.date.split(" ")[0]}
                    </span>
                    <Link
                      href={`/about/blog/${post.id}`}
                      className="inline-flex items-center text-xs text-red-400 hover:text-red-300"
                    >
                      Read
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-6">
            <nav className="inline-flex rounded-md overflow-hidden shadow-md border border-red-900/30">
              <button className="bg-black/60 text-white py-1 px-2 text-xs hover:bg-red-900/30 flex items-center border-r border-red-900/30">
                <ChevronLeft className="h-3 w-3 mr-1" />
                Prev
              </button>
              <button className="bg-red-600 text-white py-1 px-2 text-xs">1</button>
              <button className="bg-black/60 text-white py-1 px-2 text-xs hover:bg-red-900/30 border-l border-red-900/30">
                2
              </button>
              <button className="bg-black/60 text-white py-1 px-2 text-xs hover:bg-red-900/30 border-l border-red-900/30">
                3
              </button>
              <button className="bg-black/60 text-white py-1 px-2 text-xs hover:bg-red-900/30 flex items-center border-l border-red-900/30">
                Next
                <ChevronRight className="h-3 w-3 ml-1" />
              </button>
            </nav>
          </div>

          {/* Newsletter signup */}
          <div className="mt-6 rounded-lg border border-red-900/30 bg-black/60 shadow-md p-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-sm font-semibold text-white mb-1">Subscribe to Our Newsletter</h3>
                <p className="text-xs text-gray-300">
                  Get the latest martial arts tips and exclusive content delivered to your inbox.
                </p>
              </div>
              <div className="flex w-full sm:w-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full sm:w-auto bg-black/40 border border-red-900/30 rounded-l-md py-1 px-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
                />
                <button className="bg-red-600 text-white text-xs px-3 py-1 rounded-r-md">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Template>
  )
}
