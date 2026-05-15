const reviewItems = [
  { label: "Suspicious runs", value: "0" },
  { label: "Open territory disputes", value: "0" },
  { label: "Pending reports", value: "0" },
];

export default function AdminPage() {
  return (
    <main>
      <header>
        <p>TerraRun Admin</p>
        <h1>Operations console</h1>
      </header>
      <section className="grid">
        {reviewItems.map((item) => (
          <article key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </article>
        ))}
      </section>
    </main>
  );
}

