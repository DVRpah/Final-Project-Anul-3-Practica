import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../users/user.entity';

@Entity('pets')
export class Pet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  species: string;

  @Column({ nullable: true })
  breed: string;

  @Column({ nullable: true })
  age: number;

  @Column({ nullable: true })
  weight: number;

  @Column({ nullable: true })
  notes: string;

  @Column({ nullable: true, type: 'text' })
  image: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  owner: User;

  @Column()
  userId: number;

  @CreateDateColumn()
  createdAt: Date;
}