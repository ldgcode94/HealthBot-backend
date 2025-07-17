import { Answer } from "../entities/Answer";

export interface IAnswerRepository {
  saveMany(answers: Answer[]): Promise<void>;
}
