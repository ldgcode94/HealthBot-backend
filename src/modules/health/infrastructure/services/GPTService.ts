import { injectable } from "tsyringe";
import { IGPTService } from "./IGPTService";

@injectable()
export class GPTService implements IGPTService {
  async getAnswer(question: string): Promise<string> {
    return `This is a dummy answer for: "${question}"`;
  }
}
