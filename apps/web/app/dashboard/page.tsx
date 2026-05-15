import Link from "next/link";

const stats = [
  { label: "Owned cells", value: "12" },
  { label: "Weekly distance", value: "8.4 km" },
  { label: "Current streak", value: "3 days" },
  { label: "Battle slots", value: "0 active" },
];

export default function DashboardPage() {
  return (
    <main className="app-shell">
      <aside className="sidebar">
        <Link href="/" className="brand">
          TerraRun
        </Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/map">Territory</Link>
        <Link href="/leaderboard">Leaderboard</Link>
        <Link href="/profile">Profile</Link>
      </aside>

      <section className="content">
        <header className="content-header">
          <div>
            <p className="eyebrow">MVP foundation</p>
            <h1>Runner dashboard</h1>
          </div>
          <Link href="/map" className="button button-primary">
            Open Map
          </Link>
        </header>

        <div className="dashboard-grid">
          {stats.map((stat) => (
            <article key={stat.label} className="panel">
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </article>
          ))}
        </div>

        <section className="panel wide-panel">
          <span>Recent run</span>
          <strong>Ready for first GPS implementation slice</strong>
          <p>
            The backend route contract is in place. The next slice will connect real Expo
            location capture and territory processing.
          </p>
        </section>
      </section>
    </main>
  );
}

