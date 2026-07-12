'use client';

import Image from 'next/image';
import Link from 'next/link';
import useScrollReveal from '@/hooks/useScrollReveal';
import sermons from '@/data/sermons.json';
import { TimeIcon, LocationIcon } from '../layout/Icons';

export default function SermonsPreview() {
  const { ref, isVisible } = useScrollReveal();
  if (!sermons || sermons.length === 0) return null;

  // We'll show the top 3 sermons in this layout
  const recentSermons = sermons.slice(0, 3);

  const getMonth = (dateStr) => {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
  };

  const getDay = (dateStr) => {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('en-US', { day: '2-digit' });
  };

  return (
    <section className="bg-[#050b14] py-[4rem] md:py-[8rem] relative overflow-hidden" ref={ref}>
      
      {/* Dynamic Theater Spotlight Gradients */}
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-primary/30 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-[85rem] relative z-10">
        
        {/* Main Heading */}
        <div className={`text-center mb-[2.5rem] md:mb-[5rem] transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[4rem]'
        }`}>
          {/* Heading removed */}
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-white tracking-tight leading-tight mb-[1.5rem] drop-shadow-2xl">
            Recent Messages
          </h2>
          <p className="text-[1.1rem] md:text-[1.15rem] text-white/70 leading-[1.6] max-w-[50rem] mx-auto font-light">
            There is always a word in season. Discover sermons and teachings designed to inspire, connect, and empower you in every season of life.
          </p>
        </div>

        {/* Landscape Cards Grid - Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2.5rem]">
          {recentSermons.map((sermon, i) => (
            <Link 
              key={sermon.id}
              href={`/sermons`}
              className={`group flex flex-col rounded-[1rem] overflow-hidden bg-white/[0.03] backdrop-blur-xl shadow-[0_30px_60px_rgba(0,0,0,0.6)] hover:-translate-y-3 hover:shadow-[0_40px_80px_rgba(212,175,55,0.15)] transition-all duration-700 ease-out border border-white/10 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[4rem]'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Image Half */}
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <Image
                  src={sermon.thumbnail}
                  alt={sermon.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-transparent to-transparent opacity-80" />
              </div>
              
              {/* Content Half */}
              <div className="flex p-[1.5rem] md:p-[2rem] relative bg-gradient-to-t from-[#050b14]/50 to-transparent flex-grow">
                
                {/* Floating Date Left */}
                <div className="flex flex-col items-center mr-[1.5rem] pt-[0.25rem]">
                  {/* Sub-heading hidden per user request */}
                  <span className="font-display text-[1.85rem] font-bold text-white leading-none drop-shadow-md">{getDay(sermon.date)}</span>
                  <span className="text-[0.7rem] font-bold text-accent uppercase tracking-[0.2em] mt-[0.25rem]">{getMonth(sermon.date)}</span>
                </div>

                {/* Details Right */}
                <div className="flex flex-col flex-grow">
                  <h3 className="font-display font-bold text-white text-[1.25rem] leading-tight mb-[1rem] line-clamp-2">
                    {sermon.title}
                  </h3>
                  
                  <div className="flex items-center gap-[0.5rem] mb-[0.5rem] text-white/50 group-hover:text-white/80 transition-colors duration-300">
                    <TimeIcon className="w-[1rem] h-[1rem]" />
                    <span className="text-[0.8rem] font-medium">{sermon.speaker}</span>
                  </div>
                  
                  <div className="flex items-center gap-[0.5rem] text-white/50 group-hover:text-white/80 transition-colors duration-300 mb-[1rem]">
                    <LocationIcon className="w-[1rem] h-[1rem]" />
                    <span className="text-[0.8rem] font-medium">AWM Sanctuary</span>
                  </div>
                </div>

                {/* Arrow Bottom Right - Glowing on hover */}
                <div className="absolute bottom-[2rem] right-[2rem] w-[2.5rem] h-[2.5rem] rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent transition-all duration-500 border border-white/20 group-hover:border-accent group-hover:shadow-[0_0_20px_rgba(212,175,55,0.5)]">
                  <span className="text-white text-[1.2rem] leading-none mb-[0.15rem] group-hover:text-primary transition-colors">›</span>
                </div>

              </div>
            </Link>
          ))}
        </div>

        <div className={`text-center mt-[5rem] transition-all duration-1000 delay-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[4rem]'
        }`}>
          <Link 
            href="/sermons" 
            className="btn btn--outline border-white/20 text-white hover:bg-white hover:text-primary transition-all duration-300"
          >
            View All Messages
          </Link>
        </div>

      </div>
    </section>
  );
}
