import { Field, ObjectType } from "@nestjs/graphql"

@ObjectType()
export class CreateLessonDto {
    @Field()
    lesson_theme:string
    @Field()
    lesson_number:number
    @Field()
    group_id:object
    @Field()
    lesson_date:Date
}
