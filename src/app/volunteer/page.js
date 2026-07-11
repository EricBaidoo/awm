'use client';

import { useState } from 'react';
import Image from 'next/image';
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

export default function VolunteerPage() {
  const [volunteerForm, setVolunteerForm] = useState({ name: '', email: '', phone: '', ministry: 'Worship & Media', message: '' });
  const [volunteerStatus, setVolunteerStatus] = useState('');

  const handleVolunteerSubmit = async (e) => {
    e.preventDefault();
    setVolunteerStatus('sending');
    try {
      const res = await fetch('/api/volunteer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(volunteerForm),
      });

      if (res.ok) {
        setVolunteerStatus('success');
        setVolunteerForm({ name: '', email: '', phone: '', ministry: 'Worship & Media', message: '' });
      } else {
        setVolunteerStatus('error');
      }
    } catch {
      setVolunteerStatus('error');
    }
  };

  return (
    <div className="min-h-[100vh] bg-[#0a0a0a]">
      {/* Cinematic Hero */}
      <section className="relative h-[65vh] min-h-[35rem] flex items-center justify-center overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <div className="hidden">
            <Image
              src="/images/backgrounds/volunteer-bg.png"
              alt="Volunteer at Anointed Word Ministries"
              fill
              priority
              style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(6,14,42,0.85)] via-[rgba(6,14,42,0.6)] to-[#0a0a0a] z-1" />
        </div>
        <div className="relative z-10 text-white max-w-[50rem] px-[2rem] pt-[5rem]">
          <div className="animate-[fadeInDown_0.6s_ease-out]">
            {/* Sub-heading hidden per user request */}
          </div>
          <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-black mb-[1rem] leading-[1.1] animate-[fadeInUp_0.8s_ease-out]">
            Join the Dream Team
          </h1>
          <p className="text-[clamp(1.1rem,2vw,1.35rem)] text-white/80 animate-[fadeInUp_1s_ease-out]">
            Use your God-given gifts to serve others and make an impact.
          </p>
        </div>
      </section>

      {/* Main Content - Cinematic Dark Theme */}
      <section className="relative py-[8rem] px-[2rem] overflow-hidden -mt-[4rem] rounded-t-[2.5rem] bg-[#050b14] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] z-20">
        {/* Spotlight lighting */}
        <div className="absolute top-[5%] left-[-10%] w-[50vw] h-[50vw] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-10%] w-[40vw] h-[40vw] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="container max-w-[70rem] relative z-10">
          <RevealSection className="text-center mb-[5rem]">
            <h2 className="font-display text-[clamp(2.5rem,5vw,3.5rem)] font-black text-white mb-[1rem]">The Growth Track</h2>
            <p className="text-[1.15rem] text-white/70 max-w-[40rem] mx-auto font-light">
              God has an incredible purpose for your life, and the Growth Track is designed to help you connect with that purpose.
            </p>
          </RevealSection>

          <div className="flex flex-col gap-[3rem]">
            {/* Step 1: Salvation & Baptism (Glassmorphism) */}
            <RevealSection delay={0}>
              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] p-[3rem] flex flex-col md:flex-row gap-[3rem] items-center group hover:border-accent/40 hover:bg-white/[0.05] transition-all duration-500 rounded-[1.5rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[15rem] h-[15rem] bg-accent/5 rounded-full blur-[50px] group-hover:bg-accent/10 transition-colors pointer-events-none" />
                
                <div className="w-[7rem] h-[7rem] shrink-0 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:bg-accent/20 group-hover:border-accent/50 transition-all duration-500 shadow-inner">
                  <span className="font-display font-black text-[3rem] text-white/80 group-hover:text-accent transition-colors duration-300">1</span>
                </div>
                <div className="flex-1 text-center md:text-left relative z-10">
                  <h3 className="font-display text-[2rem] font-bold text-white mb-[0.75rem] group-hover:text-accent transition-colors">Know God</h3>
                  <p className="text-[1.1rem] text-white/60 leading-[1.6] mb-[2rem]">
                    Your spiritual journey begins by making the decision to follow Jesus and publicly declaring your faith through water baptism.
                  </p>
                  <button className="btn btn--outline border-white/20 text-white hover:bg-white hover:text-bg-dark">I've Decided to Follow Jesus</button>
                </div>
              </div>
            </RevealSection>

            {/* Step 2: Discover Purpose */}
            <RevealSection delay={150}>
              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] p-[3rem] flex flex-col md:flex-row gap-[3rem] items-center group hover:border-accent/40 hover:bg-white/[0.05] transition-all duration-500 rounded-[1.5rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[15rem] h-[15rem] bg-accent/5 rounded-full blur-[50px] group-hover:bg-accent/10 transition-colors pointer-events-none" />
                
                <div className="w-[7rem] h-[7rem] shrink-0 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:bg-accent/20 group-hover:border-accent/50 transition-all duration-500 shadow-inner">
                  <span className="font-display font-black text-[3rem] text-white/80 group-hover:text-accent transition-colors duration-300">2</span>
                </div>
                <div className="flex-1 text-center md:text-left relative z-10">
                  <h3 className="font-display text-[2rem] font-bold text-white mb-[0.75rem] group-hover:text-accent transition-colors">Discover Purpose</h3>
                  <p className="text-[1.1rem] text-white/60 leading-[1.6] mb-[2rem]">
                    Dive into the details of your personality, discover your gifts, and see how your design reveals your purpose in life and your best fit in ministry.
                  </p>
                  <button className="btn btn--outline border-white/20 text-white hover:bg-white hover:text-bg-dark">Sign Up for Class 201</button>
                </div>
              </div>
            </RevealSection>

            {/* Step 3: Join the Dream Team */}
            <RevealSection delay={300}>
              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] p-[3rem] flex flex-col md:flex-row gap-[3rem] items-center group hover:border-accent/40 hover:bg-white/[0.05] transition-all duration-500 rounded-[1.5rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[15rem] h-[15rem] bg-accent/5 rounded-full blur-[50px] group-hover:bg-accent/10 transition-colors pointer-events-none" />
                
                <div className="w-[7rem] h-[7rem] shrink-0 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:bg-accent/20 group-hover:border-accent/50 transition-all duration-500 shadow-inner">
                  <span className="font-display font-black text-[3rem] text-white/80 group-hover:text-accent transition-colors duration-300">3</span>
                </div>
                <div className="flex-1 text-center md:text-left relative z-10">
                  <h3 className="font-display text-[2rem] font-bold text-white mb-[0.75rem] group-hover:text-accent transition-colors">Make a Difference</h3>
                  <p className="text-[1.1rem] text-white/60 leading-[1.6] mb-[2rem]">
                    Connect to the opportunities available at Anointed Word Ministries to live out your purpose and serve others by using your God-given gifts.
                  </p>
                  <button className="btn btn--primary shadow-[0_10px_30px_rgba(212,175,55,0.2)] hover:scale-105" onClick={() => document.getElementById('volunteer-form').scrollIntoView({ behavior: 'smooth' })}>
                    Join the Dream Team
                  </button>
                </div>
              </div>
            </RevealSection>
          </div>

          {/* Volunteer Signup Form — Frosted Glass */}
          <RevealSection delay={200} className="mt-[8rem]">
            <div id="volunteer-form" className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] p-[3rem] md:p-[5rem] rounded-[2rem] relative overflow-hidden">
              {/* Form subtle glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

              <div className="text-center mb-[3rem] relative z-10">
                <h3 className="font-display text-[clamp(2rem,4vw,3rem)] font-black text-white mb-[1rem] tracking-tight">Apply to Serve</h3>
                <p className="text-white/60 mx-auto text-[1.1rem]">Fill out this form to connect with a ministry leader.</p>
              </div>

              {volunteerStatus === 'success' ? (
                <div className="text-center py-[4rem] animate-[fadeInUp_0.5s_cubic-bezier(0.4,0,0.2,1)] relative z-10">
                  <span className="inline-flex items-center justify-center w-[5rem] h-[5rem] rounded-full bg-[#2ecc71] text-white text-[2.5rem] mb-[2rem] shadow-[0_0_30px_rgba(46,204,113,0.3)]">✓</span>
                  <h3 className="font-display text-white text-[2rem] font-bold mb-[1rem]">Application Submitted</h3>
                  <p className="text-[1.1rem] text-white/70">Thank you for your willingness to serve! A ministry director will contact you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleVolunteerSubmit} className="flex flex-col gap-[1.5rem] max-w-[45rem] mx-auto relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1.5rem]">
                    <div className="flex flex-col">
                      <label className="form-label font-bold text-[0.85rem] mb-[0.5rem] text-white/80">Full Name</label>
                      <input type="text" value={volunteerForm.name} onChange={(e) => setVolunteerForm({ ...volunteerForm, name: e.target.value })} className="form-input bg-white/[0.05] border-white/20 text-white placeholder-white/30 focus:bg-white/[0.08]" required />
                    </div>
                    <div className="flex flex-col">
                      <label className="form-label font-bold text-[0.85rem] mb-[0.5rem] text-white/80">Email Address</label>
                      <input type="email" value={volunteerForm.email} onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })} className="form-input bg-white/[0.05] border-white/20 text-white placeholder-white/30 focus:bg-white/[0.08]" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1.5rem]">
                    <div className="flex flex-col">
                      <label className="form-label font-bold text-[0.85rem] mb-[0.5rem] text-white/80">Phone Number</label>
                      <input type="tel" value={volunteerForm.phone} onChange={(e) => setVolunteerForm({ ...volunteerForm, phone: e.target.value })} className="form-input bg-white/[0.05] border-white/20 text-white placeholder-white/30 focus:bg-white/[0.08]" required />
                    </div>
                    <div className="flex flex-col">
                      <label className="form-label font-bold text-[0.85rem] mb-[0.5rem] text-white/80">Area of Interest</label>
                      <select value={volunteerForm.ministry} onChange={(e) => setVolunteerForm({ ...volunteerForm, ministry: e.target.value })} className="form-select bg-white/[0.05] border-white/20 text-white focus:bg-[#1a1a1a]">
                        <option value="Worship & Media">Worship & Media</option>
                        <option value="AWM Kids">AWM Kids</option>
                        <option value="Guest Services">Guest Services (Greeters & Ushers)</option>
                        <option value="Prayer Team">Prayer Team</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label className="form-label font-bold text-[0.85rem] mb-[0.5rem] text-white/80">Why do you want to serve?</label>
                    <textarea value={volunteerForm.message} onChange={(e) => setVolunteerForm({ ...volunteerForm, message: e.target.value })} className="form-textarea bg-white/[0.05] border-white/20 text-white placeholder-white/30 focus:bg-white/[0.08]" rows={4} />
                  </div>

                  <button type="submit" className="btn btn--primary btn--lg w-full mt-[1.5rem] shadow-[0_15px_30px_rgba(212,175,55,0.25)] hover:scale-105 transition-transform">
                    {volunteerStatus === 'sending' ? 'Submitting...' : 'Submit Application'}
                  </button>
                </form>
              )}
            </div>
          </RevealSection>

        </div>
      </section>
    </div>
  );
}
