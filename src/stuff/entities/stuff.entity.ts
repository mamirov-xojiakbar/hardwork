import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Stuff {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  phone_number: string;

  @Column()
  login: string;

  @Column()
  hashed_password: string;

  @Column({ default: false })
  is_active: boolean;
}
