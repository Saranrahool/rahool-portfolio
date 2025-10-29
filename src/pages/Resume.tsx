import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl font-semibold"
      >
        Resume
      </motion.h2>

      <p className="mt-2 text-zinc-400">
        You can view or download my most recent resume below.
      </p>

      <div className="mt-8 flex flex-col items-center gap-6">
        <iframe
          src="/Rahool_s_Resume_1.2.pdf"
          className="w-full h-[800px] border border-white/10 rounded-xl"
          title="Rahool Saran Resume"
        ></iframe>

        <a
          href="/Rahool_s_Resume_1.2.pdf"
          download="Rahool_Saran_Resume.pdf"
          className="px-6 py-2 bg-white text-black rounded-full font-medium hover:scale-105 transition"
        >
          📄 Download Resume
        </a>
      </div>
    </section>
  );
}
