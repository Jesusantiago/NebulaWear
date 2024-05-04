import { 
    Table, 
    Column, 
    Model, 
    DataType,
    HasMany,
    CreatedAt,
    UpdatedAt,
    AllowNull,
    ForeignKey,
    BelongsTo
  } from "sequelize-typescript";
import OrderProduct from "./order_product.model";
import User from "./users.model";
  
  @Table({
    timestamps: true,
    tableName: "orders",
    modelName: "Order",
  })
  class Order extends Model {
    @Column({
      primaryKey: true,
      type: DataType.UUID,
      defaultValue: DataType.UUIDV4,
    })
    declare id: string;

    @AllowNull(false)
    @ForeignKey(() => User)
    @Column({ type: DataType.UUID })
    declare user_id: string

    @BelongsTo(() => User)
    user: User
  
    @Column({
      type: DataType.STRING,
    })
    declare address: string;
  
    @Column({
      type: DataType.STRING,
    })
    declare payment: string;
  
    @Column({
      type: DataType.STRING,
      defaultValue: Date.now()
    })
    declare order_date: string;

    @CreatedAt
    created_at: Date;

    @UpdatedAt
    updated_at: Date;

    @HasMany(() => OrderProduct)
    order_products: OrderProduct[];

  }
  
  export default Order;
  