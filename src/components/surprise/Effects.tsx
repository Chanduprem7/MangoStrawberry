import { motion, useReducedMotion } from "motion/react";

export function FloatingHearts({ dense = false }: { dense?: boolean }) {
  const reduce = useReducedMotion();
  const count = reduce ? 5 : dense ? 18 : 10;
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {Array.from({ length: count }, (_, index) => (
        <motion.span
          key={index}
          className="absolute text-rose-glow"
          style={{ left: `${7 + ((index * 23) % 88)}%`, bottom: `${-8 + ((index * 11) % 18)}%` }}
          initial={{ opacity: 0, y: 20, scale: 0.6 }}
          animate={reduce ? { opacity: 0.35 } : { opacity: [0, 0.7, 0], y: -760, x: [0, index % 2 ? 28 : -24, 0], rotate: 30 }}
          transition={{ duration: 8 + (index % 5), delay: index * 0.55, repeat: Infinity, ease: "linear" }}
        >
          {index % 3 === 0 ? "♡" : "♥"}
        </motion.span>
      ))}
    </div>
  );
}

export function HeartBurst({ color = "text-rose-glow" }: { color?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return null;
  return (
    <div className="pointer-events-none absolute inset-0 z-30 grid place-items-center" aria-hidden="true">
      {Array.from({ length: 22 }, (_, index) => {
        const angle = (index / 22) * Math.PI * 2;
        const distance = 100 + (index % 5) * 28;
        return (
          <motion.span
            key={index}
            className={`absolute text-xl ${color}`}
            initial={{ opacity: 1, scale: 0.5, x: 0, y: 0 }}
            animate={{ opacity: 0, scale: [0.5, 1.4, 0.7], x: Math.cos(angle) * distance, y: Math.sin(angle) * distance }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >♥</motion.span>
        );
      })}
    </div>
  );
}

export function FairyLights() {
  return (
    <div className="fairy-lights" aria-hidden="true">
      {Array.from({ length: 12 }, (_, index) => <span key={index} />)}
    </div>
  );
}