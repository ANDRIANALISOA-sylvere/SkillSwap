import { Module } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { SkillsController } from './skills.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Skills } from './entity/skills.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Skills])],
  providers: [SkillsService],
  controllers: [SkillsController],
})
export class SkillsModule {}
