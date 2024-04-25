import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class CreateLidStatusDto {
    @Field()
    status:string
}
