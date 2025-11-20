import {
  BadRequestException,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { PlantService } from './plant.service';
import { Plant } from 'src/types/plant/plant.type';
import { plants } from 'src/app.module';

@Controller('plant')
export class PlantController {
  constructor(private readonly plantService: PlantService) {}

  @Post()
  postPlant() {
    const newPlant = this.plantService.createPlant();
    return newPlant;
  }

  @Get()
  getPlantWithoutId() {
    throw new BadRequestException('Plant ID is required');
  }

  @Get(':id')
  getPlant(@Param() params: any): Plant {
    if (!params.id) throw new BadRequestException('Plant Id is required');

    return this.plantService.getPlantById(params.id);
  }
}
