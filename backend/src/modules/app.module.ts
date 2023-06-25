import { join } from 'path';
import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ENV } from '../common/enums/enums';
import { PrismaService } from 'src/services/services';
import { AppResolver } from 'src/resolvers/app.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: ENV.APP.NODE_ENV === 'development',
      typePaths: ['src/schemas/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/schemas/graphql.ts'),
        outputAs: 'class',
      },
      installSubscriptionHandlers: true,
    }),
  ],
  controllers: [],
  providers: [PrismaService, AppResolver],
})
export class AppModule {}
