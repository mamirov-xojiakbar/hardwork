
import { LessonService } from './lesson.service';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Lesson } from './entities/lesson.entity';

@Resolver('lesson')
export class LessonResolver {
  constructor(private readonly lessonService: LessonService) {}

  

  @Query(()=>[Lesson])
  findAllLesson() {
    return this.lessonService.findAll();
  }

  @Query(()=>Lesson)
  findOneLesson(@Args('id',{type:()=>ID}) id: number) {
    return this.lessonService.findOne(id);
  }


  @Mutation(()=>Lesson)
  createLesson(@Args('createLesson') createLessonDto: CreateLessonDto) {
    return this.lessonService.create(createLessonDto);
  }
  @Mutation(()=>Lesson)
  updateLesson(@Args('id',{type:()=>ID}) id: number, 
  @Args('updateLesson') updateLessonDto: UpdateLessonDto) {
    return this.lessonService.update(id, updateLessonDto);
  }

  @Mutation(()=>Lesson)
  removeLesson(@Args('id',{type:()=>ID}) id: number) {
    return this.lessonService.remove(id);
  }
}
