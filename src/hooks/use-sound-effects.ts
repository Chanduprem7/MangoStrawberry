import { useCallback, useRef, useState } from "react";

type SoundKind = "pop" | "magic" | "paper" | "final";

export function useSoundEffects() {
  const [muted, setMuted] = useState(false);
  const contextRef = useRef<AudioContext | null>(null);

  const play = useCallback(
    (kind: SoundKind) => {
      if (muted || typeof window === "undefined") return;
      const AudioContextCtor = window.AudioContext;
      const context = contextRef.current ?? new AudioContextCtor();
      contextRef.current = context;
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.connect(gain);
      gain.connect(context.destination);
      const now = context.currentTime;
      const settings = {
        pop: { from: 220, to: 70, duration: 0.16, volume: 0.18 },
        magic: { from: 420, to: 920, duration: 0.7, volume: 0.11 },
        paper: { from: 190, to: 330, duration: 0.38, volume: 0.07 },
        final: { from: 520, to: 780, duration: 0.85, volume: 0.1 },
      }[kind];
      oscillator.type = kind === "pop" ? "triangle" : "sine";
      oscillator.frequency.setValueAtTime(settings.from, now);
      oscillator.frequency.exponentialRampToValueAtTime(settings.to, now + settings.duration);
      gain.gain.setValueAtTime(settings.volume, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + settings.duration);
      oscillator.start(now);
      oscillator.stop(now + settings.duration);
    },
    [muted],
  );

  return { muted, setMuted, play };
}

export function useAmbientSound() {
  const [playing, setPlaying] = useState(false);
  const contextRef = useRef<AudioContext | null>(null);
  const nodesRef = useRef<{ gain: GainNode; oscillators: OscillatorNode[] } | null>(null);

  const toggle = useCallback(async () => {
    if (typeof window === "undefined") return;
    if (!contextRef.current) {
      const context = new window.AudioContext();
      const gain = context.createGain();
      gain.gain.value = 0.018;
      gain.connect(context.destination);
      const oscillators = [196, 246.94, 293.66].map((frequency) => {
        const oscillator = context.createOscillator();
        oscillator.type = "sine";
        oscillator.frequency.value = frequency;
        oscillator.connect(gain);
        oscillator.start();
        return oscillator;
      });
      contextRef.current = context;
      nodesRef.current = { gain, oscillators };
      setPlaying(true);
      return;
    }
    if (playing) await contextRef.current.suspend();
    else await contextRef.current.resume();
    setPlaying(!playing);
  }, [playing]);

  return { playing, toggle };
}