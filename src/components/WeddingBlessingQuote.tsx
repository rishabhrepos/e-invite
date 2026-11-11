import { useLanguage } from '../context/LanguageContext';
import { invite, coupleLine } from '../data/invite';

export const WeddingBlessingQuote = () => {
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
            {t('|| Auspicious Shloka ||', '॥ मंगल श्लोक ॥')}
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
            {invite.quote.text[lang]}
          </p>
        </div>

        {/* Couple Signature & Family Names */}
        <div className="quote-footer-details">
          <p className="quote-couple-names">
            {coupleLine(lang)}
          </p>
          <p className="quote-hashtag">{invite.hashtag}</p>
          <div className="quote-subdetails">
            <span>{invite.dateLine[lang]}</span>
            <span className="quote-dot" aria-hidden="true">&bull;</span>
            <span>{invite.city[lang]}</span>
          </div>
          <p className="quote-family-hosts">
            {invite.quote.hosts[lang]}
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
