"use client"

import { useState } from "react"
import Template from "./Template"
import AnimatedElement from "@/components/ui/animated-element"
import { Link } from "@inertiajs/react"
import { ChevronRight, ChevronLeft, Calendar, User } from "lucide-react"

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

  // Actual blog data
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "At What Age Should Kids Start Martial Arts?",
      excerpt:
        'One of the most common questions parents ask about martial arts is, "At what age should my child start training?" Martial arts is one of the most beneficial activities for children, offering physical fitness, mental discipline, and emotional growth.',
      date: "April 3, 2025",
      author: "John Seigler",
      imageUrl: "/Images/team/TN-Lil-Dragons.jpg",
      category: "Kids Martial Arts",
    },
    {
      id: 2,
      title: "Why Adults Should Consider Martial Arts for Fitness",
      excerpt:
        "Finding the right fitness routine as an adult can be a challenge. With busy schedules, work commitments, and family responsibilities, many adults struggle to carve out time for themselves. Even when they do, traditional fitness programs often feel repetitive and uninspiring.",
      date: "March 3, 2025",
      author: "Sarah Johnson",
      imageUrl: "/Images/team/ADULTKEMPO.jpg",
      category: "Adult Martial Arts",
    },
    {
      id: 3,
      title: "How Martial Arts Boosts Self-Defense for Teens",
      excerpt:
        "Teenagers face a variety of challenges as they navigate the world, from handling peer pressure to managing social interactions. One of the most critical skills they can learn during this time is how to stay safe.",
      date: "February 3, 2025",
      author: "Michael Chen",
      imageUrl: "/Images/team/TN-Teen-Karate.jpg",
      category: "Adult Martial Arts",
    },
    {
      id: 4,
      title: "Benefits of Martial Arts for Kids Aged 4 to 10",
      excerpt:
        "Kids between the ages of 4 and 10 are in a pivotal phase of growth, where they're developing foundational life skills, forming habits, and exploring their sense of self. Martial arts serves as a powerful activity during this time, promoting physical, mental, and emotional development.",
      date: "January 3, 2025",
      author: "Lisa Williams",
      imageUrl: "/Images/team/TN-Kids-Karate.jpg",
      category: "Kids Martial Arts",
    },
    {
      id: 5,
      title: "Techniques vs. Principles: The Core of Martial Arts Mastery",
      excerpt:
        "In martial arts, the distinction between techniques and principles often defines a student's journey from novice to master. Many new students begin their martial arts journey seeking practical techniques—such as powerful kicks, precise strikes, or swift defenses—but soon realize that the real depth of martial arts comes from understanding its core principles.",
      date: "December 16, 2024",
      author: "John Seigler",
      imageUrl: "/Images/team/JIU JITSU.jpg",
      category: "Adult Martial Arts",
    },
    {
      id: 6,
      title: "How Martial Arts Training Boosts Focus and Discipline in Children",
      excerpt:
        "In today's fast-paced world, children are exposed to numerous distractions, from digital screens to an overwhelming array of activities. With attention spans becoming shorter, many parents are seeking ways to help their children develop better focus and concentration skills.",
      date: "December 2, 2024",
      author: "Sarah Johnson",
      imageUrl: "/Images/team/Copy-of-IMG_0115-1-scaled-1-1024x683.jpg",
      category: "Kids Martial Arts",
    },
    {
      id: 7,
      title: "How Respect and Etiquette Shape Your Martial Arts Journey",
      excerpt:
        "Martial arts is far more than just physical techniques and self-defense. At its core, it is about building character, instilling discipline, and fostering respect. At Seigler's Karate Center, we emphasize the importance of respect and etiquette in every class, regardless of age or skill level.",
      date: "November 15, 2024",
      author: "Michael Chen",
      imageUrl: "/Images/team/88A5D580-B43D-4916-92F9-2B8037264B27-rotated-e1724873881945.jpg",
      category: "Adult Martial Arts",
    },
    {
      id: 8,
      title: "Mastering Mental Fortitude: How Martial Arts Builds Inner Strength",
      excerpt:
        "When we think about martial arts, the immediate images that often come to mind are those of swift kicks, powerful punches, and mastering self-defense techniques. However, beyond the physical discipline lies an equally vital benefit: the development of mental fortitude.",
      date: "November 1, 2024",
      author: "Lisa Williams",
      imageUrl: "/Images/team/Copy-of-IMG_8401-1-scaled-1-1024x683.jpg",
      category: "Adult Martial Arts",
    },
    {
      id: 9,
      title: "Building Self-Respect in Today's Youth Through Martial Arts",
      excerpt:
        "In today's fast-paced, technology-driven world, building self-respect among youth has become more important than ever. Between social pressures and the constant digital influence, it can be challenging for children and teens to develop a strong sense of self-worth.",
      date: "October 15, 2024",
      author: "John Seigler",
      imageUrl: "/Images/team/Copy-of-IMG_8401-1-scaled-1-1024x683.jpg",
      category: "Kids Martial Arts",
    },
    {
      id: 10,
      title: "The Enduring Influence of Ancient Philosophies on Modern Martial Arts",
      excerpt:
        "Martial arts, often viewed as a means of self-defense and physical fitness, have deep-rooted philosophies that date back thousands of years. These ancient principles not only shaped the way martial arts are practiced today at Seigler's Karate Center but also emphasize character development, discipline, and respect—values that transcend the practice floor and permeate everyday life.",
      date: "October 1, 2024",
      author: "Sarah Johnson",
      imageUrl: "/Images/team/Copy-of-IMG_3576-scaled-2-1024x683.jpg",
      category: "Adult Martial Arts",
    },
  ]

  // Categories for the filter buttons
  const categories = ["All Posts", "Kids Martial Arts", "Adult Martial Arts"]

  // Filter posts based on active category
  const filteredPosts =
    activeCategory === "All Posts" ? blogPosts : blogPosts.filter((post) => post.category === activeCategory)

  // Function to handle image error
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.currentTarget;
    img.onerror = null; // Prevent infinite loop
    img.src = "/api/placeholder/400/320"; // Fallback to placeholder
  }

  return (
    <Template title="Blog">
      <div className="relative">
        {/* Background decorative elements */}
        <div className="absolute top-1/4 -right-10 w-40 h-40 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-red-600/15 rounded-full blur-2xl"></div>
        <div className="absolute right-0 top-1/2 w-24 h-24 bg-red-500/10 rounded-full blur-xl"></div>

        <div className="container mx-auto px-4 py-16">
          <div className="mb-16 text-center">
            <AnimatedElement type="fadeIn" delay={0.2}>
              <div className="inline-flex items-center space-x-2 mb-4">
                <div className="h-px w-8 bg-red-500"></div>
                <span className="text-red-400 uppercase tracking-wider text-sm font-semibold">
                  Insights & Knowledge
                </span>
                <div className="h-px w-8 bg-red-500"></div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-red-200">
                Our Blog
              </h1>
              <div className="mx-auto h-1 w-20 bg-gradient-to-r from-red-600 to-red-400 rounded-full mt-2"></div>
            </AnimatedElement>

            <AnimatedElement type="fadeIn" delay={0.3}>
              <p className="text-xl text-gray-300 mt-8 mb-12 max-w-3xl mx-auto">
                Insights, tips, and stories from our karate journey. Stay informed about techniques, events, and the
                martial arts lifestyle.
              </p>
            </AnimatedElement>
          </div>

          {/* Categories */}
          <AnimatedElement type="fadeIn" delay={0.4}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category)}
                  className={`${
                    activeCategory === category
                      ? "bg-gradient-to-r from-red-700 to-red-600 shadow-[0_4px_10px_rgba(220,38,38,0.3)]"
                      : "bg-black/60 border border-red-900/30 hover:border-red-600/50"
                  } text-white px-6 py-2 rounded-full transition-all duration-300`}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimatedElement>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {filteredPosts.map((post, index) => (
              <AnimatedElement key={post.id} type="fadeInUp" delay={0.2 + index * 0.1}>
                <div className="rounded-xl border border-red-900/30 bg-black/60 shadow-xl backdrop-blur-sm overflow-hidden h-full flex flex-col hover:border-red-600/50 transition-all duration-300 group">
                  <Link href={`/about/blog/${post.id}`} target="_blank">
                    <div className="aspect-w-16 aspect-h-9 w-full">
                      <div className="h-56 w-full relative overflow-hidden">
                        {/* Added actual image element here */}
                        <img 
                          src={post.imageUrl} 
                          alt={post.title}
                          className="w-full h-full object-cover"
                          onError={handleImageError}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                        <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
                        <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-gradient-to-r from-red-600/10 to-yellow-500/5 blur-xl"></div>
                      </div>
                    </div>
                  </Link>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm text-red-400 bg-red-900/20 px-3 py-1 rounded-full">{post.category}</span>
                      <span className="text-sm text-gray-400 flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.date}
                      </span>
                    </div>
                    <Link href={`/about/blog/${post.id}`} target="_blank">
                      <h3 className="text-xl font-semibold text-white mb-3 hover:text-red-400 transition-colors">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-gray-300 mb-4 flex-grow">{post.excerpt}</p>
                    <div className="flex justify-between items-center mt-auto pt-4 border-t border-red-900/20">
                      <span className="text-sm text-gray-400 flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        By {post.author}
                      </span>
                      <Link
                        href={`/about/blog/${post.id}`}
                        className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors group-hover:translate-x-1"
                        target="_blank"
                      >
                        Read More
                        <ChevronRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>

          {/* Empty state when no posts match the filter */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <div className="rounded-xl border border-red-900/30 bg-black/60 shadow-xl backdrop-blur-sm p-8 max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold text-white mb-4">No posts found</h3>
                <p className="text-gray-300 mb-6">
                  There are currently no posts in the "{activeCategory}" category. Please check back later or select a
                  different category.
                </p>
                <button
                  onClick={() => setActiveCategory("All Posts")}
                  className="bg-gradient-to-r from-red-700 to-red-600 text-white px-6 py-2 rounded-md shadow-[0_4px_10px_rgba(220,38,38,0.3)] hover:shadow-[0_6px_15px_rgba(220,38,38,0.4)] transition-all duration-300"
                >
                  View All Posts
                </button>
              </div>
            </div>
          )}

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="inline-flex rounded-md overflow-hidden shadow-lg border border-red-900/30">
              <button className="bg-black/60 text-white py-2 px-4 hover:bg-red-900/30 transition-colors duration-300 flex items-center border-r border-red-900/30">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </button>
              <button className="bg-gradient-to-r from-red-700 to-red-600 text-white py-2 px-4 hover:from-red-600 hover:to-red-500 transition-colors duration-300">
                1
              </button>
              <button className="bg-black/60 text-white py-2 px-4 hover:bg-red-900/30 transition-colors duration-300 border-l border-red-900/30">
                2
              </button>
              <button className="bg-black/60 text-white py-2 px-4 hover:bg-red-900/30 transition-colors duration-300 border-l border-red-900/30">
                3
              </button>
              <button className="bg-black/60 text-white py-2 px-4 hover:bg-red-900/30 transition-colors duration-300 flex items-center border-l border-red-900/30">
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </nav>
          </div>

          {/* Categories and Recent Posts Sidebar */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-red-900/30 bg-black/60 shadow-xl backdrop-blur-sm p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-red-900/5 rounded-full blur-2xl"></div>

              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-red-900/30">Categories</h3>
                <ul className="space-y-3">
                  {categories.slice(1).map((category, index) => (
                    <li key={index} className="group">
                      <button
                        onClick={() => setActiveCategory(category)}
                        className="text-gray-300 hover:text-red-400 transition-colors flex items-center w-full text-left"
                      >
                        <ChevronRight className="h-4 w-4 mr-2 text-red-500 group-hover:translate-x-1 transition-transform duration-300" />
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-xl border border-red-900/30 bg-black/60 shadow-xl backdrop-blur-sm p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-red-900/5 rounded-full blur-2xl"></div>

              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-red-900/30">Recent Posts</h3>
                <ul className="space-y-4">
                  {blogPosts.slice(0, 5).map((post) => (
                    <li key={post.id} className="group">
                      <Link
                        href={`/about/blog/${post.id}`}
                        className="text-gray-300 hover:text-red-400 transition-colors flex items-start"
                        target="_blank"
                      >
                        <ChevronRight className="h-4 w-4 mr-2 text-red-500 mt-1 group-hover:translate-x-1 transition-transform duration-300" />
                        <div>
                          <span className="block">{post.title}</span>
                          <span className="text-xs text-gray-400">{post.date}</span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Template>
  )
}