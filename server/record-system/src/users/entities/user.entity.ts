import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Task } from 'src/tasks/task.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @OneToMany(() => Task, task => task.user)
  @Field(type => [Task], {nullable: true})
  tasks?: Task[];
}
