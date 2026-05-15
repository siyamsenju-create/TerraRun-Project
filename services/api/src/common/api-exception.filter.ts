import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import type { Response } from "express";
import type { ApiErrorCode } from "@terrarun/shared-types";

@Catch()
export class ApiExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<Response>();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    response.status(status).json({
      error: {
        code: this.codeForStatus(status),
        message: this.messageForException(exception),
        details: exception instanceof HttpException ? exception.getResponse() : undefined,
      },
    });
  }

  private codeForStatus(status: number): ApiErrorCode {
    if (status === 401 || status === 403) return "AUTH_REQUIRED";
    if (status === 404) return "NOT_FOUND";
    if (status === 409) return "CONFLICT";
    if (status === 429) return "RATE_LIMITED";
    if (status >= 400 && status < 500) return "VALIDATION_ERROR";
    return "INTERNAL_ERROR";
  }

  private messageForException(exception: unknown) {
    if (exception instanceof HttpException) {
      const response = exception.getResponse();
      if (typeof response === "object" && response && "message" in response) {
        const message = (response as { message: string | string[] }).message;
        return Array.isArray(message) ? message.join(", ") : message;
      }
      return exception.message;
    }

    return "Unexpected server error";
  }
}

