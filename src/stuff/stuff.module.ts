import { Module } from '@nestjs/common';
import { StuffService } from './stuff.service';
import { StuffController } from './stuff.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stuff } from './entities/stuff.entity';
import { JwtModule } from '@nestjs/jwt';
import { StuffResolver } from './stuff.resolver';

@Module({
  imports:[TypeOrmModule.forFeature([Stuff]),JwtModule.register({})],
  controllers: [StuffController],
  providers: [StuffService,StuffResolver],
})
export class StuffModule {}
