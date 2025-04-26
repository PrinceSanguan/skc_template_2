import { Link } from "@inertiajs/react"
import AnimatedElement from "@/components/ui/animated-element"
import Template from "./Template"

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
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] bg-black overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black z-10"></div>
          <img src="/dojo-background.png" alt="Dojo background" className="w-full h-full object-cover opacity-30" />
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Red blur elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600 rounded-full filter blur-[100px] opacity-20 animate-pulse"></div>
          <div
            className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-red-700 rounded-full filter blur-[120px] opacity-15 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>

          {/* Japanese-inspired decorative elements */}
          <div className="absolute top-20 left-10 w-40 h-40">
            <div className="absolute inset-0 border-2 border-red-500 opacity-20 rounded-full"></div>
            <div className="absolute inset-4 border border-red-500 opacity-15 rounded-full"></div>
            <div className="absolute inset-8 border border-red-500 opacity-10 rounded-full"></div>
          </div>
        </div>

        {/* Japanese pattern overlay */}
        <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay z-0"></div>

        {/* Martial arts silhouette elements */}
        <div
          className="absolute bottom-0 right-0 w-64 h-64 bg-contain bg-no-repeat bg-right-bottom z-0 opacity-10"
          style={{ backgroundImage: "url('/karate-silhouette-1.png')" }}
        ></div>

        <div className="relative container mx-auto px-4 py-16 md:py-24 z-20 text-center flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white mb-2">
            {teamMember.name}
          </h1>
          <div className="w-32 h-0.5 bg-gradient-to-r from-red-700 to-red-500 mx-auto mb-4"></div>
          <p className="text-xl text-red-500 font-semibold">{teamMember.position}</p>
        </div>

        {/* Bottom wave pattern for natural transition */}
        <div className="absolute bottom-0 left-0 right-0 h-16 z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent"></div>
          <div
            className="absolute bottom-0 left-0 right-0 h-32 opacity-10"
            style={{
              backgroundImage: "url('/wave-pattern.png')",
              backgroundSize: "cover",
              backgroundPosition: "center bottom",
              transform: "scaleY(0.5)",
            }}
          ></div>
        </div>
      </div>

      {/* Biography Content */}
      <section className="py-16 bg-gradient-to-b from-gray-950 via-black to-black relative overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/10 to-transparent z-0"></div>

        {/* Japanese pattern overlay */}
        <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedElement type="fadeIn" delay={0.2}>
            <div className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden border border-red-800/20 shadow-[0_4px_20px_rgba(0,0,0,0.5),_0_0_15px_rgba(220,38,38,0.2)] mx-auto">
              <div className="px-4 py-4 md:px-8 md:py-6 border-b border-red-900/20">
                <Link
                  href="/about/team"
                  className="inline-flex items-center text-gray-300 hover:text-red-400 transition-colors text-sm group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  Back to Team
                </Link>
              </div>

              <div className="flex flex-col md:flex-row">
                {/* Image Section - Left Side */}
                <div className="w-full md:w-2/5 p-4 md:p-8">
                  <div className="overflow-hidden rounded-lg relative group">
                    <div className="absolute -inset-1 bg-gradient-to-tr from-red-600/30 to-red-900/30 rounded-lg blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 overflow-hidden rounded-lg">
                      <img
                        src={teamMember.imageUrl || "/placeholder.svg"}
                        alt={teamMember.name}
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
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
                              "h-96",
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
                </div>

                {/* Content Section - Right Side */}
                <div className="w-full md:w-3/5 p-4 md:p-8">
                  {teamMember.certifications && teamMember.certifications.length > 0 && (
                    <div className="mb-10">
                      <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white mb-4 uppercase relative">
                        CERTIFICATIONS
                        <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-red-700 to-red-500"></div>
                      </h2>
                      <div className="text-gray-300 mt-6 text-base">
                        <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-red-800/20 shadow-inner">
                          {teamMember.certifications.join(" and ")}
                        </div>
                      </div>
                    </div>
                  )}

                  <div>
                    <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white mb-4 uppercase relative">
                      BIOGRAPHY
                      <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-red-700 to-red-500"></div>
                    </h2>
                    <div className="text-gray-300 space-y-5 mt-6 text-base leading-relaxed">
                      {teamMember.longBio ? (
                        teamMember.longBio.split("\n\n").map((paragraph, index) => (
                          <p
                            key={index}
                            className="bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-red-800/20 shadow-inner"
                          >
                            {paragraph}
                          </p>
                        ))
                      ) : (
                        <p className="bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-red-800/20 shadow-inner">
                          Biography coming soon.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>

        {/* Bottom decorative element for natural transition */}
        <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-0.5 bg-gradient-to-r from-transparent via-red-600/20 to-transparent"></div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-64 h-0.5 bg-gradient-to-r from-transparent via-red-600/10 to-transparent"></div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Red blur elements */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-red-600 rounded-full filter blur-[100px] opacity-10 animate-pulse"></div>
          <div
            className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-red-700 rounded-full filter blur-[120px] opacity-10 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Japanese pattern overlay */}
        <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedElement type="fadeIn" delay={0.2}>
            <div className="relative max-w-5xl mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-tr from-red-600 to-red-900 rounded-xl blur-sm opacity-70"></div>
              <div className="relative bg-black/40 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-red-800/20 shadow-[0_4px_20px_rgba(0,0,0,0.5),_0_0_15px_rgba(220,38,38,0.2)] overflow-hidden">
                {/* Japanese-inspired decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 pointer-events-none">
                  <div className="absolute inset-0 border-2 border-red-500 opacity-10 rounded-full"></div>
                  <div className="absolute inset-4 border border-red-500 opacity-8 rounded-full"></div>
                  <div className="absolute inset-8 border border-red-500 opacity-5 rounded-full"></div>
                </div>

                <div className="text-center">
                  <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white mb-2">
                    Ready to Begin Your Martial Arts Journey?
                  </h2>
                  <div className="w-32 h-0.5 bg-gradient-to-r from-red-700 to-red-500 mx-auto mb-6"></div>
                  <p className="text-lg text-gray-300 mb-8">
                    Join our community and discover the transformative power of martial arts training.
                  </p>
                  <button className="inline-block bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 px-8 py-4 rounded-md text-lg font-semibold text-white transition-all duration-300 shadow-[0_4px_15px_rgba(220,38,38,0.4)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.6)] hover:-translate-y-1">
                    START YOUR TRAINING TODAY
                  </button>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </Template>
  )
}
