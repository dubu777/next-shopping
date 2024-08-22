import { Module } from '@nestjs/common';
import { CouponService } from './coupon.service';
import { CouponController } from './coupon.controller';
import { Coupon } from './coupon.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Coupon])],
  providers: [CouponService],
  controllers: [CouponController]
})
export class CouponModule {}
