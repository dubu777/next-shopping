import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { productData } from './data/productData';
import { Product } from 'src/product/product.entity';


@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async seed() {
    for (const item of productData) {
      const product = this.productRepository.create({
        id: item.product.id,
        name: item.product.name,
        price: item.product.price,
        imageUrl: item.product.imageUrl,
        category: item.product.category,
      });

      await this.productRepository.save(product);
    }

    console.log('Database seeded with initial products');
  }
}