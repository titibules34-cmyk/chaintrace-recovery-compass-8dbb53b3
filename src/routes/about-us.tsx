import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Scale, ShieldCheck, Search, Network, FileCheck2, Globe, DollarSign, ScanSearch } from "lucide-react";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us — Cyber Justice" },
      { name: "description", content: "Learn about Cyber Justice: evidence-led cyber intelligence, digital investigations and asset tracing." },
      { property: "og:title", content: "About Us — Cyber Justice" },
      { property: "og:description", content: "A focused approach to cyber intelligence, investigations and digital evidence." },
    ],
  }),
  component: AboutUs,
});

const principles = [
  { icon: Search, title: "Intelligence-led research", text: "OSINT, HUMINT, cyber and financial intelligence help build a clearer picture from fragmented digital information." },
  { icon: Network, title: "Connected investigations", text: "We examine relationships between wallets, transactions, entities and digital activity to develop useful investigative leads." },
  { icon: FileCheck2, title: "Evidence with context", text: "Findings are organised into clear timelines and documented material so clients and professional advisers can assess the next steps." },
];

const capabilities = [
  { icon: ShieldCheck, tag: "DIGITAL INVESTIGATIONS", title: "Cyber Investigations", text: "We examine suspicious online activity, digital footprints and connected entities to help establish what happened and identify useful investigative leads." },
  { icon: DollarSign, tag: "BLOCKCHAIN FORENSICS", title: "Digital Asset Tracing", text: "We analyse blockchain transactions, wallet activity and asset movements to map flows and help identify where digital funds may have travelled." },
  { icon: Globe, tag: "OSINT & HUMINT", title: "Open Source Intelligence", text: "We bring together relevant public-source research and human intelligence enquiries to develop context, verify information and support investigations." },
  { icon: ScanSearch, tag: "RECOVERY INTELLIGENCE", title: "Intelligence for Asset Recovery", text: "We organise investigative findings into clear leads and documented intelligence to help clients and their legal advisers consider informed next steps." },
];

const metrics = [
  { value: "04", label: "Specialist service areas", detail: "Tracing, intelligence and investigations" },
  { value: "06", label: "Intelligence capabilities", detail: "A connected toolkit for complex cases" },
  { value: "UK", label: "Registered company", detail: "Cyber Justice Ltd · No. 16458332" },
  { value: "Clear", label: "Evidence-led approach", detail: "Careful analysis. Practical direction." },
];

function AboutUs() {
  return (
    <main className="about-page relative min-h-screen overflow-hidden px-4 pb-20 pt-28 text-foreground sm:px-6">
      <style>{`
        @keyframes about-rise { from { opacity: 0; transform: translateY(28px) scale(.985); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes about-glow { 0%,100% { opacity:.35; transform:scale(1); } 50% { opacity:.65; transform:scale(1.12); } }
        @keyframes about-drift { 0%,100% { transform:translate3d(0,0,0); } 50% { transform:translate3d(0,-12px,0); } }
        .about-rise { opacity:0; animation:about-rise .8s cubic-bezier(.2,.75,.25,1) forwards; }
        .about-delay-1 { animation-delay:.12s; } .about-delay-2 { animation-delay:.24s; } .about-delay-3 { animation-delay:.36s; }
        .about-delay-4 { animation-delay:.48s; } .about-delay-5 { animation-delay:.6s; }
        .about-orb { animation:about-glow 8s ease-in-out infinite; }
        .about-float { animation:about-drift 7s ease-in-out infinite; }
        .about-grid { background-image:linear-gradient(rgba(148,183,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(148,183,255,.045) 1px,transparent 1px); background-size:52px 52px; mask-image:linear-gradient(to bottom,black,transparent 88%); }
        @media (prefers-reduced-motion: reduce) { .about-rise,.about-orb,.about-float { animation:none; opacity:1; } }
      `}</style>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(43,120,220,.22),transparent_55%),linear-gradient(180deg,#081b3c_0%,#0b2048_55%,#081a39_100%)]" />
      <div className="about-grid pointer-events-none absolute inset-0 -z-10" />
      <div className="about-orb pointer-events-none absolute -right-32 top-32 -z-10 h-80 w-80 rounded-full bg-blue-500/20 blur-[100px]" />
      <div className="about-float pointer-events-none absolute -left-24 top-[28rem] -z-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-[90px]" />

      <header className="about-rise mx-auto flex w-[min(100%,72rem)] items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.06] px-4 py-2 text-sm font-semibold text-blue-100 transition hover:bg-white/10">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
        <span className="text-xs font-bold tracking-[.22em] text-blue-200/70">CYBER <span className="text-cyan-300">JUSTICE</span></span>
      </header>

      <section className="mx-auto w-[min(100%,72rem)] pt-12 sm:pt-16">
        <div className="about-rise text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/[.08] px-4 py-1.5 text-[.68rem] font-bold tracking-[.2em] text-cyan-200">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,.9)]" /> WHO WE ARE
          </span>
          <h1 className="mt-5 text-5xl font-extrabold tracking-tight text-white sm:text-7xl">About Us</h1>
          <p className="mx-auto mt-4 max-w-3xl text-xl font-semibold leading-snug text-blue-100/75 sm:text-3xl">
            Experts in <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Cyber Justice</span>
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-blue-100/60 sm:text-base">
            Bringing clarity to complex digital investigations through intelligence, rigorous analysis and evidence-led action.
          </p>
        </div>

        <div className="about-rise about-delay-1 mt-12 rounded-[2rem] border border-blue-200/20 bg-white/[.075] p-6 shadow-[0_24px_90px_rgba(0,0,0,.22)] backdrop-blur-xl sm:mt-14 sm:p-10">
          <div className="flex items-start gap-4">
            <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 sm:flex"><Scale className="h-6 w-6" /></span>
            <div>
              <p className="text-lg font-semibold leading-8 text-white sm:text-xl">
                Cyber Justice is a specialist cyber intelligence and digital investigations company. We help individuals, businesses and professional teams make sense of complex online activity, trace digital assets and develop clear investigative leads.
              </p>
              <p className="mt-4 max-w-5xl leading-7 text-blue-100/75">
                Our work brings together asset tracing, cryptocurrency investigations, open-source research and cyber intelligence. We focus on careful analysis, transparent communication and practical findings — never promises of a guaranteed recovery or outcome.
              </p>
            </div>
          </div>

          <div className="my-8 h-px bg-gradient-to-r from-transparent via-blue-200/25 to-transparent" />
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex items-start gap-4">
              <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-300/10 text-cyan-200"><ShieldCheck className="h-5 w-5" /></span>
              <p className="leading-7 text-blue-100/80">
                We combine <strong className="text-white">OSINT, HUMINT, cyber and financial intelligence</strong> with investigative tools to identify patterns, map connections and turn scattered information into actionable intelligence.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-300/10 text-cyan-200"><FileCheck2 className="h-5 w-5" /></span>
              <p className="leading-7 text-blue-100/80">
                <strong className="text-white">Cyber Justice Ltd</strong> is registered in the United Kingdom (Company No. 16458332). We work with clients and professional advisers on digital matters that can cross borders and jurisdictions.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric, index) => (
            <article key={metric.label} className={`about-rise rounded-3xl border border-blue-200/15 bg-white/[.055] p-6 text-center shadow-lg backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[.09] about-delay-${index + 2}`}>
              <p className="bg-gradient-to-r from-cyan-200 to-blue-300 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">{metric.value}</p>
              <h2 className="mt-3 text-sm font-bold text-white">{metric.label}</h2>
              <p className="mt-2 text-xs leading-5 text-blue-100/60">{metric.detail}</p>
            </article>
          ))}
        </div>

        <section className="about-rise about-delay-5 mt-16">
          <div className="text-center">
            <p className="text-[.68rem] font-bold tracking-[.22em] text-cyan-200">HOW WE WORK</p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">Clarity through intelligence.</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-blue-100/65">A disciplined approach that keeps the facts, the evidence and the client’s objectives at the centre.</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {principles.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-2xl border border-blue-200/15 bg-white/[.045] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-200"><Icon className="h-5 w-5" /></span>
                <h3 className="mt-5 font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-blue-100/65">{text}</p>
              </article>
            ))}
          </div>
        </section>


        <section className="about-rise mt-20 sm:mt-24">
          <div className="text-center">
            <p className="text-[.68rem] font-bold tracking-[.22em] text-cyan-200">INVESTIGATIVE &amp; FORENSIC CAPABILITIES</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">Specialist Capabilities</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-blue-100/65 sm:text-base">
              Combining investigative methods, digital forensics and cross-border intelligence to bring clarity to complex cases.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {capabilities.map(({ icon: Icon, tag, title, text }, index) => (
              <article key={title} className={`group relative flex min-h-[22rem] flex-col overflow-hidden rounded-[1.75rem] border border-blue-200/15 bg-white/[.055] p-6 shadow-[0_18px_60px_rgba(0,0,0,.16)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[.085] sm:p-8 about-rise about-delay-${index + 1}`}>
                <div className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full bg-cyan-400/[.07] blur-3xl transition duration-500 group-hover:bg-cyan-300/[.14]" />
                <div className="relative flex items-center justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-200/15 bg-cyan-300/10 text-cyan-200 transition duration-300 group-hover:scale-110 group-hover:bg-cyan-300/15">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="rounded-full border border-blue-200/15 bg-blue-300/[.08] px-3 py-1.5 text-[.58rem] font-bold tracking-[.13em] text-cyan-100/90">{tag}</span>
                </div>
                <div className="relative flex flex-1 flex-col justify-end pt-10">
                  <div className="mb-6 flex h-24 items-center justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-[1.6rem] border border-cyan-200/15 bg-gradient-to-br from-cyan-300/15 to-blue-500/10 text-cyan-200 shadow-[0_0_50px_rgba(34,211,238,.08)] transition duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_0_55px_rgba(34,211,238,.18)]">
                      <Icon className="h-10 w-10 stroke-[1.35]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100/65">{text}</p>
                  <div className="mt-5 h-px w-12 bg-gradient-to-r from-cyan-300/70 to-transparent transition-all duration-500 group-hover:w-24" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="about-rise mt-12 flex flex-col items-center justify-between gap-5 rounded-3xl border border-cyan-200/20 bg-gradient-to-r from-blue-500/10 to-cyan-400/[.08] p-7 text-center sm:flex-row sm:text-left sm:p-9">
          <div>
            <h2 className="text-xl font-extrabold text-white sm:text-2xl">Need clarity on a digital investigation?</h2>
            <p className="mt-2 text-sm text-blue-100/65">Speak with our team about your situation and the evidence available.</p>
          </div>
          <a href="/#contact" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 shadow-[0_8px_30px_rgba(34,211,238,.2)] transition hover:-translate-y-0.5 hover:bg-cyan-200">
            Contact Cyber Justice <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
