import { motion } from "framer-motion";
import Terminal from "../components/Terminal";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-14 min-h-[calc(100vh-64px)]">
      <motion.div
        className="w-full max-w-3xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item}>
          <Terminal />
        </motion.div>

        <motion.p
          variants={item}
          className="mt-6 text-center text-xs md:text-sm text-gray-400 dark:text-zinc-500 font-mono"
        >
          Prefer clicking?{" "}
          <a href="/projects" className="underline hover:text-cyan-500 transition">
            Projects
          </a>{" "}
          ·{" "}
          <a href="/resume" className="underline hover:text-cyan-500 transition">
            Resume
          </a>{" "}
          ·{" "}
          <a href="/contact" className="underline hover:text-cyan-500 transition">
            Contact
          </a>
        </motion.p>
      </motion.div>
    </section>
  );
}
