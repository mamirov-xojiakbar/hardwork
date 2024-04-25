import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Lesson } from "src/lesson/entities/lesson.entity";
import { Student } from "src/students/entities/student.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class StudentLesson {
    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id:number

    @ManyToOne(()=>Lesson,(data)=>data.studentLessons)
    @Field(()=>Lesson)
    lesson_id:Lesson

    @ManyToOne(()=>Student,(data)=>data.studentsLessons)
    @Field(()=>Student)
    student_id:Student

    @Field()
    @Column()
    is_there:boolean

    @Field()
    @Column()
    reason:string

    @Field()
    @Column()
    be_paid:boolean
}
