import { Module } from '@nestjs/common';
import { WeaknessesResolver } from 'src/resolvers/resolvers';
import { PrismaService } from 'src/services/services';

@Module({
  imports: [],
  controllers: [],
  providers: [PrismaService, WeaknessesResolver],
})
export class WeaknessesModule {}
