
import { LidStatusService } from './lid_status.service';
import { CreateLidStatusDto } from './dto/create-lid_status.dto';
import { UpdateLidStatusDto } from './dto/update-lid_status.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LidStatus } from './entities/lid_status.entity';

@Resolver('lid-status')
export class LidStatusResolver {
  constructor(private readonly lidStatusService: LidStatusService) {}

 

  @Query(()=>[LidStatus])
  findAllLidStatus() {
    return this.lidStatusService.findAll();
  }

  @Query(()=>LidStatus)
  findOneLidStatus(@Args('id',{type:()=>ID}) id: number) {
    return this.lidStatusService.findOne(id);
  }

  @Mutation(()=>LidStatus)
  createLidStatus(@Args('createLidStatus') createLidStatusDto: CreateLidStatusDto) {
    return this.lidStatusService.create(createLidStatusDto);
  }
  @Mutation(()=>LidStatus)
  updateLidStatus(@Args('id',{type:()=>ID}) id: number, 
  @Args('updateLidStatus') updateLidStatusDto: UpdateLidStatusDto) {
    return this.lidStatusService.update(id, updateLidStatusDto);
  }

  @Mutation(()=>LidStatus)
  removeLidStatus(@Args('id',{type:()=>ID}) id: number) {
    return this.lidStatusService.remove(id);
  }
}
