import { useLanguage } from '../context/LanguageContext';
import { invite, coupleLine } from '../data/invite';

export const WeddingNotes = () => {
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
          <p className="note-shell__line">{invite.note[lang]}</p>
        </div>
      </blockquote>
      <p className="note-shell__family-line">&mdash; {coupleLine(lang)}</p>
    </section>
  );
};
