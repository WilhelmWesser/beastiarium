import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LocationsCreateDto } from 'src/common/types/types';
import { LocationsService } from 'src/services/services';

@Resolver('locations')
export class LocationsResolver {
  constructor(private readonly service: LocationsService) {}

  @Query('locations')
  dropById(@Args('id') id: number) {
    return this.service.getLocationById(id);
  }

  @Query('locations')
  beastDrops(@Args('beastDetailsId') beastDetailsId: number) {
    return this.service.getBeastLocations(beastDetailsId);
  }

  @Mutation('locations')
  createDrop(@Args('locationDto') locationDto: LocationsCreateDto) {
    return this.service.createLocation(locationDto);
  }

  @Mutation('locations')
  deleteDrop(@Args('id') id: number) {
    return this.service.deleteLocation(id);
  }
}
