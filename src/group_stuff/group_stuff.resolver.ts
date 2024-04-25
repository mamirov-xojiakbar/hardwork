
import { GroupStuffService } from './group_stuff.service';
import { CreateGroupStuffDto } from './dto/create-group_stuff.dto';
import { UpdateGroupStuffDto } from './dto/update-group_stuff.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GroupStuff } from './entities/group_stuff.entity';

@Resolver('group-stuff')
export class GroupStuffResolver{
  constructor(private readonly groupStuffService: GroupStuffService) {}

 

  @Query(()=>[GroupStuff])
  findAllGroupStuff() {
    return this.groupStuffService.findAll();
  }

  @Query(()=>GroupStuff)
  findOneGroupStuff(@Args('id',{type:()=>ID}) id: number) {
    return this.groupStuffService.findOne(id);
  }


  @Mutation(()=>GroupStuff)
  createGroupStuff(@Args('createGroupStuff') createGroupStuffDto: CreateGroupStuffDto) {
    return this.groupStuffService.create(createGroupStuffDto);
  }
  @Mutation(()=>GroupStuff)
  updateGroupStuff(@Args('id',{type:()=>ID}) id: number, 
  @Args("updateGroupStuff") updateGroupStuffDto: UpdateGroupStuffDto) {
    return this.groupStuffService.update(id, updateGroupStuffDto);
  }

  @Mutation(()=>GroupStuff)
  removeGroupStuff(@Args('id',{type:()=>ID}) id: number) {
    return this.groupStuffService.remove(id);
  }
}
