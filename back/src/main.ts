import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SeedService } from './seed/seed.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:5500', // 허용할 도메인
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  const seedService = app.get(SeedService)
  await seedService.seed()

  await app.listen(3000);
  console.log(`http://localhost:${3000}`);
}
bootstrap();
