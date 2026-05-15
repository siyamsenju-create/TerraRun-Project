import { Injectable } from "@nestjs/common";
import type { LeaderboardResponse } from "@terrarun/shared-types";

@Injectable()
export class LeaderboardsService {
  getLeaderboard({
    scope = "global",
    period = "weekly",
    metric = "territory_count",
  }: {
    scope?: string;
    period?: string;
    metric?: string;
  }): LeaderboardResponse {
    return {
      scope: scope as LeaderboardResponse["scope"],
      period: period as LeaderboardResponse["period"],
      metric: metric as LeaderboardResponse["metric"],
      entries: [
        {
          rank: 1,
          userId: "00000000-0000-4000-8000-000000000001",
          displayName: "Dev Runner",
          score: 12,
        },
      ],
    };
  }
}

