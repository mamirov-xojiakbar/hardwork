import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class CreateStageDto {
    @Field()
    name:string
}
