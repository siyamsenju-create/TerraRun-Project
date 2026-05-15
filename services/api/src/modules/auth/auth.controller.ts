import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "./auth.guard";
import { AuthService } from "./auth.service";
import { CurrentUser, type AuthenticatedUser } from "./current-user.decorator";
import { SignupDto } from "./dto/signup.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signup")
  @UseGuards(AuthGuard)
  signup(@CurrentUser() user: AuthenticatedUser, @Body() body: SignupDto) {
    return this.authService.signup(user, body);
  }
}

