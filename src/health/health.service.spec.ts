import { Test, TestingModule } from '@nestjs/testing';
import { HealthService } from './health.service';

describe('HealthService', () => {
  let service: HealthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HealthService],
    }).compile();

    service = module.get<HealthService>(HealthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('checkHealth', () => {
    const statusRes = { status: 'OK' };
    it('should return status ok', () => {
      const result = service.checkHealth();

      expect(result).toEqual(statusRes);
    });

    it('should always return the same status', () => {
      const res1 = service.checkHealth();
      const res2 = service.checkHealth();

      expect(res1).toEqual(statusRes);
      expect(res2).toEqual(statusRes);
    });
  });
});
