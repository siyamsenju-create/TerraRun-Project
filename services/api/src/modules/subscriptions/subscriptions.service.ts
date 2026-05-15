import { Injectable } from "@nestjs/common";

@Injectable()
export class SubscriptionsService {
  getEntitlements() {
    return {
      plan: "free",
      premium: false,
      features: ["run_tracking", "basic_territory", "basic_leaderboards"],
    };
  }
}

