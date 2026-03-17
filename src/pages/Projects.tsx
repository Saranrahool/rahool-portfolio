import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

type Project = {
  title: string;
  period: string;
  blurb: string;
  tags: string[];
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    title: "Infrastructure Home Lab",
    period: "2025 – Present",
    blurb:
      "Built an Ubuntu Server home lab with virtual machines and NAS storage to simulate enterprise IT infrastructure. Configured remote access, backup workflows, and shared storage while documenting system setup for Linux administration, service configuration, and infrastructure troubleshooting.",
    tags: ["Ubuntu Server", "Virtualization", "NAS", "Linux", "Remote Access"],
  },
  {
    title: "Enterprise Device Management Lab",
    period: "2026",
    blurb:
      "Simulated an enterprise environment using Azure Active Directory and Microsoft Intune. Joined Windows devices to Azure AD, configured device enrollment, applied security policies, device compliance rules, and application deployment through endpoint management.",
    tags: ["Azure AD", "Intune", "Windows", "Endpoint Management", "MDM"],
  },
  {
    title: "Linux Infrastructure Monitoring System",
    period: "2026",
    blurb:
      "Built a Linux server monitoring environment to track infrastructure health and performance — CPU, memory, disk, network activity, and service availability. Implemented dashboards and alerting concepts for troubleshooting system interruptions and failures.",
    tags: ["Linux", "Monitoring", "Dashboards", "Alerting", "Sysadmin"],
  },
  {
    title: "Virtualization Networking Lab (QEMU / Alpine Linux)",
    period: "2026",
    blurb:
      "Built interconnected virtual machines using QEMU and Alpine Linux to simulate isolated network environments. Configured VM connectivity, tested communication through CLI networking tools, and diagnosed and repaired corrupted qcow2 disk images using qemu-img utilities.",
    tags: ["QEMU", "Alpine Linux", "Networking", "Virtualization", "CLI"],
  },
  {
    title: "UFV Bookstore Digital Transformation",
    period: "2025",
    blurb:
      "Led a team project designing a digital transformation strategy including system architecture and project planning. Managed project milestones and stakeholder communication to deliver the plan on schedule.",
    tags: ["Project Management", "System Architecture", "Stakeholder Comms"],
  },
];

const experience = [
  {
    title: "IT Support Analyst (Practicum)",
    org: "Archway Community Services",
    range: "2026 – Present",
    tags: ["Microsoft 365", "Azure AD", "Intune", "Sophos", "Windows", "Networking"],
    points: [
      "Tier 1–2 IT support across a multi-site nonprofit environment — hardware, software, and connectivity.",
      "Configure and deploy workstations using Microsoft 365, Azure Active Directory, and Intune.",
      "Manage endpoint security and compliance using Sophos endpoint protection.",
      "Onboard systems to domain; configure user accounts, permissions, and device policies.",
      "Support users with Outlook, Teams, OneDrive, and SharePoint.",
    ],
  },
  {
    title: "IT Support Technician (Geek Squad)",
    org: "Best Buy Canada",
    range: "Oct 2025 – Dec 2025, Feb 2026 – Present",
    tags: ["Windows", "macOS", "Hardware", "Malware Removal", "Customer Support"],
    points: [
      "Diagnose hardware, OS, and software issues across Windows and macOS systems.",
      "Perform malware removal, OS troubleshooting, and device configuration.",
      "Data transfer, device setup, and technical troubleshooting for customer systems.",
      "Follow structured repair workflows and documentation in a high-volume environment.",
    ],
  },
  {
    title: "Volunteer IT Support",
    org: "CIVL Radio Network",
    range: "2025 – Present",
    tags: ["Linux", "Icecast", "Networking", "Broadcast", "Documentation"],
    points: [
      "Maintain Linux-based broadcast infrastructure supporting Icecast streaming services.",
      "Troubleshoot broadcast stream interruptions involving BUTT software and server connectivity.",
      "Diagnose network configuration issues affecting streaming reliability.",
      "Create troubleshooting guides to support volunteers managing broadcast systems.",
    ],
  },
  {
    title: "Student Lab Monitor",
    org: "School of Computing, UFV",
    range: "2025 – Present",
    tags: ["IT Support", "Academic", "Linux", "Windows"],
    points: [
      "Technical support during computing labs and examinations for CIS and COMP courses.",
      "Assist students and instructors with software installation, permissions, and troubleshooting.",
      "Maintain smooth lab operations by resolving hardware and access-related issues quickly.",
    ],
  },
  {
    title: "IT Support Intern",
    org: "Divya Gyan International School",
    range: "2023 – 2024",
    tags: ["Windows", "Networking", "Lab Systems"],
    points: [
      "Installed and configured computer lab systems: OS, software, and network connectivity.",
      "Tier 1 support for students and staff resolving software, hardware, and system access issues.",
      "Documented installation procedures and troubleshooting steps for consistent setup.",
    ],
  },
];

export default function Projects() {
  return (
    <motion.div
      className="mx-auto max-w-5xl px-6 py-20"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Projects */}
      <motion.div variants={item}>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Projects</h2>
        <p className="mt-2 text-gray-500 dark:text-zinc-400">
          Home labs, enterprise simulations, and team projects.
        </p>
      </motion.div>

      <motion.div
        variants={item}
        className="mt-8 grid md:grid-cols-2 gap-5"
      >
        {projects.map((p) => (
          <article
            key={p.title}
            className="rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 p-5 hover:border-cyan-500/50 dark:hover:border-cyan-500/40 transition-colors"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-snug">
                {p.title}
              </h3>
              <span className="shrink-0 text-xs text-gray-400 dark:text-zinc-500 mt-0.5">
                {p.period}
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-zinc-400 leading-relaxed">
              {p.blurb}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded-md text-xs bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-700/40 text-cyan-700 dark:text-cyan-400"
                >
                  {t}
                </span>
              ))}
            </div>
            {(p.github || p.live) && (
              <div className="mt-3 flex gap-3 text-sm">
                {p.github && (
                  <a className="text-cyan-600 dark:text-cyan-400 hover:underline" href={p.github}>
                    GitHub →
                  </a>
                )}
                {p.live && (
                  <a className="text-cyan-600 dark:text-cyan-400 hover:underline" href={p.live}>
                    Live ↗
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </motion.div>

      {/* Experience */}
      <motion.div variants={item} className="mt-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Experience</h2>
        <p className="mt-2 text-gray-500 dark:text-zinc-400">
          Real-world IT roles across nonprofit, retail, broadcast, and academic environments.
        </p>
      </motion.div>

      <motion.div variants={item} className="mt-8 space-y-6">
        {experience.map((e) => (
          <article
            key={e.title}
            className="rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 p-6"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {e.title}
                </h3>
                <p className="text-cyan-600 dark:text-cyan-400 text-sm font-medium">{e.org}</p>
              </div>
              <span className="text-xs text-gray-400 dark:text-zinc-500 mt-1">{e.range}</span>
            </div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {e.tags.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded-md text-xs bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
            <ul className="mt-3 space-y-1.5">
              {e.points.map((pt) => (
                <li key={pt} className="flex gap-2 text-sm text-gray-600 dark:text-zinc-400">
                  <span className="text-cyan-500 shrink-0 mt-0.5">→</span>
                  {pt}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </motion.div>
    </motion.div>
  );
}
