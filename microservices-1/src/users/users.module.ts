import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './users.entitiy';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Menghubungkan entitas User dengan TypeORM
  controllers: [UsersController], // Mengatur controller untuk pengguna
  providers: [UsersService], // Mengatur service untuk pengguna
})
export class UsersModule {}
