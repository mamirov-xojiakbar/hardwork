


import { Field, ObjectType } from "@nestjs/graphql"

@ObjectType()
export class UpdateStuffRoleDto  {
    @Field()
    roleId?:object
    
    @Field()
    stuffId?:object
}
