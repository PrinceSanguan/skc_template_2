import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type AnimationType = 'fadeIn' | 'fadeInUp' | 'fadeInDown' | 'slideInLeft' | 'slideInRight';

interface AnimationProps {
  type?: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
  scrollTrigger?: boolean;
}

export const useAnimation = <T extends HTMLElement>({
  type = 'fadeIn',
  delay = 0,
  duration = 0.8,
  threshold = 0.2,
  scrollTrigger = false
}: AnimationProps = {}) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let animation: gsap.core.Tween | gsap.core.Timeline | undefined;

    // Initial state (hidden)
    gsap.set(element, {
      autoAlpha: 0,
      // All movement animations removed
    });

    const animateIn = () => {
      animation = gsap.to(element, {
        autoAlpha: 1,
        duration,
        delay,
        ease: 'power3.out',
      });
    };

    if (scrollTrigger) {
      ScrollTrigger.create({
        trigger: element,
        start: `top bottom-=${threshold * 100}%`,
        onEnter: animateIn,
        once: true,
      });
    } else {
      animateIn();
    }

    return () => {
      if (animation) animation.kill();
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [type, delay, duration, threshold, scrollTrigger]);

  return ref;
};

export default useAnimation;
