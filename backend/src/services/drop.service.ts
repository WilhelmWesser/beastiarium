import { Injectable } from '@nestjs/common';
import { PrismaService } from './services';
import { DropsGetAllItem } from 'shared/common/types/drops/drops';

@Injectable()
export class DropsService {
  constructor(private prisma: PrismaService) {}

  async getDropById(id: number): Promise<DropsGetAllItem | null> {
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
}
