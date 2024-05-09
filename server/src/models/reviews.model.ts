import {
  Table,
  Column,
  Model,
  DataType,
  AllowNull,
  ForeignKey,
  CreatedAt,
  UpdatedAt,
  BelongsTo,
} from "sequelize-typescript";
import User from "./users.model";
import Product from "./product.model";

@Table({
  timestamps: true,
  tableName: "reviews",
  modelName: "Review",
})
class Review extends Model {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  declare id: string;

  @AllowNull(false)
  @ForeignKey(() => User)
  @Column({ type: DataType.UUID })
  declare user_id: string;

  @BelongsTo(() => User)
  user!: User;

  @AllowNull(false)
  @ForeignKey(() => Product)
  @Column({ type: DataType.UUID })
  product_id: Product;

  @BelongsTo(() => Product)
  product!: Product

  @Column({ type: DataType.STRING })
  declare comment: string;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;
};

export default Review;
