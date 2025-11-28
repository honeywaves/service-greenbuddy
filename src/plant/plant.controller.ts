import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { PlantService } from './plant.service';
import type { Plant } from 'src/types/plant/plant.type';
import { CreatePlantDto } from './dto/create-plant.dto';

@Controller('plant')
export class PlantController {
  constructor(private readonly plantService: PlantService) {}

  @Post()
  async postPlant(@Body() plantDTO: CreatePlantDto): Promise<Plant> {
    const newPlant = await this.plantService.createPlant(plantDTO);
    return newPlant;
  }

  @Get()
  getPlantWithoutId() {
    throw new BadRequestException('Plant ID is required');
  }

  @Get(':id')
  async getPlant(@Param('id', ParseIntPipe) id: number): Promise<Plant> {
    if (!id) throw new BadRequestException('Plant Id is required');

    return await this.plantService.getPlantById(id);
  }
}
