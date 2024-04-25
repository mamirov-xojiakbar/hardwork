import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Group } from "src/group/entities/group.entity";
import { Student } from "src/students/entities/student.entity";
import { Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@ObjectType()
@Entity()
export class StudentGroup {
    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id:number

    @ManyToOne(()=>Student,(data)=>data.studentGroups)
    @Field(()=>Student)
    student_id:Student

    @ManyToOne(()=>Group,(data)=>data.studentGroup)
    @Field(()=>Group)
    group_id:Group
}
