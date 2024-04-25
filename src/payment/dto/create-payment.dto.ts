import { Field, ObjectType } from "@nestjs/graphql"

@ObjectType()
export class CreatePaymentDto {
    @Field()
    student_id:object
    @Field()
    payment_last_date:Date
    @Field()
    payment_date:Date
    @Field()
    price:number
    @Field()
    is_paid:boolean
    @Field()
    total_payment:number
}
