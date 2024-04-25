import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Lid } from "src/lid/entities/lid.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class ReasonLid {
    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id:number

    @Field()
    @Column()
    reason_lid:string

    @OneToMany(()=>Lid,(data)=>data.reason_lid_id)
    @Field(()=>[Lid])
    reasons_lid:Lid[]
}
