import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Group } from "src/group/entities/group.entity";
import { Lid } from "src/lid/entities/lid.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Stage {
    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id:number

    @Field()
    @Column()
    name:string

    @OneToMany(()=>Lid,(data)=>data.stage_id)
    @Field(()=>[Lid])
    stages:Lid[]

    @OneToMany(()=>Group,(data)=>data.group_stage_id)
    @Field(()=>[Group])
    group_stages:Group[]
}
