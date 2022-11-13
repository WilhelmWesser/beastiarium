import { Module } from '@nestjs/common';
import { LocationsResolver } from 'src/resolvers/resolvers';
import { PrismaService } from 'src/services/services';

@Module({
  imports: [],
  controllers: [],
  providers: [PrismaService, LocationsResolver],
})
export class LocationsModule {}
