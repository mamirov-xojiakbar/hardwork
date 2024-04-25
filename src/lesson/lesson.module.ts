import { Module } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { LessonController } from './lesson.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './entities/lesson.entity';
import { LessonResolver } from './lesson.resolver';

@Module({
  imports:[TypeOrmModule.forFeature([Lesson])],
  controllers: [LessonController],
  providers: [LessonService,LessonResolver],
})
export class LessonModule {}
