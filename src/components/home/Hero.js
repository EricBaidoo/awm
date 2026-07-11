'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Slide data supporting both images and videos
const slides = [
  {
    type: 'image',
    src: '/images/hero/slide-1-v2.png',
    title: 'Experience God',
    subtitle: 'Reconciling individuals and families to resurrected life.',
  },
  {
    type: 'image',
    src: '/images/hero/slide-2-v2.png',
    title: 'The Power of the Word',
    subtitle: 'Systematic teaching of God\'s Word every week.',
  },
  {
    type: 'image',
    src: '/images/hero/slide-3-v2.png',
    title: 'Find Your Community',
    subtitle: 'Join a family of believers walking together in faith.',
  },
  {
    type: 'image',
    src: '/images/hero/slide-4-v2.png',
    title: 'A Generation of Faith',
    subtitle: 'Equipping families to build a legacy that lasts.',
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback((index) => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setTransitioning(false);
    }, 500);
  }, [transitioning]);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    // Longer interval to let videos play
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full h-[95vh] min-h-[45rem] overflow-hidden bg-black flex items-center justify-center">
      
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: i === current ? 1 : 0 }}
            aria-hidden={i !== current}
          >
            {slide.type === 'video' ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={slide.fallback}
                className="w-full h-full object-cover opacity-80"
              >
                <source src={slide.src} type="video/mp4" />
                {/* Fallback image if video is not available */}
                <Image src={slide.fallback} alt={slide.title} fill className="object-cover object-center opacity-40" />
              </video>
            ) : (
              <Image
                src={slide.src}
                alt={slide.title}
                fill
                priority={i === 0}
                className="object-cover object-center opacity-40"
              />
            )}
          </div>
        ))}
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container flex flex-col justify-center px-[2rem] md:px-[4rem] h-full pt-[4rem]">
        
        <div className="max-w-[50rem] mx-auto md:mx-0 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 
            className="font-display text-[clamp(3.5rem,8vw,6.5rem)] font-black text-white leading-[1.05] tracking-tight mb-[1rem] drop-shadow-2xl transition-all duration-700 ease-out"
            style={{ opacity: transitioning ? 0 : 1, transform: transitioning ? 'translateY(1rem)' : 'translateY(0)' }}
          >
            {slides[current].title}
          </h1>
          
          <p 
            className="text-[clamp(1.1rem,2.5vw,1.4rem)] text-white/90 leading-[1.6] mb-[3rem] font-light transition-all duration-700 delay-100 ease-out"
            style={{ opacity: transitioning ? 0 : 1, transform: transitioning ? 'translateY(1rem)' : 'translateY(0)' }}
          >
            {slides[current].subtitle}
          </p>
          
          <div 
            className="flex flex-col sm:flex-row flex-wrap gap-[1.5rem] w-full sm:w-auto justify-center md:justify-start transition-all duration-700 delay-200 ease-out"
            style={{ opacity: transitioning ? 0 : 1, transform: transitioning ? 'translateY(1rem)' : 'translateY(0)' }}
          >
            <Link href="/visit" className="w-full sm:w-auto text-center px-[2.5rem] py-[1rem] bg-accent text-primary font-bold text-[1.1rem] uppercase tracking-wide hover:bg-white transition-colors shadow-xl">
              Plan A Visit
            </Link>
            <Link href="/stream" className="w-full sm:w-auto text-center px-[2.5rem] py-[1rem] border-[2px] border-white text-white font-bold text-[1.1rem] uppercase tracking-wide hover:bg-white hover:text-black transition-colors shadow-xl">
              Watch Live
            </Link>
          </div>
        </div>

      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-[2.5rem] left-[2rem] md:left-[4rem] z-20 flex gap-[0.5rem]">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-[0.35rem] rounded-full transition-all duration-500 ease-out ${
              i === current ? 'w-[3rem] bg-accent' : 'w-[1.5rem] bg-white/30 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
