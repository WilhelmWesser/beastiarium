import { Injectable } from '@nestjs/common';
import { DropsCreateDto, DropsGetAllItem } from 'src/common/types/types';
import { PrismaService } from './services';

@Injectable()
export class DropsService {
  constructor(private prisma: PrismaService) {}

  getDropById(id: number): Promise<DropsGetAllItem | null> {
    return this.prisma.drop.findUnique({
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
      },
      where: {
        id,
      },
    });
  }

  async getBeastDrops(beastDetailsId: number): Promise<DropsGetAllItem[] | []> {
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

  createDrop(drop: DropsCreateDto): Promise<DropsGetAllItem> {
    const { name } = drop;
    return this.prisma.drop.create({
      data: {
        name,
      },
    });
  }

  deleteDrop(dropId: number): Promise<DropsGetAllItem> {
    return this.prisma.drop.delete({
      where: {
        id: dropId,
      },
    });
  }
}
