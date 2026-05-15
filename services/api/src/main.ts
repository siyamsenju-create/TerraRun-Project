import "reflect-metadata";
import { Logger, ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ApiExceptionFilter } from "./common/api-exception.filter";
import { RequestLoggerMiddleware } from "./common/request-logger.middleware";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  const config = app.get(ConfigService);
  const logger = new Logger("Bootstrap");

  app.enableCors({
    origin: config.get<string>("WEB_ORIGIN") ?? "http://localhost:3000",
    credentials: true,
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  app.useGlobalFilters(new ApiExceptionFilter());
  app.use(new RequestLoggerMiddleware().use);

  const port = config.get<number>("PORT") ?? 4000;
  await app.listen(port, "127.0.0.1");
  logger.log(`TerraRun API listening on http://127.0.0.1:${port}`);
}

void bootstrap();
