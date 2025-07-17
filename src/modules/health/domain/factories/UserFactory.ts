import { User } from "../entities/User";
import { v4 as uuidv4 } from "uuid";

export class UserFactory {
  static create(username: string, passwordHash: string, email: string): User {
    return new User(
      uuidv4(),
      username,
      passwordHash,
      email,
      new Date()
    );
  }
}
