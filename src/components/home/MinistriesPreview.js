'use client';

import Image from 'next/image';
import Link from 'next/link';
import useScrollReveal from '@/hooks/useScrollReveal';
import { WomenIcon } from '../layout/Icons';

export default function MinistriesPreview() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-white py-[4rem] md:py-[8rem] relative overflow-hidden" ref={ref}>
      <div className="container max-w-[85rem] relative z-10">
        
        {/* Split Layout Container */}
        <div className="flex flex-col lg:flex-row items-center gap-[4rem] lg:gap-[6rem]">
          
          {/* Left Side: Text Content */}
          <div className={`w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[4rem]'
          }`}>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-black text-primary tracking-tight leading-[1.1] mb-[1.5rem]">
              Our Ministries
            </h2>
            <p className="text-[1.1rem] md:text-[1.15rem] text-text-secondary leading-[1.6] font-light mb-[3rem] max-w-[35rem]">
              Faith grows best in community. Whether you're new or ready to take your next step, there's a place for you to connect, grow, and belong.
            </p>

            {/* Featured Ministry Details */}
            <div className="flex flex-col items-center lg:items-start bg-[#f8f8f7] p-[2.5rem] rounded-[1.5rem] border border-black/5 shadow-sm w-full">
              <div className="mb-[1.5rem] text-accent">
                <WomenIcon className="w-[2.5rem] h-[2.5rem] stroke-[2px]" />
              </div>
              <h3 className="font-display font-bold text-[2rem] text-primary leading-[1.2] mb-[1rem] tracking-tight">
                Women's Ministry
              </h3>
              <p className="text-[1rem] text-text-secondary leading-[1.6] font-light mb-[2rem]">
                Empowering women through fellowship, the Word, and authentic connection. Join a sisterhood dedicated to spiritual growth and mutual support.
              </p>
              
              <Link 
                href="/groups/womens-ministry"
                className="group flex items-center gap-[1rem] text-accent font-bold uppercase tracking-[0.15em] text-[0.9rem] hover:text-primary transition-colors duration-300"
              >
                <span>Learn More</span>
                <span className="w-[2.5rem] h-[2.5rem] rounded-full border border-accent/30 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  ›
                </span>
              </Link>
            </div>
          </div>

          {/* Right Side: Large Image */}
          <div className={`w-full lg:w-1/2 relative aspect-[4/5] lg:aspect-square rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(17,36,59,0.15)] transition-all duration-1000 delay-200 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[4rem]'
          }`}>
            <Image
              src="/images/gallery/church-6.jpg"
              alt="Women's Ministry"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover hover:scale-105 transition-transform duration-1000"
            />
            {/* Subtle inner shadow overlay */}
            <div className="absolute inset-0 border-[2px] border-black/5 rounded-[2rem] pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
