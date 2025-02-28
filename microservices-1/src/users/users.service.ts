import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entitiy'
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) // Inject the User repository to interact with the database
    private readonly userRepository: Repository<User>, // The user repository to interact with MySQL
  ) {}

  // Create a new user
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    // Create a new user object based on the DTO
    const user = this.userRepository.create(createUserDto);

    // Save the user object to the database
    return this.userRepository.save(user);
  }

  // Get a user by ID
  async getUserById(id: number): Promise<User> {
    // Find the user by ID in the database
    return this.userRepository.findOne({ where: { id } });
  }

  // Get all users
  async getAllUsers(): Promise<User[]> {
    // Retrieve all users from the database
    return this.userRepository.find();
  }

  // Update a user's data
  async updateUser(id: number, updateUserDto: Partial<User>): Promise<User> {
    // Find the user by ID
    const user = await this.userRepository.findOne({ where: { id } });

    // If user does not exist, throw an error
    if (!user) {
      throw new Error('User not found');
    }

    // Update the user's fields
    Object.assign(user, updateUserDto);

    // Save the updated user
    return this.userRepository.save(user);
  }

  // Delete a user by ID
  async deleteUser(id: number): Promise<void> {
    // Find the user by ID and delete it
    await this.userRepository.delete(id);
  }
}
