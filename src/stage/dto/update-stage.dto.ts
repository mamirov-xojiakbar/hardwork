
import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UpdateStageDto {
    @Field()
    name?:string
}
