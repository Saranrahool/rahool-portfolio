import { useMemo } from "react";

const links = {
  linkedin: "https://www.linkedin.com/in/rahool-saran",
  github: "https://github.com/Saranrahool",
  spotify:
    "https://open.spotify.com/user/31zml33gegjfswl5eqmmi3bvsum4?si=30cf1c889c754313",
  email: "mailto:contact@rahoolsaran.com",
};

type Project = { title: string; blurb: string; github?: string; live?: string };

const projects: Project[] = [
  {
    title: "Godot 4 – Procedural Terrain",
    blurb:
      "GDScript + FastNoiseLite + SurfaceTool. Real-time heightmap tweak UI, export, perf profiling.",
    github: "#",
    live: "#",
  },
  {
    title: "Jump-King-style Platformer (Processing)",
    blurb:
      "Charge-to-jump physics, parallax layers, modular level JSONs, clean OOP structure.",
    github: "#",
    live: "#",
  },
  {
    title: "UFV Bookstore Digital Transformation",
    blurb:
      "WBS, risk matrix, stakeholder register, budget & timeline visuals; led end-to-end PM docs.",
  },
  {
    title: "Oral Health Worldwide — WordPress",
    blurb:
      "Multi-page site, accessible IA, donations CTA, SEO & lighthouse optimization.",
    live: "#",
  },
];

export default function App() {
  const year = useMemo(() => new Date().getFullYear(), []);
  return (
    <div className="page">
      {/* NAV */}
      <header className="nav">
        <a href="#" className="brand">Rahool Saran</a>
        <nav className="navlinks">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <h1>Hey, I’m Rahool — I build secure, scalable systems.</h1>
        <p className="tag">
          “Running on curiosity, Wi-Fi, and late-night debugging.”
        </p>
        <div className="cta">
          <a className="btn primary" href="#projects">View Work</a>
          <a className="btn" href="#contact">Contact</a>
        </div>
        <div className="socials">
          <a href={links.linkedin} target="_blank">LinkedIn</a>
          <a href={links.github} target="_blank">GitHub</a>
          <a href={links.spotify} target="_blank">Spotify</a>
          <a href={links.email}>Email</a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <h2>About</h2>
        <p className="muted">
          CIS student @ UFV focused on practical IT support, sysadmin, and security.
          I like reliable systems, simple designs, and clear documentation.
          Currently open for IT Support / SysAdmin / Security co-op roles.
        </p>
        <ul className="chips">
          {[
            "Python","Java","PowerShell","SQL",
            "Networking","Azure","Virtualization",
            "GitHub","WordPress",
          ].map(s => <li key={s}>{s}</li>)}
        </ul>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="grid">
          {projects.map(p => (
            <article key={p.title} className="card">
              <h3>{p.title}</h3>
              <p className="muted">{p.blurb}</p>
              <div className="links">
                {p.github && <a href={p.github} target="_blank">GitHub →</a>}
                {p.live && <a href={p.live} target="_blank">Live ↗</a>}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2>Let’s build something.</h2>
        <p className="muted">
          I’m open to IT Support, SysAdmin, and Security co-ops. Say hi — I reply fast.
        </p>
        <div className="cta">
          <a className="btn primary" href={links.email}>Email Me</a>
          <a className="btn" href={links.linkedin} target="_blank">LinkedIn</a>
        </div>
      </section>

      <footer className="footer">© {year} rahoolsaran.com</footer>
    </div>
  );
}
