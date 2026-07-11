'use client';

import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import PrayerModal from './PrayerModal';
import FloatingLauncher from './FloatingLauncher';

export default function ClientLayout({ children }) {
  const [prayerModalOpen, setPrayerModalOpen] = useState(false);

  return (
    <>
      <Header onPrayClick={() => setPrayerModalOpen(true)} />
      <main>{children}</main>
      <Footer />
      <FloatingLauncher onPrayClick={() => setPrayerModalOpen(true)} />
      <PrayerModal
        isOpen={prayerModalOpen}
        onClose={() => setPrayerModalOpen(false)}
      />
    </>
  );
}
