import { useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, ExternalLink, Sparkles, School, Trophy, Cpu, Server, ShieldHalf, Wrench, FileDown } from "lucide-react";

// ————————————————————————————————————————————————
// Dark Tech Portfolio — Single-file React component
// Tailwind + shadcn/ui + framer-motion + lucide-react
// ————————————————————————————————————————————————

const skills = [
  { name: "Python", icon: <Cpu className="w-4 h-4" /> },
  { name: "Java", icon: <Cpu className="w-4 h-4" /> },
  { name: "PowerShell", icon: <Wrench className="w-4 h-4" /> },
  { name: "SQL", icon: <Server className="w-4 h-4" /> },
  { name: "Networking", icon: <Server className="w-4 h-4" /> },
  { name: "Azure (AZ‑900)", icon: <ShieldHalf className="w-4 h-4" /> },
  { name: "Security (SC‑900)", icon: <ShieldHalf className="w-4 h-4" /> },
  { name: "Virtualization", icon: <Server className="w-4 h-4" /> },
  { name: "WordPress", icon: <Sparkles className="w-4 h-4" /> },
];

const projects = [
  {
    title: "Godot 4 Procedural Terrain",
    tags: ["GDScript", "FastNoiseLite", "SurfaceTool"],
    description:
      "Interactive terrain generation with UI sliders for frequency, height scale, and mesh density; saved heightmaps to disk and profiled performance.",
    link: "#",
  },
  {
    title: "Jump King‑style Platformer (Processing)",
    tags: ["Java", "OOP", "Game Loop"],
    description:
      "Physics‑driven 2D platformer featuring charge‑to‑jump mechanic, parallax backgrounds, and modular level JSONs.",
    link: "#",
  },
  {
    title: "UFV Bookstore Digital Transformation",
    tags: ["PM", "WBS", "Risk Matrix"],
    description:
      "Project manager for a comprehensive rollout: stakeholder register, Gantt, budget, and visual roadmap exceeding class exemplars.",
    link: "#",
  },
  {
    title: "Oral Health Worldwide — WordPress",
    tags: ["WP", "SEO", "Accessibility"],
    description:
      "Multi‑page site with program subpages, donations CTA, and clean IA; optimized lighthouse scores and semantic headings.",
    link: "#",
  },
];

const experience = [
  {
    role: "Treasurer — Computing Student Association (2025‑26)",
    bullets: [
      "Owned ~$1.5k budget; planned merch, events, and booth operations.",
      "Designed QR codes, Discord banners, and social content for growth.",
    ],
  },
  {
    role: "Student Lab Monitor — UFV (CIS 145 et al.)",
    bullets: [
      "Supported lab environments, troubleshooting OS/networking issues.",
      "Guided peers through Python/Java setup, Git workflows, and IDEs.",
    ],
  },
  {
    role: "Volunteer Tutor — Math4Me",
    bullets: [
      "Tutored foundational math; built problem sets and solution guides.",
    ],
  },
];

const achievements = [
  "EduHacks 2025 applicant; prior hackathon wins (UPES Hackathon 8.0).",
  "Google IT Support, Cisco fundamentals; AZ‑900 & SC‑900 knowledge.",
  "Active community contributor at CIVL Radio (tech/editing support).",
];

const links = {
  linkedin: "https://www.linkedin.com/in/rahool-saran",
  github: "https://github.com/", // TODO: add username
  email: "mailto:rahool.saran@student.ufv.ca",
  resume: "#", // TODO: drop a PDF and replace
};

function Glow() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 right-1/3 h-96 w-[44rem] rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute -bottom-40 left-1/4 h-96 w-[40rem] rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
    </div>
  );
}

const container = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.06, ease: "easeOut", duration: 0.6 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.4 } },
};

export default function PortfolioDark() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-zinc-200 selection:bg-cyan-500/30">
      <Glow />

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-[#0a0f1a]/60 border-b border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-cyan-400" />
            <span className="font-medium tracking-wide">Rahool Saran</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-zinc-300">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#experience" className="hover:text-white transition">Experience</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon" className="text-zinc-300 hover:text-white"><Linkedin className="h-5 w-5" /></Button>
            </a>
            <a href={links.github} target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon" className="text-zinc-300 hover:text-white"><Github className="h-5 w-5" /></Button>
            </a>
            <a href={links.email}>
              <Button variant="ghost" size="icon" className="text-zinc-300 hover:text-white"><Mail className="h-5 w-5" /></Button>
            </a>
            <a href={links.resume}>
              <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 border border-white/10">
                <FileDown className="h-4 w-4 mr-2" /> Resume
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                <span className="text-zinc-100">IT Support & Security</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Student • Builder • Problem‑Solver</span>
              </h1>
              <p className="mt-5 text-zinc-400 max-w-xl">
                CIS student @ UFV • CSA Treasurer (2025‑26) • Lab Monitor • Hands‑on with networking, Azure, virtualization, and automation. I build tools and experiences that are simple, secure, and scalable.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#projects"><Button className="bg-cyan-600/80 hover:bg-cyan-600">View Projects</Button></a>
                <a href="#contact"><Button variant="outline" className="border-white/10 text-zinc-200 hover:bg-white/5">Contact Me</Button></a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 blur-xl" />
              <Card className="relative bg-[#0e1624]/80 border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><ShieldHalf className="h-5 w-5 text-cyan-400" /> Focus Areas</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-zinc-300">
                  <ul className="grid grid-cols-2 gap-2">
                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> System Admin</li>
                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> Identity & Security</li>
                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> Cloud (Azure)</li>
                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> Automation (PS)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <h2 className="text-2xl md:text-3xl font-semibold">About</h2>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                I’m <span className="text-zinc-100 font-medium">Rahool Saran</span>, a Computer Information Systems student passionate about
                reliable IT support, pragmatic security, and clean, maintainable code. I enjoy turning rough ideas into
                well‑structured systems and user‑friendly experiences. Currently seeking co‑op roles in IT support, system administration, or security.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-white/5 border-white/10">Problem‑First Thinking</Badge>
                <Badge variant="secondary" className="bg-white/5 border-white/10">Docs & Diagrams</Badge>
                <Badge variant="secondary" className="bg-white/5 border-white/10">Team Player</Badge>
              </div>
            </div>
            <Card className="bg-[#0e1624]/80 border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><School className="h-5 w-5 text-cyan-400" /> Education</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-zinc-300">
                <div className="font-medium">BSc — Computer Information Systems</div>
                <div className="text-zinc-400">University of the Fraser Valley</div>
                <Separator className="my-3 bg-white/5" />
                <ul className="space-y-2 list-disc list-inside text-zinc-400">
                  <li>CIS 341 System Administration</li>
                  <li>CIS 395 Virtualization & Cloud</li>
                  <li>CIS 485 Ethics & Mgmt in IS</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="relative">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-2xl md:text-3xl font-semibold">Skills</h2>
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="mt-6 flex flex-wrap gap-3">
            {skills.map((s, i) => (
              <motion.div key={i} variants={item}>
                <Badge className="bg-gradient-to-r from-cyan-900/40 to-blue-900/40 border-white/10 text-zinc-200 backdrop-blur-sm">
                  <span className="mr-2 inline-flex">{s.icon}</span>{s.name}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="relative">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-semibold">Projects</h2>
            <a href={links.github} target="_blank" rel="noreferrer" className="text-sm text-cyan-300 hover:text-cyan-200 inline-flex items-center gap-1">
              View GitHub <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
                <Card className="h-full bg-[#0e1624]/80 border-white/10 hover:border-cyan-500/30 transition-colors">
                  <CardHeader>
                    <CardTitle>{p.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-400 text-sm leading-relaxed">{p.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <Badge key={t} variant="secondary" className="bg-white/5 border-white/10">{t}</Badge>
                      ))}
                    </div>
                    <div className="mt-4">
                      <a href={p.link} className="text-cyan-300 hover:text-cyan-200 text-sm inline-flex items-center gap-1">Read more <ExternalLink className="w-4 h-4" /></a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="relative">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-2xl md:text-3xl font-semibold">Experience</h2>
          <div className="mt-6 space-y-4">
            {experience.map((e) => (
              <Card key={e.role} className="bg-[#0e1624]/80 border-white/10">
                <CardHeader>
                  <CardTitle className="text-lg">{e.role}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-zinc-400 text-sm space-y-1">
                    {e.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-2xl md:text-3xl font-semibold flex items-center gap-2"><Trophy className="h-6 w-6 text-cyan-400" /> Achievements</h2>
          <ul className="mt-4 grid md:grid-cols-3 gap-4 text-sm text-zinc-300">
            {achievements.map((a) => (
              <li key={a} className="rounded-xl border border-white/10 bg-white/5 p-4">{a}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold">Let’s build something.</h2>
              <p className="mt-4 text-zinc-400 max-w-prose">
                I’m open to IT Support, SysAdmin, and Security Co‑op roles starting 2025‑26. Drop a note — I usually reply within a day.
              </p>
              <div className="mt-6 flex gap-2">
                <a href={links.linkedin} target="_blank" rel="noreferrer"><Button variant="outline" className="border-white/10 text-zinc-200 hover:bg-white/5"><Linkedin className="h-4 w-4 mr-2" /> LinkedIn</Button></a>
                <a href={links.email}><Button className="bg-cyan-600/80 hover:bg-cyan-600"><Mail className="h-4 w-4 mr-2" /> Email</Button></a>
              </div>
            </div>
            <Card className="bg-[#0e1624]/80 border-white/10">
              <CardHeader>
                <CardTitle>Quick Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                  <input className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm outline-none focus:border-cyan-500/50" placeholder="Your name" />
                  <input className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm outline-none focus:border-cyan-500/50" placeholder="Email" type="email" />
                  <textarea className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm outline-none focus:border-cyan-500/50 h-28" placeholder="Message" />
                  <Button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500">Send</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-8">
        <div className="mx-auto max-w-6xl px-4 text-xs text-zinc-500">
          © {year} Rahool Saran. Built with React, Tailwind, shadcn/ui, and framer‑motion.
        </div>
      </footer>
    </div>
  );
}
