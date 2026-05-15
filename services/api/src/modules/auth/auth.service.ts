import { Injectable } from "@nestjs/common";
import type { SignupResponse } from "@terrarun/shared-types";
import type { AuthenticatedUser } from "./current-user.decorator";
import type { SignupDto } from "./dto/signup.dto";

@Injectable()
export class AuthService {
  signup(user: AuthenticatedUser, body: SignupDto): SignupResponse {
    return {
      user: {
        id: user.id,
        email: user.email,
        displayName: body.displayName,
        role: user.role,
        subscriptionStatus: "free",
      },
    };
  }
}

