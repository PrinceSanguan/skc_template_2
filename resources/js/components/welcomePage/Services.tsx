"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeTab, setActiveTab] = useState(0)

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

      // Content animation
      gsap.fromTo(
        section.querySelector(".program-content"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        },
      )
    }
  }, [])

  // Animate content when tab changes
  useEffect(() => {
    const content = document.querySelector(".program-content")
    if (content) {
      gsap.fromTo(
        content,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        },
      )
    }
  }, [activeTab])

  // Function to handle navigation
  const navigateToPrograms = (e: React.MouseEvent) => {
    e.preventDefault()
    // Try different possible routes
    window.location.href = "/programs" // Try without the -index
  }

  const services = [
    {
      id: 1,
      title: "Lil Dragons",
      age: "4 – 5",
      description:
        "Empower your child with our Lil Dragons martial arts classes. Designed to channel their boundless curiosity and energy, our expert instructors provide vibrant, engaging lessons that are both educational and fun.",
      icon: (
        <svg
          className="h-6 w-6 text-red-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      image: "Images/team/TN-Lil-Dragons.jpg",
      imageAlt: "Lil Dragons martial arts class",
      benefits: [
        "Improved focus and attention",
        "Development of motor skills",
        "Introduction to discipline and respect",
        "Fun, engaging environment",
      ],
    },
    {
      id: 2,
      title: "Kids Karate",
      age: "6 – 10",
      description:
        "Our kids martial arts classes provide children with valuable benefits such as increased confidence, discipline, resilience, and self-defense skills. Through structured training and positive reinforcement, we help children develop both physically and mentally.",
      icon: (
        <svg
          className="h-6 w-6 text-red-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      image: "Images/team/TN-Kids-Karate.jpg",
      imageAlt: "Kids Karate class",
      benefits: [
        "Building confidence and self-esteem",
        "Learning respect and discipline",
        "Developing coordination and strength",
        "Effective anti-bullying strategies",
      ],
    },
    {
      id: 3,
      title: "Teens Karate",
      age: "11 – 13",
      description:
        "Ignite your teenager's journey from youth to adulthood with our martial arts classes. Enhance their emotional intelligence and empower them to unlock their full potential. Our teen program focuses on building confidence, discipline, and leadership skills.",
      icon: (
        <svg
          className="h-6 w-6 text-red-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      image: "Images/team/TN-Teen-Karate.jpg",
      imageAlt: "Teens Karate class",
      benefits: [
        "Building confidence during formative years",
        "Developing leadership skills",
        "Stress management techniques",
        "Positive peer environment",
      ],
    },
    {
      id: 4,
      title: "Adult Kempo",
      age: "14+",
      description:
        "Discover our adult martial arts classes—a dynamic fusion of fitness, self-defense, and fun. Join us to boost your health, learn practical self-defense skills, and enjoy every step of your journey. Our adult program is designed for all fitness levels.",
      icon: (
        <svg
          className="h-6 w-6 text-red-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      image: "Images/team/ADULTKEMPO.jpg",
      imageAlt: "Adult Kempo Karate class",
      benefits: [
        "Complete fitness training",
        "Practical self-defense skills",
        "Stress reduction",
        "Community and camaraderie",
      ],
    },
    {
      id: 5,
      title: "Kickboxing",
      age: "14+",
      description:
        "Experience the transformative power of Kickboxing! Each class brings you closer to mastering techniques, building strength, and boosting confidence. Our high-energy kickboxing program combines martial arts techniques with cardio for an effective workout.",
      icon: (
        <svg
          className="h-6 w-6 text-red-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
          />
        </svg>
      ),
      image: "Images/team/88A5D580-B43D-4916-92F9-2B8037264B27-rotated-e1724873881945.jpg",
      imageAlt: "Kickboxing class",
      benefits: [
        "High-intensity cardio workout",
        "Full-body strength training",
        "Stress relief through physical activity",
        "Learn striking techniques",
      ],
    },
    {
      id: 6,
      title: "Jiu Jitsu",
      age: "14+",
      description:
        "Ready to enhance your life and well-being? Discover the physical, mental, and social benefits of Tetsu Shin Ryu Jiu-Jitsu and transform your fitness, resilience, and community connections. Our program focuses on ground techniques and effective self-defense.",
      icon: (
        <svg
          className="h-6 w-6 text-red-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      image: "Images/team/JIU JITSU.jpg",
      imageAlt: "Jiu Jitsu class",
      benefits: [
        "Learn effective ground techniques",
        "Develop problem-solving skills",
        "Improve flexibility and core strength",
        "Build mental resilience",
      ],
    },
  ]

  return (
    <section id="programs" className="relative py-24 text-white" ref={sectionRef}>
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="title-container mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            <span className="text-red-600">MARTIAL ARTS</span> PROGRAMS
          </h2>
        </div>

        {/* Tab navigation */}
        <div className="mb-12 overflow-x-auto">
          <div className="flex min-w-max">
            {services.map((service, index) => (
              <button
                key={service.id}
                className={`px-6 py-3 text-sm font-medium whitespace-nowrap relative ${
                  activeTab === index ? "text-red-500" : "text-gray-400 hover:text-gray-300"
                }`}
                onClick={() => setActiveTab(index)}
              >
                {service.title}
                <span className="ml-1 text-xs text-gray-500">{service.age}</span>
                {activeTab === index && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"></span>}
              </button>
            ))}
          </div>
        </div>

        {/* Active program content */}
        <div className="program-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Image side */}
            <div className="order-2 md:order-1">
              <div className="overflow-hidden rounded-lg shadow-md aspect-[4/3]">
                <img
                  src={services[activeTab].image || "/placeholder.svg"}
                  alt={services[activeTab].imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content side */}
            <div className="order-1 md:order-2 flex flex-col">
              <div className="flex items-center mb-4">
                {services[activeTab].icon}
                <h3 className="text-2xl font-semibold text-white ml-3">
                  {services[activeTab].title} <span className="text-sm text-gray-400">({services[activeTab].age})</span>
                </h3>
              </div>

              <p className="text-gray-300 mb-6">{services[activeTab].description}</p>

              <div className="mb-6">
                <h4 className="text-sm font-medium text-red-500 mb-3">PROGRAM BENEFITS</h4>
                <ul className="space-y-2">
                  {services[activeTab].benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#"
                onClick={navigateToPrograms}
                className="self-start mt-auto rounded-md bg-red-600 hover:bg-red-700 px-6 py-3 text-white text-sm font-medium transition-all duration-300 cursor-pointer"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
