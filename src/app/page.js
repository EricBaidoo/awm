import Hero from '@/components/home/Hero';
import Welcome from '@/components/home/Welcome';
import ServiceTimes from '@/components/home/ServiceTimes';
import NextSteps from '@/components/home/NextSteps';
import SermonsPreview from '@/components/home/SermonsPreview';
import MinistriesPreview from '@/components/home/MinistriesPreview';
import EventsPreview from '@/components/home/EventsPreview';
import GivingSection from '@/components/home/GivingSection';
import PrayerCTA from '@/components/home/PrayerCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <ServiceTimes />
      <NextSteps />
      <SermonsPreview />
      <MinistriesPreview />
      <EventsPreview />
      <GivingSection />
      <PrayerCTA />
    </>
  );
}
