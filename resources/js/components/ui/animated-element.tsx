import React, { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { useAnimation } from '@/hooks/useAnimation';
import { cn } from '@/lib/utils';

export type AnimationType = 'fadeIn' | 'fadeInUp' | 'fadeInDown' | 'slideInLeft' | 'slideInRight';

export interface AnimatedElementProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  type?: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
  scrollTrigger?: boolean;
  as?: React.ElementType;
}

const AnimatedElement = forwardRef<HTMLDivElement, AnimatedElementProps>(
  (
    {
      children,
      type = 'fadeIn',
      delay = 0,
      duration = 0.8,
      threshold = 0.2,
      scrollTrigger = true,
      as: Component = 'div',
      className,
      ...props
    },
    ref
  ) => {
    const animationRef = useAnimation<HTMLDivElement>({
      type,
      delay,
      duration,
      threshold,
      scrollTrigger,
    });

    const combinedRef = (node: HTMLDivElement) => {
      // Forward the ref if provided
      if (ref) {
        if (typeof ref === 'function') {
          ref(node);
        } else {
          (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }
      }

      // Set our animation ref
      if (animationRef.current !== node) {
        (animationRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }
    };

    return (
      <Component
        ref={combinedRef}
        className={cn('opacity-0', className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

AnimatedElement.displayName = 'AnimatedElement';

export { AnimatedElement };

export default AnimatedElement;
