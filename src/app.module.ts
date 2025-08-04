import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SkillsModule } from './skills/skills.module';
import { ExchangesModule } from './exchanges/exchanges.module';
import { ReviewsModule } from './reviews/reviews.module';

@Module({
  imports: [UsersModule, SkillsModule, ExchangesModule, ReviewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
