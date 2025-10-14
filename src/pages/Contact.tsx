export default function Contact(){
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 text-center">
      <h2 className="text-3xl font-semibold">Let’s Connect</h2>
      <p className="mt-3 text-zinc-400">Open to IT Support, SysAdmin, and Security Co-op roles.</p>
      <div className="mt-6 flex justify-center gap-3">
        <a href="mailto:contact@rahoolsaran.com" className="inline-flex items-center rounded-full bg-white text-black px-6 py-2 font-medium hover:scale-105 transition">Email Me</a>
        <a href="https://www.linkedin.com/in/rahool-saran" target="_blank" className="inline-flex items-center rounded-full border border-white/10 px-6 py-2 hover:bg-white/5 transition">LinkedIn</a>
      </div>
    </section>
  );
}
