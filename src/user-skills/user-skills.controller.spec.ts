import { Test, TestingModule } from '@nestjs/testing';
import { UserSkillsController } from './user-skills.controller';

describe('UserSkillsController', () => {
  let controller: UserSkillsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserSkillsController],
    }).compile();

    controller = module.get<UserSkillsController>(UserSkillsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
