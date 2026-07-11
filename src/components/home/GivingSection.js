'use client';

import Link from 'next/link';
import Image from 'next/image';
import useScrollReveal from '@/hooks/useScrollReveal';
import { GiveIcon } from '../layout/Icons';

export default function GivingSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section 
      ref={ref}
      className="relative py-[8rem] md:py-[12rem] bg-bg-dark overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-accent/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-primary/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="container relative z-10 px-[2rem] max-w-[85rem]">
        <div className="grid lg:grid-cols-2 gap-[4rem] lg:gap-[6rem] items-center">
          
          {/* Left Side: Content */}
          <div className={`transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[3rem]'
          }`}>
            <div className="w-[4rem] h-[4rem] rounded-full bg-white/5 flex items-center justify-center mb-[2rem] border border-white/10 backdrop-blur-sm">
              <GiveIcon className="w-[2rem] h-[2rem] text-accent" />
            </div>

            <h2 className="font-display text-[clamp(3rem,5vw,4.5rem)] font-black text-white leading-[1.1] tracking-tight mb-[1.5rem]">
              Partner With Us
            </h2>
            
            <p className="text-[1.1rem] md:text-[1.25rem] text-white/80 max-w-[35rem] font-light leading-[1.7] mb-[3rem]">
              Your generosity empowers us to reconcile families, build the community, and spread the Gospel worldwide. Together, we can make an eternal impact.
            </p>

            <Link 
              href="/give" 
              className="inline-flex items-center justify-center px-[3rem] py-[1.25rem] bg-accent text-primary font-bold uppercase tracking-[0.15em] text-[0.9rem] hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(212,175,55,0.2)]"
            >
              Give Online Now
            </Link>
          </div>

          {/* Right Side: Clean Catchy Image */}
          <div className={`relative transition-all duration-1000 delay-300 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[3rem]'
          }`}>
            <div className="relative aspect-[4/5] w-full max-w-[35rem] mx-auto lg:ml-auto">
              {/* Decorative Frame */}
              <div className="absolute inset-0 border-2 border-accent/30 translate-x-[1.5rem] translate-y-[1.5rem] z-0" />
              
              {/* Image Container */}
              <div className="absolute inset-0 z-10 overflow-hidden shadow-2xl bg-[#0a1526]">
                <Image 
                  src="/images/backgrounds/giving-clean.png" 
                  alt="Partner With Us" 
                  fill 
                  className="object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              </div>
              
              {/* Floating Stat Card */}
              <div className="absolute -left-[2rem] bottom-[4rem] z-20 bg-white/10 backdrop-blur-md border border-white/20 p-[1.5rem] shadow-2xl hidden md:block">
                <div className="text-accent font-display text-[2.5rem] font-black leading-none mb-[0.25rem]">100%</div>
                <div className="text-white/90 text-[0.85rem] font-bold uppercase tracking-[0.1em]">Impact for Christ</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
