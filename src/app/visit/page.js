'use client';

import { useState } from 'react';
import Image from 'next/image';
import siteConfig from '@/lib/config';
import { getAllServices } from '@/lib/getNextService';
import useScrollReveal from '@/hooks/useScrollReveal';
import { ChurchIcon, PhoneIcon, ZoomIcon, PrayerIcon, CheckIcon } from '@/components/layout/Icons';

// Custom apparel SVG icon for What to Wear
const HangerIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 2a3 3 0 0 0-3 3c0 .8.5 1.5 1.2 1.8L2 15v3c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-3l-8.2-8.2c.7-.3 1.2-1 1.2-1.8a3 3 0 0 0-3-3z" />
  </svg>
);

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

export default function VisitPage() {
  const services = getAllServices();
  
  // Multi-step form state
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'
  const [form, setForm] = useState({ 
    firstName: '', 
    lastName: '',
    email: '', 
    phone: '', 
    date: '',
    time: '11:00 AM',
    guests: '1', 
    bringingKids: 'no',
    kidNames: '',
    hostAssigned: true
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
      return;
    }
    
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-[100vh] bg-bg-light">
      {/* Hero */}
      <section className="relative h-[65vh] min-h-[35rem] flex items-center justify-center overflow-hidden text-center pt-[5rem]">
        <div className="absolute inset-0 z-0">
          
          <Image
            src="/images/backgrounds/visit-bg.jpg"
            alt="Background"
            fill
            priority
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[rgba(6,14,42,0.85)] to-[#0a0a0a]" />
        </div>
        <div className="relative z-2 text-white w-full max-w-[50rem] px-[1.5rem]">
          <div className="animate-[fadeInDown_0.6s_ease-out]">
            {/* Sub-heading hidden per user request */}
          </div>
          <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold mb-[1rem] leading-[1.1] animate-[fadeInUp_0.8s_ease-out]">
            Welcome Home
          </h1>
          <p className="text-[clamp(1.1rem,2vw,1.35rem)] text-white/80 mb-[2.5rem] animate-[fadeInUp_1s_ease-out]">
            Plan your visit today and we will ensure you feel the love of Christ from the moment you pull into the parking lot.
          </p>
          <div className="animate-[fadeInUp_1.1s_ease-out]">
            <a href="#plan-visit" className="btn btn--primary btn--lg shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:scale-105 transition-all duration-300">
              Schedule My Visit
            </a>
          </div>
        </div>
      </section>

      {/* What to Expect - Dark Glassmorphism */}
      <section className="py-[8rem] bg-[#0a0a0a] relative overflow-hidden">
        {/* Spotlight lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-primary/20 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[40vw] h-[40vw] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container max-w-[80rem] relative z-10 px-[2rem]">
          <RevealSection className="text-center mb-[4rem]">
            {/* Sub-heading hidden per user request */}
            <h2 className="font-display text-[clamp(2.5rem,5vw,3.5rem)] font-black text-white mb-[1rem] leading-tight">What To Expect</h2>
            <p className="text-[1.15rem] text-white/70 max-w-[40rem] mx-auto font-light">
              We know visiting a new church can be intimidating. Here is a quick guide to make you feel right at home.
            </p>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[2rem]">
            {/* Worship Card */}
            <RevealSection delay={0}>
              <div className="bg-white/[0.03] backdrop-blur-md p-[3rem_2rem] text-center border border-white/10 rounded-[1rem] shadow-lg hover:shadow-[0_20px_50px_rgba(212,175,55,0.1)] hover:-translate-y-2 hover:bg-white/[0.06] hover:border-accent/30 transition-all duration-500 h-full">
                <div className="w-[5rem] h-[5rem] rounded-full bg-white/5 flex items-center justify-center mx-auto mb-[2rem] border border-white/10 shadow-inner">
                  <ChurchIcon className="w-[2.2rem] h-[2.2rem] text-accent" />
                </div>
                <h3 className="font-display text-white text-[1.4rem] font-bold mb-[1rem]">Dynamic Worship</h3>
                <p className="text-[0.95rem] text-white/60 leading-[1.7]">
                  Our services are spirit-filled, authentic, and centered on the preaching of God's Word. A typical service lasts about 90 minutes.
                </p>
              </div>
            </RevealSection>

            {/* Clothes Card */}
            <RevealSection delay={150}>
              <div className="bg-white/[0.03] backdrop-blur-md p-[3rem_2rem] text-center border border-white/10 rounded-[1rem] shadow-lg hover:shadow-[0_20px_50px_rgba(212,175,55,0.1)] hover:-translate-y-2 hover:bg-white/[0.06] hover:border-accent/30 transition-all duration-500 h-full">
                <div className="w-[5rem] h-[5rem] rounded-full bg-white/5 flex items-center justify-center mx-auto mb-[2rem] border border-white/10 shadow-inner">
                  <HangerIcon className="w-[2.2rem] h-[2.2rem] text-accent" />
                </div>
                <h3 className="font-display text-white text-[1.4rem] font-bold mb-[1rem]">Come As You Are</h3>
                <p className="text-[0.95rem] text-white/60 leading-[1.7]">
                  Some people wear suits and dresses, while others wear jeans and t-shirts. We care about you, not what you wear.
                </p>
              </div>
            </RevealSection>

            {/* Kids Card */}
            <RevealSection delay={300}>
              <div className="bg-white/[0.03] backdrop-blur-md p-[3rem_2rem] text-center border border-white/10 rounded-[1rem] shadow-lg hover:shadow-[0_20px_50px_rgba(212,175,55,0.1)] hover:-translate-y-2 hover:bg-white/[0.06] hover:border-accent/30 transition-all duration-500 h-full">
                <div className="w-[5rem] h-[5rem] rounded-full bg-white/5 flex items-center justify-center mx-auto mb-[2rem] border border-white/10 shadow-inner">
                  <PrayerIcon className="w-[2.2rem] h-[2.2rem] text-accent" />
                </div>
                <h3 className="font-display text-white text-[1.4rem] font-bold mb-[1rem]">AWM Kids Ministry</h3>
                <p className="text-[0.95rem] text-white/60 leading-[1.7]">
                  Your children will experience a safe, fun, and engaging environment where they learn about Jesus on their level.
                </p>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Multi-Step RSVP Form — Frosted Glass Container */}
      <section id="plan-visit" className="py-[8rem] relative bg-[#f8f8f7] overflow-hidden">
        {/* Subtle background graphics */}
        <div className="absolute top-0 left-0 w-full h-[30rem] bg-gradient-to-b from-[#e8e6e0]/50 to-transparent pointer-events-none" />
        <div className="absolute -left-[20rem] top-[10rem] w-[40rem] h-[40rem] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -right-[20rem] bottom-[10rem] w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <RevealSection className="container max-w-[50rem] mx-auto px-[2rem] relative z-10">
          <div className="text-center mb-[3rem]">
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-black text-primary mb-[1rem]">Let's Plan Your Visit</h2>
            <p className="text-[1.1rem] text-text-secondary">
              We want to roll out the red carpet for you.
            </p>
          </div>

          {status === 'success' ? (
            <div className="text-center p-[4rem] bg-white/80 backdrop-blur-xl border border-white rounded-[1rem] shadow-xl">
              <div className="w-[5rem] h-[5rem] rounded-full bg-accent flex items-center justify-center mx-auto mb-[1.5rem] shadow-gold">
                <CheckIcon className="w-[2.5rem] h-[2.5rem] text-bg-dark" />
              </div>
              <h3 className="font-display text-[2rem] text-primary font-bold mb-[0.5rem]">You're All Set!</h3>
              <p className="text-[1.1rem] text-text-secondary mb-[1.5rem]">
                Your host has been assigned and your kids are pre-registered. We will see you on <strong className="text-primary">{form.date}</strong> at <strong className="text-primary">{form.time}</strong>!
              </p>
              <button onClick={() => {setStatus(''); setStep(1);}} className="btn btn--outline">Plan Another Visit</button>
            </div>
          ) : (
            <div className="bg-white/70 backdrop-blur-xl border border-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-[2rem] md:p-[4rem] rounded-[1.5rem]">
              
              {/* Stepper */}
              <div className="flex items-center justify-between mb-[4rem] relative max-w-[30rem] mx-auto">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[0.25rem] bg-black/5 z-0 rounded-full" />
                <div 
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-[0.25rem] bg-primary z-0 transition-all duration-500 rounded-full" 
                  style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }} 
                />
                
                {[1, 2, 3].map((s) => (
                  <div key={s} className="relative z-10 flex flex-col items-center gap-[0.5rem]">
                    <div className={`w-[3rem] h-[3rem] rounded-full flex items-center justify-center font-bold text-[1.1rem] transition-colors duration-300 shadow-sm ${
                      step >= s ? 'bg-primary text-white border-none shadow-md' : 'bg-white text-text-muted border-[0.125rem] border-[#e8e6e0]'
                    }`}>
                      {s < step ? <CheckIcon className="w-[1.4rem] h-[1.4rem]" /> : s}
                    </div>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit}>
                {/* Step 1: Basics */}
                {step === 1 && (
                  <div className="flex flex-col gap-[1.5rem] animate-[fadeIn_0.4s_ease-out]">
                    <h3 className="font-display font-bold text-[1.5rem] text-primary mb-[0.5rem]">1. Contact Information</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1.5rem]">
                      <div className="flex flex-col">
                        <label className="form-label">First Name</label>
                        <input type="text" name="firstName" value={form.firstName} onChange={handleChange} className="form-input bg-white/80" required />
                      </div>
                      <div className="flex flex-col">
                        <label className="form-label">Last Name</label>
                        <input type="text" name="lastName" value={form.lastName} onChange={handleChange} className="form-input bg-white/80" required />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label className="form-label">Email Address</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} className="form-input bg-white/80" required />
                    </div>
                    <div className="flex flex-col">
                      <label className="form-label">Phone Number</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} className="form-input bg-white/80" required />
                    </div>
                  </div>
                )}

                {/* Step 2: Visit Details */}
                {step === 2 && (
                  <div className="flex flex-col gap-[1.5rem] animate-[fadeIn_0.4s_ease-out]">
                    <h3 className="font-display font-bold text-[1.5rem] text-primary mb-[0.5rem]">2. Visit Details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1.5rem]">
                      <div className="flex flex-col">
                        <label className="form-label">Date of Visit</label>
                        <input type="date" name="date" value={form.date} onChange={handleChange} className="form-input bg-white/80" required />
                      </div>
                      <div className="flex flex-col">
                        <label className="form-label">Service Time</label>
                        <select name="time" value={form.time} onChange={handleChange} className="form-select bg-white/80">
                          <option value="11:00 AM">Sunday 11:00 AM</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label className="form-label">Are you bringing children?</label>
                      <div className="flex gap-[1rem]">
                        <label className={`flex-1 p-[1.25rem] border-[0.125rem] rounded-[0.5rem] text-center cursor-pointer transition-colors ${form.bringingKids === 'yes' ? 'border-primary bg-primary/5 font-bold text-primary shadow-inner' : 'border-[#e8e6e0] hover:border-primary/40 bg-white/50'}`}>
                          <input type="radio" name="bringingKids" value="yes" onChange={handleChange} checked={form.bringingKids === 'yes'} className="hidden" />
                          Yes
                        </label>
                        <label className={`flex-1 p-[1.25rem] border-[0.125rem] rounded-[0.5rem] text-center cursor-pointer transition-colors ${form.bringingKids === 'no' ? 'border-primary bg-primary/5 font-bold text-primary shadow-inner' : 'border-[#e8e6e0] hover:border-primary/40 bg-white/50'}`}>
                          <input type="radio" name="bringingKids" value="no" onChange={handleChange} checked={form.bringingKids === 'no'} className="hidden" />
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: VIP & Kids */}
                {step === 3 && (
                  <div className="flex flex-col gap-[1.5rem] animate-[fadeIn_0.4s_ease-out]">
                    <h3 className="font-display font-bold text-[1.5rem] text-primary mb-[0.5rem]">3. VIP Experience</h3>
                    
                    {form.bringingKids === 'yes' && (
                      <div className="flex flex-col bg-white/80 p-[1.5rem] border border-black/5 rounded-[0.5rem] mb-[1rem] shadow-sm">
                        <label className="form-label text-primary">Pre-Register Kids (Save time at check-in!)</label>
                        <p className="text-[0.85rem] text-text-secondary mb-[0.75rem]">Please list their names and ages (e.g. Sarah 7, John 4)</p>
                        <textarea name="kidNames" value={form.kidNames} onChange={handleChange} className="form-textarea bg-white" rows="3" placeholder="Names and ages..." />
                      </div>
                    )}

                    <div className="flex items-start gap-[1rem] p-[1.5rem] bg-accent/5 border border-accent/20 rounded-[0.5rem]">
                      <div className="mt-[0.25rem]"><CheckIcon className="w-[1.5rem] h-[1.5rem] text-accent" /></div>
                      <div>
                        <h4 className="font-bold text-primary mb-[0.25rem]">Host Assigned</h4>
                        <p className="text-[0.9rem] text-text-secondary">We will have a friendly host waiting at the front doors to show you around, help check in your kids, and grab you a cup of coffee.</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center mt-[3rem] pt-[2rem] border-t border-black/5">
                  {step > 1 ? (
                    <button type="button" onClick={() => setStep(step - 1)} className="font-bold text-text-muted hover:text-primary uppercase tracking-[0.05em] text-[0.85rem] transition-colors">
                      Back
                    </button>
                  ) : <div></div>}

                  <button type="submit" className="btn btn--primary px-[3rem] py-[1rem]" disabled={status === 'sending'}>
                    {step === 3 ? (status === 'sending' ? 'Confirming...' : 'Confirm My Visit') : 'Next Step'}
                  </button>
                </div>
              </form>
            </div>
          )}
        </RevealSection>
      </section>

      {/* Premium Location & Map Section */}
      <section className="py-[8rem] bg-[#050b14] relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-accent/10 rounded-full blur-[150px] z-0 pointer-events-none" />
        
        <div className="container relative z-10 px-[2rem]">
          <RevealSection className="text-center mb-[4rem]">
            {/* Sub-heading hidden per user request */}
            <h2 className="font-display text-[clamp(2.5rem,5vw,3.5rem)] font-black text-white mb-[1rem] leading-tight">Service Location</h2>
            <p className="text-[1.1rem] text-white/70 max-w-[40rem] mx-auto font-light">
              We are conveniently located in Wilmington, Delaware. We can't wait to worship with you this Sunday!
            </p>
          </RevealSection>

          <div className="grid lg:grid-cols-12 gap-[3rem] items-center">
            {/* Address Details */}
            <RevealSection className="lg:col-span-4 flex flex-col gap-[2rem]" delay={100}>
              <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[1rem] p-[2.5rem] hover:bg-white/[0.06] hover:border-accent/30 transition-colors duration-300">
                <div className="w-[3.5rem] h-[3.5rem] bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-[1.5rem]">
                  <ChurchIcon className="w-[1.8rem] h-[1.8rem] text-accent" />
                </div>
                <h3 className="font-display text-[1.4rem] font-bold text-white mb-[0.5rem]">Main Campus</h3>
                <p className="text-white/70 leading-relaxed mb-[1.5rem]">
                  4727 Concord Pike<br />
                  Wilmington, DE 19803
                </p>
                <a 
                  href="https://maps.google.com/?q=4727+Concord+Pike,+Wilmington,+DE" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent text-[0.9rem] font-bold hover:text-white transition-colors flex items-center gap-[0.5rem] uppercase tracking-[0.05em]"
                >
                  Get Directions <svg className="w-[1rem] h-[1rem]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>

              <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[1rem] p-[2.5rem] hover:bg-white/[0.06] hover:border-accent/30 transition-colors duration-300">
                <div className="w-[3.5rem] h-[3.5rem] bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-[1.5rem]">
                  <PhoneIcon className="w-[1.8rem] h-[1.8rem] text-accent" />
                </div>
                <h3 className="font-display text-[1.4rem] font-bold text-white mb-[0.5rem]">Contact Us</h3>
                <p className="text-white/70 leading-relaxed">
                  Call: (302) 332-0525<br />
                  Email: info@anointedword.org
                </p>
              </div>
            </RevealSection>

            {/* Premium Map Embed */}
            <RevealSection className="lg:col-span-8 h-full min-h-[30rem] md:min-h-[40rem] w-full relative rounded-[1.5rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group" delay={200}>
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0 pointer-events-none z-10" />
              
              <iframe
                src={siteConfig.mapUrl}
                width="100%"
                height="100%"
                className="absolute inset-0 border-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map showing Anointed Word Ministries location"
              />
            </RevealSection>
          </div>
        </div>
      </section>
    </div>
  );
}
