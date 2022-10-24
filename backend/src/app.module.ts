import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ENV } from './common/enums/enums';
import { join } from 'path';
import { PrismaService } from 'src/services/services';
import { AppResolver } from 'src/resolvers/app.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: ENV.APP.NODE_ENV === 'development',
      autoSchemaFile: join(process.cwd(), 'src/schemas/schema.gql'),
      installSubscriptionHandlers: true,
    }),
  ],
  controllers: [],
  providers: [PrismaService, AppResolver],
})
export class AppModule {}
