import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { Cart } from './cart.entity';
import { Product } from 'src/product/product.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Cart, Product])],
  providers: [CartService],
  controllers: [CartController],
})
export class CartModule {}