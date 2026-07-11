'use client';

import { useState, useEffect } from 'react';
import { getNextService } from '@/lib/getNextService';

export default function useCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [nextService, setNextService] = useState(null);

  useEffect(() => {
    console.log('⏰ useCountdown: useEffect triggered, setting up timer...');
    const update = () => {
      const { service, date } = getNextService();
      console.log('⏰ useCountdown: Next Service found:', service?.name, 'at', date?.toString());
      setNextService(service);

      const now = new Date().getTime();
      const distance = date.getTime() - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const calculatedTime = {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      };
      
      console.log('⏰ useCountdown: Calculated time left:', calculatedTime);
      setTimeLeft(calculatedTime);
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return { timeLeft, nextService };
}
