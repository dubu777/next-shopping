import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Coupon } from './coupon.entity';
import { InjectRepository } from '@nestjs/typeorm';

export const mockCoupons = [
  {
    id: 1,
    code: 'FIXED5000',
    description: '5,000원 할인 쿠폰',
    discount: 5000,
    discountType: 'fixed',
    minimumAmount: 100000,
    expirationDate: '2024-11-30',
    isSelected: false,
  },
  {
    id: 3,
    code: 'FREESHIPPING',
    description: '3만원 이상 구매 시 무료 배송 쿠폰',
    discountType: 'freeShipping',
    minimumAmount: 30000,
    expirationDate: '2024-08-31',
    isSelected: false,
  },
  {
    id: 4,
    code: 'MIRACLESALE',
    description: '미라클모닝 30% 할인 쿠폰',
    discount: 30,
    discountType: 'percentage',
    availableStartTime: '04:00:00',
    availableEndTime: '07:00:00',
    expirationDate: '2024-07-31',
    isSelected: false,
  },
  {
    id: 5,
    code: '내맘대로',
    description: '내 맘대로',
    discount: 5000,
    discountType: 'fixed',
    minimumAmount: 30000,
    expirationDate: '2025-08-21',
    isSelected: false,
  },
  {
    id: 6,
    code: '내맘대로2',
    description: '50% 쿠폰',
    discountType: 'percentage',
    discount: 50,
    minimumAmount: 30000,
    expirationDate: '2024-12-30',
    isSelected: false,
  },
  {
    id: 1,
    code: 'FIXED5000',
    description: '10,000원 할인 쿠폰',
    discount: 10000,
    discountType: 'fixed',
    minimumAmount: 1000,
    expirationDate: '2024-11-30',
    isSelected: false,
  },
  {
    id: 1,
    code: 'FIXED50001',
    description: '5,000원 할인 쿠폰',
    discount: 5000,
    discountType: 'fixed',
    minimumAmount: 1000,
    expirationDate: '2024-11-30',
    isSelected: false,
  },
];


@Injectable()
export class CouponService {
  constructor(
    @InjectRepository(Coupon)
    private couponRepository: Repository<Coupon>) {}

    async onModuleInit() {
      await this.initializeData();
    }
  
    async initializeData() {
      await this.couponRepository.clear();
  
      for (const item of mockCoupons) {
        await this.couponRepository.save(item);
      }
    }

    async getCoupons() {
      return this.couponRepository.find();
    }
}
