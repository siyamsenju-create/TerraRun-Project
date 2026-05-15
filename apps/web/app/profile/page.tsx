export default function ProfilePage() {
  return (
    <main className="page-wrap">
      <header className="content-header">
        <div>
          <p className="eyebrow">Runner identity</p>
          <h1>Dev Runner</h1>
        </div>
      </header>
      <section className="dashboard-grid">
        <article className="panel">
          <span>Home city</span>
          <strong>Bengaluru</strong>
        </article>
        <article className="panel">
          <span>Subscription</span>
          <strong>Free</strong>
        </article>
        <article className="panel">
          <span>Privacy</span>
          <strong>Public profile</strong>
        </article>
      </section>
    </main>
  );
}

