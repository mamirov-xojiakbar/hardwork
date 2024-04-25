import { Field, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class CreateReasonLidDto {
    @Field()
    reason_lid:string
}
