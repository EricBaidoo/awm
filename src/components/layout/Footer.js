import Link from 'next/link';
import Image from 'next/image';
import { FacebookIcon, InstagramIcon, YoutubeIcon, TimeIcon, LocationIcon } from './Icons'; // Assuming these exist, mapping to generic icons if needed

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f0f0f] text-white pt-[6rem] pb-[2rem] relative overflow-hidden border-t border-white/5">
      
      {/* Subtle Background Element (like the faint circle in the screenshot) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-white/[0.01] rounded-full blur-[100px] pointer-events-none" />

      <div className="container max-w-[85rem] px-[2rem] relative z-10">
        
        {/* Top Section: Logo & Info */}
        <div className="flex flex-col lg:flex-row justify-between gap-[4rem] lg:gap-0 mb-[6rem]">
          
          {/* Left Column: Logo, Links, Socials */}
          <div className="flex flex-col max-w-[40rem]">
            {/* Logo */}
            <div className="mb-[3rem]">
              <Link href="/">
                <span className="font-display font-black text-[2rem] tracking-tighter uppercase text-white">
                  ANOINTED WORD
                </span>
              </Link>
            </div>

            {/* Quick Links */}
            <div className="mb-[4rem]">
              <h4 className="font-bold text-[1rem] uppercase tracking-wider mb-[1.5rem]">Quick Links</h4>
              <div className="flex flex-wrap gap-x-[1rem] gap-y-[1rem] text-[0.85rem] font-medium text-white/70">
                <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
                <span className="text-white/20">|</span>
                <Link href="/events" className="hover:text-white transition-colors">Events</Link>
                <span className="text-white/20">|</span>
                <Link href="/sermons" className="hover:text-white transition-colors">Watch</Link>
                <span className="text-white/20">|</span>
                <Link href="/give" className="hover:text-white transition-colors">Giving</Link>
                <span className="text-white/20">|</span>
                <Link href="/connect" className="hover:text-white transition-colors">Visit</Link>
                <span className="text-white/20">|</span>
                <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
                <span className="text-white/20">|</span>
                <Link href="/groups" className="hover:text-white transition-colors">Community</Link>
              </div>
            </div>

            {/* Follow Us */}
            <div className="border-t border-white/10 pt-[2rem] flex items-center gap-[1.5rem]">
              <h4 className="font-bold text-[1rem] uppercase tracking-wider">Follow Us:</h4>
              <div className="flex items-center gap-[1rem]">
                <a href="#" className="w-[2.5rem] h-[2.5rem] rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <FacebookIcon className="w-[1rem] h-[1rem] fill-current" />
                </a>
                <a href="#" className="w-[2.5rem] h-[2.5rem] rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <InstagramIcon className="w-[1rem] h-[1rem] fill-current" />
                </a>
                <a href="#" className="w-[2.5rem] h-[2.5rem] rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <YoutubeIcon className="w-[1rem] h-[1rem] fill-current" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Service Times & Location */}
          <div className="flex flex-col sm:flex-row gap-[4rem] lg:gap-[6rem]">
            
            {/* Service Times */}
            <div>
              <div className="flex items-center gap-[0.75rem] mb-[1.5rem] border-b border-white/10 pb-[1rem]">
                <TimeIcon className="w-[1.25rem] h-[1.25rem] text-white/50" />
                <h4 className="font-bold text-[1rem] uppercase tracking-wider">Service Times</h4>
              </div>
              <ul className="space-y-[0.75rem] text-[0.85rem] font-medium text-white/70">
                <li>Sundays: 11:00 AM</li>
                <li>Thursdays: 7:00 PM (ZOOM)</li>
              </ul>
            </div>

            {/* Location */}
            <div>
              <div className="flex items-center gap-[0.75rem] mb-[1.5rem] border-b border-white/10 pb-[1rem]">
                <LocationIcon className="w-[1.25rem] h-[1.25rem] text-white/50" />
                <h4 className="font-bold text-[1rem] uppercase tracking-wider">Location</h4>
              </div>
              <ul className="space-y-[0.75rem] text-[0.85rem] font-medium text-white/70">
                <li>4727 Concord Pike</li>
                <li>Wilmington, DE 19803</li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="text-center pt-[4rem] text-[0.75rem] font-medium text-white/40">
          <p>© {currentYear} Anointed Word Ministries - All rights reserved</p>
        </div>

      </div>
    </footer>
  );
}
