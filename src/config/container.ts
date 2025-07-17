import { container } from "tsyringe";
import { IHealthService } from "../modules/health/domain/services/IHealthService";
import { HealthService } from "../modules/health/domain/services/HealthService";
import { IQuestionRepository } from "../modules/health/domain/repositories/IQuestionRepository";
import { QuestionRepository } from "../modules/health/infrastructure/repositories/QuestionRepository";
import { IAnswerRepository } from "../modules/health/domain/repositories/IAnswerRepository";
import { AnswerRepository } from "../modules/health/infrastructure/repositories/AnswerRepository";
import { HealthController } from "../modules/health/application/controllers/healthController";
import { IQuestionFactory } from "../modules/health/domain/factories/IQuestionFactory";
import { QuestionFactory } from "../modules/health/domain/factories/QuestionFactory";
import { IAnswerFactory } from "../modules/health/domain/factories/IAnswerFactory";
import { AnswerFactory } from "../modules/health/domain/factories/AnswerFactory";
import { IQuestionAggregateFactory } from "../modules/health/domain/factories/IQuestionAggregateFactory";
import { QuestionAggregateFactory } from "../modules/health/domain/factories/QuestionAggregateFactory";
import { IGPTService } from "../modules/health/infrastructure/services/IGPTService";
import { GPTService } from "../modules/health/infrastructure/services/GPTService";

// Services
container.register<IHealthService>("IHealthService", HealthService);

// Repositories
container.register<IAnswerRepository>("IAnswerRepository", AnswerRepository);
container.register<IQuestionRepository>("IQuestionRepository", QuestionRepository);

// Factories
container.register<IQuestionFactory>("IQuestionFactory", QuestionFactory);
container.register<IAnswerFactory>("IAnswerFactory", AnswerFactory);
container.register<IQuestionAggregateFactory>("IQuestionAggregateFactory", QuestionAggregateFactory);

// Controllers
container.register("HealthController", HealthController);

// Infrastructure Services
container.register<IGPTService>("IGPTService", GPTService);
