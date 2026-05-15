export type ApiErrorCode =
  | "AUTH_REQUIRED"
  | "VALIDATION_ERROR"
  | "NOT_FOUND"
  | "CONFLICT"
  | "RATE_LIMITED"
  | "INTERNAL_ERROR";

export interface ApiErrorResponse {
  error: {
    code: ApiErrorCode;
    message: string;
    details?: Record<string, unknown>;
  };
}

export interface UserSummary {
  id: string;
  email: string;
  displayName: string;
  role: "user" | "team_admin" | "moderator" | "admin";
  subscriptionStatus: "free" | "premium" | "expired";
}

export interface SignupRequest {
  displayName: string;
  homeCity?: string;
}

export interface SignupResponse {
  user: UserSummary;
}

export interface StartRunRequest {
  startedAt: string;
  device?: {
    platform: "ios" | "android" | "web" | "unknown";
    appVersion?: string;
  };
}

export interface RunPoint {
  recordedAt: string;
  latitude: number;
  longitude: number;
  altitudeM?: number;
  speedMps?: number;
  heading?: number;
  horizontalAccuracyM?: number;
}

export interface UploadRunPointsRequest {
  points: RunPoint[];
}

export interface EndRunRequest {
  runId: string;
  endedAt: string;
}

export interface RunResponse {
  id: string;
  status: "active" | "processing" | "completed" | "cancelled";
  distanceM: number;
  durationS: number;
  validationStatus: "pending" | "valid" | "invalid" | "flagged";
  claimedCells: number;
  reinforcedCells: number;
}

export interface PolygonGeometry {
  type: "Polygon";
  coordinates: number[][][];
}

export interface TerritoryCell {
  cellId: string;
  status: "unowned" | "owned" | "contested" | "cooldown" | "protected";
  ownerUserId: string | null;
  ownerTeamId: string | null;
  strengthScore: number;
  geometry?: PolygonGeometry;
}

export interface TerritoryMapResponse {
  gridVersion: "v1";
  cells: TerritoryCell[];
}

export interface LeaderboardEntry {
  rank: number;
  userId: string;
  displayName: string;
  score: number;
}

export interface LeaderboardResponse {
  scope: "global" | "city" | "friends" | "team";
  period: "daily" | "weekly" | "monthly" | "all_time";
  metric: "territory_count" | "distance" | "battles_won" | "streak";
  entries: LeaderboardEntry[];
}
