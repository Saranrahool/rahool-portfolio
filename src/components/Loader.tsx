import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const duration = 1400;

    let frame: number;
    const tick = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        frame = requestAnimationFrame(tick);
      } else {
        setTimeout(onDone, 250);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [onDone]);

  const barWidth = 28;
  const filled = Math.round((progress / 100) * barWidth);
  const bar = "█".repeat(filled) + "░".repeat(barWidth - filled);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0a] font-mono px-6"
    >
      <div className="text-sm md:text-base text-zinc-300">
        <span className="text-green-400">guest@rahool</span>
        <span className="text-zinc-500">:~$ </span>
        <span>booting rahoolsaran.com...</span>
      </div>
      <div className="mt-4 text-cyan-400 text-xs md:text-sm tracking-wide whitespace-nowrap">
        [{bar}] {progress}%
      </div>
    </motion.div>
  );
}
