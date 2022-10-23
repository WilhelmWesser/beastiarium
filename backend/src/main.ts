import { NestFactory } from '@nestjs/core';
import {AppModule} from './modules/app.module';
import {ENV} from "./common/enums/enums";
import { PrismaService } from "./services/services";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn']
  });

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  await app.listen(ENV.APP.SERVER_PORT);
}
bootstrap();
