import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { configure, getLogger } from 'log4js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const configService = app.get(ConfigService);
  await app.listen(configService.get('PORT'));
  configure('log4js_config.json');
  const logger = getLogger('main');
  logger.info(`Running on port ${configService.get<string>('PORT')}`);

}
bootstrap();
