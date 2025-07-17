import { injectable } from "tsyringe";
import { IQuestionAggregateFactory } from "./IQuestionAggregateFactory";
import { Question } from "../entities/Question";
import { QuestionAggregate } from "../aggregates/QuestionAggregate";

@injectable()
export class QuestionAggregateFactory implements IQuestionAggregateFactory {
  constructor() {}

  public create(question: Question): QuestionAggregate {
    return new QuestionAggregate(question);
  }
}
