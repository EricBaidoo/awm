'use client';

import Image from 'next/image';
import useScrollReveal from '@/hooks/useScrollReveal';

const testimonials = [
  {
    quote: "Since joining Anointed Word Ministries, my faith has been strengthened in ways I never imagined. The teaching of the Word is powerful and life-changing.",
    name: "Michelle T.",
    role: "Member since 2020",
    avatar: "/images/gallery/church-1.jpg"
  },
  {
    quote: "I came here broken, but the love and genuine community I found helped me heal. This church isn't just a building; it's a true family.",
    name: "David K.",
    role: "Member since 2018",
    avatar: "/images/gallery/church-2.jpg"
  },
  {
    quote: "My children have grown so much through the youth ministry. It is rare to find a place where the entire family is spiritually fed every single week.",
    name: "Sarah & Marcus J.",
    role: "Members since 2022",
    avatar: "/images/gallery/church-3.jpg"
  }
];

// Custom SVG Quote Icon for a premium look
const QuoteIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.017 21L16.411 14.996L16.425 14.995C16.896 13.916 17.158 12.753 17.158 11.583V3H24V11.583C24 13.411 23.593 15.221 22.81 16.89L22.802 16.906L19.208 24H14.017ZM0 21L2.394 14.996L2.408 14.995C2.879 13.916 3.141 12.753 3.141 11.583V3H10V11.583C10 13.411 9.593 15.221 8.81 16.89L8.802 16.906L5.208 24H0Z" />
  </svg>
);

export default function Testimonials() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-[#f8f8f7] py-[8rem] md:py-[10rem] relative overflow-hidden" ref={ref}>
      
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-10vw] w-[30vw] h-[30vw] bg-[#e0e0e0] rounded-full blur-[80px] pointer-events-none" />

      <div className="container max-w-[85rem] relative z-10 px-[2rem]">
        
        <div className={`text-center mb-[5rem] transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[2rem]'
        }`}>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-black text-black tracking-tight leading-[1.1] mb-[1.5rem]">
            Stories of Grace
          </h2>
          <div className="w-[4rem] h-[3px] bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2rem] lg:gap-[3rem]">
          {testimonials.map((testimonial, i) => (
            <div 
              key={testimonial.name}
              className={`relative bg-white rounded-[1.5rem] p-[2.5rem] lg:p-[3rem] shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_50px_rgba(212,175,55,0.15)] hover:-translate-y-3 transition-all duration-500 ease-out flex flex-col h-full border border-black/[0.03] overflow-hidden group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[4rem]'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              
              {/* Massive Watermark Quote Icon */}
              <QuoteIcon className="absolute top-[2rem] right-[2rem] w-[8rem] h-[8rem] text-accent opacity-[0.05] group-hover:scale-110 group-hover:opacity-[0.08] transition-all duration-700 pointer-events-none" />
              
              {/* Small Gold Quote Icon */}
              <div className="mb-[2rem]">
                <QuoteIcon className="w-[2rem] h-[2rem] text-accent opacity-80" />
              </div>
              
              <blockquote className="flex-grow mb-[3rem] relative z-10">
                <p className="font-display font-light text-[1.15rem] md:text-[1.2rem] text-[#333] leading-[1.7] italic">
                  "{testimonial.quote}"
                </p>
              </blockquote>

              <div className="mt-auto flex items-center gap-[1.25rem] relative z-10">
                {/* Avatar */}
                <div className="relative w-[3.5rem] h-[3.5rem] rounded-full overflow-hidden border-[2px] border-accent/20">
                  <Image 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    fill
                    sizes="3.5rem"
                    className="object-cover object-top"
                  />
                </div>
                
                {/* Author Info */}
                <div className="flex flex-col">
                  <h4 className="font-bold text-[1.05rem] text-primary tracking-wide mb-[0.15rem]">
                    {testimonial.name}
                  </h4>
                  <span className="text-[0.75rem] text-text-secondary uppercase tracking-[0.15em] font-medium">
                    {testimonial.role}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
