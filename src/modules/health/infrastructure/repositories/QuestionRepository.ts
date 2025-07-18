import { IQuestionRepository } from "../../domain/repositories/IQuestionRepository";
import { Question } from "../../domain/entities/Question";
import { QuestionModel } from "../database/mongoDB/schemas/QuestionSchema";
import { injectable } from "tsyringe";

@injectable()
export class QuestionRepository implements IQuestionRepository {
  async save(question: Question): Promise<void> {
    try {
      const doc = new QuestionModel({
        id: question.id,
        content: question.content,
        userId: question.userId,
        createdAt: question.createdAt
      });
      await doc.save();
    } catch (error) {
      console.log('Error saving question: ', error);
      throw new Error('Error saving question')
    }
  }

  async findByUserId(userId: string): Promise<Question[]> {
    try {
      const docs = await QuestionModel.find({ userId });
      return docs.map(doc => new Question(doc.id, doc.content, new Date(doc.createdAt), doc.userId));
    } catch (error) {
      console.log('Error finding questions: ', error);
      throw new Error('Error finding questions')
    }
  }

  async findById(id: string): Promise<Question | null> {
    try {
      const doc = await QuestionModel.findOne({ id });
      if (!doc) return null;

      return new Question(doc.id, doc.content, new Date(doc.createdAt), doc.userId);
    } catch (error) {
      console.log('Error finding question: ', error);
      throw new Error('Error finding question')
    }
  }

  async findAll(): Promise<Question[]> {
    try {
      const docs = await QuestionModel.find({});
      return docs.map((q) => new Question(q.id, q.content, new Date(q.createdAt), q.userId));

    } catch (error) {
      console.log('Error finding question: ', error);
      throw new Error('Error finding question')
    }
  }
}
