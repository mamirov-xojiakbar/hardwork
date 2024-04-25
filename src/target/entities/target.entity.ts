import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Lid } from "src/lid/entities/lid.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Target {

    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id:number

    @Field()
    @Column()
    name:string

    @OneToMany(()=>Lid,(data)=>data.target_id)
    @Field(()=>[Lid])
    targets:Lid[]
}
