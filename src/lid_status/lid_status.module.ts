import { Module } from '@nestjs/common';
import { LidStatusService } from './lid_status.service';
import { LidStatusController } from './lid_status.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LidStatus } from './entities/lid_status.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LidStatus])],
  controllers: [LidStatusController],
  providers: [LidStatusService],
})
export class LidStatusModule {}
