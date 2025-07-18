import { Question } from "../entities/Question";

export interface IQuestionRepository {
  save(question: Question): Promise<void>;
  findByUserId(userId: string): Promise<Question[]>;
  findById(id: string): Promise<Question | null>;
  findAll(): Promise<Question[]>;
}
