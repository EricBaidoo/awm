'use client';

import { useState } from 'react';
import Image from 'next/image';
import sermons from '@/data/sermons.json';
import useScrollReveal from '@/hooks/useScrollReveal';
import { PlayIcon, TimeIcon, CheckIcon } from '@/components/layout/Icons';

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

export default function SermonsPage() {
  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [activeVideo, setActiveVideo] = useState(null);

  // Get all unique tags
  const allTags = ['All', ...new Set(sermons.flatMap((s) => s.tags))];

  // Filter sermons
  const filteredSermons = sermons.filter((sermon) => {
    const matchesSearch = sermon.title.toLowerCase().includes(search.toLowerCase()) ||
                          sermon.speaker.toLowerCase().includes(search.toLowerCase());
    const matchesTag = selectedTag === 'All' || sermon.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const featuredSermon = sermons[0];

  return (
    <div className="min-h-[100vh]">
      {/* Featured Sermon / Hero Video Player */}
      <section className="relative h-[75vh] min-h-[35rem] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          
          <Image
            src="/images/backgrounds/hero-bg.jpg"
            alt="Background"
            fill
            priority
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[rgba(6,14,42,0.85)] to-[#0a0a0a]" />
        </div>
        <div className="relative z-10 text-white w-full max-w-[56.25rem] px-[2rem] text-center pt-[5rem]">
          {/* Sub-heading hidden per user request */}
          <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-black mb-[1rem] leading-[1.1] animate-[fadeInUp_0.8s_ease-out]">
            {featuredSermon.title}
          </h1>
          <p className="text-[1rem] text-accent mb-[1.5rem] font-bold tracking-[0.05em] uppercase animate-[fadeInUp_0.9s_ease-out]">
            By {featuredSermon.speaker} · {new Date(featuredSermon.date + 'T00:00:00').toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </p>
          <p className="text-[1.15rem] text-white/80 leading-[1.7] max-w-[43.75rem] mx-auto mb-[2.5rem] animate-[fadeInUp_1s_ease-out]">
            {featuredSermon.description}
          </p>
          <div className="animate-[fadeInUp_1.1s_ease-out]">
            <button className="btn btn--primary btn--lg shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:scale-105 transition-all duration-300" onClick={() => setActiveVideo(featuredSermon.videoUrl)}>
              <PlayIcon className="w-[1.2rem] h-[1.2rem] fill-bg-dark text-bg-dark ml-[0.125rem]" /> Watch Now
            </button>
          </div>
        </div>
      </section>

      {/* Cinematic Fullscreen Video Player Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center animate-[fadeIn_0.4s_ease-out]">
          <button 
            className="absolute top-[2rem] right-[2rem] text-white hover:text-accent transition-colors z-[101]"
            onClick={() => setActiveVideo(null)}
          >
            <svg className="w-[2.5rem] h-[2.5rem]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="w-full max-w-[70rem] aspect-video bg-black shadow-[0_0_50px_rgba(0,0,0,0.8)] border-[0.0625rem] border-accent/20 animate-[scaleUp_0.5s_cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden group">
            <Image
              src={featuredSermon.thumbnail || "/images/backgrounds/watch-bg.jpg"}
              alt="Video Thumbnail"
              fill
              className="object-cover opacity-50 transition-opacity duration-700 group-hover:opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-1" />
            <div className="relative z-2 h-full flex flex-col items-center justify-center">
              <button className="w-[5.5rem] h-[5.5rem] bg-accent/90 hover:bg-accent flex items-center justify-center shadow-gold transition-transform duration-300 hover:scale-110 rounded-full">
                <PlayIcon className="w-[2.5rem] h-[2.5rem] text-bg-dark fill-bg-dark ml-[0.375rem]" />
              </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-[1.5rem] z-2 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex flex-col">
                <h4 className="font-display font-bold text-white text-[1.2rem]">{featuredSermon.title}</h4>
                <p className="text-white/60 text-[0.85rem]">{featuredSermon.speaker}</p>
              </div>
              <div className="flex items-center gap-[1rem]">
                 <span className="text-white text-[0.8rem] font-medium tracking-[0.1em]">HD</span>
                 <div className="w-[1.2rem] h-[1.2rem] border-[0.1rem] border-white cursor-pointer hover:border-accent" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cinematic Horizontal Rows — Overlaps Hero */}
      <section className="relative z-20 -mt-[4rem] rounded-t-[2.5rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] bg-[#0a0a0a] py-[6rem] px-[2rem] md:px-[4rem] overflow-hidden">
        {/* Spotlight lighting */}
        <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-primary/20 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[20%] left-[-10%] w-[30vw] h-[30vw] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Row 1: Recent Series */}
        <RevealSection className="mb-[6rem]">
          <h2 className="font-display text-[1.8rem] font-bold text-white mb-[2rem] tracking-[0.02em]">Recent Series</h2>
          <div className="flex overflow-x-auto gap-[2rem] pb-[2rem] snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {filteredSermons.slice(0, 6).map((sermon) => (
              <div
                key={sermon.id}
                className="relative snap-start min-w-[22rem] md:min-w-[26rem] shrink-0 aspect-video rounded-[1rem] overflow-hidden cursor-pointer group shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 transition-all duration-500 hover:scale-[1.05] hover:z-20 hover:border-accent/40"
                onClick={() => setActiveVideo(sermon.videoUrl)}
              >
                <Image
                  src={sermon.thumbnail}
                  alt={sermon.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,14,42,0.95)] via-[rgba(6,14,42,0.4)] to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300 z-1" />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-2 delay-100">
                  <div className="w-[3.5rem] h-[3.5rem] bg-accent/90 rounded-full flex items-center justify-center shadow-gold">
                    <PlayIcon className="w-[1.5rem] h-[1.5rem] text-bg-dark fill-bg-dark ml-[0.2rem]" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-[1.5rem] transform translate-y-[2rem] group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-2">
                  <div className="flex items-center gap-[0.5rem] mb-[0.5rem]">
                    {/* Heading removed */}
                    <span className="text-white/80 text-[0.7rem] font-medium tracking-[0.05em]">{new Date(sermon.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <h3 className="font-display font-bold text-white text-[1.25rem] leading-tight mb-[0.25rem]">{sermon.title}</h3>
                  <p className="text-white/60 text-[0.85rem] line-clamp-1">{sermon.description}</p>
                </div>
              </div>
            ))}
          </div>
        </RevealSection>

        {/* Row 2: Guest Speakers */}
        <RevealSection className="mb-[2rem]" delay={200}>
          <h2 className="font-display text-[1.8rem] font-bold text-white mb-[2rem] tracking-[0.02em]">Guest Speakers & Revivals</h2>
          <div className="flex overflow-x-auto gap-[2rem] pb-[2rem] snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {filteredSermons.slice(1, 5).map((sermon) => (
              <div
                key={sermon.id}
                className="relative snap-start min-w-[22rem] md:min-w-[26rem] shrink-0 aspect-video rounded-[1rem] overflow-hidden cursor-pointer group shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 transition-all duration-500 hover:scale-[1.05] hover:z-20 hover:border-accent/40"
                onClick={() => setActiveVideo(sermon.videoUrl)}
              >
                <Image
                  src={sermon.thumbnail}
                  alt={sermon.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,14,42,0.95)] via-[rgba(6,14,42,0.4)] to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300 z-1" />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-2 delay-100">
                  <div className="w-[3.5rem] h-[3.5rem] bg-accent/90 rounded-full flex items-center justify-center shadow-gold">
                    <PlayIcon className="w-[1.5rem] h-[1.5rem] text-bg-dark fill-bg-dark ml-[0.2rem]" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-[1.5rem] transform translate-y-[2rem] group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-2">
                  {/* Heading removed */}
                  <h3 className="font-display font-bold text-white text-[1.25rem] leading-tight mb-[0.25rem]">{sermon.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </RevealSection>
      </section>

      {/* Main Sermon Archive — Glass cards on dark bg */}
      <section className="bg-[#050b14] py-[8rem] relative overflow-hidden">
        {/* Spotlight lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container max-w-[85rem] px-[2rem] relative z-10">
          <RevealSection className="text-center mb-[4rem]">
            {/* Sub-heading hidden per user request */}
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-black text-white mb-[1.5rem] uppercase tracking-tighter leading-[1.1]">All Messages</h2>
            <p className="text-[1.1rem] text-white/70 max-w-[40rem] mx-auto font-light">
              Browse our complete library of past messages. Stream video or search by topics below.
            </p>
          </RevealSection>

          {/* Filter Bar */}
          <RevealSection className="flex flex-col gap-[2rem] mb-[4rem]" delay={150}>
            <div className="relative w-full max-w-[40rem] mx-auto">
              <input
                type="text"
                placeholder="Search by title or speaker..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full text-center bg-white/[0.05] border border-white/20 text-white placeholder-white/40 p-[1rem_2rem] rounded-full focus:outline-none focus:border-accent/50 focus:bg-white/[0.08] transition-all duration-300 text-[1.1rem]"
              />
            </div>
            
            {/* Category Filter Pills */}
            <div className="flex justify-center gap-[0.75rem] flex-wrap max-w-[50rem] mx-auto">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  className={`p-[0.5rem_1.5rem] text-[0.85rem] font-bold uppercase tracking-[0.1em] rounded-full cursor-pointer transition-all duration-300 ease-in-out border ${
                    selectedTag === tag
                      ? 'bg-accent border-accent text-bg-dark shadow-[0_5px_15px_rgba(212,175,55,0.3)]'
                      : 'bg-transparent border-white/20 text-white/70 hover:border-accent hover:text-accent hover:bg-accent/10'
                  }`}
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </RevealSection>

          {/* Sermon Grid */}
          {filteredSermons.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
              {filteredSermons.map((sermon, idx) => (
                <RevealSection key={sermon.id} delay={(idx % 3) * 100}>
                  <div
                    className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[1rem] overflow-hidden shadow-lg cursor-pointer hover:-translate-y-[0.375rem] hover:shadow-[0_20px_50px_rgba(212,175,55,0.1)] hover:border-accent/30 transition-all duration-500 flex flex-col group h-full"
                    onClick={() => setActiveVideo(sermon.videoUrl)}
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={sermon.thumbnail}
                        alt={sermon.title}
                        width={380}
                        height={215}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,14,42,0.8)] to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-300 z-1" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-2">
                        <div className="w-[3.5rem] h-[3.5rem] bg-accent/90 rounded-full flex items-center justify-center shadow-gold transition-transform duration-300 group-hover:scale-110">
                          <PlayIcon className="w-[1.5rem] h-[1.5rem] text-bg-dark fill-bg-dark ml-[0.2rem]" />
                        </div>
                      </div>
                    </div>
                    <div className="p-[2rem] flex flex-col flex-grow gap-[1rem]">
                      <div className="flex justify-between items-center text-[0.8rem] text-white/60 font-medium">
                        <span className="uppercase tracking-[0.05em]">{sermon.speaker}</span>
                        <span className="flex items-center gap-[0.25rem]">
                          <TimeIcon className="w-[1rem] h-[1rem] text-accent" />
                          {new Date(sermon.date + 'T00:00:00').toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                          })}
                        </span>
                      </div>
                      <h3 className="font-display text-[1.4rem] font-bold text-white leading-tight group-hover:text-accent transition-colors duration-300">
                        {sermon.title}
                      </h3>
                      <p className="text-[0.95rem] text-white/70 leading-relaxed line-clamp-2">
                        {sermon.description}
                      </p>
                      <div className="flex gap-[0.5rem] flex-wrap mt-auto pt-[1rem] border-t border-white/10">
                        {sermon.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[0.65rem] font-bold uppercase tracking-[0.1em] px-[0.6rem] py-[0.25rem] bg-white/5 text-accent border border-white/10 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </RevealSection>
              ))}
            </div>
          ) : (
            <RevealSection className="text-center py-[6rem] text-white/70">
              <p className="text-[1.25rem] font-medium mb-[1.5rem]">No sermons found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearch('');
                  setSelectedTag('All');
                }}
                className="btn btn--outline bg-white/5 border-white/20 text-white hover:bg-white hover:text-primary"
              >
                Reset Filters
              </button>
            </RevealSection>
          )}
        </div>
      </section>
    </div>
  );
}
