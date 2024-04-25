


import { Field, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class UpdateReasonLidDto {
    @Field()
    reason_lid?:string
}
