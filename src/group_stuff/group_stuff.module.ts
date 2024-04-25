import { Module } from '@nestjs/common';
import { GroupStuffService } from './group_stuff.service';
import { GroupStuffController } from './group_stuff.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupStuff } from './entities/group_stuff.entity';
import { GroupStuffResolver } from './group_stuff.resolver';

@Module({
  imports:[TypeOrmModule.forFeature([GroupStuff])],
  controllers: [GroupStuffController],
  providers: [GroupStuffService,GroupStuffResolver],
})
export class GroupStuffModule {}
