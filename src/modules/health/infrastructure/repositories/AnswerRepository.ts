import { IAnswerRepository } from "../../domain/repositories/IAnswerRepository";
import { Answer } from "../../domain/entities/Answer";

export class AnswerRepository implements IAnswerRepository {
  async save(answer: Answer): Promise<void> {
    // MongoDB implementation here
  }

  async findById(id: string): Promise<Answer | null> {
    // MongoDB implementation here
    return null;
  }

  async findAllByQuestionId(questionId: string): Promise<Answer[]> {
    // MongoDB implementation here
    return [];
  }

  async saveMany(answers: Answer[]): Promise<void> {
    // MongoDB implementation here
  }
}
