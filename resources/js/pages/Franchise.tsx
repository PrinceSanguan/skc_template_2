"use client"

import type React from "react"

import { Head } from "@inertiajs/react"
import { useEffect, useRef, useState } from "react"
import Navbar from "@/components/welcomePage/Navbar"
import Footer from "@/components/welcomePage/Footer"
import { initScrollAnimations } from "@/utils/animations"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  ArrowRight,
  Award,
  Check,
  ChevronDown,
  ChevronRight,
  Clock,
  DollarSign,
  Download,
  Globe,
  Headphones,
  LineChart,
  Menu,
  MessageCircle,
  Shield,
  Star,
  Target,
  Users,
  X,
} from "lucide-react"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Franchise() {
  const headerRef = useRef<HTMLHeadingElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [activeSection, setActiveSection] = useState("overview")
  const [showSidebar, setShowSidebar] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    message: "",
  })
  const [formFocus, setFormFocus] = useState<string | null>(null)
  const [showVideo, setShowVideo] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleInputFocus = (name: string) => {
    setFormFocus(name)
  }

  const handleInputBlur = () => {
    setFormFocus(null)
  }

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setShowSidebar(false)
  }

  // Create animated background
  useEffect(() => {
    // Set images as loaded after component mounts to prevent hydration issues
    setImagesLoaded(true)

    // Initialize animations when component mounts
    initScrollAnimations()

    // Simple fade-in animation for the header
    if (headerRef.current) {
      gsap.from(headerRef.current, {
        opacity: 0,
        y: -30,
        duration: 1,
        ease: "power3.out",
      })
    }

    // Add scroll animations
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".scroll-animate")

      elements.forEach((element) => {
        gsap.fromTo(
          element,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        )
      })
    }

    animateOnScroll()

    // Highlight active section on scroll
    const sections = document.querySelectorAll("section[id]")

    const highlightActiveSection = () => {
      let current = ""

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top
        if (sectionTop < 200) {
          current = section.getAttribute("id") || ""
        }
      })

      if (current && current !== activeSection) {
        setActiveSection(current)
      }
    }

    window.addEventListener("scroll", highlightActiveSection)

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      window.removeEventListener("scroll", highlightActiveSection)
    }
  }, [activeSection])

  // Navigation items
  const navItems = [
    { id: "overview", label: "Overview" },
    { id: "benefits", label: "Benefits" },
    { id: "investment", label: "Investment" },
    { id: "support", label: "Support" },
    { id: "process", label: "Process" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ]

  // Franchise benefits data
  const benefits = [
    {
      icon: <Shield className="w-6 h-6 text-red-500" />,
      title: "Proven Business Model",
      description: "A time-tested system with over 40 years of success and profitability",
    },
    {
      icon: <Users className="w-6 h-6 text-red-500" />,
      title: "Expert Leadership",
      description: "Learn from industry veterans with decades of martial arts business experience",
    },
    {
      icon: <LineChart className="w-6 h-6 text-red-500" />,
      title: "Multiple Revenue Streams",
      description: "Diverse program offerings create stable, year-round income opportunities",
    },
    {
      icon: <Globe className="w-6 h-6 text-red-500" />,
      title: "Community Impact",
      description: "Build a business that transforms lives and strengthens your community",
    },
    {
      icon: <Headphones className="w-6 h-6 text-red-500" />,
      title: "Ongoing Support",
      description: "Comprehensive training and continuous operational assistance",
    },
    {
      icon: <Target className="w-6 h-6 text-red-500" />,
      title: "Marketing Systems",
      description: "Proven strategies to attract and retain students year after year",
    },
  ]

  // Support types
  const supportTypes = [
    {
      title: "Operational Support",
      description:
        "The SKC family provides robust support across all facets of your franchise operations. From day one, you'll receive ongoing assistance covering everything from technical training to administrative procedures.",
      image: "/Images/team/Copy-of-IMG_3576-scaled-2-1024x683.jpg",
      features: [
        "Dedicated franchise consultant assigned to your location",
        "Proprietary student management software system",
        "Regular business reviews and performance optimization",
        "Access to our network of vendors and suppliers",
      ],
    },
    {
      title: "Marketing Systems",
      description:
        "SKC Franchise provides advertising materials and strategies refined over years of experience to drive student enrollment and retention. This ensures our franchisees have the resources to effectively attract and engage clients.",
      image: "/Images/team/63d03cc126d6cd7584f54e0c-1-1024x576.png",
      features: [
        "Proven digital marketing campaigns and social media strategies",
        "Customizable promotional materials and templates",
        "Local marketing support and community outreach programs",
        "Seasonal promotion calendars and retention strategies",
      ],
    },
    {
      title: "Training Program",
      description:
        "Our program includes six weeks of initial hands-on and video instruction at our Georgia HQ. Upon opening, you'll receive an additional week of on-site coaching to ensure a smooth transition and continued success.",
      image: "/Images/team/88A5D580-B43D-4916-92F9-2B8037264B27-rotated-e1724873881945.jpg",
      features: [
        "Comprehensive martial arts instruction and teaching methodology",
        "Business operations and management training",
        "Staff recruitment, training, and development strategies",
        "Ongoing certification and continuing education opportunities",
      ],
    },
  ]

  // Process steps
  const processSteps = [
    {
      title: "Initial Contact",
      description: "Submit your information to begin the conversation about joining the SKC family",
      icon: <MessageCircle className="w-6 h-6 text-red-500" />,
    },
    {
      title: "Discovery Call",
      description: "Learn about our franchise opportunity and get answers to your questions",
      icon: <Headphones className="w-6 h-6 text-red-500" />,
    },
    {
      title: "Qualification",
      description: "We'll evaluate your background, experience, and financial readiness",
      icon: <Check className="w-6 h-6 text-red-500" />,
    },
    {
      title: "Discovery Day",
      description: "Visit our headquarters to meet the team and experience SKC firsthand",
      icon: <Users className="w-6 h-6 text-red-500" />,
    },
    {
      title: "Agreement",
      description: "Review and sign franchise documents to formalize our partnership",
      icon: <Check className="w-6 h-6 text-red-500" />,
    },
    {
      title: "Training",
      description: "Complete our comprehensive training program at our Georgia headquarters",
      icon: <Target className="w-6 h-6 text-red-500" />,
    },
    {
      title: "Grand Opening",
      description: "Launch your SKC location with our team's support and guidance",
      icon: <Award className="w-6 h-6 text-red-500" />,
    },
  ]

  // Testimonials data
  const testimonials = [
    {
      quote:
        "Joining the SKC franchise family was the best business decision I've ever made. The support system and proven model have helped me build a thriving martial arts school.",
      name: "Michael Chen",
      location: "SKC Franchise Owner - California",
      image: "/Images/team/Copy-of-IMG_9985-1-scaled-1.jpg",
    },
    {
      quote:
        "The training and ongoing support from SKC headquarters has been exceptional. They truly care about each franchisee's success and are always available to help.",
      name: "Sarah Johnson",
      location: "SKC Franchise Owner - Texas",
      image: "/Images/team/Copy-of-IMG_8401-1-scaled-1-1024x683 (1).jpg",
    },
    {
      quote:
        "What sets SKC apart is their commitment to both business success and student development. I'm proud to be part of a franchise that changes lives.",
      name: "David Rodriguez",
      location: "SKC Franchise Owner - Florida",
      image: "/Images/team/Copy-of-IMG_8865-2-scaled-1-1024x683.jpg",
    },
  ]

  return (
    <>
      <Head title="Franchise Opportunity | Seigler's Karate Center">
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
      </Head>

      <div className="flex min-h-screen flex-col bg-black text-white">
        <Navbar />

        {/* Fixed side navigation */}
        <div className="fixed top-24 left-6 z-40 hidden lg:block">
          <div className="bg-black/80 backdrop-blur-md rounded-xl border border-red-900/30 shadow-lg p-4 w-48">
            <div className="text-sm font-semibold mb-4 text-red-500">QUICK NAVIGATION</div>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center w-full text-left px-3 py-2 rounded-lg transition-all ${
                      activeSection === item.id
                        ? "bg-red-900/30 text-white font-medium"
                        : "text-gray-400 hover:text-white hover:bg-red-900/20"
                    }`}
                  >
                    <ChevronRight
                      className={`w-4 h-4 mr-2 transition-transform ${activeSection === item.id ? "text-red-500" : ""}`}
                    />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile navigation button */}
        <button
          onClick={() => setShowSidebar(true)}
          className="fixed bottom-6 right-6 z-40 lg:hidden bg-gradient-to-r from-red-700 to-red-600 rounded-full p-4 shadow-lg"
        >
          <Menu className="w-6 h-6 text-white" />
        </button>

        {/* Mobile sidebar */}
        {showSidebar && (
          <div className="fixed inset-0 bg-black/90 z-50 lg:hidden">
            <div className="h-full w-full max-w-xs bg-black border-r border-red-900/30 p-6">
              <div className="flex justify-between items-center mb-8">
                <div className="text-xl font-bold">Navigation</div>
                <button onClick={() => setShowSidebar(false)} className="text-gray-400">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`flex items-center w-full text-left px-3 py-3 rounded-lg transition-all ${
                        activeSection === item.id
                          ? "bg-red-900/30 text-white font-medium"
                          : "text-gray-400 hover:text-white hover:bg-red-900/20"
                      }`}
                    >
                      <ChevronRight
                        className={`w-5 h-5 mr-2 transition-transform ${
                          activeSection === item.id ? "text-red-500" : ""
                        }`}
                      />
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Main content */}
        <main className="flex-grow lg:ml-64">
          {/* Overview Section */}
          <section id="overview" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
            {/* Background image with overlay */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black z-10"></div>
              {imagesLoaded && (
                <img
                  src="/Images/team/63d03cc126d6cd7584f54e0c-1-1024x576.png"
                  alt="Martial arts training"
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Animated gradient overlay */}
            <div className="absolute inset-0 z-5">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-900/30 to-transparent"></div>
              <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-red-900/20 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-20 z-10 relative">
              <div className="max-w-4xl mx-auto">
                <div className="inline-block px-4 py-1 bg-gradient-to-r from-red-800 to-red-700 rounded-full text-sm font-semibold mb-4 animate-pulse">
                  FRANCHISE OPPORTUNITY
                </div>
                <h1 ref={headerRef} className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white">
                    BUILD YOUR LEGACY WITH SKC
                  </span>
                </h1>
                <div className="w-32 h-1 bg-gradient-to-r from-red-700 to-red-500 mb-6"></div>
                <p className="text-xl mb-8 text-gray-300 leading-relaxed max-w-2xl">
                  Join a 40-year martial arts legacy with proven systems, expert leadership, and life-changing impact.
                  Seigler's Karate Center offers a unique franchise opportunity for passionate entrepreneurs.
                </p>

                {/* Key stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                  <div className="bg-black/60 backdrop-blur-sm border border-red-900/30 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                      40+
                    </div>
                    <div className="text-sm text-gray-400">Years of Success</div>
                  </div>
                  <div className="bg-black/60 backdrop-blur-sm border border-red-900/30 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                      500+
                    </div>
                    <div className="text-sm text-gray-400">Students Per Location</div>
                  </div>
                  <div className="bg-black/60 backdrop-blur-sm border border-red-900/30 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                      $1M+
                    </div>
                    <div className="text-sm text-gray-400">Annual Revenue</div>
                  </div>
                  <div className="bg-black/60 backdrop-blur-sm border border-red-900/30 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                      6
                    </div>
                    <div className="text-sm text-gray-400">Revenue Streams</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 px-8 py-4 rounded-md text-lg font-semibold text-white transition-all duration-300 shadow-[0_4px_15px_rgba(220,38,38,0.4)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.6)] hover:-translate-y-1"
                  >
                    GET STARTED
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                  <button
                    onClick={() => setShowVideo(true)}
                    className="inline-flex items-center justify-center bg-transparent border-2 border-white/30 hover:border-white px-8 py-4 rounded-md text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1"
                  >
                    WATCH VIDEO
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
              <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
              <ChevronDown className="w-6 h-6 text-gray-400" />
            </div>
          </section>

          {/* Benefits Section */}
          <section id="benefits" className="py-20 relative overflow-hidden scroll-animate">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black z-0"></div>
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-red-900/10 to-transparent"></div>
            <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay z-0"></div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto">
                <div className="inline-block px-4 py-1 bg-red-900/30 rounded-full text-sm font-semibold mb-4">
                  WHY CHOOSE SKC
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white">
                  FRANCHISE BENEFITS
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-red-700 to-red-500 mb-8"></div>
                <p className="text-xl text-gray-300 mb-12">
                  Join a franchise with a rich history of success and a commitment to transforming lives through martial
                  arts
                </p>

                {/* Benefits list */}
                <div className="space-y-8">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-sm rounded-xl border border-red-900/30 shadow-lg overflow-hidden"
                    >
                      <div className="flex flex-col md:flex-row">
                        <div className="bg-red-900/20 p-6 flex items-center justify-center md:w-24">
                          <div className="bg-red-900/30 p-3 rounded-lg">{benefit.icon}</div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                          <p className="text-gray-300">{benefit.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Investment Section */}
          <section id="investment" className="py-20 relative overflow-hidden scroll-animate">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-red-950/5 to-black/95 z-0"></div>
            <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay z-0"></div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto">
                <div className="inline-block px-4 py-1 bg-red-900/30 rounded-full text-sm font-semibold mb-4">
                  INVESTMENT OPPORTUNITY
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white">
                  YOUR INVESTMENT
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-red-700 to-red-500 mb-8"></div>
                <p className="text-xl text-gray-300 mb-12">
                  A strategic investment in your future with clear costs and exceptional returns
                </p>

                {/* Investment cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <div className="bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-sm rounded-xl border border-red-900/30 shadow-lg p-6 text-center">
                    <div className="bg-red-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <DollarSign className="w-8 h-8 text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Initial Franchise Fee</h3>
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 mb-2">
                      $40,000
                    </div>
                    <p className="text-sm text-gray-400">One-time payment</p>
                  </div>

                  <div className="bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-sm rounded-xl border border-red-900/30 shadow-lg p-6 text-center">
                    <div className="bg-red-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <LineChart className="w-8 h-8 text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Total Investment</h3>
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 mb-2">
                      $110,000+
                    </div>
                    <p className="text-sm text-gray-400">Including franchise fee</p>
                  </div>

                  <div className="bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-sm rounded-xl border border-red-900/30 shadow-lg p-6 text-center">
                    <div className="bg-red-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Royalty Fee</h3>
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 mb-2">
                      7%
                    </div>
                    <p className="text-sm text-gray-400">Of gross revenue</p>
                  </div>
                </div>

                {/* What's included */}
                <div className="bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-sm rounded-xl border border-red-900/30 shadow-lg p-8">
                  <h3 className="text-2xl font-bold mb-6">What's Included</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-red-900/30 p-2 rounded-lg mr-4 mt-1">
                          <Check className="w-4 h-4 text-red-500" />
                        </div>
                        <p className="text-gray-300">Comprehensive 6-week training program</p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-red-900/30 p-2 rounded-lg mr-4 mt-1">
                          <Check className="w-4 h-4 text-red-500" />
                        </div>
                        <p className="text-gray-300">On-site support during grand opening</p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-red-900/30 p-2 rounded-lg mr-4 mt-1">
                          <Check className="w-4 h-4 text-red-500" />
                        </div>
                        <p className="text-gray-300">Proprietary curriculum and systems</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-red-900/30 p-2 rounded-lg mr-4 mt-1">
                          <Check className="w-4 h-4 text-red-500" />
                        </div>
                        <p className="text-gray-300">Marketing materials and strategies</p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-red-900/30 p-2 rounded-lg mr-4 mt-1">
                          <Check className="w-4 h-4 text-red-500" />
                        </div>
                        <p className="text-gray-300">Ongoing operational support</p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-red-900/30 p-2 rounded-lg mr-4 mt-1">
                          <Check className="w-4 h-4 text-red-500" />
                        </div>
                        <p className="text-gray-300">Territory exclusivity rights</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 px-8 py-3 rounded-md font-semibold text-white transition-all duration-300 shadow-lg hover:-translate-y-1"
                    >
                      REQUEST DETAILED INVESTMENT BREAKDOWN
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Support Section */}
          <section id="support" className="py-20 relative overflow-hidden scroll-animate">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black/95 z-0"></div>
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-red-900/10 to-transparent"></div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto">
                <div className="inline-block px-4 py-1 bg-red-900/30 rounded-full text-sm font-semibold mb-4">
                  COMPREHENSIVE SUPPORT
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white">
                  THE SKC ADVANTAGE
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-red-700 to-red-500 mb-8"></div>
                <p className="text-xl text-gray-300 mb-12">
                  We provide everything you need to build a successful martial arts business
                </p>

                {/* Support types */}
                <div className="space-y-12">
                  {supportTypes.map((support, index) => (
                    <div key={index} className="scroll-animate">
                      <div className="bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-sm rounded-xl border border-red-900/30 shadow-lg overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                          <div className="p-8">
                            <h3 className="text-2xl font-bold mb-4">{support.title}</h3>
                            <div className="w-16 h-1 bg-gradient-to-r from-red-700 to-red-500 mb-6"></div>
                            <p className="text-gray-300 mb-6">{support.description}</p>

                            <ul className="space-y-3">
                              {support.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start">
                                  <div className="bg-red-900/30 p-2 rounded-lg mr-4 mt-1">
                                    <Check className="w-4 h-4 text-red-500" />
                                  </div>
                                  <p className="text-gray-300">{feature}</p>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="relative h-64 md:h-auto">
                            {imagesLoaded && (
                              <img
                                src={support.image || "/placeholder.svg"}
                                alt={support.title}
                                className="w-full h-full object-cover"
                              />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent md:bg-gradient-to-l"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section id="process" className="py-20 relative overflow-hidden scroll-animate">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-red-950/5 to-black/95 z-0"></div>
            <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay z-0"></div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto">
                <div className="inline-block px-4 py-1 bg-red-900/30 rounded-full text-sm font-semibold mb-4">
                  THE JOURNEY
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white">
                  YOUR PATH TO OWNERSHIP
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-red-700 to-red-500 mb-8"></div>
                <p className="text-xl text-gray-300 mb-12">
                  Follow these steps to become part of the SKC franchise family
                </p>

                {/* Process steps */}
                <div className="relative">
                  <div className="space-y-8">
                    {processSteps.map((step, index) => (
                      <div key={index} className="scroll-animate">
                        <div className="flex flex-col md:flex-row">
                          <div className="flex-shrink-0 flex md:flex-col items-center mb-4 md:mb-0">
                            <div className="bg-gradient-to-r from-red-700 to-red-600 w-16 h-16 rounded-full flex items-center justify-center shadow-lg shadow-red-900/30 z-10">
                              {step.icon}
                            </div>
                            <div className="ml-4 md:ml-0 md:mt-2 text-xl font-bold md:text-center hidden md:block">
                              Step {index + 1}
                            </div>
                          </div>

                          <div className="md:ml-12">
                            <div className="bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-sm rounded-xl border border-red-900/30 shadow-lg p-6">
                              <h3 className="text-xl font-bold mb-2 flex items-center">
                                <span className="md:hidden mr-2 text-red-500">Step {index + 1}:</span> {step.title}
                              </h3>
                              <p className="text-gray-300">{step.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-12 text-center">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 px-8 py-4 rounded-md text-lg font-semibold text-white transition-all duration-300 shadow-[0_4px_15px_rgba(220,38,38,0.4)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.6)] hover:-translate-y-1"
                  >
                    START YOUR JOURNEY
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section id="testimonials" className="py-20 relative overflow-hidden scroll-animate">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black/95 z-0"></div>
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-red-900/10 to-transparent"></div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto">
                <div className="inline-block px-4 py-1 bg-red-900/30 rounded-full text-sm font-semibold mb-4">
                  SUCCESS STORIES
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white">
                  HEAR FROM OUR FRANCHISEES
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-red-700 to-red-500 mb-8"></div>
                <p className="text-xl text-gray-300 mb-12">
                  Real stories from real franchise owners who have found success with SKC
                </p>

                {/* Testimonials */}
                <div className="space-y-8">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="scroll-animate">
                      <div className="bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-sm rounded-xl border border-red-900/30 shadow-lg overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-3">
                          <div className="relative h-64 md:h-auto">
                            {imagesLoaded && (
                              <img
                                src={testimonial.image || "/placeholder.svg"}
                                alt={testimonial.name}
                                className="w-full h-full object-cover"
                              />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r"></div>
                          </div>

                          <div className="p-8 md:col-span-2 relative">
                            {/* Quote mark */}
                            <div className="absolute top-4 right-4 text-red-900/20 text-6xl font-serif">"</div>

                            <div className="flex mb-4">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-red-500 mr-1" fill="#ef4444" />
                              ))}
                            </div>

                            <p className="text-gray-300 italic text-lg mb-6">"{testimonial.quote}"</p>

                            <div className="pt-4 border-t border-red-900/30">
                              <div className="font-bold text-lg">{testimonial.name}</div>
                              <div className="text-sm text-gray-400">{testimonial.location}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section
            id="contact"
            className="py-20 bg-gradient-to-b from-black via-red-950/10 to-black relative"
            ref={formRef}
          >
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600 rounded-full filter blur-[100px] opacity-20 animate-pulse"></div>
              <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-red-700 rounded-full filter blur-[120px] opacity-15 animate-pulse"></div>
            </div>

            {/* Japanese pattern overlay */}
            <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay z-0"></div>

            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto">
                <div className="inline-block px-4 py-1 bg-red-900/30 rounded-full text-sm font-semibold mb-4">
                  GET STARTED TODAY
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white">
                  DOWNLOAD OUR FRANCHISE BROCHURE
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-red-700 to-red-500 mb-8"></div>
                <p className="text-xl text-gray-300 mb-12">Take the first step toward owning your own SKC franchise</p>

                <div className="bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-sm rounded-xl border border-red-900/30 shadow-lg p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                      <h3 className="text-2xl font-bold mb-6">Request Information</h3>

                      <form className="space-y-6">
                        <div className="space-y-4">
                          <div className="relative group">
                            <label htmlFor="name" className="text-sm font-medium text-gray-400 mb-1 block">
                              Your Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formState.name}
                              onChange={handleInputChange}
                              onFocus={() => handleInputFocus("name")}
                              onBlur={handleInputBlur}
                              className="w-full px-4 py-3 bg-gray-900/70 border border-red-900/30 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white transition-all duration-300"
                            />
                          </div>

                          <div className="relative group">
                            <label htmlFor="email" className="text-sm font-medium text-gray-400 mb-1 block">
                              Email Address
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formState.email}
                              onChange={handleInputChange}
                              onFocus={() => handleInputFocus("email")}
                              onBlur={handleInputBlur}
                              className="w-full px-4 py-3 bg-gray-900/70 border border-red-900/30 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white transition-all duration-300"
                            />
                          </div>

                          <div className="relative group">
                            <label htmlFor="phone" className="text-sm font-medium text-gray-400 mb-1 block">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formState.phone}
                              onChange={handleInputChange}
                              onFocus={() => handleInputFocus("phone")}
                              onBlur={handleInputBlur}
                              className="w-full px-4 py-3 bg-gray-900/70 border border-red-900/30 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white transition-all duration-300"
                            />
                          </div>

                          <div className="relative group">
                            <label htmlFor="state" className="text-sm font-medium text-gray-400 mb-1 block">
                              Desired State
                            </label>
                            <input
                              type="text"
                              id="state"
                              name="state"
                              value={formState.state}
                              onChange={handleInputChange}
                              onFocus={() => handleInputFocus("state")}
                              onBlur={handleInputBlur}
                              className="w-full px-4 py-3 bg-gray-900/70 border border-red-900/30 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white transition-all duration-300"
                            />
                          </div>

                          <div className="relative group">
                            <label htmlFor="message" className="text-sm font-medium text-gray-400 mb-1 block">
                              Message
                            </label>
                            <textarea
                              id="message"
                              name="message"
                              value={formState.message}
                              onChange={handleInputChange}
                              onFocus={() => handleInputFocus("message")}
                              onBlur={handleInputBlur}
                              rows={4}
                              className="w-full px-4 py-3 bg-gray-900/70 border border-red-900/30 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white transition-all duration-300"
                            ></textarea>
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="inline-flex items-center justify-center bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 px-8 py-4 rounded-md text-lg font-semibold text-white transition-all duration-300 shadow-[0_4px_15px_rgba(220,38,38,0.4)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.6)] w-full hover:-translate-y-1"
                        >
                          <Download className="mr-2 w-5 h-5" />
                          DOWNLOAD BROCHURE
                        </button>
                      </form>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-6">Why Request Our Brochure?</h3>

                      <div className="space-y-6">
                        <div className="bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-red-900/30">
                          <div className="flex items-center mb-2">
                            <div className="bg-red-900/30 p-2 rounded-lg mr-3">
                              <Check className="w-4 h-4 text-red-500" />
                            </div>
                            <h4 className="font-bold">Detailed Financial Information</h4>
                          </div>
                          <p className="text-gray-300 text-sm pl-9">
                            Get a comprehensive breakdown of investment costs, revenue projections, and ROI analysis
                          </p>
                        </div>

                        <div className="bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-red-900/30">
                          <div className="flex items-center mb-2">
                            <div className="bg-red-900/30 p-2 rounded-lg mr-3">
                              <Check className="w-4 h-4 text-red-500" />
                            </div>
                            <h4 className="font-bold">Support Systems Overview</h4>
                          </div>
                          <p className="text-gray-300 text-sm pl-9">
                            Learn about our comprehensive training, marketing, and operational support systems
                          </p>
                        </div>

                        <div className="bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-red-900/30">
                          <div className="flex items-center mb-2">
                            <div className="bg-red-900/30 p-2 rounded-lg mr-3">
                              <Check className="w-4 h-4 text-red-500" />
                            </div>
                            <h4 className="font-bold">Franchise Owner Insights</h4>
                          </div>
                          <p className="text-gray-300 text-sm pl-9">
                            Read exclusive testimonials and success stories from current franchise owners
                          </p>
                        </div>

                        <div className="bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-red-900/30">
                          <div className="flex items-center mb-2">
                            <div className="bg-red-900/30 p-2 rounded-lg mr-3">
                              <Check className="w-4 h-4 text-red-500" />
                            </div>
                            <h4 className="font-bold">Available Territories</h4>
                          </div>
                          <p className="text-gray-300 text-sm pl-9">
                            Discover prime locations currently available for new SKC franchise development
                          </p>
                        </div>
                      </div>

                      <div className="mt-8 text-xs text-gray-400">
                        <p className="mb-2 font-bold">Legal Disclaimer:</p>
                        <p>
                          This is not a franchise offering. A franchise offering can be made by us only in a state if we
                          are first registered, excluded, exempted or otherwise qualified to offer franchises in that
                          state, and only if we provide you with an appropriate franchise disclosure document.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />

        {/* Video modal */}
        {showVideo && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-2xl">
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-4 right-4 bg-red-600 rounded-full p-2 text-white z-10 hover:bg-red-700 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="SKC Franchise Opportunity"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
