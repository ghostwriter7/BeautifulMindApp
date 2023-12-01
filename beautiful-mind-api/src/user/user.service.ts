import { Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "@user/entities";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

    private readonly logger = new Logger(UserService.name);

    constructor(@InjectRepository(User) private userRepository: Repository<User>) {
    }

    findById(id: number): Promise<User | null> {
        return this.userRepository.findOneBy({ id });
    }

    findByEmail(email: string): Promise<User | null> {
        return this.userRepository.findOneBy({ email });
    }

    findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async remove(id: number): Promise<void> {
        await this.userRepository.delete(id);
    }

    async create(email: string, password: string): Promise<User> {
        const existingUser = await this.userRepository.findOneBy({ email });

        if (existingUser) {
            this.logger.log(`Failed to create a user. User with email: ${email} already exists!`);
            throw new UnauthorizedException();
        }

        const hash = await bcrypt.hash(password, 10);
        const user = this.userRepository.create({ email, hash });

        return await this.userRepository.save(user);
    }
}
