import { Product } from 'src/product/product.entity';
import { User } from 'src/auth/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, BaseEntity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity()
export class Cart extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;
  
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;

  @ManyToOne(() => Product, { cascade: true })
  product: Product;

  @ManyToOne(() => User, user => user.cart, { onDelete: 'CASCADE' })
  user: User;
}
