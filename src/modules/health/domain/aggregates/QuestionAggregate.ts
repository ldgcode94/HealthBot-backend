import { Question } from "../entities/Question";
import { Answer } from "../entities/Answer";
import { injectable } from "tsyringe";

@injectable()
export class QuestionAggregate {
  private answers: Answer[] = [];

  constructor(private readonly question: Question) {}

  addAnswer(answer: Answer): void {
    this.answers.push(answer);
  }

  getQuestion(): Question {
    return this.question;
  }

  getAnswers(): Answer[] {
    return this.answers;
  }
}
