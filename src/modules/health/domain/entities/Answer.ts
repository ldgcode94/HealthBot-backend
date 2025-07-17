export class Answer {
  constructor(
    public id: string,
    public content: string,
    public questionId: string,
    public createdAt: Date
  ) {}
}
