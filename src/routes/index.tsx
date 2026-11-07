import { useEffect, useState } from "react";

const WORDS = ["digital", "tracing", "intelligence", "recovery"];
import { createFileRoute, Link } from "@tanstack/react-router";
import { Globe, Users, Monitor, DollarSign, Code2, BarChart3, MapPin, Lock, ShieldCheck, ArrowRight, Phone, Clock, Send } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cyber Justice — Digital Forensics & Investigations" },
      {
        name: "description",
        content:
          "Crypto tracing, cyber intelligence and clear evidence documentation for individuals, businesses and legal professionals.",
      },
      { property: "og:title", content: "Cyber Justice — Digital Forensics & Investigations" },
      {
        property: "og:description",
        content: "Evidence-led digital research with clear records and realistic next steps.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  [
    "Asset Recovery",
    "Asset Tracing and Investigations",
    "Specializing in Asset Tracing, Crypto Recovery Services offers tailored plans to aid law enforcement and law firms. We provide key evidence for successful fund recovery.",
    "/assets/asset-tracing.png",
  ],
  [
    "OSINT & HUMINT",
    "Cyber Intelligence Services",
    "Leveraging diverse techniques like Open Source Intelligence, our team delivers actionable evidence. This service augments the capabilities of law enforcement and legal professionals.",
    "/assets/cyber-intel-icon.png",
  ],
  [
    "LEO Certified",
    "Cyber Investigation Team",
    "Our team of U.S.-Certified Cyber Investigators conducts global inquiries, spanning 6 continents. We are adept at gathering essential evidence for varied cases.",
    "/assets/cyber-investigation-icon.png",
  ],
  [
    "On-Chain Forensics",
    "Cryptocurrency Tracing",
    "We excel at tracking most types of cryptocurrencies and assets. If digital assets are transferred, we have the capability to trace and follow their movement.",
    "/assets/crypto-tracing.png",
  ],
];

const steps = [
  ["Scope", "Clarify what happened and what a review can establish."],
  ["Review", "Check your records and relevant public data."],
  ["Document", "Organise findings into a referenced timeline."],
  ["Next steps", "Explain what the evidence supports and who can help."],
];

const tools = [
  {
    icon: Globe,
    tag: "OSINT",
    title: "Open Intelligence",
    text: "Deep-web data harvesting, digital footprint analysis, and public ledger reconnaissance.",
  },
  {
    icon: Users,
    tag: "HUMINT",
    title: "Human Intelligence",
    text: "Direct confidential sourcing, field investigations, and discreet intelligence verification.",
  },
  {
    icon: Monitor,
    tag: "CYBINT",
    title: "Cyber Intelligence",
    text: "Network infrastructure tracking, threat vector mapping, and malicious server attribution.",
  },
  {
    icon: DollarSign,
    tag: "FININT",
    title: "Financial Intelligence",
    text: "Offshore corporate entity tracing, banking flow analysis, and cross-border money trails.",
  },
  {
    icon: Code2,
    tag: "SOFTWARE",
    title: "Investigative Software",
    text: "Proprietary case management tools, visual link mapping, and forensic graph analysis.",
  },
  {
    icon: BarChart3,
    tag: "ANALYSIS",
    title: "Intelligence Analysis",
    text: "Comprehensive correlation, anomaly detection, and court-admissible forensic reporting.",
  },
];

const standards = [
  {
    icon: Globe,
    title: "Cross-Border Forensic Jurisdiction",
    text: "Coordinating with international counsel, forensic exchanges, and law enforcement agencies across 6 continents.",
  },
  {
    icon: Lock,
    title: "Strict Non-Disclosure & Evidence Security",
    text: "Every case inquiry is protected by encrypted intake protocols and strict chain-of-custody documentation.",
  },
  {
    icon: ShieldCheck,
    title: "Court-Admissible Evidence Packages",
    text: "Expert witness reports, on-chain fund flows, and attribution intelligence ready for civil and criminal proceedings.",
  },
];

const companyFacts = [
  ["Companies House Co. No.", "16458332"],
  ["Incorporated", "19 May 2025 (Active)"],
  ["Company Classification", "Private Limited Company"],
];

const CONTACT_EMAIL = "info@cyberjustice.uk";

const contactCards = [
  {
    icon: Phone,
    title: "Direct Case Intake & Hotline",
    text: (
      <>
        Inquire directly via{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-accent hover:underline">
          {CONTACT_EMAIL}
        </a>{" "}
        or the confidential case form.
      </>
    ),
  },
  {
    icon: Lock,
    title: "100% Confidential",
    text: "All inquiries are protected by strict non-disclosure and encrypted protocols.",
  },
  {
    icon: Clock,
    title: "Rapid 24-Hour Response",
    text: "Our global forensic team analyzes case inquiries and responds within 24 hours.",
  },
  {
    icon: ShieldCheck,
    title: "Certified Investigators",
    text: "UK-Registered and international forensic jurisdiction coverage.",
  },
];

function Index() {
  const [word, setWord] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setWord((w) => (w + 1) % WORDS.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="min-h-screen">
      <header className="fixed inset-x-0 top-4 z-50 mx-auto flex w-[min(100%-2rem,64rem)] items-center justify-between rounded-full border border-border bg-background/70 px-5 py-2.5 backdrop-blur">
        <a href="#top" className="text-sm font-extrabold tracking-widest">
          CYBER <span className="text-accent">JUSTICE</span>
        </a>
        <nav className="flex items-center gap-5 text-sm text-muted-foreground">
          <a href="#services" className="hidden hover:text-foreground sm:inline">Services</a>
          <a href="#offices" className="hidden hover:text-foreground sm:inline">Offices</a>
          <a href="#contact" className="rounded-full bg-primary px-4 py-1.5 font-semibold text-primary-foreground">Contact</a>
        </nav>
      </header>

      <section id="top" className="relative flex h-[80vh] min-h-[32rem] max-h-[46rem] items-end overflow-hidden">
        <img src="/assets/cyber-justice-hero.webp" alt="Lady Justice in a blue digital investigation room" className="absolute inset-0 -z-20 h-full w-full object-cover" fetchPriority="high" />
        <div className="hero-overlay absolute inset-0 -z-10" />
        <div className="mx-auto w-[min(100%-2rem,64rem)] pb-16 pt-32">
          <p className="eyebrow">Digital forensics & investigations</p>
          <h1 className="mt-4 max-w-2xl text-4xl font-extrabold leading-tight sm:text-6xl">
            Actionable{" "}
            <span key={word} className="word-swap inline-block text-accent">{WORDS[word]}</span>
            <br />
            solutions.
          </h1>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Tracing, recovery, and forensic intelligence for law firms, investigators, and institutions worldwide.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow">Request a consultation</a>
            <a href="#services" className="rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-secondary">Our services</a>
          </div>
          <p className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
            <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            UK Registered Company · Worldwide Asset Recovery & Intelligence Operations
          </p>
        </div>
      </section>

      <section id="services" className="mx-auto w-[min(100%-2rem,64rem)] py-20">
        <p className="eyebrow">Services</p>
        <h2 className="mt-3 text-3xl font-extrabold">Focused capabilities, clear boundaries.</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {services.map(([tag, title, text, img]) => (
            <article key={title} className="flex flex-col gap-4 rounded-xl border border-border bg-card p-5 transition hover:border-primary">
              <div className="flex items-start gap-4">
                <img src={img} alt="" className="h-12 w-12 shrink-0 object-contain" loading="lazy" />
                <div>
                  <p className="eyebrow">{tag}</p>
                  <h3 className="mt-1 font-semibold">{title}</h3>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{text}</p>
              {title === "Asset Tracing and Investigations" ? (
                <Link to="/asset-recovery" className="mt-auto text-sm font-semibold text-accent hover:underline">
                  Explore Capabilities &rarr;
                </Link>
              ) : title === "Cyber Intelligence Services" ? (
                <Link to="/cyber-intelligence" className="mt-auto text-sm font-semibold text-accent hover:underline">
                  Explore Capabilities &rarr;
                </Link>
              ) : title === "Cyber Investigation Team" ? (
                <Link to="/cyber-investigation-team" className="mt-auto text-sm font-semibold text-accent hover:underline">
                  Explore Capabilities &rarr;
                </Link>
              ) : title === "Cryptocurrency Tracing" ? (
                <Link to="/cryptocurrency-tracing" className="mt-auto text-sm font-semibold text-accent hover:underline">
                  Explore Capabilities &rarr;
                </Link>
              ) : (
                <a href="#contact" className="mt-auto text-sm font-semibold text-accent hover:underline">
                  Explore Capabilities &rarr;
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card/40">
        <div className="mx-auto grid w-[min(100%-2rem,64rem)] gap-8 py-16 sm:grid-cols-4">
          {steps.map(([title, text], i) => (
            <div key={title}>
              <span className="eyebrow">0{i + 1}</span>
              <h3 className="mt-2 font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="tools" className="mx-auto w-[min(100%-2rem,64rem)] py-20">
        <div className="text-center">
          <p className="eyebrow">Tools</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Cyber Tools, Software &amp; Resources</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We use state-of-the-art Cyber Tools, Software Solutions, closed databases, Open Intelligence (OSINT),
            Human Intelligence (HUMINT), Cyber Intelligence (CYBINT), and Financial Intelligence (FININT).
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map(({ icon: Icon, tag, title, text }) => (
            <article key={title} className="rounded-2xl border border-border bg-card p-6 transition hover:border-primary">
              <div className="flex items-start justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-accent">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold tracking-wide text-accent">{tag}</span>
              </div>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="offices" className="mx-auto w-[min(100%-2rem,64rem)] py-20">
        <div className="text-center">
          <p className="eyebrow">Global Network</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Our Office Locations</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Strategic investigative presence coordinating cross-border operations worldwide.
          </p>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-2xl border border-border bg-card lg:grid-cols-2">
          <div className="flex flex-col gap-5 p-8 sm:p-10">
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-bold tracking-wide text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                Active Operational Headquarters
              </span>
              <span className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-bold tracking-wide text-muted-foreground">
                United Kingdom
              </span>
            </div>
            <div>
              <h3 className="text-2xl font-extrabold">Cyber Justice Ltd</h3>
              <p className="mt-1 text-sm font-semibold text-accent">Registered Office &amp; Global Investigations Command</p>
              <p className="mt-3 flex items-center gap-2 text-lg font-bold">
                <MapPin className="h-5 w-5 text-accent" aria-hidden="true" />
                London, United Kingdom
              </p>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-border bg-background/60 p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-accent">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-bold tracking-widest text-muted-foreground">Official Registered Address</p>
                <p className="mt-1 text-sm font-semibold leading-relaxed">
                  Unit A1008, 4-6 Greatorex Street, London, United Kingdom, E1 5NF
                </p>
              </div>
            </div>
            <dl className="mt-auto divide-y divide-border border-t border-border text-sm">
              {companyFacts.map(([label, value]) => (
                <div key={label} className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-muted-foreground">{label}</dt>
                  <dd className="font-semibold">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex flex-col gap-4 border-t border-border bg-background/40 p-8 sm:p-10 lg:border-l lg:border-t-0">
            <h3 className="text-lg font-bold">Operational Scope &amp; Forensic Standards</h3>
            {standards.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition hover:border-primary">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-accent">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold">{title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{text}</p>
                </div>
              </div>
            ))}
            <a href="#contact" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow">
              Connect With Our Headquarters
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto w-[min(100%-2rem,64rem)] pb-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="eyebrow">Book appointment now!</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Contact With Us</h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              We offer complimentary consultations in order to determine if our Asset Recovery and
              Intelligence Services are right for your case.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-6 flex items-center gap-4 rounded-2xl border border-accent/40 bg-accent/10 p-5 transition hover:border-accent hover:bg-accent/15"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Send className="h-6 w-6" aria-hidden="true" />
              </span>
              <span>
                <span className="eyebrow block">Email us directly</span>
                <span className="mt-1 block text-lg font-extrabold tracking-tight text-accent sm:text-2xl">
                  {CONTACT_EMAIL}
                </span>
                <span className="mt-0.5 block text-xs text-muted-foreground">
                  Click to open your email app — we reply within 24 hours.
                </span>
              </span>
            </a>
            <div className="mt-6 flex flex-col gap-4">
              {contactCards.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition hover:border-primary">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-accent">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold">{title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h3 className="text-xl font-extrabold">Request Confidential Consultation</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Fill in your details below to connect with an intelligence specialist.
            </p>
            <form
              className="mt-6 flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const subject = `Case inquiry: ${data.get("subject") || "Confidential consultation"}`;
                const body = [
                  `Name: ${data.get("name")}`,
                  `Email: ${data.get("email")}`,
                  `Phone: ${data.get("phone")}`,
                  "",
                  String(data.get("message") || ""),
                ].join("\n");
                window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5 text-sm font-semibold">
                  Full Name
                  <input name="name" required placeholder="John Doe" className="rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm font-normal placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                </label>
                <label className="flex flex-col gap-1.5 text-sm font-semibold">
                  Email Address
                  <input name="email" type="email" required placeholder="john@example.com" className="rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm font-normal placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                </label>
                <label className="flex flex-col gap-1.5 text-sm font-semibold">
                  Phone Number
                  <input name="phone" type="tel" placeholder="+44 7000 000000" className="rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm font-normal placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                </label>
                <label className="flex flex-col gap-1.5 text-sm font-semibold">
                  Subject
                  <input name="subject" placeholder="e.g. Crypto Recovery / Tracing" className="rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm font-normal placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                </label>
              </div>
              <label className="flex flex-col gap-1.5 text-sm font-semibold">
                Case Overview / Message
                <textarea name="message" required rows={5} placeholder="Please provide relevant transaction hashes, dates, or details (do not include private keys)..." className="resize-y rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm font-normal placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </label>
              <button type="submit" className="mt-1 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90">
                Send Message
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
              <p className="text-center text-xs text-muted-foreground">
                Prefer email? Write to us directly at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-accent hover:underline">
                  {CONTACT_EMAIL}
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-card/40">
        <div className="mx-auto grid w-[min(100%-2rem,72rem)] gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <p className="text-sm font-extrabold tracking-widest">
              CYBER <span className="text-accent">JUSTICE</span>
            </p>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Boutique Cyber Intelligence &amp; Digital Asset Tracing group providing actionable
              evidence to law firms, investigators, and institutions worldwide.
            </p>
            <div className="mt-5 flex items-start gap-3 rounded-xl border border-border bg-background/60 p-4">
              <span className="rounded-md bg-primary/10 px-2 py-1 text-xs font-bold text-accent">UK</span>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Cyber Justice Ltd · Co. No. 16458332 · Unit A1008, 4-6 Greatorex Street, London,
                United Kingdom, E1 5NF
              </p>
            </div>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-3 flex items-center gap-3 rounded-xl border border-accent/40 bg-accent/10 p-4 transition hover:border-accent"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <Send className="h-4 w-4" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-[0.65rem] font-bold tracking-widest text-muted-foreground">
                  OFFICIAL INQUIRIES &amp; CASE INTAKE
                </span>
                <span className="block text-sm font-bold text-accent">{CONTACT_EMAIL}</span>
              </span>
            </a>
          </div>

          <nav aria-label="Quick links">
            <p className="eyebrow">Quick Links</p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-foreground">All Services</a></li>
              <li><a href="#tools" className="hover:text-foreground">Cyber Tools</a></li>
              <li><a href="#offices" className="hover:text-foreground">Our Offices</a></li>
              <li><a href="#contact" className="hover:text-foreground">Contact Us</a></li>
            </ul>
          </nav>

          <nav aria-label="Services">
            <p className="eyebrow">Services</p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-muted-foreground">
              <li><Link to="/asset-recovery" className="hover:text-foreground">Asset Tracing &amp; Investigations</Link></li>
              <li><Link to="/cyber-intelligence" className="hover:text-foreground">Cyber Intelligence Services</Link></li>
              <li><Link to="/cyber-investigation-team" className="hover:text-foreground">Cyber Investigation Team</Link></li>
              <li><Link to="/cryptocurrency-tracing" className="hover:text-foreground">Cryptocurrency Tracing</Link></li>
            </ul>
          </nav>

          <div>
            <p className="eyebrow">Our Credentials</p>
            <p className="mt-4 text-sm text-muted-foreground">
              Direct verification of Cyber Justice Ltd via Companies House, United Kingdom.
            </p>
            <dl className="mt-4 flex flex-col gap-2 text-xs text-muted-foreground">
              <div className="flex justify-between gap-4 border-b border-border pb-2">
                <dt>Company number</dt>
                <dd className="font-semibold text-foreground">16458332</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-border pb-2">
                <dt>Incorporated</dt>
                <dd className="font-semibold text-foreground">19 May 2025</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-border pb-2">
                <dt>Status</dt>
                <dd className="font-semibold text-foreground">Active</dd>
              </div>
            </dl>
            <a href="#contact" className="mt-5 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-5 py-2.5 text-sm font-semibold text-accent transition hover:border-accent">
              Contact Case Intake
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Cyber Justice Ltd · No recovery outcome is guaranteed · Not legal or financial advice.</p>
        </div>
      </footer>
    </main>
  );
}
