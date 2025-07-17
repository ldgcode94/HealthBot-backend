import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { User } from "../../domain/entities/User";

export class UserRepository implements IUserRepository {
  async save(user: User): Promise<void> {
    // MongoDB implementation here
  }

  async findById(id: string): Promise<User | null> {
    // MongoDB implementation here
    return null;
  }

  async findByUsername(username: string): Promise<User | null> {
    // MongoDB implementation here
    return null;
  }
}
