import type { LeaderboardResponse } from "@terrarun/shared-types";

const leaderboard: LeaderboardResponse = {
  scope: "global",
  period: "weekly",
  metric: "territory_count",
  entries: [
    {
      rank: 1,
      userId: "00000000-0000-4000-8000-000000000001",
      displayName: "Dev Runner",
      score: 12,
    },
  ],
};

export default function LeaderboardPage() {
  return (
    <main className="page-wrap">
      <header className="content-header">
        <div>
          <p className="eyebrow">Weekly competition</p>
          <h1>Leaderboard</h1>
        </div>
      </header>
      <section className="panel">
        {leaderboard.entries.map((entry) => (
          <div key={entry.userId} className="leaderboard-row">
            <span>#{entry.rank}</span>
            <strong>{entry.displayName}</strong>
            <span>{entry.score} cells</span>
          </div>
        ))}
      </section>
    </main>
  );
}

