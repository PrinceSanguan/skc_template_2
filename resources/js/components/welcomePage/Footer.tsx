"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Facebook, Instagram, Twitter, Youtube, ArrowUp } from "lucide-react"

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null)
  const topButtonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Back to top button animation
    if (topButtonRef.current) {
      // Show/hide based on scroll position
      ScrollTrigger.create({
        start: "top -100",
        end: 99999,
        toggleClass: { className: "opacity-100", targets: topButtonRef.current },
        onUpdate: (self) => {
          topButtonRef.current!.style.transform = self.direction === 1 ? "translateY(0)" : "translateY(100px)"
        },
      })
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {/* Back to top button */}
      <div
        ref={topButtonRef}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center cursor-pointer shadow-lg z-50 opacity-0 transition-all duration-300 hover:bg-red-700"
      >
        <ArrowUp className="text-white" size={16} />
      </div>

      <footer
        ref={footerRef}
        className="relative text-white pt-10 pb-6"
        style={{
          background: "linear-gradient(to bottom, #0a0a0a, #120404)",
          borderTop: "1px solid rgba(220, 38, 38, 0.2)",
        }}
      >
        {/* Subtle background pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23dc2626' fillOpacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>

        <div className="container mx-auto px-6">
          {/* Logo and tagline */}
          <div className="mb-10 text-center">
            <h2 className="text-xl font-bold">
              <span className="text-red-600">SEIGLER'S</span> KARATE CENTER
            </h2>
            <p className="text-gray-400 text-xs mt-1 max-w-md mx-auto">
              Empowering students through martial arts since 1982
            </p>
          </div>

          {/* Main content in 4 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Column 1: Locations */}
            <div>
              <h3 className="text-xs uppercase tracking-wider mb-3 text-red-600">Evans</h3>
              <p className="text-gray-400 text-xs mb-1">4150 Washington Road, Suite 4</p>
              <p className="text-gray-400 text-xs mb-1">Evans, GA 30809</p>
              <p className="text-gray-400 text-xs">(706) 855-5683</p>
            </div>

            {/* Column 2: Locations */}
            <div>
              <h3 className="text-xs uppercase tracking-wider mb-3 text-red-600">Grovetown</h3>
              <p className="text-gray-400 text-xs mb-1">271 Meridian Drive</p>
              <p className="text-gray-400 text-xs mb-1">Grovetown, GA 30813</p>
              <p className="text-gray-400 text-xs">(706) 855-5683</p>
            </div>

            {/* Column 3: Navigation */}
            <div>
              <h3 className="text-xs uppercase tracking-wider mb-3 text-red-600">Navigation</h3>
              <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                <li>
                  <a href="#" className="text-gray-400 text-xs hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 text-xs hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#programs" className="text-gray-400 text-xs hover:text-white transition-colors">
                    Programs
                  </a>
                </li>
                <li>
                  <a href="#blog" className="text-gray-400 text-xs hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 text-xs hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#locations" className="text-gray-400 text-xs hover:text-white transition-colors">
                    Locations
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div>
              <h3 className="text-xs uppercase tracking-wider mb-3 text-red-600">Newsletter</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-2 py-1 bg-transparent border-b border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 text-xs"
                />
                <button className="ml-2 text-red-600 hover:text-red-500 transition-colors">→</button>
              </div>
            </div>
          </div>

          {/* Social and copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-4 border-t border-gray-900">
            <div className="flex space-x-4 mb-3 md:mb-0">
              <a href="#" className="text-gray-500 hover:text-red-600 transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="text-gray-500 hover:text-red-600 transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="text-gray-500 hover:text-red-600 transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="text-gray-500 hover:text-red-600 transition-colors">
                <Youtube size={16} />
              </a>
            </div>

            <div className="text-gray-500 text-xs">© {new Date().getFullYear()} Seigler's Karate Center</div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
