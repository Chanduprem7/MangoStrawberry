import { useEffect, useRef, useState } from "react";
import { Disc3, Pause, Play, RotateCcw, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { playlist } from "@/data/birthday";

const formatTime = (seconds: number) => Number.isFinite(seconds) ? `${Math.floor(seconds / 60)}:${Math.floor(seconds % 60).toString().padStart(2, "0")}` : "0:00";

export function MusicPlayer({ onContinue }: { onContinue: () => void }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
  }, [volume]);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) { audio.pause(); setPlaying(false); return; }
    try { await audio.play(); setPlaying(true); setUnavailable(false); } catch { setUnavailable(true); setPlaying(false); }
  };

  return (
    <section className="stage-content player-stage">
      <motion.div className="player" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }}>
        <p className="eyebrow">For every feeling words can’t hold</p>
        <h1 className="script-title">Our Little Playlist <span>♡</span></h1>
        <div className={`record ${playing ? "record-spinning" : ""}`}><Disc3 aria-hidden="true" /></div>
        <div className="track-copy">
          <strong>{playlist[0]?.title}</strong>
          <span>{playlist[0]?.artist}</span>
        </div>
        <audio
          ref={audioRef}
          src={playlist[0]?.audio}
          onTimeUpdate={(event) => setTime(event.currentTarget.currentTime)}
          onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
          onEnded={() => setPlaying(false)}
          onError={() => setUnavailable(true)}
        />
        <Slider aria-label="Song progress" value={[time]} max={duration || 1} step={1} onValueChange={([value]) => { const audio = audioRef.current; if (audio && value !== undefined) { audio.currentTime = value; setTime(value); } }} />
        <div className="time-row"><span>{formatTime(time)}</span><span>{formatTime(duration)}</span></div>
        <div className="player-controls">
          <Button variant="glass" size="icon" aria-label="Previous song"><SkipBack /></Button>
          <Button variant="romantic" size="iconLg" onClick={toggle} aria-label={playing ? "Pause song" : "Play song"}>{playing ? <Pause /> : <Play />}</Button>
          <Button variant="glass" size="icon" aria-label="Next song"><SkipForward /></Button>
        </div>
        <div className="volume-row">
          <Button variant="ghost" size="icon" onClick={() => setVolume(volume === 0 ? 0.7 : 0)} aria-label={volume === 0 ? "Unmute song" : "Mute song"}>{volume === 0 ? <VolumeX /> : <Volume2 />}</Button>
          <Slider aria-label="Volume" value={[volume]} min={0} max={1} step={0.05} onValueChange={([value]) => setVolume(value ?? 0)} />
        </div>
        {unavailable && <p className="audio-note" role="status">The song could not be played on this device.</p>}
        <blockquote>“Because every lyric<br />reminds me of you... ♡”</blockquote>
        <Button variant="romantic" size="lg" onClick={onContinue}>One last surprise <RotateCcw className="rotate-180" /></Button>
      </motion.div>
    </section>
  );
}