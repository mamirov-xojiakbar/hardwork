import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Lid } from '../../lid/entities/lid.entity';

@Entity()
export class Target {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Lid, (lid) => lid.target_id)
  lids: Lid[];
}
