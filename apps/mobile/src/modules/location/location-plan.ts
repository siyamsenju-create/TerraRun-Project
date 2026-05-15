export interface FutureLocationPoint {
  recordedAt: string;
  latitude: number;
  longitude: number;
  speedMps?: number;
  horizontalAccuracyM?: number;
}

export const futureLocationIntegration = {
  library: "expo-location",
  backgroundTaskName: "terrarun-background-location",
  batchUploadIntervalSeconds: 20,
};

