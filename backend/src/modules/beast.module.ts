import { Module } from '@nestjs/common';
import { BeastResolver } from 'src/resolvers/resolvers';
import { PrismaService } from 'src/services/services';

@Module({
  imports: [],
  controllers: [],
  providers: [PrismaService, BeastResolver],
})
export class BeastModule {}
