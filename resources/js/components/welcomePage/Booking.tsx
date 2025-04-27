import { Button } from '@/components/ui/button';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Booking = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const container = containerRef.current;
    const particles = particlesRef.current;

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

    // Container animation
    if (container) {
      gsap.fromTo(
        container,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container,
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
      }, 300); // Less frequent particles

      return () => {
        if (particleInterval) {
          clearInterval(particleInterval);
        }
      };
    }
  }, []);

  const services = [
    {
      id: 1,
      name: 'Free Trial Class',
      description: 'Experience a martial arts class with no obligation to continue',
      duration: '45 min',
      price: 'FREE'
    },
    {
      id: 2,
      name: 'Beginner Package',
      description: '6-week introductory course including uniform and first belt test',
      duration: '2x weekly',
      price: '$149'
    },
    {
      id: 3,
      name: 'One-on-One Training',
      description: 'Private training session with a certified black belt instructor',
      duration: '30 min',
      price: '$49'
    },
    {
      id: 4,
      name: 'Family Program',
      description: 'Train together as a family with our special family pricing',
      duration: 'Ongoing',
      price: 'From $199/mo'
    }
  ];

  return (
    <section id="booking" ref={sectionRef} className="relative py-20 text-white overflow-hidden">
      {/* Subtle particles container */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none z-5"></div>

      <div className="container relative mx-auto px-4 z-10">
        <div className="title-container mb-16 text-center">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="h-px w-8 bg-red-500"></div>
            <span className="text-red-400 uppercase tracking-wider text-sm font-semibold">Join Us</span>
            <div className="h-px w-8 bg-red-500"></div>
          </div>
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">Schedule & Pricing</h2>
          <p className="mx-auto max-w-2xl text-gray-300 mt-4">
            Get started with Seigler's Karate Center today. Select a program and schedule your first class.
          </p>
          <div className="mx-auto mt-6 h-1 w-20 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
        </div>

        <div ref={containerRef} className="flex flex-col rounded-2xl shadow-xl lg:flex-row overflow-hidden border border-red-900/20">
          <div className="w-full p-8 bg-black/60 backdrop-blur-sm lg:w-1/2 border-r border-red-900/20">
            <h3 className="mb-6 text-2xl font-semibold text-white">Select a Program</h3>

            <div className="space-y-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="flex cursor-pointer items-center rounded-lg border border-red-900/20 p-4 transition-all hover:border-red-500/40 hover:shadow-md bg-black/40 group"
                >
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-900/30 text-red-400 transition-all duration-300 group-hover:bg-red-800/40">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-white group-hover:text-red-400 transition-colors duration-300">{service.name}</h4>
                    <p className="text-sm text-gray-300">{service.description}</p>
                  </div>
                  <div className="ml-4 text-right">
                    <span className="block font-semibold text-white">{service.price}</span>
                    <span className="text-sm text-gray-400">{service.duration}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button 
                variant="default" 
                className="w-full bg-gradient-to-r from-red-700 to-red-600 px-6 py-4 text-white hover:from-red-600 hover:to-red-500 transition-all duration-300 shadow-lg shadow-red-900/20 transform hover:scale-105 relative group overflow-hidden"
              >
                <span className="flex items-center justify-center">
                  <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View More Options
                </span>
              </Button>
            </div>
          </div>

          <div className="relative w-full bg-black/80 backdrop-blur-sm p-8 text-white lg:w-1/2 lg:rounded-r-2xl">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-br from-red-900/30 to-red-800/10 opacity-50 lg:rounded-r-2xl"></div>
            <div className="relative z-10">
              <h3 className="mb-6 text-2xl font-semibold">ONLINE EXCLUSIVE OFFER</h3>

              <div className="mb-6 rounded-lg bg-red-900/20 border border-red-900/30 p-4 shadow-lg">
                <div className="mb-2 text-center text-xl font-semibold">Limited Time & Availability</div>
                <p className="text-center text-gray-300">Get more information about our classes and schedule on the next page!</p>
              </div>

              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full rounded-md border border-red-900/30 bg-black/40 p-3 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email address for info"
                    className="w-full rounded-md border border-red-900/30 bg-black/40 p-3 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Mobile # for info via text"
                    className="w-full rounded-md border border-red-900/30 bg-black/40 p-3 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500"
                  />
                </div>
                <div>
                  <select className="w-full rounded-md border border-red-900/30 bg-black/40 p-3 text-white focus:border-red-500 focus:ring-red-500">
                    <option value="">Select a Program</option>
                    <option value="lil-dragons">Lil Dragons (4-5)</option>
                    <option value="kids">Kids Karate (6-10)</option>
                    <option value="teens">Teens Karate (11-13)</option>
                    <option value="adults">Adult Kempo Karate (14+)</option>
                    <option value="kickboxing">Kickboxing (14+)</option>
                    <option value="jiu-jitsu">Jiu Jitsu (14+)</option>
                  </select>
                </div>
                <div>
                  <select className="w-full rounded-md border border-red-900/30 bg-black/40 p-3 text-white focus:border-red-500 focus:ring-red-500">
                    <option value="">Select Location</option>
                    <option value="evans">Evans, GA</option>
                    <option value="grovetown">Grovetown, GA</option>
                    <option value="augusta">Augusta, GA (Coming Soon)</option>
                  </select>
                </div>
                <Button 
                  className="w-full bg-gradient-to-r from-red-700 to-red-600 py-4 font-medium text-white hover:from-red-600 hover:to-red-500 transition-all duration-300 shadow-lg shadow-red-900/20 transform hover:scale-105 relative group overflow-hidden"
                >
                  <span className="flex items-center justify-center">
                    <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Get Information
                  </span>
                </Button>
              </form>
              <p className="mt-4 text-xs text-gray-400">
                By opting into the web form above you are providing consent for Seigler's Karate Center to send you periodic text messages. Standard rates may apply. You can reply HELP at anytime to learn more. You may opt-out anytime by replying STOP.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;