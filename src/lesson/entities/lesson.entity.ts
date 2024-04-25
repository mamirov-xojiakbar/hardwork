import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Group } from "src/group/entities/group.entity";
import { StudentLesson } from "src/student_lesson/entities/student_lesson.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@ObjectType()
@Entity()
export class Lesson {

@Field(()=>ID)
@PrimaryGeneratedColumn()
id:number

@Field()
@Column()
lesson_theme:string

@Field()
@Column()
lesson_number:number

@ManyToOne(()=>Group,(data)=>data.lessons)
@Field(()=>Group)
group_id:Group

@Field()
@Column()
lesson_date:Date

@OneToMany(()=>StudentLesson,(data)=>data.lesson_id)
@Field(()=>[StudentLesson])
studentLessons:StudentLesson[]

}
