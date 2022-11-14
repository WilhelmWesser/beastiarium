import { Injectable } from '@nestjs/common';
import {
  DropsCreateDto,
  DropsGetAllItemResponseDto,
} from 'src/common/types/types';
import { PrismaService } from './services';

@Injectable()
export class DropService {
  constructor(private prisma: PrismaService) {}

  getDropById(id: number): Promise<DropsGetAllItemResponseDto | null> {
    return this.prisma.drop.findUnique({
      select: {
        id: true,
        name: true,
      },
      where: {
        id,
      },
    });
  }

  async getBeastDrops(
    beastDetailsId: number,
  ): Promise<DropsGetAllItemResponseDto[]> {
    const dropsDtos = await this.prisma.beastDetailsToDrops.findMany({
      where: {
        beastDetailsId,
      },
      select: {
        Drop: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return dropsDtos.map((dropDto) => dropDto.Drop);
  }

  createDrop(drop: DropsCreateDto): Promise<DropsGetAllItemResponseDto> {
    const { name } = drop;
    return this.prisma.drop.create({
      data: {
        name,
      },
    });
  }

  deleteDrop(dropId: number): Promise<DropsGetAllItemResponseDto> {
    return this.prisma.drop.delete({
      where: {
        id: dropId,
      },
    });
  }
}
