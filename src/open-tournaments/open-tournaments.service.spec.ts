import { Test, TestingModule } from '@nestjs/testing';
import { OpenTournamentsService } from './open-tournaments.service';

describe('OpenTournamentsService', () => {
  let service: OpenTournamentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpenTournamentsService],
    }).compile();

    service = module.get<OpenTournamentsService>(OpenTournamentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
