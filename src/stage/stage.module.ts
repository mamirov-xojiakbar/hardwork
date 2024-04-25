import { Module } from '@nestjs/common';
import { StageService } from './stage.service';
import { StageController } from './stage.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stage } from './entities/stage.entity';
import { StageResolver } from './stage.resolver';

@Module({
  imports:[TypeOrmModule.forFeature([Stage])],
  controllers: [StageController],
  providers: [StageService,StageResolver],
})
export class StageModule {}
