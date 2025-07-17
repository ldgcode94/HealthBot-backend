import { Answer } from "../entities/Answer";
import { Question } from "../entities/Question";

export interface IQuestionAggregate {
  create(question: Question): IQuestionAggregate;
  addAnswer(answer: Answer): void;
  getQuestion(): Question;
  getAnswers(): Answer[];
}
