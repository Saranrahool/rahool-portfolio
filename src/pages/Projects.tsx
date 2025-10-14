type P = { title:string; blurb:string; github?:string; live?:string; };
const projects:P[] = [
  { title:"Godot 4 Procedural Terrain", blurb:"GDScript + FastNoiseLite + SurfaceTool. Real-time heightmap, UI sliders, export.", github:"#", live:"#"},
  { title:"Jump King-style Platformer (Processing)", blurb:"Charge-to-jump physics, parallax layers, modular level JSONs.", github:"#", live:"#"},
  { title:"UFV Bookstore Digital Transformation", blurb:"PM artifacts: WBS, risk matrix, stakeholder register, visuals & roadmap."},
  { title:"Oral Health Worldwide — WordPress", blurb:"Multi-page site, accessible IA, donations CTA, SEO & lighthouse optimization.", live:"#"},
];
export default function Projects(){
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-semibold">Projects</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-5">
        {projects.map(p=>(
          <article key={p.title} className="rounded-2xl border border-white/10 bg-[var(--panel)] p-5 hover:shadow-xl transition">
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-zinc-400">{p.blurb}</p>
            <div className="mt-3 flex gap-3 text-sm">
              {p.github && <a className="text-[var(--accent)]" href={p.github}>GitHub →</a>}
              {p.live && <a className="text-[var(--accent)]" href={p.live}>Live ↗</a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
