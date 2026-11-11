import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';
import { coupleLine } from '../data/invite';

interface EnvelopeEntranceProps {
  onOpen: () => void;
}

export const EnvelopeEntrance: React.FC<EnvelopeEntranceProps> = ({ onOpen }) => {
  const { lang, setLang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(true);
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = (e: React.FormEvent) => {
    e.preventDefault();
    if (isOpening || !isOpen) return;
    setIsOpening(true);
    onOpen();

    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.55 },
      colors: ['#c12023', '#f8d777', '#f6c453', '#ffffff', '#e36044'],
    });

    setTimeout(() => setIsOpen(false), 3200);
  };

  if (!isOpen) return null;

  return (
    <dialog
      className={`envelope-entrance envelope-rose ${isOpening ? 'is-opening' : ''}`}
      data-envelope-entrance
      open
      aria-label={`Wedding invitation for ${coupleLine('en', 'short').replace('&', 'and')}`}
    >
      <svg
        className="envelope-confetti"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <path
            id="envelope-confetti-heart"
            d="M0 12C-5 7-16 0-13-7C-10-14-3-13 0-7C3-13 10-14 13-7C16 0 5 7 0 12Z"
          />
          <g id="envelope-confetti-letter" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round">
            <rect x="-17" y="-12" width="34" height="24" rx="2" />
            <path d="m-16-11 16 13 16-13M-16 11-5 0M16 11 5 0" />
          </g>
          <pattern id="envelope-confetti-pattern" width="460" height="520" patternUnits="userSpaceOnUse">
            <g fill="none" stroke="currentColor" strokeWidth="1.5">
              <use href="#envelope-confetti-heart" transform="translate(48 43) rotate(-24) scale(.9)" />
              <use href="#envelope-confetti-heart" transform="translate(294 64) rotate(19) scale(1.2)" />
              <use href="#envelope-confetti-heart" transform="translate(175 181) rotate(-12) scale(.65)" />
              <use href="#envelope-confetti-heart" transform="translate(413 242) rotate(32)" />
              <use href="#envelope-confetti-heart" transform="translate(58 346) rotate(14) scale(1.15)" />
              <use href="#envelope-confetti-heart" transform="translate(259 397) rotate(-32) scale(.8)" />
              <use href="#envelope-confetti-heart" transform="translate(394 466) rotate(9) scale(.65)" />
            </g>
            <g fill="currentColor" opacity=".6">
              <use href="#envelope-confetti-heart" transform="translate(97 236) rotate(28) scale(.45)" />
              <use href="#envelope-confetti-heart" transform="translate(343 150) rotate(-16) scale(.5)" />
              <use href="#envelope-confetti-heart" transform="translate(152 479) rotate(-18) scale(.55)" />
            </g>
            <use href="#envelope-confetti-letter" transform="translate(162 64) rotate(17) scale(.85)" />
            <use href="#envelope-confetti-letter" transform="translate(408 107) rotate(-24)" />
            <use href="#envelope-confetti-letter" transform="translate(37 158) rotate(-11) scale(.7)" />
            <use href="#envelope-confetti-letter" transform="translate(279 265) rotate(24) scale(1.1)" />
            <use href="#envelope-confetti-letter" transform="translate(170 327) rotate(-29) scale(.8)" />
            <use href="#envelope-confetti-letter" transform="translate(363 367) rotate(13) scale(.7)" />
            <use href="#envelope-confetti-letter" transform="translate(53 471) rotate(-16)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#envelope-confetti-pattern)" />
      </svg>

      <div className="envelope-scene">
        <div className="envelope">
          <div className="envelope-back" aria-hidden="true" />
          <div className="envelope-letter" aria-hidden="true">
            <span className="envelope-letter-mark">&#10022;</span>
            <span>{t('A beautiful beginning', 'एक ख़ूबसूरत शुरुआत')}</span>
            <span className="envelope-letter-rule" />
          </div>
          <div className="envelope-pocket" aria-hidden="true" />
          <div className="envelope-fold envelope-fold-left" aria-hidden="true" />
          <div className="envelope-fold envelope-fold-right" aria-hidden="true" />
          <div className="envelope-flap-shadow" aria-hidden="true" />
          <div className="envelope-flap" aria-hidden="true" />

          <form onSubmit={handleOpen} className="envelope-open-form">
            <button
              type="submit"
              className="envelope-open-button"
              data-envelope-open
              disabled={isOpening}
              aria-label={t('Tap here to open invitation', 'आमंत्रण पत्र खोलने के लिए यहाँ टैप करें')}
            >
              <span className="envelope-seal" aria-hidden="true">
                <svg viewBox="0 0 100 100" className="envelope-seal-ring" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="44" stroke="#f47858" strokeWidth="1.2" opacity=".6" />
                  <circle cx="50" cy="51" r="29" stroke="#500707" strokeWidth="2.2" opacity=".7" />
                  <circle cx="50" cy="49" r="29" stroke="#e36044" strokeWidth=".9" opacity=".65" />
                  <g stroke="#540808" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M50 64C39 63 32 55 33 45C34 35 44 30 52 34C60 27 72 37 67 47C76 57 61 68 50 64Z" />
                    <path d="M43 39C43 31 54 32 57 39C66 36 68 44 60 49C61 58 50 60 45 53C35 51 36 42 43 39Z" />
                    <path d="M45 42C47 37 55 38 56 44L49 49L45 42ZM49 49L45 53M56 44L60 49M33 45L38 49M57 39L52 34" />
                    <path d="M50 65V78M50 73C41 76 34 71 32 63C40 62 47 66 50 73ZM50 70C58 71 65 67 68 60C58 58 52 62 50 70Z" />
                  </g>
                  <g stroke="#f18764" strokeWidth=".85" strokeLinecap="round" strokeLinejoin="round" opacity=".7" transform="translate(-.7 -1)">
                    <path d="M50 64C39 63 32 55 33 45C34 35 44 30 52 34C60 27 72 37 67 47C76 57 61 68 50 64Z" />
                    <path d="M43 39C43 31 54 32 57 39C66 36 68 44 60 49C61 58 50 60 45 53C35 51 36 42 43 39ZM45 42C47 37 55 38 56 44L49 49L45 42Z" />
                    <path d="M50 65V78M50 73C41 76 34 71 32 63C40 62 47 66 50 73ZM50 70C58 71 65 67 68 60C58 58 52 62 50 70Z" />
                  </g>
                </svg>
              </span>
              <svg className="envelope-open-label" viewBox="0 0 200 200" aria-hidden="true">
                <defs>
                  <path id="envelope-seal-caption" d="M100 170a70 70 0 1 1 0-140a70 70 0 1 1 0 140" />
                </defs>
                <text textAnchor="middle">
                  <textPath href="#envelope-seal-caption" startOffset="50%">
                    {t('TAP HERE', 'खोलें')}
                  </textPath>
                </text>
                <path d="M100 179l-6-6c-5-5 2-11 6-5c4-6 11 0 6 5Z" />
              </svg>
            </button>
          </form>
        </div>

        {/* Language Selection bar placed prominently below the envelope */}
        <div className="envelope-lang-bar" aria-label="Select Language / भाषा चुनें">
          <span className="envelope-lang-heading">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20M12 2a14.5 14.5 0 0 1 0 20M2 12h20" />
            </svg>
            <span>{t('Select Language:', 'भाषा चुनें:')}</span>
          </span>
          <div className="envelope-lang-options" role="radiogroup" aria-label="Language options">
            <button
              type="button"
              className={`envelope-lang-chip ${lang === 'en' ? 'is-selected' : ''}`}
              onClick={() => setLang('en')}
              aria-checked={lang === 'en'}
              role="radio"
            >
              English
            </button>
            <span className="envelope-lang-divider" aria-hidden="true">|</span>
            <button
              type="button"
              className={`envelope-lang-chip ${lang === 'hi' ? 'is-selected' : ''}`}
              onClick={() => setLang('hi')}
              aria-checked={lang === 'hi'}
              role="radio"
            >
              हिन्दी
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};
