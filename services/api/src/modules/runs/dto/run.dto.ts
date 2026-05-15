import {
  IsArray,
  IsIn,
  IsISO8601,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
  Max,
  Min,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import type { EndRunRequest, RunPoint, StartRunRequest, UploadRunPointsRequest } from "@terrarun/shared-types";

class DeviceDto {
  @IsIn(["ios", "android", "web", "unknown"])
  platform!: "ios" | "android" | "web" | "unknown";

  @IsOptional()
  @IsString()
  appVersion?: string;
}

export class StartRunDto implements StartRunRequest {
  @IsISO8601()
  startedAt!: string;

  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => DeviceDto)
  device?: DeviceDto;
}

export class RunPointDto implements RunPoint {
  @IsISO8601()
  recordedAt!: string;

  @IsNumber()
  @Min(-90)
  @Max(90)
  latitude!: number;

  @IsNumber()
  @Min(-180)
  @Max(180)
  longitude!: number;

  @IsOptional()
  @IsNumber()
  altitudeM?: number;

  @IsOptional()
  @IsNumber()
  speedMps?: number;

  @IsOptional()
  @IsNumber()
  heading?: number;

  @IsOptional()
  @IsNumber()
  horizontalAccuracyM?: number;
}

export class UploadRunPointsDto implements UploadRunPointsRequest {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RunPointDto)
  points!: RunPointDto[];
}

export class EndRunDto implements EndRunRequest {
  @IsUUID()
  runId!: string;

  @IsISO8601()
  endedAt!: string;
}

