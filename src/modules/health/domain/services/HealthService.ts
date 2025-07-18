import { injectable, inject } from "tsyringe";
import { IHealthService } from "../../domain/services/IHealthService";
import { IAnswerRepository } from "../repositories/IAnswerRepository";
import { IQuestionRepository } from "../repositories/IQuestionRepository";
import { IQuestionFactory } from "../factories/IQuestionFactory";
import { IQuestionAggregateFactory } from "../factories/IQuestionAggregateFactory";
import { IAnswerFactory } from "../factories/IAnswerFactory";
import { IGPTService } from "../../infrastructure/services/IGPTService";

@injectable()
export class HealthService implements IHealthService {
  constructor(
    @inject("IQuestionRepository") private questionRepository: IQuestionRepository,
    @inject("IQuestionFactory") private questionFactory: IQuestionFactory,
    @inject("IQuestionAggregateFactory") private questionAggregateFactory: IQuestionAggregateFactory,
    @inject("IAnswerRepository") private answerRepository: IAnswerRepository,
    @inject("IAnswerFactory") private answerFactory: IAnswerFactory,
    @inject("IGPTService") private readonly gptService: IGPTService
  ) { }

  async askQuestion(userId: string, content: string): Promise<string> {
    console.log('FLAG QUESTION ')
    const question = await this.questionFactory.create(content, userId);

    const aggregate = this.questionAggregateFactory.create(question);

    const answerContent = await this.gptService.getAnswer(content);
    const answer = await this.answerFactory.create(answerContent, question.id);
    aggregate.addAnswer(answer);

    await this.questionRepository.save(aggregate.getQuestion());
    await this.answerRepository.saveMany(aggregate.getAnswers());

    return answerContent;
  }
}
