import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Line = { type: "input" | "output"; text: string };

const HELP_TEXT = [
  "Available commands:",
  "  whoami        show who I am",
  "  about         short bio",
  "  skills        list technical skills",
  "  experience    list work experience",
  "  projects      list projects",
  "  contact       show contact info",
  "  open <page>   navigate to a page (about, projects, resume, contact, blog)",
  "  resume        open my resume",
  "  clear         clear the terminal",
  "  help          show this list",
];

const PAGES: Record<string, string> = {
  about: "/about",
  projects: "/projects",
  resume: "/resume",
  contact: "/contact",
  blog: "/blog",
  home: "/",
};

const BOOT_LINES: Line[] = [
  { type: "output", text: "Booting rahoolsaran.com..." },
  { type: "output", text: "" },
  { type: "output", text: "Rahool Saran" },
  { type: "output", text: "IT Coordinator — Systems Administration — Cybersecurity" },
  { type: "output", text: "Abbotsford, BC, Canada" },
  { type: "output", text: "" },
  { type: "output", text: "Type 'help' to see available commands." },
  { type: "output", text: "Try: about · skills · experience · projects · resume · contact" },
  { type: "output", text: "" },
];

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>(BOOT_LINES);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  function print(text: string | string[]) {
    const arr = Array.isArray(text) ? text : [text];
    setLines((prev) => [...prev, ...arr.map((t) => ({ type: "output" as const, text: t }))]);
  }

  function runCommand(raw: string) {
    const cmd = raw.trim();
    setLines((prev) => [...prev, { type: "input", text: cmd }]);
    if (!cmd) return;

    const [base, ...rest] = cmd.toLowerCase().split(" ");
    const arg = rest.join(" ").trim();

    switch (base) {
      case "help":
        print(HELP_TEXT);
        break;
      case "whoami":
        print("rahool — IT Coordinator · Systems Administration · Cybersecurity");
        break;
      case "about":
        print([
          "Computer Information Systems graduate (UFV, Security concentration).",
          "Hands-on experience across enterprise, nonprofit, academic, retail, and",
          "broadcast environments. Based in Abbotsford, BC.",
          "Type 'open about' for the full page.",
        ]);
        break;
      case "skills":
        print([
          "OS: Windows, Windows Server, Linux (Ubuntu, Alpine), macOS",
          "Cloud/Identity: Azure, Azure AD, Intune, Microsoft 365",
          "Networking: TCP/IP, VLANs, VPNs",
          "Security: Sophos, Wireshark, Nmap, Cisco Packet Tracer",
          "Programming: Python, Java, SQL, JavaScript",
        ]);
        break;
      case "experience":
        print([
          "IT Coordinator — current",
          "IT Support Analyst (Practicum) — Archway Community Services",
          "IT Support Technician — Best Buy Canada (Geek Squad)",
          "Volunteer IT Support — CIVL Radio Network",
          "Type 'open projects' for details.",
        ]);
        break;
      case "projects":
        print([
          "Infrastructure Home Lab",
          "Enterprise Device Management Lab",
          "Linux Infrastructure Monitoring System",
          "Virtualization Networking Lab (QEMU / Alpine Linux)",
          "UFV Bookstore Digital Transformation",
          "Type 'open projects' for full details.",
        ]);
        break;
      case "contact":
        print([
          "email: contact@rahoolsaran.com",
          "linkedin: linkedin.com/in/rahool-saran",
          "github: github.com/Saranrahool",
        ]);
        break;
      case "resume":
        print("Opening resume...");
        setTimeout(() => navigate("/resume"), 400);
        break;
      case "open": {
        const target = PAGES[arg];
        if (target) {
          print(`Navigating to ${arg}...`);
          setTimeout(() => navigate(target), 300);
        } else {
          print(`Unknown page: ${arg || "(none)"}. Try: about, projects, resume, contact, blog`);
        }
        break;
      }
      case "clear":
        setLines([]);
        break;
      case "ls":
        print(Object.keys(PAGES).join("  "));
        break;
      case "sudo":
        print("Nice try. Permission denied — this terminal only grants read access. 😄");
        break;
      case "date":
        print(new Date().toString());
        break;
      case "echo":
        print(arg || "");
        break;
      default:
        print(`command not found: ${base}. Type 'help' for available commands.`);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      runCommand(input);
      setHistory((h) => [...h, input]);
      setHistoryIndex(null);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const nextIndex = historyIndex === null ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInput(history[nextIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === null) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= history.length) {
        setHistoryIndex(null);
        setInput("");
      } else {
        setHistoryIndex(nextIndex);
        setInput(history[nextIndex]);
      }
    }
  }

  return (
    <div
      className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden border border-gray-700/50 shadow-2xl text-left"
      onClick={() => inputRef.current?.focus()}
    >
      {/* title bar */}
      <div className="flex items-center gap-1.5 bg-[#2a2a2a] px-4 py-2.5">
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <span className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-3 text-xs text-zinc-400 font-mono">guest@rahoolsaran.com</span>
      </div>

      {/* body */}
      <div className="bg-[#0a0a0a] px-5 py-4 font-mono text-sm md:text-base h-[26rem] md:h-[32rem] overflow-y-auto">
        {lines.map((line, i) => (
          <div
            key={i}
            className={
              line.type === "input"
                ? "text-cyan-400"
                : line.text === "Rahool Saran"
                ? "text-white font-bold text-lg md:text-xl"
                : line.text.startsWith("IT Coordinator")
                ? "text-cyan-400"
                : "text-zinc-300"
            }
          >
            {line.type === "input" ? (
              <span>
                <span className="text-green-400">guest@rahool</span>
                <span className="text-zinc-500">:~$ </span>
                {line.text}
              </span>
            ) : (
              <span className="whitespace-pre-wrap">{line.text}</span>
            )}
          </div>
        ))}

        <div className="flex items-center">
          <span className="text-green-400">guest@rahool</span>
          <span className="text-zinc-500">:~$&nbsp;</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            spellCheck={false}
            className="flex-1 bg-transparent outline-none text-zinc-100 caret-cyan-400"
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
