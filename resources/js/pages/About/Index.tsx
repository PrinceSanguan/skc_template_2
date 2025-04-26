import Template from "./Template"
import AnimatedElement from "@/components/ui/animated-element"
import { Link } from "@inertiajs/react"
import { ChevronRight, Award, Users, Clock } from "lucide-react"

export default function AboutIndex() {
  return (
    <Template title="About Us">
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
                <span className="text-red-400 uppercase tracking-wider text-sm font-semibold">Our Legacy</span>
                <div className="h-px w-8 bg-red-500"></div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-red-200">
                About Seigler's Karate Center
              </h1>
              <div className="mx-auto h-1 w-20 bg-gradient-to-r from-red-600 to-red-400 rounded-full mt-2"></div>
            </AnimatedElement>

            <AnimatedElement type="fadeIn" delay={0.3}>
              <p className="text-xl text-gray-300 mt-8 mb-12 max-w-3xl mx-auto">
                Building discipline, confidence, and character through traditional martial arts training since 1985.
              </p>
            </AnimatedElement>
          </div>

          {/* Mission and Values */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <AnimatedElement type="slideInLeft" delay={0.4}>
              <div className="rounded-xl border border-red-900/30 bg-black/60 shadow-xl backdrop-blur-sm overflow-hidden hover:border-red-600/50 transition-all duration-300">
                <div className="aspect-w-16 aspect-h-9">
                  <div className="h-72 bg-gradient-to-br from-black to-red-900/30 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
                    <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-gradient-to-r from-red-600/10 to-yellow-500/5 blur-xl"></div>
                    <span className="text-lg text-gray-400 relative z-10">Dojo Image</span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-white">Our Mission</h2>
                  <p className="text-gray-300 mb-4">
                    At Seigler's Karate Center, our mission is to provide high-quality martial arts instruction that
                    develops the whole person - physically, mentally, and spiritually. We believe in creating a
                    supportive environment where students of all ages can grow, challenge themselves, and achieve their
                    personal best.
                  </p>
                  <p className="text-gray-300">
                    Through our traditional karate training, we instill the core values of respect, discipline,
                    perseverance, and integrity - values that extend beyond the dojo and into every aspect of life.
                  </p>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement type="slideInRight" delay={0.4}>
              <div className="rounded-xl border border-red-900/30 bg-black/60 shadow-xl backdrop-blur-sm overflow-hidden h-full hover:border-red-600/50 transition-all duration-300">
                <div className="aspect-w-16 aspect-h-9">
                  <div className="h-72 bg-gradient-to-br from-black to-red-900/30 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
                    <div className="absolute -top-8 -left-8 w-40 h-40 rounded-full bg-gradient-to-r from-red-600/10 to-yellow-500/5 blur-xl"></div>
                    <span className="text-lg text-gray-400 relative z-10">Training Image</span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-white">Our Philosophy</h2>
                  <p className="text-gray-300 mb-4">
                    We believe martial arts training is about more than just learning physical techniques - it's about
                    developing mental strength, emotional resilience, and personal growth. Our teaching philosophy
                    combines traditional martial arts wisdom with modern educational approaches.
                  </p>
                  <p className="text-gray-300">
                    Each student's journey is unique, and we are committed to providing personalized guidance and
                    support along the way. Whether your goal is self-defense, physical fitness, competition, or personal
                    development, we have programs designed to help you succeed.
                  </p>
                </div>
              </div>
            </AnimatedElement>
          </div>

          {/* History */}
          <AnimatedElement type="fadeIn" delay={0.5}>
            <div className="rounded-xl border border-red-900/30 bg-black/60 shadow-xl backdrop-blur-sm p-8 mb-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="flex flex-col items-center mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4">Our History</h2>
                  <div className="h-1 w-20 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
                </div>

                <div className="space-y-6">
                  <p className="text-gray-300">
                    Seigler's Karate Center was founded in 1985 by Grandmaster John Seigler, a dedicated martial artist
                    with a vision to create a dojo that honored traditional karate while making it accessible to
                    students of all ages and backgrounds.
                  </p>

                  <p className="text-gray-300">
                    Beginning with just a handful of students in a small rented space, the center quickly grew as word
                    spread about the quality of instruction and the positive impact it was having on students' lives.
                    Over the years, we've expanded to multiple locations throughout Georgia, while maintaining the same
                    commitment to excellence and personal attention that defined us from the beginning.
                  </p>

                  <p className="text-gray-300">
                    Today, Seigler's Karate Center is recognized as one of the premier martial arts schools in the
                    Southeast, with a reputation for producing skilled martial artists and compassionate leaders who
                    make a difference in their communities.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  <div className="h-32 rounded-lg border border-red-900/20 bg-black/40 flex items-center justify-center overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="text-sm text-gray-500 relative z-10">Historic Image 1</span>
                  </div>
                  <div className="h-32 rounded-lg border border-red-900/20 bg-black/40 flex items-center justify-center overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="text-sm text-gray-500 relative z-10">Historic Image 2</span>
                  </div>
                  <div className="h-32 rounded-lg border border-red-900/20 bg-black/40 flex items-center justify-center overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="text-sm text-gray-500 relative z-10">Historic Image 3</span>
                  </div>
                  <div className="h-32 rounded-lg border border-red-900/20 bg-black/40 flex items-center justify-center overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="text-sm text-gray-500 relative z-10">Historic Image 4</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>

          {/* What We Offer */}
          <AnimatedElement type="fadeIn" delay={0.6}>
            <div className="mb-16">
              <div className="flex flex-col items-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">What We Offer</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="rounded-xl border border-red-900/30 bg-black/60 shadow-xl backdrop-blur-sm overflow-hidden hover:border-red-600/50 transition-all duration-300 group">
                  <div className="h-48 bg-gradient-to-br from-black to-red-900/30 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
                    <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-gradient-to-r from-red-600/10 to-yellow-500/5 blur-xl"></div>
                    <span className="text-lg text-gray-400 relative z-10">Children's Programs</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Programs for All Ages</h3>
                    <p className="text-gray-300">
                      We offer specialized martial arts programs for children, teens, and adults, ensuring everyone
                      receives age-appropriate instruction that addresses their specific needs and goals.
                    </p>
                    <Link
                      href="/programs"
                      className="mt-4 inline-flex items-center text-red-400 hover:text-red-300 transition-colors duration-300 group-hover:translate-x-1"
                    >
                      View Programs
                      <ChevronRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                <div className="rounded-xl border border-red-900/30 bg-black/60 shadow-xl backdrop-blur-sm overflow-hidden hover:border-red-600/50 transition-all duration-300 group">
                  <div className="h-48 bg-gradient-to-br from-black to-red-900/30 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
                    <div className="absolute -top-8 -left-8 w-40 h-40 rounded-full bg-gradient-to-r from-red-600/10 to-yellow-500/5 blur-xl"></div>
                    <span className="text-lg text-gray-400 relative z-10">Expert Instruction</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Expert Instruction</h3>
                    <p className="text-gray-300">
                      Our qualified instructors are not only skilled martial artists but also experienced teachers who
                      know how to motivate, challenge, and support students at every level of their journey.
                    </p>
                    <Link
                      href="/about/team"
                      className="mt-4 inline-flex items-center text-red-400 hover:text-red-300 transition-colors duration-300 group-hover:translate-x-1"
                    >
                      Meet Our Team
                      <ChevronRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                <div className="rounded-xl border border-red-900/30 bg-black/60 shadow-xl backdrop-blur-sm overflow-hidden hover:border-red-600/50 transition-all duration-300 group">
                  <div className="h-48 bg-gradient-to-br from-black to-red-900/30 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
                    <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-gradient-to-r from-red-600/10 to-yellow-500/5 blur-xl"></div>
                    <span className="text-lg text-gray-400 relative z-10">Modern Facilities</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Modern Facilities</h3>
                    <p className="text-gray-300">
                      Our dojos are equipped with state-of-the-art training equipment and safety features, creating an
                      ideal environment for learning martial arts in a safe and comfortable setting.
                    </p>
                    <Link
                      href="/locations/evans"
                      className="mt-4 inline-flex items-center text-red-400 hover:text-red-300 transition-colors duration-300 group-hover:translate-x-1"
                    >
                      Visit Our Locations
                      <ChevronRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>

          {/* Stats Section */}
          <AnimatedElement type="fadeIn" delay={0.65}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="rounded-xl border border-red-900/30 bg-black/60 p-6 text-center shadow-xl backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 group">
                <div className="flex flex-col items-center">
                  <Clock
                    className="mb-3 text-red-500 group-hover:text-red-400 transition-colors duration-300"
                    size={28}
                  />
                  <span className="block text-4xl font-bold text-white mb-1 group-hover:text-red-400 transition-colors duration-300">
                    40+
                  </span>
                  <span className="text-sm text-gray-400">Years Experience</span>
                </div>
              </div>
              <div className="rounded-xl border border-red-900/30 bg-black/60 p-6 text-center shadow-xl backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 group">
                <div className="flex flex-col items-center">
                  <Users
                    className="mb-3 text-red-500 group-hover:text-red-400 transition-colors duration-300"
                    size={28}
                  />
                  <span className="block text-4xl font-bold text-white mb-1 group-hover:text-red-400 transition-colors duration-300">
                    1000+
                  </span>
                  <span className="text-sm text-gray-400">Happy Students</span>
                </div>
              </div>
              <div className="rounded-xl border border-red-900/30 bg-black/60 p-6 text-center shadow-xl backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 group">
                <div className="flex flex-col items-center">
                  <Award
                    className="mb-3 text-red-500 group-hover:text-red-400 transition-colors duration-300"
                    size={28}
                  />
                  <span className="block text-4xl font-bold text-white mb-1 group-hover:text-red-400 transition-colors duration-300">
                    6+
                  </span>
                  <span className="text-sm text-gray-400">Programs</span>
                </div>
              </div>
              <div className="rounded-xl border border-red-900/30 bg-black/60 p-6 text-center shadow-xl backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 group">
                <div className="flex flex-col items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mb-3 text-red-500 group-hover:text-red-400 transition-colors duration-300 w-7 h-7"
                  >
                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
                    <path d="M7 11v8" />
                    <path d="M17 11v8" />
                    <path d="M14 10V5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" />
                    <path d="M10 10V3a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v7" />
                    <path d="M18 10V5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" />
                  </svg>
                  <span className="block text-4xl font-bold text-white mb-1 group-hover:text-red-400 transition-colors duration-300">
                    2+
                  </span>
                  <span className="text-sm text-gray-400">Locations</span>
                </div>
              </div>
            </div>
          </AnimatedElement>

          {/* CTA */}
          <AnimatedElement type="fadeIn" delay={0.7}>
            <div className="relative rounded-xl overflow-hidden">
              {/* Background with overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-900 to-red-700"></div>
              <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-10 mix-blend-overlay"></div>

              {/* Decorative elements */}
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-red-600/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-red-600/20 rounded-full blur-3xl"></div>

              {/* Content */}
              <div className="relative z-10 p-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Begin Your Martial Arts Journey Today
                </h2>
                <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
                  Experience the transformative power of traditional martial arts training at Seigler's Karate Center.
                  Contact us to schedule your free introductory class.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-red-700 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-colors shadow-lg hover:shadow-xl flex items-center justify-center"
                  >
                    Contact Us <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="/locations/evans"
                    className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-md transition-colors flex items-center justify-center"
                  >
                    Find a Location <ChevronRight className="ml-2 h-4 w-4" />
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
