import { Field, ID, ObjectType } from "@nestjs/graphql"
import { Group } from "src/group/entities/group.entity"
import { Stuff } from "src/stuff/entities/stuff.entity"
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"


@ObjectType()
@Entity()
export class GroupStuff {

    @Field(()=>ID)
@PrimaryGeneratedColumn()
id:number

@ManyToOne(()=>Group,(data)=>data.groupStuffs)
@Field(()=>Group)
    group_id:Group

@ManyToOne(()=>Stuff,(data)=>data.stuffGroup)
@Field(()=>Stuff)
    stuff_id:Stuff
}
