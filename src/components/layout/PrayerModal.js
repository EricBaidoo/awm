'use client';

import { useState } from 'react';
import { PrayerIcon } from './Icons';

export default function PrayerModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', request: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.request.trim()) return;

    setStatus('sending');
    try {
      const res = await fetch('/api/prayer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', request: '' });
        setTimeout(() => {
          setStatus('');
          onClose();
        }, 3000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 bg-black/95 backdrop-blur-md z-[100] flex items-center justify-center transition-opacity duration-350 ease-in-out ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      <div
        className="bg-white border-[0.0625rem] border-accent/20 p-[2.5rem] sm:p-[4rem] max-w-[40rem] w-[95%] relative max-h-[90vh] overflow-y-auto animate-[fadeInUp_0.4s_cubic-bezier(0.16,1,0.3,1)] shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-[1.5rem] right-[1.5rem] text-text-muted hover:text-accent transition-colors z-[101]"
          onClick={onClose}
          aria-label="Close prayer request"
        >
          <svg className="w-[2rem] h-[2rem]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="w-[4rem] h-[4rem] mx-auto bg-primary flex items-center justify-center mb-[1.5rem] shadow-md">
          <PrayerIcon className="w-[1.8rem] h-[1.8rem] text-accent" />
        </div>
        <h3 className="text-center font-display text-[1.6rem] text-primary font-bold mb-[0.25rem]">
          Submit a Prayer Request
        </h3>
        <p className="text-center text-[0.9rem] text-text-secondary mb-[2rem]">
          Your request is confidential and delivered directly to our prayer team.
        </p>

        {status === 'success' ? (
          <div className="text-center py-[2rem] animate-[fadeInUp_0.5s_cubic-bezier(0.4,0,0.2,1)]">
            <div className="w-[4rem] h-[4rem] rounded-full bg-gradient-to-br from-[#2ecc71] to-[#27ae60] color-white text-white text-[1.8rem] flex items-center justify-center mx-auto mb-[1.5rem]">
              ✓
            </div>
            <p className="text-[1rem] text-text-primary">
              Your prayer request has been received. We are praying with you.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem] mb-[1rem]">
              <div className="flex flex-col">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name (optional)"
                  value={form.name}
                  onChange={handleChange}
                  className="form-input bg-[#f9f9f9]"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email (optional)"
                  value={form.email}
                  onChange={handleChange}
                  className="form-input bg-[#f9f9f9]"
                />
              </div>
            </div>
            <div className="flex flex-col mb-[1.5rem]">
              <textarea
                name="request"
                placeholder="Share your prayer request..."
                value={form.request}
                onChange={handleChange}
                className="form-textarea bg-[#f9f9f9] min-h-[7.5rem]"
                required
                rows={5}
              />
            </div>
            <button
              type="submit"
              className="btn btn--primary btn--lg w-full mt-[0.5rem]"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                <>
                  <span className="spinner" /> Sending...
                </>
              ) : (
                'Send Prayer Request'
              )}
            </button>
            {status === 'error' && (
              <p className="text-center text-[#e74c3c] text-[0.85rem] mt-[1rem]">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
