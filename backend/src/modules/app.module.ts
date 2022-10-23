import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLDefinitionsFactory, GraphQLModule } from "@nestjs/graphql";
import { ENV } from '../common/enums/enums';
import { join } from 'path';

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: ['src/data/schemas/*.graphql'],
  path: join(process.cwd(), 'src/data/schemas/ts-generated/graphql.ts'),
  outputAs: 'class',
  emitTypenameField: true,
  watch: true,
});

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: ENV.APP.NODE_ENV === 'development',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
