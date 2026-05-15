import { RunsService } from "../src/modules/runs/runs.service";
import { TerritoriesService } from "../src/modules/territories/territories.service";

describe("MVP placeholder services", () => {
  it("creates the run start payload shape", () => {
    const service = new RunsService();

    expect(
      service.startRun(
        {
          id: "user-id",
          clerkUserId: "clerk-id",
          email: "runner@terrarun.local",
          role: "user",
        },
        { startedAt: "2026-05-15T06:00:00.000Z" },
      ),
    ).toMatchObject({
      status: "active",
      runId: expect.any(String),
    });
  });

  it("returns territory map cells", () => {
    const service = new TerritoriesService();

    expect(service.getMap({ zoom: "14" }).cells).toHaveLength(1);
  });
});
