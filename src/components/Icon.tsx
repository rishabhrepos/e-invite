// Line icons shared across sections (all drawn with the same stroke style).
export const ICON = {
  heart: 'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z',
  calendar: 'M7 3v4m10-4v4M4 10h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Z',
  pin: 'M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0ZM15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
  cap: 'm2 8 10-5 10 5-10 5ZM6 10v6c4 3 8 3 12 0v-6M22 8v8',
  plane: 'm21 3-6 18-4-8-8-4ZM11 13 21 3',
  rings: 'M13 15a6 6 0 1 1-12 0 6 6 0 0 1 12 0ZM23 15a6 6 0 1 1-12 0 6 6 0 0 1 12 0ZM5 5l2-3 2 3-2 3ZM15 5l2-3 2 3-2 3Z',
} as const;

export type IconName = keyof typeof ICON;

export const Icon = ({ name, size }: { name: IconName; size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={ICON[name]} />
  </svg>
);
