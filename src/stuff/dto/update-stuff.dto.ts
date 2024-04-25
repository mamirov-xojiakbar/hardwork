


import { Field, ObjectType } from "@nestjs/graphql"

@ObjectType()
export class UpdateStuffDto {
    @Field()
    first_name?:string
    @Field()
    last_name?:string
    @Field()
    phone_number?:string
    @Field()
    login?:string
    @Field()
    parol?:string
    @Field()
    confirm_parol?:string
      
}
