import { StudentGroupService } from './student_group.service';
import { CreateStudentGroupDto } from './dto/create-student_group.dto';
import { UpdateStudentGroupDto } from './dto/update-student_group.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StudentGroup } from './entities/student_group.entity';

@Resolver('student-group')
export class StudentGroupResolver {
  constructor(private readonly studentGroupService: StudentGroupService) {}

  @Query(()=>[StudentGroup])
  findAllStudentGroup() {
    return this.studentGroupService.findAll();
  }

  @Query(()=>StudentGroup)
  findOneStudentGroup(@Args('id',{type:()=>ID}) id:number) {
    return this.studentGroupService.findOne(id);
  }

  @Mutation(()=>StudentGroup)
  createStudentGroup(@Args('createStudentGroup') createStudentGroupDto: CreateStudentGroupDto) {
    return this.studentGroupService.create(createStudentGroupDto);
  }
  @Mutation(()=>StudentGroup)
  updateStudentGroup(@Args('id',{type:()=>ID}) id: number, 
  @Args('updateStudentGroup') updateStudentGroupDto: UpdateStudentGroupDto) {
    return this.studentGroupService.update(id, updateStudentGroupDto);
  }

  @Mutation(()=>StudentGroup)
  removeStudentGroup(@Args('id',{type:()=>ID}) id: number) {
    return this.studentGroupService.remove(id);
  }
}
