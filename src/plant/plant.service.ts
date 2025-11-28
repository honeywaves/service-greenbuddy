import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import type { Plant } from 'src/types/plant/plant.type';
import { CreatePlantDto } from './dto/create-plant.dto';

@Injectable()
export class PlantService {
  constructor(private readonly prisma: PrismaService) {}
  async createPlant(plantDTO: CreatePlantDto): Promise<Plant> {
    const createdPlant = await this.prisma.plant.create({
      data: plantDTO,
    });

    return createdPlant;
  }

  async getPlantById(id: number): Promise<Plant> {
    const plant = await this.prisma.plant.findUnique({
      where: { id },
    });

    if (!plant) throw new NotFoundException(`🚫 Plant with ${id} not found`);

    return plant;
  }
}
