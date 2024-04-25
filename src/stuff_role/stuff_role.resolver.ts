
import { StuffRoleService } from './stuff_role.service';
import { CreateStuffRoleDto } from './dto/create-stuff_role.dto';
import { UpdateStuffRoleDto } from './dto/update-stuff_role.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StuffRole } from './entities/stuff_role.entity';

@Resolver('stuff-role')
export class StuffRoleResolver {
  constructor(private readonly stuffRoleService: StuffRoleService) {}

  @Mutation(()=>StuffRole)
  createStuffRole(@Args('createStuffRole') createStuffRoleDto: CreateStuffRoleDto) {
    return this.stuffRoleService.create(createStuffRoleDto);
  }

  @Query(()=>[StuffRole])
  findAllStuffRole() {
    return this.stuffRoleService.findAll();
  }

  @Query(()=>StuffRole)
  findOneStuffRole(@Args('id',{type:()=>ID}) id: number) {
    return this.stuffRoleService.findOne(id);
  }

  @Mutation(()=>StuffRole)
  updateStuffRole(@Args('id',{type:()=>ID}) id:number, 
  @Args("updateStuffRole") updateStuffRoleDto: UpdateStuffRoleDto) {
    return this.stuffRoleService.update(id, updateStuffRoleDto);
  }

  @Mutation(()=>StuffRole)
  removeStuffRole(@Args('id',{type:()=>ID}) id: number) {
    return this.stuffRoleService.remove(id);
  }
}
