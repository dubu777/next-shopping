import { Controller, Get } from '@nestjs/common';
import { CouponService } from './coupon.service';

@Controller()
export class CouponController {
  constructor(private couponService: CouponService) {}


  @Get('/coupon')
  getCoupons() {
    return this.couponService.getCoupons()
  }
}
