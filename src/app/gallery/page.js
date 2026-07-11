'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
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

export default function GalleryPage() {
  const images = [
    { src: '/images/gallery/church-1.jpg', alt: 'Sunday Worship Service', span: 'tall' },
    { src: '/images/gallery/church-2.jpg', alt: 'Reconciling Lives in Christ', span: 'square' },
    { src: '/images/gallery/church-3.jpg', alt: 'The Power of the Word', span: 'wide' },
    { src: '/images/gallery/church-4.jpg', alt: 'Corporate Prayer', span: 'square' },
    { src: '/images/gallery/church-5.jpg', alt: 'Bible Study', span: 'tall' },
    { src: '/images/gallery/church-6.jpg', alt: 'Walking Together in Faith', span: 'square' },
    { src: '/images/backgrounds/hero-bg.jpg', alt: 'Church Background', span: 'wide' },
    { src: '/images/backgrounds/visit-bg.jpg', alt: 'Visit Background', span: 'square' },
    { src: '/images/backgrounds/watch-bg.jpg', alt: 'Watch Background', span: 'tall' },
  ];

  return (
    <div className="min-h-[100vh] bg-[#0a0a0a] pb-[8rem]">
      {/* Cinematic Dark Hero */}
      <section className="relative pt-[12rem] pb-[6rem] text-center px-[2rem] overflow-hidden">
        {/* Background glow and spotlights */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="container max-w-[50rem] relative z-10">
          <div className="animate-[fadeInDown_0.6s_ease-out]">
            {/* Sub-heading hidden per user request */}
          </div>
          <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-black text-white mb-[1.5rem] leading-[1.1] animate-[fadeInUp_0.8s_ease-out]">
            Our Church Family
          </h1>
          <p className="text-[1.15rem] text-white/70 leading-[1.7] mx-auto animate-[fadeInUp_1s_ease-out]">
            A glimpse into the life, worship, and community at Anointed Word Ministries.
          </p>
        </div>
      </section>

      {/* Masonry Gallery Grid - Glass Effects */}
      <section className="container max-w-[85rem] px-[2rem] relative z-10">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-[2rem] space-y-[2rem]">
          {images.map((img, idx) => {
            const aspectClass = 
              img.span === 'tall' ? 'aspect-[3/4]' : 
              img.span === 'wide' ? 'aspect-[4/3]' : 'aspect-square';

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
                className="break-inside-avoid relative"
              >
                <div className={`relative w-full ${aspectClass} rounded-[1rem] overflow-hidden group shadow-[0_15px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.2)] transition-all duration-500 border border-white/10`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Premium glass overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,11,20,0.95)] via-[rgba(5,11,20,0.3)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-[2rem] backdrop-blur-[2px]">
                    <div className="transform translate-y-[1.5rem] group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-white font-bold text-[1.2rem] font-display tracking-[0.02em]">{img.alt}</p>
                      <div className="w-[3rem] h-[0.2rem] bg-accent mt-[0.75rem] rounded-full shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Section - Dark Glassmorphism */}
      <section className="container max-w-[65rem] mt-[10rem] px-[2rem] relative z-10">
        <RevealSection>
          <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2rem] p-[4rem] md:p-[6rem] text-center shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative overflow-hidden group">
            
          <Image
            src="/images/backgrounds/hero-bg.jpg"
            alt="Background"
            fill
            priority
            className="object-cover object-center opacity-40"
          />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-accent/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-accent/10 transition-colors duration-700" />
            
            <div className="relative z-10">
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-black text-white mb-[1.5rem]">Ready to join the family?</h2>
              <p className="text-white/70 text-[1.15rem] mb-[3rem] max-w-[35rem] mx-auto font-light">
                We would love to see you in person this Sunday. Plan a VIP visit so we can roll out the red carpet for you.
              </p>
              <a href="/visit" className="btn btn--primary btn--lg shadow-[0_15px_30px_rgba(212,175,55,0.25)] hover:scale-105 transition-transform duration-300">
                Plan Your Visit
              </a>
            </div>
          </div>
        </RevealSection>
      </section>
    </div>
  );
}
