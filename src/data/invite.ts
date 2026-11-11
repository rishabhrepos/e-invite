import rishabh from './rishabh.json';
import purva from './purva.json';
import type { Language } from '../context/LanguageContext';

export type L = Record<Language, string>;
export type Art = { base: string; widths: number[]; w: number; h: number };
export type Invite = typeof rishabh;
export type InviteEvent = Invite['events'][number];

const invites: Record<string, Invite> = { rishabh, purva };

// Chosen once per page by <html data-invite="..."> in rishabh/index.html / purva/index.html.
export const invite = invites[document.documentElement.dataset.invite ?? ''] ?? rishabh;

/** "A & B" / "A एवं B" in the couple's display order. */
export const coupleLine = (lang: Language, key: 'full' | 'short' = 'full') =>
  invite.couple.map((p) => p[key][lang]).join(lang === 'hi' ? ' एवं ' : ' & ');

/** src + srcSet for an artwork folder of /<width>.webp files. src = largest width <= 640. */
export const art = (a: Art) => ({
  src: `${a.base}/${Math.max(...a.widths.filter((w) => w <= 640))}.webp`,
  srcSet: a.widths.map((w) => `${a.base}/${w}.webp ${w}w`).join(', '),
  width: a.w,
  height: a.h,
});
