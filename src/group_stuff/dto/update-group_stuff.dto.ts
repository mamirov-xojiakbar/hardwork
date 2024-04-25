
import { Field, ObjectType } from "@nestjs/graphql"

@ObjectType()
export class UpdateGroupStuffDto {
    @Field()
    group_id?:object
    @Field()
    stuff_id?:object
}
