import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { invite, art, coupleLine, type InviteEvent } from '../data/invite';
import { Icon } from './Icon';

// RFC 5545 text escaping
const icsEscape = (v: string) => v.replace(/[\\;,]/g, (c) => `\\${c}`).replace(/\n/g, '\\n');

export const FloralCelebrations: React.FC = () => {
  const { lang, t } = useLanguage();

  const downloadIcs = (event: InviteEvent) => {
    const [start, end] = event.calendarDates.split('/');
    const stamp = new Date().toISOString().replace(/[-:]|\.\d{3}/g, '');
    const ics = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Hues & Whispers//EN',
      'BEGIN:VEVENT',
      `UID:${event.id}-${invite.slug}@e-invite`,
      `DTSTAMP:${stamp}`,
      `SUMMARY:${icsEscape(`${event.name.en} | ${coupleLine('en')}`)}`,
      `DESCRIPTION:${icsEscape(event.description.en)}`,
      `LOCATION:${icsEscape(event.venue.en)}`,
      `DTSTART:${start}`,
      `DTEND:${end}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const url = URL.createObjectURL(new Blob([ics], { type: 'text/calendar;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = `${event.id}-celebration.ics`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url)); // Safari needs the URL alive past click()
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
          {invite.events.map((e) => (
            <a
              key={e.id}
              href={`#${e.id}`}
              style={{
                '--event-nav-accent': e.accent,
                '--event-nav-bg': e.bg,
              } as React.CSSProperties}
            >
              {e.name[lang]}
            </a>
          ))}
        </nav>
      </div>

      <div className="floral-event-list">
        {invite.events.map((e) => (
          <article
            key={e.id}
            id={e.id}
            className="ec-card"
            data-event-type={e.id}
            aria-labelledby={`${e.id}-title`}
            style={{
              '--ec-bg': e.bg,
              '--ec-accent': e.accent,
              '--ec-on-accent': e.onAccent,
            } as React.CSSProperties}
          >
            <img className="ec-corner ec-corner--tl" src={e.corners[0]} alt="" loading="lazy" />
            <img className="ec-corner ec-corner--tr" src={e.corners[1]} alt="" loading="lazy" />
            <img className="ec-corner ec-corner--bl" src={e.corners[2]} alt="" loading="lazy" />
            <img className="ec-corner ec-corner--br" src={e.corners[3]} alt="" loading="lazy" />

            <div className="ec-layout">
              <div className="ec-title-section">
                <p className="ec-preamble">
                  {t('· Wedding Event ·', '· मांगलिक अवसर ·')}
                </p>
                <h3 id={`${e.id}-title`} className="ec-event-name">
                  {e.name[lang]}
                </h3>
                <p className="ec-description ec-description--desktop">
                  {e.description[lang]}
                </p>
              </div>

              <div className="ec-image-panel">
                <img
                  className="ec-characters"
                  {...art(e.artwork)}
                  sizes="(min-width: 1200px) 480px, (min-width: 768px) 40vw, 90vw"
                  alt={`Cartoon couple celebrating ${e.name.en}`}
                  loading="lazy"
                />
              </div>

              <p className="ec-description ec-description--mobile">
                {e.description[lang]}
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
                        {e.date[lang]}
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
                        {e.time[lang]}
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
                        {e.venue[lang]}
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
                    aria-label={`Get directions for ${e.name.en} (opens a new tab)`}
                  >
                    <Icon name="pin" size={15} />
                    {t('Get Directions', 'दिशा-निर्देश देखें')}
                  </a>

                  <details className="floral-calendar">
                    <summary className="ec-btn ec-btn--outline">
                      <Icon name="calendar" size={15} />
                      {t('Add to Calendar', 'कैलेंडर में जोड़ें')}
                    </summary>
                    <div className="floral-calendar-options">
                      <a
                        href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
                          `${e.name.en} | ${coupleLine('en')}`
                        )}&dates=${encodeURIComponent(e.calendarDates)}&ctz=Asia%2FKolkata&details=${encodeURIComponent(
                          e.description.en
                        )}&location=${encodeURIComponent(e.venue.en)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Google Calendar <span aria-hidden="true">&nearr;</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => downloadIcs(e)}
                        className="calendar-ics-btn"
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
