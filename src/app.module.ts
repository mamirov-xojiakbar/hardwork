import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { LidModule } from './lid/lid.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StageModule } from './stage/stage.module';
import { Stage } from './stage/entities/stage.entity';
import { TargetModule } from './target/target.module';
import { Target } from './target/entities/target.entity';
import { LidStatusModule } from './lid_status/lid_status.module';
import { LidStatus } from './lid_status/entities/lid_status.entity';
import { ReasonLidModule } from './reason_lid/reason_lid.module';
import { ReasonLid } from './reason_lid/entities/reason_lid.entity';
import { Lid } from './lid/entities/lid.entity';
import { RoleModule } from './role/role.module';
import { Role } from './role/entities/role.entity';
import { StuffModule } from './stuff/stuff.module';
import { Stuff } from './stuff/entities/stuff.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'xojiakbar',
      database: 'hardwork',
      entities: [Stage, Target, LidStatus, ReasonLid, Lid, Role, Stuff],
      synchronize: true,
    }),
    LidModule,
    StageModule,
    TargetModule,
    LidStatusModule,
    ReasonLidModule,
    RoleModule,
    StuffModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
