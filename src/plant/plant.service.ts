import { Injectable, NotFoundException } from '@nestjs/common';
import { plants } from 'src/app.module';
import { Plant } from 'src/types/plant/plant.type';

@Injectable()
export class PlantService {
  createPlant(): Plant {
    const newId = plants.length + 1;
    const newPlant: Plant = {
      id: newId.toString(),
      name: 'Plant ' + newId,
      mood: 'happy',
      lastActionAt: new Date(),
    };

    plants.push(newPlant);

    return newPlant;
  }

  getPlantById(id): Plant {
    const selectedPlant = plants.find((x: Plant) => x.id === id);

    if (!selectedPlant)
      throw new NotFoundException(`Plant with ID ${id} not found`);

    return selectedPlant;
  }
}
