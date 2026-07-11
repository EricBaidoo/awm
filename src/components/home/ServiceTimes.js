'use client';

import useScrollReveal from '@/hooks/useScrollReveal';
import { getAllServices } from '@/lib/getNextService';
import { ChurchIcon, PhoneIcon, ZoomIcon, LocationIcon } from '../layout/Icons';

export default function ServiceTimes() {
  const { ref, isVisible } = useScrollReveal();
  const services = getAllServices();

  const getServiceIcon = (type) => {
    switch (type) {
      case 'in-person':    return <ChurchIcon className="w-[1.4rem] h-[1.4rem] text-accent shrink-0" />;
      case 'conference-call': return <PhoneIcon className="w-[1.4rem] h-[1.4rem] text-accent shrink-0" />;
      case 'zoom':         return <ZoomIcon className="w-[1.4rem] h-[1.4rem] text-accent shrink-0" />;
      default:             return <ChurchIcon className="w-[1.4rem] h-[1.4rem] text-accent shrink-0" />;
    }
  };

  const getDayLabel = (index) => {
    const days = ['Sunday', 'Tuesday', 'Thursday', 'Friday', '2nd Sat'];
    return days[index] || 'Service';
  };

  return (
    <section className="section section--dark" ref={ref}>
      <div className="container">
        <div className={`section__header transition-all duration-600 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[2rem]'
        }`}>
          {/* Sub-heading hidden per user request */}
          <h2 className="font-display text-[2rem] md:text-[2.5rem] font-black tracking-tight text-white mb-[1rem]">
            Join Our Services
          </h2>
          <p className="section__subtitle text-text-on-dark-secondary">
            Connect with us in person or virtually throughout the week.
          </p>
        </div>

        {/* Clean schedule rows — sharp corners */}
        <div className="max-w-[52rem] mx-auto flex flex-col gap-0">
          {services.map((service, i) => (
            <div
              key={i}
              className={`flex items-stretch gap-0 border-b border-white/8 last:border-b-0 hover:bg-white/3 transition-all duration-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-1rem]'
              }`}
              style={{ transitionDelay: `${i * 80}ms`, transitionDuration: '500ms' }}
            >
              {/* Left: Day + Time column */}
              <div className="py-[1.5rem] pr-[2rem] min-w-[9rem] border-r border-white/8 flex flex-col justify-center">
                {/* Heading removed */}
                <span className="text-[1.5rem] font-black text-white leading-none mt-[0.2rem]">
                  {service.time}
                </span>
              </div>

              {/* Center: Service details */}
              <div className="flex-1 py-[1.5rem] px-[2rem] flex flex-col justify-center gap-[0.4rem]">
                <div className="flex items-center gap-[0.75rem]">
                  {getServiceIcon(service.type)}
                  <h3 className="font-display text-[1.1rem] font-bold text-white leading-tight">
                    {service.name}
                  </h3>
                </div>
                <div className="text-[0.82rem] text-text-on-dark-secondary pl-[2.15rem]">
                  {service.type === 'in-person' && (
                    <span className="flex items-center gap-[0.375rem]">
                      <LocationIcon className="w-[0.875rem] h-[0.875rem] text-accent/70 shrink-0" />
                      {service.address}
                    </span>
                  )}
                  {service.type === 'conference-call' && (
                    <span>
                      Dial-in: <strong className="text-white">{service.dialIn}</strong>
                      <span className="mx-[0.5rem] opacity-40">·</span>
                      Code: <strong className="text-accent">{service.passcode}</strong>
                    </span>
                  )}
                  {service.type === 'zoom' && (
                    <span>
                      Zoom ID: <strong className="text-white">{service.zoomId}</strong>
                      <span className="mx-[0.5rem] opacity-40">·</span>
                      Passcode: <strong className="text-accent">{service.zoomPasscode}</strong>
                    </span>
                  )}
                </div>
              </div>

              {/* Right: Action button */}
              <div className="py-[1.5rem] pl-[1.5rem] flex items-center shrink-0">
                {service.type === 'in-person' ? (
                  <a
                    href="https://maps.google.com/?q=4727+Concord+Pike,+Wilmington,+DE+19803"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--outline btn--sm"
                  >
                    Directions
                  </a>
                ) : service.type === 'conference-call' ? (
                  <a href={`tel:${service.dialIn.replace(/[^\d]/g, '')}`} className="btn btn--primary btn--sm">
                    Dial Now
                  </a>
                ) : (
                  <a href="https://zoom.us/join" target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--sm">
                    Join Zoom
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
