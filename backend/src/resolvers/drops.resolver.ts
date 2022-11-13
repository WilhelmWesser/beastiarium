import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DropsCreateDto } from 'src/common/types/types';
import { DropsService } from 'src/services/services';

@Resolver('drops')
export class DropsResolver {
  constructor(private readonly service: DropsService) {}

  @Query('drops')
  dropById(@Args('id') id: number) {
    return this.service.getDropById(id);
  }

  @Query('drops')
  beastDrops(@Args('beastId') beastId: number) {
    return this.service.getBeastDrops(beastId);
  }

  @Mutation('drops')
  createDrop(@Args('dropDto') dropDto: DropsCreateDto) {
    return this.service.createDrop(dropDto);
  }

  @Mutation('drops')
  deleteDrop(@Args('id') id: number) {
    return this.service.deleteDrop(id);
  }
}