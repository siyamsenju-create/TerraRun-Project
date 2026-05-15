import { Controller, Get, UseGuards } from "@nestjs/common";
import { AuthGuard } from "../auth/auth.guard";
import { CurrentUser, type AuthenticatedUser } from "../auth/current-user.decorator";
import { UsersService } from "./users.service";

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get("me")
  @UseGuards(AuthGuard)
  getMe(@CurrentUser() user: AuthenticatedUser) {
    return this.usersService.getMe(user);
  }
}

