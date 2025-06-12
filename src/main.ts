import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: process.env.GRPC_URL,
      package: process.env.GRPC_PACKAGE_NAME || 'comment',
      protoPath: join(__dirname, '../proto/comment.proto')
    }
  });
  await app.listen();
}
bootstrap();
