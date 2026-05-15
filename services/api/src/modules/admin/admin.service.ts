import { Injectable } from "@nestjs/common";

@Injectable()
export class AdminService {
  getModerationStatus() {
    return { fraudReviewQueueEnabled: false };
  }
}

