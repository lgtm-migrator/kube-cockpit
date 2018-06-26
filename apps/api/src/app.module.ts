import { Module } from '@nestjs/common';
import { ProjectModule } from './project/project.module';
import { ConfigModule } from './config';
import { DatabaseModule } from './database';

@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    ProjectModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
