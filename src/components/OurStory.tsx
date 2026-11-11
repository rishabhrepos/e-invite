import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { invite, art, asset, assetSet } from '../data/invite';
import { Icon, type IconName } from './Icon';

const story = invite.story;

export const OurStory: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="our-story" className="our-story our-story--floral-3d-1" aria-labelledby="our-story-title">
      <div className="story-decor" aria-hidden="true">
        <img
          className="story-corner story-corner--topLeft"
          src={asset('/artwork/eb0d022875a4614b2e34/160.webp')}
          srcSet={assetSet('/artwork/eb0d022875a4614b2e34/160.webp 160w, /artwork/eb0d022875a4614b2e34/320.webp 320w')}
          sizes="(min-width: 768px) 140px, 22vw"
          width="441"
          height="535"
          alt=""
          loading="lazy"
        />
        <img
          className="story-corner story-corner--topRight"
          src={asset('/artwork/aee067f0f96c2246d2a4/160.webp')}
          srcSet={assetSet('/artwork/aee067f0f96c2246d2a4/160.webp 160w, /artwork/aee067f0f96c2246d2a4/320.webp 320w')}
          sizes="(min-width: 768px) 140px, 22vw"
          width="446"
          height="566"
          alt=""
          loading="lazy"
        />
        <img
          className="story-corner story-corner--bottomLeft"
          src={asset('/artwork/53665d33edfd01a3c449/160.webp')}
          srcSet={assetSet('/artwork/53665d33edfd01a3c449/160.webp 160w, /artwork/53665d33edfd01a3c449/320.webp 320w')}
          sizes="(min-width: 768px) 140px, 22vw"
          width="523"
          height="410"
          alt=""
          loading="lazy"
        />
        <img
          className="story-corner story-corner--bottomRight"
          src={asset('/artwork/ed5fb176e6e6facdaad3/160.webp')}
          srcSet={assetSet('/artwork/ed5fb176e6e6facdaad3/160.webp 160w, /artwork/ed5fb176e6e6facdaad3/320.webp 320w')}
          sizes="(min-width: 768px) 140px, 22vw"
          width="493"
          height="383"
          alt=""
          loading="lazy"
        />
        <span className="story-petal story-petal--1" />
        <span className="story-petal story-petal--2" />
        <span className="story-petal story-petal--3" />
        <span className="story-petal story-petal--4" />
        <span className="story-petal story-petal--5" />
        <span className="story-petal story-petal--6" />
        <span className="story-petal story-petal--7" />
        <span className="story-petal story-petal--8" />
      </div>

      <header className="story-header">
        <div className="story-intro">
          <p className="story-eyebrow">{t('Our Story', 'हमारी कहानी')}</p>
          <h2 id="our-story-title">
            {story.title[lang]}
          </h2>
          <span className="story-intro-heart" aria-hidden="true">
            <Icon name="heart" size={20} />
          </span>
          <p className="story-introduction">
            {story.intro[lang]}
          </p>
        </div>

        <div className="story-portrait">
          <img
            className="story-character"
            {...art(story.portrait)}
            sizes="(min-width: 1200px) 530px, (min-width: 768px) 45vw, 90vw"
            alt="Illustration of couple sharing a quiet moment"
            loading="lazy"
          />
        </div>
      </header>

      <div className="story-journey">
        <svg
          className="story-trail story-trail--desktop"
          viewBox="0 0 1000 600"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <path transform="translate(0 0)" d="M140 90C95-40 455-25 475 100S595 220 745 170S1020 260 830 295" />
          <path transform="translate(0 300)" d="M140 90C95-40 455-25 475 100S595 220 745 170S1020 260 830 295" />
        </svg>
        <svg
          className="story-trail story-trail--mobile"
          viewBox="0 0 40 800"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <path d="M20 0c-28 65 28 135 0 200c-28 65 28 135 0 200c-28 65 28 135 0 200c-28 65 28 135 0 200" />
        </svg>

        <ol className="story-milestones" role="list">
          {story.milestones.map((m, i) => (
            <li key={i} className="story-milestone" data-story-milestone={`part-${i + 1}`}>
              <div className="story-image-frame">
                <img
                  className="story-milestone-image"
                  {...art(m.image)}
                  sizes="(min-width: 1200px) 225px, (min-width: 768px) 21vw, 42vw"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="story-milestone-copy">
                <span className="story-milestone-icon">
                  <Icon name={m.icon as IconName} size={24} />
                </span>
                <h3>{m.title[lang]}</h3>
                <p>{m.text[lang]}</p>
              </div>
              <span className="story-trail-heart" aria-hidden="true">
                <Icon name="heart" size={15} />
              </span>
            </li>
          ))}
        </ol>
      </div>

      <p className="story-closing">
        <span>{story.closing[lang]}</span>
        <Icon name="heart" size={17} />
      </p>
    </section>
  );
};
