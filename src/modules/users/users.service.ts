// Falta implmentar:
//   * user model
//   * persistence layer: using your library of choice(e.g., TypeORM, Sequelize, Mongoose, etc.)
import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      userName: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      userName: 'maria',
      password: 'guess',
    },
  ];

  async findOne(userName: string): Promise<User> {
    return this.users.find((user) => user.userName === userName);
  }
}
