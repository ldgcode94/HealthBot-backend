export class Question {
  constructor(
    public id: string,
    public content: string,
    public createdAt: Date,
    public userId: string
  ) {}
}
