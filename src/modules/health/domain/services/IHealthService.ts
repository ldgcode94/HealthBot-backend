export interface IHealthService {
  askQuestion(userId: string, content: string): Promise<string>;
}
