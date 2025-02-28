import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/users.entitiy';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { validateNPWP } from '../common/validators/npwp.validator';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async register(createUserDto: CreateUserDto): Promise<User> {
    // Validasi NPWP
    const isValidNPWP = await validateNPWP(createUserDto.npwp);
    if (!isValidNPWP) {
      throw new Error('NPWP tidak valid');
    }

    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }

  async login(nama: string, npwp: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { npwp } });
  }
}
