import { injectable, inject } from "tsyringe";

import { Request, Response } from "express";
import { IHealthService } from "../../domain/services/IHealthService"; 

@injectable()
export class HealthController {
  constructor(
    @inject("IHealthService") private healthService: IHealthService
  ) {}
  async askQuestion(req: Request, res: Response): Promise<void> {
    try {
      const { userId, questionContent } = req.body;
      const answer = await this.healthService.askQuestion(
        userId,
        questionContent
      );
      res.status(200).json({ answer });
    } catch (error) {
      res.status(500).json({ message: "Error processing your request" });
    }
  }
}
