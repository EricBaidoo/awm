'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import groups from '@/data/groups.json';
import useScrollReveal from '@/hooks/useScrollReveal';
import { LocationIcon, TimeIcon, CheckIcon } from '@/components/layout/Icons';

function RevealSection({ children, className = '', delay = 0 }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[4rem]'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function GroupsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeType, setActiveType] = useState('All');

  const categories = ['All', ...new Set(groups.map(g => g.category))];
  const types = ['All', 'In-Person', 'Zoom'];

  const filteredGroups = groups.filter(group => {
    const matchCategory = activeCategory === 'All' || group.category === activeCategory;
    const matchType = activeType === 'All' || group.type === activeType;
    return matchCategory && matchType;
  });

  return (
    <div className="min-h-[100vh] bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[35rem] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="hidden">
            <Image
              src="/images/backgrounds/hero-bg.jpg"
              alt="Life Groups at Anointed Word Ministries"
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[rgba(6,14,42,0.85)] to-[#0a0a0a] z-1" />
        </div>
        
        <div className="relative z-10 text-white w-full max-w-[60rem] px-[2rem] text-center pt-[5rem]">
          <div className="animate-[fadeInDown_0.6s_ease-out]">
            {/* Sub-heading hidden per user request */}
          </div>
          <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-black mb-[1rem] leading-[1.1] animate-[fadeInUp_0.8s_ease-out]">
            Find Your People
          </h1>
          <p className="text-[1.15rem] text-white/80 leading-[1.7] max-w-[40rem] mx-auto animate-[fadeInUp_1s_ease-out]">
            We weren't meant to do life alone. Life Groups are the heartbeat of our church—a place to grow, connect, and belong.
          </p>
        </div>
      </section>

      {/* Main Content - Cinematic Dark Theme */}
      <section className="relative py-[8rem] px-[2rem] overflow-hidden -mt-[4rem] rounded-t-[2.5rem] bg-[#050b14] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] z-20">
        {/* Spotlight lighting */}
        <div className="absolute top-[10%] right-[-10%] w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[20%] left-[-10%] w-[40vw] h-[40vw] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container max-w-[85rem] relative z-10">
          
          {/* Filters */}
          <RevealSection className="flex flex-wrap justify-center gap-[1rem] mb-[4rem]">
            {/* Type Filters */}
            <div className="flex bg-white/[0.03] p-[0.25rem] rounded-full border border-white/10 backdrop-blur-md shadow-inner">
              {types.map(type => (
                <button
                  key={type}
                  onClick={() => setActiveType(type)}
                  className={`px-[1.5rem] py-[0.75rem] rounded-full text-[0.85rem] font-bold uppercase tracking-[0.1em] transition-all duration-300 ${
                    activeType === type
                      ? 'bg-accent text-bg-dark shadow-[0_5px_15px_rgba(212,175,55,0.3)]'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-[0.5rem]">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-[1.25rem] py-[0.75rem] rounded-full text-[0.8rem] font-bold uppercase tracking-[0.1em] transition-all duration-300 border ${
                    activeCategory === category
                      ? 'bg-white/10 border-white text-white'
                      : 'border-white/10 text-white/50 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </RevealSection>

          {/* Grid */}
          {filteredGroups.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]"
            >
              <AnimatePresence mode="popLayout">
                {filteredGroups.map((group, idx) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                    key={group.id} 
                    className="bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.15)] hover:border-accent/40 transition-all duration-500 group flex flex-col h-full rounded-[1.5rem] overflow-hidden"
                  >
                    
                    {/* Card Header (Image) */}
                    <div className="relative h-[15rem] overflow-hidden">
                      <Image
                        src={group.image}
                        alt={group.name}
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,11,20,1)] via-[rgba(5,11,20,0.4)] to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                      <div className="absolute top-[1.25rem] right-[1.25rem] bg-accent/90 backdrop-blur-sm text-bg-dark font-bold text-[0.7rem] uppercase tracking-[0.1em] px-[0.75rem] py-[0.4rem] rounded-full shadow-md">
                        {group.category}
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-[2.5rem] flex flex-col flex-grow relative -mt-[2rem] z-10">
                      {/* Decorative accent bar */}
                      <div className="w-[3rem] h-[0.2rem] bg-accent mb-[1.5rem] rounded-full" />

                      <h3 className="font-display text-[1.5rem] font-bold text-white mb-[1rem] group-hover:text-accent transition-colors leading-tight">
                        {group.name}
                      </h3>

                      <p className="text-[0.95rem] text-white/60 leading-relaxed mb-[2rem] flex-grow line-clamp-3">
                        {group.description}
                      </p>

                      <Link href={`/groups/${group.slug}`} className="w-full btn btn--outline border-white/20 text-white hover:bg-accent hover:border-accent hover:text-bg-dark mt-auto uppercase tracking-[0.1em] text-[0.8rem] font-bold">
                        View Details
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <RevealSection className="bg-white/[0.03] backdrop-blur-md p-[6rem] text-center border border-white/10 rounded-[1.5rem]">
              <h3 className="font-display text-[1.8rem] font-bold text-white mb-[1rem]">No Groups Found</h3>
              <p className="text-[1.1rem] text-white/60 mb-[2rem] max-w-[30rem] mx-auto">Try adjusting your filters to find a group that fits your schedule.</p>
              <button 
                onClick={() => { setActiveCategory('All'); setActiveType('All'); }}
                className="btn btn--primary px-[3rem]"
              >
                Clear Filters
              </button>
            </RevealSection>
          )}

        </div>
      </section>
    </div>
  );
}
