import { Test, TestingModule } from '@nestjs/testing';
import { PlantService } from './plant.service';
import { PrismaService } from 'src/database/prisma.service';
import { mock, describe, it, expect, beforeEach } from 'bun:test';
import type { Plant } from 'src/types/plant/plant.type';
import { NotFoundException } from '@nestjs/common';

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

describe('PlantService', () => {
  let service: PlantService;
  let prisma: typeof mockPrismaService;

  beforeEach(async () => {
    mockPrismaService.plant.create.mockClear();
    mockPrismaService.plant.findUnique.mockClear();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PlantService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<PlantService>(PlantService);
    prisma = mockPrismaService;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getPlantById', () => {
    it('should return a plant when found', async () => {
      const mockPlant = {
        id: 1,
        name: 'Ficus',
        mood: 'happy',
        lastActionAt: new Date('2026-01-01'),
      };
      prisma.plant.findUnique.mockResolvedValue(mockPlant);

      const result = await service.getPlantById(1);

      expect(result).toEqual(mockPlant);
      expect(prisma.plant.findUnique).toHaveBeenCalledWith({
        where: { id: 1 },
      });
    });

    it('should throw an error when plant is not found', async () => {
      prisma.plant.findUnique.mockResolvedValue(null);

      expect(service.getPlantById(999)).rejects.toThrow(NotFoundException);

      expect(prisma.plant.findUnique).toHaveBeenCalledWith({
        where: { id: 999 },
      });
    });
  });
});
