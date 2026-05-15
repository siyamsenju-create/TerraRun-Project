import { Injectable } from "@nestjs/common";
import type { RunResponse } from "@terrarun/shared-types";
import type { AuthenticatedUser } from "../auth/current-user.decorator";
import type { EndRunDto, StartRunDto, UploadRunPointsDto } from "./dto/run.dto";

@Injectable()
export class RunsService {
  startRun(_user: AuthenticatedUser, body: StartRunDto) {
    return {
      runId: "11111111-1111-4111-8111-111111111111",
      status: "active",
      startedAt: body.startedAt,
    };
  }

  uploadPoints(_user: AuthenticatedUser, runId: string, body: UploadRunPointsDto) {
    return {
      runId,
      accepted: body.points.length,
      rejected: 0,
    };
  }

  endRun(_user: AuthenticatedUser, body: EndRunDto) {
    return {
      runId: body.runId,
      status: "processing",
      estimatedProcessingSeconds: 10,
      endedAt: body.endedAt,
    };
  }

  getRun(_user: AuthenticatedUser, runId: string): RunResponse {
    return {
      id: runId,
      status: "completed",
      distanceM: 0,
      durationS: 0,
      validationStatus: "pending",
      claimedCells: 0,
      reinforcedCells: 0,
    };
  }
}

