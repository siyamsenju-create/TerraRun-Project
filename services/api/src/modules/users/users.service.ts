import { Injectable } from "@nestjs/common";
import type { UserSummary } from "@terrarun/shared-types";
import type { AuthenticatedUser } from "../auth/current-user.decorator";

@Injectable()
export class UsersService {
  getMe(user: AuthenticatedUser): { user: UserSummary } {
    return {
      user: {
        id: user.id,
        email: user.email,
        displayName: "Dev Runner",
        role: user.role,
        subscriptionStatus: "free",
      },
    };
  }
}

