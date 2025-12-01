import 'dotenv/config';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ?? 3000;
  const host = process.env.HOST ?? '0.0.0.0';

  console.log(
    `🌱 GreenBuddy Service will be starting on http://${host}:${port} from ${process.env.NODE_ENV} environment
    host from env is ${process.env.HOST}, port from env is ${process.env.PORT}`,
  );

  app.enableCors({
    origin: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen(port, host);
  console.log(`DEBUG: host=${host}, port=${port}`);
  const url = await app.getUrl();
  console.log(`🌱 GreenBuddy Service is running on ${url}`);
}
bootstrap();
