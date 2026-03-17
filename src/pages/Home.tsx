import { motion } from "framer-motion";

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
    <section className="grid place-items-center text-center px-6 py-28 min-h-[calc(100vh-64px)]">
      <motion.div
        className="max-w-3xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          variants={item}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight"
        >
          Rahool Saran
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 text-xl md:text-2xl text-gray-600 dark:text-zinc-400 font-medium"
        >
          IT Support · System Administration · Cybersecurity
        </motion.p>

        <motion.p
          variants={item}
          className="mt-4 text-base text-gray-500 dark:text-zinc-500 max-w-xl mx-auto leading-relaxed"
        >
          Computer Information Systems student at UFV with hands-on experience
          supporting users and systems across nonprofit, academic, retail, and
          broadcast environments.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="/projects"
            className="inline-flex items-center rounded-full bg-cyan-600 hover:bg-cyan-500 text-white px-7 py-2.5 font-medium transition hover:scale-105"
          >
            View Work
          </a>
          <a
            href="/resume"
            className="inline-flex items-center rounded-full bg-gray-900 dark:bg-white text-white dark:text-black px-7 py-2.5 font-medium transition hover:scale-105"
          >
            Resume
          </a>
          <a
            href="/contact"
            className="inline-flex items-center rounded-full border border-gray-300 dark:border-white/20 px-7 py-2.5 hover:bg-gray-100 dark:hover:bg-white/5 transition"
          >
            Contact
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-7 text-sm text-gray-400 dark:text-zinc-500 flex flex-wrap items-center justify-center gap-5"
        >
          <a
            href="https://www.linkedin.com/in/rahool-saran"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-500 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Saranrahool"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-500 transition"
          >
            GitHub
          </a>
          <a
            href="mailto:contact@rahoolsaran.com"
            className="hover:text-cyan-500 transition"
          >
            contact@rahoolsaran.com
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}