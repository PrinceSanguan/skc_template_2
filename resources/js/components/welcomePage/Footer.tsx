"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, ChevronRight } from "lucide-react"

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)
  const dividerRef = useRef<HTMLDivElement>(null)
  const locationCardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const footer = footerRef.current
    const logo = logoRef.current
    const particles = particlesRef.current
    const divider = dividerRef.current
    const locationCards = locationCardsRef.current

    if (divider) {
      // Animate the divider elements
      gsap.fromTo(
        divider.querySelectorAll(".divider-element"),
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: divider,
            start: "top 90%",
          },
        },
      )

      // Animate the center emblem
      gsap.fromTo(
        divider.querySelector(".divider-emblem"),
        { opacity: 0, scale: 0.5, rotate: -30 },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 1,
          delay: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: divider,
            start: "top 90%",
          },
        },
      )
    }

    if (footer && logo) {
      // Animate logo with more dynamic effect
      gsap.fromTo(
        logo,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footer,
            start: "top 90%",
          },
        },
      )

      // Stagger animate links with better timing
      gsap.fromTo(
        footer.querySelectorAll(".footer-links li"),
        { opacity: 0, x: -10 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.08,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footer,
            start: "top 90%",
          },
        },
      )

      // Animate social icons with bounce effect
      gsap.fromTo(
        footer.querySelectorAll(".social-icon"),
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: footer,
            start: "top 90%",
          },
        },
      )

      // Animate bottom bar
      gsap.fromTo(
        footer.querySelector(".bottom-bar"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          delay: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footer,
            start: "top 90%",
          },
        },
      )

      // Subtle pulse effect for the logo
      gsap.to(logo.querySelector(".logo-text"), {
        filter: "drop-shadow(0 0 8px rgba(220, 38, 38, 0.8))",
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
      })
    }

    // Create fire particles
    if (particles) {
      const colors = ["#ff4b4b", "#ff8c42", "#ffdc5e", "#ff6b6b", "#ff3333"]
      const particleInterval = setInterval(() => {
        const particle = document.createElement("div")
        const size = Math.random() * 6 + 2
        const color = colors[Math.floor(Math.random() * colors.length)]

        particle.style.position = "absolute"
        particle.style.width = `${size}px`
        particle.style.height = `${size}px`
        particle.style.borderRadius = "50%"
        particle.style.backgroundColor = color
        particle.style.opacity = "0.4"
        particle.style.left = `${Math.random() * 100}%`
        particle.style.bottom = "0"

        particles.appendChild(particle)

        gsap.to(particle, {
          x: Math.random() * 50 - 25,
          y: -(Math.random() * 100 + 50),
          opacity: 0,
          duration: 4 + Math.random() * 3,
          ease: "power1.out",
          onComplete: () => {
            if (particles.contains(particle)) {
              particles.removeChild(particle)
            }
          },
        })
      }, 200)

      return () => {
        if (particleInterval) {
          clearInterval(particleInterval)
        }
      }
    }

    // Animate location cards
    if (locationCards) {
      gsap.fromTo(
        locationCards.querySelectorAll(".location-card"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: locationCards,
            start: "top 90%",
          },
        }
      )
    }
  }, [])

  const navigation = {
    main: [
      { name: "Home", href: "#" },
      { name: "About", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Communities", href: "#communities" },
      { name: "Blog", href: "#blog" },
      { name: "Contact", href: "#contact" },
    ],
    programs: [
      { name: "Kids Karate", href: "#" },
      { name: "Adult Martial Arts", href: "#" },
      { name: "Kickboxing", href: "#" },
      { name: "Self Defense", href: "#" },
      { name: "Private Lessons", href: "#" },
    ],
    socialMedia: [
      { name: "Facebook", href: "#", icon: Facebook },
      { name: "Instagram", href: "#", icon: Instagram },
      { name: "Twitter", href: "#", icon: Twitter },
      { name: "YouTube", href: "#", icon: Youtube },
    ],
  }

  const currentYear = new Date().getFullYear()

  return (
    <>
      {/* Footer Divider */}
      <div ref={dividerRef} className="relative py-8 overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Decorative divider with martial arts emblem */}
          <div className="flex items-center justify-center">
            <div className="divider-element h-0.5 w-1/3 bg-gradient-to-r from-transparent via-red-600 to-red-900/50 transform origin-left"></div>

            <div className="divider-emblem relative mx-4 w-16 h-16 flex items-center justify-center">
              {/* Circular background */}
              <div className="absolute inset-0 rounded-full bg-black border-2 border-red-600/50 shadow-[0_0_15px_rgba(220,38,38,0.3)]"></div>

              {/* Martial arts fist symbol */}
              <div className="relative z-10 text-red-500 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8"
                >
                  {/* Fist icon */}
                  <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
                  <path d="M7 11v8" />
                  <path d="M17 11v8" />
                  <path d="M14 10V5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" />
                  <path d="M10 10V3a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v7" />
                  <path d="M18 10V5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" />
                </svg>
              </div>
            </div>

            <div className="divider-element h-0.5 w-1/3 bg-gradient-to-l from-transparent via-red-600 to-red-900/50 transform origin-right"></div>
          </div>

          {/* Footer label */}
          <div className="text-center mt-4">
            <span className="inline-block px-4 py-1 bg-red-900/30 border border-red-600/30 rounded-full text-xs uppercase tracking-wider text-red-400 font-semibold">
              Seigler's Karate Center
            </span>
          </div>
        </div>
      </div>

      {/* Location Cards */}
      <div ref={locationCardsRef} className="py-12 bg-black/90">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Evans Location */}
            <div className="location-card p-8 border border-red-900/50 rounded-lg bg-black/70">
              <h3 className="text-2xl font-bold text-white mb-6">Evans, GA</h3>
              <div className="space-y-5">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    4150 Washington Road, Suite 4, Evans, GA, 30809
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-red-600 flex-shrink-0" />
                  <a href="tel:+17068555683" className="text-gray-300 hover:text-red-400 transition-colors">
                    (706) 855-5683
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-red-600 flex-shrink-0" />
                  <a href="mailto:skc@goskc.com" className="text-gray-300 hover:text-red-400 transition-colors">
                    skc@goskc.com
                  </a>
                </div>
                <div className="flex space-x-4 pt-2">
                  <a href="#" className="text-gray-400 hover:text-red-600 transition-all duration-300">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-red-600 transition-all duration-300">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-red-600 transition-all duration-300">
                    <Youtube className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-red-600 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                      <path d="M15.88 15.29L16.94 12h-4.97v-2.01h7.04c0.14.63 0.25 1.3 0.25 2.01 0 4.56-3.05 7.79-7.7 7.79-4.4 0-8-3.6-8-8s3.6-8 8-8c2.17 0 4.13 0.88 5.56 2.3l-1.89 1.89c-0.93-0.89-2.1-1.45-3.67-1.45-3.05 0-5.56 2.55-5.56 5.61s2.51 5.61 5.56 5.61c2.23 0 4.13-1.33 4.42-3.16z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Grovetown Location */}
            <div className="location-card p-8 border border-red-900/50 rounded-lg bg-black/70">
              <h3 className="text-2xl font-bold text-white mb-6">Grovetown, GA</h3>
              <div className="space-y-5">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    271 Meridian Drive Grovetown, GA 30813
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-red-600 flex-shrink-0" />
                  <a href="tel:+17068555683" className="text-gray-300 hover:text-red-400 transition-colors">
                    (706) 855-5683
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-red-600 flex-shrink-0" />
                  <a href="mailto:skc@goskc.com" className="text-gray-300 hover:text-red-400 transition-colors">
                    skc@goskc.com
                  </a>
                </div>
                <div className="flex space-x-4 pt-2">
                  <a href="#" className="text-gray-400 hover:text-red-600 transition-all duration-300">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-red-600 transition-all duration-300">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-red-600 transition-all duration-300">
                    <Youtube className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-red-600 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                      <path d="M15.88 15.29L16.94 12h-4.97v-2.01h7.04c0.14.63 0.25 1.3 0.25 2.01 0 4.56-3.05 7.79-7.7 7.79-4.4 0-8-3.6-8-8s3.6-8 8-8c2.17 0 4.13 0.88 5.56 2.3l-1.89 1.89c-0.93-0.89-2.1-1.45-3.67-1.45-3.05 0-5.56 2.55-5.56 5.61s2.51 5.61 5.56 5.61c2.23 0 4.13-1.33 4.42-3.16z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer ref={footerRef} className="relative py-16 bg-black border-t border-red-900/30">
        {/* Particle effect container */}
        <div ref={particlesRef} className="absolute inset-0 pointer-events-none z-10"></div>

        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-red-600/10 rounded-full blur-3xl"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>
        </div>

        {/* Martial arts silhouettes */}
        <div
          className="absolute bottom-0 right-0 w-64 h-64 bg-contain bg-no-repeat bg-right-bottom opacity-10 z-0"
          style={{ backgroundImage: "url('/karate-silhouette-1.png')" }}
        ></div>
        <div
          className="absolute top-20 left-10 w-48 h-48 bg-contain bg-no-repeat opacity-10 z-0"
          style={{ backgroundImage: "url('/karate-silhouette-2.png')" }}
        ></div>

        {/* Japanese pattern overlay */}
        <div className="absolute inset-0 opacity-5 mix-blend-overlay z-0"></div>

        {/* Footer content */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Logo & about */}
            <div className="md:col-span-5">
              <div ref={logoRef} className="mb-6 inline-block">
                <h1 className="logo-text text-3xl font-bold text-white">
                  <span className="text-red-600">SEIGLER'S</span> KARATE
                  <span className="text-red-600"> CENTER</span>
                </h1>
              </div>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Empowering students with the discipline, strength, and wisdom of martial arts traditions since 1982.
                Join our community and discover your potential through our award-winning programs.
              </p>
              <div className="flex space-x-5">
                <a href="#" className="text-gray-400 hover:text-red-600 transition-all duration-300">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-all duration-300">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-all duration-300">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-all duration-300">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-2">
              <h2 className="text-lg font-semibold text-white mb-5 relative inline-block">
                Quick Links
                <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-red-600 rounded-full"></span>
              </h2>
              <ul className="footer-links space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name} className="group">
                    <a
                      href={item.href}
                      className="text-gray-300 hover:text-red-600 transition-colors duration-300 flex items-center"
                    >
                      <ChevronRight className="h-4 w-4 mr-2 text-red-600 group-hover:translate-x-1 transition-transform duration-300" />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div className="md:col-span-2">
              <h2 className="text-lg font-semibold text-white mb-5 relative inline-block">
                Programs
                <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-red-600 rounded-full"></span>
              </h2>
              <ul className="footer-links space-y-3">
                {navigation.programs.map((item) => (
                  <li key={item.name} className="group">
                    <a
                      href={item.href}
                      className="text-gray-300 hover:text-red-600 transition-colors duration-300 flex items-center"
                    >
                      <ChevronRight className="h-4 w-4 mr-2 text-red-600 group-hover:translate-x-1 transition-transform duration-300" />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div className="md:col-span-3">
              <h2 className="text-lg font-semibold text-white mb-5 relative inline-block">
                Contact Us
                <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-red-600 rounded-full"></span>
              </h2>
              <ul className="footer-links space-y-4">
                <li className="flex items-start group">
                  <MapPin className="h-5 w-5 mr-3 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    123 Dojo Street, Augusta
                    <br />
                    Georgia, 30909
                  </span>
                </li>
                <li className="flex items-center group">
                  <Phone className="h-5 w-5 mr-3 text-red-600 flex-shrink-0" />
                  <a
                    href="tel:+15551234567"
                    className="text-gray-300 hover:text-gray-200 transition-colors duration-300"
                  >
                    (555) 123-4567
                  </a>
                </li>
                <li className="flex items-center group">
                  <Mail className="h-5 w-5 mr-3 text-red-600 flex-shrink-0" />
                  <a
                    href="mailto:info@seiglerskarate.com"
                    className="text-gray-300 hover:text-gray-200 transition-colors duration-300"
                  >
                    info@seiglerskarate.com
                  </a>
                </li>
              </ul>

              {/* Newsletter signup */}
              <div className="mt-6 pt-6 border-t border-red-900/20">
                <h3 className="text-sm font-semibold text-white mb-3">JOIN OUR NEWSLETTER</h3>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-grow px-4 py-2 bg-black/80 border border-red-900/30 rounded-l-md text-white placeholder-gray-400 focus:outline-none focus:border-red-600"
                  />
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-r-md transition-colors duration-300">
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="bottom-bar mt-16 pt-8 border-t border-red-900/20">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">© {currentYear} Seigler's Karate Center. All rights reserved.</p>
              <div className="mt-4 md:mt-0 flex space-x-8">
                <a href="#" className="text-gray-400 hover:text-red-600 text-sm transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-red-600 text-sm transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-red-600 text-sm transition-colors duration-300">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
