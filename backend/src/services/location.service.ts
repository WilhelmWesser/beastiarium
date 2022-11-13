import { Injectable } from '@nestjs/common';
import {
  LocationsCreateDto,
  LocationsGetAllItem,
} from 'src/common/types/types';
import { PrismaService } from './services';

@Injectable()
export class LocationsService {
  constructor(private prisma: PrismaService) {}

  getLocationById(id: number): Promise<LocationsGetAllItem | null> {
    return this.prisma.location.findUnique({
      select: {
        id: true,
        name: true,
      },
      where: {
        id,
      },
    });
  }

  async getBeastLocations(
    beastDetailsId: number,
  ): Promise<LocationsGetAllItem[]> {
    const locationsDtos = await this.prisma.beastDetailsToLocations.findMany({
      where: {
        beastDetailsId,
      },
      select: {
        Location: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return locationsDtos.map((dto) => dto.Location);
  }

  createLocation(location: LocationsCreateDto): Promise<LocationsGetAllItem> {
    const { name } = location;
    return this.prisma.location.create({
      data: {
        name,
      },
    });
  }

  deleteLocation(id: number): Promise<LocationsGetAllItem> {
    return this.prisma.location.delete({
      where: {
        id,
      },
    });
  }
}
