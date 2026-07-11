'use client';

import { useMemo, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import groups from '@/data/groups.json';
import { LocationIcon, TimeIcon, CheckIcon, CalendarIcon } from '@/components/layout/Icons';

export default function MinistryDetail({ params }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  // Use React's useMemo to find the group matching the URL slug
  const group = useMemo(() => {
    return groups.find(g => g.slug === slug);
  }, [slug]);

  // Hardcoded past events for now (ready to be swapped with DB data later)
  const pastEvents = [
    {
      id: 1,
      title: 'Spring Women\'s Conference',
      date: 'March 15, 2026',
      image: '/images/gallery/church-2.jpg',
      description: 'A weekend of worship, fellowship, and powerful teaching focused on walking in divine purpose.'
    },
    {
      id: 2,
      title: 'Community Outreach Breakfast',
      date: 'May 8, 2026',
      image: '/images/gallery/church-1.jpg',
      description: 'Serving breakfast to our local community while sharing the love of Christ.'
    },
    {
      id: 3,
      title: 'Prayer & Worship Night',
      date: 'June 12, 2026',
      image: '/images/gallery/church-4.jpg',
      description: 'An extended evening of corporate prayer and intimate worship.'
    }
  ];

  if (!group) {
    return (
      <div className="min-h-[100vh] flex flex-col items-center justify-center bg-bg-light">
        <h1 className="font-display text-[2rem] font-bold text-primary mb-[1rem]">Ministry Not Found</h1>
        <Link href="/groups" className="btn btn--outline bg-primary text-white">Back to Ministries</Link>
      </div>
    );
  }

  return (
    <div className="min-h-[100vh] bg-[#f8f8f7]">
      {/* Dynamic Hero Section */}
      <section className="relative h-[60vh] min-h-[30rem] flex flex-col justify-end overflow-hidden pb-[4rem] px-[1.5rem]">
        <div className="absolute inset-0 z-0">
          <Image
            src={group.image}
            alt={group.name}
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
            className="opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,14,42,1)] via-[rgba(10,30,92,0.7)] to-transparent z-1" />
        </div>
        
        <div className="container relative z-2 text-white max-w-[80rem]">
          <Link href="/groups" className="inline-flex items-center text-accent hover:text-white font-bold text-[0.85rem] uppercase tracking-[0.1em] mb-[2rem] transition-colors">
            <svg className="w-[1rem] h-[1rem] mr-[0.5rem]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to All Ministries
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-[2rem]">
            <div>
              {/* Sub-heading hidden per user request */}
              <h1 className="font-display text-[clamp(2.5rem,6vw,4rem)] font-extrabold leading-[1.1] text-white">
                {group.name}
              </h1>
            </div>
            <div className="flex gap-[1rem]">
              <a href="#join" className="btn btn--primary shadow-gold">Join Ministry</a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-[4rem] px-[1.5rem]">
        <div className="container max-w-[80rem]">
          <div className="grid lg:grid-cols-12 gap-[4rem]">
            
            {/* Left Column: Details */}
            <div className="lg:col-span-8">
              <div className="bg-white p-[3rem] shadow-sm border border-[#e8e6e0] rounded-[0.5rem] mb-[4rem]">
                <h2 className="font-display text-[2rem] font-bold text-primary mb-[1.5rem]">About This Ministry</h2>
                <p className="text-[1.1rem] text-text-secondary leading-[1.8] mb-[2rem]">
                  {group.description}
                </p>
                <div className="p-[2rem] bg-bg-light border border-[#e8e6e0]/50 rounded-[0.5rem]">
                  <h3 className="font-bold text-primary mb-[1rem]">Meeting Details</h3>
                  <div className="grid sm:grid-cols-2 gap-[1.5rem]">
                    <div className="flex items-start gap-[1rem]">
                      <div className="mt-[0.25rem]"><TimeIcon className="w-[1.5rem] h-[1.5rem] text-accent" /></div>
                      <div>
                        <p className="font-bold text-primary text-[0.9rem]">When</p>
                        <p className="text-text-secondary">{group.day} at {group.time}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-[1rem]">
                      <div className="mt-[0.25rem]"><LocationIcon className="w-[1.5rem] h-[1.5rem] text-accent" /></div>
                      <div>
                        <p className="font-bold text-primary text-[0.9rem]">Where</p>
                        <p className="text-text-secondary">{group.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Past Events Section (Ready for DB) */}
              <div className="mb-[4rem]">
                <div className="flex items-center justify-between mb-[2rem]">
                  <h2 className="font-display text-[2rem] font-bold text-primary">Past Events & Gatherings</h2>
                  <span className="text-[0.8rem] text-text-muted font-bold uppercase tracking-[0.1em] border border-[#e8e6e0] px-[0.75rem] py-[0.25rem] rounded-[0.25rem] bg-white">
                    Database Ready
                  </span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-[2rem]">
                  {pastEvents.map((event, idx) => (
                    <motion.div 
                      key={event.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="bg-white rounded-[0.5rem] border border-[#e8e6e0] overflow-hidden group shadow-sm hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="relative h-[12rem] overflow-hidden">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute top-[1rem] left-[1rem] bg-bg-dark/90 text-white font-bold text-[0.7rem] uppercase tracking-[0.1em] px-[0.75rem] py-[0.25rem] backdrop-blur-sm flex items-center gap-[0.5rem] rounded-[0.25rem]">
                          <CalendarIcon className="w-[0.9rem] h-[0.9rem]" /> {event.date}
                        </div>
                      </div>
                      <div className="p-[2rem]">
                        <h3 className="font-display font-bold text-[1.25rem] text-primary mb-[0.5rem]">{event.title}</h3>
                        <p className="text-[0.9rem] text-text-secondary leading-[1.6]">{event.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar / Join Form */}
            <div className="lg:col-span-4" id="join">
              <div className="bg-primary p-[2.5rem] rounded-[0.5rem] shadow-xl sticky top-[8rem]">
                <h3 className="font-display font-bold text-[1.5rem] text-white mb-[0.5rem]">Get Connected</h3>
                <p className="text-white/70 text-[0.95rem] mb-[2rem]">
                  Fill out the form below to connect with the {group.name} leadership team.
                </p>
                
                <form className="flex flex-col gap-[1.5rem]" onSubmit={(e) => e.preventDefault()}>
                  <div className="flex flex-col gap-[0.5rem]">
                    <label className="text-[0.8rem] font-bold text-white uppercase tracking-[0.05em]">Your Name</label>
                    <input type="text" className="w-full bg-white/10 border border-white/20 text-white p-[0.8rem] rounded-[0.25rem] outline-none focus:border-accent transition-colors" placeholder="Jane Doe" required />
                  </div>
                  <div className="flex flex-col gap-[0.5rem]">
                    <label className="text-[0.8rem] font-bold text-white uppercase tracking-[0.05em]">Email Address</label>
                    <input type="email" className="w-full bg-white/10 border border-white/20 text-white p-[0.8rem] rounded-[0.25rem] outline-none focus:border-accent transition-colors" placeholder="jane@example.com" required />
                  </div>
                  <div className="flex flex-col gap-[0.5rem]">
                    <label className="text-[0.8rem] font-bold text-white uppercase tracking-[0.05em]">Message (Optional)</label>
                    <textarea rows="3" className="w-full bg-white/10 border border-white/20 text-white p-[0.8rem] rounded-[0.25rem] outline-none focus:border-accent transition-colors resize-none" placeholder="I'd love to join..." />
                  </div>
                  <button type="submit" className="btn btn--outline hover:bg-accent hover:border-accent hover:text-bg-dark w-full mt-[0.5rem]">
                    Send Message
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
