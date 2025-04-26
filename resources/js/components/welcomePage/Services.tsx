import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const particles = particlesRef.current;

    if (section) {
      // Title animation
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

      // Cards animation with improved stagger
      gsap.fromTo(
        section.querySelectorAll('.program-card'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
          }
        }
      );
    }

    // Create subtle fire particles
    if (particles) {
      // Subtle fire colors
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
      title: 'Lil Dragons (4 – 5)',
      description: 'Empower your child with our Lil Dragons martial arts classes. Designed to channel their boundless curiosity and energy, our expert instructors provide vibrant, engaging lessons that are both educational and fun.',
      icon: (
        <svg className="h-10 w-10 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      image: "Images/team/TN-Lil-Dragons.jpg",
      imageAlt: "Lil Dragons martial arts class",
    },
    {
      id: 2,
      title: 'Kids Karate (6 – 10)',
      description: 'Our kids martial arts classes provide children with valuable benefits such as increased confidence, discipline, resilience, and self-defense skills.',
      icon: (
        <svg className="h-10 w-10 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      image: "Images/team/TN-Kids-Karate.jpg",
      imageAlt: "Kids Karate class",
    },
    {
      id: 3,
      title: 'Teens Karate (11 – 13)',
      description: 'Ignite your teenager\'s journey from youth to adulthood with our martial arts classes. Enhance their emotional intelligence and empower them to unlock their full potential.',
      icon: (
        <svg className="h-10 w-10 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      image: "Images/team/TN-Teen-Karate.jpg",
      imageAlt: "Teens Karate class",
    },
    {
      id: 4,
      title: 'Adult Kempo Karate (14+)',
      description: 'Discover our adult martial arts classes—a dynamic fusion of fitness, self-defense, and fun. Join us to boost your health, learn practical self-defense skills, and enjoy every step of your journey.',
      icon: (
        <svg className="h-10 w-10 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      image: "Images/team/ADULTKEMPO.jpg",
      imageAlt: "Adult Kempo Karate class",
    },
    {
      id: 5,
      title: 'Kickboxing (14+)',
      description: 'Experience the transformative power of Kickboxing! Each class brings you closer to mastering techniques, building strength, and boosting confidence.',
      icon: (
        <svg className="h-10 w-10 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
        </svg>
      ),
      image: "Images/team/88A5D580-B43D-4916-92F9-2B8037264B27-rotated-e1724873881945.jpg",
      imageAlt: "Kickboxing class",
    },
    {
      id: 6,
      title: 'Jiu Jitsu (14+)',
      description: 'Ready to enhance your life and well-being? Discover the physical, mental, and social benefits of Tetsu Shin Ryu Jiu-Jitsu and transform your fitness, resilience, and community connections.',
      icon: (
        <svg className="h-10 w-10 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      image: "Images/team/JIU JITSU.jpg",
      imageAlt: "Jiu Jitsu class",
    },
  ];

  return (
    <section id="programs" className="relative py-20 text-white overflow-hidden" ref={sectionRef}>
      {/* Subtle particles container */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none z-5"></div>

      <div className="container relative mx-auto px-4 z-20">
        <div className="title-container mb-16 text-center">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="h-px w-8 bg-red-500"></div>
            <span className="text-red-400 uppercase tracking-wider text-sm font-semibold">Our Programs</span>
            <div className="h-px w-8 bg-red-500"></div>
          </div>
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">Martial Arts Programs</h2>
          <p className="mx-auto max-w-2xl text-gray-300 mt-4">
            Discover the perfect martial arts class at SKC! Our diverse programs cater to kids, teens, and adults, ensuring everyone finds a class that suits their needs and skill level.
          </p>
          <div className="mx-auto mt-6 h-1 w-20 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="program-card rounded-xl bg-black/60 p-6 shadow-xl transition-all duration-300 backdrop-blur-sm border border-red-900/20 hover:border-red-600/40 hover:shadow-red-900/5 group"
            >
              {/* Image Placeholder - Using image path from service object */}
              <div className="mb-6 overflow-hidden rounded-lg">
                <img 
                  src={service.image} 
                  alt={service.imageAlt} 
                  className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mb-5 transform transition-transform duration-300 group-hover:scale-110">{service.icon}</div>
              <h3 className="mb-3 text-xl font-semibold text-white">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
              <button className="mt-5 text-sm font-medium text-red-500 hover:text-red-400 transition-colors duration-300 flex items-center group">
                View Program
                <svg className="w-4 h-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="rounded-xl bg-gradient-to-r from-red-700 to-red-600 px-8 py-4 text-white hover:from-red-600 hover:to-red-500 transition-all duration-300 shadow-lg shadow-red-900/20 transform hover:scale-105 relative group overflow-hidden">
            <span className="relative z-10 flex items-center justify-center">
              Browse All Programs
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

export default Services;