import { IsString, IsNotEmpty, IsEmail, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  npwp: string; // NPWP is required

  @IsNotEmpty()
  @IsEmail()
  email: string; // Email is required

  @IsNotEmpty()
  @IsString()
  alamat: string; // Alamat (address) is required

  @IsNotEmpty()
  @IsString()
  kontak: string; // Kontak (contact) is required

  @IsNotEmpty()
  @IsString()
  jenis_usaha: string; // Jenis Usaha (business type) is required
}
