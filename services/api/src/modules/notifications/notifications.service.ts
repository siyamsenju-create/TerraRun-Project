import { Injectable } from "@nestjs/common";

@Injectable()
export class NotificationsService {
  getStatus() {
    return { pushConfigured: false, provider: "fcm" };
  }
}

