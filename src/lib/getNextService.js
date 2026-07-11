/**
 * Calculate the next upcoming service based on the current time.
 * Returns the service object and a Date for the next occurrence.
 */

const services = [
  {
    day: 0, // Sunday
    name: 'Sunday Worship Service',
    shortName: 'Sunday Service',
    time: '11:00 AM',
    hour: 11,
    minute: 0,
    type: 'in-person',
    address: '4727 Concord Pike, Wilmington, DE 19803',
    icon: '⛪',
    primary: true,
  },
  {
    day: 2, // Tuesday
    name: 'Night Prayer',
    shortName: 'Tuesday Prayer',
    time: '8:00 PM',
    hour: 20,
    minute: 0,
    type: 'conference-call',
    dialIn: '(605) 472-5528',
    passcode: '247705',
    icon: '📞',
  },
  {
    day: 4, // Thursday
    name: 'Bible Study',
    shortName: 'Bible Study',
    time: '7:00 PM',
    hour: 19,
    minute: 0,
    type: 'zoom',
    zoomId: '881 6448 5478',
    zoomPasscode: '695271',
    icon: '📖',
  },
  {
    day: 5, // Friday
    name: 'Intercessory Prayer',
    shortName: 'Friday Prayer',
    time: '7:00 PM',
    hour: 19,
    minute: 0,
    type: 'conference-call',
    dialIn: '(605) 472-5528',
    passcode: '247705',
    icon: '🙏',
  },
];

export function getNextService() {
  const now = new Date();
  const currentDay = now.getDay();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  let closest = null;
  let closestDate = null;
  let minDiff = Infinity;

  for (const service of services) {
    let daysAhead = service.day - currentDay;

    if (daysAhead < 0) {
      daysAhead += 7;
    }

    if (daysAhead === 0) {
      // Same day — check if the service is still upcoming
      const serviceMinutes = service.hour * 60 + service.minute;
      const currentMinutes = currentHour * 60 + currentMinute;

      if (serviceMinutes <= currentMinutes) {
        // Service already started/passed today, next week
        daysAhead = 7;
      }
    }

    const serviceDate = new Date(now);
    serviceDate.setDate(now.getDate() + daysAhead);
    serviceDate.setHours(service.hour, service.minute, 0, 0);

    const diff = serviceDate.getTime() - now.getTime();

    if (diff < minDiff) {
      minDiff = diff;
      closest = service;
      closestDate = serviceDate;
    }
  }

  return {
    service: closest,
    date: closestDate,
    timeUntil: minDiff,
  };
}

export function getAllServices() {
  return services;
}

export default services;
