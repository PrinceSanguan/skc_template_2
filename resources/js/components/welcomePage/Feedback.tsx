import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Feedback = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const particles = particlesRef.current;
    const cards = cardsRef.current;

    // Title animation
    if (section) {
      gsap.fromTo(
        section.querySelector('.title-container'),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          }
        }
      );
    }

    // Cards animation
    if (cards) {
      gsap.fromTo(
        cards.querySelectorAll('.testimonial-card'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cards,
            start: 'top 80%',
          }
        }
      );
    }

    // Create subtle fire particles
    if (particles) {
      const colors = ["#ff9500", "#ff6a00", "#ff4d00", "#ff8800"];
      const particleInterval = setInterval(() => {
        const particle = document.createElement('div');
        const size = Math.random() * 4 + 1; // Smaller particles
        const color = colors[Math.floor(Math.random() * colors.length)];

        particle.style.position = 'absolute';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.borderRadius = '50%';
        particle.style.backgroundColor = color;
        particle.style.opacity = (0.2 + Math.random() * 0.2).toString(); // Lower opacity
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.bottom = '0';

        particles.appendChild(particle);

        // Gentle upward movement
        gsap.to(particle, {
          x: Math.random() * 30 - 15, // Less horizontal movement
          y: -(Math.random() * 100 + 50), // Less height
          opacity: 0,
          duration: 3 + Math.random() * 2,
          ease: "power1.out",
          onComplete: () => {
            if (particles.contains(particle)) {
              particles.removeChild(particle);
            }
          }
        });
      }, 300);

      return () => {
        if (particleInterval) {
          clearInterval(particleInterval);
        }
      };
    }
  }, []);

  const testimonials = [
    {
      id: 1,
      content: "My son has been begging to take karate for two years. He was diagnosed with ADD, hyperactive type with sensory issue components. This summer I decided to try the intro 6 week class. We had our first class and the staff was wonderful. After one week, I can already tell his confidence is growing. So far we love Seigler's!",
      name: "Shanna Nelson Greene",
      position: "Parent",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      id: 2,
      content: "Accountability and an awesome workout! I had the knowledge of how to loose weight and get fit, but like so many of us, I needed that push to get me started! Having a scheduled class time and training with athletes at the top of their game has motivated me to crush my goals.",
      name: "Rachel Kimbrough-Eugene",
      position: "Member",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      id: 3,
      content: "Seigler's Karate Center is the BEST place to send your kids! A wonderful blend of Karate, leadership training and character building. Instructors know each child by name and are truly dedicated to their craft and the success of every child.",
      name: "Obambi A",
      position: "Parent",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg"
    }
  ];

  return (
    <section ref={sectionRef} id="feedback" className="relative py-20 text-white overflow-hidden">
      {/* Subtle particles container */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none z-5"></div>

      <div className="container relative mx-auto px-4 z-20">
        <div className="title-container mb-16 text-center">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="h-px w-8 bg-red-500"></div>
            <span className="text-red-400 uppercase tracking-wider text-sm font-semibold">Testimonials</span>
            <div className="h-px w-8 bg-red-500"></div>
          </div>
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">What Our Members Say</h2>
          <p className="mx-auto max-w-2xl text-gray-300 mt-4">
            Hear from our community about their experiences and transformations at Seigler's Karate Center
          </p>
          <div className="mx-auto mt-6 h-1 w-20 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
        </div>

        <div ref={cardsRef} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="testimonial-card rounded-xl bg-black/60 p-6 shadow-xl transition-all duration-300 backdrop-blur-sm border border-red-900/20 hover:border-red-600/40 hover:shadow-red-900/5 group"
            >
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="mr-1 inline-block h-5 w-5 text-red-500 group-hover:text-yellow-400 transition-colors duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="mb-6 text-gray-300">"{testimonial.content}"</p>

              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full border-2 border-red-500 group-hover:border-red-400 transition-colors duration-300">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="rounded-xl bg-gradient-to-r from-red-700 to-red-600 px-8 py-4 text-white hover:from-red-600 hover:to-red-500 transition-all duration-300 shadow-lg shadow-red-900/20 transform hover:scale-105 relative group overflow-hidden">
            <span className="relative z-10 flex items-center justify-center">
              See More Reviews
              <svg className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Feedback;