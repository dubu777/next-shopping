import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from './cart.entity';
import { Product } from 'src/product/product.entity';
import { User } from 'src/auth/user.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private cartRepository: Repository<Cart>,

    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  // 1. 장바구니 아이템 가져오기
  async getCartItems(userId: number): Promise<Cart[]> {
    return this.cartRepository.find({
      where: { user: { id: userId } },
      relations: ['product'],
    });
  }

  // 2. 장바구니에 상품 추가하기
  async addCartItem(userId: number, productId: number, quantity: number): Promise<Cart> {
    const product = await this.productRepository.findOneBy({ id: productId });
    if (!product) {
      throw new NotFoundException('상품을 찾을 수 없습니다.');
    }

    let cartItem = await this.cartRepository.findOne({
      where: { user: { id: userId }, product: { id: productId } },
    });

    if (cartItem) {
      cartItem.quantity += quantity;
    } else {
      cartItem = this.cartRepository.create({
        user: { id: userId } as User,
        product,
        quantity,
      });
    }

    return this.cartRepository.save(cartItem);
  }

  // 3. 장바구니 상품 수량 수정하기
  async updateCartItemQuantity(userId: number, productId: number, quantity: number): Promise<Cart> {
    const cartItem = await this.cartRepository.findOne({
      where: { user: { id: userId }, product: { id: productId } },
    });

    if (!cartItem) {
      throw new NotFoundException('장바구니에 해당 상품이 없습니다.');
    }

    cartItem.quantity = quantity;
    return this.cartRepository.save(cartItem);
  }

  // 4. 장바구니에서 상품 삭제하기
  async removeCartItem(userId: number, productId: number): Promise<void> {
    const result = await this.cartRepository.delete({
      user: { id: userId },
      product: { id: productId },
    });

    if (result.affected === 0) {
      throw new NotFoundException('장바구니에 해당 상품이 없습니다.');
    }
  }
}