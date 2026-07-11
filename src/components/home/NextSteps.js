'use client';

import Image from 'next/image';
import Link from 'next/link';
import useScrollReveal from '@/hooks/useScrollReveal';
import { PrayerIcon, CrossIcon, GiveIcon, WomenIcon } from '../layout/Icons';

const steps = [
  {
    title: "Salvation",
    image: '/images/next-steps/salvation.png',
    desc: 'Begin your journey with Christ and experience the power of a transformed life.',
    href: '/connect',
    icon: PrayerIcon
  },
  {
    title: "Membership",
    image: '/images/next-steps/membership.png',
    desc: 'Make Anointed Word Ministries your spiritual home and grow in faith with a community that cares.',
    href: '/connect',
    icon: CrossIcon
  },
  {
    title: "Volunteer",
    image: '/images/next-steps/volunteer.png',
    desc: 'Use your gifts to serve others and be part of something bigger than yourself.',
    href: '/volunteer',
    icon: GiveIcon
  },
  {
    title: "Community Groups",
    image: '/images/next-steps/community.png',
    desc: 'Build authentic relationships that encourage spiritual growth and real connection.',
    href: '/groups',
    icon: WomenIcon
  }
];

export default function NextSteps() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-white py-[8rem] relative overflow-hidden" ref={ref}>
      
      {/* Dynamic Light Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-[-10vw] w-[40vw] h-[40vw] bg-[#f4f4f4] rounded-full blur-[100px] pointer-events-none" />

      {/* Background Watermark Text - Faint */}
      <div className="absolute top-[6rem] left-1/2 -translate-x-1/2 w-full text-center select-none pointer-events-none z-0" aria-hidden="true">
        <div className="font-display text-[clamp(5rem,12vw,10rem)] font-black text-black/[0.03] uppercase tracking-tighter leading-none">
          Engage
        </div>
      </div>

      <div className="container max-w-[85rem] relative z-10 px-[2rem]">
        
        {/* Main Heading */}
        <div className={`text-center mb-[4rem] transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[4rem]'
        }`}>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-black text-black tracking-tight leading-[1.1] mb-[1.5rem]">
            Find Your Place.<br/>Live Your Purpose.
          </h2>
          <p className="text-[1.1rem] md:text-[1.15rem] text-[#555] leading-[1.6] max-w-[50rem] mx-auto font-light">
            Faith grows best in community. Whether you're new or ready to take your next step, there's a place for you to connect, grow, and belong.
          </p>
          <p className="text-[1.1rem] md:text-[1.15rem] text-accent leading-[1.6] mt-[1rem] font-medium">
            Next Steps: Each one draws you closer to purpose.
          </p>
        </div>

        {/* Vertical Portrait Cards - Light Theme */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1.5rem]">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <Link 
                key={step.title}
                href={step.href}
                className={`group relative rounded-[1rem] overflow-hidden aspect-[3/4] shadow-[0_15px_35px_rgba(0,0,0,0.06)] hover:-translate-y-3 hover:shadow-[0_25px_50px_rgba(212,175,55,0.15)] transition-all duration-700 ease-out border border-black/5 bg-white ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[4rem]'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Image restricted to top 60% */}
                <div className="absolute inset-0 h-[65%]">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-100" />
                </div>
                
                {/* Content Area */}
                <div className="absolute bottom-0 left-0 w-full p-[1.5rem] pt-[2rem] h-[55%] flex flex-col justify-end bg-gradient-to-t from-white via-white/95 to-transparent">
                  <div className="mb-[0.75rem] text-accent/80 group-hover:text-accent transition-colors duration-500">
                    <Icon className="w-[1.5rem] h-[1.5rem] stroke-[2px]" />
                  </div>
                  <h3 className="font-display font-bold text-[1.25rem] text-black leading-[1.2] mb-[0.5rem] tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-[0.85rem] text-[#666] leading-[1.5] font-light group-hover:text-[#444] transition-all duration-500">
                    {step.desc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
