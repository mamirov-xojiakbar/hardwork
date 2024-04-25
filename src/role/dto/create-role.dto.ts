import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class CreateRoleDto {
    @Field()
    name:string
}
