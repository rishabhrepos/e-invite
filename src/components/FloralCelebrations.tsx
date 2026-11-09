import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface EventItem {
  id: string;
  name: string;
  nameHi: string;
  navBg: string;
  navAccent: string;
  ecBg: string;
  ecAccent: string;
  ecOnAccent: string;
  artwork: string;
  corners: [string, string, string, string];
  date: string;
  dateHi: string;
  timeStart: string;
  timeEnd: string;
  timeHi: string;
  venue: string;
  venueHi: string;
  mapUrl: string;
  description: string;
  descriptionHi: string;
  calendarDates: string;
}

const EVENTS: EventItem[] = [
  {
    id: 'haldi',
    name: 'Haldi',
    nameHi: 'हल्दी',
    navBg: '#fffbeb',
    navAccent: '#fbbf24',
    ecBg: '#fffbeb',
    ecAccent: '#fbbf24',
    ecOnAccent: '#000000',
    artwork: '/artwork/3b98e832e6936b3b112a/960.webp',
    corners: [
      '/artwork/a641cb3a246c20dd9b8a/160.webp',
      '/artwork/a508b1086628b7b2fc13/160.webp',
      '/artwork/6065f969f6ac3275419a/160.webp',
      '/artwork/ed5cc0b5e1bd345f03c9/160.webp',
    ],
    date: '09 December 2026',
    dateHi: '०९ दिसंबर २०२६ (बुधवार)',
    timeStart: '10:00 am',
    timeEnd: '2:00 pm',
    timeHi: 'प्रातः १०:०० से दोपहर २:०० बजे तक',
    venue: 'Sharda Vihar Colony, Sector B, Near Natiniyadai, Varanasi',
    venueHi: 'शारदा विहार कॉलोनी, सेक्टर बी, नतिनियादाई के पास, वाराणसी',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Sharda+Vihar+Colony+Sector+B+Near+Natiniyadai+Varanasi',
    description: 'Join us for our auspicious Haldi ceremony filled with turmeric, music, and blessings.',
    descriptionHi: 'हल्दी के पावन उबटन और मंगल गीतों के साथ वैवाहिक उत्सव का शुभारंभ।',
    calendarDates: '20261209T043000Z/20261209T083000Z',
  },
  {
    id: 'mehendi',
    name: 'Mehendi',
    nameHi: 'मेहंदी',
    navBg: '#f0fdf4',
    navAccent: '#166534',
    ecBg: '#f0fdf4',
    ecAccent: '#166534',
    ecOnAccent: '#ffffff',
    artwork: '/artwork/1f4204aa7561c3620d37/960.webp',
    corners: [
      '/artwork/f4f8dcb91b52c6e89906/160.webp',
      '/artwork/575e39f1b93e4815db95/160.webp',
      '/artwork/8d09468bd01d36907514/160.webp',
      '/artwork/b04fa62e21482329b35f/160.webp',
    ],
    date: '10 December 2026',
    dateHi: '१० दिसंबर २०२६ (गुरुवार)',
    timeStart: '4:00 pm',
    timeEnd: '7:30 pm',
    timeHi: 'अपराह्न ४:०० से सायं ७:३० बजे तक',
    venue: 'Sharda Vihar Colony, Sector B, Near Natiniyadai, Varanasi',
    venueHi: 'शारदा विहार कॉलोनी, सेक्टर बी, नतिनियादाई के पास, वाराणसी',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Sharda+Vihar+Colony+Sector+B+Near+Natiniyadai+Varanasi',
    description: 'Adorning hands with auspicious henna designs, folk beats, and joyous smiles.',
    descriptionHi: 'हाथों में रचेगी शगुन की मेहंदी और सजेगा खुशियों का संसार।',
    calendarDates: '20261210T103000Z/20261210T140000Z',
  },
  {
    id: 'sangeet',
    name: 'Sangeet',
    nameHi: 'संगीत',
    navBg: '#f4e9ff',
    navAccent: '#5b21b6',
    ecBg: '#f4e9ff',
    ecAccent: '#5b21b6',
    ecOnAccent: '#ffffff',
    artwork: '/artwork/09b9a81872f3790cb9e8/960.webp',
    corners: [
      '/artwork/559788e126c72e472af2/160.webp',
      '/artwork/e1795b7b843f21c347ea/160.webp',
      '/artwork/325e367c48a01602c993/160.webp',
      '/artwork/0f300f1fc97426ac2845/160.webp',
    ],
    date: '10 December 2026',
    dateHi: '१० दिसंबर २०२६ (गुरुवार)',
    timeStart: '7:30 pm',
    timeEnd: '11:30 pm',
    timeHi: 'सायं ७:३० से रात्रि ११:३० बजे तक',
    venue: 'Sharda Vihar Colony, Sector B, Near Natiniyadai, Varanasi',
    venueHi: 'शारदा विहार कॉलोनी, सेक्टर बी, नतिनियादाई के पास, वाराणसी',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Sharda+Vihar+Colony+Sector+B+Near+Natiniyadai+Varanasi',
    description: 'An evening of melodies, celebration, dance, and unforgettable memories.',
    descriptionHi: 'सुरों, तालों और नृत्य के संग हर्षोल्लास भरी संगीतमय शाम।',
    calendarDates: '20261210T140000Z/20261210T180000Z',
  },
  {
    id: 'shaadi',
    name: 'Shaadi',
    nameHi: 'शुभ विवाह',
    navBg: '#fdece0',
    navAccent: '#be185d',
    ecBg: '#fdece0',
    ecAccent: '#be185d',
    ecOnAccent: '#ffffff',
    artwork: '/artwork/3af2584f3acaff1a5bb8/960.webp',
    corners: [
      '/artwork/61d9351297851b92e6ce/160.webp',
      '/artwork/a35ea22444fc2cf65799/160.webp',
      '/artwork/2d865c04af139ffb0b47/160.webp',
      '/artwork/34fbd207816057630388/160.webp',
    ],
    date: '11 December 2026',
    dateHi: '११ दिसंबर २०२६ (शुक्रवार)',
    timeStart: '6:00 pm',
    timeEnd: '11:00 pm',
    timeHi: 'सायं ६:०० बजे से (शुभ लगन, जयमाला एवं सात फेरे)',
    venue: 'Royal Green Garden, Near Natiniyadai, Varanasi',
    venueHi: 'रॉयल ग्रीन गार्डन, नतिनियादाई के पास, वाराणसी',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Royal+Green+Garden+Varanasi+near+Natiniyadai',
    description: 'Join us as we take our sacred wedding vows and celebrate our union.',
    descriptionHi: 'अग्नि को साक्षी मानकर सात फेरों के साथ जीवनभर का पावन बंधन।',
    calendarDates: '20261211T123000Z/20261211T173000Z',
  },
];

export const FloralCelebrations: React.FC = () => {
  const { lang, t } = useLanguage();

  const downloadIcs = (event: EventItem) => {
    const ics = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Hues & Whispers//EN',
      'BEGIN:VEVENT',
      `SUMMARY:${event.name} | Purva Sharma & Rishabh Mishra`,
      `DESCRIPTION:${event.description}`,
      `LOCATION:${event.venue}`,
      `DTSTART:${event.calendarDates.split('/')[0]}`,
      `DTEND:${event.calendarDates.split('/')[1]}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${event.id}-celebration.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="floral-celebrations" id="celebrations" aria-labelledby="celebrations-title">
      <div className="floral-section-card celebrations-shell">
        <div className="celebrations-shell__motif" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
        <p className="floral-section-label">
          {t('The Celebrations', 'मांगलिक कार्यक्रम')}
        </p>
        <h2 id="celebrations-title">
          {t('Join us for every celebration.', 'उत्सव एवं रस्में')}
        </h2>
        <p className="celebrations-introduction">
          {t(
            "We're eagerly waiting to celebrate with you. Join us for good company, plenty of laughter, and moments worth sharing.",
            'हमारे इस पावन उत्सव के प्रत्येक मांगलिक अवसर पर आपकी गरिमामयी उपस्थिति सादर प्रार्थनीय है।'
          )}
        </p>

        <nav className="floral-event-nav" aria-label="Jump to an event">
          {EVENTS.map((e) => (
            <a
              key={e.id}
              href={`#${e.id}`}
              style={{
                // @ts-expect-error custom styles
                '--event-nav-accent': e.navAccent,
                '--event-nav-bg': e.navBg,
              }}
            >
              {lang === 'hi' ? e.nameHi : e.name}
            </a>
          ))}
        </nav>
      </div>

      <div className="floral-event-list">
        {EVENTS.map((e) => (
          <article
            key={e.id}
            id={e.id}
            className="ec-card"
            data-event-type={e.id}
            aria-labelledby={`${e.id}-title`}
            style={{
              // @ts-expect-error custom styles
              '--ec-bg': e.ecBg,
              '--ec-accent': e.ecAccent,
              '--ec-on-accent': e.ecOnAccent,
            }}
          >
            <img className="ec-corner ec-corner--tl" src={e.corners[0]} alt="" loading="lazy" />
            <img className="ec-corner ec-corner--tr" src={e.corners[1]} alt="" loading="lazy" />
            <img className="ec-corner ec-corner--bl" src={e.corners[2]} alt="" loading="lazy" />
            <img className="ec-corner ec-corner--br" src={e.corners[3]} alt="" loading="lazy" />

            <div className="ec-layout">
              <div className="ec-title-section">
                <p className="ec-preamble">
                  {lang === 'hi' ? '· मांगलिक अवसर ·' : '· Wedding Event ·'}
                </p>
                <h3 id={`${e.id}-title`} className="ec-event-name">
                  {lang === 'hi' ? e.nameHi : e.name}
                </h3>
                <p className="ec-description ec-description--desktop">
                  {lang === 'hi' ? e.descriptionHi : e.description}
                </p>
              </div>

              <div className="ec-image-panel">
                <img
                  className="ec-characters"
                  src={e.artwork}
                  alt={`Cartoon couple celebrating ${e.name}`}
                  loading="lazy"
                />
              </div>

              <p className="ec-description ec-description--mobile">
                {lang === 'hi' ? e.descriptionHi : e.description}
              </p>

              <div className="ec-details-section">
                <div className="ec-details">
                  <div className="ec-detail-row">
                    <div className="ec-icon-wrap" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <rect x="4" y="6" width="16" height="14" rx="3" />
                        <path d="M8 3.8v4.4M16 3.8v4.4M4 10h16" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div className="ec-detail-content">
                      <span className="ec-detail-label">{t('Date', 'दिनांक')}</span>
                      <time className="ec-detail-value">
                        {lang === 'hi' ? e.dateHi : e.date}
                      </time>
                    </div>
                  </div>

                  <div className="ec-detail-row">
                    <div className="ec-icon-wrap" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <circle cx="12" cy="12" r="8.5" />
                        <path d="M12 7.8V12l3 1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="ec-detail-content">
                      <span className="ec-detail-label">{t('Time', 'समय')}</span>
                      <span className="ec-detail-value">
                        {lang === 'hi' ? (
                          <span>{e.timeHi}</span>
                        ) : (
                          <>
                            <time>{e.timeStart}</time> &ndash; <time>{e.timeEnd}</time>
                          </>
                        )}
                      </span>
                    </div>
                  </div>

                  <div className="ec-detail-row">
                    <div className="ec-icon-wrap" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <path
                          d="M12 21c3.5-4.2 6-7.2 6-10.5A6 6 0 0 0 6 10.5C6 13.8 8.5 16.8 12 21Z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle cx="12" cy="10" r="2.3" />
                      </svg>
                    </div>
                    <div className="ec-detail-content">
                      <span className="ec-detail-label">{t('Venue', 'स्थान')}</span>
                      <span className="ec-detail-value">
                        {lang === 'hi' ? e.venueHi : e.venue}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="ec-actions">
                  <a
                    className="ec-btn ec-btn--primary"
                    href={e.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Get directions for ${e.name} (opens a new tab)`}
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0ZM15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    {t('Get Directions', 'दिशा-निर्देश देखें')}
                  </a>

                  <details className="floral-calendar">
                    <summary className="ec-btn ec-btn--outline">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M7 3v4m10-4v4M4 10h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Z" />
                      </svg>
                      {t('Add to Calendar', 'कैलेंडर में जोड़ें')}
                    </summary>
                    <div className="floral-calendar-options">
                      <a
                        href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
                          `${e.name} | Purva Sharma & Rishabh Mishra`
                        )}&dates=${encodeURIComponent(e.calendarDates)}&ctz=Asia%2FKolkata&details=${encodeURIComponent(
                          e.description
                        )}&location=${encodeURIComponent(e.venue)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Google Calendar <span aria-hidden="true">&nearr;</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => downloadIcs(e)}
                        className="calendar-ics-btn"
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#3d2a1e',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          width: '100%',
                          minHeight: '44px',
                          fontSize: '12px',
                          textDecoration: 'underline',
                          cursor: 'pointer',
                          padding: 0,
                          fontFamily: 'inherit',
                        }}
                      >
                        Apple / Outlook (iCal) <span aria-hidden="true">&nearr;</span>
                      </button>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
