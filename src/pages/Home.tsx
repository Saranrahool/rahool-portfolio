export default function Home(){
  return (
    <section className="grid place-items-center text-center px-6 py-24">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Hey, I’m Rahool — I build secure, scalable systems.</h1>
        <p className="mt-4 text-lg md:text-xl italic text-zinc-400">“Running on curiosity, Wi-Fi, and late-night debugging.”</p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="/projects" className="inline-flex items-center rounded-full bg-white text-black px-6 py-2 font-medium hover:scale-105 transition">View Work</a>
          <a href="/contact" className="inline-flex items-center rounded-full border border-white/10 px-6 py-2 hover:bg-white/5 transition">Contact</a>
        </div>
        <div className="mt-6 text-sm text-zinc-400 flex items-center justify-center gap-4">
          <a href="https://www.linkedin.com/in/rahool-saran" target="_blank">LinkedIn</a>
          <a href="https://github.com/Saranrahool" target="_blank">GitHub</a>
          <a href="mailto:contact@rahoolsaran.com">Email</a>
        </div>
      </div>
    </section>
  );
}
