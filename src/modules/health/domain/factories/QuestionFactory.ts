import { Question } from "../entities/Question";
import { v4 as uuidv4 } from "uuid";
import { IQuestionFactory } from "./IQuestionFactory";

export class QuestionFactory implements IQuestionFactory {
  async create(content: string, userId: string): Promise<Question> {
    return new Question(uuidv4(), content, new Date(), userId);
  }
}
