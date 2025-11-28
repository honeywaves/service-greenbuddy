import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import type { Plant } from 'src/types/plant/plant.type';

@Injectable()
export class PlantService {
  constructor(private readonly prisma: PrismaService) {}
  /*createPlant(): Plant {
    // TODO: Implement
  }*/

  async getPlantById(id: number): Promise<Plant> {
    const plant = await this.prisma.plant.findUnique({
      where: { id },
    });

    if (!plant) throw new NotFoundException(`🚫 Plant with ${id} not found`);

    return plant;
  }
}
