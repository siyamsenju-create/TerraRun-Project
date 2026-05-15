import Link from "next/link";

const productStats = [
  { label: "Grid territory", value: "100m cells" },
  { label: "MVP target", value: "<10K users" },
  { label: "Game loops", value: "Claim, defend, battle" },
];

export default function LandingPage() {
  return (
    <main className="site-shell">
      <nav className="top-nav">
        <span className="brand">TerraRun</span>
        <div className="nav-actions">
          <Link href="/leaderboard">Leaderboard</Link>
          <Link href="/dashboard" className="button button-primary">
            Open Dashboard
          </Link>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Fitness tracking meets territory strategy</p>
          <h1>Claim your city one run at a time.</h1>
          <p className="hero-text">
            TerraRun converts verified outdoor runs into owned map territory, turning weekly
            workouts into a competitive real-world game.
          </p>
          <div className="hero-actions">
            <Link href="/dashboard" className="button button-primary">
              Start MVP Demo
            </Link>
            <Link href="/map" className="button button-secondary">
              View Territory Map
            </Link>
          </div>
        </div>
        <div className="map-preview" aria-label="Territory map preview">
          <div className="route-line" />
          {Array.from({ length: 24 }).map((_, index) => (
            <span key={index} className={index % 3 === 0 ? "cell owned" : "cell"} />
          ))}
        </div>
      </section>

      <section className="stats-grid">
        {productStats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
          </div>
        ))}
      </section>
    </main>
  );
}

