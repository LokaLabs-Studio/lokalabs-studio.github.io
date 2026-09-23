export const SITE = {
  name: 'Loka Labs',
  url: 'https://lokalabs-studio.github.io',
  email: 'lokalabs.studio@gmail.com',
  locale: 'en',
  legal: {
    ownerName: 'Yaser Ibrahim Abdullah Allahim',
    country: 'Kingdom of Saudi Arabia',
  },
  description:
    'Loka Labs makes local-first apps that live on your phone, work offline and stay yours. No subscriptions, no accounts.',
} as const;

export const EMAIL_PARTS = SITE.email.split('@') as [string, string];

export const THEME_COLOR = {
  brand: '#2563EB',
  paper: '#F7F6F3',
  ink: '#0A0C10',
} as const;
