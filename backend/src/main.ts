import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ENV } from './common/enums/enums';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn'],
  });

  await app.listen(ENV.APP.SERVER_PORT);
}
bootstrap();
