import { Module } from '@nestjs/common';
import { UserSkillsService } from './user-skills.service';
import { UserSkillsController } from './user-skills.controller';

@Module({
  providers: [UserSkillsService],
  controllers: [UserSkillsController]
})
export class UserSkillsModule {}
