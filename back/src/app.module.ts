import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartModule } from './cart/cart.module';
import { ProductModule } from './product/product.module';
import { CouponModule } from './coupon/coupon.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '5296',
      database: 'shopping-cart',
      entities: [__dirname + '/**/*.entity.{js,ts}'],
      synchronize: true, // 운영환경에서 true 로 하면 DB가 날아갈수도 있다. 개발 환경에서만 true로 하자.
    }),
    CartModule,
    ProductModule,
    CouponModule,
    AuthModule,
    SeedModule,
  ],
  providers: [ConfigService],
})
export class AppModule {}
