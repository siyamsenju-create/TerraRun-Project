import { ConfigService } from "@nestjs/config";
import { AuthGuard } from "../src/modules/auth/auth.guard";

describe("AuthGuard", () => {
  it("attaches a dev user in AUTH_MODE=dev", () => {
    const guard = new AuthGuard({ get: () => "dev" } as unknown as ConfigService);
    const request = {
      header: jest.fn((name: string) => {
        const headers: Record<string, string> = {
          "x-dev-user-id": "00000000-0000-4000-8000-000000000123",
          "x-dev-email": "runner@terrarun.local",
        };
        return headers[name];
      }),
    };
    const context = {
      switchToHttp: () => ({
        getRequest: () => request,
      }),
    };

    expect(guard.canActivate(context as never)).toBe(true);
    expect(request).toMatchObject({
      user: {
        id: "00000000-0000-4000-8000-000000000123",
        email: "runner@terrarun.local",
      },
    });
  });
});

