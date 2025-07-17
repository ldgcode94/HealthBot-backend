import { IQuestionRepository } from "../../domain/repositories/IQuestionRepository";
import { Question } from "../../domain/entities/Question";

export class QuestionRepository implements IQuestionRepository {
  async save(question: Question): Promise<void> {
    // MongoDB implementation here
  }

  async findById(id: string): Promise<Question | null> {
    // MongoDB implementation here
    return null;
  }

  async findAll(): Promise<Question[]> {
    // MongoDB implementation here
    return [];
  }
}
