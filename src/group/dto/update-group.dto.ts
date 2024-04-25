

import { Field, ObjectType } from "@nestjs/graphql"

@ObjectType()
export class UpdateGroupDto  {
    @Field()
    group_name?:string
    @Field()
    lesson_start_time?:string
    @Field()
    lesson_continuous?:string
    @Field()
    lesson_week_day?:string
    @Field()
    group_stage_id?:object
    @Field()
    room_number?:number
    @Field()
    room_floor?:number
    @Field()
    branch_id?:object
    @Field()
    lessons_quant?:number
    @Field()
    is_active?:boolean

}