import { Field, ObjectType } from "@nestjs/graphql"


@ObjectType()
export class UpdateLidDto {
    @Field()
    first_name?:string
    @Field()
    last_name?:string
    @Field()
    phone_number?:string
    @Field()
    target_id?:object
    @Field()
    lid_stage_id?:object
    @Field()
    test_date?:Date
    @Field()
    trial_lesson_date?:Date
    @Field()
    trial_lesson_time?:string
    @Field()
    trial_lesson_group_id?:object
    @Field()
    lid_status_id?:object
    @Field()
    reason_lid_id?:object

}