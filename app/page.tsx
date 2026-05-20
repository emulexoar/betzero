const sportsbookLogos = [
  "DraftHub",
  "PinnacleX",
  "OddsFlow",
  "ParlayPro",
  "SharpEdge",
  "MatchPoint",
];

const metricCards = [
  {
    value: "14.2%",
    label: "average lift in profitable picks after syncing account history",
  },
  {
    value: "22",
    label: "supported sportsbooks tracked in a single dashboard",
  },
  {
    value: "4.8/5",
    label: "community rating from bettors using daily edge reports",
  },
];

const featureCards = [
  {
    title: "Track every slip",
    copy:
      "Auto-import bets, classify by market, and see where your edge actually comes from.",
  },
  {
    title: "Spot sharp movement",
    copy:
      "Flag steam, stale numbers, and market drift before you lock the wrong side.",
  },
  {
    title: "Build smarter habits",
    copy:
      "Review bankroll swings, confidence mismatches, and closing line value in one place.",
  },
  {
    title: "Share verified wins",
    copy:
      "Turn performance into a public profile with transparent receipts and audience-ready stats.",
  },
];

const insights = [
  "Line movement alerts tied to books you actually use",
  "Weekly performance recaps with bankroll and ROI snapshots",
  "Player cards for top markets, trends, and correlated plays",
];

const testimonials = [
  {
    quote:
      "The biggest shift was clarity. I stopped guessing which leagues I was good at and started betting with data.",
    name: "Marcus T.",
    role: "NBA and props bettor",
  },
  {
    quote:
      "BetZero gives me the same kind of structure I used in spreadsheets, but actually fast enough to use live.",
    name: "Ava R.",
    role: "Live betting specialist",
  },
  {
    quote:
      "The daily board and CLV tracking made my process tighter in less than two weeks.",
    name: "Jordan C.",
    role: "Soccer and totals bettor",
  },
];

const faqs = [
  {
    question: "What is BetZero?",
    answer:
      "BetZero is a betting performance platform that helps you track wagers, compare odds movement, and review where your strategy is actually working.",
  },
  {
    question: "Can I use it with multiple sportsbooks?",
    answer:
      "Yes. The page is designed around a multi-book workflow, so bettors can sync and compare activity across several books from one dashboard.",
  },
  {
    question: "Is this page ready for Vercel deployment?",
    answer:
      "Yes. The page is built as a static-friendly Next.js landing page, which makes it straightforward to deploy on Vercel.",
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero section">
        <header className="topbar">
          <a className="brand" href="#hero">
            <span className="brand-mark">B</span>
            <span>BetZero</span>
          </a>
          <nav className="nav">
            <a href="#features">Features</a>
            <a href="#insights">Insights</a>
            <a href="#reviews">Reviews</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a className="ghost-button" href="#cta">
            Join waitlist
          </a>
        </header>

        <div className="hero-grid" id="hero">
          <div className="hero-copy">
            <p className="eyebrow">Sports betting intelligence platform</p>
            <h1>Track your bets like a portfolio, not a guessing game.</h1>
            <p className="lede">
              BetZero gives modern bettors a sharper command center for bankroll,
              movement, and verified results. One long-form dashboard. Zero noise.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#cta">
                Start free preview
              </a>
              <a className="secondary-link" href="#features">
                Explore features
              </a>
            </div>
            <div className="hero-note">
              <span className="hero-badge">Live</span>
              Trusted by bettors tracking over $2.3M in annual wager volume.
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-card hero-card-main">
              <span className="card-label">Today&apos;s board</span>
              <strong>+7 qualified edges</strong>
              <p>
                Best value spotted in NBA spreads, MLB strikeout props, and late EPL totals.
              </p>
              <div className="mini-chart" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className="hero-card hero-card-side">
              <span className="card-label">Bankroll pulse</span>
              <strong>12-day positive run</strong>
              <p>Closing line value up 8.4% with flat stake sizing.</p>
            </div>
            <div className="hero-orb" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="partners section">
        <p className="section-kicker">Compatible with the books bettors already use</p>
        <div className="logo-row">
          {sportsbookLogos.map((logo) => (
            <span key={logo}>{logo}</span>
          ))}
        </div>
      </section>

      <section className="metrics section">
        <div className="section-heading">
          <p className="eyebrow">Sharper decisions</p>
          <h2>One page for performance, line shopping, and real accountability.</h2>
        </div>
        <div className="metric-grid">
          {metricCards.map((card) => (
            <article key={card.label} className="metric-card">
              <h3>{card.value}</h3>
              <p>{card.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="story section" id="features">
        <div className="story-panel story-copy">
          <p className="eyebrow">Built for disciplined bettors</p>
          <h2>See the difference between action and edge.</h2>
          <p>
            BetZero brings bankroll context, line movement, and repeatable insights
            into one calm interface so you can spend less time sorting data and
            more time making sharper plays.
          </p>
          <ul className="insight-list">
            {insights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="story-panel story-visual" aria-hidden="true">
          <div className="visual-card visual-card-top">
            <span>Win rate</span>
            <strong>61.3%</strong>
          </div>
          <div className="visual-card visual-card-bottom">
            <span>Best market</span>
            <strong>Player props</strong>
          </div>
          <div className="visual-glow" />
        </div>
      </section>

      <section className="feature-grid section" id="insights">
        {featureCards.map((feature) => (
          <article key={feature.title} className="feature-card">
            <span className="feature-index">0{featureCards.indexOf(feature) + 1}</span>
            <h3>{feature.title}</h3>
            <p>{feature.copy}</p>
          </article>
        ))}
      </section>

      <section className="reviews section" id="reviews">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">User feedback</p>
            <h2>Designed to feel premium, fast, and credible on first read.</h2>
          </div>
          <p>
            Bettors need immediate trust signals, so the review section stays simple,
            readable, and visually consistent with the rest of the page.
          </p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article key={item.name} className="testimonial-card">
              <p>&ldquo;{item.quote}&rdquo;</p>
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="faq section" id="faq">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2>Everything a new visitor needs to decide fast.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.question} className="faq-item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="cta section" id="cta">
        <div>
          <p className="eyebrow">Ready to launch</p>
          <h2>Launch a cleaner betting brand with one polished page that explains the value fast.</h2>
        </div>
        <a className="primary-button inverted" href="mailto:hello@betzero.app">
          Contact BetZero
        </a>
      </section>

      <footer className="footer">
        <div>
          <a className="brand footer-brand" href="#hero">
            <span className="brand-mark">B</span>
            <span>BetZero</span>
          </a>
          <p>Betting intelligence for people who want fewer hunches and better decisions.</p>
        </div>
        <div className="footer-links">
          <a href="#features">Features</a>
          <a href="#reviews">Reviews</a>
          <a href="#faq">FAQ</a>
        </div>
      </footer>
    </main>
  );
}