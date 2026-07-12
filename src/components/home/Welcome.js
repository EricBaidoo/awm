'use client';

import Image from 'next/image';
import useScrollReveal from '@/hooks/useScrollReveal';
import siteConfig from '@/lib/config';
import { WelcomeIcon } from '../layout/Icons';

export default function Welcome() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-[#f4f4f4] pt-[6rem] md:pt-[8rem] pb-[6rem] md:pb-[8rem] relative z-20 -mt-[4rem] rounded-t-[2.5rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]" ref={ref}>
      <div className="container max-w-[85rem] px-[2rem]">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-[3rem] md:gap-[8rem]">
          
          {/* Text Content */}
          <div className={`w-full md:w-1/2 text-center md:text-left transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[4rem]'
          }`}>
            <p className="text-[#888] uppercase tracking-[0.2em] font-medium text-[0.85rem] mb-[1.5rem]">
              WELCOME HOME
            </p>
            
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-black text-black leading-[1.1] mb-[2rem] tracking-tight">
              A Place of <br/> Reconciliation
            </h2>
            
            <p className="text-[#444] text-[1.1rem] leading-[1.7] mb-[1.5rem] font-light max-w-[35rem]">
              Welcome to Anointed Word Ministries! We are a family of believers led by a divine mandate to reconcile individuals and families from dead places to resurrected life in Christ through the power of the Holy Spirit.
            </p>
            <p className="text-[#444] text-[1.1rem] leading-[1.7] mb-[3rem] font-light max-w-[35rem]">
              Whether you are just beginning your spiritual journey or looking for a place to put down deep roots, you have a place here.
            </p>
            
            <div className="flex items-center justify-center md:justify-start gap-[2rem]">
              <div className="flex flex-col">
                <span className="font-display font-medium text-[1.2rem] text-black tracking-wide">{siteConfig.pastor.name}</span>
                <span className="text-[0.75rem] text-[#888] uppercase tracking-[0.1em] font-bold">Senior Pastor</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className={`w-full md:w-1/2 relative aspect-[3/4] max-w-[35rem] mx-auto overflow-hidden rounded-[1rem] shadow-2xl transition-all duration-1000 delay-200 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[4rem]'
          }`}>
             <Image
                src="/images/leadership/pastor-cofield.jpg"
                alt="Apostle Joyce Cofield"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
          </div>

        </div>
      </div>
    </section>
  );
}
