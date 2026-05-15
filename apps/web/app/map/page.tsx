import type { TerritoryMapResponse } from "@terrarun/shared-types";

const mockMap: TerritoryMapResponse = {
  gridVersion: "v1",
  cells: [
    {
      cellId: "v1:78542:49201",
      status: "owned",
      ownerUserId: "00000000-0000-4000-8000-000000000001",
      ownerTeamId: null,
      strengthScore: 50,
    },
  ],
};

export default function MapPage() {
  return (
    <main className="page-wrap">
      <header className="content-header">
        <div>
          <p className="eyebrow">Territory grid</p>
          <h1>Live territory map</h1>
        </div>
      </header>
      <section className="territory-stage">
        <div className="grid-map">
          {Array.from({ length: 80 }).map((_, index) => (
            <span key={index} className={index % 5 === 0 ? "cell owned" : "cell"} />
          ))}
        </div>
        <aside className="panel">
          <span>Selected cell</span>
          <strong>{mockMap.cells[0]?.cellId}</strong>
          <p>Status: owned</p>
          <p>Strength: {mockMap.cells[0]?.strengthScore}</p>
        </aside>
      </section>
    </main>
  );
}

