'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Info, Users, HeartHandshake, ImageIcon, ChevronDown } from 'lucide-react';

const icons = {
  Info: <Info className="w-[1.25rem] h-[1.25rem] text-accent" />,
  Users: <Users className="w-[1.25rem] h-[1.25rem] text-accent" />,
  HeartHandshake: <HeartHandshake className="w-[1.25rem] h-[1.25rem] text-accent" />,
  ImageIcon: <ImageIcon className="w-[1.25rem] h-[1.25rem] text-accent" />,
};

const navLinks = [
  {
    label: 'About Us',
    subLinks: [
      { href: '/about', label: 'About AWM', desc: 'Discover our mission and beliefs.', icon: 'Info' },
      { href: '/leadership', label: 'Leadership', desc: 'Meet our pastoral team.', icon: 'Users' },
      { href: '/groups', label: 'Life Groups', desc: 'Find your community and grow.', icon: 'HeartHandshake' },
      { href: '/gallery', label: 'Gallery', desc: 'Moments from our church family.', icon: 'ImageIcon' }
    ]
  },
  { href: '/visit', label: 'Visit' },
  { href: '/sermons', label: 'Sermons' },
  { href: '/stream', label: 'Stream' },
  { href: '/give', label: 'Give' },
  { href: '/connect', label: 'Connect' },
];

export default function Header({ onPrayClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [tempClose, setTempClose] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-100 h-[5rem] flex items-center transition-all duration-350 ease-in-out ${
          scrolled || mobileOpen
            ? 'bg-[rgba(10,30,92,0.97)] backdrop-blur-[1.25rem] shadow-md'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between w-full max-w-[80rem] mx-auto px-[clamp(1rem,5vw,6rem)]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-[0.5rem] z-101" aria-label="Anointed Word Ministries Home">
            <Image
              src="/images/brand/logo.png"
              alt="AWM Logo"
              width={48}
              height={48}
              className="w-[3.5rem] h-[3.5rem] max-md:w-[2.75rem] max-md:h-[2.75rem] rounded-full object-cover bg-white p-[0.2rem] border-[0.125rem] border-accent/80 shadow-[0_0_15px_rgba(255,255,255,0.15)] ring-1 ring-black/10"
              priority
            />
            <span className="font-display text-[1.1rem] max-md:text-[0.95rem] font-extrabold text-white tracking-[0.02em] leading-[1.2]">
              Anointed Word{' '}
              <span className="text-accent">Ministries</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-[1.5rem] xl:gap-[2.5rem] pt-[0.2rem]" aria-label="Main navigation">
            {navLinks.map((link) => {
              if (link.subLinks) {
                return (
                  <div 
                    key={link.label} 
                    className="relative group"
                    onMouseLeave={() => setTempClose(false)}
                  >
                    <button className="text-[0.85rem] xl:text-[0.9rem] font-medium tracking-[0.06em] uppercase text-[rgba(255,255,255,0.85)] hover:text-white transition-colors duration-200 flex items-center gap-[0.2rem] py-[0.25rem] cursor-pointer">
                      {link.label}
                      <ChevronDown className="w-[1.2rem] h-[1.2rem] stroke-[2.5] transition-transform duration-300 group-hover:rotate-180" />
                    </button>
                    {/* Mega Menu Dropdown */}
                    <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-[1.5rem] w-[20rem] bg-bg-dark/95 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-[1rem] transition-all duration-300 ease-out transform z-50 overflow-hidden ${
                      tempClose 
                        ? 'opacity-0 invisible translate-y-[1rem]' 
                        : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-[1rem] group-hover:translate-y-0'
                    }`}>
                      {/* Invisible hover bridge */}
                      <div className="absolute top-[-1.5rem] left-0 w-full h-[1.5rem] bg-transparent" />
                      
                      <div className="p-[1rem] flex flex-col gap-[0.25rem]">
                        {link.subLinks.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setTempClose(true)}
                            className="flex items-start gap-[1rem] p-[0.75rem] rounded-[0.5rem] hover:bg-white/5 transition-colors duration-200 group/item"
                          >
                            <div className="w-[2.25rem] h-[2.25rem] rounded-full bg-primary/30 flex items-center justify-center shrink-0 border border-white/5 group-hover/item:scale-110 transition-transform duration-300">
                              {icons[sub.icon]}
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[0.9rem] font-bold text-white mb-[0.125rem] group-hover/item:text-accent transition-colors">
                                {sub.label}
                              </span>
                              <span className="text-[0.75rem] text-text-muted leading-tight">
                                {sub.desc}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="bg-primary/20 p-[1rem] border-t border-white/5 flex flex-col gap-[0.5rem] items-center justify-center text-center">
                        <Link href="/volunteer" onClick={() => setTempClose(true)} className="text-[0.85rem] font-bold text-accent hover:text-white transition-colors flex items-center justify-center gap-[0.25rem] w-full">
                          Volunteer with us <svg className="w-[1rem] h-[1rem]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[0.85rem] xl:text-[0.9rem] font-medium tracking-[0.06em] uppercase relative py-[0.25rem] transition-colors duration-200 after:content-[''] after:absolute after:bottom-[-0.25rem] after:left-0 after:h-[0.125rem] after:bg-accent after:transition-all after:duration-350 after:ease-in-out ${
                    isActive ? 'text-white after:w-full' : 'text-[rgba(255,255,255,0.85)] hover:text-white after:w-0 hover:after:w-full'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-[1rem] z-101">
            <button
              className="hidden sm:inline-flex items-center gap-[0.5rem] px-[1.3rem] py-[0.55rem] bg-gradient-to-br from-accent to-accent-dark hover:from-accent-glow hover:to-accent text-primary-mid font-bold text-[0.8rem] uppercase tracking-[0.08em] hover:translate-y-[-0.125rem] transition-all duration-250"
              onClick={onPrayClick}
              aria-label="Submit a prayer request"
            >
              Pray
            </button>

            {/* Hamburger Button */}
            <button
              className="flex lg:hidden flex-col gap-[0.3125rem] p-[0.5rem] cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <span className={`w-[1.5rem] h-[0.125rem] bg-white rounded-[0.125rem] transition-all duration-350 ${mobileOpen ? 'rotate-45 translate-y-[0.4375rem]' : ''}`} />
              <span className={`w-[1.5rem] h-[0.125rem] bg-white rounded-[0.125rem] transition-all duration-350 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`w-[1.5rem] h-[0.125rem] bg-white rounded-[0.125rem] transition-all duration-350 ${mobileOpen ? '-rotate-45 -translate-y-[0.4375rem]' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-primary z-99 flex flex-col items-center justify-center transition-opacity duration-350 ease-in-out overflow-y-auto ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex flex-col items-center gap-[1.5rem] py-[5rem] w-full min-h-full justify-center">
          {navLinks.map((link, idx) => {
            if (link.subLinks) {
              return (
                <div key={link.label} className="flex flex-col items-center gap-[1rem] w-full" style={{ transitionDelay: `${(idx + 1) * 75}ms` }}>
                  <span className={`font-display text-[2rem] font-bold text-white transition-all duration-600 ease-in-out ${mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[1.25rem]'}`}>
                    {link.label}
                  </span>
                  <div className="flex flex-col items-center gap-[0.75rem]">
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className={`text-[1.1rem] font-medium text-accent hover:text-white transition-colors duration-200 ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-display text-[2rem] font-bold text-white transition-all duration-600 ease-in-out hover:text-accent ${
                  mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[1.25rem]'
                }`}
                style={{ transitionDelay: `${(idx + 1) * 75}ms` }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <button
            className={`mt-[1rem] px-[2.5rem] py-[0.875rem] bg-gradient-to-br from-accent to-accent-dark text-primary-mid font-bold text-[0.9rem] uppercase tracking-[0.08em] transition-all duration-600 ease-in-out ${
              mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[1.25rem]'
            }`}
            style={{ transitionDelay: '500ms' }}
            onClick={() => {
              setMobileOpen(false);
              onPrayClick?.();
            }}
          >
            Submit Prayer Request
          </button>
        </div>
      </div>
    </>
  );
}
