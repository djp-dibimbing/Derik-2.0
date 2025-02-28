import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  npwp: string;

  @Column()
  email: string;

  @Column()
  alamat: string;

  @Column()
  kontak: string;

  @Column()
  jenis_usaha: string;
}
