import { Controller, Get, Param } from '@nestjs/common';
import { OpenTournamentsService } from './open-tournaments.service';
import { TournamentDto } from './tournament-dto';

@Controller('open-tournaments')
export class OpenTournamentsController {
  constructor(private readonly service: OpenTournamentsService) {}
  @Get(':year')
  async getTournamentsByYear(
    @Param('year') year: string,
  ): Promise<TournamentDto[]> {
    return await this.service.getTournamentsByYear(year);
  }
}
