import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const InvitationCard: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="inv-card" id="invitation" aria-label="An invitation from our families">
      <img
          className="inv-corner inv-corner--tl"
          src="/artwork/629d871098ccdc336585/160.webp"
          srcSet="/artwork/629d871098ccdc336585/160.webp 160w, /artwork/629d871098ccdc336585/275.webp 275w"
          sizes="(max-width: 767px) 22vw, 150px"
          width="275"
          height="526"
          alt=""
          loading="lazy"
        />
        <img
          className="inv-corner inv-corner--tr"
          src="/artwork/5218fefe5bdc73055d75/160.webp"
          srcSet="/artwork/5218fefe5bdc73055d75/160.webp 160w, /artwork/5218fefe5bdc73055d75/270.webp 270w"
          sizes="(max-width: 767px) 22vw, 150px"
          width="270"
          height="537"
          alt=""
          loading="lazy"
        />
        <img
          className="inv-corner inv-corner--bl"
          src="/artwork/2740ecffde7c0b189ac3/160.webp"
          srcSet="/artwork/2740ecffde7c0b189ac3/160.webp 160w, /artwork/2740ecffde7c0b189ac3/320.webp 320w"
          sizes="(max-width: 767px) 22vw, 150px"
          width="440"
          height="897"
          alt=""
          loading="lazy"
        />
        <img
          className="inv-corner inv-corner--br"
          src="/artwork/d0fde787562b0a34ef7e/160.webp"
          srcSet="/artwork/d0fde787562b0a34ef7e/160.webp 160w, /artwork/d0fde787562b0a34ef7e/320.webp 320w"
          sizes="(max-width: 767px) 22vw, 150px"
          width="440"
          height="892"
          alt=""
          loading="lazy"
        />

        <div className="inv-card__inner">
          <p className="inv-preamble">
            {lang === 'hi'
              ? 'परमपिता परमात्मा के आशीर्वाद एवं समस्त परिजनों के साथ\nहम आपको सादर आमंत्रित करते हैं\nपरिणय उत्सव में'
              : `Together with our families\nWe joyfully invite you to\nCelebrate the wedding of`}
          </p>

          <h2 className="inv-names">
            <span>{t('Purva Sharma', 'पूर्वा शर्मा')}</span>
            <span className="inv-names__amp">&amp;</span>
            <span>{t('Rishabh Mishra', 'ऋषभ मिश्रा')}</span>
          </h2>

          <div className="inv-heart-divider" aria-hidden="true">
            <span />
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
            </svg>
            <span />
          </div>

          <div className="inv-families-wrap">
            <p className="inv-families__label-center">
              {t('With love & blessings of', 'स्नेह एवं शुभाशीर्वाद')}
            </p>
            <div className="inv-families">
              <div className="inv-families__side">
                <p className="inv-families__names">
                  {lang === 'hi' ? (
                    <>
                      श्री सुशील कुमार
                      <br />
                      एवं श्रीमती प्रवेश शर्मा
                    </>
                  ) : (
                    <>
                      Shushil Kumar
                      <br />
                      &amp; Pravesh Sharma
                    </>
                  )}
                </p>
                <p className="inv-families__role">
                  {t("Bride's parents", 'कन्या के माता-पिता')}
                </p>
              </div>
              <div className="inv-families__sep" aria-hidden="true" />
              <div className="inv-families__side">
                <p className="inv-families__names">
                  {lang === 'hi' ? (
                    <>
                      श्री राम बालक
                      <br />
                      एवं श्रीमती सरोजनी मिश्रा
                    </>
                  ) : (
                    <>
                      Ram Balak
                      <br />
                      &amp; Sarojani Mishra
                    </>
                  )}
                </p>
                <p className="inv-families__role">
                  {t("Groom's parents", 'वर के माता-पिता')}
                </p>
              </div>
            </div>
          </div>

          <div className="inv-detail">
            <svg
              width="18"
              height="18"
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
            <div>
              <p className="inv-detail__main">
                {t('Friday, 11 December 2026', 'शुक्रवार, ११ दिसंबर २०२६')}
              </p>
              <p className="inv-detail__sub">
                {t('6:00 pm onwards', 'सायं ६:०० बजे से')}
              </p>
            </div>
          </div>

          <div className="inv-detail">
            <svg
              width="18"
              height="18"
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
            <div>
              <p className="inv-detail__main">
                {t('Royal Green Garden, Varanasi', 'रॉयल ग्रीन गार्डन, वाराणसी')}
              </p>
              <p className="inv-detail__sub">
                {t('Near Natiniyadai', 'नतिनियादाई के पास')}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
