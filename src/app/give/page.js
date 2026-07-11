'use client';

import { useState } from 'react';
import Image from 'next/image';
import siteConfig from '@/lib/config';
import useScrollReveal from '@/hooks/useScrollReveal';
import { ChurchIcon, PhoneIcon, ZoomIcon } from '@/components/layout/Icons';

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

// Premium Credit Card Micro-Chip
const CardChip = () => (
  <div className="w-[2.25rem] h-[1.8rem] bg-gradient-to-br from-[#f5d68d] via-[#d4a843] to-[#9c7822] p-[0.125rem] relative shadow-inner shrink-0 rounded-[0.2rem]">
    <div className="absolute inset-[0.25rem] border-[0.0625rem] border-[rgba(0,0,0,0.15)]" />
    <div className="absolute top-1/2 left-0 right-0 h-[0.0625rem] bg-[rgba(0,0,0,0.2)]" />
    <div className="absolute left-1/2 top-0 bottom-0 w-[0.0625rem] bg-[rgba(0,0,0,0.2)]" />
  </div>
);

function CopyButton({ text, label }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <button
      className={`px-[1.2rem] py-[0.55rem] text-[0.8rem] font-bold uppercase tracking-[0.05em] cursor-pointer transition-all duration-250 rounded-[0.25rem] ${
        copied
          ? 'bg-[#2ecc71] text-white shadow-[#2ecc71]/20'
          : 'bg-white text-primary-mid hover:bg-accent hover:text-primary'
      }`}
      onClick={handleCopy}
    >
      {copied ? '✓ Copied' : `Copy ${label}`}
    </button>
  );
}

export default function GivePage() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "Are my donations secure?",
      a: "Yes, Zelle and CashApp utilize standard encryption and security protocols provided by your bank and financial institutions to ensure transactions are safe."
    },
    {
      q: "Will I receive a giving statement?",
      a: "Yes. For records of your contributions via Zelle or CashApp, please make sure your full name and email are included in the payment note, or contact the church office so we can link your contributions to your profile."
    },
    {
      q: "Can I set up recurring giving?",
      a: "Zelle does not support recurring schedules directly for all banks, but many banks allow recurring transfers. CashApp has options to schedule auto-deposits to your balance, which you can then send to the church."
    },
    {
      q: "Who do I contact if I have giving questions?",
      a: "Please feel free to email our financial department at anointedwordministries@yahoo.com or call the church office at (302) 332-0525."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-[100vh]">
      {/* Cinematic Hero */}
      <section className="relative h-[60vh] min-h-[28rem] flex items-center justify-center overflow-hidden text-center">
        {/* Cinematic dark gradient background */}
        <div className="absolute inset-0 z-0">
          
          <Image
            src="/images/backgrounds/give-bg.jpg"
            alt="Background"
            fill
            priority
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#0a0a0a]/95 to-[#0a0a0a]" />
        </div>
        <div className="relative z-10 text-white max-w-[50rem] px-[2rem] animate-[fadeInUp_0.8s_cubic-bezier(0.4,0,0.2,1)]">
          {/* Sub-heading hidden per user request */}
          <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-black mb-[1rem] leading-none">Supporting the Mission</h1>
          <p className="text-[clamp(1rem,2vw,1.25rem)] text-white/80">
            Your giving enables us to reconcile families, reach the lost, and minister the Word of God locally and globally.
          </p>
        </div>
      </section>

      {/* Scripture & Heart — Overlaps Hero */}
      <section className="relative z-20 -mt-[4rem] rounded-t-[2.5rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] bg-white py-[5rem]">
        <RevealSection className="container max-w-[50rem] text-center px-[2rem]">
          <blockquote className="font-display italic leading-[1.8] text-text-secondary text-[clamp(1.1rem,2vw,1.35rem)]">
            &ldquo;Honor the Lord with your wealth, with the firstfruits of all your crops; then your barns will be filled to overflowing, and your vats will brim over with new wine.&rdquo;
          </blockquote>
          {/* Heading removed */}
        </RevealSection>
      </section>

      {/* Giving Methods — Dark Glass */}
      <section className="bg-[#0a0a0a] py-[8rem] relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container max-w-[85rem] relative z-10 px-[2rem]">
          <RevealSection className="text-center mb-[4rem]">
            {/* Heading removed */}
            <h3 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-black text-white uppercase tracking-tighter leading-[1.1] mb-[1.5rem]">
              Ways to Give
            </h3>
            <p className="text-[1.1rem] text-white/70 max-w-[40rem] mx-auto font-light">
              Select your preferred secure payment method below.
            </p>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[2.5rem] max-w-[28.125rem] md:max-w-none mx-auto items-center">
            
            {/* ZELLE */}
            <RevealSection delay={0}>
              <div className="relative w-full aspect-[1.586/1] bg-gradient-to-br from-[#0c2266] to-[#040e2d] text-white p-[1.5rem] rounded-[1rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 flex flex-col justify-between overflow-hidden hover:-translate-y-[0.375rem] hover:border-accent/30 hover:shadow-[0_30px_60px_rgba(212,175,55,0.1)] transition-all duration-500 group">
                <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,255,255,0.05)_0%,transparent_60%)] pointer-events-none" />
                <div className="flex justify-between items-start z-1">
                  <div>
                    <span className="text-[0.6rem] font-bold uppercase tracking-[0.15em] opacity-60">Zelle Account</span>
                    <h4 className="text-[1rem] font-bold text-accent tracking-[0.02em] mt-[0.125rem]">Anointed Word Ministries</h4>
                  </div>
                  <CardChip />
                </div>
                <div className="z-1">
                  <span className="text-[0.6rem] font-bold uppercase tracking-[0.15em] opacity-60">Zelle Mobile / Phone</span>
                  <p className="text-[1.25rem] font-mono font-bold tracking-[0.05em] text-white mt-[0.125rem] max-sm:text-[1.1rem]">
                    {siteConfig.giving.zelle.number}
                  </p>
                </div>
                <div className="flex justify-between items-center z-1">
                  <span className="text-[0.75rem] font-semibold text-white/60">Wilmington, DE</span>
                  <CopyButton text={siteConfig.giving.zelle.number} label="Zelle Number" />
                </div>
              </div>
            </RevealSection>

            {/* CASHAPP */}
            <RevealSection delay={150}>
              <div className="relative w-full aspect-[1.586/1] bg-gradient-to-br from-[#0c6629] to-[#042d10] text-white p-[1.5rem] rounded-[1rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 flex flex-col justify-between overflow-hidden hover:-translate-y-[0.375rem] hover:border-accent/30 hover:shadow-[0_30px_60px_rgba(212,175,55,0.1)] transition-all duration-500 group">
                <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,255,255,0.05)_0%,transparent_60%)] pointer-events-none" />
                <div className="flex justify-between items-start z-1">
                  <div>
                    <span className="text-[0.6rem] font-bold uppercase tracking-[0.15em] opacity-60">CashApp Account</span>
                    <h4 className="text-[1rem] font-bold text-accent tracking-[0.02em] mt-[0.125rem]">Anointed Word</h4>
                  </div>
                  <CardChip />
                </div>
                <div className="z-1">
                  <span className="text-[0.6rem] font-bold uppercase tracking-[0.15em] opacity-60">CashTag ID</span>
                  <p className="text-[1.25rem] font-mono font-bold tracking-[0.05em] text-white mt-[0.125rem] max-sm:text-[1.1rem]">
                    {siteConfig.giving.cashapp}
                  </p>
                </div>
                <div className="flex justify-between items-center z-1">
                  <span className="text-[0.75rem] font-semibold text-white/60">Wilmington, DE</span>
                  <CopyButton text={siteConfig.giving.cashapp} label="CashTag" />
                </div>
              </div>
            </RevealSection>

            {/* IN PERSON */}
            <RevealSection delay={300}>
              <div className="relative w-full aspect-[1.586/1] bg-gradient-to-br from-[#4b3513] to-[#201504] text-white p-[1.5rem] rounded-[1rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 flex flex-col justify-between overflow-hidden hover:-translate-y-[0.375rem] hover:border-accent/30 hover:shadow-[0_30px_60px_rgba(212,175,55,0.1)] transition-all duration-500 group">
                <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,255,255,0.05)_0%,transparent_60%)] pointer-events-none" />
                <div className="flex justify-between items-start z-1">
                  <div>
                    <span className="text-[0.6rem] font-bold uppercase tracking-[0.15em] opacity-60">In Person</span>
                    <h4 className="text-[1rem] font-bold text-accent tracking-[0.02em] mt-[0.125rem]">Worship Offering</h4>
                  </div>
                  <ChurchIcon className="w-[1.8rem] h-[1.8rem] text-accent shrink-0" />
                </div>
                <div className="z-1">
                  <span className="text-[0.6rem] font-bold uppercase tracking-[0.15em] opacity-60">Location / Address</span>
                  <p className="text-[0.95rem] font-bold tracking-[0.02em] text-white mt-[0.125rem] leading-snug">
                    4727 Concord Pike,<br />Wilmington, DE 19803
                  </p>
                </div>
                <div className="flex justify-between items-center z-1">
                  <span className="text-[0.75rem] font-semibold text-white/60">Wilmington, DE</span>
                  <a
                    href="https://maps.google.com/?q=4727+Concord+Pike,+Wilmington,+DE+19803"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-[1.2rem] py-[0.55rem] text-[0.8rem] font-bold uppercase tracking-[0.05em] bg-white text-[#4b3513] hover:bg-accent hover:text-primary transition-all duration-250 text-center rounded-[0.25rem]"
                  >
                    Directions
                  </a>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Your Impact — Glass Cards */}
      <section className="bg-[#050b14] py-[8rem] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container max-w-[85rem] relative z-10 px-[2rem]">
          <RevealSection className="text-center mb-[4rem]">
            {/* Heading removed */}
            <h3 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-black text-white uppercase tracking-tighter leading-[1.1] mb-[1.5rem]">
              Where Your Giving Goes
            </h3>
            <p className="text-[1.1rem] text-white/70 max-w-[45rem] mx-auto font-light">
              When you give at Anointed Word Ministries, your seeds go directly to work inside and outside the church walls.
            </p>
          </RevealSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1.5rem]">
            {[
              { title: 'Local Outreach', desc: 'Feeding the hungry and distributing resources to families in Delaware.', icon: '❤️' },
              { title: 'Global Missions', desc: 'Supporting missionaries and planting churches across the globe.', icon: '🌍' },
              { title: 'Next Gen', desc: 'Investing in our youth and kids ministry to raise up the next generation of leaders.', icon: '👥' },
              { title: 'Media & Broadcast', desc: 'Funding tools to stream services and spread the Gospel globally.', icon: '📡' },
            ].map((item, idx) => (
              <RevealSection key={item.title} delay={idx * 150}>
                <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[1rem] p-[2rem] hover:bg-white/[0.06] hover:border-accent/30 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(212,175,55,0.1)] transition-all duration-500 h-full">
                  <span className="text-[2rem] mb-[1rem] block">{item.icon}</span>
                  <h4 className="font-display text-white text-[1.3rem] font-bold mb-[0.5rem]">{item.title}</h4>
                  <p className="text-[0.9rem] text-white/60 leading-[1.6]">{item.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — Light section */}
      <section className="bg-[#f8f8f7] py-[6rem]">
        <RevealSection className="container max-w-[50rem] px-[2rem]">
          <div className="text-center mb-[3rem]">
            {/* Heading removed */}
            <h3 className="font-display text-[clamp(2rem,4vw,3rem)] font-black text-primary mb-[1rem]">Giving FAQ</h3>
          </div>

          <div className="flex flex-col gap-[0.5rem]">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="bg-white border border-[#e8e6e0] rounded-[0.75rem] overflow-hidden transition-all duration-300 hover:border-accent/30">
                  <button className="w-full flex justify-between items-center p-[1.5rem] text-left font-semibold text-[1.05rem] text-primary bg-none border-none cursor-pointer" onClick={() => toggleFaq(index)}>
                    <span>{faq.q}</span>
                    <span className="text-[1.4rem] text-accent transition-transform duration-300" style={{ transform: isOpen ? 'rotate(45deg)' : 'none' }}>+</span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-350 ease-in-out ${
                    isOpen ? 'max-h-[12.5rem] px-[1.5rem] pb-[1.5rem]' : 'max-h-0'
                  }`}>
                    <p className="text-[0.95rem] leading-[1.7] text-text-secondary">{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </RevealSection>
      </section>
    </div>
  );
}
