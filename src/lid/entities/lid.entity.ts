import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Group } from "src/group/entities/group.entity";
import { LidStatus } from "src/lid_status/entities/lid_status.entity";
import { ReasonLid } from "src/reason_lid/entities/reason_lid.entity";
import { Stage } from "src/stage/entities/stage.entity";
import { Student } from "src/students/entities/student.entity";
import { Target } from "src/target/entities/target.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Lid {
    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id:number

    @Field()
    @Column()
    first_name:string

    @Field()
    @Column()
    last_name:string

    @Field()
    @Column()
    phone_number:string

    
    @ManyToOne(()=>Target,(data)=>data.targets)
    @Field(()=>Target)
    target_id:Target

    @Field()
    @ManyToOne(()=>Stage,(data)=>data.stages)
    @Field(()=>Stage)
     stage_id:Stage

     @Field()
    @Column()
    test_date:Date

    @Field()
    @Column()
    trial_lesson_date:Date

    @Field()
    @Column()
    trial_lesson_time:string

    
    @Column()
    @ManyToOne(()=>Group,(data)=>data.groupLids)
    @Field(()=>Group)
    trial_lesson_group_id:Group


    @ManyToOne(()=>LidStatus,(data)=>data.lidStatus)
    @Field(()=>LidStatus)
    lid_status_id:LidStatus
    
    @ManyToOne(()=>ReasonLid,(data)=>data.reasons_lid)
    @Field(()=>ReasonLid)
    reason_lid_id:ReasonLid
    
    @OneToMany(()=>Student,(data)=>data.lid_id)
    @Field(()=>Student)
    students:Student[]
}
