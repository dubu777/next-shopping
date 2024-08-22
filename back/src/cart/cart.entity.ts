import { Product } from 'src/product/product.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, BaseEntity } from 'typeorm';

@Entity()
export class Cart extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @ManyToOne(() => Product, { cascade: true })
  product: Product;
}
