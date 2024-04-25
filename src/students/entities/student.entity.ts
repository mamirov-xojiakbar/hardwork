import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Lid } from "src/lid/entities/lid.entity";
import { Payment } from "src/payment/entities/payment.entity";
import { StudentGroup } from "src/student_group/entities/student_group.entity";
import { StudentLesson } from "src/student_lesson/entities/student_lesson.entity";
import { Column, Entity,  ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@ObjectType()
@Entity()
export class Student {
    
    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id:number

    @ManyToOne(()=>Lid,(data)=>data.students)
    @Field(()=>Lid)
    lid_id:Lid

    @Field()
    @Column()
    first_name:string

    @Field()
    @Column()
    last_name:string

    @Field()
    @Column()
    phone_number:string

    @Field()
    @Column()
    bith_date:string

    @Field()
    @Column()
    gender:string

    @OneToMany(()=>StudentGroup,(data)=>data.student_id)
    @Field(()=>[StudentGroup])
    studentGroups:StudentGroup[]

    @OneToMany(()=>StudentLesson,(data)=>data.student_id)
    @Field(()=>[StudentLesson])
    studentsLessons:StudentLesson[]

    @OneToMany(()=>Payment,(data)=>data.student_id)
    @Field(()=>[Payment])
    payments:Payment[]

}
