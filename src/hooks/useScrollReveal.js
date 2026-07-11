'use client';

import { useEffect, useRef, useState } from 'react';

export default function useScrollReveal(options = {}) {
  const ref = useRef(null);
  // Start visible by default so SSR never hides sections
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Reset to hidden, then observe
    setIsVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: options.threshold || 0.05,
        rootMargin: options.rootMargin || '0px 0px -30px 0px',
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return { ref, isVisible };
}
