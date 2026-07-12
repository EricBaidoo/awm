'use client';

import Image from 'next/image';
import Link from 'next/link';
import useScrollReveal from '@/hooks/useScrollReveal';
import { TimeIcon, LocationIcon } from '../layout/Icons';

const events = [
  {
    title: "Summer Revival 2026",
    month: "AUG",
    day: "15",
    time: "7:00 PM",
    location: "Main Sanctuary",
    desc: "Join us for three nights of powerful worship, dynamic teaching, and spiritual renewal.",
    image: "/images/events/event-revival.png",
    href: "/events"
  },
  {
    title: "Back to School Drive",
    month: "AUG",
    day: "25",
    time: "10:00 AM",
    location: "Church Parking Lot",
    desc: "Equipping our community's children for success with free backpacks, supplies, and prayer.",
    image: "/images/events/event-school.png",
    href: "/events"
  },
  {
    title: "Night of Worship",
    month: "SEP",
    day: "05",
    time: "6:30 PM",
    location: "Main Sanctuary",
    desc: "An extended evening dedicated entirely to seeking God's presence through uninterrupted worship.",
    image: "/images/events/event-worship.png",
    href: "/events"
  }
];

export default function EventsPreview() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-[#050b14] py-[4rem] md:py-[8rem] relative overflow-hidden" ref={ref}>
      
      {/* Dynamic Theater Spotlight Gradient */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container max-w-[75rem] relative z-10">
        
        {/* Main Heading */}
        <div className={`text-center mb-[2.5rem] md:mb-[5rem] transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[2rem]'
        }`}>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-white tracking-tight leading-tight mb-[1.5rem] drop-shadow-2xl">
            Upcoming Events
          </h2>
          <p className="text-[1.1rem] md:text-[1.15rem] text-white/70 leading-[1.6] max-w-[45rem] mx-auto font-light">
            Don't miss out on what God is doing. Mark your calendars and join us as we gather, grow, and serve together.
          </p>
        </div>

        {/* Events List View */}
        <div className="flex flex-col gap-[2rem]">
          {events.map((event, i) => (
            <Link 
              key={event.title}
              href={event.href}
              className={`group flex flex-col md:flex-row bg-white/5 rounded-[1.5rem] border border-white/10 overflow-hidden hover:bg-white/10 hover:border-accent/50 transition-all duration-500 ease-out shadow-lg hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[3rem]'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              
              {/* Left Side: Thumbnail Image */}
              <div className="relative w-full md:w-[35%] h-[15rem] md:h-auto overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 35vw"
                  className="object-cover object-center transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                {/* Subtle dark gradient overlay to ensure the image blends nicely */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#050b14]/50 hidden md:block" />
              </div>

              {/* Right Side: Content Area */}
              <div className="flex flex-col md:flex-row flex-grow p-[2rem] items-center">
                
                {/* Stylized Calendar Block */}
                <div className="flex flex-col items-center justify-center min-w-[6rem] mb-[1.5rem] md:mb-0 md:mr-[3rem] border-b md:border-b-0 md:border-r border-white/10 pb-[1.5rem] md:pb-0 md:pr-[3rem]">
                  <span className="font-display font-bold text-[1.1rem] text-accent tracking-[0.2em] uppercase mb-[0.25rem]">
                    {event.month}
                  </span>
                  <span className="font-display font-bold text-[3.5rem] text-white leading-none drop-shadow-md">
                    {event.day}
                  </span>
                </div>

                {/* Event Details */}
                <div className="flex flex-col flex-grow text-center md:text-left">
                  <h3 className="font-display font-bold text-[1.75rem] text-white leading-[1.2] mb-[1rem] tracking-tight group-hover:text-accent transition-colors duration-300">
                    {event.title}
                  </h3>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-[1rem] sm:gap-[2rem] mb-[1rem] text-white/60 text-[0.95rem]">
                    <div className="flex items-center gap-[0.5rem]">
                      <TimeIcon className="w-[1.15rem] h-[1.15rem] text-accent" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-[0.5rem]">
                      <LocationIcon className="w-[1.15rem] h-[1.15rem] text-accent" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <p className="text-[0.95rem] text-white/70 leading-[1.6] font-light max-w-[35rem] mb-[1.5rem] md:mb-0 mx-auto md:mx-0">
                    {event.desc}
                  </p>
                </div>

                {/* Arrow CTA */}
                <div className="mt-auto md:mt-0 md:ml-auto pl-0 md:pl-[2rem] flex items-center justify-center">
                  <div className="w-[3rem] h-[3rem] rounded-full border-[2px] border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                    <span className="text-white text-[1.5rem] leading-none mb-[0.15rem] group-hover:text-primary transition-colors">›</span>
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </div>

        {/* Global CTA */}
        <div className={`text-center mt-[5rem] transition-all duration-1000 delay-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[2rem]'
        }`}>
          <Link href="/events" className="inline-flex items-center justify-center px-[3rem] py-[1.25rem] bg-accent text-primary font-bold uppercase tracking-[0.15em] text-[0.9rem] hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
            View All Events
          </Link>
        </div>

      </div>
    </section>
  );
}
