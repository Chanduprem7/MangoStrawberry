import { motion, useReducedMotion } from "motion/react";

type BalloonProps = {
  label: string;
  tone: "pink" | "purple" | "red";
  onPop: () => void;
  large?: boolean;
  popping?: boolean;
  delay?: number;
};

export function Balloon({ label, tone, onPop, large = false, popping = false, delay = 0 }: BalloonProps) {
  const reduce = useReducedMotion();
  return (
    <motion.button
      type="button"
      aria-label={`Pop the ${label.replace("\n", " ")} balloon`}
      className={`heart-balloon heart-balloon-${tone} ${large ? "heart-balloon-large" : ""}`}
      initial={{ opacity: 0, y: 35, scale: 0.85 }}
      animate={popping ? { scale: [1, 1.08, 0], rotate: [0, -5, 7, 0], opacity: [1, 1, 0] } : { opacity: 1, y: reduce ? 0 : [0, -10, 0], scale: 1 }}
      transition={popping ? { duration: 0.55 } : { opacity: { delay }, y: { duration: 3.2, delay, repeat: Infinity, ease: "easeInOut" } }}
      whileHover={reduce ? {} : { y: -14, scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      onClick={onPop}
    >
      <span>{label}</span><b>♡</b>
      <i aria-hidden="true" />
    </motion.button>
  );
}
