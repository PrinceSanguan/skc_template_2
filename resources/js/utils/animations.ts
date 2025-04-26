import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins
gsap.registerPlugin(ScrollTrigger);

export const fadeInUp = (element: string | Element, delay: number = 0, duration: number = 0.8) => {
  return gsap.from(element, {
    y: 50,
    opacity: 0,
    duration,
    delay,
    ease: 'power3.out'
  });
};

export const fadeIn = (element: string | Element, delay: number = 0, duration: number = 0.8) => {
  return gsap.from(element, {
    opacity: 0,
    duration,
    delay,
    ease: 'power2.inOut'
  });
};

export const staggerFadeInUp = (elements: string | Element[], stagger: number = 0.1, delay: number = 0) => {
  return gsap.from(elements, {
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay,
    stagger,
    ease: 'power3.out'
  });
};

export const slideInLeft = (element: string | Element, delay: number = 0) => {
  return gsap.from(element, {
    x: -100,
    opacity: 0,
    duration: 0.8,
    delay,
    ease: 'power3.out'
  });
};

export const slideInRight = (element: string | Element, delay: number = 0) => {
  return gsap.from(element, {
    x: 100,
    opacity: 0,
    duration: 0.8,
    delay,
    ease: 'power3.out'
  });
};

export const scrollAnimation = (element: string) => {
  return ScrollTrigger.create({
    trigger: element,
    start: 'top 80%',
    onEnter: () => {
      gsap.to(element, {
        y: 0,
        x: 0,
        duration: 1,
        opacity: 1,
        ease: 'power3.out',
      });
    },
    once: true
  });
};

export const revealMask = (element: string | Element) => {
  return gsap.from(element, {
    clipPath: 'inset(0 100% 0 0)',
    duration: 1.2,
    ease: 'power4.inOut'
  });
};

export const animateCounter = (element: string | Element, target: number, duration: number = 2) => {
  const obj = { val: 0 };
  const el = typeof element === 'string' ? document.querySelector(element) : element;

  if (!el) return;

  return gsap.to(obj, {
    val: target,
    duration,
    ease: 'power2.inOut',
    onUpdate: () => {
      if (el instanceof HTMLElement) {
        el.textContent = Math.floor(obj.val).toString();
      }
    }
  });
};

export const initScrollAnimations = () => {
  // Hero section animations
  gsap.from('.hero-title', {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.2,
    ease: 'power3.out'
  });

  gsap.from('.hero-description', {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.4,
    ease: 'power3.out'
  });

  gsap.from('.hero-buttons', {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.6,
    ease: 'power3.out'
  });

  gsap.from('.hero-image', {
    opacity: 0,
    x: 50,
    duration: 1,
    delay: 0.8,
    ease: 'power3.out'
  });

  // Create scroll triggers for each section
  ScrollTrigger.batch('.animate-on-scroll', {
    onEnter: (elements) => {
      gsap.to(elements, {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out'
      });
    },
    once: true,
    start: 'top 80%'
  });
};
