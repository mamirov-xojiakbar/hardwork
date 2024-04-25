import { Field, ObjectType } from "@nestjs/graphql"

@ObjectType()
export class LoginStuffDto {
    @Field()
    login:string

    @Field()
    parol:string   
}
