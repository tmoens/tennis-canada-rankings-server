import { Module } from '@nestjs/common';
import { OpenTournamentsService } from './open-tournaments.service';
import { OpenTournamentsController } from './open-tournaments.controller';

@Module({
  providers: [OpenTournamentsService],
  controllers: [OpenTournamentsController],
})
export class OpenTournamentsModule {}
