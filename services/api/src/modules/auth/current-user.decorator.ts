import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import type { Request } from "express";

export interface AuthenticatedUser {
  id: string;
  clerkUserId: string;
  email: string;
  role: "user" | "team_admin" | "moderator" | "admin";
}

export interface AuthenticatedRequest extends Request {
  user: AuthenticatedUser;
}

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext): AuthenticatedUser => {
    const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
    return request.user;
  },
);

