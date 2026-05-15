import { Injectable } from "@nestjs/common";

@Injectable()
export class BattlesService {
  getStatus() {
    return { enabled: false, phase: "beta" };
  }
}

