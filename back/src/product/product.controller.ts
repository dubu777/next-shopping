import { Controller, Get, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getProducts(
    @Query('page') page: number = 1, // 기본값으로 1페이지
    @Query('category') category?: string,
    @Query('sort') sort?: 'latest' | 'priceAsc' | 'priceDesc',
  ): Promise<Product[]> {
    return this.productService.getFilteredProducts(page, category, sort);
  }
}