import { Link } from "@inertiajs/react"
import AnimatedElement from "@/components/ui/animated-element"
import Template from "./Template"
import { ArrowLeft, Award, Calendar, Clock, MapPin, Phone, Mail, ChevronRight } from "lucide-react"

interface TeamMemberData {
  name: string
  position: string
  imageUrl: string
  slug: string
  certifications?: string[]
  longBio?: string
}

interface TeamMemberProps {
  teamMember: TeamMemberData
}

export default function TeamMember({ teamMember }: TeamMemberProps) {
  return (
    <Template title={teamMember.name}>
      {/* Thin red accent line at the top */}
      <div className="h-1 w-full bg-gradient-to-r from-red-900 via-red-600 to-red-900"></div>

      {/* Navigation breadcrumb */}
      <div className="bg-black/60 border-b border-red-900/20">
        <div className="container mx-auto px-4 py-3">
          <Link
            href="/about/team"
            className="inline-flex items-center text-gray-300 hover:text-red-400 transition-colors text-sm group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Team
          </Link>
        </div>
      </div>

      {/* Main content with new layout */}
      <div className="relative bg-black py-8">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Red blur elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600 rounded-full filter blur-[100px] opacity-10 animate-pulse"></div>
          <div
            className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-red-700 rounded-full filter blur-[120px] opacity-10 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>

          {/* Japanese pattern overlay */}
          <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay z-0"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left sidebar with image and info */}
            <div className="lg:col-span-1">
              <AnimatedElement type="fadeIn" delay={0.2}>
                <div className="sticky top-4 space-y-6">
                  {/* Profile image with consistent height */}
                  <div className="overflow-hidden rounded-lg relative group">
                    <div className="absolute -inset-1 bg-gradient-to-tr from-red-600/30 to-red-900/30 rounded-lg blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 overflow-hidden rounded-lg">
                      <img
                        src={teamMember.imageUrl || "/placeholder.svg"}
                        alt={teamMember.name}
                        className="w-full h-[400px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.style.display = "none"
                          const parent = target.parentElement
                          if (parent) {
                            parent.classList.add(
                              "bg-gradient-to-br",
                              "from-gray-800",
                              "to-gray-900",
                              "flex",
                              "items-center",
                              "justify-center",
                              "h-[400px]",
                            )
                            const span = document.createElement("span")
                            span.className = "text-6xl font-bold text-gray-500"
                            span.textContent = teamMember.name.charAt(0)
                            parent.appendChild(span)
                          }
                        }}
                      />
                    </div>
                  </div>

                  {/* Profile info card */}
                  <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-red-900/20 p-5 shadow-lg">
                    <h1 className="text-2xl font-bold text-white mb-1">{teamMember.name}</h1>
                    <div className="h-0.5 w-12 bg-gradient-to-r from-red-700 to-red-500 mb-2"></div>
                    <p className="text-red-500 font-medium mb-4">{teamMember.position}</p>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-center text-gray-300">
                        <Award className="h-4 w-4 text-red-500 mr-2" />
                        <span>8th Degree Black Belt</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Calendar className="h-4 w-4 text-red-500 mr-2" />
                        <span>45+ Years Experience</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Clock className="h-4 w-4 text-red-500 mr-2" />
                        <span>Classes: Mon, Wed, Fri</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <MapPin className="h-4 w-4 text-red-500 mr-2" />
                        <span>Evans Location</span>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-red-900/20">
                      <div className="flex items-center text-gray-300 mb-2">
                        <Phone className="h-4 w-4 text-red-500 mr-2" />
                        <span>(706) 855-5685</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Mail className="h-4 w-4 text-red-500 mr-2" />
                        <span>skc@goskc.com</span>
                      </div>
                    </div>
                  </div>

                  {/* Certifications card */}
                  {teamMember.certifications && teamMember.certifications.length > 0 && (
                    <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-red-900/20 p-5 shadow-lg">
                      <h2 className="text-lg font-bold text-white mb-3 flex items-center">
                        <Award className="h-4 w-4 text-red-500 mr-2" />
                        Certifications
                      </h2>
                      <div className="h-0.5 w-12 bg-gradient-to-r from-red-700 to-red-500 mb-4"></div>

                      <ul className="space-y-2">
                        {teamMember.certifications.map((cert, index) => (
                          <li key={index} className="flex items-start">
                            <div className="h-1.5 w-1.5 rounded-full bg-red-500 mt-1.5 mr-2"></div>
                            <span className="text-gray-300 text-sm">{cert}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Schedule button */}
                  <button className="w-full bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white font-medium py-3 px-4 rounded-md shadow-md transition-all duration-300 flex items-center justify-center group">
                    Schedule a Class
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </AnimatedElement>
            </div>

            {/* Right content area with biography */}
            <div className="lg:col-span-2">
              <AnimatedElement type="fadeIn" delay={0.3}>
                {/* Biography section */}
                <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-red-900/20 p-6 shadow-lg mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">Biography</h2>
                  <div className="h-0.5 w-12 bg-gradient-to-r from-red-700 to-red-500 mb-6"></div>

                  <div className="space-y-6 text-gray-300">
                    {teamMember.longBio ? (
                      teamMember.longBio.split("\n\n").map((paragraph, index) => (
                        <p key={index} className="leading-relaxed">
                          {paragraph}
                        </p>
                      ))
                    ) : (
                      <div className="bg-black/40 p-6 rounded-lg border border-red-900/10 text-center">
                        <p className="text-gray-400 italic">Biography coming soon.</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Specialties section */}
                <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-red-900/20 p-6 shadow-lg mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">Specialties</h2>
                  <div className="h-0.5 w-12 bg-gradient-to-r from-red-700 to-red-500 mb-6"></div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Traditional Karate",
                      "Self Defense",
                      "Leadership",
                      "Tournament Competition",
                      "Character Development",
                      "Weapons Training",
                    ].map((specialty, index) => (
                      <div
                        key={index}
                        className="bg-black/40 rounded-lg border border-red-900/10 p-4 flex items-center"
                      >
                        <div className="h-2 w-2 rounded-full bg-red-500 mr-3"></div>
                        <span className="text-gray-300">{specialty}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonials section */}
                <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-red-900/20 p-6 shadow-lg mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">Student Testimonials</h2>
                  <div className="h-0.5 w-12 bg-gradient-to-r from-red-700 to-red-500 mb-6"></div>

                  <div className="space-y-4">
                    {[
                      {
                        quote:
                          "Sensei has been an incredible mentor for my child. The discipline and confidence they've gained is remarkable.",
                        author: "Jennifer W., Parent",
                      },
                      {
                        quote:
                          "I've trained with many instructors over the years, but none compare to the depth of knowledge and teaching ability here.",
                        author: "Michael T., Adult Student",
                      },
                    ].map((testimonial, index) => (
                      <div key={index} className="bg-black/40 rounded-lg border border-red-900/10 p-4">
                        <p className="text-gray-300 italic mb-2">"{testimonial.quote}"</p>
                        <p className="text-sm text-red-400 text-right">— {testimonial.author}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA section */}
                <div className="bg-gradient-to-r from-red-900 to-black rounded-lg overflow-hidden shadow-lg">
                  <div className="p-6 relative">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-red-600/20 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-red-600/20 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>

                    <div className="relative z-10 text-center">
                      <h2 className="text-2xl font-bold text-white mb-2">Train With {teamMember.name}</h2>
                      <p className="text-gray-300 mb-6 max-w-lg mx-auto">
                        Experience the transformative power of martial arts under the guidance of our expert
                        instructors.
                      </p>
                      <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-white text-red-700 hover:bg-gray-100 font-medium py-2 px-6 rounded-md shadow-md transition-all duration-300 flex items-center justify-center">
                          Book a Free Class
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </button>
                        <button className="bg-transparent border border-white text-white hover:bg-white/10 font-medium py-2 px-6 rounded-md shadow-md transition-all duration-300 flex items-center justify-center">
                          View Class Schedule
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </div>
    </Template>
  )
}
