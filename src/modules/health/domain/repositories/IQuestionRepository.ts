import { Question } from "../entities/Question";

export interface IQuestionRepository {
  save(question: Question): Promise<void>;
  findById(id: string): Promise<Question | null>;
}
