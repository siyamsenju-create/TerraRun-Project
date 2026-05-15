import { Injectable } from "@nestjs/common";

@Injectable()
export class TeamsService {
  getStatus() {
    return { enabled: false, phase: "beta" };
  }
}

