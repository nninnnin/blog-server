import { Module } from '@nestjs/common';
import { AppController, CatsController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';

@Module({
  imports: [PostModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
