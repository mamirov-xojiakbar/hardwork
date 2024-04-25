import { Field, ObjectType } from "@nestjs/graphql"

@ObjectType()
export class CreateStudentGroupDto {
    @Field()
    student_id:object
    @Field()
    group_id:object
}
