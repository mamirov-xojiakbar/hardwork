
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Role } from './entities/role.entity';


@Resolver('role')
export class RoleResolver {
  constructor(private readonly roleService: RoleService) {}


  
  

  @Query(()=>[Role])
  findAll() {
    return this.roleService.findAll();
  }

  @Query(()=>Role)
  findOneRole(@Args('id',{type:()=>ID}) id: number) {
    return this.roleService.findOne(id);
  }

  @Mutation(()=>Role)
  createRole(@Args('createRole') createRoleDto: CreateRoleDto) {
    return this.roleService.create(createRoleDto);
  }

  @Mutation(()=>Role)
  updateRole(@Args('id',{type:()=>ID}) id: number,
   @Args('updateRole') updateRoleDto: UpdateRoleDto) {
    return this.roleService.update(id, updateRoleDto);
  }

  @Mutation(()=>Role)
  removeRole(@Args('id',{type:()=>ID}) id: number) {
    return this.roleService.remove(id);
  }
}
