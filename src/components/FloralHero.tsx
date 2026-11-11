import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { invite, art } from '../data/invite';
import { Icon } from './Icon';

const WEDDING_TIMESTAMP = Date.parse(invite.weddingISO);
const [first, second] = invite.couple;

export const FloralHero: React.FC = () => {
  const { lang, t } = useLanguage();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = Date.now();
      const diff = Math.max(0, Math.floor((WEDDING_TIMESTAMP - now) / 1000));
      const days = Math.floor(diff / 86400);
      const hours = Math.floor((diff % 86400) / 3600);
      const minutes = Math.floor((diff % 3600) / 60);
      const seconds = diff % 60;
      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="floral-hero" aria-labelledby="couple-names">
      <div className="floral-hero-background" aria-hidden="true">
        <img
          className="hero-background-image"
          src="/artwork/d95f06435b873e08508a/1280.webp"
          srcSet="/artwork/d95f06435b873e08508a/640.webp 640w, /artwork/d95f06435b873e08508a/1280.webp 1280w, /artwork/d95f06435b873e08508a/1536.webp 1536w"
          sizes="100vw"
          width="1536"
          height="1024"
          alt=""
          loading="eager"
          fetchPriority="high"
        />
      </div>

      <div className="floral-hero-corners" aria-hidden="true">
        <img
          className="hero-corner hero-corner--tl"
          src="/artwork/f611b1498764d10c8bc8/320.webp"
          srcSet="/artwork/f611b1498764d10c8bc8/160.webp 160w, /artwork/f611b1498764d10c8bc8/320.webp 320w"
          sizes="(max-width: 767px) 30vw, (max-width: 1454px) 22vw, 320px"
          width="484"
          height="525"
          alt=""
          loading="eager"
          fetchPriority="high"
        />
        <img
          className="hero-corner hero-corner--tr"
          src="/artwork/23da43eec046afd50756/320.webp"
          srcSet="/artwork/23da43eec046afd50756/160.webp 160w, /artwork/23da43eec046afd50756/320.webp 320w"
          sizes="(max-width: 767px) 30vw, (max-width: 1454px) 22vw, 320px"
          width="559"
          height="533"
          alt=""
          loading="eager"
          fetchPriority="high"
        />
        <img
          className="hero-corner hero-corner--bl"
          src="/artwork/28bf2c120beca9d96bc2/320.webp"
          srcSet="/artwork/28bf2c120beca9d96bc2/160.webp 160w, /artwork/28bf2c120beca9d96bc2/320.webp 320w"
          sizes="(max-width: 767px) 30vw, (max-width: 1454px) 22vw, 320px"
          width="504"
          height="438"
          alt=""
          loading="lazy"
        />
        <img
          className="hero-corner hero-corner--br"
          src="/artwork/5356743a8c106cd26e08/320.webp"
          srcSet="/artwork/5356743a8c106cd26e08/160.webp 160w, /artwork/5356743a8c106cd26e08/320.webp 320w"
          sizes="(max-width: 767px) 30vw, (max-width: 1454px) 22vw, 320px"
          width="535"
          height="437"
          alt=""
          loading="lazy"
        />
      </div>

      <div className="floral-hero-grid">
        <div className="floral-hero-copy">
          <div className="hero-blessing">
            <img
              className="hero-ganesha"
              src="/lord_ganesha.svg"
              alt="Lord Ganesha"
              width="1200"
              height="1310"
            />
            <p>{t('|| Shri Ganeshay Namah ||', '॥ श्री गणेशाय नमः ॥')}</p>
          </div>

          <div className="hero-divider-ornament" aria-hidden="true">
            <span />
          </div>

          <h1 className="hero-names-title" id="couple-names">
            <span className="hero-names-bride">
              <span className="hero-name-mobile">{first.short[lang]}</span>
              <span className="hero-name-desktop">{first.full[lang]}</span>
            </span>
            <span className="hero-names-amp">&amp;</span>
            <span className="hero-names-groom">
              <span className="hero-name-mobile">{second.short[lang]}</span>
              <span className="hero-name-desktop">{second.full[lang]}</span>
            </span>
          </h1>

          <p className="hero-preamble">{t('Are Getting Married', 'परिणय सूत्र में बंधने जा रहे हैं')}</p>
          <p className="hero-hashtag">{invite.hashtag}</p>

          <div className="hero-divider-ornament" aria-hidden="true">
            <span />
          </div>

          <div className="hero-icon-row">
            <span>
              <Icon name="calendar" size={14} />
              {invite.dateLine[lang]}
            </span>
            <span className="hero-icon-row__sep" aria-hidden="true" />
            <span>
              <Icon name="pin" size={14} />
              {invite.city[lang]}
            </span>
          </div>

          <section className="wedding-countdown wedding-countdown--clay" aria-label="Wedding countdown">
            <div className="countdown-stage">
              <div className="countdown-values" role="timer">
                <div className="countdown-cell">
                  <span className="countdown-value">{String(timeLeft.days).padStart(2, '0')}</span>
                  <span className="countdown-label">{t('days', 'दिन')}</span>
                </div>
                <div className="countdown-cell">
                  <span className="countdown-value">{String(timeLeft.hours).padStart(2, '0')}</span>
                  <span className="countdown-label">{t('hours', 'घंटे')}</span>
                </div>
                <div className="countdown-cell">
                  <span className="countdown-value">{String(timeLeft.minutes).padStart(2, '0')}</span>
                  <span className="countdown-label">{t('minutes', 'मिनट')}</span>
                </div>
                <div className="countdown-cell">
                  <span className="countdown-value">{String(timeLeft.seconds).padStart(2, '0')}</span>
                  <span className="countdown-label">{t('seconds', 'सेकंड')}</span>
                </div>
              </div>
            </div>
            <p className="countdown-heading">{t('Until our wedding', 'शुभ विवाह के पावन क्षण')}</p>
          </section>
        </div>

        <div className="floral-hero-portrait">
          <img
            className="hero-characters-img"
            {...art(invite.heroPortrait)}
            sizes="(min-width: 1024px) 512px, (min-width: 480px) 448px, 92vw"
            alt={`Illustration of ${first.full.en} and ${second.full.en}`}
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>

      <a className="hero-scroll-down" href="#invitation">
        <span>{t('Scroll Down', 'नीचे देखें')}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </a>
    </section>
  );
};
