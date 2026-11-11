import { useRef } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { EnvelopeEntrance } from './components/EnvelopeEntrance';
import { MusicPlayer, MusicPlayerHandle } from './components/MusicPlayer';
import { FloatingPetals } from './components/FloatingPetals';
import { FloralHero } from './components/FloralHero';
import { InvitationCard } from './components/InvitationCard';
import { FloralCelebrations } from './components/FloralCelebrations';
import { OurStory } from './components/OurStory';
import { WeddingNotes } from './components/WeddingNotes';
import { WeddingBlessingQuote } from './components/WeddingBlessingQuote';

export default function App() {
  const musicRef = useRef<MusicPlayerHandle | null>(null);

  const handleEnvelopeOpen = () => {
    if (musicRef.current) {
      musicRef.current.play();
    }
  };

  return (
    <LanguageProvider>
      <div data-invitation-content data-image-reveals>
        {/* 3D Wax-Seal Realistic Opening Envelope */}
        <EnvelopeEntrance onOpen={handleEnvelopeOpen} />

        {/* Floating Wedding Music Player and Language Toggle */}
        <MusicPlayer ref={musicRef} />

        <div className="floral-clay">
          <div className="floral-invitation theme-rose">
            {/* Background Ambient Glows */}
            <div className="floral-atmosphere" aria-hidden="true">
              <div className="floral-top-glow" />
              <div className="floral-right-glow" />
              <div className="floral-left-glow" />
            </div>

            {/* Falling Rose Petals Atmosphere */}
            <FloatingPetals />

            <main id="main">
              {/* Floral Hero Section (full width with couple portrait and countdown) */}
              <FloralHero />

              {/* Floral Content Container (max-width: 72rem, center aligned, gap: 2.5rem) */}
              <div className="floral-content">
                {/* Formal Family Invitation Card */}
                <InvitationCard />

                {/* 4 Wedding Celebrations (Haldi, Mehendi, Sangeet, Shaadi) */}
                <FloralCelebrations />

                {/* Our Story Timeline */}
                <OurStory />

                {/* Wedding Notes */}
                <WeddingNotes />

                {/* Wedding Blessing Quote */}
                <WeddingBlessingQuote />
              </div>
            </main>
          </div>
        </div>
      </div>
    </LanguageProvider>
  );
}
