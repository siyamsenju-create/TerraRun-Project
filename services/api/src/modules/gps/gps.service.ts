import { Injectable } from "@nestjs/common";

@Injectable()
export class GpsService {
  validatePlaceholder() {
    return {
      validationStatus: "pending",
      fraudScore: 0,
      reasons: [],
    };
  }
}

