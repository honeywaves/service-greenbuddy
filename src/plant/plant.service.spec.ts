import { Test, TestingModule } from '@nestjs/testing';
import { PlantService } from './plant.service';
import { plants } from 'src/plants.data';
import { NotFoundException } from '@nestjs/common/exceptions/not-found.exception';

describe('PlantService', () => {
  let service: PlantService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlantService],
    }).compile();

    service = module.get<PlantService>(PlantService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createPlant', () => {
    beforeEach(() => {
      plants.length = 0;
    });

    it('should create a plant', () => {
      expect(plants).toHaveLength(0);

      service.createPlant();

      expect(plants).toHaveLength(1);
    });

    it('should create a plant and have a good init', () => {
      expect(plants).toHaveLength(0);

      const result = service.createPlant();

      expect(result.id).toBe(1);
      expect(result.name).toBe('Plant 1');
      expect(result.mood).toBe('happy');
      expect(result.lastActionAt).toBeInstanceOf(Date);
      expect(plants).toHaveLength(1);
      expect(plants[0]).toBe(result);
    });

    it('should create two plant and increment the ID', () => {
      expect(plants).toHaveLength(0);

      const _ = service.createPlant();
      const res2 = service.createPlant();

      expect(res2.id).toBe(2);
      expect(plants[1]).toBe(res2);
    });
  });

  describe('getPlantById', () => {
    beforeEach(() => {
      plants.length = 0;
      service.createPlant();
      service.createPlant();
      service.createPlant();
    });

    it('should get a plant by id', () => {
      const plant = service.getPlantById(1);
      expect(plant).toBeDefined();
      expect(plant.id).toBe(1);
      expect(plant.name).toBe('Plant 1');
      expect(plant.mood).toBe('happy');
      expect(plant.lastActionAt).toBeInstanceOf(Date);
    });

    it('should get a plant by id and return the correct plant', () => {
      const plant = service.getPlantById(3);
      expect(plant).toBeDefined();
      expect(plant.id).toBe(plants[2].id);
      expect(plant.name).toBe(plants[2].name);
      expect(plant.mood).toBe(plants[2].mood);
      expect(plant.lastActionAt).toBe(plants[2].lastActionAt);
    });

    it('should throw an error if the plant is not found', () => {
      expect(() => service.getPlantById(4)).toThrow(NotFoundException);
    });
  });
});
