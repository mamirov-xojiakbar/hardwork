
import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UpdateLidStatusDto {
    @Field()
    status?:string
}
