export default function About(){
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <h2 className="text-3xl font-semibold">About</h2>
      <p className="mt-4 text-zinc-400 leading-relaxed">
        CIS student @ UFV focused on practical IT support, sysadmin, and security.
        I like reliable systems, simple designs, and clear documentation.
        Open to IT Support / SysAdmin / Security co-op roles.
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {["Python","Java","PowerShell","SQL","Networking","Azure","Virtualization","Git/GitHub","WordPress"].map(s=>(
          <span key={s} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-sm">{s}</span>
        ))}
      </div>
    </section>
  );
}
