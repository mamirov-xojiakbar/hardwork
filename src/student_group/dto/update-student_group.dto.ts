


import { Field, ObjectType } from "@nestjs/graphql"

@ObjectType()
export class UpdateStudentGroupDto {
    @Field()
    student_id?:object
    @Field()
    group_id?:object
}
