import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './health/health.controller';
import { HealthService } from './health/health.service';
import { PlantModule } from './plant/plant.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [PlantModule, DatabaseModule],
  controllers: [AppController, HealthController],
  providers: [AppService, HealthService],
})
export class AppModule {}
