
import { GroupService } from './group.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Group } from './entities/group.entity';

@Resolver('group')
export class GroupResolver {
  constructor(private readonly groupService: GroupService) {}

 

  @Query(()=>[Group])
  findAllGroup() {
    return this.groupService.findAll();
  }

  @Query(()=>Group)
  findOneGroup(@Args('id',{type:()=>ID}) id: number) {
    return this.groupService.findOne(id);
  }


  @Mutation(()=>Group)
  createGroup(@Args('creategroup') createGroupDto: CreateGroupDto) {
    return this.groupService.create(createGroupDto);
  }
  @Mutation(()=>Group)
  updateGroup(@Args('id',{type:()=>ID}) id: number, 
  @Args('updateGroup') updateGroupDto: UpdateGroupDto) {
    return this.groupService.update(id, updateGroupDto);
  }

  @Mutation(()=>Group)
  removeGroup(@Args('id',{type:()=>ID}) id: number) {
    return this.groupService.remove(id);
  }
}
