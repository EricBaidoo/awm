'use client';

import { useState } from 'react';
import Link from 'next/link';
import siteConfig from '@/lib/config';
import { MessageBubbleIcon, PrayerIcon, LocationIcon, GiveIcon, PhoneIcon } from '@/components/layout/Icons';

export default function FloatingLauncher({ onPrayClick }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-[1.75rem] right-[1.75rem] max-md:bottom-[1.25rem] max-md:right-[1.25rem] z-90 flex flex-col items-end gap-[1rem]">
      {/* Expanded Actions */}
      <div className={`flex flex-col items-end gap-[0.5rem] transition-all duration-350 ease-in-out ${
        expanded ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-[0.625rem] pointer-events-none'
      }`}>
        <button
          className="flex items-center gap-[0.75rem] p-[0.75rem_1.25rem] bg-surface shadow-lg border-[0.0625rem] border-[#e0deda] cursor-pointer text-text-primary hover:text-white hover:bg-primary hover:-translate-x-[0.25rem] hover:border-primary transition-all duration-350 ease-in-out whitespace-nowrap text-[0.85rem] font-bold uppercase tracking-[0.05em]"
          onClick={() => { setExpanded(false); onPrayClick?.(); }}
          aria-label="Submit prayer request"
        >
          <PrayerIcon className="w-[1.1rem] h-[1.1rem] text-accent" />
          <span>Pray</span>
        </button>
        <Link
          href="/visit"
          className="flex items-center gap-[0.75rem] p-[0.75rem_1.25rem] bg-surface shadow-lg border-[0.0625rem] border-[#e0deda] cursor-pointer text-text-primary hover:text-white hover:bg-primary hover:-translate-x-[0.25rem] hover:border-primary transition-all duration-350 ease-in-out whitespace-nowrap text-[0.85rem] font-bold uppercase tracking-[0.05em]"
          onClick={() => setExpanded(false)}
        >
          <LocationIcon className="w-[1.1rem] h-[1.1rem] text-accent" />
          <span>Visit</span>
        </Link>
        <Link
          href="/give"
          className="flex items-center gap-[0.75rem] p-[0.75rem_1.25rem] bg-surface shadow-lg border-[0.0625rem] border-[#e0deda] cursor-pointer text-text-primary hover:text-white hover:bg-primary hover:-translate-x-[0.25rem] hover:border-primary transition-all duration-350 ease-in-out whitespace-nowrap text-[0.85rem] font-bold uppercase tracking-[0.05em]"
          onClick={() => setExpanded(false)}
        >
          <GiveIcon className="w-[1.1rem] h-[1.1rem] text-accent" />
          <span>Give</span>
        </Link>
        <a
          href={`tel:${siteConfig.phone.replace(/[^\d+]/g, '')}`}
          className="flex items-center gap-[0.75rem] p-[0.75rem_1.25rem] bg-surface shadow-lg border-[0.0625rem] border-[#e0deda] cursor-pointer text-text-primary hover:text-white hover:bg-primary hover:-translate-x-[0.25rem] hover:border-primary transition-all duration-350 ease-in-out whitespace-nowrap text-[0.85rem] font-bold uppercase tracking-[0.05em]"
          onClick={() => setExpanded(false)}
        >
          <PhoneIcon className="w-[1.1rem] h-[1.1rem] text-accent" />
          <span>Call</span>
        </a>
      </div>

      {/* Main FAB Button */}
      <button
        className={`w-[3.75rem] h-[3.75rem] max-md:w-[3.375rem] max-md:h-[3.375rem] border-[0.0625rem] border-accent/20 cursor-pointer flex items-center justify-center transition-all duration-350 ease-in-out ${
          expanded
            ? 'bg-primary shadow-lg'
            : 'bg-gradient-to-br from-accent to-accent-dark hover:scale-[1.08] shadow-gold animate-pulse-glow'
        }`}
        onClick={() => setExpanded(!expanded)}
        aria-label={expanded ? 'Close quick actions' : 'Open quick actions'}
        aria-expanded={expanded}
      >
        <span className={`flex items-center justify-center transition-transform duration-350 ease-in-out ${
          expanded ? 'text-white rotate-[90deg]' : 'text-bg-dark'
        }`}>
          {expanded ? <span className="text-[1.4rem]">✕</span> : <MessageBubbleIcon className="w-[1.6rem] h-[1.6rem] fill-transparent" />}
        </span>
      </button>
    </div>
  );
}
