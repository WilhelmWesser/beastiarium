import { Module } from '@nestjs/common';
import { DropsResolver } from 'src/resolvers/resolvers';
import { PrismaService } from 'src/services/services';

@Module({
  imports: [],
  controllers: [],
  providers: [PrismaService, DropsResolver],
})
export class DropsModule {}
