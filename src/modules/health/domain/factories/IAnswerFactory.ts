import { Answer } from "../entities/Answer";

export interface IAnswerFactory {
  create(content: string, questionId: string): Promise<Answer>;
}
