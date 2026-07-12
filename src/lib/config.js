// Site-wide configuration constants
const siteConfig = {
  // Church Info
  name: 'Anointed Word Ministries',
  shortName: 'AWM',
  tagline: 'Reconciling lives from dead places to resurrected life in Christ',
  vision: 'Reconciling individuals and families from dead places to resurrected life in Christ through the power of the Holy Spirit and ministering of the Word of God.',

  // Location
  address: '4727 Concord Pike, Wilmington, DE 19803',
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.8!2d-75.576!3d39.796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQ3JzQ1LjYiTiA3NcKwMzQnMzMuNiJX!5e0!3m2!1sen!2sus!4v1',

  // Contact
  phone: '(302) 332-0525',
  email: 'anointedwordministries@yahoo.com',
  pastorEmail: 'pastorjoycecofield@gmail.com',

  // Social
  social: {
    facebook: '#', // To be provided
    whatsapp: '#', // To be provided
  },

  // Giving
  giving: {
    cashapp: '$Anointedminstries1',
    zelle: {
      number: '(302) 332-0525',
      name: 'Anointed Word Ministries',
    },
  },

  // Leadership
  pastor: {
    name: 'Apostle Joyce Cofield',
    title: 'Senior Pastor',
    email: 'pastorjoycecofield@gmail.com',
    image: '/images/leadership/pastor-cofield.jpg',
  },

  // SEO
  siteUrl: 'https://anointedwordministries.org',
  description: 'Anointed Word Ministries — A Spirit-filled church in Wilmington, Delaware, led by Apostle Joyce Cofield. Join us for worship, prayer, and the transforming Word of God.',

  // Live Stream Schedule (Eastern Time)
  liveSchedule: {
    timezone: 'America/New_York', // ET
    windows: [
      {
        day: 0, // Sunday (0 = Sunday, 1 = Monday, etc.)
        startHour: 10, // 10:00 AM
        endHour: 13, // 1:00 PM
      }
    ],
    // The URL users will be directed to when the stream is live
    streamUrl: 'https://facebook.com', 
  }
};

export default siteConfig;
