import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Lid } from "src/lid/entities/lid.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@ObjectType()
@Entity()
export class LidStatus {

    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id:number

    @Field()
    @Column()
    status :string

    @OneToMany(()=>Lid,(data)=>data.lid_status_id)
    @Field(()=>[Lid])
    lidStatus:Lid[]
}
