import { Module } from '@nestjs/common';
import { StudentGroupService } from './student_group.service';
import { StudentGroupController } from './student_group.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentGroup } from './entities/student_group.entity';
import { StudentGroupResolver } from './student_group.resolver';

@Module({
  imports:[TypeOrmModule.forFeature([StudentGroup])],
  controllers: [StudentGroupController],
  providers: [StudentGroupService,StudentGroupResolver],
})
export class StudentGroupModule {}
