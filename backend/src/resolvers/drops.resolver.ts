import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DropsCreateDto } from 'src/common/types/types';
import { DropService } from 'src/services/services';

@Resolver('drops')
export class DropsResolver {
  constructor(private readonly service: DropService) {}

  @Query('drops')
  dropById(@Args('id') id: number) {
    return this.service.getDropById(id);
  }

  @Query('drops')
  beastDrops(@Args('beastDetailsId') beastDetailsId: number) {
    return this.service.getBeastDrops(beastDetailsId);
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
