import { Module } from '@nestjs/common';
import { CommentModule } from './comment/comment.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from './configs/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    CommentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
