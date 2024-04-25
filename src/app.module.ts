import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LidStatusModule } from './lid_status/lid_status.module';
import { LidStatus } from './lid_status/entities/lid_status.entity';
import { ReasonLidModule } from './reason_lid/reason_lid.module';
import { ReasonLid } from './reason_lid/entities/reason_lid.entity';
import { StageModule } from './stage/stage.module';
import { TargetModule } from './target/target.module';
import { LidModule } from './lid/lid.module';
import { Stage } from './stage/entities/stage.entity';
import { Target } from './target/entities/target.entity';
import { Lid } from './lid/entities/lid.entity';
import { RoleModule } from './role/role.module';
import { StuffModule } from './stuff/stuff.module';
import { StuffRoleModule } from './stuff_role/stuff_role.module';
import { Role } from './role/entities/role.entity';
import { Stuff } from './stuff/entities/stuff.entity';
import { StuffRole } from './stuff_role/entities/stuff_role.entity';
import { BranchModule } from './branch/branch.module';
import { GroupStuffModule } from './group_stuff/group_stuff.module';
import { GroupModule } from './group/group.module';
import { LessonModule } from './lesson/lesson.module';
import { StudentGroupModule } from './student_group/student_group.module';
import { StudentLessonModule } from './student_lesson/student_lesson.module';
import { StudentsModule } from './students/students.module';
import { PaymentModule } from './payment/payment.module';
import { Branch } from './branch/entities/branch.entity';
import { Group } from './group/entities/group.entity';
import { GroupStuff } from './group_stuff/entities/group_stuff.entity';
import { Lesson } from './lesson/entities/lesson.entity';
import { StudentGroup } from './student_group/entities/student_group.entity';
import { Student } from './students/entities/student.entity';
import { StudentLesson } from './student_lesson/entities/student_lesson.entity';
import { Payment } from './payment/entities/payment.entity';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';


@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver:ApolloDriver,
      autoSchemaFile:'schema.gql',
      sortSchema:true,
      playground:true
    }),
   TypeOrmModule.forRoot({
  type:"postgres",
   port: Number(process.env.PG_PORT),
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DB,
  host: process.env.PG_HOST,
  entities:[__dirname+'dist/**/*.entity{.ts,.js}'],
        synchronize:true,
        autoLoadEntities:true,
        logging:true
  // synchronize: true,
  // entities: [LidStatus,ReasonLid,Stage,Target,Lid,Role,Stuff,
  //   StuffRole,Branch,Group,GroupStuff,Lesson,StudentGroup,Student,StudentLesson,Payment],
    }),
   LidStatusModule,
   ReasonLidModule,
   StageModule,
   TargetModule,
   LidModule,
   RoleModule,
   StuffModule,
   StuffRoleModule,
   BranchModule,
   GroupStuffModule,
   GroupModule,
   LessonModule,
   StudentGroupModule,
   StudentLessonModule,
   StudentsModule,
   PaymentModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
