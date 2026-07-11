'use client';

import Image from 'next/image';
import useScrollReveal from '@/hooks/useScrollReveal';
import { BookIcon, CheckIcon, CrossIcon, DoveIcon } from '@/components/layout/Icons';

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

export default function AboutPage() {
  const beliefs = [
    {
      title: 'The Holy Trinity',
      desc: 'We believe in one God, eternally existent in three persons: Father, Son, and Holy Spirit.',
      icon: <DoveIcon className="w-[1.5rem] h-[1.5rem] text-accent" />
    },
    {
      title: 'Salvation',
      desc: 'We believe that salvation is a gift from God, received through faith in Jesus Christ and His redemptive work on the cross.',
      icon: <CrossIcon className="w-[1.5rem] h-[1.5rem] text-accent" />
    },
    {
      title: 'Authority of Scripture',
      desc: 'We believe the Bible is the inspired, infallible, and authoritative Word of God, serving as our ultimate guide for faith and living.',
      icon: <BookIcon className="w-[1.5rem] h-[1.5rem] text-accent" />
    },
    {
      title: 'The Holy Spirit',
      desc: 'We believe in the present ministry of the Holy Spirit, whose indwelling enables the Christian to live a godly life and operate in spiritual gifts.',
      icon: <DoveIcon className="w-[1.5rem] h-[1.5rem] text-accent" />
    }
  ];

  return (
    <div className="min-h-[100vh]">
      {/* Cinematic Hero Section */}
      <section className="relative h-[70vh] min-h-[35rem] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          
          <Image
            src="/images/backgrounds/about-bg.png"
            alt="Background"
            fill
            priority
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[rgba(6,14,42,0.85)] to-[#0a0a0a]" />
        </div>
        
        <div className="relative z-10 text-white w-full max-w-[50rem] px-[2rem] text-center pt-[5rem]">
          {/* Sub-heading hidden per user request */}
          <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-black mb-[1.5rem] leading-[1.1] animate-[fadeInUp_0.8s_ease-out]">
            A Place of Restoration
          </h1>
          <p className="text-[1.15rem] text-white/80 leading-[1.7] max-w-[40rem] mx-auto animate-[fadeInUp_1s_ease-out]">
            Discover the heart, vision, and beliefs that drive everything we do at Anointed Word Ministries.
          </p>
        </div>
      </section>

      {/* Vision & Mission Section — Overlaps Hero */}
      <section className="relative z-20 -mt-[4rem] rounded-t-[2.5rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] bg-[#f8f8f7] py-[6rem] lg:py-[8rem]">
        <div className="container max-w-[75rem] px-[2rem]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-[4rem] md:gap-[6rem]">
            
            {/* Image Side */}
            <RevealSection className="w-full md:w-5/12">
              <div className="relative aspect-[3/4] max-w-[28rem] mx-auto rounded-[1.5rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/leadership/pastor-cofield.jpg"
                  alt="Church congregation worshiping"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent mix-blend-multiply" />
              </div>
            </RevealSection>

            {/* Content Side */}
            <RevealSection className="w-full md:w-7/12" delay={200}>
              {/* Sub-heading hidden per user request */}
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-black text-primary mb-[1.5rem] leading-tight">
                Reconciling Lives to Christ
              </h2>
              <div className="text-[1.05rem] text-text-secondary leading-[1.8] flex flex-col gap-[1.5rem]">
                <p>
                  At Anointed Word Ministries, our vision is simple yet profound: <strong className="text-primary font-bold">Reconciling individuals and families from dead places to resurrected life in Christ through the power of the Holy Spirit and ministering of the Word of God.</strong>
                </p>
                <p>
                  We believe that no matter where you are or what you've been through, God has a purpose for your life. We are a family of believers committed to seeing that purpose fulfilled.
                </p>
                <div className="mt-[1rem] flex flex-col gap-[0.75rem]">
                  {['Systematic Biblical Teaching', 'Fervent Corporate Prayer', 'Authentic Community'].map((item) => (
                    <div key={item} className="flex items-center gap-[1rem]">
                      <div className="w-[2rem] h-[2rem] rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                        <CheckIcon className="w-[1rem] h-[1rem] text-accent" />
                      </div>
                      <span className="font-semibold text-primary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Core Beliefs Section — Dark with Spotlights */}
      <section className="bg-[#0a0a0a] py-[8rem] relative overflow-hidden">
        {/* Theater Spotlights */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-[-10vw] w-[40vw] h-[40vw] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="container max-w-[85rem] relative z-10 px-[2rem]">
          <RevealSection className="text-center mb-[4rem]">
            {/* Heading removed */}
            <h3 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-black text-white uppercase tracking-tighter leading-[1.1] mb-[1.5rem]">
              What We Believe
            </h3>
            <p className="text-[1.1rem] text-white/70 max-w-[40rem] mx-auto font-light">
              Our core beliefs are the foundation of our ministry and guide how we live, worship, and serve.
            </p>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1.5rem]">
            {beliefs.map((belief, idx) => (
              <RevealSection key={belief.title} delay={idx * 150}>
                <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[1rem] p-[2.5rem] hover:bg-white/[0.06] hover:border-accent/30 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(212,175,55,0.1)] transition-all duration-500 h-full">
                  <div className="w-[4rem] h-[4rem] bg-white/5 rounded-full flex items-center justify-center mb-[1.5rem] border border-white/10">
                    {belief.icon}
                  </div>
                  <h3 className="font-display text-[1.3rem] font-bold text-white mb-[1rem]">{belief.title}</h3>
                  <p className="text-[0.95rem] text-white/60 leading-[1.7]">{belief.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
