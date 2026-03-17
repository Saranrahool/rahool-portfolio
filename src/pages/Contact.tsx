import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Globe } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@rahoolsaran.com",
    href: "mailto:contact@rahoolsaran.com",
    desc: "Best for general inquiries",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/rahool-saran",
    href: "https://www.linkedin.com/in/rahool-saran",
    desc: "Connect professionally",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Saranrahool",
    href: "https://github.com/Saranrahool",
    desc: "View my lab projects and code",
  },
  {
    icon: Globe,
    label: "Portfolio",
    value: "rahoolsaran.com",
    href: "https://rahoolsaran.com",
    desc: "Projects, labs, and technical docs",
  },
];

export default function Contact() {
  return (
    <motion.section
      className="mx-auto max-w-3xl px-6 py-24"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item} className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Let's Connect
        </h2>
        <p className="mt-3 text-gray-500 dark:text-zinc-400 text-lg max-w-xl mx-auto">
          I'm open to IT Support, System Administration, and Cybersecurity roles
          starting Summer 2026. Feel free to reach out!
        </p>
        <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-700/40 text-cyan-700 dark:text-cyan-400 text-sm">
          📍 Abbotsford, BC · Available Summer 2026
        </div>
      </motion.div>

      <motion.div variants={item} className="mt-12 grid sm:grid-cols-2 gap-4">
        {links.map(({ icon: Icon, label, value, href, desc }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            className="flex items-start gap-4 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 p-5 hover:border-cyan-500/50 dark:hover:border-cyan-500/40 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors group"
          >
            <div className="rounded-xl bg-cyan-100 dark:bg-cyan-900/30 p-2.5 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-900/50 transition-colors">
              <Icon size={20} />
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">{label}</p>
              <p className="text-cyan-600 dark:text-cyan-400 text-sm mt-0.5 break-all">{value}</p>
              <p className="text-gray-500 dark:text-zinc-500 text-xs mt-1">{desc}</p>
            </div>
          </a>
        ))}
      </motion.div>

      <motion.p
        variants={item}
        className="mt-10 text-center text-sm text-gray-400 dark:text-zinc-600"
      >
        778-548-1808 · Abbotsford, BC
      </motion.p>
    </motion.section>
  );
}
