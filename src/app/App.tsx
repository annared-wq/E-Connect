import { useState, useEffect } from "react";

function useFavicon() {
  useEffect(() => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#2A3545"/><text x="16" y="22" font-family="Georgia,serif" font-size="20" font-weight="700" fill="#ffffff" text-anchor="middle">E</text></svg>`;
    const url = `data:image/svg+xml,${encodeURIComponent(svg)}`;
    let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = url;
  }, []);
}
import {
  Globe,
  Mail,
  MapPin,
  FileText,
  ExternalLink,
  Shield,
  Building2,
  ShoppingCart,
  BarChart2,
  Wifi,
  Smartphone,
  Menu,
  X,
  Download,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Documents", href: "#documents" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    desc: "End-to-end online store setup, marketplace integration (Amazon, Noon, Shopify), product listings, fulfilment coordination, and operational support for brands entering the GCC market.",
  },
  {
    icon: BarChart2,
    title: "Digital Marketing",
    desc: "Performance-driven campaigns across Google, Meta, TikTok, and regional platforms. SEO, content strategy, influencer partnerships, and analytics tailored to the MENA consumer.",
  },
  {
    icon: Globe,
    title: "Market Entry Advisory",
    desc: "Consulting for international brands entering the UAE and broader GCC market — regulatory navigation, localisation, partner sourcing, and go-to-market strategy.",
  },
];

const COMPLIANCE_ITEMS = [
  {
    label: "Legal Entity",
    value: "Free Zone Company (FZCO)",
    note: "Registered under UAE Free Zone authority",
  },
  {
    label: "Trade License No.",
    value: "FZCO-XXXXXX",
    placeholder: true,
    note: "Replace with your actual license number",
  },
  {
    label: "Jurisdiction",
    value: "Dubai, United Arab Emirates",
    note: "Free Zone, UAE",
  },
  {
    label: "Year Established",
    value: "2024",
    note: "Active and in good standing",
  },
  {
    label: "Business Activity",
    value: "E-Commerce Services & Digital Marketing",
    note: "As stated in trade license",
  },
  {
    label: "Registered Address",
    value: "IFZA Business Park, DDP, PO Box 342001, Dubai, UAE",
    placeholder: false,
  },
];

export default function App() {
  useFavicon();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ── NAV ─────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Wordmark */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="leading-none">
              <span
                className="text-primary font-bold text-sm tracking-wide block"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                E-CONNECT
              </span>
              <span className="text-muted-foreground text-[10px] tracking-widest uppercase">
                FZCO · Dubai, UAE
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => scrollTo(e, l.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            onClick={(e) => scrollTo(e, "#contact")}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </a>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-card border-t border-border px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => scrollTo(e, l.href)}
                className="text-sm text-foreground py-1"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ── HERO ────────────────────────────────────── */}
      <section className="pt-16 min-h-screen flex items-center relative overflow-hidden bg-background">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute rounded-full"
            style={{
              width: "55vw",
              height: "55vw",
              top: "-15%",
              right: "-10%",
              background: "radial-gradient(circle, rgba(107,143,122,0.13) 0%, transparent 70%)",
              animation: "floatA 14s ease-in-out infinite",
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: "40vw",
              height: "40vw",
              bottom: "-5%",
              left: "-8%",
              background: "radial-gradient(circle, rgba(42,53,69,0.08) 0%, transparent 70%)",
              animation: "floatB 18s ease-in-out infinite",
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: "28vw",
              height: "28vw",
              top: "40%",
              left: "30%",
              background: "radial-gradient(circle, rgba(107,143,122,0.07) 0%, transparent 70%)",
              animation: "floatC 22s ease-in-out infinite",
            }}
          />
        </div>

        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(circle, #2A3545 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <style>{`
          @keyframes floatA {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33%       { transform: translate(-3%, 4%) scale(1.05); }
            66%       { transform: translate(4%, -3%) scale(0.97); }
          }
          @keyframes floatB {
            0%, 100% { transform: translate(0, 0) scale(1); }
            40%       { transform: translate(5%, -5%) scale(1.08); }
            75%       { transform: translate(-3%, 3%) scale(0.95); }
          }
          @keyframes floatC {
            0%, 100% { transform: translate(0, 0); }
            50%       { transform: translate(-4%, 6%); }
          }
        `}</style>

        <div className="max-w-6xl mx-auto px-6 py-28 relative z-10 w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-medium tracking-widest uppercase mb-8">
                <MapPin size={11} />
                Dubai Free Zone · UAE
              </div>

              <h1
                className="text-foreground font-extrabold leading-none mb-6"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "clamp(2.6rem, 6vw, 4.8rem)",
                  letterSpacing: "-0.025em",
                }}
              >
                E-Connect
                <span className="block text-accent">FZCO</span>
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-md">
                A Dubai-registered Free Zone company delivering end-to-end
                e-commerce operations and performance marketing for brands
                growing in the MENA region.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#services"
                  onClick={(e) => scrollTo(e, "#services")}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold text-sm rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Our Services
                </a>
                <a
                  href="#documents"
                  onClick={(e) => scrollTo(e, "#documents")}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground font-semibold text-sm rounded-lg hover:bg-secondary transition-colors"
                >
                  <FileText size={16} />
                  Legal Documents
                </a>
              </div>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: "190+", label: "Countries via EvoSim" },
                { n: "2024", label: "Year Established" },
                { n: "FZCO", label: "Entity Type" },
                { n: "UAE", label: "Jurisdiction" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-card/80 backdrop-blur border border-border rounded-xl p-6 hover:border-accent/30 transition-colors"
                >
                  <div
                    className="text-accent font-extrabold mb-1"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "2rem",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {s.n}
                  </div>
                  <div className="text-muted-foreground text-xs uppercase tracking-wider">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ───────────────────────────────────── */}
      <section id="about" className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-1">
              <span className="text-accent text-xs font-semibold tracking-widest uppercase block mb-3">
                About
              </span>
              <h2
                className="text-foreground font-extrabold text-3xl leading-tight"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Who We Are
              </h2>
            </div>

            <div className="md:col-span-2 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">E-Connect FZCO</strong> is a
                Free Zone company incorporated in Dubai, United Arab Emirates.
                We operate at the intersection of technology, e-commerce, and
                digital marketing — helping businesses establish and scale their
                online presence in the GCC and global markets.
              </p>
              <p>
                Our team combines expertise in marketplace operations, growth
                marketing, and technology products. We develop proprietary
                software solutions alongside our consulting and execution
                services, most notably <strong className="text-foreground">EvoSim</strong> — an
                eSIM connectivity platform for international travellers.
              </p>
              <p>
                Registered and fully compliant under UAE Free Zone regulations,
                E-Connect FZCO holds an active trade license authorising its
                e-commerce and marketing business activities.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                {[
                  { icon: Building2, text: "UAE Free Zone" },
                  { icon: Shield, text: "Fully Licensed" },
                  { icon: Globe, text: "Global Reach" },
                ].map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-2 text-sm text-foreground font-medium"
                  >
                    <Icon size={16} className="text-accent shrink-0" />
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────── */}
      <section id="services" className="py-24 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <span className="text-accent text-xs font-semibold tracking-widest uppercase block mb-3">
              Services
            </span>
            <h2
              className="text-foreground font-extrabold text-3xl"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              What We Do
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group bg-background border border-border rounded-xl p-8 hover:border-accent/40 hover:shadow-lg transition-all duration-200"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                  <Icon size={20} className="text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3
                  className="text-foreground font-bold text-lg mb-3"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS — EVOSIM ───────────────────────── */}
      <section id="products" className="py-24 bg-background border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <span className="text-accent text-xs font-semibold tracking-widest uppercase block mb-3">
              Products
            </span>
            <h2
              className="text-foreground font-extrabold text-3xl"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Our Technology
            </h2>
          </div>

          {/* EvoSim card */}
          <div className="relative bg-primary rounded-2xl overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 70% 50%, white 0%, transparent 60%)",
              }}
            />
            <div className="absolute right-0 top-0 w-1/3 h-full bg-accent/10 blur-3xl" />

            <div className="relative z-10 grid md:grid-cols-2 gap-0">
              {/* Info */}
              <div className="p-10 md:p-14">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                    <Wifi size={22} className="text-white" />
                  </div>
                  <div>
                    <div
                      className="text-white font-extrabold text-xl"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      EvoSim
                    </div>
                    <div className="text-white/50 text-xs">evosim.com</div>
                  </div>
                </div>

                <p
                  className="text-accent font-semibold text-sm tracking-wide uppercase mb-3"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  "Your connection is your freedom"
                </p>

                <h3
                  className="text-white font-extrabold text-2xl leading-snug mb-5"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Global eSIM for International Travellers
                </h3>

                <p className="text-white/70 text-sm leading-relaxed mb-8">
                  EvoSim is a mobile application that connects travellers to
                  high-speed internet in 190+ countries via virtual SIM (eSIM)
                  technology — eliminating expensive roaming charges with savings
                  of up to 90% vs. traditional carrier roaming. No physical SIM
                  required. Instant activation.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    "Coverage in 190+ countries",
                    "Up to 90% savings vs. roaming",
                    "More secure than public Wi-Fi",
                    "Flexible, commission-free plans",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-white/80 text-sm">
                      <CheckCircle size={14} className="text-accent shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://evosim.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent/90 transition-colors"
                  >
                    <Globe size={15} />
                    Visit Website
                    <ExternalLink size={13} />
                  </a>
                  <a
                    href="https://apps.apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/15 border border-white/20 text-white text-sm font-medium rounded-lg hover:bg-white/25 transition-colors"
                  >
                    <Smartphone size={15} />
                    App Store
                  </a>
                  <a
                    href="https://play.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/15 border border-white/20 text-white text-sm font-medium rounded-lg hover:bg-white/25 transition-colors"
                  >
                    <Download size={15} />
                    Google Play
                  </a>
                </div>
              </div>

              {/* How it works */}
              <div className="border-l border-white/10 p-10 md:p-14 flex flex-col justify-center">
                <div className="text-white/50 text-xs uppercase tracking-widest mb-6">
                  How It Works
                </div>
                {[
                  {
                    n: "01",
                    title: "Check eSIM Support",
                    desc: "Verify your device is eSIM-compatible (most modern smartphones).",
                  },
                  {
                    n: "02",
                    title: "Download & Register",
                    desc: "Install the EvoSim app on iOS or Android and create your account.",
                  },
                  {
                    n: "03",
                    title: "Select a Plan & Go",
                    desc: "Choose a destination plan, activate instantly, and stay connected.",
                  },
                ].map((step) => (
                  <div key={step.n} className="flex gap-5 mb-8 last:mb-0">
                    <div
                      className="text-accent font-extrabold text-2xl leading-none shrink-0 w-8"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {step.n}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm mb-1">
                        {step.title}
                      </div>
                      <div className="text-white/55 text-sm leading-relaxed">
                        {step.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LEGAL / COMPLIANCE ──────────────────────── */}
      <section id="documents" className="py-24 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <span className="text-accent text-xs font-semibold tracking-widest uppercase block mb-3">
              Legal & Compliance
            </span>
            <h2
              className="text-foreground font-extrabold text-3xl"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Company Information
            </h2>
            <p className="text-muted-foreground text-sm mt-3 max-w-xl">
              E-Connect FZCO is a legally registered company operating under UAE
              Free Zone regulations with full licensing and documentation
              available for compliance verification.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Registration info table */}
            <div className="bg-background rounded-xl border border-border overflow-hidden">
              <div className="px-6 py-4 border-b border-border bg-muted/40">
                <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                  <Building2 size={15} className="text-primary" />
                  Registration Details
                </div>
              </div>
              <div className="divide-y divide-border">
                {COMPLIANCE_ITEMS.map((item) => (
                  <div key={item.label} className="px-6 py-4 flex items-start justify-between gap-4">
                    <div className="text-muted-foreground text-xs font-medium uppercase tracking-wide shrink-0 pt-0.5">
                      {item.label}
                    </div>
                    <div className="text-right">
                      <div
                        className={`text-sm font-semibold ${
                          item.placeholder ? "text-accent/70 italic" : "text-foreground"
                        }`}
                        style={{
                          fontFamily: item.placeholder ? "'DM Mono', monospace" : undefined,
                        }}
                      >
                        {item.value}
                      </div>
                      {item.placeholder && (
                        <div className="text-[10px] text-accent mt-0.5 flex items-center gap-1 justify-end">
                          <AlertCircle size={10} />
                          {item.note}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents */}
            <div className="space-y-4">
              <div className="bg-background rounded-xl border border-border overflow-hidden">
                <div className="px-6 py-4 border-b border-border bg-muted/40">
                  <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                    <FileText size={15} className="text-primary" />
                    Official Documents
                  </div>
                </div>
                <div className="divide-y divide-border">
                  {[
                    {
                      name: "Trade License",
                      desc: "Issued by UAE Free Zone authority — IFZA",
                      href: "#",
                      placeholder: true,
                    },
                  ].map((doc) => (
                    <div
                      key={doc.name}
                      className="px-6 py-4 flex items-center justify-between gap-4"
                    >
                      <div>
                        <div className="text-foreground text-sm font-medium">
                          {doc.name}
                        </div>
                        <div className="text-muted-foreground text-xs mt-0.5">
                          {doc.desc}
                        </div>
                      </div>
                      {doc.placeholder ? (
                        <span className="text-[10px] text-accent border border-accent/30 bg-accent/10 rounded px-2 py-0.5 shrink-0">
                          Add link
                        </span>
                      ) : (
                        <a
                          href={doc.href}
                          className="inline-flex items-center gap-1.5 text-primary text-xs font-medium hover:text-accent transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Download size={12} />
                          Download
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Compliance note */}
              <div className="bg-primary/5 border border-primary/15 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <Shield size={18} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="text-foreground font-semibold text-sm mb-1">
                      Compliance Verification
                    </div>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      For KYC, AML, or compliance due diligence requests, please
                      contact us directly. We can provide certified copies of all
                      corporate documents, beneficial ownership information, and
                      bank reference letters upon request.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────── */}
      <section id="contact" className="py-24 bg-background border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <span className="text-accent text-xs font-semibold tracking-widest uppercase block mb-3">
              Contact
            </span>
            <h2
              className="text-foreground font-extrabold text-3xl"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Get in Touch
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: MapPin,
                title: "Registered Address",
                lines: ["IFZA Business Park, DDP,", "PO Box 342001,", "Dubai, United Arab Emirates"],
                placeholder: false,
              },
              {
                icon: Mail,
                title: "Email",
                lines: ["management@econnect.io"],
                placeholder: false,
              },
            ].map(({ icon: Icon, title, lines, note, placeholder }) => (
              <div
                key={title}
                className="bg-card border border-border rounded-xl p-7"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
                  <Icon size={18} className="text-primary" />
                </div>
                <div className="text-muted-foreground text-xs uppercase tracking-wider mb-2">
                  {title}
                </div>
                {lines.map((l) => (
                  <div key={l} className="text-foreground font-semibold text-sm">
                    {l}
                  </div>
                ))}
                {placeholder && (
                  <div className="text-[10px] text-accent mt-2 flex items-center gap-1">
                    <AlertCircle size={10} />
                    {note}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Web presence */}
          <div className="mt-8 bg-card border border-border rounded-xl p-7 flex flex-wrap gap-6 items-center justify-between">
            <div>
              <div className="text-muted-foreground text-xs uppercase tracking-wider mb-1">
                Web Presence
              </div>
              <div className="flex flex-wrap gap-4 mt-2">
                <a
                  href="https://evosim.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary text-sm font-medium hover:text-accent transition-colors"
                >
                  <Globe size={14} />
                  evosim.com
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>
            <div className="text-muted-foreground text-xs leading-relaxed max-w-sm">
              All official communications from E-Connect FZCO are issued from
              verified company email addresses. For document requests or
              compliance queries, please reference our trade license number.
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────── */}
      <footer className="bg-primary py-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span
            className="text-white font-bold text-sm tracking-wide"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            E-Connect FZCO
          </span>
          <div className="text-white/40 text-xs text-center">
            © {new Date().getFullYear()} E-Connect FZCO. All rights reserved. · Dubai, United Arab Emirates · Free Zone Company
          </div>
          <div className="flex items-center gap-1 text-white/40 text-xs">
            <Shield size={11} />
            UAE Licensed Entity
          </div>
        </div>
      </footer>
    </div>
  );
}
