import Template from "./Template"
import AnimatedElement from "@/components/ui/animated-element"
import { Link } from "@inertiajs/react"
import { ChevronRight, Award, Users, Clock, ArrowRight, Shield, Target, BookOpen } from "lucide-react"

export default function AboutIndex() {
  return (
    <Template title="About Us">
      <div className="relative">
        {/* Enhanced subtle background with thin red accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800"></div>

        {/* Subtle background pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23dc2626' fillOpacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>

        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/0 to-black/40 pointer-events-none"></div>

        {/* Main content with completely new layout */}
        <div className="container mx-auto px-4 py-8">
          {/* Hero section - horizontal layout */}
          <div className="flex flex-col md:flex-row gap-6 mb-8 items-center">
            <div className="md:w-1/2">
              <AnimatedElement type="fadeIn" delay={0.2}>
                <div className="inline-flex items-center space-x-2 mb-2">
                  <div className="h-px w-5 bg-red-500"></div>
                  <span className="text-red-400 uppercase tracking-wider text-xs font-semibold">Est. 1985</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-red-200">
                  About Seigler's Karate
                </h1>
                <p className="text-sm text-gray-300 mb-4 max-w-lg">
                  Building discipline, confidence, and character through traditional martial arts training. Our dojo is
                  dedicated to developing the whole person - physically, mentally, and spiritually.
                </p>
                <div className="flex space-x-3">
                  <Link
                    href="/programs"
                    className="bg-red-600 hover:bg-red-700 text-white text-xs py-2 px-4 rounded-md transition-colors flex items-center"
                  >
                    Our Programs <ChevronRight className="ml-1 h-3 w-3" />
                  </Link>
                  <Link
                    href="/contact"
                    className="border border-red-600/30 hover:border-red-600/60 text-white text-xs py-2 px-4 rounded-md transition-colors flex items-center"
                  >
                    Contact Us
                  </Link>
                </div>
              </AnimatedElement>
            </div>

            <div className="md:w-1/2">
              <AnimatedElement type="fadeIn" delay={0.3}>
                <div className="h-48 rounded-lg border border-red-900/20 bg-gradient-to-br from-black to-red-900/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
                  <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-gradient-to-r from-red-600/10 to-yellow-500/5 blur-xl"></div>
                  <span className="text-sm text-gray-400 relative z-10">Dojo Image</span>
                </div>
              </AnimatedElement>
            </div>
          </div>

          {/* Stats bar - horizontal compact layout */}
          <AnimatedElement type="fadeIn" delay={0.4}>
            <div className="grid grid-cols-4 gap-3 mb-8">
              <div className="rounded-lg border border-red-900/20 bg-black/40 p-3 text-center">
                <div className="flex flex-col items-center">
                  <Clock className="mb-1 text-red-500" size={18} />
                  <span className="block text-xl font-bold text-white">40+</span>
                  <span className="text-xs text-gray-400">Years</span>
                </div>
              </div>
              <div className="rounded-lg border border-red-900/20 bg-black/40 p-3 text-center">
                <div className="flex flex-col items-center">
                  <Users className="mb-1 text-red-500" size={18} />
                  <span className="block text-xl font-bold text-white">1000+</span>
                  <span className="text-xs text-gray-400">Students</span>
                </div>
              </div>
              <div className="rounded-lg border border-red-900/20 bg-black/40 p-3 text-center">
                <div className="flex flex-col items-center">
                  <Award className="mb-1 text-red-500" size={18} />
                  <span className="block text-xl font-bold text-white">6+</span>
                  <span className="text-xs text-gray-400">Programs</span>
                </div>
              </div>
              <div className="rounded-lg border border-red-900/20 bg-black/40 p-3 text-center">
                <div className="flex flex-col items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mb-1 text-red-500 w-[18px] h-[18px]"
                  >
                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
                    <path d="M7 11v8" />
                    <path d="M17 11v8" />
                    <path d="M14 10V5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" />
                    <path d="M10 10V3a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v7" />
                    <path d="M18 10V5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" />
                  </svg>
                  <span className="block text-xl font-bold text-white">2+</span>
                  <span className="text-xs text-gray-400">Locations</span>
                </div>
              </div>
            </div>
          </AnimatedElement>

          {/* Core values - 3 column cards */}
          <AnimatedElement type="fadeIn" delay={0.5}>
            <div className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <Shield className="text-red-500 mr-2" size={18} />
                Our Core Values
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-lg border border-red-900/20 bg-black/40 p-4 hover:border-red-600/40 transition-all duration-300">
                  <h3 className="text-base font-semibold text-white mb-2">Discipline</h3>
                  <p className="text-xs text-gray-300">
                    We foster self-discipline through consistent training, helping students develop focus, patience, and
                    the ability to overcome challenges both in martial arts and in life.
                  </p>
                </div>

                <div className="rounded-lg border border-red-900/20 bg-black/40 p-4 hover:border-red-600/40 transition-all duration-300">
                  <h3 className="text-base font-semibold text-white mb-2">Respect</h3>
                  <p className="text-xs text-gray-300">
                    Respect is fundamental to our practice - respect for instructors, fellow students, and oneself. We
                    cultivate an environment of mutual respect and courtesy.
                  </p>
                </div>

                <div className="rounded-lg border border-red-900/20 bg-black/40 p-4 hover:border-red-600/40 transition-all duration-300">
                  <h3 className="text-base font-semibold text-white mb-2">Perseverance</h3>
                  <p className="text-xs text-gray-300">
                    We teach students to persevere through challenges, building resilience and determination that
                    extends beyond the dojo into all aspects of life.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedElement>

          {/* History and Philosophy - side by side layout */}
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <AnimatedElement type="slideInLeft" delay={0.6} className="md:w-1/2">
              <div className="rounded-lg border border-red-900/20 bg-black/40 p-4 h-full">
                <h2 className="text-xl font-bold text-white mb-3 flex items-center">
                  <BookOpen className="text-red-500 mr-2" size={18} />
                  Our History
                </h2>

                <p className="text-xs text-gray-300 mb-3">
                  Seigler's Karate Center was founded in 1985 by Grandmaster John Seigler, a dedicated martial artist
                  with a vision to create a dojo that honored traditional karate while making it accessible to students
                  of all ages and backgrounds.
                </p>

                <p className="text-xs text-gray-300 mb-3">
                  Beginning with just a handful of students in a small rented space, the center quickly grew as word
                  spread about the quality of instruction and the positive impact it was having on students' lives.
                </p>

                <p className="text-xs text-gray-300">
                  Today, Seigler's Karate Center is recognized as one of the premier martial arts schools in the
                  Southeast, with a reputation for producing skilled martial artists and compassionate leaders.
                </p>

                <div className="grid grid-cols-2 gap-2 mt-3">
                  <div className="h-16 rounded border border-red-900/20 bg-black/20 flex items-center justify-center">
                    <span className="text-xs text-gray-500">Historic Image 1</span>
                  </div>
                  <div className="h-16 rounded border border-red-900/20 bg-black/20 flex items-center justify-center">
                    <span className="text-xs text-gray-500">Historic Image 2</span>
                  </div>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement type="slideInRight" delay={0.6} className="md:w-1/2">
              <div className="rounded-lg border border-red-900/20 bg-black/40 p-4 h-full">
                <h2 className="text-xl font-bold text-white mb-3 flex items-center">
                  <Target className="text-red-500 mr-2" size={18} />
                  Our Philosophy
                </h2>

                <p className="text-xs text-gray-300 mb-3">
                  We believe martial arts training is about more than just learning physical techniques - it's about
                  developing mental strength, emotional resilience, and personal growth. Our teaching philosophy
                  combines traditional martial arts wisdom with modern educational approaches.
                </p>

                <p className="text-xs text-gray-300 mb-3">
                  Each student's journey is unique, and we are committed to providing personalized guidance and support
                  along the way. Whether your goal is self-defense, physical fitness, competition, or personal
                  development, we have programs designed to help you succeed.
                </p>

                <div className="flex flex-col space-y-2 mt-3">
                  <div className="flex items-center text-xs text-gray-300">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
                    <span>Balanced development of mind, body, and spirit</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-300">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
                    <span>Traditional values with modern teaching methods</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-300">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
                    <span>Personalized instruction for individual growth</span>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>

          {/* Programs - horizontal scrolling cards */}
          <AnimatedElement type="fadeIn" delay={0.7}>
            <div className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4">What We Offer</h2>

              <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
                <div className="flex-shrink-0 w-64 rounded-lg border border-red-900/20 bg-black/40 overflow-hidden">
                  <div className="h-24 bg-gradient-to-br from-black to-red-900/30 flex items-center justify-center">
                    <span className="text-xs text-gray-400">Children's Programs</span>
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-semibold text-white mb-1">Programs for All Ages</h3>
                    <p className="text-xs text-gray-300 mb-2">
                      Specialized martial arts programs for children, teens, and adults.
                    </p>
                    <Link href="/programs" className="text-xs text-red-400 hover:text-red-300 flex items-center">
                      Learn More <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>

                <div className="flex-shrink-0 w-64 rounded-lg border border-red-900/20 bg-black/40 overflow-hidden">
                  <div className="h-24 bg-gradient-to-br from-black to-red-900/30 flex items-center justify-center">
                    <span className="text-xs text-gray-400">Expert Instruction</span>
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-semibold text-white mb-1">Expert Instruction</h3>
                    <p className="text-xs text-gray-300 mb-2">
                      Qualified instructors who are both skilled martial artists and experienced teachers.
                    </p>
                    <Link href="/about/team" className="text-xs text-red-400 hover:text-red-300 flex items-center">
                      Meet Our Team <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>

                <div className="flex-shrink-0 w-64 rounded-lg border border-red-900/20 bg-black/40 overflow-hidden">
                  <div className="h-24 bg-gradient-to-br from-black to-red-900/30 flex items-center justify-center">
                    <span className="text-xs text-gray-400">Modern Facilities</span>
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-semibold text-white mb-1">Modern Facilities</h3>
                    <p className="text-xs text-gray-300 mb-2">
                      State-of-the-art training equipment and safety features in all our dojos.
                    </p>
                    <Link href="/locations" className="text-xs text-red-400 hover:text-red-300 flex items-center">
                      Visit Our Locations <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>

                <div className="flex-shrink-0 w-64 rounded-lg border border-red-900/20 bg-black/40 overflow-hidden">
                  <div className="h-24 bg-gradient-to-br from-black to-red-900/30 flex items-center justify-center">
                    <span className="text-xs text-gray-400">Special Events</span>
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-semibold text-white mb-1">Special Events</h3>
                    <p className="text-xs text-gray-300 mb-2">
                      Tournaments, seminars, and community events throughout the year.
                    </p>
                    <Link href="/events" className="text-xs text-red-400 hover:text-red-300 flex items-center">
                      View Calendar <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>

          {/* CTA - compact banner */}
          <AnimatedElement type="fadeIn" delay={0.8}>
            <div className="relative rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-red-900 to-red-700"></div>
              <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-10 mix-blend-overlay"></div>

              <div className="relative z-10 p-4 flex flex-col md:flex-row items-center justify-between">
                <div className="mb-3 md:mb-0">
                  <h2 className="text-lg font-bold text-white mb-1">Begin Your Martial Arts Journey</h2>
                  <p className="text-xs text-white/80">Schedule your free introductory class today.</p>
                </div>

                <div className="flex space-x-3">
                  <Link
                    href="/contact"
                    className="bg-white text-red-700 hover:bg-gray-100 text-xs font-medium py-2 px-4 rounded transition-colors"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/locations"
                    className="bg-transparent border border-white text-white hover:bg-white/10 text-xs font-medium py-2 px-4 rounded transition-colors"
                  >
                    Find a Location
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </Template>
  )
}
