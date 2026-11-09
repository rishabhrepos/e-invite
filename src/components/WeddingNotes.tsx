import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const WeddingNotes: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="floral-section-card note-shell" aria-labelledby="note-title">
      <div className="note-shell__header">
        <p className="floral-section-label">{t('Wedding Notes', 'स्नेह संदेश')}</p>
        <h2 id="note-title">{t('A Note From Us', 'हमारी ओर से एक संदेश')}</h2>
      </div>

      <blockquote className="note-shell__quote">
        <span className="note-shell__quote-mark" aria-hidden="true">
          &ldquo;
        </span>
        <div className="note-shell__lines">
          <p
            className="note-shell__line"
            style={{
              letterSpacing: lang === 'hi' ? 'normal' : undefined,
              lineHeight: lang === 'hi' ? 1.85 : undefined,
            }}
          >
            {t(
              'Your presence will make our celebrations complete. We look forward to sharing these special moments with you.',
              'आपकी उपस्थिति हमारे इस वैवाहिक उत्सव को पूर्ण बनाएगी। इन पावन एवं अविस्मरणीय क्षणों में आपका स्नेहिल सान्निध्य सादर प्रार्थनीय है।'
            )}
          </p>
        </div>
      </blockquote>
      <p
        className="note-shell__family-line"
        style={{ letterSpacing: lang === 'hi' ? 'normal' : undefined }}
      >
        &mdash; {t('Purva Sharma & Rishabh Mishra', 'पूर्वा शर्मा एवं ऋषभ मिश्रा')}
      </p>
    </section>
  );
};
