import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

const Page = ({ children }: { children: React.ReactNode }) => (
  <motion.main
    initial={{ opacity: 0, x: 24 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -24 }}
    transition={{ duration: 0.35, ease: "easeOut" }}
    className="relative z-10 min-h-[calc(100vh-64px)]"
  >
    {children}
  </motion.main>
);

export default function App() {
  const location = useLocation();
  return (
    <div>
      {/* NAV */}
      <header className="sticky top-0 z-20 backdrop-blur border-b border-white/10 bg-base/70">
        <nav className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
          <NavLink to="/" className="font-semibold">Rahool Saran</NavLink>
          <div className="flex items-center gap-5 text-sm text-zinc-400">
            <NavLink to="/about" className={({isActive})=>isActive?"text-white":"hover:text-white"}>About</NavLink>
            <NavLink to="/projects" className={({isActive})=>isActive?"text-white":"hover:text-white"}>Projects</NavLink>
            <NavLink to="/resume" className={({isActive})=>isActive?"text-white":"hover:text-white"}>Resume</NavLink>
            <NavLink to="/contact" className={({isActive})=>isActive?"text-white":"hover:text-white"}>Contact</NavLink>
          </div>
        </nav>
      </header>

      {/* PAGE TRANSITIONS */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Page><Home/></Page>} />
          <Route path="/about" element={<Page><About/></Page>} />
          <Route path="/projects" element={<Page><Projects/></Page>} />
          <Route path="/contact" element={<Page><Contact/></Page>} />
          <Route path="/resume" element={<Page><Resume/></Page>} />
        </Routes>
      </AnimatePresence>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-6xl px-5 text-xs text-zinc-500">
          © {new Date().getFullYear()} rahoolsaran.com
        </div>
      </footer>
    </div>
  );
}
