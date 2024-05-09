import { 
    Table, 
    Column, 
    Model, 
    DataType,
    AllowNull,
    ForeignKey,
    BelongsTo,
    CreatedAt,
    UpdatedAt,
    AfterCreate
  } from "sequelize-typescript";

import Order from "./order.model";
import Product from "./product.model";
  
  @Table({
    timestamps: true,
    tableName: "order_products",
    modelName: "OrderProduct",
  })
  
  class OrderProduct extends Model {

    @Column({
      primaryKey: true,
      type: DataType.UUID,
      defaultValue: DataType.UUIDV4,
    })
    declare id: string;

    @AllowNull(false)
    @ForeignKey(() => Order)
    @Column({ type: DataType.UUID })
    declare order_id: string

    @BelongsTo(() => Order)
    order!: Order
    
    @AllowNull(false)
    @ForeignKey(() => Product)
    @Column({ type: DataType.UUID })
    declare product_id: string

    @BelongsTo(() => Product)
    product!: Product
  
    @AllowNull(false)
    @Column({
      type: DataType.DECIMAL(10,2),
    })
    declare price: number;

    @AllowNull(false)
    @Column({
      type: DataType.INTEGER,
    })
    declare quantity: number;
  
    @AllowNull(false)
    @Column({
      type: DataType.DECIMAL(10,2),
    })
    declare sub_total: number;

    @CreatedAt
    created_at: Date;

    @UpdatedAt
    updated_at: Date;

    @AfterCreate
    static async updateStock(order_product: OrderProduct) {
      const product = await Product.findOne({where: {id:  order_product.product_id}});
      const newStock = product.stock - order_product.quantity;
      await product.update({stock: newStock});
      console.log("Stock updated successfully")
    }
  
  }
  
  export default OrderProduct;
  