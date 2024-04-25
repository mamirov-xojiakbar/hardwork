import { Field, ID, ObjectType } from "@nestjs/graphql";
import { GroupStuff } from "src/group_stuff/entities/group_stuff.entity";
import { Role } from "src/role/entities/role.entity";
import { StuffRole } from "src/stuff_role/entities/stuff_role.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Stuff {
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

    @Field()
    @Column()
    login:string

    @Field()
    @Column()
    hashed_parol:string

    @Field()
    @Column({ nullable: true })
    hashed_refresh_token:string

   
    @Field()
    @Column({default:false})
    is_active:boolean

    @OneToMany(() => StuffRole,(data)=>data.stuffId)
    @Field(()=>[StuffRole])
    stuffRoles: StuffRole[]

    @OneToMany(()=>GroupStuff,(data)=>data.stuff_id)
    @Field(()=>[GroupStuff])
        stuffGroup:GroupStuff[]

}
