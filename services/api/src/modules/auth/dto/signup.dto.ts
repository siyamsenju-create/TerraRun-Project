import { IsOptional, IsString, Length } from "class-validator";
import type { SignupRequest } from "@terrarun/shared-types";

export class SignupDto implements SignupRequest {
  @IsString()
  @Length(2, 40)
  displayName!: string;

  @IsOptional()
  @IsString()
  @Length(2, 80)
  homeCity?: string;
}

