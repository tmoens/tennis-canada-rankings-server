import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { google } from 'googleapis';
import { TournamentDto } from './tournament-dto';
import { getLogger } from 'log4js';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];

const logger = getLogger('loadOpenTournaments');
@Injectable()
export class OpenTournamentsService {
  constructor(private configService: ConfigService) {}

  // Authentication required to read the spreadsheet.
  // It returns the spreadsheet manipulation API
  async authentication() {
    const auth = new google.auth.GoogleAuth({
      keyFilename: this.configService.get('GOOGLE_APPLICATION_CREDENTIALS'),
      scopes: SCOPES,
    });

    const sheets = google.sheets({
      version: 'v4',
      auth,
    });
    return { sheets };
  }

  // read the membership sheet and parse it into data objects
  async getTournamentsByYear(year: string): Promise<TournamentDto[] | null> {
    const { sheets } = await this.authentication();

    const response: any = await sheets.spreadsheets.values
      .get({
        spreadsheetId: this.configService.get('OPEN_TOURNAMENT_SHEET'),
        range: year,
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
    if (!response) {
      logger.info(`No tournaments found for year ${year}`);
      return [];
    }

    const rows: string[][] = response.data.values;
    const tournaments: TournamentDto[] = [];
    let index = 0;
    for (const row of rows) {
      index++;
      // skip the header line
      if (index === 1) {
        continue;
      }

      const t = new TournamentDto();
      if (row[0]) {
        t.name = row[0];
      } else {
        t.name = `missing at row ${index}`;
      }
      if (row[1]) {
        t.province = row[1];
      } else {
        t.province = `missing at row ${index}`;
      }
      if (row[2]) {
        t.mrating = row[2];
      } else {
        t.mrating = `-`;
      }
      if (row[3]) {
        t.frating = row[3];
      } else {
        t.frating = `-`;
      }
      tournaments.push(t);
    }
    logger.info(`${tournaments.length} tournaments found for year ${year}`);
    return tournaments;
  }
}
