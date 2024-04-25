import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { StudentsResolver } from './students.resolver';

@Module({
  imports:[TypeOrmModule.forFeature([Student])],
  controllers: [StudentsController],
  providers: [StudentsService,StudentsResolver],
})
export class StudentsModule {}
