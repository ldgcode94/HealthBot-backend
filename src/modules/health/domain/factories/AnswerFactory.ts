import { Answer } from "../entities/Answer";
import { v4 as uuidv4 } from "uuid";
import { IAnswerFactory } from "./IAnswerFactory";

export class AnswerFactory implements IAnswerFactory {
  async create(content: string, questionId: string): Promise<Answer> {
    return new Answer(uuidv4(), content, questionId, new Date());
  }
}
