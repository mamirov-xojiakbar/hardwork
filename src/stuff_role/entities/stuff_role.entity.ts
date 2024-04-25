import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Role } from "src/role/entities/role.entity";
import { Stuff } from "src/stuff/entities/stuff.entity";
import {  Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@ObjectType()
@Entity()
export class StuffRole {
    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id:number

    @ManyToOne(()=>Role,(data)=>data.stuffes)
    @Field(()=>Role)
    roleId:Role

    @ManyToOne(()=>Stuff,(data)=>data.first_name)
    @Field(()=>Stuff)
    stuffId:Stuff
}
