import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './health/health.controller';
import { HealthService } from './health/health.service';
import { PlantModule } from './plant/plant.module';
import { Plants } from './types/plant/plant.type';

export var plants: Plants = [];
@Module({
  imports: [PlantModule],
  controllers: [AppController, HealthController],
  providers: [AppService, HealthService],
})
export class AppModule {}
