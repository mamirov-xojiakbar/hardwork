


import { Field, ObjectType } from "@nestjs/graphql"

@ObjectType()
export class UpdateStudentLessonDto {
    @Field()
    lesson_id?:object
    @Field()
    student_id?:object
    @Field()
    is_there?:boolean
    @Field()
    reason?:string
    @Field()
    be_paid?:boolean
}
