import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import type { Request } from "express";
import type { AuthenticatedUser } from "./current-user.decorator";

interface RequestWithUser extends Request {
  user?: AuthenticatedUser;
}

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly config: ConfigService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<RequestWithUser>();
    const authMode = this.config.get<string>("AUTH_MODE") ?? "dev";

    if (authMode === "dev") {
      request.user = {
        id: request.header("x-dev-user-id") ?? "00000000-0000-4000-8000-000000000001",
        clerkUserId: request.header("x-dev-clerk-user-id") ?? "dev_user_terrarun",
        email: request.header("x-dev-email") ?? "dev@terrarun.local",
        role: "user",
      };
      return true;
    }

    const authorization = request.header("authorization");
    if (!authorization?.startsWith("Bearer ")) {
      throw new UnauthorizedException("Missing Clerk bearer token");
    }

    // Real Clerk JWT verification belongs here once project keys are available.
    throw new UnauthorizedException("Clerk verification is not configured");
  }
}

