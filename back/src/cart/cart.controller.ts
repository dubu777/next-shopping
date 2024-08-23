import { Body, Controller, Delete, Get, Patch, Post, UseGuards } from '@nestjs/common';
import { CartService } from './cart.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/@common/decorators/get-user.decorator';
import { User } from 'src/auth/user.entity';

@Controller('cart')
@UseGuards(AuthGuard())
export class CartController {
  constructor(private readonly cartService: CartService) {}

  // 1. 장바구니 아이템 가져오기
  @Get()
  getCartItems(@GetUser() user: User) {
    return this.cartService.getCartItems(user.id);
  }

  // 2. 장바구니에 상품 추가하기
  @Post('/add')
  addCartItem(
    @GetUser() user: User,
    @Body('productId') productId: number,
    @Body('quantity') quantity: number,
  ) {
    return this.cartService.addCartItem(user.id, productId, quantity);
  }

  // 3. 장바구니 상품 수량 수정하기
  @Patch('/update')
  updateCartItemQuantity(
    @GetUser() user: User,
    @Body('productId') productId: number,
    @Body('quantity') quantity: number,
  ) {
    return this.cartService.updateCartItemQuantity(user.id, productId, quantity);
  }

  // 4. 장바구니에서 상품 삭제하기
  @Delete('/remove')
  removeCartItem(
    @GetUser() user: User,
    @Body('productId') productId: number,
  ) {
    return this.cartService.removeCartItem(user.id, productId);
  }
}
