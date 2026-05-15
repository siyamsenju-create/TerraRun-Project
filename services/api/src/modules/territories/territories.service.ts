import { Injectable } from "@nestjs/common";
import type { TerritoryMapResponse } from "@terrarun/shared-types";

export interface MapQuery {
  minLng?: string;
  minLat?: string;
  maxLng?: string;
  maxLat?: string;
  zoom?: string;
}

@Injectable()
export class TerritoriesService {
  getMap(query: MapQuery): TerritoryMapResponse & { viewport: MapQuery } {
    return {
      gridVersion: "v1",
      viewport: query,
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
  }

  getTerritory(cellId: string) {
    return {
      cellId,
      status: "owned",
      strengthScore: 50,
      owner: {
        displayName: "Dev Runner",
      },
      lastClaimedAt: new Date().toISOString(),
      battleEligible: true,
    };
  }
}
