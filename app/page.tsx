import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Business Management",
    text: "Support leadership cadence, internal coordination, and operating follow-through."
  },
  {
    title: "Commercial Execution",
    text: "Translate strategic priorities into active pipelines, partner actions, and outcomes."
  },
  {
    title: "Growth Strategy",
    text: "Define practical expansion paths and support implementation with leadership teams."
  },
  {
    title: "Business Development & GTM",
    text: "Drive opportunity identification, messaging alignment, partner outreach, and deal progression."
  },
  {
    title: "Partner & Institutional Representation",
    text: "Represent client interests in partner and stakeholder discussions with operational realism."
  },
  {
    title: "Conference & Trade Fair Representation",
    text: "Expand market presence, develop network relationships, and support deal origination on behalf of clients."
  }
];

const processSteps = [
  {
    title: "1. Diagnosis",
    text: "Assess priorities, constraints, stakeholder dynamics, and immediate value levers."
  },
  {
    title: "2. Embedding",
    text: "Integrate into leadership and operational workflows as a direct execution partner."
  },
  {
    title: "3. Execution Sprints",
    text: "Deliver focused, time-bound commercial and management initiatives."
  },
  {
    title: "4. Governance Cadence",
    text: "Maintain decision rhythm, accountability, and cross-functional alignment."
  },
  {
    title: "5. Measurable Outcomes",
    text: "Track tangible commercial movement and operating improvements over time."
  }
];

const clients = [
  {
    name: "Grais",
    desc: "Applied AI company building communication agents for context-aware, goal-oriented support across channels.",
    scope:
      "Supported go-to-market planning, structured business development pipelines, coordinated partner conversations, represented the company at industry events, and aligned commercial priorities with operational execution.",
    href: "https://grais.ai",
    cta: "Visit grais.ai"
  },
  {
    name: "Daftcode",
    desc: "EU venture builder creating and scaling technology startups from concept to market launch.",
    scope:
      "Supported venture-level commercial strategy, developed partnership opportunities, represented selected initiatives in ecosystem discussions and events, and improved execution between business and operations.",
    href: "https://daftcode.com",
    cta: "Visit daftcode.com"
  },
  {
    name: "Kryptonim",
    desc: "EU-focused crypto on-ramp platform enabling simpler digital asset purchases for individuals and businesses.",
    scope:
      "Supported growth and market development initiatives, coordinated partner and stakeholder engagement, represented commercial interests in external meetings and conferences, and aligned growth plans with operational realities.",
    href: "https://kryptonim.com",
    cta: "Visit kryptonim.com"
  }
];

const whyRimasanfer = [
  {
    label: "Embedded execution",
    text: "Integrated directly into leadership and operations."
  },
  {
    label: "Senior judgment",
    text: "Practical management experience across commercial and operational domains."
  },
  {
    label: "Speed with rigor",
    text: "Faster decisions and tighter follow-through."
  },
  {
    label: "Accountability",
    text: "Clear ownership, clear cadence, clear outcomes."
  },
  {
    label: "Selective capacity",
    text: "Limited active mandates to preserve quality and focus."
  }
];

export default function HomePage() {
  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <Link className="logo" href="#top">
            <Image
              className="logo-img"
              src="/logo-rmsf-transparent.png"
              alt="Rimasanfer"
              width={252}
              height={60}
              priority
            />
            <span className="logo-text-fallback">RIMASANFER LTD</span>
          </Link>
          <nav className="top-nav" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#clients">Clients</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero section fade-up">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">Embedded Leadership Support</p>
              <h1>Execution for companies that need senior operators, not advisory decks.</h1>
              <p className="lead">
                Rimasanfer is a boutique business management and business development consulting
                firm delivering customized, hands-on support to a small number of clients.
              </p>
              <div className="cta-row">
                <a className="btn btn-primary" href="#contact">
                  Book a Strategy Call
                </a>
                <a className="btn btn-secondary" href="#contact">
                  Discuss Your Growth Priorities
                </a>
              </div>
            </div>
            <aside className="hero-card" aria-label="Core value proposition">
              <h2>End-to-end support</h2>
              <ul>
                <li>Business management and operational coordination</li>
                <li>Commercial execution and partner engagement</li>
                <li>Growth strategy and go-to-market implementation</li>
              </ul>
            </aside>
          </div>
        </section>

        <section id="about" className="section fade-up">
          <div className="container two-col">
            <div>
              <p className="eyebrow">About Rimasanfer</p>
              <h2>Boutique by design, selective by mandate.</h2>
            </div>
            <div>
              <p>
                We work embedded with client teams, often on-site in their city and offices, to
                operate as an extension of management and operations. Our model is intentionally
                selective, enabling senior-level attention, continuity, and execution discipline.
              </p>
              <p>
                We provide end-to-end support across business management, commercial execution, and
                growth strategy. We bridge strategic intent and operating reality by applying
                practical management experience to improve coordination, decision-making, and
                execution speed.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="section section-alt fade-up">
          <div className="container">
            <p className="eyebrow">Services</p>
            <h2>Commercial and operational execution across the full growth cycle.</h2>
            <div className="cards">
              {services.map((service) => (
                <article className="card" key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section fade-up">
          <div className="container">
            <p className="eyebrow">How We Work</p>
            <h2>Structured engagement with measurable execution progress.</h2>
            <div className="timeline">
              {processSteps.map((step) => (
                <article key={step.title}>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="clients" className="section section-alt fade-up">
          <div className="container">
            <p className="eyebrow">Client Work</p>
            <h2>Selected client support across AI, venture building, and digital assets.</h2>
            <div className="clients-grid">
              {clients.map((client) => (
                <article className="client-card" key={client.name}>
                  <h3>{client.name}</h3>
                  <p className="muted">{client.desc}</p>
                  <h4>Rimasanfer Scope</h4>
                  <p>{client.scope}</p>
                  <a href={client.href} target="_blank" rel="noopener noreferrer">
                    {client.cta}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section fade-up">
          <div className="container two-col">
            <div>
              <p className="eyebrow">Why Rimasanfer</p>
              <h2>Senior execution capacity with selective client load.</h2>
            </div>
            <div className="benefits">
              {whyRimasanfer.map((item) => (
                <p key={item.label}>
                  <strong>{item.label}:</strong> {item.text}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact fade-up">
          <div className="container contact-grid">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Discuss your growth priorities.</h2>
              <p>
                Engagements are selective and frequently initiated by referral. Share your context
                and priority objectives.
              </p>
              <p>
                <a href="mailto:manuel@rimasanfer.com">manuel@rimasanfer.com</a>
              </p>
            </div>

            <form className="contact-form" action="mailto:manuel@rimasanfer.com" method="post" encType="text/plain">
              <label htmlFor="name">Name</label>
              <input id="name" name="Name" type="text" required />

              <label htmlFor="company">Company</label>
              <input id="company" name="Company" type="text" required />

              <label htmlFor="email">Work Email</label>
              <input id="email" name="Email" type="email" required />

              <label htmlFor="message">Current Priority</label>
              <textarea id="message" name="Message" rows={4} required />

              <button className="btn btn-primary" type="submit">
                Send Inquiry
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <div className="footer-brand">
            <Image
              className="footer-logo"
              src="/logo-rmsf-transparent.png"
              alt="Rimasanfer"
              width={190}
              height={45}
            />
            <p className="footer-brand-name">Rimasanfer Ltd</p>
            <p className="muted">Business Management &amp; Business Development Consulting</p>
          </div>
          <div className="footer-links">
            <a href="#top">Home</a>
            <a href="#contact">Contact</a>
            <Link href="/privacy">Privacy</Link>
            <Link href="/legal">Legal</Link>
            <a href="https://www.linkedin.com/in/manuel-santos/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
