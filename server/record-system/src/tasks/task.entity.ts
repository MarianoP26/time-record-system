import { Field, ObjectType, Int } from "@nestjs/graphql";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Task {

  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  dateBegin: number = Date.now();

  @Column({nullable: true})
  @Field({nullable: true})
  dateEnd?: number;

  @Column({nullable: true})
  @Field({nullable: true})
  timer?: number;

  @Column({nullable: true})
  @Field({nullable: true})
  isDone: boolean;

  @Column()
  @Field(type => Int)
  userId: number;

  @ManyToOne(() => User, user => user.tasks)
  @Field(() => User)
  user: User;

}