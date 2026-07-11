'use client';

import { useState } from 'react';
import Image from 'next/image';
import siteConfig from '@/lib/config';
import useScrollReveal from '@/hooks/useScrollReveal';
import { LocationIcon, PhoneIcon, MailIcon, TimeIcon, FacebookIcon, WhatsappIcon } from '@/components/layout/Icons';

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

export default function ConnectPage() {
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [contactStatus, setContactStatus] = useState('');

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setContactStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactForm),
      });

      if (res.ok) {
        setContactStatus('success');
        setContactForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setContactStatus('error');
      }
    } catch {
      setContactStatus('error');
    }
  };

  return (
    <div className="min-h-[100vh]">
      {/* Cinematic Hero */}
      <section className="relative h-[65vh] min-h-[32rem] flex items-center justify-center overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          
          <Image
            src="/images/backgrounds/connect-bg.jpg"
            alt="Background"
            fill
            priority
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[rgba(6,14,42,0.85)] to-[#0a0a0a] z-1" />
        </div>
        <div className="relative z-10 text-white max-w-[50rem] px-[2rem] pt-[5rem]">
          <div className="animate-[fadeInDown_0.6s_ease-out]">
            {/* Sub-heading hidden per user request */}
          </div>
          <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-black mb-[1rem] leading-[1.1] animate-[fadeInUp_0.8s_ease-out]">
            Contact Us
          </h1>
          <p className="text-[clamp(1.1rem,2vw,1.35rem)] text-white/80 animate-[fadeInUp_1s_ease-out]">
            Have questions or need assistance? Reach out to our team. We are here to serve you.
          </p>
        </div>
      </section>

      {/* Main Content — Overlaps Hero, dark cinematic theme */}
      <section className="relative z-20 -mt-[4rem] rounded-t-[2.5rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] bg-[#0a0a0a] py-[6rem] lg:py-[8rem] overflow-hidden">
        {/* Spotlight lighting */}
        <div className="absolute top-0 left-[-10%] w-[50vw] h-[50vw] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="container max-w-[75rem] px-[2rem] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[4rem] xl:gap-[6rem]">
            
            {/* Left Column: Contact & Service Info */}
            <div className="flex flex-col">
              
              {/* Service Times Block */}
              <RevealSection className="mb-[4rem]">
                <h3 className="font-display text-[2rem] text-white font-bold mb-[2rem] pb-[1rem] border-b border-white/10">Service Times</h3>
                
                <div className="flex flex-col gap-[1.5rem]">
                  <div className="flex gap-[1.25rem] items-start group">
                    <div className="w-[3rem] h-[3rem] bg-white/[0.03] border border-white/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-300">
                      <TimeIcon className="w-[1.4rem] h-[1.4rem] text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-[1.1rem] mb-[0.25rem] group-hover:text-accent transition-colors">Sunday Worship Service</h4>
                      <p className="text-white/60">11:00 AM</p>
                    </div>
                  </div>

                  <div className="flex gap-[1.25rem] items-start group">
                    <div className="w-[3rem] h-[3rem] bg-white/[0.03] border border-white/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-300">
                      <TimeIcon className="w-[1.4rem] h-[1.4rem] text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-[1.1rem] mb-[0.25rem] group-hover:text-accent transition-colors">Tuesday Prayer Conference Call</h4>
                      <p className="text-white/60">(605) 472-5528 (Password: 247705)</p>
                    </div>
                  </div>

                  <div className="flex gap-[1.25rem] items-start group">
                    <div className="w-[3rem] h-[3rem] bg-white/[0.03] border border-white/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-300">
                      <TimeIcon className="w-[1.4rem] h-[1.4rem] text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-[1.1rem] mb-[0.25rem] group-hover:text-accent transition-colors">Thursday Bible Study</h4>
                      <p className="text-white/60">7:00 PM via Zoom</p>
                    </div>
                  </div>

                  <div className="flex gap-[1.25rem] items-start group">
                    <div className="w-[3rem] h-[3rem] bg-white/[0.03] border border-white/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-300">
                      <TimeIcon className="w-[1.4rem] h-[1.4rem] text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-[1.1rem] mb-[0.25rem] group-hover:text-accent transition-colors">Friday Intercessory Prayer</h4>
                      <p className="text-white/60">(605) 472-5528 (Password: 247705)</p>
                    </div>
                  </div>
                </div>
              </RevealSection>

              {/* Office Details Block */}
              <RevealSection delay={150}>
                <h3 className="font-display text-[2rem] text-white font-bold mb-[2rem] pb-[1rem] border-b border-white/10">Office Details</h3>
                
                <div className="flex gap-[1.25rem] mb-[2rem] items-start group">
                  <div className="w-[3rem] h-[3rem] bg-white/[0.03] border border-white/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300">
                    <LocationIcon className="w-[1.4rem] h-[1.4rem] text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[1.1rem] text-white mb-[0.25rem]">Main Campus</h4>
                    <p className="text-[0.95rem] text-white/60 leading-relaxed">{siteConfig.address}</p>
                  </div>
                </div>

                <div className="flex gap-[1.25rem] mb-[2rem] items-start group">
                  <div className="w-[3rem] h-[3rem] bg-white/[0.03] border border-white/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300">
                    <PhoneIcon className="w-[1.4rem] h-[1.4rem] text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[1.1rem] text-white mb-[0.25rem]">Phone Number</h4>
                    <p className="text-[0.95rem] font-semibold">
                      <a href={`tel:${siteConfig.phone.replace(/[^\d+]/g, '')}`} className="text-accent hover:text-white transition-colors">
                        {siteConfig.phone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-[1.25rem] mb-[3rem] items-start group">
                  <div className="w-[3rem] h-[3rem] bg-white/[0.03] border border-white/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300">
                    <MailIcon className="w-[1.4rem] h-[1.4rem] text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[1.1rem] text-white mb-[0.25rem]">General Email</h4>
                    <p className="text-[0.95rem] font-semibold">
                      <a href={`mailto:${siteConfig.email}`} className="text-accent hover:text-white transition-colors">
                        {siteConfig.email}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Socials */}
                <h3 className="font-bold text-[1.1rem] text-white mb-[1rem] uppercase tracking-[0.1em]">Connect Online</h3>
                <div className="flex items-center gap-[1rem]">
                  <a href="#" aria-label="Facebook" className="w-[3rem] h-[3rem] rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary hover:scale-110 transition-all duration-300 shadow-sm">
                    <FacebookIcon className="w-[1.25rem] h-[1.25rem]" />
                  </a>
                  <a href="#" aria-label="WhatsApp" className="w-[3rem] h-[3rem] rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#25D366] hover:border-[#25D366] hover:scale-110 transition-all duration-300 shadow-sm">
                    <WhatsappIcon className="w-[1.4rem] h-[1.4rem]" />
                  </a>
                </div>
              </RevealSection>
            </div>

            {/* Right Column: Contact Form (Glassmorphism) */}
            <RevealSection delay={300} className="self-start sticky top-[8rem]">
              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-[2.5rem] sm:p-[3.5rem] rounded-[1.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                <div className="mb-[2.5rem]">
                  <h3 className="font-display text-[2rem] text-white font-bold mb-[0.5rem]">Send a Message</h3>
                  <p className="text-[1rem] text-white/60">We would love to hear from you. Please fill out the form below.</p>
                </div>

                {contactStatus === 'success' ? (
                  <div className="text-center py-[3rem] animate-[fadeInUp_0.5s_cubic-bezier(0.4,0,0.2,1)]">
                    <div className="w-[4rem] h-[4rem] bg-[#2ecc71] flex items-center justify-center rounded-full mx-auto mb-[1.25rem] shadow-[0_0_20px_rgba(46,204,113,0.4)]">
                      <svg className="w-[1.8rem] h-[1.8rem] text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                    <h3 className="font-display text-[1.5rem] text-white font-bold mb-[0.5rem]">Message Sent</h3>
                    <p className="text-[1rem] text-white/70">Thank you for reaching out! Our team will get back to you shortly.</p>
                    <button onClick={() => setContactStatus('')} className="btn btn--outline bg-white/5 border-white/20 text-white hover:bg-white hover:text-primary mt-[2rem]">
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="flex flex-col gap-[1.5rem]">
                    <div className="flex flex-col">
                      <label className="form-label font-bold text-[0.85rem] mb-[0.5rem] text-white/80" htmlFor="contact-name">Full Name</label>
                      <input
                        type="text"
                        id="contact-name"
                        placeholder="Your name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="form-input bg-white/[0.05] border-white/20 text-white placeholder-white/30 focus:bg-white/[0.08]"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="form-label font-bold text-[0.85rem] mb-[0.5rem] text-white/80" htmlFor="contact-email">Email Address</label>
                      <input
                        type="email"
                        id="contact-email"
                        placeholder="Your email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="form-input bg-white/[0.05] border-white/20 text-white placeholder-white/30 focus:bg-white/[0.08]"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="form-label font-bold text-[0.85rem] mb-[0.5rem] text-white/80" htmlFor="contact-subj">Subject</label>
                      <input
                        type="text"
                        id="contact-subj"
                        placeholder="How can we help?"
                        value={contactForm.subject}
                        onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                        className="form-input bg-white/[0.05] border-white/20 text-white placeholder-white/30 focus:bg-white/[0.08]"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="form-label font-bold text-[0.85rem] mb-[0.5rem] text-white/80" htmlFor="contact-msg">Message</label>
                      <textarea
                        id="contact-msg"
                        placeholder="Write your message here..."
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        className="form-textarea bg-white/[0.05] border-white/20 text-white placeholder-white/30 focus:bg-white/[0.08]"
                        rows={5}
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn--primary btn--lg w-full mt-[1rem] shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
                      {contactStatus === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </RevealSection>
          </div>
        </div>
      </section>
    </div>
  );
}
