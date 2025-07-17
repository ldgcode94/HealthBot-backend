export interface IGPTService {
    getAnswer(question: string): Promise<string>;
  }
  