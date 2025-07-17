import { Question } from "../entities/Question";

export interface IQuestionFactory {
  create(content: string, userId: string): Promise<Question>;
}
