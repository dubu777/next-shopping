import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Coupon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  description: string;

  @Column({ type: 'float', nullable: true })
  discount: number;

  @Column()
  discountType: string;

  @Column({ type: 'float', nullable: true })
  minimumAmount: number;

  @Column()
  expirationDate: string;

  @Column()
  isSelected: boolean;

  @Column({ type: 'time', nullable: true })
  availableStartTime: string;

  @Column({ type: 'time', nullable: true })
  availableEndTime: string;
}