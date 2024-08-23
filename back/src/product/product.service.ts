import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async getFilteredProducts(
    page: number,
    category?: string,
    sort?: 'latest' | 'priceAsc' | 'priceDesc',
  ): Promise<Product[]> {
    const perPage = 10;
    const offset = (page - 1) * perPage;

    let queryBuilder = this.productRepository.createQueryBuilder('product');

    if (category) {
      queryBuilder = queryBuilder.where('product.category = :category', { category });
    }

    if (sort) {
      if (sort === 'latest') {
        queryBuilder = queryBuilder.orderBy('product.createdAt', 'DESC');
      } else if (sort === 'priceAsc') {
        queryBuilder = queryBuilder.orderBy('product.price', 'ASC');
      } else if (sort === 'priceDesc') {
        queryBuilder = queryBuilder.orderBy('product.price', 'DESC');
      }
    }

    const products = await queryBuilder
      .take(perPage)
      .skip(offset)
      .getMany();

    return products;
  }
}