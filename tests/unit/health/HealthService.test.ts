import { HealthService } from "../../src/modules/health/domain/services/HealthService";

describe("HealthService", () => {
  it("should return a placeholder response", async () => {
    const service = new HealthService();
    const answer = await service.getAnswer("What is diabetes?");
    expect(answer).toBe("This is a placeholder response. GPT-4 integration should be here.");
  });
});
