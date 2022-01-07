import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OpenTournamentsModule } from './open-tournaments/open-tournaments.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    OpenTournamentsModule,
    ConfigModule.forRoot({
      isGlobal: true,

      envFilePath: (process.env.NODE_ENV) ?
        `environments/${process.env.NODE_ENV}.env` :
        `environments/development.env`,
      validationSchema: Joi.object({
        PORT: Joi.number().default(3000),

        OPEN_TOURNAMENT_SHEET: Joi.string().required(),
        GOOGLE_APPLICATION_CREDENTIALS: Joi.string().required(),
      }),
      validationOptions: {
        allowUnknown: true,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
