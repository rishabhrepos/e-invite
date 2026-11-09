import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const WeddingBlessingQuote: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="wedding-blessing-quote" aria-label="Wedding Blessings and Quote">
      <div className="quote-container">
        {/* Decorative Top Ornament */}
        <div className="quote-ornament" aria-hidden="true">
          <span className="quote-ornament-line" />
          <span className="quote-ornament-symbol">&#10022; &#10048; &#10022;</span>
          <span className="quote-ornament-line" />
        </div>

        {/* Traditional Sanskrit Shloka */}
        <div className="quote-shloka">
          <p className="quote-shloka-heading">
            {lang === 'hi' ? '॥ मंगल श्लोक ॥' : '|| Auspicious Shloka ||'}
          </p>
          <blockquote className="quote-shloka-text">
            मंगलम् भगवान विष्णुः, मंगलम् गरुड़ध्वजः।<br />
            मंगलम् पुण्डरीकाक्षः, मंगलाय तनो हरिः॥
          </blockquote>
        </div>

        {/* Heartfelt Wedding Message / Quote */}
        <div className="quote-main-body">
          <span className="quote-mark-large" aria-hidden="true">&ldquo;</span>
          <p className="quote-text">
            {t(
              'Two souls united by seven sacred vows into a lifetime of endless love, faith, and shared dreams. Your gracious presence and heartfelt blessings make our celebrations complete.',
              'सात फेरों का यह पावन बंधन, दो हृदयों का अनंत संगम है। हमारे जीवन के इस सबसे खूबसूरत अध्याय की शुरुआत पर आपका स्नेहिल आशीर्वाद और सान्निध्य हमारी सबसे अनमोल धरोहर होगी।'
            )}
          </p>
        </div>

        {/* Couple Signature & Family Names */}
        <div className="quote-footer-details">
          <p className="quote-couple-names">
            {t('Purva Sharma & Rishabh Mishra', 'पूर्वा शर्मा एवं ऋषभ मिश्रा')}
          </p>
          <p className="quote-hashtag">#RishabhKiPurva</p>
          <div className="quote-subdetails">
            <span>{t('Friday, 11th December 2026', 'शुक्रवार, ११ दिसंबर २०२६')}</span>
            <span className="quote-dot" aria-hidden="true">&bull;</span>
            <span>{t('Varanasi', 'वाराणसी')}</span>
          </div>
          <p className="quote-family-hosts">
            {t('Sharma & Mishra Family Cordially Welcomes You', 'शर्मा एवं मिश्रा परिवार आपका सादर वंदन करता है')}
          </p>
        </div>

        {/* Decorative Bottom Line */}
        <div className="quote-ornament quote-ornament--bottom" aria-hidden="true">
          <span className="quote-ornament-line" />
          <span className="quote-ornament-gem" />
          <span className="quote-ornament-line" />
        </div>
      </div>
    </section>
  );
};
