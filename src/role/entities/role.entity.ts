import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Stuff } from "src/stuff/entities/stuff.entity";
import { StuffRole } from "src/stuff_role/entities/stuff_role.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@ObjectType()
@Entity()
export class Role {

    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id:number

    @Field()
    @Column()
    name:string
    

    @OneToMany(() => StuffRole,(data)=>data.roleId)
    @Field(()=>[StuffRole])
    stuffes: StuffRole[]


}
