import { Injectable } from '@nestjs/common';
import {
  WeaknessesCreateDto,
  WeaknessesGetAllItemResponseDto,
} from 'src/common/types/types';
import { PrismaService } from './services';

@Injectable()
export class WeaknessService {
  constructor(private prisma: PrismaService) {}

  getWeaknessById(id: number): Promise<WeaknessesGetAllItemResponseDto | null> {
    return this.prisma.weakness.findUnique({
      select: {
        id: true,
        name: true,
      },
      where: {
        id,
      },
    });
  }

  async getBeastWeaknesses(
    beastDetailsId: number,
  ): Promise<WeaknessesGetAllItemResponseDto[]> {
    const weaknessessDtos = await this.prisma.beastDetailsToWeaknesses.findMany(
      {
        where: {
          beastDetailsId,
        },
        select: {
          Weakness: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    );

    return weaknessessDtos.map((weaknessDto) => weaknessDto.Weakness);
  }

  createWeakness(
    weakness: WeaknessesCreateDto,
  ): Promise<WeaknessesGetAllItemResponseDto> {
    const { name } = weakness;
    return this.prisma.weakness.create({
      data: {
        name,
      },
    });
  }

  deleteWeakness(weaknessId: number): Promise<WeaknessesGetAllItemResponseDto> {
    return this.prisma.weakness.delete({
      where: {
        id: weaknessId,
      },
    });
  }
}
