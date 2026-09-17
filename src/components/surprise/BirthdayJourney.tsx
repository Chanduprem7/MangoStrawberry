import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Gift, Heart, Music2, Pause, Play, Sparkles, Volume2, VolumeX } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Balloon } from "./Balloon";
import { FairyLights, FloatingHearts, HeartBurst } from "./Effects";
import { MemoryGallery } from "./MemoryGallery";
import { MusicPlayer } from "./MusicPlayer";
import { Button } from "@/components/ui/button";
import { birthdayConfig, stageNames } from "@/data/birthday";
import { useAmbientSound, useSoundEffects } from "@/hooks/use-sound-effects";
import sunset from "@/assets/sunset-welcome.jpg";
import kittenGift from "@/assets/kitten-gift.jpg";
import kittenEnvelope from "@/assets/kitten-envelope.jpg";
import finalSunset from "@/assets/final-sunset.jpg";

const balloonStages = [
  { label: "HAPPY", tone: "pink" as const, note: "First, a little happiness for you", burst: "text-pink" },
  { label: "BIRTHDAY", tone: "purple" as const, note: "A wish wrapped in stardust", burst: "text-purple" },
  { label: "MY LOVE", tone: "red" as const, note: "And the sweetest truth of all", burst: "text-rose-glow" },
];

export function BirthdayJourney() {
  const [stage, setStage] = useState(0);
  const [busy, setBusy] = useState(false);
  const [giftOpen, setGiftOpen] = useState(false);
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [finalReveal, setFinalReveal] = useState(false);
  const reduceMotion = useReducedMotion();
  const { muted, setMuted, play } = useSoundEffects();
  const ambient = useAmbientSound();

  useEffect(() => {
    if (stage !== 8) setFinalReveal(false);
    if (stage === 8) {
      const timer = window.setTimeout(() => { setFinalReveal(true); play("final"); }, reduceMotion ? 400 : 3000);
      return () => window.clearTimeout(timer);
    }
    return undefined;
  }, [stage, reduceMotion, play]);

  const advance = (sound: "pop" | "magic" | "paper" | "final" = "pop") => {
    if (busy) return;
    setBusy(true);
    play(sound);
    window.setTimeout(() => { setStage((value) => Math.min(value + 1, 8)); setBusy(false); }, reduceMotion ? 120 : 720);
  };
  const goBack = () => { if (!busy) setStage((value) => Math.max(0, value - 1)); };
  const replay = () => { setStage(0); setGiftOpen(false); setEnvelopeOpen(false); setFinalReveal(false); setBusy(false); };

  const content = (() => {
    if (stage === 0) return <Welcome onStart={() => advance()} />;
    if (stage >= 1 && stage <= 3) {
      const item = balloonStages[stage - 1];
      if (!item) return null;
      return (
        <section className="stage-content balloon-stage">
          <motion.p className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{item.note}</motion.p>
          <h1 className="script-title">Make a wish, Mango</h1>
          <div className="pop-wrap">
            <span className="pop-hint">Pop! <i>↘</i></span>
            <Balloon label={item.label} tone={item.tone} large popping={busy} onPop={() => advance("pop")} />
            {busy && <HeartBurst color={item.burst} />}
          </div>
          <p className="tap-note">Tap the heart to unwrap the next surprise</p>
        </section>
      );
    }
    if (stage === 4) return <GiftStage open={giftOpen} onOpen={() => { if (!giftOpen) { setGiftOpen(true); play("magic"); window.setTimeout(() => setStage(5), reduceMotion ? 250 : 1500); } }} />;
    if (stage === 5) return <LetterStage open={envelopeOpen} onOpen={() => { setEnvelopeOpen(true); play("paper"); }} onContinue={() => advance("magic")} />;
    if (stage === 6) return <MemoryGallery onContinue={() => advance("magic")} />;
    if (stage === 7) return <MusicPlayer onContinue={() => advance("final")} />;
    return <FinalStage revealed={finalReveal} onReveal={() => { setFinalReveal(true); play("final"); }} onReplay={replay} />;
  })();

  return (
    <main className="journey-shell" style={{ "--stage-bg": `url(${stage === 8 ? finalSunset : sunset})` } as React.CSSProperties}>
      <div className="cinematic-bg" />
      <div className="cinematic-shade" />
      <FloatingHearts dense={stage === 8} />
      <FairyLights />
      <header className="journey-toolbar">
        <div className="progress-wrap">
          <span>Surprise {stage + 1} / {stageNames.length}</span>
          <div className="progress-track"><motion.i animate={{ width: `${((stage + 1) / stageNames.length) * 100}%` }} /></div>
        </div>
        <div className="toolbar-actions">
          {stage > 0 && stage < 8 && <Button variant="glass" size="icon" onClick={goBack} aria-label="Previous surprise"><ArrowLeft /></Button>}
          <Button variant="glass" size="icon" onClick={ambient.toggle} aria-label={ambient.playing ? "Pause ambient music" : "Turn on ambient music"}>{ambient.playing ? <Pause /> : <Music2 />}</Button>
          <Button variant="glass" size="icon" onClick={() => setMuted(!muted)} aria-label={muted ? "Unmute sound effects" : "Mute sound effects"}>{muted ? <VolumeX /> : <Volume2 />}</Button>
        </div>
      </header>
      <AnimatePresence mode="wait">
        <motion.div key={stage} className="stage-frame" initial={{ opacity: 0, scale: 1.025 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: reduceMotion ? 0.05 : 0.55 }}>
          {content}
        </motion.div>
      </AnimatePresence>
      {!reduceMotion && busy && <button type="button" className="skip-animation" onClick={() => { setBusy(false); setStage((value) => Math.min(value + 1, 8)); }}>Skip animation</button>}
    </main>
  );
}

function Welcome({ onStart }: { onStart: () => void }) {
  return (
    <section className="stage-content welcome-stage">
      <motion.div initial={{ opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }}>
        <p className="eyebrow">A little birthday magic, just for you</p>
        <h1 className="script-title">{birthdayConfig.greeting}<span>💝</span></h1>
        <p className="intro-copy">Click on the balloons to begin<br />your special surprise...</p>
      </motion.div>
      <div className="welcome-balloons">
        {balloonStages.map((item, index) => <Balloon key={item.label} label={item.label} tone={item.tone} onPop={onStart} delay={index * 0.16} />)}
      </div>
      <motion.div className="welcome-kitten" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
        <img src={kittenGift} alt="A sweet ginger kitten guarding Mango's birthday gift" width={1024} height={1024} />
      </motion.div>
      <button className="music-prompt" type="button" onClick={onStart}><Play /> Begin the surprise</button>
    </section>
  );
}

function GiftStage({ open, onOpen }: { open: boolean; onOpen: () => void }) {
  return (
    <section className="stage-content gift-stage">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <p className="eyebrow">You did it</p><h1 className="script-title">All Popped!</h1><p className="intro-copy">Now open your special gift...</p>
      </motion.div>
      <motion.button type="button" aria-label="Open your special gift" className={`gift-button ${open ? "gift-open" : ""}`} onClick={onOpen} whileHover={{ rotate: [-1, 1, -1], scale: 1.02 }}>
        <img src={kittenGift} alt="Kitten beside a wrapped pink birthday gift" loading="lazy" width={1024} height={1024} />
        <span className="gift-light" aria-hidden="true" /><Gift aria-hidden="true" />
      </motion.button>
      <p className="tap-note">Tap the ribbon, Mango ♡</p>
    </section>
  );
}

function LetterStage({ open, onOpen, onContinue }: { open: boolean; onOpen: () => void; onContinue: () => void }) {
  if (!open) return (
    <section className="stage-content envelope-stage">
      <h1 className="script-title">A few words from my heart</h1>
      <motion.button type="button" className="envelope-button" aria-label="Open the letter from Strawberry" onClick={onOpen} whileHover={{ y: -8, scale: 1.02 }}>
        <img src={kittenEnvelope} alt="Kitten holding a love letter from Strawberry" loading="lazy" width={1024} height={1024} />
        <span>Open it<br /><b>— Strawberry... 💕</b></span>
      </motion.button>
    </section>
  );
  return (
    <section className="stage-content letter-stage">
      <div className="petals" aria-hidden="true">{Array.from({ length: 12 }, (_, i) => <i key={i}>❀</i>)}</div>
      <motion.article className="love-letter" initial={{ opacity: 0, y: 180, rotateX: 20 }} animate={{ opacity: 1, y: 0, rotateX: 0 }}>
        {birthdayConfig.letter.map((paragraph, index) => <motion.p key={paragraph} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: Math.min(index * 0.35, 2) }} className={index === 0 ? "letter-greeting" : ""}>{paragraph}</motion.p>)}
        <Button variant="romantic" size="lg" onClick={onContinue}>See our memories <ArrowRight /></Button>
      </motion.article>
    </section>
  );
}

function FinalStage({ revealed, onReveal, onReplay }: { revealed: boolean; onReveal: () => void; onReplay: () => void }) {
  return (
    <section className="stage-content final-stage" onClick={() => { if (!revealed) onReveal(); }}>
      <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
        <p className="eyebrow">My favorite person, my favorite forever</p>
        <h1 className="final-title">Happy Birthday<br />Mango <span>♡</span></h1>
        <p className="forever">Forever &amp; Always</p>
        <p className="names">Mango &amp; Strawberry</p>
      </motion.div>
      <motion.button type="button" className={`final-heart ${revealed ? "final-heart-open" : ""}`} onClick={(event) => { event.stopPropagation(); onReveal(); }} aria-label={revealed ? birthdayConfig.finalMessage : "Reveal the final love message"} animate={{ scale: revealed ? 1 : [1, 1.04, 1] }} transition={{ duration: 2, repeat: revealed ? 0 : Infinity }}>
        <Heart aria-hidden="true" />
        {revealed ? <span>I’m so lucky<br />to have you<br />in my life...<b>♡</b></span> : <span>One last<br />little wish...</span>}
      </motion.button>
      {revealed && <motion.div className="replay-wrap" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <p>Click replay to feel it all again ♡</p>
        <Button variant="romantic" size="lg" onClick={(event) => { event.stopPropagation(); onReplay(); }}>Replay <Sparkles /></Button>
      </motion.div>}
    </section>
  );
}