import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AdminModule } from "./modules/admin/admin.module";
import { AuthModule } from "./modules/auth/auth.module";
import { BattlesModule } from "./modules/battles/battles.module";
import { GpsModule } from "./modules/gps/gps.module";
import { HealthModule } from "./modules/health/health.module";
import { LeaderboardsModule } from "./modules/leaderboards/leaderboards.module";
import { NotificationsModule } from "./modules/notifications/notifications.module";
import { PrismaModule } from "./modules/prisma/prisma.module";
import { RunsModule } from "./modules/runs/runs.module";
import { SubscriptionsModule } from "./modules/subscriptions/subscriptions.module";
import { TeamsModule } from "./modules/teams/teams.module";
import { TerritoriesModule } from "./modules/territories/territories.module";
import { UsersModule } from "./modules/users/users.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    HealthModule,
    AuthModule,
    UsersModule,
    RunsModule,
    GpsModule,
    TerritoriesModule,
    BattlesModule,
    TeamsModule,
    LeaderboardsModule,
    SubscriptionsModule,
    NotificationsModule,
    AdminModule,
  ],
})
export class AppModule {}

