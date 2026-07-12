'use client';

import Link from 'next/link';
import Image from 'next/image';
import useScrollReveal from '@/hooks/useScrollReveal';
import { PrayerIcon } from '../layout/Icons';

export default function PrayerCTA() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section 
      ref={ref}
      className="relative py-[6rem] md:py-[16rem] flex items-center justify-center overflow-hidden text-center"
    >
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/backgrounds/prayer-clean.png" 
          alt="Prayer at Anointed Word Ministries" 
          fill 
          className="object-cover object-center opacity-70" 
        />
        {/* Dark Cinematic Vignette & Gradient - Softer than before */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] opacity-80" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="container relative z-10 px-[2rem] max-w-[50rem]">
        
        <div className={`transition-all duration-1000 ease-out flex flex-col items-center ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[3rem]'
        }`}>
          <div className="w-[5rem] h-[5rem] rounded-full bg-white/5 flex items-center justify-center mb-[2rem] border border-white/20 backdrop-blur-md shadow-[0_0_30px_rgba(212,175,55,0.15)]">
            <PrayerIcon className="w-[2.5rem] h-[2.5rem] text-accent drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
          </div>

          <h2 className="font-display text-[clamp(3.5rem,6vw,5.5rem)] font-bold text-white leading-[1.05] tracking-tight mb-[1.5rem] drop-shadow-2xl">
            Need Prayer?
          </h2>
          
          <p className="text-[1.1rem] md:text-[1.4rem] text-white/90 max-w-[40rem] font-light leading-[1.6] mb-[3.5rem] drop-shadow-lg text-left md:text-center">
            We believe in the power of corporate intercession. No matter what you are facing, you don't have to face it alone. Let our prayer team stand in faith with you.
          </p>

          <Link 
            href="/connect" 
            className="w-full sm:w-auto inline-flex items-center justify-center px-[3.5rem] py-[1.25rem] bg-accent text-primary font-bold uppercase tracking-[0.2em] text-[0.95rem] hover:bg-white hover:scale-105 transition-all duration-500 shadow-[0_15px_40px_rgba(212,175,55,0.4)] hover:shadow-[0_20px_50px_rgba(255,255,255,0.5)]"
          >
            Submit A Request
          </Link>
        </div>

      </div>
    </section>
  );
}
