import { Question } from "../entities/Question";
import { QuestionAggregate } from "../aggregates/QuestionAggregate";

export interface IQuestionAggregateFactory {
  create(question: Question): QuestionAggregate;
}