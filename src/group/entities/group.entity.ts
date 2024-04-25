import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Branch } from "src/branch/entities/branch.entity";
import { GroupStuff } from "src/group_stuff/entities/group_stuff.entity";
import { Lesson } from "src/lesson/entities/lesson.entity";
import { Lid } from "src/lid/entities/lid.entity";
import { Stage } from "src/stage/entities/stage.entity";
import { StudentGroup } from "src/student_group/entities/student_group.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@ObjectType()
@Entity()
export class Group {
    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id:number

    @Field()
    @Column()
    group_name:string

    @Field()
    @Column()
    lesson_start_time:string

    @Field()
    @Column()
    lesson_continuous:string

    @Field()
    @Column()
    lesson_week_day:string

    @ManyToOne(()=>Stage,(data)=>data.group_stages)
    @Field(()=>Stage)
    group_stage_id:Stage

    @Field()
    @Column()
    room_number:number

    @Field()
    @Column()
    room_floor:number

    @ManyToOne(()=>Branch,(data)=>data.branches)
    @Field(()=>Branch)
    branch_id:Branch

    @Field()
    @Column()
    lessons_quant:number

    @Field()
    @Column()
    is_active:boolean

    @OneToMany(()=>GroupStuff,(data)=>data.group_id)
    @Field(()=>[GroupStuff])
    groupStuffs:GroupStuff[]


    @OneToMany(()=>Lesson,(data)=>data.group_id)
    @Field(()=>[Lesson])
    lessons:Lesson[]

    @OneToMany(()=>StudentGroup,(data)=>data.group_id)
    @Field(()=>[StudentGroup])
    studentGroup:StudentGroup[]

    @OneToMany(()=>Lid,(data)=>data.trial_lesson_group_id)
    @Field(()=>[Lid])
    groupLids : Lid[]

}
