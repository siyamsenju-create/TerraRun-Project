import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "../auth/auth.guard";
import { CurrentUser, type AuthenticatedUser } from "../auth/current-user.decorator";
import { EndRunDto, StartRunDto, UploadRunPointsDto } from "./dto/run.dto";
import { RunsService } from "./runs.service";

@Controller("run")
@UseGuards(AuthGuard)
export class RunsController {
  constructor(private readonly runsService: RunsService) {}

  @Post("start")
  startRun(@CurrentUser() user: AuthenticatedUser, @Body() body: StartRunDto) {
    return this.runsService.startRun(user, body);
  }

  @Post(":runId/points")
  uploadPoints(
    @CurrentUser() user: AuthenticatedUser,
    @Param("runId") runId: string,
    @Body() body: UploadRunPointsDto,
  ) {
    return this.runsService.uploadPoints(user, runId, body);
  }

  @Post("end")
  endRun(@CurrentUser() user: AuthenticatedUser, @Body() body: EndRunDto) {
    return this.runsService.endRun(user, body);
  }

  @Get(":runId")
  getRun(@CurrentUser() user: AuthenticatedUser, @Param("runId") runId: string) {
    return this.runsService.getRun(user, runId);
  }
}

