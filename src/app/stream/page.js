'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PlayIcon, GiveIcon, PrayerIcon, ChurchIcon } from '@/components/layout/Icons';

export default function StreamPage() {
  const [activeTab, setActiveTab] = useState('chat'); // 'chat' or 'notes'

  return (
    <div className="min-h-[100vh] bg-[#0a0a0a] flex flex-col relative overflow-hidden">
      {/* Background with spotlight lighting */}
      <div className="absolute inset-0 z-0">
        
          <Image
            src="/images/backgrounds/watch-bg.jpg"
            alt="Background"
            fill
            priority
            className="object-cover object-center opacity-40"
          />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#0a0a0a]/95 to-[#0a0a0a] z-1" />
        <div className="absolute top-0 left-[-10%] w-[50vw] h-[50vw] bg-accent/10 rounded-full blur-[150px] pointer-events-none z-1" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-primary/20 rounded-full blur-[120px] pointer-events-none z-1" />
      </div>

      <section className="relative z-10 min-h-[90vh] pt-[6rem] pb-[3rem] flex flex-col items-center justify-center flex-grow">
        <div className="w-full max-w-[95rem] px-[1.5rem] md:px-[3rem] flex flex-col flex-grow">
          
          {/* Header Area */}
          <div className="mb-[2rem] animate-[fadeInDown_0.6s_ease-out]">
            <div className="flex items-center gap-[1rem] flex-wrap mb-[0.75rem]">
              <span className="inline-flex items-center gap-[0.5rem] bg-[#e63946] text-white font-bold px-[0.75rem] py-[0.35rem] uppercase tracking-[0.1em] text-[0.7rem] shadow-[0_0_15px_rgba(230,57,70,0.6)] rounded-full backdrop-blur-sm">
                <span className="w-[0.4rem] h-[0.4rem] bg-white rounded-full animate-pulse" />
                Live Now
              </span>
              {/* Sub-heading hidden per user request */}
            </div>
            <h1 className="font-display text-white text-[clamp(1.8rem,3.5vw,2.5rem)] font-extrabold leading-[1.2] mb-[0.25rem]">
              Anointed Word Ministries Global Broadcast
            </h1>
            <p className="text-[1rem] text-white/70">
              Apostle Joyce Cofield • Reconciling lives in Christ
            </p>
          </div>

          {/* Main Content Layout */}
          <div className="flex flex-col xl:flex-row gap-[2rem] items-stretch flex-grow animate-[fadeInUp_0.8s_ease-out]">
            
            {/* Video Player Column */}
            <div className="flex-grow flex flex-col">
              <div className="w-full aspect-video bg-black shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 flex flex-col items-center justify-center group relative overflow-hidden cursor-pointer rounded-[1rem]">
                
                {/* Fake Video Thumbnail / Overlay */}
                <Image
                  src="/images/backgrounds/watch-bg.jpg"
                  alt="Stream Thumbnail"
                  fill
                  className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.9)] via-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.4)] z-1" />

                <div className="relative z-2 flex flex-col items-center justify-center">
                   <div className="w-[5rem] h-[5rem] bg-accent/90 backdrop-blur-sm flex items-center justify-center shadow-gold transition-transform duration-350 group-hover:scale-110 mb-[1.5rem] rounded-full">
                     <PlayIcon className="w-[2rem] h-[2rem] text-bg-dark fill-bg-dark ml-[0.3rem]" />
                   </div>
                   <p className="text-[1rem] font-bold text-white tracking-[0.1em] uppercase shadow-sm">Click to Unmute</p>
                </div>

                {/* Fake Player Controls */}
                <div className="absolute bottom-0 left-0 right-0 p-[1.5rem] z-2 flex items-center justify-between bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-[1rem]">
                    <PlayIcon className="w-[1.2rem] h-[1.2rem] text-white fill-white cursor-pointer hover:text-accent" />
                    <span className="text-white text-[0.8rem] font-bold tracking-[0.05em]">LIVE</span>
                  </div>
                  <div className="flex items-center gap-[1rem]">
                    <div className="w-[1rem] h-[1rem] border-[0.1rem] border-white cursor-pointer hover:border-accent" />
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Column (Chat / Notes) — Glassmorphism */}
            <div className="w-full xl:w-[28rem] bg-white/[0.03] backdrop-blur-xl text-white shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 flex flex-col h-[600px] xl:h-auto rounded-[1rem] overflow-hidden">
              
              {/* Tabs */}
              <div className="flex border-b border-white/10 bg-white/5">
                <button
                  className={`flex-1 py-[1.25rem] text-[0.85rem] font-bold uppercase tracking-[0.1em] transition-colors duration-200 border-b-[0.1875rem] ${activeTab === 'chat' ? 'text-accent border-accent bg-white/5' : 'text-white/50 border-transparent hover:text-white hover:bg-white/[0.02]'}`}
                  onClick={() => setActiveTab('chat')}
                >
                  Live Chat
                </button>
                <button
                  className={`flex-1 py-[1.25rem] text-[0.85rem] font-bold uppercase tracking-[0.1em] transition-colors duration-200 border-b-[0.1875rem] ${activeTab === 'notes' ? 'text-accent border-accent bg-white/5' : 'text-white/50 border-transparent hover:text-white hover:bg-white/[0.02]'}`}
                  onClick={() => setActiveTab('notes')}
                >
                  Sermon Notes
                </button>
              </div>

              {/* Tab Content */}
              <div className="flex-grow flex flex-col overflow-hidden relative">
                {activeTab === 'chat' ? (
                  <>
                    {/* Chat Messages */}
                    <div className="flex-grow p-[1.5rem] overflow-y-auto flex flex-col gap-[1.25rem]">
                      <div className="text-center mb-[1rem] sticky top-0 z-10 pb-[0.5rem]">
                        {/* Sub-heading hidden per user request */}
                      </div>
                      
                      {/* Fake Messages */}
                      {[
                        { name: "Sarah M.", time: "11:02 AM", text: "Good morning church family! 🙏" },
                        { name: "David K.", time: "11:03 AM", text: "Tuning in from New Jersey. God is good!" },
                        { name: "AWM Moderator", time: "11:05 AM", text: "Welcome everyone! Please share this stream with your friends and family.", isMod: true },
                        { name: "Grace T.", time: "11:06 AM", text: "Amen!" }
                      ].map((msg, i) => (
                        <div key={i} className="flex gap-[1rem] text-[0.95rem]">
                          <div className={`w-[2.5rem] h-[2.5rem] rounded-full flex items-center justify-center shrink-0 font-bold text-white text-[1rem] shadow-md ${msg.isMod ? 'bg-primary border border-primary-light' : 'bg-white/10 border border-white/20'}`}>
                            {msg.name.charAt(0)}
                          </div>
                          <div className="flex flex-col">
                            <div className="flex items-baseline gap-[0.5rem]">
                              <span className={`font-bold ${msg.isMod ? 'text-accent' : 'text-white'}`}>{msg.name}</span>
                              <span className="text-[0.7rem] text-white/40">{msg.time}</span>
                            </div>
                            <p className="text-white/80 leading-snug mt-[0.25rem]">{msg.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Chat Input */}
                    <div className="p-[1.25rem] border-t border-white/10 bg-white/5 backdrop-blur-md">
                      <div className="flex items-center gap-[0.75rem]">
                        <input type="text" placeholder="Join the conversation..." className="form-input flex-grow py-[0.75rem] text-[0.95rem] bg-black/40 border-white/20 text-white placeholder-white/40 rounded-full px-[1.5rem] focus:border-accent" />
                        <button className="bg-accent text-bg-dark p-[0.75rem_1.5rem] font-bold text-[0.85rem] uppercase tracking-[0.1em] hover:bg-white transition-colors rounded-full shadow-[0_5px_15px_rgba(212,175,55,0.3)]">
                          Send
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex-grow p-[2rem] overflow-y-auto">
                    <h3 className="font-display font-bold text-[1.4rem] text-white mb-[1.5rem]">Today&apos;s Scriptures</h3>
                    <ul className="flex flex-col gap-[1.5rem] text-[1rem] text-white/70">
                      <li className="border-l-[0.2rem] border-accent pl-[1.25rem] bg-white/[0.02] py-[0.5rem] rounded-r-[0.5rem]">
                        {/* Heading removed */}
                        "And if the Spirit of him who raised Jesus from the dead is living in you..."
                      </li>
                      <li className="border-l-[0.2rem] border-accent pl-[1.25rem] bg-white/[0.02] py-[0.5rem] rounded-r-[0.5rem]">
                        {/* Heading removed */}
                        "This means that anyone who belongs to Christ has become a new person. The old life is gone; a new life has begun!"
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Give & Connect Banner Below Stream — Dark Glass */}
      <section className="relative z-10 bg-white/[0.03] backdrop-blur-xl border-t border-white/10 py-[2.5rem]">
        <div className="container max-w-[90rem] flex flex-wrap justify-center gap-[2rem] md:gap-[4rem] px-[2rem]">
          <a href="/give" className="flex items-center gap-[1rem] text-white/70 hover:text-white transition-colors group">
            <div className="w-[3.5rem] h-[3.5rem] bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
              <GiveIcon className="w-[1.4rem] h-[1.4rem] text-accent group-hover:scale-110 transition-transform" />
            </div>
            <div>
              {/* Heading removed */}
              <span className="block font-bold text-[1.1rem]">Give Online</span>
            </div>
          </a>
          <a href="/connect" className="flex items-center gap-[1rem] text-white/70 hover:text-white transition-colors group">
            <div className="w-[3.5rem] h-[3.5rem] bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
              <PrayerIcon className="w-[1.4rem] h-[1.4rem] text-accent group-hover:scale-110 transition-transform" />
            </div>
            <div>
              {/* Heading removed */}
              <span className="block font-bold text-[1.1rem]">Request Prayer</span>
            </div>
          </a>
          <a href="/visit" className="flex items-center gap-[1rem] text-white/70 hover:text-white transition-colors group">
            <div className="w-[3.5rem] h-[3.5rem] bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
              <ChurchIcon className="w-[1.4rem] h-[1.4rem] text-accent group-hover:scale-110 transition-transform" />
            </div>
            <div>
              {/* Heading removed */}
              <span className="block font-bold text-[1.1rem]">Plan a Visit</span>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
