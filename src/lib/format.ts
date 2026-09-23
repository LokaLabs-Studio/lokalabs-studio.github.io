const longDate = new Intl.DateTimeFormat('en-GB', { dateStyle: 'long', timeZone: 'UTC' });

export const formatDate = (d: Date) => longDate.format(d);

export const isoDate = (d: Date) => d.toISOString().slice(0, 10);
