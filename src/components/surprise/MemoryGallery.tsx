import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { memories } from "@/data/birthday";

export function MemoryGallery({ onContinue }: { onContinue: () => void }) {
  const [active, setActive] = useState<number | null>(null);
  const move = (amount: number) => setActive((current) => current === null ? 0 : (current + amount + memories.length) % memories.length);

  return (
    <section className="stage-content gallery-stage">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
        <p className="eyebrow">A few pieces of us</p>
        <h1 className="script-title">You make<br />every moment special <span>♡</span></h1>
      </motion.div>
      <div className="photo-string" aria-hidden="true" />
      <div className="polaroid-grid">
        {memories.map((memory, index) => (
          <motion.button
            type="button"
            key={memory.src}
            className={`polaroid polaroid-${index + 1}`}
            onClick={() => setActive(index)}
            aria-label={`Open memory ${index + 1}: ${memory.caption}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: [0, -6, 0] }}
            transition={{ opacity: { delay: 0.15 * index }, y: { duration: 4 + index, repeat: Infinity, ease: "easeInOut" } }}
          >
            <img src={memory.src} alt={memory.caption} loading="lazy" width={1024} height={1280} />
            <span>{["Our walks", "Little moments", "Us, always"][index]}</span>
          </motion.button>
        ))}
      </div>
      <Button variant="romantic" size="lg" onClick={onContinue}>Hear our song <span aria-hidden="true">♡</span></Button>
      <Dialog open={active !== null} onOpenChange={(open) => { if (!open) setActive(null); }}>
        {active !== null && (
          <DialogContent className="memory-dialog">
            <DialogTitle className="sr-only">Memory {active + 1}</DialogTitle>
            <DialogDescription className="sr-only">{memories[active]?.caption}</DialogDescription>
            <img src={memories[active]?.src} alt={memories[active]?.caption ?? "Romantic memory"} width={1024} height={1280} />
            <p>{memories[active]?.caption}</p>
            <Button variant="glass" size="icon" className="dialog-prev" onClick={() => move(-1)} aria-label="Previous memory"><ChevronLeft /></Button>
            <Button variant="glass" size="icon" className="dialog-next" onClick={() => move(1)} aria-label="Next memory"><ChevronRight /></Button>
            <Button variant="glass" size="icon" className="dialog-close" onClick={() => setActive(null)} aria-label="Close memory"><X /></Button>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}