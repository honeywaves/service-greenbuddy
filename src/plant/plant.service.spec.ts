import { Test, TestingModule } from '@nestjs/testing';
import { PlantService } from './plant.service';
import { plants } from 'src/plants.data';

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
});
