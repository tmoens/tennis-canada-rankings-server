import { Test, TestingModule } from '@nestjs/testing';
import { OpenTournamentsController } from './open-tournaments.controller';

describe('OpenTournamentsController', () => {
  let controller: OpenTournamentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OpenTournamentsController],
    }).compile();

    controller = module.get<OpenTournamentsController>(OpenTournamentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
