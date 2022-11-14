import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { WeaknessesCreateDto } from 'src/common/types/types';
import { WeaknessService } from 'src/services/services';

@Resolver('weaknesses')
export class WeaknessesResolver {
  constructor(private readonly service: WeaknessService) {}

  @Query('weaknesses')
  weaknessById(@Args('id') id: number) {
    return this.service.getWeaknessById(id);
  }

  @Query('weaknesses')
  beastWeaknesses(@Args('beastDetailsId') beastDetailsId: number) {
    return this.service.getBeastWeaknesses(beastDetailsId);
  }

  @Mutation('weaknesses')
  createDrop(@Args('weaknessDto') weaknessDto: WeaknessesCreateDto) {
    return this.service.createWeakness(weaknessDto);
  }

  @Mutation('weaknesses')
  deleteDrop(@Args('id') id: number) {
    return this.service.deleteWeakness(id);
  }
}
