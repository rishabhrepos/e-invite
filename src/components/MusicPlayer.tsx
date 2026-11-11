import React, { useRef, useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { invite, asset } from '../data/invite';

export interface MusicPlayerHandle {
  play: () => void;
  pause: () => void;
}

export const MusicPlayer = forwardRef<MusicPlayerHandle>((_, ref) => {
  const { t } = useLanguage();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Web Audio synth fallback for shehnai/tanpura if audio fails or is blocked
  const synthContextRef = useRef<AudioContext | null>(null);
  const synthOscillatorsRef = useRef<OscillatorNode[]>([]);
  const isSynthPlayingRef = useRef(false);
  const synthIntervalRef = useRef<number | undefined>(undefined);

  const startSynthMelody = () => {
    try {
      if (isSynthPlayingRef.current) return;
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      
      const ctx = new AudioCtx();
      synthContextRef.current = ctx;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Traditional Indian Raag Bhupali / wedding shehnai pentatonic scale:
      // Sa (C4=261.63), Re (D4=293.66), Ga (E4=329.63), Pa (G4=392.00), Dha (A4=440.00)
      const scale = [261.63, 293.66, 329.63, 392.0, 440.0, 523.25];
      let noteIndex = 0;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.08, ctx.currentTime);
      masterGain.connect(ctx.destination);

      // Tanpura drone base
      const droneOsc = ctx.createOscillator();
      const droneGain = ctx.createGain();
      droneOsc.type = 'triangle';
      droneOsc.frequency.setValueAtTime(130.81, ctx.currentTime); // C3
      droneGain.gain.setValueAtTime(0.04, ctx.currentTime);
      droneOsc.connect(droneGain);
      droneGain.connect(masterGain);
      droneOsc.start();
      synthOscillatorsRef.current.push(droneOsc);

      // Melody notes loop
      synthIntervalRef.current = window.setInterval(() => {
        const noteOsc = ctx.createOscillator();
        const noteGain = ctx.createGain();
        noteOsc.type = 'sine';
        noteOsc.frequency.setValueAtTime(scale[noteIndex % scale.length], ctx.currentTime);
        noteGain.gain.setValueAtTime(0.06, ctx.currentTime);
        noteGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
        noteOsc.connect(noteGain);
        noteGain.connect(masterGain);
        noteOsc.start();
        noteOsc.stop(ctx.currentTime + 0.85);
        noteIndex = (noteIndex + 1) % scale.length;
      }, 700);

      isSynthPlayingRef.current = true;
      setIsPlaying(true);
    } catch (e) {
      console.warn('Synth playback failed:', e);
    }
  };

  const stopSynthMelody = () => {
    isSynthPlayingRef.current = false;
    clearInterval(synthIntervalRef.current);
    try {
      synthOscillatorsRef.current.forEach((osc) => {
        try { osc.stop(); } catch {}
      });
      synthOscillatorsRef.current = [];
      if (synthContextRef.current && synthContextRef.current.state !== 'closed') {
        synthContextRef.current.close().catch(() => {});
      }
    } catch {}
    synthContextRef.current = null;
  };

  const play = () => {
    stopSynthMelody();
    const audio = audioRef.current;
    if (!audio) return startSynthMelody();
    audio.play().catch((err) => {
      console.warn('Audio play failed, falling back to synth melody:', err);
      startSynthMelody();
    });
  };

  const pause = () => {
    audioRef.current?.pause();
    stopSynthMelody();
    setIsPlaying(false);
  };

  useImperativeHandle(ref, () => ({ play, pause }));

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    // <audio loop> never fires 'ended'; play/pause events are the source of truth
    const onPlay = () => setIsPlaying(true);
    const onPause = () => {
      if (!isSynthPlayingRef.current) setIsPlaying(false);
    };
    const onError = () => console.warn(`Audio element error loading ${invite.music}`);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('error', onError);
    return () => {
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('error', onError);
      stopSynthMelody();
    };
  }, []);

  return (
    <aside
      className="floating-controls-bar music-player music-player--clay"
      data-music-player
      data-state={isPlaying ? 'playing' : 'paused'}
      aria-label="Wedding controls"
    >
      <audio
        ref={audioRef}
        src={asset(invite.music)}
        preload="auto"
        loop
        playsInline
      />

      {/* Dedicated Music Toggle Button */}
      <button
        type="button"
        className="music-toggle"
        onClick={isPlaying ? pause : play}
        aria-pressed={isPlaying}
        aria-label={
          isPlaying
            ? t('Pause music: Wedding shehnai', 'संगीत रोकें')
            : t('Play music: Wedding shehnai', 'संगीत बजाएं')
        }
      >
        <svg
          className="music-note-icon"
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path d="M9 18V5l11-2v13M9 9l11-2" />
          <ellipse cx="6" cy="18" rx="3" ry="2.5" />
          <ellipse cx="17" cy="16" rx="3" ry="2.5" />
        </svg>

        <svg
          className="music-state-icon"
          viewBox="0 0 24 24"
          width="12"
          height="12"
          fill="none"
          stroke="currentColor"
          aria-hidden="true"
        >
          {isPlaying ? (
            <path className="music-action-symbol music-pause-symbol" d="M8 5v14M16 5v14" strokeWidth="4" />
          ) : (
            <path className="music-action-symbol music-play-symbol" d="m8 5 11 7-11 7Z" fill="currentColor" stroke="none" />
          )}
        </svg>

        <span className="music-label-text" data-music-label>
          {isPlaying ? t('Pause music', 'संगीत रोकें') : t('Play music', 'संगीत बजाएं')}
        </span>

        {/* Visual equalizer wave animation when playing */}
        {isPlaying && (
          <span className="music-equalizer" aria-hidden="true">
            <span className="music-bar music-bar--1" />
            <span className="music-bar music-bar--2" />
            <span className="music-bar music-bar--3" />
          </span>
        )}
      </button>
    </aside>
  );
});
