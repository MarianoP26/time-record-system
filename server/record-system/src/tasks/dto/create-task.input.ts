import { InputType, Field, Int } from "@nestjs/graphql";
import { IsAlpha } from "class-validator";

@InputType()
export class CreateTaskInput {

  @IsAlpha()
  @Field()
  name: string;

  @Field(() => Int)
  userId: number;
}