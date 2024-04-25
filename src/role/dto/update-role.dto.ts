

import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UpdateRoleDto {
    @Field()
    name?:string
}