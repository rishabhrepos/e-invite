export type Language = 'en' | 'hi';

export interface Ceremony {
  id: string;
  theme: 'haldi' | 'mehndi' | 'sangeet' | 'wedding' | 'reception';
  titleEn: string;
  titleHi: string;
  taglineEn: string;
  taglineHi: string;
  dateEn: string;
  dateHi: string;
  timeEn: string;
  timeHi: string;
  muhuratEn?: string;
  muhuratHi?: string;
  venueEn: string;
  venueHi: string;
  venueAddressEn: string;
  venueAddressHi: string;
  attireEn: string;
  attireHi: string;
  attireColor: string;
  descriptionEn: string;
  descriptionHi: string;
  ritualsEn: string[];
  ritualsHi: string[];
  calendarDateStart: string; // ISO format for calendar
  calendarDateEnd: string;
}

export interface WeddingData {
  groom: {
    nameEn: string;
    nameHi: string;
    titleEn: string;
    titleHi: string;
    fatherEn: string;
    fatherHi: string;
    motherEn: string;
    motherHi: string;
    grandparentsEn: string;
    grandparentsHi: string;
    locationEn: string;
    locationHi: string;
    aboutEn: string;
    aboutHi: string;
  };
  bride: {
    nameEn: string;
    nameHi: string;
    titleEn: string;
    titleHi: string;
    fatherEn: string;
    fatherHi: string;
    motherEn: string;
    motherHi: string;
    grandparentsEn: string;
    grandparentsHi: string;
    locationEn: string;
    locationHi: string;
    aboutEn: string;
    aboutHi: string;
  };
  weddingDate: string; // YYYY-MM-DD
  weddingTime: string;
  weddingDateFormattedEn: string;
  weddingDateFormattedHi: string;
  vikramSamvat: string;
  tithiEn: string;
  tithiHi: string;
  nakshatraEn: string;
  nakshatraHi: string;
  mainVenueEn: string;
  mainVenueHi: string;
  mainVenueAddressEn: string;
  mainVenueAddressHi: string;
  hostsEn: string;
  hostsHi: string;
  rsvpContactEn: string;
  rsvpContactHi: string;
  phone: string;
}

export interface GuestWish {
  id: string;
  name: string;
  message: string;
  city?: string;
  attending: boolean;
  guestsCount?: number;
  ceremonies?: string[];
  timestamp: string;
}
