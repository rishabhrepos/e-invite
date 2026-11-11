import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { invite, asset, assetSet } from '../data/invite';
import { Icon } from './Icon';

const inv = invite.invitation;

export const InvitationCard: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="inv-card" id="invitation" aria-label="An invitation from our families">
      <img
          className="inv-corner inv-corner--tl"
          src={asset('/artwork/629d871098ccdc336585/160.webp')}
          srcSet={assetSet('/artwork/629d871098ccdc336585/160.webp 160w, /artwork/629d871098ccdc336585/275.webp 275w')}
          sizes="(max-width: 767px) 22vw, 150px"
          width="275"
          height="526"
          alt=""
          loading="lazy"
        />
        <img
          className="inv-corner inv-corner--tr"
          src={asset('/artwork/5218fefe5bdc73055d75/160.webp')}
          srcSet={assetSet('/artwork/5218fefe5bdc73055d75/160.webp 160w, /artwork/5218fefe5bdc73055d75/270.webp 270w')}
          sizes="(max-width: 767px) 22vw, 150px"
          width="270"
          height="537"
          alt=""
          loading="lazy"
        />
        <img
          className="inv-corner inv-corner--bl"
          src={asset('/artwork/2740ecffde7c0b189ac3/160.webp')}
          srcSet={assetSet('/artwork/2740ecffde7c0b189ac3/160.webp 160w, /artwork/2740ecffde7c0b189ac3/320.webp 320w')}
          sizes="(max-width: 767px) 22vw, 150px"
          width="440"
          height="897"
          alt=""
          loading="lazy"
        />
        <img
          className="inv-corner inv-corner--br"
          src={asset('/artwork/d0fde787562b0a34ef7e/160.webp')}
          srcSet={assetSet('/artwork/d0fde787562b0a34ef7e/160.webp 160w, /artwork/d0fde787562b0a34ef7e/320.webp 320w')}
          sizes="(max-width: 767px) 22vw, 150px"
          width="440"
          height="892"
          alt=""
          loading="lazy"
        />

        <div className="inv-card__inner">
          <p className="inv-preamble">{inv.preamble[lang]}</p>

          <h2 className="inv-names">
            <span>{invite.couple[0].full[lang]}</span>
            <span className="inv-names__amp">&amp;</span>
            <span>{invite.couple[1].full[lang]}</span>
          </h2>

          <div className="inv-heart-divider" aria-hidden="true">
            <span />
            <Icon name="heart" size={13} />
            <span />
          </div>

          <div className="inv-families-wrap">
            <p className="inv-families__label-center">
              {t('With love & blessings of', 'स्नेह एवं शुभाशीर्वाद')}
            </p>
            <div className="inv-families">
              {invite.families.map((f, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <div className="inv-families__sep" aria-hidden="true" />}
                  <div className="inv-families__side">
                    <p className="inv-families__names">{f.names[lang]}</p>
                    <p className="inv-families__role">{f.role[lang]}</p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="inv-detail">
            <Icon name="calendar" size={18} />
            <div>
              <p className="inv-detail__main">{invite.dateLine[lang]}</p>
              <p className="inv-detail__sub">{inv.time[lang]}</p>
            </div>
          </div>

          <div className="inv-detail">
            <Icon name="pin" size={18} />
            <div>
              <p className="inv-detail__main">{inv.venue[lang]}</p>
              <p className="inv-detail__sub">{inv.venueSub[lang]}</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
