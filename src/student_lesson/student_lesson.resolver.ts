
import { StudentLessonService } from './student_lesson.service';
import { CreateStudentLessonDto } from './dto/create-student_lesson.dto';
import { UpdateStudentLessonDto } from './dto/update-student_lesson.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StudentLesson } from './entities/student_lesson.entity';

@Resolver('student-lesson')
export class StudentLessonResolver {
  constructor(private readonly studentLessonService: StudentLessonService) {}

 

  @Query(()=>[StudentLesson])
  findAllStudentLesson() {
    return this.studentLessonService.findAll();
  }

  @Query(()=>StudentLesson)
  findOneStudentLesson(@Args('id',{type:()=>ID}) id: number) {
    return this.studentLessonService.findOne(id);
  }


  @Mutation(()=>StudentLesson)
  createStudentLesson(@Args('createStudentLesson') createStudentLessonDto: CreateStudentLessonDto) {
    return this.studentLessonService.create(createStudentLessonDto);
  }
  @Mutation(()=>StudentLesson)
  updateStudentLesson(@Args('id',{type:()=>ID}) id: number,
   @Args('updateStudentLesson') updateStudentLessonDto: UpdateStudentLessonDto) {
    return this.studentLessonService.update(id, updateStudentLessonDto);
  }

  @Mutation(()=>StudentLesson)
  removeStudentLesson(@Args('id',{type:()=>ID}) id: number) {
    return this.studentLessonService.remove(id);
  }
}
