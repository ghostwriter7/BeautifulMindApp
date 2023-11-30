import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "@user/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
  private readonly tempListOfUsers = [
    {
      userId: 1,
      username: "Kubo",
      password: "ABC"
    },
    {
      userId: 2,
      username: "John",
      password: "123"
    }
  ];

  constructor(@InjectRepository(User) private userRepository: Repository<User>) {
  }

  async findOne(username: string): Promise<{ userId: number, username: string, password: string } | undefined> {
    return this.tempListOfUsers.find((user) => user.username === username);
  }

  findById(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
