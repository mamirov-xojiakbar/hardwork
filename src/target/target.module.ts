import { Module } from '@nestjs/common';
import { TargetService } from './target.service';
import { TargetController } from './target.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Target } from './entities/target.entity';
import { TargetResolver } from './target.resolve';
import { Lid } from 'src/lid/entities/lid.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Target,Lid])],
  controllers: [TargetController],
  providers: [TargetService,TargetResolver],
})
export class TargetModule {}
