'use client';

import Image from 'next/image';
import useScrollReveal from '@/hooks/useScrollReveal';

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

export default function LeadershipPage() {
  const team = [
    {
      name: 'Pastor Michelle Davis',
      role: 'Executive Pastor',
      image: '/images/leadership/exec-pastor.png',
    },
    {
      name: 'Minister Sarah Jenkins',
      role: 'Worship Pastor',
      image: '/images/leadership/worship-leader.png',
    },
    {
      name: 'Prophetess Chloe Adams',
      role: 'NextGen Director',
      image: '/images/gallery/church-4.jpg',
    }
  ];

  return (
    <div className="min-h-[100vh]">
      {/* Cinematic Hero */}
      <section className="relative h-[70vh] min-h-[35rem] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          
          <Image
            src="/images/backgrounds/leadership-bg.png"
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
            Guided By Grace
          </h1>
          <p className="text-[1.15rem] text-white/80 leading-[1.7] max-w-[40rem] mx-auto animate-[fadeInUp_1s_ease-out]">
            Meet the pastoral team and leaders dedicated to serving the congregation and community.
          </p>
        </div>
      </section>

      {/* Senior Pastor Profile — Overlaps Hero */}
      <section className="relative z-20 -mt-[4rem] rounded-t-[2.5rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] bg-white py-[6rem] lg:py-[8rem]">
        <div className="container max-w-[80rem] px-[2rem]">
          <div className="flex flex-col lg:flex-row gap-[4rem] items-center">
            
            {/* Image Side */}
            <RevealSection className="w-full lg:w-5/12 relative">
              <div className="relative w-full aspect-[3/4] max-w-[30rem] mx-auto z-10 rounded-[1.5rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/leadership/pastor-cofield.jpg"
                  alt="Apostle Joyce Cofield"
                  fill
                  className="object-cover object-top"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute top-[-2rem] left-[-2rem] w-[10rem] h-[10rem] bg-accent/10 rounded-full z-0 blur-[20px]" />
              <div className="absolute bottom-[-2rem] right-[-2rem] w-[15rem] h-[15rem] bg-primary/10 rounded-full z-0 blur-[30px]" />
            </RevealSection>

            {/* Content Side */}
            <RevealSection className="w-full lg:w-7/12 flex flex-col justify-center" delay={200}>
              {/* Sub-heading hidden per user request */}
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-black text-primary mb-[0.5rem] leading-tight">
                Apostle Joyce Cofield
              </h2>
              <a href="mailto:pastorjoycecofield@gmail.com" className="text-accent font-semibold hover:text-primary transition-colors mb-[2rem] inline-block">
                pastorjoycecofield@gmail.com
              </a>
              
              <div className="text-[1.05rem] text-text-secondary leading-[1.8] flex flex-col gap-[1.5rem]">
                <p>
                  Apostle Joyce Cofield is the visionary founder and Senior Pastor of Anointed Word Ministries. With a profound calling to see lives transformed by the power of the Holy Spirit, she has dedicated her life to preaching the uncompromised Word of God.
                </p>
                <p>
                  Her ministry is marked by an apostolic grace to build, a prophetic edge to discern, and a shepherd's heart to care for the broken. Under her leadership, Anointed Word Ministries has grown into a vibrant, Spirit-filled church family.
                </p>
                <p>
                  Apostle Cofield believes strongly in the power of corporate prayer, the necessity of systematic biblical teaching, and the beauty of authentic community.
                </p>
              </div>

              <div className="mt-[3rem]">
                <h4 className="font-display font-bold text-[1.2rem] text-primary mb-[1rem]">Connect with Apostle Cofield</h4>
                <div className="flex gap-[1rem]">
                  <a href="#" className="w-[3rem] h-[3rem] rounded-full bg-bg-light border border-[#e8e6e0] flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 text-primary">
                    <svg className="w-[1.25rem] h-[1.25rem]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a href="mailto:pastorjoycecofield@gmail.com" className="w-[3rem] h-[3rem] rounded-full bg-bg-light border border-[#e8e6e0] flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 text-primary">
                    <svg className="w-[1.25rem] h-[1.25rem]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </a>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Team Grid — Dark with Spotlights & Glass Cards */}
      <section className="bg-[#0a0a0a] py-[8rem] relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container max-w-[85rem] relative z-10 px-[2rem]">
          <RevealSection className="text-center mb-[4rem]">
            {/* Heading removed */}
            <h3 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-black text-white uppercase tracking-tighter leading-[1.1] mb-[1.5rem]">
              Our Pastoral Team
            </h3>
            <p className="text-[1.1rem] text-white/70 max-w-[40rem] mx-auto font-light">
              Our dedicated team of leaders is here to serve you and help you grow in your walk with Christ.
            </p>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
            {team.map((member, idx) => (
              <RevealSection key={member.name} delay={idx * 150}>
                <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[1rem] overflow-hidden group hover:border-accent/30 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(212,175,55,0.1)] transition-all duration-500">
                  <div className="relative w-full aspect-square overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-300" />
                  </div>
                  <div className="p-[2rem] text-center">
                    <h3 className="font-display text-[1.4rem] font-bold text-white mb-[0.25rem]">{member.name}</h3>
                    {/* Heading removed */}
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>

          {/* Join CTA — Glass */}
          <RevealSection className="mt-[6rem]">
            <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[1.5rem] p-[4rem] text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/10 pointer-events-none" />
              <div className="relative z-10">
                <h3 className="font-display text-[clamp(1.5rem,3vw,2.5rem)] font-black text-white mb-[1rem]">Interested in Serving?</h3>
                <p className="text-white/70 text-[1.1rem] max-w-[30rem] mx-auto mb-[2rem]">
                  There are always opportunities to serve in ministry at Anointed Word. Find your place and make an impact.
                </p>
                <a href="/volunteer" className="inline-flex items-center justify-center px-[3rem] py-[1.25rem] bg-accent text-primary font-bold uppercase tracking-[0.15em] text-[0.9rem] rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(212,175,55,0.3)]">
                  Join a Serve Team
                </a>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}
