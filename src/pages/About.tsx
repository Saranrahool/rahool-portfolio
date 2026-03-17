import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

const skills: { category: string; items: string[] }[] = [
  {
    category: "Operating Systems",
    items: ["Windows", "Windows Server", "Linux (Ubuntu, Alpine)", "macOS"],
  },
  {
    category: "Cloud & Identity",
    items: ["Microsoft Azure", "Azure Active Directory", "Microsoft Intune", "Microsoft 365"],
  },
  {
    category: "Networking",
    items: ["TCP/IP", "VLANs", "VPNs", "Network Troubleshooting"],
  },
  {
    category: "Security Tools",
    items: ["Sophos Endpoint Security", "Wireshark", "Nmap", "Cisco Packet Tracer"],
  },
  {
    category: "Virtualization & Infrastructure",
    items: ["QEMU", "Virtual Machines", "NAS", "Remote Access"],
  },
  {
    category: "Programming",
    items: ["Python", "Java", "SQL", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Tools",
    items: ["Git", "Jira", "Confluence", "Bitbucket", "Linux CLI", "Microsoft Office"],
  },
];

const certs = [
  { name: "Google IT Support Professional Certificate", year: "2024" },
  { name: "Cisco Networking Basics", year: "2024" },
  { name: "Cisco Introduction to Cybersecurity", year: "2023" },
  { name: "CS50 AI with Python", year: "2021" },
  { name: "UPES Hackathon 8.0 Winner 🏆", year: "2024" },
];

export default function About() {
  return (
    <motion.section
      className="mx-auto max-w-5xl px-6 py-20"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Header */}
      <motion.div variants={item}>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">About Me</h2>
        <p className="mt-4 text-gray-600 dark:text-zinc-400 leading-relaxed max-w-3xl text-lg">
          I'm a graduating Computer Information Systems student at the{" "}
          <span className="text-gray-900 dark:text-white font-medium">
            University of the Fraser Valley
          </span>{" "}
          (April 2026), with hands-on experience in IT support, system
          administration, endpoint management, and infrastructure
          troubleshooting.
        </p>
        <p className="mt-3 text-gray-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
          I've supported users and systems across nonprofit, academic, retail,
          and broadcast environments — using tools like Microsoft 365, Azure
          Active Directory, Intune, Sophos, and Linux. My background spans
          technical troubleshooting, device deployment, networking, and
          documentation, with a growing focus on cybersecurity and
          infrastructure operations.
        </p>
        <p className="mt-2 text-cyan-600 dark:text-cyan-400 font-medium">
          📍 Abbotsford, BC · Available for full-time IT roles starting Summer 2026
        </p>
      </motion.div>

      {/* Skills grid */}
      <motion.div variants={item} className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-5">
          Technical Skills
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 p-4"
            >
              <p className="text-xs uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold mb-2">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((s) => (
                  <span
                    key={s}
                    className="px-2 py-0.5 rounded-md text-xs bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-zinc-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Certifications */}
      <motion.div variants={item} className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-5">
          Certifications & Awards
        </h3>
        <ul className="space-y-2">
          {certs.map((c) => (
            <li
              key={c.name}
              className="flex items-center justify-between rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-4 py-3"
            >
              <span className="text-gray-800 dark:text-zinc-200 text-sm">{c.name}</span>
              <span className="text-xs text-gray-500 dark:text-zinc-500 ml-3 shrink-0">
                {c.year}
              </span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Education */}
      <motion.div variants={item} className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-5">
          Education
        </h3>
        <div className="rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 p-5">
          <p className="font-semibold text-gray-900 dark:text-white text-lg">
            University of the Fraser Valley
          </p>
          <p className="text-gray-600 dark:text-zinc-400 text-sm mt-1">
            Bachelor of Computer Information Systems · Abbotsford, BC
          </p>
          <p className="text-cyan-600 dark:text-cyan-400 text-sm mt-1 font-medium">
            Graduating April 2026
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}