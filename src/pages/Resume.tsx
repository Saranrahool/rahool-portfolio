import { useEffect, useMemo, useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import QRCode from "qrcode";
import ResumeDoc from "../components/ResumeDoc";

export default function Resume(){
  const data = useMemo(()=>({
    name: "Rahool Saran",
    role: "IT Support & Cybersecurity Enthusiast",
    location: "Abbotsford, BC",
    email: "contact@rahoolsaran.com",
    website: "https://rahoolsaran.com",
    summary:
      "CIS student (UFV) focused on IT support, cloud, and system administration. Troubleshooting across OS, networking, and tooling. CSA Treasurer, Lab Monitor, and Math4Me tutor with a bias for reliability and practical security.",
    skills: ["Python","Java","PowerShell","SQL","Networking","Azure","Virtualization","Git/GitHub","WordPress","Team Leadership"],
    experience: [
      {
        title: "Treasurer",
        org: "Computing Student Association (UFV)",
        range: "2025 – 2026",
        points: [
          "Managed ~$1.5k budget for events, merchandise, and outreach.",
          "Designed QR codes, Discord banners, and digital promo assets.",
          "Coordinated execs for booths, giveaways, and orientation."
        ]
      },
      {
        title: "Student Lab Monitor",
        org: "University of the Fraser Valley",
        range: "2024 – Present",
        points: [
          "Supported lab environments; triaged OS, IDE, and networking issues.",
          "Guided students on Python/Java setup, Git workflows, and tooling."
        ]
      },
      {
        title: "Volunteer Tutor",
        org: "Math4Me",
        range: "2023 – 2024",
        points: [
          "Tutored foundational mathematics; built problem sets and solutions."
        ]
      }
    ],
    education: [
      { school: "University of the Fraser Valley", degree: "BSc — Computer Information Systems", range: "2022 – Present" }
    ]
  }),[]);

  const [qrDataUrl, setQrDataUrl] = useState<string>("");
  useEffect(()=>{
    QRCode.toDataURL(data.website, { margin: 1, width: 200 })
      .then(setQrDataUrl)
      .catch(()=>setQrDataUrl(""));
  }, [data.website]);

  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <h2 className="text-3xl font-semibold">Resume</h2>
      <p className="mt-2 text-zinc-400">Prefilled with your current roles and skills. Download a clean PDF that includes a QR code back to your site.</p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {/* Preview card */}
        <div className="rounded-2xl border border-white/10 bg-[var(--panel)] p-5">
          <h3 className="text-lg font-semibold">{data.name}</h3>
          <p className="text-sm text-zinc-400">{data.role} • {data.location}</p>
          <p className="text-sm text-zinc-400">{data.email} • {new URL(data.website).hostname}</p>
          <div className="mt-4 text-sm text-zinc-300 leading-relaxed">{data.summary}</div>

          <div className="mt-5">
            <div className="text-sm font-semibold">Skills</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {data.skills.map(s => <span key={s} className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs">{s}</span>)}
            </div>
          </div>

          <div className="mt-5">
            <div className="text-sm font-semibold">Experience</div>
            <ul className="mt-2 space-y-3">
              {data.experience.map(e=>(
                <li key={e.title} className="text-sm">
                  <div className="font-medium">{e.title} — {e.org}</div>
                  <div className="text-xs text-zinc-400">{e.range}</div>
                  <ul className="mt-1 list-disc list-inside text-zinc-400">
                    {e.points.map(p => <li key={p}>{p}</li>)}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <div className="text-sm font-semibold">Education</div>
            <ul className="mt-2 text-sm text-zinc-300">
              {data.education.map(e => <li key={e.school}><span className="font-medium">{e.school}</span> — {e.degree} ({e.range})</li>)}
            </ul>
          </div>
        </div>

        {/* Actions */}
        <div className="rounded-2xl border border-white/10 bg-[var(--panel)] p-5">
          <div className="text-sm font-semibold">Download</div>
          <p className="mt-1 text-sm text-zinc-400">Generates a PDF with a QR code pointing to {new URL(data.website).hostname}.</p>
          <div className="mt-4">
            <PDFDownloadLink
              document={<ResumeDoc data={data} qrDataUrl={qrDataUrl} />}
              fileName="Rahool_Saran_Resume.pdf"
              className="inline-flex items-center rounded-full bg-white text-black px-6 py-2 font-medium hover:scale-105 transition"
            >
              {({ loading }) => loading ? "Preparing…" : "📄 Download Resume"}
            </PDFDownloadLink>
          </div>

          <div className="mt-6">
            <div className="text-sm font-semibold mb-2">QR Preview</div>
            {qrDataUrl
              ? <img src={qrDataUrl} alt="QR code" className="h-28 w-28 rounded-md border border-white/10" />
              : <div className="text-xs text-zinc-500">Generating QR…</div>}
          </div>
        </div>
      </div>
    </section>
  );
}
