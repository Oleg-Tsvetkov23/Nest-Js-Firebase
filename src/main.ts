import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Import firebase-admin
import * as admin from 'firebase-admin';
import * as path from 'path'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(3000);
}
bootstrap();
