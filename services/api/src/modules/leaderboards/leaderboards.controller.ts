import { Controller, Get, Query } from "@nestjs/common";
import { LeaderboardsService } from "./leaderboards.service";

@Controller("leaderboard")
export class LeaderboardsController {
  constructor(private readonly leaderboardsService: LeaderboardsService) {}

  @Get()
  getLeaderboard(
    @Query("scope") scope?: string,
    @Query("period") period?: string,
    @Query("metric") metric?: string,
  ) {
    return this.leaderboardsService.getLeaderboard({ scope, period, metric });
  }
}

