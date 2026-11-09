// Web Audio API Indian Classical Wedding Shehnai & Tanpura Synthesizer
// Provides soothing, authentic Indian wedding ambient music with zero external dependencies

class WeddingAudioPlayer {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private timer: number | null = null;
  private gainNode: GainNode | null = null;
  private tanpuraOscillators: OscillatorNode[] = [];

  // Authentic Raga Bhupali / Yaman auspicious wedding notes (frequencies in Hz)
  private readonly notes = [
    261.63, // Sa (C4)
    293.66, // Re (D4)
    329.63, // Ga (E4)
    392.00, // Pa (G4)
    440.00, // Dha (A4)
    523.25, // Taar Sa (C5)
    587.33, // Taar Re (D5)
    659.25, // Taar Ga (E5)
  ];

  // Auspicious Shehnai melodic phrase
  private readonly melodyPattern = [
    { note: 0, dur: 1.2 },
    { note: 1, dur: 0.8 },
    { note: 2, dur: 1.5 },
    { note: 1, dur: 0.5 },
    { note: 2, dur: 1.0 },
    { note: 3, dur: 2.0 },
    { note: 4, dur: 1.0 },
    { note: 3, dur: 1.2 },
    { note: 2, dur: 0.8 },
    { note: 1, dur: 1.0 },
    { note: 0, dur: 2.5 },
    { note: 3, dur: 1.0 },
    { note: 4, dur: 1.0 },
    { note: 5, dur: 2.2 },
    { note: 4, dur: 0.8 },
    { note: 3, dur: 1.2 },
    { note: 2, dur: 1.5 },
    { note: 0, dur: 2.8 },
  ];

  private currentStep = 0;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Tanpura drone (Sa - Pa - Sa)
  private startTanpura() {
    if (!this.ctx) return;

    const droneNotes = [130.81, 196.00, 261.63]; // C3, G3, C4
    droneNotes.forEach((freq) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.015, this.ctx.currentTime);

      osc.connect(filter);
      filter.connect(gain);
      if (this.gainNode) {
        gain.connect(this.gainNode);
      } else {
        gain.connect(this.ctx.destination);
      }

      osc.start();
      this.tanpuraOscillators.push(osc);
    });
  }

  // Shehnai reed instrument acoustic modeling
  private playShehnaiNote(freq: number, duration: number) {
    if (!this.ctx || !this.isPlaying) return;

    const now = this.ctx.currentTime;
    
    // Main reed oscillator
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    // Subtle natural vibrato (typical of Indian shehnai)
    const lfo = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();
    lfo.frequency.setValueAtTime(5.5, now);
    lfoGain.gain.setValueAtTime(2.5, now);
    lfo.connect(osc1.frequency);
    lfo.connect(osc2.frequency);
    lfo.start(now);
    lfo.stop(now + duration);

    osc1.type = 'sawtooth';
    osc2.type = 'triangle';
    osc1.frequency.setValueAtTime(freq, now);
    osc2.frequency.setValueAtTime(freq * 1.002, now); // subtle chorus detune

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(freq * 1.8, now);
    filter.Q.setValueAtTime(2.0, now);

    // Envelope for soft breath attack and sweet decay
    noteGain.gain.setValueAtTime(0.001, now);
    noteGain.gain.exponentialRampToValueAtTime(0.06, now + 0.15);
    noteGain.gain.exponentialRampToValueAtTime(0.04, now + duration - 0.2);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(noteGain);

    if (this.gainNode) {
      noteGain.connect(this.gainNode);
    } else {
      noteGain.connect(this.ctx.destination);
    }

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + duration);
    osc2.stop(now + duration);
  }

  private tick() {
    if (!this.isPlaying || !this.ctx) return;

    const step = this.melodyPattern[this.currentStep];
    const freq = this.notes[step.note];
    this.playShehnaiNote(freq, step.dur);

    this.currentStep = (this.currentStep + 1) % this.melodyPattern.length;
    this.timer = window.setTimeout(() => {
      this.tick();
    }, step.dur * 1000);
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public start() {
    try {
      this.initContext();
      if (!this.ctx) return;

      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(0.8, this.ctx.currentTime);
      this.gainNode.connect(this.ctx.destination);

      this.isPlaying = true;
      this.startTanpura();
      this.tick();
    } catch {
      // Audio context might fail on restricted environments
    }
  }

  public stop() {
    this.isPlaying = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    this.tanpuraOscillators.forEach((osc) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {
        // ignore
      }
    });
    this.tanpuraOscillators = [];
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }
}

export const weddingAudio = new WeddingAudioPlayer();
