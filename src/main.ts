import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('Price, Alert and Swap API')  // Title of the documentation
    .setDescription('API for managing prices, alerts and swaps') // Description
    .setVersion('1.0')  // Version of your API
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // 'api' is the path to access Swagger UI

  await app.listen(5000);
}

bootstrap();
