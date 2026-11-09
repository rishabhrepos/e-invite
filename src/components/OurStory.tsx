import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const OurStory: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="our-story" className="our-story our-story--floral-3d-1" aria-labelledby="our-story-title">
      <div className="story-decor" aria-hidden="true">
        <img
          className="story-corner story-corner--topLeft"
          src="/artwork/eb0d022875a4614b2e34/160.webp"
          srcSet="/artwork/eb0d022875a4614b2e34/160.webp 160w, /artwork/eb0d022875a4614b2e34/320.webp 320w"
          sizes="(min-width: 768px) 140px, 22vw"
          width="441"
          height="535"
          alt=""
          loading="lazy"
        />
        <img
          className="story-corner story-corner--topRight"
          src="/artwork/aee067f0f96c2246d2a4/160.webp"
          srcSet="/artwork/aee067f0f96c2246d2a4/160.webp 160w, /artwork/aee067f0f96c2246d2a4/320.webp 320w"
          sizes="(min-width: 768px) 140px, 22vw"
          width="446"
          height="566"
          alt=""
          loading="lazy"
        />
        <img
          className="story-corner story-corner--bottomLeft"
          src="/artwork/53665d33edfd01a3c449/160.webp"
          srcSet="/artwork/53665d33edfd01a3c449/160.webp 160w, /artwork/53665d33edfd01a3c449/320.webp 320w"
          sizes="(min-width: 768px) 140px, 22vw"
          width="523"
          height="410"
          alt=""
          loading="lazy"
        />
        <img
          className="story-corner story-corner--bottomRight"
          src="/artwork/ed5fb176e6e6facdaad3/160.webp"
          srcSet="/artwork/ed5fb176e6e6facdaad3/160.webp 160w, /artwork/ed5fb176e6e6facdaad3/320.webp 320w"
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
            {t('Different paths, one beautiful beginning.', 'अलग राहें, एक ख़ूबसूरत शुरुआत')}
          </h2>
          <span className="story-intro-heart" aria-hidden="true">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
            </svg>
          </span>
          <p className="story-introduction">
            {t(
              'From our first conversation to the plans we are making now, it has been the everyday moments that made this feel like us.',
              'पहली बातचीत से लेकर आज के इन हसीन पलों तक, हर छोटे-बड़े लम्हे ने हमें एक दूजे का बना दिया।'
            )}
          </p>
        </div>

        <div className="story-portrait">
          <img
            className="story-character"
            src="/artwork/bc49032a778aa403493e/640.webp"
            srcSet="/artwork/bc49032a778aa403493e/320.webp 320w, /artwork/bc49032a778aa403493e/640.webp 640w, /artwork/bc49032a778aa403493e/960.webp 960w"
            sizes="(min-width: 1200px) 530px, (min-width: 768px) 45vw, 90vw"
            width="1374"
            height="1145"
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
          <li className="story-milestone" data-story-milestone="part-1">
            <div className="story-image-frame">
              <img
                className="story-milestone-image"
                src="/artwork/e05f964f3fff4648511f/597.webp"
                srcSet="/artwork/e05f964f3fff4648511f/320.webp 320w, /artwork/e05f964f3fff4648511f/597.webp 597w"
                sizes="(min-width: 1200px) 225px, (min-width: 768px) 21vw, 42vw"
                width="597"
                height="485"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="story-milestone-copy">
              <span className="story-milestone-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m2 8 10-5 10 5-10 5ZM6 10v6c4 3 8 3 12 0v-6M22 8v8" />
                </svg>
              </span>
              <h3>{t('We Met', 'पहली मुलाक़ात')}</h3>
              <p>
                {t(
                  'A college event brought us together. We stayed long after it ended, talking about everything except the reason we had come.',
                  'एक कार्यक्रम में हमारी पहली मुलाकात हुई। वह बातचीत जो शुरू हुई तो वक़्त का पता ही नहीं चला।'
                )}
              </p>
            </div>
            <span className="story-trail-heart" aria-hidden="true">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
              </svg>
            </span>
          </li>

          <li className="story-milestone" data-story-milestone="part-2">
            <div className="story-image-frame">
              <img
                className="story-milestone-image"
                src="/artwork/497cd7a13a72bf1c0054/566.webp"
                srcSet="/artwork/497cd7a13a72bf1c0054/320.webp 320w, /artwork/497cd7a13a72bf1c0054/566.webp 566w"
                sizes="(min-width: 1200px) 225px, (min-width: 768px) 21vw, 42vw"
                width="566"
                height="495"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="story-milestone-copy">
              <span className="story-milestone-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
                </svg>
              </span>
              <h3>{t('We Grew', 'साथ-साथ बढ़ता प्यार')}</h3>
              <p>
                {t(
                  'There were shared playlists, long calls and plenty of coffee. Little by little, we became the first person the other wanted to tell.',
                  'साझा किए गए गीत, लंबी बातें और कॉफ़ी की चुस्कियां... धीरे-धीरे हम एक-दूजे की सबसे पहली पसंद बन गए।'
                )}
              </p>
            </div>
            <span className="story-trail-heart" aria-hidden="true">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
              </svg>
            </span>
          </li>

          <li className="story-milestone" data-story-milestone="part-3">
            <div className="story-image-frame">
              <img
                className="story-milestone-image"
                src="/artwork/30e4b1bc104d6f881a26/640.webp"
                srcSet="/artwork/30e4b1bc104d6f881a26/320.webp 320w, /artwork/30e4b1bc104d6f881a26/640.webp 640w, /artwork/30e4b1bc104d6f881a26/699.webp 699w"
                sizes="(min-width: 1200px) 225px, (min-width: 768px) 21vw, 42vw"
                width="699"
                height="470"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="story-milestone-copy">
              <span className="story-milestone-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m21 3-6 18-4-8-8-4ZM11 13 21 3" />
                </svg>
              </span>
              <h3>{t('We Explored', 'यादों का सफ़र')}</h3>
              <p>
                {t(
                  'From quiet hill stations to busy city streets, we found new places and new reasons to enjoy doing life together.',
                  'शांत वादियों से लेकर शहरों की चहल-पहल तक, हमने हर मोड़ पर साथ जीने के नए बहाने खोजे।'
                )}
              </p>
            </div>
            <span className="story-trail-heart" aria-hidden="true">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
              </svg>
            </span>
          </li>

          <li className="story-milestone" data-story-milestone="part-4">
            <div className="story-image-frame">
              <img
                className="story-milestone-image"
                src="/artwork/aa7155d57a86ef067c06/514.webp"
                srcSet="/artwork/aa7155d57a86ef067c06/320.webp 320w, /artwork/aa7155d57a86ef067c06/514.webp 514w"
                sizes="(min-width: 1200px) 225px, (min-width: 768px) 21vw, 42vw"
                width="514"
                height="463"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="story-milestone-copy">
              <span className="story-milestone-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M13 15a6 6 0 1 1-12 0 6 6 0 0 1 12 0ZM23 15a6 6 0 1 1-12 0 6 6 0 0 1 12 0ZM5 5l2-3 2 3-2 3ZM15 5l2-3 2 3-2 3Z" />
                </svg>
              </span>
              <h3>{t('Now, Forever', 'अब, और हमेशा के लिए')}</h3>
              <p>
                {t(
                  'One very happy yes, and here we are. Our next adventure begins with our favourite people beside us, and that includes you.',
                  'एक खूबसूरत "हाँ" के साथ हमारा यह नया सफ़र शुरू हो रहा है, और इसमें आपका साथ हमारे लिए अनमोल है।'
                )}
              </p>
            </div>
            <span className="story-trail-heart" aria-hidden="true">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
              </svg>
            </span>
          </li>
        </ol>
      </div>

      <p className="story-closing">
        <span>{t('Two stories, and so much still to write together.', 'दो कहानियां, और अब मिलकर लिखने को पूरी जिंदगी।')}</span>
        <svg
          width="17"
          height="17"
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
      </p>
    </section>
  );
};
