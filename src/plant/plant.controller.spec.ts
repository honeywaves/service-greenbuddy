import { Test, TestingModule } from '@nestjs/testing';
import { PlantController } from './plant.controller';
import { PlantService } from './plant.service';
import { mock, describe, it, expect, beforeEach } from 'bun:test';
import { PrismaService } from 'src/database/prisma.service';
import { Plant } from 'src/types/plant/plant.type';

const mockPrismaService = {
  plant: {
    create: mock<(args: unknown) => Promise<Plant>>(() =>
      Promise.resolve({} as Plant),
    ),
    findUnique: mock<(args: unknown) => Promise<Plant | null>>(() =>
      Promise.resolve(null),
    ),
  },
};

describe('PlantController', () => {
  let controller: PlantController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlantController],
      providers: [
        PlantService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    controller = module.get<PlantController>(PlantController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
