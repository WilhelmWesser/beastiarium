import { NestFactory } from '@nestjs/core';
import {AppModule} from './app.module';
import {Model} from 'objection'
import knexConfig from "../knexfile";
import {ENV} from "./common/enums/enums";
import Knex from "knex";

Model.knex(Knex(knexConfig[ENV.APP.NODE_ENV]))

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn']
  });

  await app.listen(ENV.APP.SERVER_PORT);
}
bootstrap();
