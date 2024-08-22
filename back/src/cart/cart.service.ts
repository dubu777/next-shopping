import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Cart } from './cart.entity';
import { Product } from 'src/product/product.entity';

export const mockOrderItemsWithDeliveryFee = [
  {
    id: 1,
    quantity: 1,
    product: {
      id: 1,
      name: '나이키',
      price: 500,
      imageUrl: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a28864e3-de02-48bb-b861-9c592bc9a68b/%EB%B6%81-1-ep-%EB%86%8D%EA%B5%AC%ED%99%94-UOp6QQvg.png',
      category: 'fashion',
    },
  },
  {
    id: 2,
    quantity: 2,
    product: {
      id: 2,
      name: '컨버스',
      price: 7000,
      imageUrl: 'https://sitem.ssgcdn.com/65/73/69/item/1000163697365_i1_750.jpg',
      category: 'fashion',
    },
  },
  {
    id: 3,
    quantity: 4,
    product: {
      id: 3,
      name: '아디다스',
      price: 6000,
      imageUrl: 'https://sitem.ssgcdn.com/74/25/04/item/1000373042574_i1_750.jpg',
      category: 'fashion',
    },
  },
];

@Injectable()
export class CartService implements OnModuleInit {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(Cart)
    private cartItemRepository: Repository<Cart>,
  ) {}

  async onModuleInit() {
    await this.initializeData();
  }

  async initializeData() {
    await this.cartItemRepository.query('TRUNCATE TABLE "cart_item" CASCADE');
    await this.productRepository.query('TRUNCATE TABLE "product" CASCADE');

    for (const item of mockOrderItemsWithDeliveryFee) {
      const product = await this.productRepository.save(item.product);
      await this.cartItemRepository.save({
        quantity: item.quantity,
        product: product,
      });
    }
  }

  async getCartItems(): Promise<Cart[]> {
    return this.cartItemRepository.find({relations: ['product']})
  }
}
