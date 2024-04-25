import { Field, ObjectType } from "@nestjs/graphql"

@ObjectType()
export class CreateStuffRoleDto {
    @Field()
    roleId:object
    @Field()
    stuffId:object
}
